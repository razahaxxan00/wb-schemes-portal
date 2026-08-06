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

htmlFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/← Back to Overview Overview/g, '← Back to Homepage');
  content = content.replace(/← Back to All Schemes \(Homepage\)/g, '← Back to Homepage');
  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Cleaned back link text formatting across all HTML files.');
