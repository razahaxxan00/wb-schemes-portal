const fs = require('fs');
const path = require('path');

const baseDir = path.resolve('C:/Users/Raza Hassan/.gemini/antigravity-ide/scratch/wb-schemes-portal');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.html')) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });

  return arrayOfFiles;
}

const htmlFiles = getAllFiles(baseDir);
console.log(`Total HTML files found: ${htmlFiles.length}`);

const placeholderRegex = /\[(?:ADD|Note|verify)[^\]]*\]/gi;
const issues = [];

htmlFiles.forEach(filePath => {
  const relPath = path.relative(baseDir, filePath).replace(/\\/g, '/');
  const content = fs.readFileSync(filePath, 'utf8');

  // 1. Meta & Title Check
  const hasTitle = content.includes('<title>') && content.includes('</title>');
  const hasDesc = content.includes('name="description"') || content.includes("name='description'");

  if (!hasTitle) {
    issues.push({ relPath, cat: "META_MISSING", msg: "Missing <title> tag" });
  }
  if (!hasDesc) {
    issues.push({ relPath, cat: "META_MISSING", msg: "Missing meta description tag" });
  }

  // 2. Asset & Script Links Depth Check
  const linkRegex = /<(?:link|script)[^>]+(?:href|src)=["']([^"']+)["']/gi;
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    const url = match[1];
    if (url.startsWith('http') || url.startsWith('//') || url.startsWith('data:')) continue;
    const targetPath = path.resolve(path.dirname(filePath), url);
    if (!fs.existsSync(targetPath)) {
      issues.push({ relPath, cat: "BROKEN_ASSET", msg: `Asset link '${url}' does not exist` });
    }
  }

  // 3. Internal Links Check (href)
  const aRegex = /<a[^>]+href=["']([^"']+)["']/gi;
  while ((match = aRegex.exec(content)) !== null) {
    const href = match[1];
    if (href.startsWith('http') || href.startsWith('//') || href.startsWith('mailto:') || href.startsWith('tel:')) continue;
    if (href === '#') {
      issues.push({ relPath, cat: "PLACEHOLDER_LINK", msg: `Unlinked internal target href='#'` });
      continue;
    }
    const cleanHref = href.split('#')[0];
    if (!cleanHref) continue;

    const targetPath = path.resolve(path.dirname(filePath), cleanHref);
    if (!fs.existsSync(targetPath)) {
      issues.push({ relPath, cat: "BROKEN_LINK", msg: `Link href='${href}' points to non-existent file` });
    }
  }

  // 4. Bracketed Placeholders Check
  const placeholders = content.match(placeholderRegex);
  if (placeholders) {
    const uniquePlaceholders = Array.from(new Set(placeholders));
    uniquePlaceholders.forEach(p => {
      issues.push({ relPath, cat: "PLACEHOLDER_TEXT", msg: `Bracketed placeholder text: '${p}'` });
    });
  }

  // 5. Component Checks
  if (relPath !== 'index.html') {
    if (!content.includes('class="breadcrumb') && !content.includes('aria-label="Breadcrumb"')) {
      issues.push({ relPath, cat: "MISSING_COMPONENT", msg: "Breadcrumb navigation missing" });
    }
  }
});

console.log(`\n--- AUDIT RESULTS ---`);
console.log(`Total issues flagged: ${issues.length}`);

const grouped = {};
issues.forEach(item => {
  if (!grouped[item.relPath]) grouped[item.relPath] = [];
  grouped[item.relPath].push(item);
});

Object.keys(grouped).sort().forEach(p => {
  console.log(`\n📄 PAGE: /${p}`);
  grouped[p].forEach(item => {
    console.log(`  - [${item.cat}] ${item.msg}`);
  });
});
