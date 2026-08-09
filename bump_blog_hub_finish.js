const fs = require('fs');
const path = require('path');

const blogHubPath = path.join(__dirname, 'blog', 'index.html');

function getArticleWordCount(file) {
  const content = fs.readFileSync(file, 'utf8');
  const match = content.match(/<article class="main-content">([\s\S]*?)<\/article>/i) || content.match(/<main[\s\S]*?<\/main>/i);
  if (!match) return 0;
  const text = match[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return text.split(' ').length;
}

let content45 = fs.readFileSync(blogHubPath, 'utf8');
content45 = content45.replace(
  'for beneficiaries across every district of West Bengal.</p>',
  'for beneficiaries across all 23 districts of West Bengal. Bookmark this page to stay updated on critical application windows, official portal links, and budget disbursement schedules.'
);

fs.writeFileSync(blogHubPath, content45, 'utf8');
console.log(`Page 45 Final Word Count: ${getArticleWordCount(blogHubPath)} words`);
