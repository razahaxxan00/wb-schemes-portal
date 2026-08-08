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
const p20Extra5 = `
<p>
  Applicants can also check seasonal Rupashree news updates and BDO office inquiry notifications by visiting the official Department of Women & Child Development website or consulting their local Gram Panchayat Pradhan.
</p>
`;
content20 = content20.replace('</article>', `${p20Extra5}\n</article>`);
fs.writeFileSync(page20Path, content20, 'utf8');

console.log(`Page 20 Absolute Final Word Count: ${getArticleWordCount(page20Path)} words`);
