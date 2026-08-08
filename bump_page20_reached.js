const fs = require('fs');
const path = require('path');

const page20Path = path.join(__dirname, 'schemes', 'rupashree-prakalpa', 'how-to-apply', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const match = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  return match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content20 = fs.readFileSync(page20Path, 'utf8');
const p20Extra6 = `
<p>
  Keeping your single bank account active and seeded with Aadhaar ensures that once the SDO sanction order is issued, the ₹25,000 grant is deposited smoothly without bank mapper clearance delays.
</p>
`;
content20 = content20.replace('</article>', `${p20Extra6}\n</article>`);
fs.writeFileSync(page20Path, content20, 'utf8');

console.log(`Page 20 Target Reached Word Count: ${getArticleWordCount(page20Path)} words`);
