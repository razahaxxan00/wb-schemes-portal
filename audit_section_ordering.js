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
console.log(`Auditing section ordering across ${htmlFiles.length} HTML files...`);

const affectedFiles = [];

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(rootDir, file).replace(/\\/g, '/');

  const articleMatch = content.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!articleMatch) continue;

  const articleHtml = articleMatch[1];

  // Find position of FAQs and Related Schemes/Hubs
  const faqPos = articleHtml.search(/<h2>\s*Frequently Asked Questions\s*<\/h2>/i);
  const relatedPos = articleHtml.search(/<h2>\s*Related (Category Hubs|Schemes)\s*<\/h2>/i);

  if (faqPos !== -1 || relatedPos !== -1) {
    const firstEndIndex = Math.min(
      faqPos !== -1 ? faqPos : Infinity,
      relatedPos !== -1 ? relatedPos : Infinity
    );

    // Look at text after the first of FAQ or Related block
    const contentAfterFirst = articleHtml.substring(firstEndIndex);
    
    // Check if there are other h2 headers after FAQ/Related besides FAQ and Related
    const h2Matches = [...contentAfterFirst.matchAll(/<h2>([\s\S]*?)<\/h2>/gi)];
    
    const outOfOrderH2s = h2Matches.filter(m => {
      const title = m[1].replace(/<[^>]+>/g, '').trim();
      return title !== 'Frequently Asked Questions' && !title.startsWith('Related');
    }).map(m => m[1].replace(/<[^>]+>/g, '').trim());

    // Also check if Related comes BEFORE FAQ
    let relatedBeforeFaq = false;
    if (faqPos !== -1 && relatedPos !== -1 && relatedPos < faqPos) {
      relatedBeforeFaq = true;
    }

    if (outOfOrderH2s.length > 0 || relatedBeforeFaq) {
      affectedFiles.push({
        file: relPath,
        faqPos,
        relatedPos,
        relatedBeforeFaq,
        outOfOrderH2s
      });
    }
  }
}

console.log(`\nFound ${affectedFiles.length} affected files with out-of-order sections:`);
console.log(JSON.stringify(affectedFiles, null, 2));
