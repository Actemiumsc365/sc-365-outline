import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// SETUP PATHS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '../');
const DOCFX_JSON_PATH = path.join(ROOT_DIR, 'docfx.json');
const CSS_PATH = path.join(ROOT_DIR, 'templates/custom/styles/main.css');

console.log("🔧 Repairing docfx.json and linking Logo...");

// =============================================================================
// 1. WRITE A CLEAN, VALID docfx.json
// =============================================================================
// This overwrites the corrupted file with a known working configuration.
const cleanConfig = {
  "build": {
    "content": [
      {
        "files": ["articles/**.md", "toc.yml"]
      },
      {
        "files": ["index.md"],
        "src": "."
      }
    ],
    "resource": [
      {
        "files": ["images/**"]
      }
    ],
    "dest": "_site",
    "globalMetadata": {
      "_appTitle": "SupplyChain365",
      "_enableSearch": true,
      "_appLogoPath": "images/logo.png" 
    },
    "template": [
      "default",
      "templates/custom"
    ]
  }
};

fs.writeFileSync(DOCFX_JSON_PATH, JSON.stringify(cleanConfig, null, 2));
console.log("✅ docfx.json has been repaired and linked to 'images/logo.png'");


// =============================================================================
// 2. ENSURE CSS HANDLES THE LOGO
// =============================================================================
const logoCss = `
/* --- LOGO SIZING FIX --- */
img#logo {
    height: 32px; /* Fits standard navbar */
    width: auto;
    margin-top: -2px;
    max-width: 180px;
    display: block;
}

.navbar-brand {
    display: flex;
    align-items: center;
    padding: 0;
    margin-right: 20px;
    height: 100%;
}
`;

if (fs.existsSync(CSS_PATH)) {
    let currentCss = fs.readFileSync(CSS_PATH, 'utf8');
    if (!currentCss.includes("img#logo")) {
        fs.appendFileSync(CSS_PATH, logoCss);
        console.log("✅ main.css updated with logo styles.");
    } else {
        console.log("ℹ️ main.css already has logo styles.");
    }
} else {
    // If main.css is missing for some reason, create it
    if (!fs.existsSync(path.dirname(CSS_PATH))) {
         fs.mkdirSync(path.dirname(CSS_PATH), { recursive: true });
    }
    fs.writeFileSync(CSS_PATH, logoCss);
}

console.log("🚀 REPAIR COMPLETE.");
console.log("1. Ensure your logo file is named 'logo.png' inside the 'images' folder.");
console.log("2. Run: docfx docfx.json --serve");