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
console.log(`Auditing ${htmlFiles.length} HTML files for remaining /contact links or ContactPage schema...`);

let contactLinkCount = 0;
let contactSchemaCount = 0;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(rootDir, file).replace(/\\/g, '/');

  // Check 1: Hrefs pointing to /contact/
  const matches = [...content.matchAll(/href=["'][^"']*\/contact[^"']*["']/gi)];
  if (matches.length > 0) {
    contactLinkCount += matches.length;
    console.log(`Found ${matches.length} /contact links in ${relPath}`);
  }

  // Check 2: ContactPage schema
  if (content.includes('ContactPage')) {
    contactSchemaCount++;
    console.log(`Found ContactPage schema in ${relPath}`);
  }
}

// Check sitemap.xml
const sitemapPath = path.join(rootDir, 'sitemap.xml');
let sitemapContactCount = 0;
if (fs.existsSync(sitemapPath)) {
  const sitemapText = fs.readFileSync(sitemapPath, 'utf8');
  if (sitemapText.includes('/contact')) {
    sitemapContactCount++;
    console.log(`Found /contact entry in sitemap.xml`);
  }
}

// Check /contact/ directory
const contactExists = fs.existsSync(path.join(rootDir, 'contact'));

console.log(`\n=================== VERIFICATION RESULTS ===================`);
console.log(`Contact Directory Exists: ${contactExists}`);
console.log(`Remaining /contact internal links across HTML files: ${contactLinkCount}`);
console.log(`Remaining ContactPage schemas: ${contactSchemaCount}`);
console.log(`Sitemap /contact references: ${sitemapContactCount}`);

if (!contactExists && contactLinkCount === 0 && contactSchemaCount === 0 && sitemapContactCount === 0) {
  console.log(`✅ CONFIRMED: /contact has been 100% removed from codebase, navs, footers, schemas, and sitemap.xml!`);
}
