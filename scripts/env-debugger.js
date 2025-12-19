import dotenv from 'dotenv';
import axios from 'axios';
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CONFIG
const OUTLINE_URL = 'http://localhost:3000/api';
const API_TOKEN = process.env.OUTLINE_API_TOKEN ? process.env.OUTLINE_API_TOKEN.trim() : "";

const client = axios.create({
    baseURL: OUTLINE_URL,
    headers: { Authorization: `Bearer ${API_TOKEN}` }
});

async function debug() {
    console.log("🕵️  DEBUGGING OUTLINE CONNECTION...");

    try {
        // 1. LIST ALL COLLECTIONS
        console.log("\n📚 Checking Collections...");
        const colRes = await client.post('/collections.list', { limit: 100 });
        const collections = colRes.data.data;

        if (collections.length === 0) {
            console.log("❌ No collections found. Check your API Key permissions.");
            return;
        }

        for (const col of collections) {
            console.log(`\n---------------------------------------------------`);
            console.log(`📂 Collection: "${col.name}"`);
            console.log(`   ID: ${col.id}`);
            console.log(`---------------------------------------------------`);

            // 2. LIST DOCUMENTS IN THIS COLLECTION
            const docRes = await client.post('/documents.list', { 
                collectionId: col.id,
                limit: 100 
            });
            const docs = docRes.data.data;

            if (docs.length === 0) {
                console.log("   (Empty - No published documents)");
            } else {
                docs.forEach(doc => {
                    console.log(`   📄 Document: "${doc.title}" (ID: ${doc.id})`);
                    if (!doc.publishedAt) console.log("      ⚠️  WARNING: Status is Draft/Archived?");
                });
            }
        }
        console.log("\n---------------------------------------------------");
        console.log("✅ Scan Complete.");

    } catch (error) {
        console.error("❌ API Error:", error.response?.data || error.message);
    }
}

debug();