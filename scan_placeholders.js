const fs = require('fs');
const path = require('path');

const baseDir = path.resolve('C:/Users/Raza Hassan/.gemini/antigravity-ide/scratch/wb-schemes-portal');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.html')) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });

  return arrayOfFiles;
}

const htmlFiles = getAllFiles(baseDir);
const bracketRegex = /\[[^\]]+\]/g;

console.log("Scanning for all bracketed text across 51 HTML pages...\n");

htmlFiles.forEach(filePath => {
  const relPath = path.relative(baseDir, filePath).replace(/\\/g, '/');
  const content = fs.readFileSync(filePath, 'utf8');

  // Find all bracketed text
  const matches = content.match(bracketRegex);
  if (matches) {
    console.log(`📄 Page: /${relPath}`);
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      if (bracketRegex.test(line)) {
        console.log(`  Line ${idx + 1}: ${line.trim()}`);
      }
    });
    console.log('');
  }
});
