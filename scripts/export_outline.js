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
// Trim to ensure no accidental spaces from .env
const API_TOKEN = process.env.OUTLINE_API_TOKEN ? process.env.OUTLINE_API_TOKEN.trim() : "";
const COLLECTION_ID = process.env.OUTLINE_COLLECTION_ID ? process.env.OUTLINE_COLLECTION_ID.trim() : "";

const OUTPUT_DIR = path.join(__dirname, '../articles');
const TOC_PATH = path.join(__dirname, '../toc.yml');

const client = axios.create({
    baseURL: OUTLINE_URL,
    headers: { Authorization: `Bearer ${API_TOKEN}` }
});

async function main() {
    console.log(`🚀 Starting Export for Collection ID: ${COLLECTION_ID}`);

    if (!API_TOKEN || !COLLECTION_ID) {
        console.error("❌ Error: Missing Token or ID in .env file.");
        return;
    }

    // 1. Clean Directories
    if (fs.existsSync(OUTPUT_DIR)) fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });

    try {
        // 2. Fetch All Documents (Using the working 'list' endpoint)
        console.log("📥 Fetching document list...");
        const res = await client.post('/documents.list', { 
            collectionId: COLLECTION_ID,
            limit: 100 
        });
        
        const docs = res.data.data;
        console.log(`✅ Found ${docs.length} documents. Processing content...`);

        // 3. Process Documents & Build Tree
        const docMap = new Map();
        const rootItems = [];

        // First pass: Download content and create map entries
        for (const doc of docs) {
            // Fetch full content (including markdown)
            const docDetails = await client.post('/documents.info', { id: doc.id });
            const fullDoc = docDetails.data.data;

            const safeTitle = slugify(fullDoc.title, { lower: true, strict: true });
            const fileName = `${safeTitle}.md`;

            console.log(`   📄 Writing: ${fileName}`);

            // Write Markdown File
            const fileContent = `---
uid: ${fullDoc.id}
title: "${fullDoc.title.replace(/"/g, '\\"')}"
---

${fullDoc.text}
`;
            fs.writeFileSync(path.join(OUTPUT_DIR, fileName), fileContent);

            // Prepare TOC Item
            const tocItem = {
                name: fullDoc.title,
                href: `articles/${fileName}`,
                items: [] // Will hold children
            };

            // Store in map for hierarchy building
            docMap.set(fullDoc.id, { 
                item: tocItem, 
                parentId: fullDoc.parentDocumentId 
            });
        }

        // Second pass: Reconstruct Hierarchy
        docMap.forEach((node, id) => {
            if (node.parentId && docMap.has(node.parentId)) {
                // If it has a parent, push this item into the parent's "items" array
                docMap.get(node.parentId).item.items.push(node.item);
            } else {
                // If no parent (or parent not found), it is a root item
                rootItems.push(node.item);
            }
        });

        // Cleanup: Remove empty "items" arrays from TOC to keep it clean
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

        // 4. Write TOC.yml
        const finalToc = cleanToc(rootItems);
        fs.writeFileSync(TOC_PATH, yaml.dump(finalToc));
        console.log("✅ Export Complete! TOC structure rebuilt.");

    } catch (error) {
        console.error("❌ Export Failed:", error.response?.data || error.message);
    }
}

main();