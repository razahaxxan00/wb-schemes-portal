const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const oldDomain = 'https://wbschemes.in';
const newDomain = 'https://wb-schemes-portal-three.vercel.app';

// 1. Update generate_sitemap.js
const sitemapGeneratorFile = path.join(rootDir, 'generate_sitemap.js');
if (fs.existsSync(sitemapGeneratorFile)) {
  let content = fs.readFileSync(sitemapGeneratorFile, 'utf8');
  content = content.replace(/const domain = ['"]https:\/\/wbschemes\.in['"];/g, `const domain = '${newDomain}';`);
  fs.writeFileSync(sitemapGeneratorFile, content, 'utf8');
  console.log(`Updated domain in generate_sitemap.js`);
}

// 2. Update robots.txt
const robotsFile = path.join(rootDir, 'robots.txt');
if (fs.existsSync(robotsFile)) {
  let content = fs.readFileSync(robotsFile, 'utf8');
  content = content.replace(/https:\/\/wbschemes\.in/g, newDomain);
  fs.writeFileSync(robotsFile, content, 'utf8');
  console.log(`Updated domain in robots.txt`);
}

// 3. Update all HTML files
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
let htmlUpdated = 0;

htmlFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes(oldDomain) || content.includes('wbschemes.in')) {
    content = content.replace(/https:\/\/wbschemes\.in/g, newDomain);
    content = content.replace(/wbschemes\.in/g, 'wb-schemes-portal-three.vercel.app');
    fs.writeFileSync(filePath, content, 'utf8');
    htmlUpdated++;
  }
});

console.log(`Updated domain references in ${htmlUpdated} HTML files.`);

// 4. Regenerate sitemap.xml
require('./generate_sitemap.js');
console.log('Regenerated sitemap.xml with new Vercel domain!');
