const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname);

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(function(file) {
    if (file === 'node_modules' || file === '.git' || file === 'brain') return;
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      if (file.endsWith('.html')) {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

const htmlFiles = getAllFiles(baseDir);
console.log(`Checking accurate link resolution across ${htmlFiles.length} HTML files...`);

const aRegex = /<a[^>]+href=["']([^"']+)["']/gi;
let totalBroken = 0;
const brokenLinks = [];

htmlFiles.forEach(filePath => {
  const relPath = path.relative(baseDir, filePath).replace(/\\/g, '/');
  const content = fs.readFileSync(filePath, 'utf8');

  let match;
  while ((match = aRegex.exec(content)) !== null) {
    const href = match[1];
    if (href.startsWith('http') || href.startsWith('//') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) {
      continue;
    }

    const cleanHref = href.split('#')[0];
    if (!cleanHref) continue;

    let targetPath;
    if (cleanHref.startsWith('/')) {
      targetPath = path.join(baseDir, cleanHref);
    } else {
      targetPath = path.resolve(path.dirname(filePath), cleanHref);
    }

    let exists = fs.existsSync(targetPath);
    if (!exists && !targetPath.endsWith('index.html')) {
      if (fs.existsSync(path.join(targetPath, 'index.html'))) {
        exists = true;
      }
    }

    if (!exists) {
      totalBroken++;
      brokenLinks.push({ file: relPath, href, targetPath });
    }
  }
});

console.log(`\n=== LINK RESOLUTION RESULT ===`);
console.log(`Total broken internal links: ${totalBroken}`);
if (totalBroken > 0) {
  brokenLinks.forEach(b => console.log(`  - Page: ${b.file} -> href="${b.href}" (Resolved: ${b.targetPath})`));
}
