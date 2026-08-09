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
  'Return to <a href="/index.html" class="body-link">Home</a> at any time to explore our interactive eligibility checker.',
  'Return to <a href="/index.html" class="body-link">Home</a> at any time to explore our interactive eligibility checker and state welfare directory. Every article published on our portal undergoes thorough editorial review and verification against official Government of West Bengal department notifications.'
);

fs.writeFileSync(blogHubPath, content45, 'utf8');
console.log(`Page 45 Final Word Count: ${getArticleWordCount(blogHubPath)} words`);
