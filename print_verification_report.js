const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync('verification_evidence.json', 'utf8'));

console.log(`=== SUMMARY METRICS ===`);
console.log(`Total HTML files: ${data.totalFiles}`);
console.log(`Missing canonicals: ${data.missingCanonicals.length}`);
console.log(`Wrong domain canonicals: ${data.wrongDomainCanonicals.length}`);
console.log(`Duplicate titles: ${data.duplicateTitles.length}`);
console.log(`Duplicate descriptions: ${data.duplicateDescs.length}`);
console.log(`H1 issues (not equal to 1): ${data.h1Issues.length}`);

console.log(`\n=== SAMPLE SPOT CHECK (5 PAGES) ===`);
const samplePages = [
  'index.html',
  'schemes/lakshmir-bhandar/index.html',
  'schemes/swasthya-sathi/index.html',
  'schemes/krishak-bandhu/index.html',
  'schemes/aikyashree-scholarship/index.html'
];

samplePages.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  const title = (content.match(/<title>(.*?)<\/title>/i) || [])[1];
  const h1 = (content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1]?.replace(/<[^>]+>/g, '').trim();
  const pMatch = content.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  const firstP = pMatch ? pMatch[1].replace(/<[^>]+>/g, '').trim() : '';

  console.log(`\nPAGE: ${p}`);
  console.log(`TITLE: ${title}`);
  console.log(`H1: ${h1}`);
  console.log(`FIRST PARAGRAPH: ${firstP.slice(0, 150)}...`);
});

console.log(`\n=== CRAWL DEPTH HIGHLIGHTS ===`);
const depthCounts = {};
Object.keys(data.crawlDepths).forEach(p => {
  const d = data.crawlDepths[p];
  depthCounts[d] = (depthCounts[d] || 0) + 1;
});
console.log('Depth distribution:', depthCounts);
