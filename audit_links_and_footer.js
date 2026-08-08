const fs = require('fs');
const path = require('path');

const rootDir = __dirname;

function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file.startsWith('.')) continue;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getAllHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const htmlFiles = getAllHtmlFiles(rootDir);
console.log(`Found ${htmlFiles.length} HTML files.`);

// Check for links pointing to non-existent files
const brokenLinksList = [];

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(rootDir, file).replace(/\\/g, '/');
  
  // Find all href="..."
  const hrefMatches = content.matchAll(/href=["']([^"']+)["']/g);
  for (const match of hrefMatches) {
    const href = match[1];
    
    // Ignore external links, mailto, tel, javascript, anchors on same page
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#') || href.startsWith('javascript:')) {
      continue;
    }
    
    // Normalize path
    let targetPath = href.split('#')[0].split('?')[0];
    if (!targetPath) continue;
    
    // Resolve relative to root or file
    let absoluteTarget;
    if (targetPath.startsWith('/')) {
      absoluteTarget = path.join(rootDir, targetPath);
    } else {
      absoluteTarget = path.join(path.dirname(file), targetPath);
    }
    
    // If target is directory, look for index.html
    let exists = false;
    if (fs.existsSync(absoluteTarget)) {
      const stat = fs.statSync(absoluteTarget);
      if (stat.isDirectory()) {
        if (fs.existsSync(path.join(absoluteTarget, 'index.html'))) {
          exists = true;
        }
      } else {
        exists = true;
      }
    }
    
    if (!exists) {
      brokenLinksList.push({
        sourceFile: relPath,
        href: href,
        absoluteTarget: absoluteTarget
      });
    }
  }
}

console.log(`Total broken links found: ${brokenLinksList.length}`);
console.log(JSON.stringify(brokenLinksList, null, 2));
