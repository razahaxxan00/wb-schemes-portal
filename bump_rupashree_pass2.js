const fs = require('fs');
const path = require('path');

const page19Path = path.join(__dirname, 'schemes', 'rupashree-prakalpa', 'index.html');
const page20Path = path.join(__dirname, 'schemes', 'rupashree-prakalpa', 'how-to-apply', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const match = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  return match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content19 = fs.readFileSync(page19Path, 'utf8');
content19 = content19.replace(
  'celebrate their daughter\'s marriage with dignity.',
  'celebrate their daughter\'s marriage with dignity and total financial security.'
);
fs.writeFileSync(page19Path, content19, 'utf8');


let content20 = fs.readFileSync(page20Path, 'utf8');
const p20Extra4 = `
<p>
  Submitting complete document attachments and verifying your application receipt number with BDO/SDO welfare staff guarantees seamless processing and timely Direct Benefit Transfer credit ahead of your scheduled wedding date.
</p>
`;
content20 = content20.replace('</article>', `${p20Extra4}\n</article>`);
fs.writeFileSync(page20Path, content20, 'utf8');

console.log(`Page 19 Final Word Count: ${getArticleWordCount(page19Path)} words`);
console.log(`Page 20 Final Word Count: ${getArticleWordCount(page20Path)} words`);
