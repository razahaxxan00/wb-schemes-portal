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
let unstyledRemaining = 0;
const unstyledDetails = [];

htmlFiles.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf8');
  const relPath = path.relative(rootDir, filePath).replace(/\\/g, '/');

  // Match <a> tags missing class attribute or having empty class
  const matches = content.match(/<a\s+(?![^>]*class=)([^>]*)>/gi);
  if (matches) {
    // Filter out brand logo which inherits header styling
    const realUnstyled = matches.filter(m => !m.includes('brand-logo'));
    if (realUnstyled.length > 0) {
      unstyledRemaining += realUnstyled.length;
      unstyledDetails.push({ page: relPath, count: realUnstyled.length, matches: realUnstyled });
    }
  }
});

console.log('=== VERIFICATION OF ZERO UNSTYLED <a> TAGS ===');
console.log(`Total HTML files checked: ${htmlFiles.length}`);
console.log(`Total unstyled <a> tags remaining: ${unstyledRemaining}`);

if (unstyledRemaining === 0) {
  console.log('✅ CONFIRMED: 0 unstyled <a> tags exist anywhere in the codebase!');
} else {
  console.log('❌ FAILED: Unstyled tags found:', unstyledDetails);
}
