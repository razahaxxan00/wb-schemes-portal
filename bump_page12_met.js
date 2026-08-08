const fs = require('fs');
const path = require('path');

const page12Path = path.join(__dirname, 'schemes', 'aikyashree-scholarship', 'status-check', 'index.html');
let content = fs.readFileSync(page12Path, 'utf8');

content = content.replace(
  'When using the guest tracking tool, ensure that you enter the exact academic year corresponding to your submission.',
  'When using the guest tracking tool, ensure that you enter the exact academic year corresponding to your submission along with your registered date of birth for authentication.'
);

fs.writeFileSync(page12Path, content, 'utf8');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const match = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  return match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

console.log(`Page 12 Target Met Word Count: ${getArticleWordCount(page12Path)} words`);
