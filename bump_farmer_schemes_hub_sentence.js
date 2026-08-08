const fs = require('fs');
const path = require('path');

const page33Path = path.join(__dirname, 'schemes', 'farmer-schemes', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content33 = fs.readFileSync(page33Path, 'utf8');
const p33FinalSentence = `
<p>
  Enrolling in state farmer welfare programs ensures long-term agricultural stability, protecting household livelihoods against climate volatility across all districts of West Bengal.
</p>
`;
content33 = content33.replace('</article>', `${p33FinalSentence}\n</article>`);
fs.writeFileSync(page33Path, content33, 'utf8');

console.log(`Page 33 Final Word Count: ${getArticleWordCount(page33Path)} words`);
