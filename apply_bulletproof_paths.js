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

let totalLinksUpdated = 0;
const pageUpdateCounts = {};

htmlFiles.forEach(filePath => {
  const pageRel = path.relative(baseDir, filePath).replace(/\\/g, '/');
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace all internal href="..." attributes
  content = content.replace(/href=["']([^"']+)["']/gi, (match, href) => {
    if (href.startsWith('http') || href.startsWith('//') || href.startsWith('mailto:') || href.startsWith('tel:') || href === '#') {
      return match;
    }

    const cleanHref = href.split('#')[0];
    const anchor = href.includes('#') ? '#' + href.split('#')[1] : '';

    if (!cleanHref) return match;

    // Resolve target path on disk
    let resolvedDisk;
    if (cleanHref.startsWith('/')) {
      resolvedDisk = path.resolve(baseDir, cleanHref.substring(1));
    } else {
      resolvedDisk = path.resolve(path.dirname(filePath), cleanHref);
    }

    // If target is a directory, append index.html
    if (fs.existsSync(resolvedDisk) && fs.statSync(resolvedDisk).isDirectory()) {
      resolvedDisk = path.join(resolvedDisk, 'index.html');
    }

    if (!fs.existsSync(resolvedDisk)) {
      console.warn(`WARNING: Target file does not exist for href="${href}" on page /${pageRel}`);
      return match;
    }

    // Calculate exact relative path from current file's directory to target file
    let exactRelative = path.relative(path.dirname(filePath), resolvedDisk).replace(/\\/g, '/');

    if (!exactRelative.startsWith('.')) {
      exactRelative = './' + exactRelative;
    }

    const newHref = exactRelative + anchor;

    if (newHref !== href) {
      totalLinksUpdated++;
      pageUpdateCounts[pageRel] = (pageUpdateCounts[pageRel] || 0) + 1;
    }

    return `href="${newHref}"`;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
});

console.log(`\n========================================`);
console.log(`Bulletproof relative path conversion complete!`);
console.log(`Total links updated to exact relative disk targets: ${totalLinksUpdated}`);
console.log(`========================================\n`);

Object.keys(pageUpdateCounts).sort().forEach(p => {
  console.log(`- /${p}: ${pageUpdateCounts[p]} link(s) standardized`);
});
