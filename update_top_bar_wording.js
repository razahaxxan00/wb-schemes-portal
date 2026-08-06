const fs = require('fs');
const path = require('path');

const rootDir = __dirname;

function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === 'brain') continue;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const htmlFiles = getHtmlFiles(rootDir);

const standardTopBar = `<div class="top-bar">
      <div class="container">
        <span>Independent Public Information Guide</span>
        <span>West Bengal Welfare Schemes Directory 2026</span>
      </div>
    </div>`;

let count = 0;

htmlFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace top-bar block
  content = content.replace(/<div class="top-bar">[\s\S]*?<\/div>\s*<\/div>/gi, standardTopBar);

  // Replace brand logo subtitle if it says "Government Welfare & Development Initiatives"
  content = content.replace(/<p>Government Welfare & Development Initiatives<\/p>/gi, '<p>Public Guide for State Welfare Initiatives</p>');
  content = content.replace(/<p>Official Government Welfare Portal<\/p>/gi, '<p>Public Guide for State Welfare Initiatives</p>');

  fs.writeFileSync(filePath, content, 'utf8');
  count++;
});

console.log(`Successfully updated top bar & header brand subtitle across all ${count} HTML files!`);
