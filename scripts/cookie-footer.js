import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// SETUP PATHS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '../');
// Correct path structure
const PARTIALS_DIR = path.join(ROOT_DIR, 'templates/custom/partials');
const FOOTER_PATH = path.join(PARTIALS_DIR, 'footer.tmpl.partial');
const CSS_PATH = path.join(ROOT_DIR, 'templates/custom/styles/main.css');

console.log("🍪 FIXING: Creating directories and adding Cookie Popup...");

// 1. CRITICAL FIX: CREATE DIRECTORIES IF MISSING
if (!fs.existsSync(PARTIALS_DIR)) {
    console.log(`📁 Creating missing directory: ${PARTIALS_DIR}`);
    fs.mkdirSync(PARTIALS_DIR, { recursive: true });
}

// 2. REWRITE FOOTER.TMPL.PARTIAL (With Modal HTML)
const newFooter = `<footer>
  <div class="grad-bottom"></div>
  <div class="footer">
    <div class="container">
      <span class="pull-right">
        <a href="#top">Back to top</a>
      </span>
      <span>
        Copyright: Actemium | Logistieke automatisering - The Netherlands | 
        <a href="#" onclick="openCookieModal(event)">Cookie policy</a>
      </span>
    </div>
  </div>

  <div id="cookieModal" class="cookie-modal">
    <div class="cookie-content">
      <span class="cookie-close" onclick="closeCookieModal()">&times;</span>
      <h3>Why we love Cookies</h3>
      <p>We use cookies to try and give you a better experience in Supplychain365.</p>
      <p>You can learn more about what kind of cookies we use, why, and how from our <a href="#">Privacy policy</a>. If you hate cookies, or are just on a diet, you can disable them altogether too. Just note that the Freshdesk service is pretty big on some cookies (we love the choco-chip ones), and some portions of Freshdesk may not work properly if you disable cookies.</p>
      <p>We’ll also assume you agree to the way we use cookies and are ok with it as described in our <a href="#">Privacy policy</a>, unless you choose to disable them altogether through your browser.</p>
      <button onclick="closeCookieModal()" class="cookie-btn">Got it!</button>
    </div>
  </div>

  <script>
    function openCookieModal(e) {
        e.preventDefault();
        document.getElementById('cookieModal').style.display = 'block';
    }
    function closeCookieModal() {
        document.getElementById('cookieModal').style.display = 'none';
    }
    // Close if user clicks outside the box
    window.onclick = function(event) {
        if (event.target == document.getElementById('cookieModal')) {
            closeCookieModal();
        }
    }
  </script>
</footer>
`;

fs.writeFileSync(FOOTER_PATH, newFooter);
console.log("✅ Footer updated successfully.");

// 3. ADD POPUP STYLES TO MAIN.CSS
const popupCss = `
/* ==========================================================================
   COOKIE POPUP STYLES
   ========================================================================== */
.cookie-modal {
    display: none; /* Hidden by default */
    position: fixed; 
    z-index: 99999; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgba(0,0,0,0.6);
    backdrop-filter: blur(2px);
}

.cookie-content {
    background-color: #fefefe;
    margin: 10% auto;
    padding: 30px;
    border: 1px solid #888;
    width: 80%;
    max-width: 600px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    position: relative;
    font-family: 'Segoe UI', sans-serif;
}

.cookie-close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    line-height: 20px;
}

.cookie-close:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.cookie-content h3 {
    margin-top: 0;
    color: #171717;
    font-weight: 600;
}

.cookie-content p {
    font-size: 14px;
    line-height: 1.6;
    color: #333;
    text-align: left !important;
}

.cookie-btn {
    background-color: #0078d4;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    margin-top: 10px;
}

.cookie-btn:hover {
    background-color: #005a9e;
}
`;

try {
    let currentCss = fs.readFileSync(CSS_PATH, 'utf8');
    if (!currentCss.includes("COOKIE POPUP STYLES")) {
        fs.appendFileSync(CSS_PATH, popupCss);
        console.log("✅ main.css updated with Popup Styles.");
    } else {
        console.log("ℹ️  Popup styles already exist in main.css.");
    }
} catch (e) {
    console.error("❌ Could not update CSS:", e);
}

console.log("🚀 FIXED. Run: docfx docfx.json --serve");