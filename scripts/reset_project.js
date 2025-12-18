import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// SETUP PATHS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '../');
const TEMPLATE_DIR = path.join(ROOT_DIR, 'templates/custom/styles');
const DOCFX_JSON_PATH = path.join(ROOT_DIR, 'docfx.json');

// ENSURE DIRECTORIES EXIST
if (!fs.existsSync(TEMPLATE_DIR)) {
    fs.mkdirSync(TEMPLATE_DIR, { recursive: true });
}

console.log("🔥 INITIATING NUCLEAR RESET: MICROSOFT LAYOUT...");

// =============================================================================
// 1. DELETE CORRUPTED FILES
// =============================================================================
// We delete main.js because it was causing layout shifts and hidden elements.
const jsFile = path.join(TEMPLATE_DIR, 'main.js');
if (fs.existsSync(jsFile)) {
    fs.unlinkSync(jsFile);
    console.log("🗑️  Deleted corrupted main.js");
}

// =============================================================================
// 2. WRITE THE CLEAN MICROSOFT CSS
// =============================================================================
const cssContent = `
/* ==========================================================================
   MICROSOFT LEARN DESIGN SYSTEM (CLEAN RESET)
   ========================================================================== */
:root {
  --ms-blue: #0078d4;
  --ms-black: #171717;
  --ms-gray-sidebar: #f3f2f1;
  --ms-border: #e1dfdd;
  --navbar-height: 60px;
}

body {
  font-family: 'Segoe UI', -apple-system, sans-serif;
  color: var(--ms-black);
  background-color: #ffffff !important;
  margin: 0;
  padding-top: var(--navbar-height); /* Prevent content hiding behind nav */
}

/* RESET DOCFX WRAPPERS */
#wrapper, .body-content, .main-container {
    background-color: transparent !important;
    margin-top: 0 !important;
    padding-top: 0 !important;
}

/* ==========================================================================
   A. NAVIGATION BAR (Fixed, Visible, No Hamburger)
   ========================================================================== */
.navbar {
  background-color: #ffffff !important;
  border-bottom: 1px solid var(--ms-border) !important;
  height: var(--navbar-height) !important;
  position: fixed !important;
  top: 0; left: 0; right: 0;
  z-index: 99999 !important; /* Top of everything */
  display: flex !important;
  align-items: center !important;
  box-shadow: none !important;
}

/* Container inside Navbar */
.navbar .container {
    width: 100% !important;
    max-width: 100% !important;
    display: flex !important;
    align-items: center !important;
    padding: 0 20px !important;
}

/* LOGO FIX */
.navbar-header { float: none !important; margin: 0 !important; display: flex !important; align-items: center; }
.navbar-brand { float: none !important; padding: 0 !important; height: auto !important; margin-right: 20px !important; }
.navbar-brand img, img#logo {
    height: 32px !important;
    width: auto !important;
    display: block !important;
}

/* MENU LINKS (Force Horizontal) */
.navbar-collapse {
    display: block !important; /* Override Bootstrap collapse */
    width: auto !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0 !important;
}

.navbar-nav {
    float: none !important;
    margin: 0 !important;
    display: flex !important;
    flex-direction: row !important;
}

.navbar-nav > li { float: none !important; }

/* LINK STYLING */
.navbar-nav > li > a {
    color: #171717 !important;
    font-weight: 600 !important;
    font-size: 14px !important;
    padding: 20px 15px !important;
    background: transparent !important;
    border-bottom: 3px solid transparent;
}

/* ACTIVE/HOVER STATES */
.navbar-nav > li > a:hover,
.navbar-nav > li.active > a {
    color: var(--ms-blue) !important;
    background: transparent !important;
    border-bottom: 3px solid var(--ms-blue) !important;
}

/* HIDE HAMBURGER BUTTON */
.navbar-toggle { display: none !important; }

/* ==========================================================================
   B. ARTICLE LAYOUT (3-Column Grid)
   ========================================================================== */
/* LEFT SIDEBAR (TOC) */
.toc-side, .col-md-2 {
    display: block !important;
    position: fixed;
    top: var(--navbar-height);
    left: 0;
    bottom: 0;
    width: 260px;
    background: var(--ms-gray-sidebar);
    border-right: 1px solid var(--ms-border);
    overflow-y: auto;
    padding: 20px;
    z-index: 100;
}

/* MAIN CONTENT (Center) */
.col-md-8, .col-md-10 {
    display: block !important;
    margin-left: 260px; /* Offset for TOC */
    margin-right: 260px; /* Offset for Right Sidebar */
    width: auto;
    padding: 40px 60px;
    background: #fff;
    min-height: 90vh;
}

/* RIGHT SIDEBAR (In This Article) */
.sideaffix, .col-md-2[role="complementary"] {
    display: block !important;
    position: fixed;
    top: var(--navbar-height);
    right: 0;
    bottom: 0;
    width: 260px;
    background: #fff;
    padding: 20px;
    z-index: 100;
    border-left: 1px solid transparent; 
}
.sideaffix h5 { text-transform: uppercase; font-weight: 700; color: #666; font-size: 11px; margin-bottom: 10px; }

/* RESPONSIVE HIDING */
@media (max-width: 1200px) {
    .sideaffix { display: none !important; }
    .col-md-8, .col-md-10 { margin-right: 0; }
}
@media (max-width: 768px) {
    .toc-side { display: none !important; }
    .col-md-8, .col-md-10 { margin-left: 0; width: 100%; }
}

/* ==========================================================================
   C. TYPOGRAPHY
   ========================================================================== */
/* Hide old Freshdesk blue headers */
.sc-article-hero { display: none !important; }

h1 { font-size: 42px; font-weight: 700; color: #171717; margin-top: 0; margin-bottom: 24px; border: none; }
h2 { font-size: 26px; font-weight: 600; margin-top: 40px; margin-bottom: 16px; border-bottom: 1px solid #ddd; padding-bottom: 8px; }
a { color: var(--ms-blue); text-decoration: none; }
a:hover { text-decoration: underline; }

/* ==========================================================================
   D. HOMEPAGE HERO (Full Width Breakout)
   ========================================================================== */
.ms-hero, .kb-hero {
    background-color: #0f2e46;
    color: white;
    padding: 100px 0;
    text-align: center;
    
    /* Full Width Hack */
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    margin-top: 0;
}
.ms-hero h1 { color: white !important; font-size: 46px; }
`;

fs.writeFileSync(path.join(TEMPLATE_DIR, 'main.css'), cssContent.trim());
console.log("✅ main.css replaced with Clean Microsoft Design.");


// =============================================================================
// 3. FIX DOCFX.JSON (Enable Sidebars Globally)
// =============================================================================
if (fs.existsSync(DOCFX_JSON_PATH)) {
    try {
        let rawContent = fs.readFileSync(DOCFX_JSON_PATH, 'utf8');
        if (rawContent.charCodeAt(0) === 0xFEFF) rawContent = rawContent.slice(1); // Strip BOM
        const config = JSON.parse(rawContent);

        // Ensure Metadata exists
        if (!config.build.globalMetadata) config.build.globalMetadata = {};

        // REMOVE DISABLE FLAGS (To enable sidebars on articles)
        delete config.build.globalMetadata._disableToc;
        delete config.build.globalMetadata._disableSideFilter;
        delete config.build.globalMetadata._disableBreadcrumb;

        // ENSURE ESSENTIALS
        config.build.globalMetadata._appTitle = "SupplyChain365";
        config.build.globalMetadata._enableSearch = true;
        config.build.globalMetadata._appLogoPath = "images/logo.png";

        fs.writeFileSync(DOCFX_JSON_PATH, JSON.stringify(config, null, 2));
        console.log("✅ docfx.json fixed: Sidebars Enabled.");
    } catch (e) {
        console.error("❌ Error fixing docfx.json:", e);
    }
}

// =============================================================================
// 4. FIX HOMEPAGE (Disable Sidebars ONLY here)
// =============================================================================
const indexFile = path.join(ROOT_DIR, 'index.md');
const indexContent = `---
title: Home
layout: landing
_disableToc: true
_disableSideFilter: true
_disableBreadcrumb: true
---

<div class="ms-hero">
  <div class="hero-container">
    <h1>Hi, how can we help you?</h1>
    <p style="font-size: 18px; color: #ddd;">Search our knowledge base or browse the categories below.</p>
  </div>
</div>

<div class="container" style="max-width: 1200px; padding: 40px 20px;">
  <h2>Welcome to SupplyChain365</h2>
  <p>Select a topic from the navigation or search above.</p>
</div>
`;

fs.writeFileSync(indexFile, indexContent.trim());
console.log("✅ index.md reset to Full Width layout.");

console.log("🚀 DONE. Run: docfx docfx.json --serve");