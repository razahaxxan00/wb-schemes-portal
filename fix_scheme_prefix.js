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
let fixedCount = 0;
const pageFixDetails = {};

htmlFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // 1. In schemes/index.html, convert href="./[scheme]/" to href="../schemes/[scheme]/"
  if (filePath.endsWith('schemes/index.html') || filePath.endsWith('schemes\\index.html')) {
    content = content.replace(/href="\.\/([^\/]+)\/index\.html"/gi, (match, scheme) => {
      fixedCount++;
      const relPath = path.relative(baseDir, filePath).replace(/\\/g, '/');
      pageFixDetails[relPath] = (pageFixDetails[relPath] || 0) + 1;
      return `href="../schemes/${scheme}/index.html"`;
    });
  }

  // 2. In Main scheme pages (schemes/[scheme]/index.html), convert href="./[subpage]/" to href="../[scheme]/[subpage]/"
  // so it explicitly includes the scheme folder name
  const schemeDirMatch = filePath.match(/schemes[\\\/]([^\\\/]+)[\\\/]index\.html$/i);
  if (schemeDirMatch) {
    const schemeName = schemeDirMatch[1];
    content = content.replace(/href="\.\/([^\/]+)\/index\.html"/gi, (match, subpage) => {
      fixedCount++;
      const relPath = path.relative(baseDir, filePath).replace(/\\/g, '/');
      pageFixDetails[relPath] = (pageFixDetails[relPath] || 0) + 1;
      return `href="../${schemeName}/${subpage}/index.html"`;
    });
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
});

console.log(`\nTotal broken/ambiguous links fixed: ${fixedCount}`);
console.log('Fix details by page:');
Object.keys(pageFixDetails).forEach(p => {
  console.log(`- /${p}: ${pageFixDetails[p]} link(s) fixed`);
});
