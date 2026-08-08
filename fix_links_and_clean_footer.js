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
console.log(`Auditing ${htmlFiles.length} HTML files...`);

// Category hub mapping for fallback
const schemeToHubMap = {
  'manabik-pension-scheme': '/schemes/disability-schemes/index.html',
  'jai-bangla-pension-scheme': '/schemes/pension-schemes/index.html',
  'kanyashree-prakalpa': '/schemes/women-welfare/index.html',
  'sabooj-sathi': '/schemes/student-schemes/index.html',
  'shikshashree-scheme': '/schemes/student-schemes/index.html',
  'rupashree-prakalpa': '/schemes/women-welfare/index.html',
  'khadya-sathi': '/schemes/social-welfare/index.html',
  'krishak-bandhu': '/schemes/farmer-schemes/index.html',
  'swasthya-sathi': '/schemes/health-schemes/index.html',
  'lakshmir-bhandar': '/schemes/women-welfare/index.html',
  'banglar-bari-prakalpa': '/schemes/housing-schemes/index.html',
  'aikyashree-scholarship': '/schemes/minority-schemes/index.html'
};

const fixedLinksReport = [];
let footerCleanedCount = 0;

for (const file of htmlFiles) {
  let content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(rootDir, file).replace(/\\/g, '/');
  let originalContent = content;
  let fileModified = false;

  // -------------------------------------------------------------
  // 1. Remove placeholder contact info from footer
  // -------------------------------------------------------------
  // Match <div class="footer-contact-block">...</div>
  if (content.includes('<div class="footer-contact-block">')) {
    content = content.replace(/<div class="footer-contact-block">[\s\S]*?<\/div>\s*/gi, '');
    fileModified = true;
    footerCleanedCount++;
  }

  // Also remove standalone footer contact items if present outside contact block
  const emailItemRegex = /<div class="footer-contact-item">\s*📧\s*<span>[^<]+<\/span>\s*<\/div>\s*/gi;
  const phoneItemRegex = /<div class="footer-contact-item">\s*📞\s*<span>[^<]+<\/span>\s*<\/div>\s*/gi;
  if (emailItemRegex.test(content) || phoneItemRegex.test(content)) {
    content = content.replace(emailItemRegex, '').replace(phoneItemRegex, '');
    fileModified = true;
  }

  // -------------------------------------------------------------
  // 2. Audit and fix internal links
  // -------------------------------------------------------------
  // Parse all hrefs
  const linkRegex = /<a\s+([^>]*?)href=["']([^"']+)["']([^>]*?)>/gi;
  content = content.replace(linkRegex, (fullMatch, attrBefore, href, attrAfter) => {
    // Ignore external, mailto, tel, hashes, etc.
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#') || href.startsWith('javascript:')) {
      return fullMatch;
    }

    // Resolve target path
    let targetClean = href.split('#')[0].split('?')[0];
    if (!targetClean) return fullMatch;

    let absoluteTarget;
    if (targetClean.startsWith('/')) {
      absoluteTarget = path.join(rootDir, targetClean);
    } else {
      absoluteTarget = path.join(path.dirname(file), targetClean);
    }

    // Check if target exists
    let exists = false;
    if (fs.existsSync(absoluteTarget)) {
      const stat = fs.statSync(absoluteTarget);
      if (stat.isDirectory()) {
        if (fs.existsSync(path.join(absoluteTarget, 'index.html'))) {
          exists = true;
        }
      } else {
        exists = true;
      }
    }

    if (!exists) {
      // Find fallback
      let newHref = '/index.html'; // Default homepage fallback
      
      // Check if it's a category hub or scheme slug
      for (const [slug, hubPath] of Object.entries(schemeToHubMap)) {
        if (href.includes(slug)) {
          newHref = hubPath;
          break;
        }
      }

      fixedLinksReport.push({
        file: relPath,
        originalHref: href,
        newHref: newHref
      });

      fileModified = true;
      return `<a ${attrBefore}href="${newHref}"${attrAfter}>`;
    }

    return fullMatch;
  });

  if (fileModified) {
    fs.writeFileSync(file, content, 'utf8');
  }
}

console.log(`\n=== TASK EXECUTION SUMMARY ===`);
console.log(`Footer contact placeholders removed from ${footerCleanedCount} files.`);
console.log(`Total broken links found and fixed: ${fixedLinksReport.length}`);
console.log(JSON.stringify(fixedLinksReport, null, 2));
