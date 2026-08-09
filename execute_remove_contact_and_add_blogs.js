const fs = require('fs');
const path = require('path');

const rootDir = __dirname;

// 1. Delete contact directory
const contactDir = path.join(rootDir, 'contact');
if (fs.existsSync(contactDir)) {
  fs.rmSync(contactDir, { recursive: true, force: true });
  console.log('Deleted /contact/ directory.');
}

// Function to get all HTML files
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
console.log(`Processing ${htmlFiles.length} HTML files for nav/footer/link updates...`);

let filesUpdated = 0;

for (const file of htmlFiles) {
  let content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(rootDir, file).replace(/\\/g, '/');
  const isBlogHub = relPath === 'blog/index.html';
  let modified = false;

  // -----------------------------------------------------------------
  // A. Update Main Nav
  // -----------------------------------------------------------------
  const blogNavActive = isBlogHub ? 'class="active"' : 'class="body-link"';
  
  // Pattern 1: Replace Contact Us or Updates in main-nav
  if (content.includes('class="main-nav"')) {
    content = content.replace(
      /<nav class="main-nav">[\s\S]*?<\/nav>/i,
      `<nav class="main-nav">
          <a href="/index.html" class="${relPath === 'index.html' ? 'active' : 'body-link'}">Home</a>
          <a href="/schemes/index.html" class="${relPath.startsWith('schemes/') && relPath !== 'schemes/index.html' ? 'active' : 'body-link'}">All Schemes</a>
          <a href="/categories/index.html" class="${relPath === 'categories/index.html' ? 'active' : 'body-link'}">Categories</a>
          <a href="/blog/index.html" ${blogNavActive}>Blogs</a>
          <a href="/about/index.html" class="${relPath === 'about/index.html' ? 'active' : 'body-link'}">About Us</a>
        </nav>`
    );
    modified = true;
  }

  // -----------------------------------------------------------------
  // B. Update Footer Legal Links
  // -----------------------------------------------------------------
  if (content.includes('<footer class="site-footer">')) {
    content = content.replace(
      /<footer class="site-footer">[\s\S]*?<\/footer>/gi,
      `<footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Col 1: Brand & Short Tagline -->
        <div class="footer-col">
          <div class="footer-brand-title">
            <div class="footer-brand-emblem">WB</div>
            <span>WB Schemes Portal</span>
          </div>
          <p class="disclaimer-text">
            Independent public information portal dedicated to raising awareness about Government of West Bengal welfare initiatives.
          </p>
        </div>

        <!-- Col 2: Explore -->
        <div class="footer-col">
          <h3>Explore</h3>
          <ul>
            <li><a href="/index.html" class="footer-link">Home</a></li>
            <li><a href="/schemes/index.html" class="footer-link">All Schemes List</a></li>
            <li><a href="/categories/index.html" class="footer-link">Scheme Categories</a></li>
          </ul>
        </div>

        <!-- Col 3: Quick Links -->
        <div class="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/schemes/lakshmir-bhandar/status-check/index.html" class="footer-link">Status Check Guides</a></li>
            <li><a href="/schemes/swasthya-sathi/card-download/index.html" class="footer-link">E-Card Downloads</a></li>
            <li><a href="/schemes/krishak-bandhu/apply-form/index.html" class="footer-link">Application Forms</a></li>
          </ul>
        </div>

        <!-- Col 4: Legal -->
        <div class="footer-col">
          <h3>Legal</h3>
          <ul>
            <li><a href="/about/index.html" class="footer-link">About Us</a></li>
            <li><a href="/blog/index.html" class="footer-link">Blogs</a></li>
            <li><a href="/disclaimer/index.html" class="footer-link">Official Disclaimer</a></li>
            <li><a href="/privacy-policy/index.html" class="footer-link">Privacy Policy</a></li>
            <li><a href="https://wb.gov.in" class="footer-disclaimer-link" target="_blank" rel="noopener noreferrer">Official WB Portal →</a></li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom Bar -->
      <div class="footer-bottom">
        <p>&copy; 2026 WB Schemes Portal &middot; Independent public information guide. Not an official Government of West Bengal website.</p>
        <div class="footer-bottom-links">
          <a class="body-link" href="/sitemap.xml">Sitemap</a>
          <a class="body-link" href="/disclaimer/index.html">Disclaimer</a>
          <a class="body-link" href="/privacy-policy/index.html">Privacy Policy</a>
          <a class="body-link" href="/blog/index.html">Blogs</a>
        </div>
      </div>
    </div>
  </footer>`
    );
    modified = true;
  }

  // -----------------------------------------------------------------
  // C. Replace any body content links to /contact/
  // -----------------------------------------------------------------
  if (content.includes('/contact/index.html') || content.includes('/contact/')) {
    content = content.replace(/href=["']\/contact\/(index\.html)?["']/gi, 'href="/blog/index.html"');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
    filesUpdated++;
  }
}

console.log(`Updated nav, footer, and body links across ${filesUpdated} HTML files.`);

// -----------------------------------------------------------------
// D. Update sitemap.xml
// -----------------------------------------------------------------
const sitemapPath = path.join(rootDir, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  // Remove /contact url entry
  sitemapContent = sitemapContent.replace(/<url>\s*<loc>https:\/\/wb-schemes-portal-three\.vercel\.app\/contact\/<\/loc>[\s\S]*?<\/url>\s*/gi, '');
  sitemapContent = sitemapContent.replace(/<url>\s*<loc>https:\/\/wb-schemes-portal-three\.vercel\.app\/contact<\/loc>[\s\S]*?<\/url>\s*/gi, '');
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Updated sitemap.xml to remove /contact.');
}
