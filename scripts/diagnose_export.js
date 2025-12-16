import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

// --- HARDCODED ID FOR TESTING ---
// We use the ID you found: 312cc252-4702-4291-9200-e1dfd680f2c8
const TEST_COLLECTION_ID = '312cc252-4702-4291-9200-e1dfd680f2c8'; 

const client = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: { Authorization: `Bearer ${process.env.OUTLINE_API_TOKEN}` }
});

async function diagnose() {
    console.log(`🔎 Diagnosing Collection ID: '${TEST_COLLECTION_ID}'`);

    // TEST 1: Check Info (Does the collection exist?)
    try {
        console.log("\n👉 Test 1: Fetching Collection Info...");
        const infoRes = await client.post('/collections.info', { id: TEST_COLLECTION_ID });
        console.log("✅ Success! Collection Name:", infoRes.data.data.name);
    } catch (e) {
        console.log("❌ Test 1 Failed:", e.response?.data || e.message);
    }

    // TEST 2: Check Documents List (Alternative to Structure)
    try {
        console.log("\n👉 Test 2: Fetching Document List (Flat)...");
        const listRes = await client.post('/documents.list', { collectionId: TEST_COLLECTION_ID });
        const docs = listRes.data.data;
        console.log(`✅ Success! Found ${docs.length} documents.`);
        if(docs.length > 0) console.log("   First doc:", docs[0].title);
    } catch (e) {
        console.log("❌ Test 2 Failed:", e.response?.data || e.message);
    }

    // TEST 3: Check Structure (The one that was failing)
    try {
        console.log("\n👉 Test 3: Fetching Structure (Tree)...");
        const structRes = await client.post('/collections.structure', { id: TEST_COLLECTION_ID });
        console.log("✅ Success! Structure retrieved.");
    } catch (e) {
        console.log("❌ Test 3 Failed:", e.response?.data || e.message);
    }
}

diagnose();