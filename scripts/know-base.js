import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// SETUP PATHS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '../');
const DOCFX_JSON_PATH = path.join(ROOT_DIR, 'docfx.json');
const KB_INDEX_PATH = path.join(ROOT_DIR, 'articles/index.md');

console.log("🚑 FIXING: HTML Rendering & Knowledge Base Layout...");

// =============================================================================
// 1. FIX DOCFX.JSON (CRITICAL: ALLOW HTML)
// =============================================================================
if (fs.existsSync(DOCFX_JSON_PATH)) {
    try {
        let rawContent = fs.readFileSync(DOCFX_JSON_PATH, 'utf8');
        // Remove BOM if present (prevents JSON parse errors)
        if (rawContent.charCodeAt(0) === 0xFEFF) {
            rawContent = rawContent.slice(1);
        }
        
        const config = JSON.parse(rawContent);

        // FORCE MARKDIG ENGINE WITH HTML ENABLED
        config.build.markdownEngineName = "markdig";
        config.build.markdownEngineProperties = {
            "html": true
        };

        // Remove disable flags that hide sidebars
        if (!config.build.globalMetadata) config.build.globalMetadata = {};
        delete config.build.globalMetadata._disableToc;
        delete config.build.globalMetadata._disableSideFilter;
        delete config.build.globalMetadata._disableAffix;

        fs.writeFileSync(DOCFX_JSON_PATH, JSON.stringify(config, null, 2));
        console.log("✅ docfx.json fixed: HTML rendering enabled.");
    } catch (e) {
        console.error("❌ Error fixing docfx.json:", e);
    }
}

// =============================================================================
// 2. REWRITE ARTICLES/INDEX.MD (Ensure No Indentation)
// =============================================================================
// Indentation in Markdown creates code blocks. We must remove all indentation.
const kbContent = `---
title: Knowledge Base
_disableToc: true
_disableSideFilter: true
_disableBreadcrumb: true
---

<div class="kb-wrapper">

<div class="kb-section">
<div class="kb-main-header">
<span class="kb-main-icon">📚</span>
<div>
<h2>Getting Started (4)</h2>
<p>SupplyChain365 Business Central general documentation: Getting started, FAQ, Installation</p>
</div>
</div>
        
<div class="kb-grid-2">
<div class="kb-category">
<h3 class="kb-folder"><span class="icon">📂</span> General information (3)</h3>
<ul class="kb-list">
<li><a href="general-info.html">📄 SupplyChain365 General information</a></li>
<li><a href="license.html">📄 SupplyChain365 User license agreement</a></li>
<li><a href="demo.html">📄 SupplyChain365 Demo Company Skynet</a></li>
</ul>
</div>
<div class="kb-category">
<h3 class="kb-folder"><span class="icon">📂</span> Modules (6)</h3>
<ul class="kb-list">
<li><a href="modules-overview.html">📄 SupplyChain365 Modules overview</a></li>
<li><a href="warehouse-exec.html">📄 SupplyChain365 - Features: Warehouse execution</a></li>
<li><a href="transport-exec.html">📄 SupplyChain365 - Features: Transport execution</a></li>
</ul>
<a href="#" class="kb-view-all">View all 6</a>
</div>
</div>

<div class="kb-grid-2" style="margin-top: 30px;">
<div class="kb-category">
<h3 class="kb-folder"><span class="icon">📂</span> Components (3)</h3>
<ul class="kb-list">
<li><a href="extension.html">📄 SupplyChain365 Extension component</a></li>
<li><a href="app.html">📄 SupplyChain365 APP component</a></li>
<li><a href="portal.html">📄 SupplyChain365 Portal component</a></li>
</ul>
</div>
<div class="kb-category">
<h3 class="kb-folder"><span class="icon">📂</span> Getting Started (15)</h3>
<ul class="kb-list">
<li><a href="register.html">📄 How to register for SupplyChain365</a></li>
<li><a href="start.html">📄 Getting started with SupplyChain365</a></li>
<li><a href="portal-use.html">📄 How to use the SupplyChain365 Portal (overview)</a></li>
</ul>
<a href="#" class="kb-view-all">View all 15</a>
</div>
</div>
</div>

<div class="kb-section">
<div class="kb-main-header">
<span class="kb-main-icon">📦</span>
<div>
<h2>Module Warehouse (2)</h2>
</div>
</div>
        
<div class="kb-grid-2">
<div class="kb-category">
<h3 class="kb-folder"><span class="icon">📂</span> Warehouse Extension (24)</h3>
<ul class="kb-list">
<li><a href="#">📄 How to create warehouse shipments (basic)</a></li>
<li><a href="#">📄 How to create warehouse shipments (with item tracking)</a></li>
<li><a href="#">📄 How to create warehouse receipt (basic)</a></li>
</ul>
<a href="#" class="kb-view-all">View all 24</a>
</div>
<div class="kb-category">
<h3 class="kb-folder"><span class="icon">📂</span> Warehouse Mobile APP (17)</h3>
<ul class="kb-list">
<li><a href="#">📄 How the inbound process with receive works</a></li>
<li><a href="#">📄 Show content of a bin on the mobile app</a></li>
<li><a href="#">📄 How to change the location on mobile app</a></li>
</ul>
<a href="#" class="kb-view-all">View all 17</a>
</div>
</div>
</div>

<div class="kb-section">
<div class="kb-main-header">
<span class="kb-main-icon">🚀</span>
<div>
<h2>Release Notes (31)</h2>
<p>SupplyChain365 Release Notes</p>
</div>
</div>
        
<div class="kb-grid-2">
<div class="kb-category">
<h3 class="kb-folder"><span class="icon">📂</span> Release Notes Sprint 12-2025 (2)</h3>
<ul class="kb-list">
<li><a href="#">📄 Release Notes - Extension - 2025-12</a></li>
<li><a href="#">📄 Release Notes - App - 2025-12</a></li>
</ul>
</div>
<div class="kb-category">
<h3 class="kb-folder"><span class="icon">📂</span> Release Notes Sprint 07-2025 (2)</h3>
<ul class="kb-list">
<li><a href="#">📄 Release Notes - Extension - 2025-07</a></li>
<li><a href="#">📄 Release Notes - App - 2025-07</a></li>
</ul>
</div>
</div>
</div>

</div>
`;

// Ensure directory exists
const articleDir = path.dirname(KB_INDEX_PATH);
if (!fs.existsSync(articleDir)) fs.mkdirSync(articleDir, { recursive: true });

fs.writeFileSync(KB_INDEX_PATH, kbContent);
console.log("✅ articles/index.md updated (Indentation removed to prevent code block rendering).");

console.log("🚀 FIX COMPLETE. Run: docfx docfx.json --serve");