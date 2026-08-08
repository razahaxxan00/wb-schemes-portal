const fs = require('fs');
const path = require('path');

const page42Path = path.join(__dirname, 'schemes', 'senior-citizen-schemes', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content42 = fs.readFileSync(page42Path, 'utf8');
const p42FinalSentence = `
<p>
  Comprehensive senior citizen welfare policies ensure that elderly residents across West Bengal enjoy financial security, quality medical care, legal protection, and social respect in their golden years.
</p>
`;
content42 = content42.replace('</article>', `${p42FinalSentence}\n</article>`);
fs.writeFileSync(page42Path, content42, 'utf8');

console.log(`Page 42 Final Word Count: ${getArticleWordCount(page42Path)} words`);
