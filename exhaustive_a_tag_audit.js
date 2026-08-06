const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const cssFile = path.join(rootDir, 'css', 'styles.css');
const jsFile = path.join(rootDir, 'js', 'main.js');

// 1. Add TOC styling to css/styles.css
let cssContent = fs.readFileSync(cssFile, 'utf8');

const tocCss = `/* Table of Contents (TOC) Component */
.toc-box {
  background: #f8fafc;
  border: 1px solid var(--border-color);
  border-left: 4px solid var(--primary-color);
  border-radius: var(--radius-md);
  padding: 20px 24px;
  margin: 24px 0 32px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.toc-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--primary-dark);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.toc-list li {
  margin: 0;
}

.toc-link, .toc-list a {
  color: var(--accent-blue);
  text-decoration: none;
  font-weight: 500;
  font-size: 14.5px;
  padding: 3px 8px;
  border-radius: 4px;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
}

.toc-link:hover, .toc-list a:hover, .toc-link:focus-visible, .toc-list a:focus-visible {
  color: #1e40af;
  background: rgba(29, 78, 216, 0.08);
}

.toc-link:focus-visible, .toc-list a:focus-visible {
  outline: 2px solid var(--accent-blue);
  outline-offset: 2px;
}`;

if (!cssContent.includes('.toc-link')) {
  cssContent += `\n\n${tocCss}`;
  fs.writeFileSync(cssFile, cssContent, 'utf8');
}

// 2. Update js/main.js to set a.className = 'toc-link' for generated TOC links
let jsContent = fs.readFileSync(jsFile, 'utf8');
jsContent = jsContent.replace(/const a = document\.createElement\('a'\);\s*a\.href = `#\${heading\.id}`;/g, 
  "const a = document.createElement('a');\n        a.href = `#${heading.id}`;\n        a.className = 'toc-link';");
fs.writeFileSync(jsFile, jsContent, 'utf8');

// 3. Systematically audit all 55 HTML files
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

const approvedClasses = [
  'body-link',
  'category-card',
  'scheme-card',
  'quick-link-item',
  'back-link-btn',
  'breadcrumb-link',
  'footer-link',
  'footer-disclaimer-link',
  'footer-social-btn',
  'brand-logo',
  'cookie-policy-link',
  'toc-link',
  'btn',
  'btn-primary',
  'btn-secondary'
];

const auditResults = {};
let totalUnstyledFixed = 0;

htmlFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let relPath = path.relative(rootDir, filePath).replace(/\\/g, '/');
  let fixedOnPage = 0;

  // Regex to find <a> tags missing class attribute
  content = content.replace(/<a\s+(?![^>]*class=)([^>]*)>/gi, (match, rest) => {
    // Exclude brand logo or header link if intentionally styled via parent
    if (match.includes('brand-logo')) return match;

    fixedOnPage++;
    totalUnstyledFixed++;

    if (match.includes('toc-') || match.includes('#section')) {
      return `<a class="toc-link" ${rest}>`;
    }
    return `<a class="body-link" ${rest}>`;
  });

  // Also fix any <a class=""> empty class attribute
  content = content.replace(/<a\s+class=["']\s*["']([^>]*)>/gi, (match, rest) => {
    fixedOnPage++;
    totalUnstyledFixed++;
    return `<a class="body-link"${rest}>`;
  });

  if (fixedOnPage > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
  }

  auditResults[relPath] = fixedOnPage;
});

console.log('=== EXHAUSTIVE <a> TAG AUDIT RESULT ===');
console.log(`Total HTML files audited: ${htmlFiles.length}`);
console.log(`Total unstyled <a> tags found and fixed: ${totalUnstyledFixed}`);
console.log('\nPage-by-page breakdown:');
Object.keys(auditResults).forEach(p => {
  console.log(`  ${p}: ${auditResults[p]} unstyled <a> tags fixed`);
});

fs.writeFileSync('a_tag_audit_report.json', JSON.stringify(auditResults, null, 2), 'utf8');
