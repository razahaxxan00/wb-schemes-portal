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
const externalLinkInventory = [];
const issuesFound = [];

// Domain patterns for government portals
const govDomainPattern = /(?:krishakbandhu|swasthyasathi|wbmdfcscholarship|wbpds|socialsecurity|banglashasyabima|jaibangla|wbkanyashree|oasis|wbhousing|prd|pbssd|epbssd|saboojsathi)\.(?:wb\.)?(?:gov|net|in|org)/i;

htmlFiles.forEach(filePath => {
  const pageRel = path.relative(baseDir, filePath).replace(/\\/g, '/');
  const content = fs.readFileSync(filePath, 'utf8');

  // Match all <a> tags
  const tagRegex = /<a\s+([^>]+)>/gi;
  let match;

  while ((match = tagRegex.exec(content)) !== null) {
    const fullTag = match[0];
    const attrs = match[1];

    const hrefMatch = attrs.match(/href=["']([^"']+)["']/i);
    const targetMatch = attrs.match(/target=["']([^"']+)["']/i);
    const relMatch = attrs.match(/rel=["']([^"']+)["']/i);

    if (!hrefMatch) continue;
    const href = hrefMatch[1];

    // Check if link starts with http:// or https:// OR contains a gov domain
    const isExternalByProtocol = href.startsWith('http://') || href.startsWith('https://');
    const containsGovDomain = govDomainPattern.test(href) || govDomainPattern.test(fullTag);

    if (isExternalByProtocol || containsGovDomain) {
      const hasHttps = href.startsWith('https://') || href.startsWith('http://');
      const hasBlank = targetMatch && targetMatch[1] === '_blank';
      const hasNoopener = relMatch && relMatch[1].includes('noopener');

      externalLinkInventory.push({
        page: pageRel,
        href: href,
        hasHttps: hasHttps,
        hasBlank: hasBlank,
        hasNoopener: hasNoopener,
        fullTag: fullTag
      });

      if (!hasHttps || !hasBlank || !hasNoopener) {
        issuesFound.push({
          page: pageRel,
          href: href,
          issue: !hasHttps ? 'Missing https:// protocol' : 'Missing target="_blank" / rel="noopener"'
        });
      }
    }
  }
});

console.log(`========================================`);
console.log(`External Links Audit Results`);
console.log(`Total HTML files scanned: ${htmlFiles.length}`);
console.log(`Total external government links found: ${externalLinkInventory.length}`);
console.log(`Issues found: ${issuesFound.length}`);
console.log(`========================================\n`);

console.log(`Full Inventory of External Links:\n`);
externalLinkInventory.forEach((item, idx) => {
  console.log(`${idx + 1}. Page: /${item.page}`);
  console.log(`   href: "${item.href}"`);
  console.log(`   target="_blank": ${item.hasBlank}, rel="noopener": ${item.hasNoopener}\n`);
});

if (issuesFound.length > 0) {
  console.log(`\nIssues Needing Fixes:\n`);
  issuesFound.forEach(item => {
    console.log(`- Page: /${item.page} | href: "${item.href}" | Issue: ${item.issue}`);
  });
}
