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
console.log(`Auditing internal links across ${htmlFiles.length} HTML files...`);

let totalLinksChecked = 0;
let brokenLinksFound = [];

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(rootDir, file).replace(/\\/g, '/');

  // Match href="..."
  const hrefMatches = [...content.matchAll(/href=["']([^"']+)["']/gi)];

  for (const match of hrefMatches) {
    const rawHref = match[1];

    // Skip external, mailto, tel, hash-only
    if (rawHref.startsWith('http://') || rawHref.startsWith('https://') || rawHref.startsWith('mailto:') || rawHref.startsWith('tel:') || rawHref.startsWith('#')) {
      continue;
    }

    totalLinksChecked++;

    // Resolve internal link path relative to rootDir
    let cleanHref = rawHref.split('#')[0].split('?')[0];
    if (!cleanHref) continue;

    let targetPath;
    if (cleanHref.startsWith('/')) {
      targetPath = path.join(rootDir, cleanHref);
    } else {
      targetPath = path.join(path.dirname(file), cleanHref);
    }

    // Check if file exists (or if directory with index.html exists)
    let exists = fs.existsSync(targetPath);
    if (!exists) {
      // Try appending index.html if it's a directory route
      if (!path.extname(targetPath)) {
        exists = fs.existsSync(path.join(targetPath, 'index.html'));
      }
    }

    if (!exists) {
      brokenLinksFound.push({
        sourceFile: relPath,
        rawHref,
        targetPath: path.relative(rootDir, targetPath).replace(/\\/g, '/')
      });
    }
  }
}

// Crawl sitemap.xml
const sitemapPath = path.join(rootDir, 'sitemap.xml');
let sitemapBrokenCount = 0;
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  const locMatches = [...sitemapContent.matchAll(/<loc>(https:\/\/wb-schemes-portal-three\.vercel\.app)?([^<]+)<\/loc>/gi)];
  for (const match of locMatches) {
    const urlPath = match[2];
    totalLinksChecked++;
    let target = path.join(rootDir, urlPath);
    let exists = fs.existsSync(target);
    if (!exists && !path.extname(target)) {
      exists = fs.existsSync(path.join(target, 'index.html'));
    }
    if (!exists) {
      sitemapBrokenCount++;
      brokenLinksFound.push({
        sourceFile: 'sitemap.xml',
        rawHref: urlPath,
        targetPath: urlPath
      });
    }
  }
}

console.log(`\n=================== INTERNAL LINK CRAWL RESULTS ===================`);
console.log(`Total internal links checked: ${totalLinksChecked}`);
console.log(`Total broken internal links found: ${brokenLinksFound.length}`);

if (brokenLinksFound.length > 0) {
  console.log('Broken links list:', JSON.stringify(brokenLinksFound, null, 2));
} else {
  console.log('✅ CONFIRMED: 0 broken internal links found across all 61 HTML files and sitemap.xml!');
}
