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
console.log(`Verifying ${htmlFiles.length} HTML files...`);

let brokenLinkCount = 0;
let unstyledTagCount = 0;
let footerPlaceholderContactCount = 0;

const brokenLinksList = [];
const unstyledTagsList = [];
const footerContactsList = [];

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(rootDir, file).replace(/\\/g, '/');

  // Check 1: Footer Contact Block / Phone / Email specifically inside <footer>
  const footerMatch = content.match(/<footer[\s\S]*?<\/footer>/i);
  if (footerMatch) {
    const footerText = footerMatch[0];
    if (footerText.includes('footer-contact-block') || footerText.includes('footer-contact-item') || footerText.includes('1800-') || footerText.includes('Toll Free')) {
      footerPlaceholderContactCount++;
      footerContactsList.push(relPath);
    }
  }

  // Check 2: Unstyled <a> tags
  const aTagMatches = content.matchAll(/<a\s+([^>]*?)>/gi);
  for (const m of aTagMatches) {
    const fullTag = m[0];
    if (!fullTag.includes('class=')) {
      unstyledTagCount++;
      unstyledTagsList.push({ file: relPath, tag: fullTag });
    }
  }

  // Check 3: Internal Links resolution
  const linkMatches = content.matchAll(/<a\s+([^>]*?)href=["']([^"']+)["']/gi);
  for (const m of linkMatches) {
    const href = m[2];
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#') || href.startsWith('javascript:')) {
      continue;
    }
    let targetClean = href.split('#')[0].split('?')[0];
    if (!targetClean) continue;

    let absoluteTarget;
    if (targetClean.startsWith('/')) {
      absoluteTarget = path.join(rootDir, targetClean);
    } else {
      absoluteTarget = path.join(path.dirname(file), targetClean);
    }

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
      brokenLinkCount++;
      brokenLinksList.push({ file: relPath, href: href });
    }
  }
}

console.log(`\n=================== VERIFICATION RESULTS ===================`);
console.log(`Total HTML files verified: ${htmlFiles.length}`);
console.log(`Remaining broken internal links: ${brokenLinkCount}`);
console.log(`Remaining unstyled <a> tags: ${unstyledTagCount}`);
console.log(`Files with remaining placeholder phone/email in <footer>: ${footerPlaceholderContactCount}`);

if (brokenLinkCount > 0) {
  console.log(`Broken links list:`, JSON.stringify(brokenLinksList, null, 2));
}
if (unstyledTagCount > 0) {
  console.log(`Unstyled <a> tags list:`, JSON.stringify(unstyledTagsList, null, 2));
}
if (footerPlaceholderContactCount > 0) {
  console.log(`Files with footer contact info list:`, JSON.stringify(footerContactsList, null, 2));
}
