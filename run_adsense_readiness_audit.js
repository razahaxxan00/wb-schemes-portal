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
console.log(`Auditing ${htmlFiles.length} HTML files for AdSense readiness...`);

// -------------------------------------------------------------
// 1. Site Completeness & Unique Page Inventory
// -------------------------------------------------------------
const pageInventory = htmlFiles.map(file => {
  const relPath = path.relative(rootDir, file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');
  
  // Word count inside main or article
  const match = content.match(/<article class="main-content">([\s\S]*?)<\/article>/i) || content.match(/<main[\s\S]*?<\/main>/i);
  let wordCount = 0;
  if (match) {
    const text = match[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    wordCount = text.split(' ').length;
  }

  const hasH1 = /<h1[^>]*>([\s\S]*?)<\/h1>/i.test(content);
  const is404 = relPath === '404.html';
  const isThin = wordCount < 600 && !is404;

  return {
    path: '/' + relPath,
    file,
    wordCount,
    hasH1,
    isThin,
    is404
  };
});

// -------------------------------------------------------------
// 2. Category Hubs Audit (13 Hubs required)
// -------------------------------------------------------------
const expectedCategoryHubs = [
  'schemes/social-welfare/index.html',
  'schemes/women-welfare/index.html',
  'schemes/farmer-schemes/index.html',
  'schemes/student-schemes/index.html',
  'schemes/scholarship-schemes/index.html',
  'schemes/pension-schemes/index.html',
  'schemes/housing-schemes/index.html',
  'schemes/health-schemes/index.html',
  'schemes/employment-schemes/index.html',
  'schemes/minority-schemes/index.html',
  'schemes/disability-schemes/index.html',
  'schemes/senior-citizen-schemes/index.html',
  'schemes/child-welfare-schemes/index.html'
];

const categoryHubsStatus = expectedCategoryHubs.map(hubRel => {
  const fullPath = path.join(rootDir, hubRel);
  const exists = fs.existsSync(fullPath);
  let wordCount = 0;
  if (exists) {
    const content = fs.readFileSync(fullPath, 'utf8');
    const match = content.match(/<article class="main-content">([\s\S]*?)<\/article>/i) || content.match(/<main[\s\S]*?<\/main>/i);
    if (match) {
      wordCount = match[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
    }
  }
  return { hub: hubRel, exists, wordCount };
});

// -------------------------------------------------------------
// 3. Technical SEO Check
// -------------------------------------------------------------
let missingH1Count = 0;
let multiH1Count = 0;
let missingCanonicalCount = 0;
let missingDisclaimerCount = 0;
let missingPrivacyFooterCount = 0;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  
  // H1 check
  const h1Matches = [...content.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
  if (h1Matches.length === 0) missingH1Count++;
  if (h1Matches.length > 1) multiH1Count++;

  // Canonical check
  if (!content.includes('<link rel="canonical"')) missingCanonicalCount++;

  // Disclaimer check
  const hasDisclaimer = content.toLowerCase().includes('independent') || content.toLowerCase().includes('not an official government');
  if (!hasDisclaimer) missingDisclaimerCount++;

  // Privacy Policy in footer check
  const hasPrivacyFooter = content.includes('href="/privacy-policy/index.html"');
  if (!hasPrivacyFooter) missingPrivacyFooterCount++;
}

// -------------------------------------------------------------
// 4. Sitemap vs Real Files Count
// -------------------------------------------------------------
const sitemapPath = path.join(rootDir, 'sitemap.xml');
let sitemapCount = 0;
if (fs.existsSync(sitemapPath)) {
  const sitemapText = fs.readFileSync(sitemapPath, 'utf8');
  const locs = [...sitemapText.matchAll(/<loc>([\s\S]*?)<\/loc>/gi)];
  sitemapCount = locs.length;
}

// -------------------------------------------------------------
// 5. Check ads.txt & robots.txt
// -------------------------------------------------------------
const adsTxtExists = fs.existsSync(path.join(rootDir, 'ads.txt'));
const robotsTxtExists = fs.existsSync(path.join(rootDir, 'robots.txt'));

console.log('\n=================== ADSENSE READINESS AUDIT RESULTS ===================');
console.log(`Total Live HTML Pages: ${htmlFiles.length}`);
console.log(`Sitemap.xml Total URLs: ${sitemapCount}`);
console.log(`robots.txt Present: ${robotsTxtExists}`);
console.log(`ads.txt Present: ${adsTxtExists} (Expected false before approval)`);
console.log(`All 13 Category Hubs Exist: ${categoryHubsStatus.every(h => h.exists)}`);
console.log(`Missing H1 Count: ${missingH1Count}`);
console.log(`Multiple H1 Count: ${multiH1Count}`);
console.log(`Missing Canonical Tags: ${missingCanonicalCount}`);
console.log(`Pages Missing Independence Disclaimer: ${missingDisclaimerCount}`);
console.log(`Pages Missing Privacy Link in Footer: ${missingPrivacyFooterCount}`);

const thinPages = pageInventory.filter(p => p.isThin);
console.log(`\nPages Under 600 Words Count: ${thinPages.length}`);
if (thinPages.length > 0) {
  console.log('Thin pages list:', JSON.stringify(thinPages.map(p => ({ path: p.path, words: p.wordCount })), null, 2));
}

console.log('\n13 Category Hubs Detailed Status:');
console.log(JSON.stringify(categoryHubsStatus, null, 2));
