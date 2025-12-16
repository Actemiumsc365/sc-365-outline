import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const client = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: { Authorization: `Bearer ${process.env.OUTLINE_API_TOKEN}` }
});

async function listCollections() {
    try {
        console.log("🔍 Listing all collections...");
        const res = await client.post('/collections.list');
        
        if (res.data.data.length === 0) {
            console.log("⚠️ No collections found. Check your API Token permissions.");
            return;
        }

        console.log("\n✅ FOUND COLLECTIONS:");
        res.data.data.forEach(col => {
            console.log(`----------------------------------------`);
            console.log(`📂 Name:  ${col.name}`);
            console.log(`🆔 ID:    ${col.id}`);
            console.log(`🔗 URL:   ${col.url}`);
        });

    } catch (error) {
        console.error("❌ API Error:", error.response ? error.response.data : error.message);
    }
}

listCollections();