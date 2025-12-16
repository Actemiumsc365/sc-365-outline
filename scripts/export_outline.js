// Placeholder: "The Bridge Script"
// Voeg hier je logica toe om outlines te exporteren naar articles/ en images/.
// Voorbeeld: lees een JSON-invoer en genereer Markdown-bestanden.

const fs = require("fs");
const path = require("path");

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function main() {
  const root = path.resolve(__dirname, "..");
  const articlesDir = path.join(root, "articles");
  const imagesDir = path.join(root, "images");

  ensureDir(articlesDir);
  ensureDir(imagesDir);

  const demo = `# Demo-artikel

Dit is een automatisch gegenereerd artikel. Vervang deze scriptinhoud met je eigen logica.`;

  fs.writeFileSync(path.join(articlesDir, "demo.md"), demo, "utf8");
  console.log("Demo-artikel aangemaakt in articles/demo.md");
}

main();
