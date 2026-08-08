const fs = require('fs');
const path = require('path');

const page43Path = path.join(__dirname, 'schemes', 'child-welfare-schemes', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content43 = fs.readFileSync(page43Path, 'utf8');
const p43FinalSentence = `
<p>
  Comprehensive child protection, specialized healthcare, and early nutrition programs work together to ensure that every child in West Bengal grows up healthy, educated, and protected from economic hardship.
</p>
`;
content43 = content43.replace('</article>', `${p43FinalSentence}\n</article>`);
fs.writeFileSync(page43Path, content43, 'utf8');

console.log(`Page 43 Final Word Count: ${getArticleWordCount(page43Path)} words`);
