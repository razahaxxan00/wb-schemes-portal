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
let footerContactMatches = [];

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(rootDir, file).replace(/\\/g, '/');

  // Look for footer-contact-block or contact items (email/phone) in footer
  const matchBlock = content.match(/<div class="footer-contact-block">([\s\S]*?)<\/div>/i);
  if (matchBlock) {
    footerContactMatches.push({
      file: relPath,
      blockHtml: matchBlock[0]
    });
  } else {
    // Check if there are individual email or phone lines in footer
    const footerMatch = content.match(/<footer[\s\S]*?<\/footer>/i);
    if (footerMatch) {
      if (footerMatch[0].includes('1800') || footerMatch[0].includes('@') || footerMatch[0].includes('contact@') || footerMatch[0].includes('support@')) {
        footerContactMatches.push({
          file: relPath,
          footerSnippet: footerMatch[0]
        });
      }
    }
  }
}

console.log(`Files with footer contact info: ${footerContactMatches.length}`);
console.log(JSON.stringify(footerContactMatches.slice(0, 5), null, 2));
