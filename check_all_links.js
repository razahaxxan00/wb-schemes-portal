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
console.log(`Checking link resolution across ${htmlFiles.length} HTML files...`);

const aRegex = /<a[^>]+href=["']([^"']+)["']/gi;
let totalBroken = 0;
const results = [];

htmlFiles.forEach(filePath => {
  const relPath = path.relative(baseDir, filePath).replace(/\\/g, '/');
  const content = fs.readFileSync(filePath, 'utf8');

  let match;
  while ((match = aRegex.exec(content)) !== null) {
    const href = match[1];
    if (href.startsWith('http') || href.startsWith('//') || href.startsWith('mailto:') || href.startsWith('tel:') || href === '#') {
      continue;
    }

    const cleanHref = href.split('#')[0];
    if (!cleanHref) continue;

    // Resolve as if served from file directory
    const resolvedPath = path.resolve(path.dirname(filePath), cleanHref);
    const exists = fs.existsSync(resolvedPath);

    // Also check if href starts with ./ in a directory index file (e.g. schemes/index.html)
    // where accessing /schemes (without trailing slash) resolves ./ to root /
    let trailingSlashIssue = false;
    if (cleanHref.startsWith('./') && relPath.includes('/index.html')) {
      // If user accesses /schemes (without /), ./ resolves relative to root
      const rootResolved = path.resolve(baseDir, cleanHref.replace('./', ''));
      if (!fs.existsSync(rootResolved)) {
        trailingSlashIssue = true;
      }
    }

    if (!exists || trailingSlashIssue) {
      totalBroken++;
      results.push({
        file: relPath,
        href: href,
        resolvedPath: resolvedPath,
        exists: exists,
        trailingSlashIssue: trailingSlashIssue
      });
    }
  }
});

console.log(`\nTotal potentially broken links found: ${totalBroken}`);
results.forEach(r => {
  console.log(`Page: /${r.file} -> href="${r.href}" (exists: ${r.exists}, trailingSlashIssue: ${r.trailingSlashIssue})`);
});
