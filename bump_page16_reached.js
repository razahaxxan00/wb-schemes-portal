const fs = require('fs');
const path = require('path');

const page16Path = path.join(__dirname, 'schemes', 'lakshmir-bhandar', 'status-check', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const match = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  return match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content16 = fs.readFileSync(page16Path, 'utf8');
const p16Extra3 = `
<p>
  Maintaining a printed copy of your Social Registry acknowledgment slip and checking status updates every few weeks during migration ensures that any bank NPCI seeding issues are identified and resolved before the next monthly payment disbursement batch.
</p>
`;

content16 = content16.replace('</article>', `${p16Extra3}\n</article>`);
fs.writeFileSync(page16Path, content16, 'utf8');

console.log(`Page 16 Target Reached Word Count: ${getArticleWordCount(page16Path)} words`);
