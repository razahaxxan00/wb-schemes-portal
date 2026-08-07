const fs = require('fs');
const content = fs.readFileSync('schemes/krishak-bandhu/index.html', 'utf8');
const articleMatch = content.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
if (articleMatch) {
  const textOnly = articleMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = textOnly.split(' ').length;
  console.log(`Article word count: ${words}`);
}
