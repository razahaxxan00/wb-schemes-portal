const fs = require('fs');
const path = require('path');

const rootDir = __dirname;

function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === 'brain') continue;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const htmlFiles = getHtmlFiles(rootDir);
console.log(`Auditing body content links, lists, and FAQ accordions across ${htmlFiles.length} HTML files...`);

let modifiedCount = 0;

htmlFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let relPath = path.relative(rootDir, filePath).replace(/\\/g, '/');

  // 1. Remove placeholder-text span wrappers around links
  content = content.replace(/<span class="placeholder-text">\s*(<a\s+[\s\S]*?<\/a>)\s*<\/span>/gi, '$1');

  // 2. Ensure ALL inline links in <p>, <li>, <div>, <ol>, <ul>, etc. carry class="body-link" (unless they are buttons, cards, or footer links)
  content = content.replace(/<a\s+href=["']([^"']+)["'](?![^>]*class=)([^>]*)>/gi, (match, href, rest) => {
    // Avoid adding body-link if it's already styled or in header/footer/card
    if (rest.includes('class=') || href === '/index.html' && match.includes('brand-logo')) return match;
    return `<a href="${href}" class="body-link"${rest}>`;
  });

  // 3. Ensure FAQ Accordion Items carry .faq-item, .faq-question, .faq-icon, .faq-answer
  content = content.replace(/<div class="faq-item">([\s\S]*?)<\/div>\s*<\/div>/gi, (match, inner) => {
    // Check if inner has button.faq-question and span.faq-icon
    if (!inner.includes('class="faq-icon"')) {
      inner = inner.replace(/<button class="faq-question">([\s\S]*?)<\/button>/gi, (btnMatch, qText) => {
        let cleanText = qText.replace(/<span class="faq-icon">.*?<\/span>/gi, '').trim();
        return `<button class="faq-question">\n            <span>${cleanText}</span>\n            <span class="faq-icon">+</span>\n          </button>`;
      });
    }
    return `<div class="faq-item">${inner}</div>`;
  });

  fs.writeFileSync(filePath, content, 'utf8');
  modifiedCount++;
});

console.log(`Audit & update complete across ${modifiedCount} HTML files.`);
