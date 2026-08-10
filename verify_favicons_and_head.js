const fs = require('fs');
const path = require('path');

const rootDir = __dirname;

// 1. Verify File Set in root directory
const expectedFiles = [
  'favicon.ico',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'apple-touch-icon.png',
  'android-chrome-192x192.png',
  'android-chrome-512x512.png',
  'site.webmanifest'
];

console.log('=== VERIFYING FAVICON FILE SET ===');
let filesOk = true;

for (const file of expectedFiles) {
  const filePath = path.join(rootDir, file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ MISSING FILE: ${file}`);
    filesOk = false;
  } else {
    const stat = fs.statSync(filePath);
    console.log(`✅ ${file} (${stat.size} bytes)`);
  }
}

// 2. Verify site.webmanifest contents
console.log('\n=== VERIFYING SITE.WEBMANIFEST ===');
const manifestContent = JSON.parse(fs.readFileSync(path.join(rootDir, 'site.webmanifest'), 'utf8'));
console.log(`Name: ${manifestContent.name}`);
console.log(`Short Name: ${manifestContent.short_name}`);
console.log(`Theme Color: ${manifestContent.theme_color}`);
console.log(`Background Color: ${manifestContent.background_color}`);
console.log(`Icons Count: ${manifestContent.icons.length}`);

// 3. Verify Head Tags across all HTML files
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
console.log(`\n=== VERIFYING HEAD TAGS ACROSS ${htmlFiles.length} HTML FILES ===`);

let missingFaviconTagsCount = 0;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(rootDir, file).replace(/\\/g, '/');

  const hasIco = content.includes('href="/favicon.ico"');
  const has32 = content.includes('href="/favicon-32x32.png"');
  const has16 = content.includes('href="/favicon-16x16.png"');
  const hasApple = content.includes('href="/apple-touch-icon.png"');
  const hasManifest = content.includes('href="/site.webmanifest"');
  const hasThemeColor = content.includes('content="#0b3c5d"');

  if (!hasIco || !has32 || !has16 || !hasApple || !hasManifest || !hasThemeColor) {
    missingFaviconTagsCount++;
    console.error(`❌ Incomplete favicon tags in ${relPath}`);
  }
}

console.log(`\n=================== VERIFICATION SUMMARY ===================`);
console.log(`Files Set Complete: ${filesOk}`);
console.log(`HTML Files with Complete Favicon Tags: ${htmlFiles.length - missingFaviconTagsCount} / ${htmlFiles.length}`);

if (filesOk && missingFaviconTagsCount === 0) {
  console.log(`✅ CONFIRMED: Complete favicon file set generated and injected into all 61 HTML files!`);
}
