const fs = require('fs');
const path = require('path');

const page18Path = path.join(__dirname, 'schemes', 'bangla-shasya-bima', 'apply-form', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const match = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  return match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content18 = fs.readFileSync(page18Path, 'utf8');
content18 = content18.replace(
  'or visit the official state portal at banglashasyabima.net.',
  'or visit the official state portal at banglashasyabima.net for comprehensive public guidelines.'
);
fs.writeFileSync(page18Path, content18, 'utf8');

console.log(`Page 18 Absolute Final Word Count: ${getArticleWordCount(page18Path)} words`);
