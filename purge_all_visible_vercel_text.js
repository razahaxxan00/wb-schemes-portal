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
console.log(`Processing ${htmlFiles.length} HTML files to strip visible vercel.app text from body...`);

let modifiedFilesCount = 0;

for (const file of htmlFiles) {
  let content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(rootDir, file).replace(/\\/g, '/');

  // Split into head and body
  const bodyStart = content.indexOf('<body');
  if (bodyStart === -1) continue;

  let headPart = content.substring(0, bodyStart);
  let bodyPart = content.substring(bodyStart);

  let bodyModified = false;

  // 1. Replace visible text occurrences of vercel.app in body
  if (bodyPart.includes('wb-schemes-portal-three.vercel.app')) {
    bodyPart = bodyPart.replace(/wb-schemes-portal-three\.vercel\.app/g, 'WB Schemes Portal');
    bodyModified = true;
  }

  if (bodyPart.includes('vercel.app')) {
    bodyPart = bodyPart.replace(/vercel\.app/g, 'WB Schemes Portal');
    bodyModified = true;
  }

  // 2. Clean empty code tags or broken text from previous replaces
  if (bodyPart.includes('or email us at <code></code>.')) {
    bodyPart = bodyPart.replace('or email us at <code></code>.', '');
    bodyModified = true;
  }

  if (bodyModified) {
    fs.writeFileSync(file, headPart + bodyPart, 'utf8');
    modifiedFilesCount++;
    console.log(`Cleaned visible vercel.app text from body in ${relPath}`);
  }
}

console.log(`Successfully cleaned visible vercel.app text from ${modifiedFilesCount} files.`);
