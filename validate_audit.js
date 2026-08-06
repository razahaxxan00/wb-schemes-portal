const fs = require('fs');
const path = require('path');

const rootDir = __dirname;

function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === 'brain') continue;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const htmlFiles = getHtmlFiles(rootDir);
const titles = {};
const descriptions = {};
const thinPages = [];
const h1Issues = [];
let totalImagesChecked = 0;
let missingAltCount = 0;

htmlFiles.forEach(filePath => {
  const relPath = path.relative(rootDir, filePath).replace(/\\/g, '/');
  const content = fs.readFileSync(filePath, 'utf8');

  // Title check
  const titleMatch = content.match(/<title>(.*?)<\/title>/i);
  if (titleMatch) {
    const t = titleMatch[1].trim();
    if (titles[t]) {
      titles[t].push(relPath);
    } else {
      titles[t] = [relPath];
    }
  }

  // Meta Description check
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
  if (descMatch) {
    const d = descMatch[1].trim();
    if (descriptions[d]) {
      descriptions[d].push(relPath);
    } else {
      descriptions[d] = [relPath];
    }
  }

  // H1 Tag Count Check
  const h1Matches = content.match(/<h1[\s>]/gi);
  const h1Count = h1Matches ? h1Matches.length : 0;
  if (h1Count !== 1) {
    h1Issues.push({ file: relPath, count: h1Count });
  }

  // Word count (thin content check <600 words)
  const plainText = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const wordCount = plainText.split(' ').length;
  if (wordCount < 600 && relPath !== '404.html') {
    thinPages.push({ file: relPath, wordCount });
  }

  // Image alt attribute check
  const imgMatches = content.match(/<img[^>]+>/gi) || [];
  imgMatches.forEach(imgTag => {
    totalImagesChecked++;
    if (!imgTag.includes('alt=') || imgTag.includes('alt=""')) {
      missingAltCount++;
    }
  });
});

console.log('=== TECHNICAL SEO AUDIT RESULTS ===');
console.log(`Total HTML files audited: ${htmlFiles.length}`);

// Duplicate Titles
const dupTitles = Object.keys(titles).filter(t => titles[t].length > 1);
console.log(`\nDuplicate <title> tags found: ${dupTitles.length}`);
dupTitles.forEach(t => console.log(`  - "${t}": ${titles[t].join(', ')}`));

// Duplicate Meta Descriptions
const dupDescs = Object.keys(descriptions).filter(d => descriptions[d].length > 1);
console.log(`\nDuplicate meta descriptions found: ${dupDescs.length}`);
dupDescs.forEach(d => console.log(`  - "${d.slice(0, 50)}...": ${descriptions[d].join(', ')}`));

// H1 Tag Issues
console.log(`\nMultiple or Missing <h1> tags: ${h1Issues.length}`);
h1Issues.forEach(i => console.log(`  - ${i.file}: ${i.count} <h1> tags found`));

// Thin Content Pages (<600 words)
console.log(`\nThin Content Pages (<600 words flagged for review): ${thinPages.length}`);
thinPages.forEach(p => console.log(`  - ${p.file}: ${p.wordCount} words`));

console.log(`\nImages checked: ${totalImagesChecked}, Missing Alt: ${missingAltCount}`);
