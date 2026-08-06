const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const legalPages = [
  'disclaimer/index.html',
  'privacy-policy/index.html',
  'about/index.html',
  'contact/index.html'
];

legalPages.forEach(relPath => {
  const filePath = path.join(rootDir, relPath);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/<article class="article-body">/g, '<article class="article-body no-toc">');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Disabled TOC on ${relPath}`);
  }
});
