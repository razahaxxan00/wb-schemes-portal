const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');

console.log('Original index.html lines before removal:', content.split('\n').length);

// Regex pattern to match all 5 specified sections
const sectionsToRemoveRegex = /<section class="content-block">\s*<h2>Key Digital Portals & On-Ground Outreach Channels<\/h2>[\s\S]*?<section class="content-block">\s*<h2>Frequently Asked Questions<\/h2>/i;

if (sectionsToRemoveRegex.test(content)) {
  content = content.replace(
    sectionsToRemoveRegex,
    '<section class="content-block">\n            <h2>Frequently Asked Questions</h2>'
  );
  fs.writeFileSync(indexPath, content, 'utf8');
  console.log('Successfully removed 5 specified sections from index.html!');
  console.log('Updated index.html lines count:', content.split('\n').length);
} else {
  console.error('Failed to match sectionsToRemoveRegex in index.html');
}
