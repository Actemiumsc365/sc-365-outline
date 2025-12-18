import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// SETUP PATHS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '../');
const CSS_PATH = path.join(ROOT_DIR, 'templates/custom/styles/main.css');

console.log("📐 FIXING: Restoring Article Sidebars & Keeping Homepage Full-Width...");

// =============================================================================
// OVERWRITE MAIN.CSS (Smart Breakout Strategy)
// =============================================================================
const cssContent = `
/* ==========================================================================
   MICROSOFT .NET STYLE SYSTEM (FINAL RESTORE)
   ========================================================================== */
:root {
  --net-purple: #512bd4;
  --net-link-blue: #0078d4;
  --net-black: #171717;
  --nav-height: 60px;
  --sidebar-width: 280px;
}

body {
  font-family: 'Segoe UI', -apple-system, sans-serif;
  padding-top: var(--nav-height);
  background-color: #ffffff;
  color: var(--net-black);
  margin: 0;
  overflow-x: hidden;
}

a { text-decoration: none; color: var(--net-link-blue); }
a:hover { text-decoration: underline; }

/* 1. RESTORE STANDARD CONTAINERS (Crucial for Sidebars) */
/* We DO NOT unlock these globally anymore. We let them constrain the article content. */
#wrapper, .body-content, .main-container {
    background: transparent !important;
    margin-top: 0 !important;
    padding-top: 0 !important;
}

/* 2. NAVBAR (Fixed) */
.navbar {
  background: #ffffff !important;
  border-bottom: 1px solid #e1dfdd;
  height: var(--nav-height);
  position: fixed;
  top: 0; left: 0; width: 100%;
  z-index: 99999;
  display: flex;
  align-items: center;
  padding: 0 24px;
}

.navbar-brand img, img#logo {
    height: 24px !important;
    width: auto !important;
    max-width: 200px !important;
    display: block !important;
}

/* LINKS */
.navbar-nav > li > a {
    color: #171717 !important;
    font-weight: 600;
    font-size: 14px;
    padding: 19px 15px; 
    border-bottom: 3px solid transparent;
    background-color: transparent !important;
}
.navbar-nav > li > a:hover,
.navbar-nav > li.active > a {
    color: var(--net-link-blue) !important;
    background-color: transparent !important;
    border-bottom-color: var(--net-link-blue) !important;
    outline: none !important;
}

/* ==========================================================================
   3. HOMEPAGE HERO (SMART BREAKOUT)
   ========================================================================== */
/* This calculation forces the hero to be full screen width (100vw)
   even if it is inside a narrow container. */
.net-hero {
    background-color: var(--net-purple);
    color: white;
    padding: 80px 0 100px;
    text-align: left;
    
    /* THE MAGIC CALCULATION */
    width: 100vw;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    
    margin-top: -60px; /* Pull up to navbar */
}

/* Keep content inside centered and safe */
.net-container {
    max-width: 1260px;
    margin: 0 auto;
    padding: 0 24px;
}

.net-hero h1 { font-size: 42px; margin: 0 0 16px 0; color: white !important; }
.net-hero p { font-size: 18px; max-width: 800px; color: #e2e2e2; margin: 0; }

/* GRID */
.net-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    margin-top: -60px;
    z-index: 5;
    padding-bottom: 60px;
    position: relative;
}

.net-card {
    background: #fff;
    border: 1px solid #e1dfdd;
    border-radius: 4px;
    padding: 24px;
    display: flex;
    text-decoration: none !important;
    box-shadow: 0 1.6px 3.6px rgba(0,0,0,0.1);
    color: inherit !important;
}
.net-card:hover { transform: translateY(-2px); box-shadow: 0 8px 16px rgba(0,0,0,0.15); }
.net-card-icon { font-size: 32px; margin-right: 16px; }
.net-card-label { font-size: 11px; font-weight: 700; color: #666; display: block; margin-bottom: 4px; text-transform: uppercase; }
.net-card-title { font-size: 18px; font-weight: 600; color: var(--net-link-blue); margin: 0; }

/* ==========================================================================
   4. ARTICLE SIDEBARS (RESTORED)
   ========================================================================== */
/* Force sidebars to be visible on desktop */
.toc-side, .sideaffix {
    display: block !important;
    position: fixed !important;
    top: 60px;
    bottom: 0;
    width: var(--sidebar-width);
    overflow-y: auto;
    z-index: 100;
}

/* LEFT SIDEBAR (Table of Contents) */
.toc-side {
    left: 0;
    background: #f3f2f1;
    border-right: 1px solid #e1dfdd;
    padding: 20px;
}

/* RIGHT SIDEBAR (In This Article) */
.sideaffix {
    right: 0;
    background: #ffffff;
    padding: 20px;
    border-left: 1px solid transparent; 
}
.sideaffix h5 { font-size: 12px; font-weight: 700; color: #666; text-transform: uppercase; margin-bottom: 10px; }

/* CENTER CONTENT (Pushed by sidebars) */
.col-md-10, .col-md-8 {
    margin-left: var(--sidebar-width) !important;
    margin-right: var(--sidebar-width) !important;
    width: auto !important;
    padding: 40px 60px;
    float: none !important;
    max-width: 1400px; /* Readability limit */
}

/* RESPONSIVE HIDING (Mobile) */
@media (max-width: 1200px) {
    .sideaffix { display: none !important; } /* Hide Right Sidebar */
    .col-md-10, .col-md-8 { margin-right: 0 !important; }
}

@media (max-width: 768px) {
    .toc-side { display: none !important; } /* Hide Left Sidebar */
    .col-md-10, .col-md-8 { margin-left: 0 !important; margin-right: 0 !important; width: 100% !important; padding: 20px; }
    
    /* Reset Hero margins on mobile to prevent overflow */
    .net-hero { width: 100%; margin-left: 0; margin-right: 0; padding-left: 20px; padding-right: 20px; }
}
`;

fs.writeFileSync(CSS_PATH, cssContent);
console.log("✅ main.css updated: Sidebars restored, Homepage Full-Width preserved.");
console.log("🚀 FIX COMPLETE. Run: docfx docfx.json --serve");