import dotenv from 'dotenv';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import slugify from 'slugify';
import yaml from 'js-yaml'; 
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- CONFIGURATION ---
const OUTLINE_URL = 'http://localhost:3000/api';
const API_TOKEN = process.env.OUTLINE_API_TOKEN ? process.env.OUTLINE_API_TOKEN.trim() : "";
const COLLECTION_ID = process.env.OUTLINE_COLLECTION_ID ? process.env.OUTLINE_COLLECTION_ID.trim() : "";

const OUTPUT_DIR = path.join(__dirname, '../articles');
// We write a separate TOC to avoid breaking your manual one
const NEW_TOC_PATH = path.join(__dirname, '../toc_from_outline.yml'); 

const client = axios.create({
    baseURL: OUTLINE_URL,
    headers: { Authorization: `Bearer ${API_TOKEN}` }
});

async function main() {
    console.log(`🚀 Starting FOLDER-AWARE Export for Collection ID: ${COLLECTION_ID}`);

    if (!API_TOKEN || !COLLECTION_ID) {
        console.error("❌ Error: Missing Token or ID in .env file.");
        return;
    }

    // 1. Ensure root directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    try {
        // 2. Fetch All Documents
        console.log("📥 Fetching all documents...");
        const res = await client.post('/documents.list', { 
            collectionId: COLLECTION_ID,
            limit: 100 
        });
        
        const docs = res.data.data;
        console.log(`✅ Found ${docs.length} documents.`);

        // 3. Build an ID Map to resolve Parents/Folders
        const docLookup = new Map();
        docs.forEach(doc => {
            docLookup.set(doc.id, doc);
        });

        const tocMap = new Map(); // For building TOC structure
        const rootItems = [];

        // 4. Process Each Document
        for (const doc of docs) {
            // A. Calculate Folder Path based on Parents
            let currentParentId = doc.parentDocumentId;
            const folderStack = [];

            // Trace parents upwards to build the path (e.g., articles/models/warehouse)
            while (currentParentId && docLookup.has(currentParentId)) {
                const parentDoc = docLookup.get(currentParentId);
                const safeParentName = slugify(parentDoc.title, { lower: true, strict: true });
                folderStack.unshift(safeParentName); // Add to front
                currentParentId = parentDoc.parentDocumentId;
            }

            // Create the specific subfolder path
            const targetFolder = path.join(OUTPUT_DIR, ...folderStack);
            if (!fs.existsSync(targetFolder)) {
                fs.mkdirSync(targetFolder, { recursive: true });
            }

            // B. Fetch Full Content
            const docDetails = await client.post('/documents.info', { id: doc.id });
            const fullDoc = docDetails.data.data;

            const safeTitle = slugify(fullDoc.title, { lower: true, strict: true });
            const fileName = `${safeTitle}.md`;
            const fullPath = path.join(targetFolder, fileName); // Write into the SUBFOLDER

            // C. Prepare Relative Path for TOC (e.g. articles/models/file.md)
            const relativePath = path.join('articles', ...folderStack, fileName).replace(/\\/g, '/');

            // 🛑 SAFETY CHECK: If file exists, SKIP IT.
            if (fs.existsSync(fullPath)) {
                console.log(`⏩ Skipping Existing: ${relativePath}`);
                
                // Add to TOC Logic even if skipped
                const tocItem = {
                    name: fullDoc.title,
                    href: relativePath,
                    items: [] 
                };
                tocMap.set(fullDoc.id, { item: tocItem, parentId: fullDoc.parentDocumentId });
                continue; 
            }

            console.log(`🆕 Downloading: ${relativePath}`);

            const fileContent = `---
uid: ${fullDoc.id}
title: "${fullDoc.title.replace(/"/g, '\\"')}"
---

${fullDoc.text}
`;
            fs.writeFileSync(fullPath, fileContent);

            // Add to TOC Logic
            const tocItem = {
                name: fullDoc.title,
                href: relativePath,
                items: [] 
            };
            tocMap.set(fullDoc.id, { item: tocItem, parentId: fullDoc.parentDocumentId });
        }

        // 5. Build the TOC Structure
        tocMap.forEach((node, id) => {
            if (node.parentId && tocMap.has(node.parentId)) {
                tocMap.get(node.parentId).item.items.push(node.item);
            } else {
                rootItems.push(node.item);
            }
        });

        // Cleanup empty items arrays
        const cleanToc = (items) => {
            return items.map(item => {
                if (item.items.length === 0) {
                    delete item.items;
                } else {
                    item.items = cleanToc(item.items);
                }
                return item;
            });
        };

        const finalToc = cleanToc(rootItems);
        fs.writeFileSync(NEW_TOC_PATH, yaml.dump(finalToc));
        console.log("✅ Sync Complete.");
        console.log("👉 Files are now organized in folders matching Outline.");

    } catch (error) {
        console.error("❌ Export Failed:", error.response?.data || error.message);
    }
}

main();