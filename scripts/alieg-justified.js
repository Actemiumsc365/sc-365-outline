import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// SETUP PATHS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '../');
const CSS_PATH = path.join(ROOT_DIR, 'templates/custom/styles/main.css');

console.log("📐 UPDATING CSS: Justifying Text & Saving...");

// =============================================================================
// APPEND JUSTIFY CSS TO MAIN.CSS
// =============================================================================
const justifyCss = `
/* ==========================================================================
   TEXT ALIGNMENT: JUSTIFY
   ========================================================================== */
body, p, li, .net-hero p, .net-card p {
    text-align: justify !important;
    text-justify: inter-word !important; /* Makes spacing look cleaner */
}

/* Optional: Ensure headings remain Left-Aligned (usually looks better) */
h1, h2, h3, h4, h5, h6, .net-hero h1, .net-card-title {
    text-align: left !important;
}
`;

try {
    // Read current CSS
    let currentCss = fs.readFileSync(CSS_PATH, 'utf8');
    
    // Check if we already added it to prevent duplicates
    if (!currentCss.includes("TEXT ALIGNMENT: JUSTIFY")) {
        fs.appendFileSync(CSS_PATH, justifyCss);
        console.log("✅ Justify rules added to main.css");
    } else {
        console.log("ℹ️  Text is already justified.");
    }

} catch (e) {
    console.error("❌ Could not find main.css to update:", e);
}

console.log("🚀 CHANGES SAVED. Run: docfx docfx.json --serve");