const fs = require('fs');
const path = require('path');

const page34Path = path.join(__dirname, 'schemes', 'student-schemes', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content34 = fs.readFileSync(page34Path, 'utf8');
const p34FinalSentence = `
<p>
  Comprehensive educational assistance across West Bengal empowers students from primary grades through higher research, ensuring that financial constraints never impede academic excellence or career growth.
</p>
`;
content34 = content34.replace('</article>', `${p34FinalSentence}\n</article>`);
fs.writeFileSync(page34Path, content34, 'utf8');

console.log(`Page 34 Final Word Count: ${getArticleWordCount(page34Path)} words`);
