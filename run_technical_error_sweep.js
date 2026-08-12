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
console.log(`Running technical error sweep across ${htmlFiles.length} HTML files...`);

// 1. Check duplicate titles & meta descriptions
const titleMap = new Map();
const descMap = new Map();
const duplicateTitles = [];
const duplicateDescs = [];

// 2. Check <h1> count per page
const h1Issues = [];

// 3. Check images (alt text & file existence)
const imageIssues = [];

// 4. Check JSON-LD schema validity
const jsonLdIssues = [];

// 5. Check Canonical tags
const canonicalIssues = [];

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(rootDir, file).replace(/\\/g, '/');

  // Title check
  const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/i);
  if (titleMatch) {
    const titleText = titleMatch[1].trim();
    if (titleMap.has(titleText)) {
      duplicateTitles.push({ title: titleText, files: [titleMap.get(titleText), relPath] });
    } else {
      titleMap.set(titleText, relPath);
    }
  }

  // Meta description check
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/i);
  if (descMatch) {
    const descText = descMatch[1].trim();
    if (descMap.has(descText)) {
      duplicateDescs.push({ desc: descText, files: [descMap.get(descText), relPath] });
    } else {
      descMap.set(descText, relPath);
    }
  }

  // H1 tag count check
  const h1Matches = [...content.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
  if (h1Matches.length !== 1) {
    h1Issues.push({ file: relPath, count: h1Matches.length });
  }

  // Image check
  const imgMatches = [...content.matchAll(/<img\s+([^>]+)>/gi)];
  for (const match of imgMatches) {
    const attrs = match[1];
    const srcMatch = attrs.match(/src=["']([^"']+)["']/i);
    const altMatch = attrs.match(/alt=["']([^"']*)["']/i);

    if (!altMatch || altMatch[1].trim() === '') {
      imageIssues.push({ file: relPath, issue: 'Missing or empty alt text', img: match[0] });
    }

    if (srcMatch) {
      const src = srcMatch[1];
      if (!src.startsWith('http://') && !src.startsWith('https://') && !src.startsWith('data:')) {
        let imgPath = src.startsWith('/') ? path.join(rootDir, src) : path.join(path.dirname(file), src);
        if (!fs.existsSync(imgPath)) {
          imageIssues.push({ file: relPath, issue: 'Broken image file reference', src });
        }
      }
    }
  }

  // JSON-LD Schema check
  const scriptMatches = [...content.matchAll(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)];
  for (const script of scriptMatches) {
    const jsonStr = script[1].trim();
    try {
      JSON.parse(jsonStr);
    } catch (e) {
      jsonLdIssues.push({ file: relPath, error: e.message });
    }
  }

  // Canonical tag check
  const canonicalMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  if (!canonicalMatch) {
    canonicalIssues.push({ file: relPath, issue: 'Missing canonical tag' });
  } else {
    const href = canonicalMatch[1];
    if (href.includes('vercel.app')) {
      canonicalIssues.push({ file: relPath, issue: 'Canonical contains vercel.app', href });
    }
  }
}

console.log(`\n=================== TECHNICAL ERROR SWEEP RESULTS ===================`);
console.log(`Duplicate Titles: ${duplicateTitles.length}`);
console.log(`Duplicate Meta Descriptions: ${duplicateDescs.length}`);
console.log(`Pages with H1 Tag Issues (not exactly 1 H1): ${h1Issues.length}`);
console.log(`Image Alt Text / File Issues: ${imageIssues.length}`);
console.log(`Invalid JSON-LD Schemas: ${jsonLdIssues.length}`);
console.log(`Canonical Tag Issues: ${canonicalIssues.length}`);

if (duplicateTitles.length > 0) console.log('Duplicate Titles:', JSON.stringify(duplicateTitles, null, 2));
if (duplicateDescs.length > 0) console.log('Duplicate Descriptions:', JSON.stringify(duplicateDescs, null, 2));
if (h1Issues.length > 0) console.log('H1 Issues:', JSON.stringify(h1Issues, null, 2));
if (imageIssues.length > 0) console.log('Image Issues:', JSON.stringify(imageIssues, null, 2));
if (jsonLdIssues.length > 0) console.log('JSON-LD Issues:', JSON.stringify(jsonLdIssues, null, 2));
if (canonicalIssues.length > 0) console.log('Canonical Issues:', JSON.stringify(canonicalIssues, null, 2));
