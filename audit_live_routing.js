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

const linkAudit = [];

htmlFiles.forEach(filePath => {
  const relPath = path.relative(baseDir, filePath).replace(/\\/g, '/');
  const content = fs.readFileSync(filePath, 'utf8');

  const aRegex = /<a[^>]+href=["']([^"']+)["']/gi;
  let match;

  while ((match = aRegex.exec(content)) !== null) {
    const href = match[1];
    if (href.startsWith('http') || href.startsWith('//') || href.startsWith('mailto:') || href.startsWith('tel:') || href === '#') {
      continue;
    }

    const cleanHref = href.split('#')[0];
    if (!cleanHref) continue;

    // Resolve path relative to file
    const resolvedPath = path.resolve(path.dirname(filePath), cleanHref);
    const exists = fs.existsSync(resolvedPath);

    // Check case sensitivity on Windows by checking actual disk filename case
    let caseMatch = true;
    if (exists) {
      const realPath = fs.realpathSync(resolvedPath);
      // Compare realPath vs resolvedPath ignoring drive letter case
      if (realPath.toLowerCase() !== resolvedPath.toLowerCase()) {
        caseMatch = false;
      }
    }

    if (!exists || !caseMatch) {
      linkAudit.push({
        sourcePage: relPath,
        href: href,
        resolvedPath: resolvedPath,
        exists: exists,
        caseMatch: caseMatch
      });
    }
  }
});

console.log(`Live Routing Audit Results:`);
console.log(`Total HTML files scanned: ${htmlFiles.length}`);
console.log(`Total broken links or case mismatches: ${linkAudit.length}\n`);

linkAudit.forEach(item => {
  console.log(`Source Page: /${item.sourcePage}`);
  console.log(`  href: "${item.href}"`);
  console.log(`  Resolved: ${item.resolvedPath}`);
  console.log(`  Exists on disk: ${item.exists}, Case Match: ${item.caseMatch}\n`);
});
