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

let totalHrefsConverted = 0;
let totalAssetsConverted = 0;
const pageConversionCounts = {};

htmlFiles.forEach(filePath => {
  const pageRel = path.relative(baseDir, filePath).replace(/\\/g, '/');
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // 1. Convert CSS & JS links to root-relative /css/styles.css and /js/main.js
  content = content.replace(/(href|src)=["'](\.\.\/|\.\/)*css\/styles\.css["']/gi, (match, attr) => {
    totalAssetsConverted++;
    return `${attr}="/css/styles.css"`;
  });
  content = content.replace(/(href|src)=["'](\.\.\/|\.\/)*js\/main\.js["']/gi, (match, attr) => {
    totalAssetsConverted++;
    return `${attr}="/js/main.js"`;
  });

  // 2. Convert all internal <a href="..."> links to root-relative starting with /
  content = content.replace(/href=["']([^"']+)["']/gi, (match, href) => {
    if (href.startsWith('http') || href.startsWith('//') || href.startsWith('mailto:') || href.startsWith('tel:') || href === '#' || href.includes('css/styles.css')) {
      return match;
    }

    const cleanHref = href.split('#')[0];
    const anchor = href.includes('#') ? '#' + href.split('#')[1] : '';

    if (!cleanHref) return match;

    // Resolve target path on disk to find real relative path from baseDir
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
      console.warn(`WARNING: Target file does not exist on disk for href="${href}" on /${pageRel}`);
      return match;
    }

    // Get root-relative path starting with /
    const relFromBase = path.relative(baseDir, resolvedDisk).replace(/\\/g, '/');
    const rootRelativeHref = '/' + relFromBase + anchor;

    if (rootRelativeHref !== href) {
      totalHrefsConverted++;
      pageConversionCounts[pageRel] = (pageConversionCounts[pageRel] || 0) + 1;
    }

    return `href="${rootRelativeHref}"`;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
});

console.log(`\n========================================`);
console.log(`Root-Relative Link Conversion Complete!`);
console.log(`Total internal hrefs converted to root-relative (/): ${totalHrefsConverted}`);
console.log(`Total CSS/JS asset paths converted: ${totalAssetsConverted}`);
console.log(`========================================\n`);

Object.keys(pageConversionCounts).sort().forEach(p => {
  console.log(`- /${p}: ${pageConversionCounts[p]} link(s) converted to /...`);
});
