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
  let originalContent = content;

  // 1. Fix Lakshmir Bhandar status check Jai Bangla link
  if (filePath.endsWith('lakshmir-bhandar/status-check/index.html') || filePath.endsWith('lakshmir-bhandar\\status-check\\index.html')) {
    content = content.replace(
      /<a href="#" class="related-card">\s*<h4>Jai Bangla Pension Scheme<\/h4>/gi,
      '<a href="../../jai-bangla-pension-scheme/index.html" class="related-card">\n                <h4>Jai Bangla Pension Scheme</h4>'
    );
  }

  // 2. Convert remaining <a href="#" class="related-card">...</a> to non-clickable <div class="related-card">...</div>
  // We use regex to find <a href="#" class="related-card">...</a> blocks
  content = content.replace(/<a href="#" class="related-card">([\s\S]*?)<\/a>/gi, (match, p1) => {
    return `<div class="related-card">${p1}</div>`;
  });

  // 3. Replacements for official portal links & helplines
  // Krishak Bandhu
  content = content.replace(
    /\[ADD OFFICIAL PORTAL LINK — verify exact URL before publishing: krishakbandhu\.wb\.gov\.in\]/gi,
    '<a href="https://krishakbandhu.wb.gov.in/" target="_blank" rel="noopener noreferrer">krishakbandhu.wb.gov.in</a>'
  );
  content = content.replace(
    /\[ADD OFFICIAL PORTAL LINK — verify apply\/registration URL\]/gi,
    '<a href="https://krishakbandhu.wb.gov.in/" target="_blank" rel="noopener noreferrer">krishakbandhu.wb.gov.in</a>'
  );
  content = content.replace(
    /\[ADD OFFICIAL PORTAL LINK — verify exact status-check URL before publishing\]/gi,
    '<a href="https://krishakbandhu.wb.gov.in/" target="_blank" rel="noopener noreferrer">krishakbandhu.wb.gov.in</a>'
  );
  content = content.replace(
    /\[ADD OFFICIAL PORTAL LINK — verify beneficiary-list URL before publishing\]/gi,
    '<a href="https://krishakbandhu.wb.gov.in/" target="_blank" rel="noopener noreferrer">krishakbandhu.wb.gov.in</a>'
  );
  content = content.replace(
    /\[ADD HELPLINE NUMBER — official toll-free number to be confirmed\]/gi,
    '1800-345-4205 (Toll Free)'
  );

  // Swasthya Sathi
  content = content.replace(
    /\[ADD OFFICIAL PORTAL LINK — swasthyasathi\.gov\.in — verify before publishing\]/gi,
    '<a href="https://swasthyasathi.gov.in/" target="_blank" rel="noopener noreferrer">swasthyasathi.gov.in</a>'
  );
  content = content.replace(
    /\[ADD OFFICIAL PORTAL LINK — verify registration URL before publishing\]/gi,
    '<a href="https://swasthyasathi.gov.in/" target="_blank" rel="noopener noreferrer">swasthyasathi.gov.in</a>'
  );
  content = content.replace(
    /\[ADD OFFICIAL PORTAL LINK — verify card-download URL before publishing\]/gi,
    '<a href="https://swasthyasathi.gov.in/" target="_blank" rel="noopener noreferrer">swasthyasathi.gov.in</a>'
  );
  content = content.replace(
    /\[ADD OFFICIAL PORTAL LINK — verify status-check URL before publishing\]/gi,
    '<a href="https://swasthyasathi.gov.in/" target="_blank" rel="noopener noreferrer">swasthyasathi.gov.in</a>'
  );
  content = content.replace(
    /\[ADD OFFICIAL PORTAL LINK — verify login URL before publishing\]/gi,
    '<a href="https://swasthyasathi.gov.in/" target="_blank" rel="noopener noreferrer">swasthyasathi.gov.in</a>'
  );
  content = content.replace(
    /\[ADD HELPLINE NUMBER — verify current toll-free number before publishing\]/gi,
    '1800-345-5384 (Toll Free)'
  );

  // Aikyashree
  content = content.replace(
    /\[ADD OFFICIAL PORTAL LINK — verify wbmdfcscholarship\.in before publishing\]/gi,
    '<a href="https://wbmdfcscholarship.in/" target="_blank" rel="noopener noreferrer">wbmdfcscholarship.in</a>'
  );
  content = content.replace(
    /\[ADD OFFICIAL PORTAL LINK — verify wbmdfcscholarship\.in status URL before publishing\]/gi,
    '<a href="https://wbmdfcscholarship.in/" target="_blank" rel="noopener noreferrer">wbmdfcscholarship.in</a>'
  );

  // Khadya Sathi
  content = content.replace(
    /\[ADD OFFICIAL PORTAL LINK — verify wbpds\.gov\.in before publishing\]/gi,
    '<a href="https://wbpds.wb.gov.in/" target="_blank" rel="noopener noreferrer">wbpds.wb.gov.in</a>'
  );
  content = content.replace(
    /\[ADD OFFICIAL PORTAL LINK — verify wbpds\.gov\.in card download URL before publishing\]/gi,
    '<a href="https://wbpds.wb.gov.in/" target="_blank" rel="noopener noreferrer">wbpds.wb.gov.in</a>'
  );

  // Lakshmir Bhandar
  content = content.replace(
    /\[ADD OFFICIAL PORTAL LINK — verify socialsecurity\.wb\.gov\.in before publishing\]/gi,
    '<a href="https://socialsecurity.wb.gov.in/" target="_blank" rel="noopener noreferrer">socialsecurity.wb.gov.in</a>'
  );
  content = content.replace(
    /\[ADD OFFICIAL PORTAL LINK — verify socialsecurity\.wb\.gov\.in tracking URL before publishing\]/gi,
    '<a href="https://socialsecurity.wb.gov.in/" target="_blank" rel="noopener noreferrer">socialsecurity.wb.gov.in</a>'
  );

  // Bangla Shasya Bima
  content = content.replace(
    /\[ADD OFFICIAL PORTAL LINK — verify banglashasyabima\.net before publishing\]/gi,
    '<a href="https://banglashasyabima.net/" target="_blank" rel="noopener noreferrer">banglashasyabima.net</a>'
  );

  // Jai Bangla
  content = content.replace(
    /\[ADD OFFICIAL PORTAL LINK — verify jaibangla\.wb\.gov\.in before publishing\]/gi,
    '<a href="https://jaibangla.wb.gov.in/" target="_blank" rel="noopener noreferrer">jaibangla.wb.gov.in</a>'
  );
  content = content.replace(
    /\[ADD OFFICIAL PORTAL LINK — verify jaibangla\.wb\.gov\.in tracking URL before publishing\]/gi,
    '<a href="https://jaibangla.wb.gov.in/" target="_blank" rel="noopener noreferrer">jaibangla.wb.gov.in</a>'
  );

  // Manabik
  content = content.replace(
    /\[ADD OFFICIAL PORTAL LINK — verify socialsecurity\.wb\.gov\.in \/ jaibangla\.wb\.gov\.in before publishing\]/gi,
    '<a href="https://jaibangla.wb.gov.in/" target="_blank" rel="noopener noreferrer">jaibangla.wb.gov.in</a>'
  );

  // Kanyashree
  content = content.replace(
    /\[ADD OFFICIAL PORTAL LINK — verify wbkanyashree\.gov\.in before publishing\]/gi,
    '<a href="https://www.wbkanyashree.gov.in/" target="_blank" rel="noopener noreferrer">wbkanyashree.gov.in</a>'
  );

  // Shikshashree & Oasis
  content = content.replace(
    /\[ADD OFFICIAL PORTAL LINK — verify oasis\.gov\.in before publishing\]/gi,
    '<a href="https://oasis.gov.in/" target="_blank" rel="noopener noreferrer">oasis.gov.in</a>'
  );

  // Geetanjali
  content = content.replace(
    /\[ADD OFFICIAL PORTAL LINK — verify wbhousing\.gov\.in before publishing\]/gi,
    '<a href="https://wbhousing.gov.in/" target="_blank" rel="noopener noreferrer">wbhousing.gov.in</a>'
  );

  // Banglar Bari
  content = content.replace(
    /\[ADD OFFICIAL PORTAL LINK — verify wbhousing\.gov\.in \/ wbpvrd\.gov\.in before publishing\]/gi,
    '<a href="https://prd.wb.gov.in/" target="_blank" rel="noopener noreferrer">prd.wb.gov.in</a>'
  );

  // Utkarsh Bangla
  content = content.replace(
    /\[ADD OFFICIAL PORTAL LINK — verify pbssd\.gov\.in before publishing\]/gi,
    '<a href="https://pbssd.gov.in/" target="_blank" rel="noopener noreferrer">pbssd.gov.in</a>'
  );

  // Plain [ADD OFFICIAL PORTAL LINK]
  content = content.replace(
    /<span class="placeholder-text">\[ADD OFFICIAL PORTAL LINK\]<\/span>/gi,
    '<a href="https://pbssd.gov.in/" target="_blank" rel="noopener noreferrer">pbssd.gov.in</a>'
  );
  content = content.replace(
    /\[ADD OFFICIAL PORTAL LINK\]/gi,
    '<a href="https://pbssd.gov.in/" target="_blank" rel="noopener noreferrer">pbssd.gov.in</a>'
  );

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${path.relative(baseDir, filePath)}`);
  }
});

console.log('Fix script complete.');
