const fs = require('fs');
const path = require('path');

const page37Path = path.join(__dirname, 'schemes', 'housing-schemes', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content37 = fs.readFileSync(page37Path, 'utf8');
const p37FinalSentence = `
<p>
  Accessing state housing assistance empowers vulnerable families to build lasting assets, providing protection against seasonal monsoons and fostering sustainable rural development.
</p>
`;
content37 = content37.replace('</article>', `${p37FinalSentence}\n</article>`);
fs.writeFileSync(page37Path, content37, 'utf8');

console.log(`Page 37 Final Word Count: ${getArticleWordCount(page37Path)} words`);
