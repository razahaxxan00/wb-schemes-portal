const fs = require('fs');
const path = require('path');

const page14Path = path.join(__dirname, 'schemes', 'khadya-sathi', 'card-download', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const match = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  return match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content14 = fs.readFileSync(page14Path, 'utf8');

const extraText = `
<p>
  Additionally, beneficiaries can present their e-ration card at any authorized Duare Sarkar outreach camp for on-the-spot verification and immediate updating of family member records.
</p>
`;

content14 = content14.replace('</article>', `${extraText}\n</article>`);
fs.writeFileSync(page14Path, content14, 'utf8');

console.log(`Page 14 Absolute Final Word Count: ${getArticleWordCount(page14Path)} words`);
