import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 1. SETUP PATHS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '../');
const TEMPLATE_DIR = path.join(ROOT_DIR, 'templates/custom/styles');

// ENSURE DIRECTORIES EXIST
if (!fs.existsSync(TEMPLATE_DIR)) {
    fs.mkdirSync(TEMPLATE_DIR, { recursive: true });
}

console.log(`📂 Implementing Fluent Design to: ${ROOT_DIR}`);

// =============================================================================
// 2. OVERWRITE index.md (Updated to use your new CSS Classes)
// =============================================================================
const indexContent = `---
title: Home
layout: landing
---

<div class="ms-hero">
  <div class="hero-container">
    <h1 class="hero-title">Hi, how can we help you?</h1>
    <p class="hero-desc">Find answers, manage tickets, and explore documentation for SupplyChain365.</p>
    
    <div style="position: relative; max-width: 600px;">
        <input type="text" id="home-search" 
               style="width: 100%; padding: 16px 20px; border-radius: 4px; border: 1px solid #e1dfdd; box-shadow: 0 4px 8px rgba(0,0,0,0.1); font-size: 16px; outline: none;" 
               placeholder="Search documentation...">
    </div>
  </div>
</div>

<div class="ms-grid">
  
  <a href="articles/index.md" class="learn-card">
    <div class="card-icon">📚</div>
    <div class="card-title">Browse articles</div>
    <div class="card-text">Explore How-To's, guides, and learn best practices from our knowledge base.</div>
    <div class="card-link">Read more <span>→</span></div>
  </a>

  <a href="#" class="learn-card">
    <div class="card-icon">🎫</div>
    <div class="card-title">View all tickets</div>
    <div class="card-text">Track your ticket's progress and view your interaction history with support.</div>
    <div class="card-link">View tickets <span>→</span></div>
  </a>

  <a href="#" class="learn-card">
    <div class="card-icon">💬</div>
    <div class="card-title">Submit a ticket</div>
    <div class="card-text">Facing an issue? Describe your problem by filling out the support ticket form.</div>
    <div class="card-link">Get support <span>→</span></div>
  </a>

</div>

<script>
document.getElementById('home-search').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        window.location.href = 'search.html?q=' + encodeURIComponent(this.value);
    }
});
</script>
`;

fs.writeFileSync(path.join(ROOT_DIR, 'index.md'), indexContent.trim());
console.log("✅ index.md updated (Using .ms-hero and .learn-card classes).");


// =============================================================================
// 3. COMBINE YOUR CSS FILES (fluent.css + main.css)
// =============================================================================
// We merge them into main.css so DocFX loads everything automatically.

const fluentCSS = `
/* TRUE FLUENT DESIGN SYSTEM - HIGH FIDELITY */
:root {
  /* Core Palette */
  --ms-blue: #0078d4;
  --ms-blue-hover: #106ebe;
  --ms-blue-active: #005a9e;
  --ms-black: #171717;
  --ms-gray-90: #323130;
  --ms-gray-60: #605e5c;
  --ms-gray-10: #f3f2f1;
  --ms-white: #ffffff;
  --ms-border: #e1dfdd;

  /* Fluent Depth */
  --shadow-card: 0 1.6px 3.6px 0 rgba(0,0,0,0.13), 0 0.3px 0.9px 0 rgba(0,0,0,0.11);
  --shadow-hover: 0 6.4px 14.4px 0 rgba(0,0,0,0.13), 0 1.2px 3.6px 0 rgba(0,0,0,0.11);
  --shadow-flyout: 0 8px 16px rgba(0,0,0,0.14);

  --container-width: 1248px; 
}

/* 1. Global Reset & Typography */
body {
  font-family: 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
  color: var(--ms-black);
  background-color: var(--ms-white);
  line-height: 1.5;
  font-size: 16px;
  margin: 0;
}

/* Fix DocFX wrapper transparency */
#wrapper, .body-content, .main-container {
    background-color: transparent !important;
    margin-top: 0 !important;
    padding-top: 0 !important;
}

a { color: var(--ms-blue); text-decoration: none; }
a:hover { color: var(--ms-blue-active); text-decoration: underline; }

/* 2. Navbar Overhaul */
.navbar {
  background: var(--ms-white) !important;
  border-bottom: 1px solid var(--ms-border);
  box-shadow: 0 1px 2px rgba(0,0,0,0.05) !important;
  height: 60px;
  display: flex;
  align-items: center;
}

.navbar-brand {
  font-weight: 600;
  color: var(--ms-black) !important;
  font-size: 18px;
  letter-spacing: -0.5px;
}

.navbar-nav > li > a {
  color: var(--ms-black) !important;
  font-weight: 400;
  font-size: 14px;
}

/* 3. The Hero Section (Gradient) */
.ms-hero {
  background: radial-gradient(circle at 10% 10%, rgb(249, 249, 249) 0%, rgb(240, 242, 245) 90%);
  padding: 80px 24px 60px;
  border-bottom: 1px solid var(--ms-border);
  margin-top: -20px; 
  margin-bottom: 48px;
  position: relative;
  overflow: hidden;
}

.hero-container {
  max-width: var(--container-width);
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 42px;
  font-weight: 700;
  color: var(--ms-black);
  margin-bottom: 16px;
  letter-spacing: -1px;
  margin-top: 0;
}

.hero-desc {
  font-size: 20px;
  color: var(--ms-black);
  max-width: 600px;
  margin-bottom: 32px;
  line-height: 1.6;
}

/* 4. The Card Grid (Microsoft Learn Style) */
.ms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 24px 64px;
}

.learn-card {
  background: var(--ms-white);
  border: 1px solid var(--ms-border);
  border-radius: 8px; 
  padding: 24px;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.2s cubic-bezier(0.33, 1, 0.68, 1);
  box-shadow: var(--shadow-card);
  text-decoration: none !important;
  position: relative;
  overflow: hidden;
}

.learn-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
  border-color: transparent;
}

/* Left colored accent bar on hover */
.learn-card::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 4px;
  background: var(--ms-blue);
  opacity: 0;
  transition: opacity 0.2s;
}
.learn-card:hover::before { opacity: 1; }

.card-icon {
  width: 48px;
  height: 48px;
  background: var(--ms-gray-10);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  font-size: 24px; 
}

.card-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--ms-blue);
  margin-bottom: 8px;
}

.card-text {
  font-size: 14px;
  color: var(--ms-gray-60);
  line-height: 1.6;
  flex-grow: 1;
}

.card-link {
  font-size: 14px;
  font-weight: 600;
  color: var(--ms-blue);
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 4px;
}

/* --- NAVBAR INTERACTION STATES (From your main.css) --- */
/* Hover */
.navbar-nav > li > a:hover {
  color: var(--ms-blue) !important;
  text-decoration: underline !important;
  background-color: transparent !important;
}
/* Focus */
.navbar-nav > li > a:focus {
  color: var(--ms-blue) !important;
  text-decoration: underline !important;
  background-color: transparent !important;
}
/* Active */
.navbar-nav > li.active > a,
.navbar-nav > li > a.active {
  color: var(--ms-blue) !important;
  font-weight: 700 !important;
  background-color: transparent !important;
}

/* --- ARTICLE PAGE STYLING (Blue Header) --- */
.sc-article-hero {
    background-color: var(--ms-blue); /* Uses the MS Blue Variable */
    color: white;
    padding: 30px 0 60px 0;
    margin-bottom: -30px;
}
.sc-article-hero h1 { color: white !important; font-weight: 700; border: none; margin: 0; }
.sc-article-hero .breadcrumb { background: transparent; padding: 0; margin-bottom: 10px; color: rgba(255,255,255,0.8); }
.sc-article-hero .breadcrumb a { color: white; }
.article {
    background: white !important;
    padding: 40px;
    border-radius: 8px;
    box-shadow: var(--shadow-card);
    margin-top: 20px;
    min-height: 600px;
}
.article h1 { display: none; }
`;

fs.writeFileSync(path.join(TEMPLATE_DIR, 'main.css'), fluentCSS.trim());
console.log("✅ main.css updated (Combined Fluent Design + Interaction Fixes).");


// =============================================================================
// 4. UPDATE MAIN.JS (Article Header Logic)
// =============================================================================
const jsContent = `
document.addEventListener("DOMContentLoaded", function() {
    // 1. Check if Article page (H1 exists) AND not Homepage (ms-hero exists)
    const articleTitle = document.querySelector("article h1");
    if (!articleTitle || document.querySelector(".ms-hero")) return;

    // 2. Create Header
    const heroSection = document.createElement("div");
    heroSection.className = "sc-article-hero"; 
    const heroContainer = document.createElement("div");
    heroContainer.className = "container";
    heroSection.appendChild(heroContainer);

    // 3. Move Elements
    const breadcrumb = document.querySelector("#breadcrumb");
    if (breadcrumb) heroContainer.appendChild(breadcrumb);

    const titleWrapper = document.createElement("div");
    titleWrapper.className = "sc-hero-title-block";
    
    // Add document icon
    titleWrapper.innerHTML = '<span style="font-size:2rem; float:left; margin-right:15px; color:white;">📄</span>';
    titleWrapper.appendChild(articleTitle);
    
    // Add Date
    const dateMeta = document.createElement("div");
    dateMeta.innerText = "Modified on Thu, 21 Dec, 2023";
    dateMeta.style.color = "rgba(255,255,255,0.8)"; 
    dateMeta.style.fontSize = "0.85rem"; 
    dateMeta.style.marginLeft = "50px";
    
    titleWrapper.appendChild(dateMeta);
    heroContainer.appendChild(titleWrapper);

    // 4. Inject
    const bodyContent = document.querySelector(".body-content");
    if (bodyContent) document.body.insertBefore(heroSection, bodyContent);
});
`;

fs.writeFileSync(path.join(TEMPLATE_DIR, 'main.js'), jsContent.trim());
console.log("✅ main.js updated (Consistent Article Design).");

console.log("🚀 IMPLEMENTATION COMPLETE. Run 'docfx docfx.json --serve' now.");