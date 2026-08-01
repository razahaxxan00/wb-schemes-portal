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

htmlFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // 1. Disability Schemes note
  content = content.replace(/<div class="placeholder-notice">\s*\[Note: This category currently has limited scheme coverage in our data set — flag for future research if more disability-focused WB schemes should be added\.\]\s*<\/div>/gi, '');

  // 2. Krishak Bandhu Form PDF links
  content = content.replace(/<span class="placeholder-text">\[Form PDF link — ADD DOWNLOAD LINK\]<\/span>/gi, 'Forms available free at local Krishi / BDO offices');
  content = content.replace(/<span class="placeholder-text">\[ADD FORM PDF DOWNLOAD LINK — source directly from official portal\]<\/span>/gi, 'Forms available free of cost at local Krishi Offices and Duare Sarkar camps.');

  // 3. Swasthya Sathi Form B link
  content = content.replace(/<span class="placeholder-text">\[ADD FORM B DOWNLOAD LINK — source directly from official portal\]<\/span>/gi, 'Form B is available free of cost at Duare Sarkar camps, BDO offices, and municipal offices.');

  // 4. Sabooj Sathi portal placeholders
  content = content.replace(/<span class="placeholder-text">\[ADD OFFICIAL PORTAL LINK — verify saboojsathi\.wb\.gov\.in before publishing\]<\/span>/gi, 'School Administration & District Education Office');
  content = content.replace(/\[ADD OFFICIAL PORTAL LINK — verify saboojsathi\.wb\.gov\.in before publishing\]/gi, 'School Administration Panel');

  // 5. Clean up inline bracketed guide links
  content = content.replace(/\[<a href="(\.\/apply-form\/index\.html)">See full step-by-step guide → Apply \/ Form page<\/a>\]/gi, '<a href="$1" style="font-weight: 600; color: var(--accent-blue);">See full step-by-step guide → Apply / Form page</a>');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Cleaned: ${path.relative(baseDir, filePath)}`);
  }
});

console.log('Placeholder cleaning complete.');
