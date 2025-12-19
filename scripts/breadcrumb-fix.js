import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// SETUP PATHS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '../');
const DOCFX_JSON_PATH = path.join(ROOT_DIR, 'docfx.json');
const CSS_PATH = path.join(ROOT_DIR, 'templates/custom/styles/main.css');

console.log("🍞 ENABLING & STYLING BREADCRUMBS...");

// =============================================================================
// 1. ENABLE BREADCRUMBS IN DOCFX.JSON
// =============================================================================
if (fs.existsSync(DOCFX_JSON_PATH)) {
    try {
        let rawContent = fs.readFileSync(DOCFX_JSON_PATH, 'utf8');
        // Remove BOM if present
        if (rawContent.charCodeAt(0) === 0xFEFF) rawContent = rawContent.slice(1);
        
        const config = JSON.parse(rawContent);

        // Ensure globalMetadata exists
        if (!config.build.globalMetadata) config.build.globalMetadata = {};

        // REMOVE the disable flag so breadcrumbs appear
        if (config.build.globalMetadata._disableBreadcrumb) {
            delete config.build.globalMetadata._disableBreadcrumb;
            console.log("✅ Removed '_disableBreadcrumb' flag from docfx.json");
        } else {
            console.log("ℹ️  Breadcrumbs were already enabled in docfx.json");
        }

        fs.writeFileSync(DOCFX_JSON_PATH, JSON.stringify(config, null, 2));
    } catch (e) {
        console.error("❌ Error updating docfx.json:", e);
    }
}

// =============================================================================
// 2. ADD "DARK BLUE" BREADCRUMB STYLES TO MAIN.CSS
// =============================================================================
const breadcrumbCss = `
/* ==========================================================================
   BREADCRUMB NAVIGATION (Dark Blue Style)
   ========================================================================== */
/* The main bar container */
.subnav {
    background-color: #002050 !important; /* Dark Blue matching screenshot */
    color: #ffffff !important;
    border-bottom: 1px solid #001535;
    min-height: 40px; /* Force height */
    margin-bottom: 0 !important;
}

/* Ensure the container inside aligns correctly */
.subnav .container {
    width: 100% !important;
    max-width: 1400px !important; /* Match your main layout width */
    padding: 0 40px !important;
}

/* The List Items */
.breadcrumb {
    background-color: transparent !important; /* Remove default grey bg */
    padding: 10px 0 !important;
    margin: 0 !important;
    font-size: 14px;
}

/* Links (Home, Knowledge Base, etc) */
.breadcrumb > li > a {
    color: #ffffff !important; /* White Text */
    font-weight: 600;
    text-decoration: none;
}
.breadcrumb > li > a:hover {
    color: #ffd700 !important; /* Gold on hover */
    text-decoration: underline;
}

/* The active page (Last item) */
.breadcrumb > li.active {
    color: #aebfd6 !important; /* Light blue-grey for current page */
}

/* The Slash Separator (/) */
.breadcrumb > li + li:before {
    color: #ffffff !important;
    content: ">" !important; /* Replace slash with Arrow */
    opacity: 0.6;
    padding: 0 8px;
}

/* Fix positioning */
.body-content {
    margin-top: 20px !important; 
}
`;

try {
    let currentCss = fs.readFileSync(CSS_PATH, 'utf8');
    // Prevent duplicate appending
    if (!currentCss.includes("BREADCRUMB NAVIGATION")) {
        fs.appendFileSync(CSS_PATH, breadcrumbCss);
        console.log("✅ CSS updated: Breadcrumbs are now Dark Blue & White.");
    } else {
        console.log("ℹ️  Breadcrumb styles already exist.");
    }
} catch (e) {
    console.error("❌ Could not update CSS:", e);
}

console.log("🚀 DONE. Run: docfx docfx.json --serve");