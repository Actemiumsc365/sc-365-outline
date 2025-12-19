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
// SAFETY FIX: We write to a separate TOC file so we don't destroy your existing navigation
const NEW_TOC_PATH = path.join(__dirname, '../toc_from_outline.yml'); 

const client = axios.create({
    baseURL: OUTLINE_URL,
    headers: { Authorization: `Bearer ${API_TOKEN}` }
});

async function main() {
    console.log(`🚀 Starting ADD-ONLY Export for Collection ID: ${COLLECTION_ID}`);

    if (!API_TOKEN || !COLLECTION_ID) {
        console.error("❌ Error: Missing Token or ID in .env file.");
        return;
    }

    // 1. Ensure directory exists (Never delete it)
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    try {
        // 2. Fetch All Documents
        console.log("📥 Fetching document list from Outline...");
        const res = await client.post('/documents.list', { 
            collectionId: COLLECTION_ID,
            limit: 100 
        });
        
        const docs = res.data.data;
        console.log(`✅ Found ${docs.length} documents.`);

        const docMap = new Map();
        const rootItems = [];

        // 3. Process & Add ONLY NEW Files
        for (const doc of docs) {
            const docDetails = await client.post('/documents.info', { id: doc.id });
            const fullDoc = docDetails.data.data;

            const safeTitle = slugify(fullDoc.title, { lower: true, strict: true });
            const fileName = `${safeTitle}.md`;
            const fullPath = path.join(OUTPUT_DIR, fileName);

            // 🛑 SAFETY CHECK: If file exists, SKIP IT completely.
            if (fs.existsSync(fullPath)) {
                console.log(`⏩ Skipping Existing File: ${fileName} (Your local edits are safe)`);
                
                // We still add it to our internal map so we can build the 'new' TOC file correctly
                // but we DO NOT touch the physical file on disk.
                const tocItem = {
                    name: fullDoc.title,
                    href: `articles/${fileName}`,
                    items: [] 
                };
                docMap.set(fullDoc.id, { item: tocItem, parentId: fullDoc.parentDocumentId });
                continue; 
            }

            console.log(`🆕 Downloading NEW File: ${fileName}`);

            const fileContent = `---
uid: ${fullDoc.id}
title: "${fullDoc.title.replace(/"/g, '\\"')}"
---

${fullDoc.text}
`;
            fs.writeFileSync(fullPath, fileContent);

            // Prepare TOC Item for the new file
            const tocItem = {
                name: fullDoc.title,
                href: `articles/${fileName}`,
                items: [] 
            };

            docMap.set(fullDoc.id, { 
                item: tocItem, 
                parentId: fullDoc.parentDocumentId 
            });
        }

        // 4. Build a SEPARATE TOC file (toc_from_outline.yml)
        // We do NOT overwrite your main toc.yml.
        docMap.forEach((node, id) => {
            if (node.parentId && docMap.has(node.parentId)) {
                docMap.get(node.parentId).item.items.push(node.item);
            } else {
                rootItems.push(node.item);
            }
        });

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
        console.log("👉 Existing files were IGNORED."); 
        console.log("👉 New TOC structure saved to 'toc_from_outline.yml' (Use this to manually update your main toc.yml)");

    } catch (error) {
        console.error("❌ Export Failed:", error.response?.data || error.message);
    }
}

main();