const fs = require('fs');

const data = JSON.parse(fs.readFileSync('verification_evidence.json', 'utf8'));

console.log('=== WORD COUNTS SORTED ===');
data.wordCounts.forEach((w, idx) => {
  console.log(`${idx + 1}. ${w.rel}: ${w.wordCount} words`);
});

console.log('\n=== CRAWL DEPTHS ===');
Object.keys(data.crawlDepths).sort().forEach(rel => {
  console.log(`${rel}: Depth ${data.crawlDepths[rel]}`);
});
