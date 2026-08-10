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
console.log(`Processing ${htmlFiles.length} HTML files to add favicon head tags...`);

const faviconTags = `  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">
  <meta name="theme-color" content="#0b3c5d">`;

let filesModified = 0;

for (const file of htmlFiles) {
  let content = fs.readFileSync(file, 'utf8');

  // Remove any existing favicon tags to avoid duplication
  content = content.replace(/<link\s+rel=["'](shortcut\s+)?icon["'][^>]*>\s*/gi, '');
  content = content.replace(/<link\s+rel=["']apple-touch-icon["'][^>]*>\s*/gi, '');
  content = content.replace(/<link\s+rel=["']manifest["'][^>]*>\s*/gi, '');
  content = content.replace(/<meta\s+name=["']theme-color["'][^>]*>\s*/gi, '');

  // Insert before </head>
  if (content.includes('</head>')) {
    content = content.replace('</head>', `${faviconTags}\n</head>`);
    fs.writeFileSync(file, content, 'utf8');
    filesModified++;
  }
}

console.log(`Successfully added favicon <head> tags to ${filesModified} HTML files.`);
