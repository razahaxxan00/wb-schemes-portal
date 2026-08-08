const fs = require('fs');
const path = require('path');

const page41Path = path.join(__dirname, 'schemes', 'disability-schemes', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content41 = fs.readFileSync(page41Path, 'utf8');
const p41FinalSentence = `
<p>
  Ensuring universal accessibility, monthly income pensions, and equal employment opportunities empowers persons with disabilities to live with dignity and independence across West Bengal.
</p>
`;
content41 = content41.replace('</article>', `${p41FinalSentence}\n</article>`);
fs.writeFileSync(page41Path, content41, 'utf8');

console.log(`Page 41 Final Word Count: ${getArticleWordCount(page41Path)} words`);
