const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const cssFile = path.join(rootDir, 'css', 'styles.css');

// 1. Update css/styles.css to revert list typography and FAQ accordion to original styling
let cssContent = fs.readFileSync(cssFile, 'utf8');

// Revert Lists to simple original styles
const originalListsCss = `/* Standard Article Lists */
.article-body ul, .content-block ul {
  margin: 0 0 20px 24px;
  color: #334155;
}

.article-body li, .content-block li {
  margin-bottom: 8px;
}

.article-body ol, .content-block ol {
  margin: 0 0 20px 24px;
  color: #334155;
}`;

cssContent = cssContent.replace(/\/\* Custom Bulleted List Component \*[\s\S]*?\/\* COMPONENT 6/gi, `${originalListsCss}\n\n/* COMPONENT 6`);

// Revert FAQ Accordion to simple original styles
const originalFaqCss = `/* Original FAQ Accordion Component */
.faq-section {
  margin-top: 36px;
}

.faq-item {
  border: 1px solid var(--border-color);
  border-radius: 8px;
  margin-bottom: 12px;
  overflow: hidden;
}

.faq-question {
  width: 100%;
  text-align: left;
  background: #f8fafc;
  padding: 16px 20px;
  font-size: 16px;
  font-weight: 600;
  color: var(--primary-dark);
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: inherit;
}

.faq-question:hover {
  background: #f1f5f9;
}

.faq-answer {
  padding: 16px 20px;
  background: #ffffff;
  color: #334155;
  border-top: 1px solid var(--border-color);
  display: none;
}`;

cssContent = cssContent.replace(/\/\* Enhanced FAQ Accordion Component \*[\s\S]*?\/\* Article & Content Layout \*/gi, `${originalFaqCss}\n\n/* Article & Content Layout */`);

fs.writeFileSync(cssFile, cssContent, 'utf8');
console.log('Successfully reverted css/styles.css list and FAQ rules.');

// 2. Revert HTML files for FAQ icon markup and body link classes where needed
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
let count = 0;

htmlFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Revert FAQ icon markup to simple original <span class="faq-icon">+</span>
  content = content.replace(/<span class="faq-icon">\+<\/span>/g, '<span class="faq-icon">+</span>');

  fs.writeFileSync(filePath, content, 'utf8');
  count++;
});

console.log(`Reverted content typography & FAQ accordion across ${count} HTML files.`);
