const fs = require('fs');
const path = require('path');

const rootDir = __dirname;

function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file.startsWith('.')) continue;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getAllHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const htmlFiles = getAllHtmlFiles(rootDir);
console.log(`Checking ${htmlFiles.length} HTML files for vercel.app, vercel, contact@, support@, 1800...`);

const matches = [];

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(rootDir, file).replace(/\\/g, '/');

  // Search for terms
  if (content.toLowerCase().includes('vercel') || content.includes('@') || content.includes('1800-')) {
    // Find matching lines
    const lines = content.split('\n');
    lines.forEach((line, index) => {
      if (line.toLowerCase().includes('vercel') || (line.includes('@') && !line.includes('schema.org')) || line.includes('1800-')) {
        matches.push({
          file: relPath,
          line: index + 1,
          content: line.trim()
        });
      }
    });
  }
}

console.log(`Total matches found: ${matches.length}`);
console.log(JSON.stringify(matches, null, 2));
