const fs = require('fs');
const path = require('path');

const page39Path = path.join(__dirname, 'schemes', 'employment-schemes', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content39 = fs.readFileSync(page39Path, 'utf8');
const p39FinalSentence = `
<p>
  Integrating skill training, financial self-employment credits, and monthly income allowances creates a robust workforce ecosystem, supporting youth empowerment across West Bengal.
</p>
`;
content39 = content39.replace('</article>', `${p39FinalSentence}\n</article>`);
fs.writeFileSync(page39Path, content39, 'utf8');

console.log(`Page 39 Final Word Count: ${getArticleWordCount(page39Path)} words`);
