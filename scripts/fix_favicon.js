import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// SETUP PATHS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '../');
const DOCFX_JSON_PATH = path.join(ROOT_DIR, 'docfx.json');

console.log("🎨 Configuring Tab Icon (Favicon)...");

if (fs.existsSync(DOCFX_JSON_PATH)) {
    try {
        // Read file and strip BOM if present
        let rawContent = fs.readFileSync(DOCFX_JSON_PATH, 'utf8');
        if (rawContent.charCodeAt(0) === 0xFEFF) {
            rawContent = rawContent.slice(1);
        }

        const docfxConfig = JSON.parse(rawContent);

        // Ensure Metadata object exists
        if (!docfxConfig.build.globalMetadata) {
            docfxConfig.build.globalMetadata = {};
        }

        // SET THE FAVICON PATH
        docfxConfig.build.globalMetadata._appFaviconPath = "images/favicon.ico";

        // Write changes
        fs.writeFileSync(DOCFX_JSON_PATH, JSON.stringify(docfxConfig, null, 2));
        console.log("✅ docfx.json updated: Linked to 'images/favicon.ico'");

    } catch (e) {
        console.error("❌ Error parsing docfx.json:", e.message);
    }
} else {
    console.error("❌ docfx.json not found!");
}

console.log("🚀 SUCCESS! Run: docfx docfx.json --serve");