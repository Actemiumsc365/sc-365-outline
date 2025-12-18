import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 1. SETUP PATHS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '../');
const TEMPLATE_DIR = path.join(ROOT_DIR, 'templates/custom/styles');

if (!fs.existsSync(TEMPLATE_DIR)) {
    fs.mkdirSync(TEMPLATE_DIR, { recursive: true });
}

console.log(`🔧 Applying Microsoft Learn (.NET) Layout to: ${ROOT_DIR}`);

// =============================================================================
// 2. CSS: THE MICROSOFT LEARN 3-COLUMN LAYOUT
// =============================================================================
const mainCssContent = `
/* --- 1. CORE VARIABLES --- */
:root {
  --ms-blue: #0078d4;
  --ms-blue-hover: #106ebe;
  --ms-black: #171717;
  --ms-gray-60: #605e5c;
  --ms-gray-10: #f3f2f1;
  --ms-white: #ffffff;
  --ms-border: #e1dfdd;
  --container-width: 100%; /* Use full width like MS Learn */
}

/* --- 2. GLOBAL RESET --- */
body {
  font-family: 'Segoe UI', -apple-system, sans-serif;
  color: var(--ms-black);
  background-color: var(--ms-white) !important; /* Pure White Background */
  margin: 0;
}

#wrapper, .body-content, .main-container {
    background-color: transparent !important;
    margin-top: 0 !important;
    padding-top: 0 !important;
}

a { color: var(--ms-blue); text-decoration: none; }
a:hover { color: var(--ms-blue-hover); text-decoration: underline; }

/* --- 3. LAYOUT GRID (The 3 Columns) --- */
/* This restores the Left TOC and Right Affix */

/* Main Container */
.container {
    max-width: 1600px; /* Wide layout */
    width: 95%;
    padding-left: 15px;
    padding-right: 15px;
}

/* Left Sidebar (Table of Contents) */
.toc-side, .col-md-2 {
    display: block !important; /* Force Visible */
    background-color: #f9f9f9; /* Slight gray for TOC area like docs */
    border-right: 1px solid var(--ms-border);
    padding-top: 20px;
    height: 100vh;
    overflow-y: auto;
    position: sticky;
    top: 60px; /* Below Navbar */
}

/* Right Sidebar (In this Article) */
.sideaffix, .col-md-hidden-xs, .col-md-2[role="complementary"] {
    display: block !important; /* Force Visible */
    padding-top: 20px;
    font-size: 13px;
    border-left: 1px solid transparent; 
}

/* Center Content */
.article-grid-container { display: none; } /* Remove old custom grid */
.col-md-8, .col-md-10 {
    padding: 40px 60px; /* Generous padding */
    background: var(--ms-white);
}

/* --- 4. ARTICLE STYLING (.NET Look) --- */
.article h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 24px;
    margin-top: 0;
    color: var(--ms-black);
    border: none;
}

.article h2 {
    font-size: 28px;
    font-weight: 600;
    margin-top: 48px;
    margin-bottom: 16px;
    border-bottom: 1px solid var(--ms-border);
    padding-bottom: 8px;
    color: var(--ms-black);
}

.article h3 {
    font-size: 20px;
    font-weight: 600;
    margin-top: 32px;
    margin-bottom: 8px;
}

.article p {
    font-size: 16px;
    line-height: 1.6;
    color: #171717;
    margin-bottom: 20px;
    max-width: 900px; /* Readability limit */
}

/* Breadcrumbs */
#breadcrumb {
    margin-bottom: 16px;
    font-size: 13px;
    color: #666;
}
#breadcrumb a { color: #555; }
#breadcrumb a:hover { color: var(--ms-blue); }

/* --- 5. SIDEBAR STYLING --- */
/* Left TOC */
.sidetoc { background: transparent !important; }
.toc .nav > li > a {
    color: #171717;
    font-size: 14px;
    padding: 8px 0;
}
.toc .nav > li.active > a {
    font-weight: 700;
    color: var(--ms-black);
    border-left: 2px solid var(--ms-blue);
    padding-left: 10px;
}

/* Right Affix (In this article) */
.sideaffix h5 {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 11px;
    color: #666;
    margin-bottom: 10px;
}
.sideaffix ul { list-style: none; padding: 0; }
.sideaffix li { margin-bottom: 8px; }
.sideaffix li a { 
    color: #666; 
    text-decoration: none; 
    display: block;
    border-left: 1px solid var(--ms-border);
    padding-left: 12px;
}
.sideaffix li.active a {
    color: var(--ms-black);
    font-weight: 600;
    border-left: 2px solid var(--ms-blue);
}

/* --- 6. HOMEPAGE HERO (Keep Blue Only for Home) --- */
.ms-hero { 
    background-color: #0f2e46; 
    color: white; 
    padding: 80px 0 120px; 
    text-align: center; 
    margin-top: -20px;
    margin-bottom: 40px;
}
.ms-hero h1 { color: white !important; }
.ms-grid { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; padding: 0 20px; }
.learn-card { border: 1px solid #e1dfdd; padding: 24px; border-radius: 4px; background: white; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }

/* Hide Custom Blue Hero on Articles (We want White) */
.sc-article-hero { display: none !important; }
`;

fs.writeFileSync(path.join(TEMPLATE_DIR, 'main.css'), mainCssContent.trim());
console.log("✅ main.css updated (3-Column Layout Restored).");


// =============================================================================
// 3. JS: CLEANUP (Remove Blue Header Injection)
// =============================================================================
const mainJsContent = `
document.addEventListener("DOMContentLoaded", function() {
    // We REMOVED the logic that injects the blue header on articles.
    // This allows DocFX to render the standard layout (H1 in content),
    // which we styled to look like .NET docs in CSS.
    
    console.log("✅ Using Standard 3-Column Layout");
});
`;

fs.writeFileSync(path.join(TEMPLATE_DIR, 'main.js'), mainJsContent.trim());
console.log("✅ main.js updated (Removed custom header logic).");

console.log("🚀 FIXED! Run 'docfx docfx.json --serve'.");