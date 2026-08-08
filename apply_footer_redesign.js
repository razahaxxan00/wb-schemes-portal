const fs = require('fs');
const path = require('path');

const rootDir = __dirname;

// 1. Update CSS in css/styles.css
const cssPath = path.join(rootDir, 'css', 'styles.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

const newFooterCss = `/* COMPONENT 7: Compact & Professional 4-Column Footer */
.site-footer {
  background: linear-gradient(180deg, var(--primary-dark) 0%, #041525 100%);
  color: #94a3b8;
  padding: 24px 0 12px 0;
  border-top: 3px solid var(--accent-gold);
  margin-top: 36px;
  font-size: 13px;
  position: relative;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 16px;
}

.footer-col h3 {
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.footer-brand-title {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 800;
  margin-bottom: 6px;
}

.footer-brand-emblem {
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, var(--accent-gold), #b89309);
  color: var(--primary-dark);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 12px;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-col li {
  margin-bottom: 4px;
}

.footer-link {
  color: #cbd5e1;
  text-decoration: none;
  padding: 1px 4px;
  border-radius: 3px;
  transition: all 0.2s ease;
  display: inline-block;
  font-weight: 500;
  font-size: 13px;
}

.footer-link:hover, .footer-link:focus-visible {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.12);
  transform: translateX(2px);
}

.footer-link:focus-visible {
  outline: 2px solid var(--accent-gold);
  outline-offset: 2px;
}

.footer-disclaimer-link {
  color: var(--accent-gold);
  text-decoration: none;
  border-bottom: 1px solid rgba(217, 179, 16, 0.4);
  font-weight: 600;
  font-size: 13px;
  padding: 0 2px;
  transition: all 0.2s ease;
}

.footer-disclaimer-link:hover, .footer-disclaimer-link:focus-visible {
  color: #fef08a;
  border-bottom-color: var(--accent-gold);
  background: rgba(217, 179, 16, 0.15);
  outline: 2px solid var(--accent-gold);
  outline-offset: 2px;
}

.disclaimer-text {
  font-size: 12px;
  line-height: 1.45;
  color: #94a3b8;
  margin: 0;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 12px;
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: #64748b;
  font-size: 12px;
}

.footer-bottom-links {
  display: flex;
  gap: 12px;
}

.footer-bottom-links a {
  color: #94a3b8;
  font-size: 12px;
  text-decoration: none;
}

.footer-bottom-links a:hover {
  color: #ffffff;
}`;

// Replace CSS section in styles.css
cssContent = cssContent.replace(/\/\* COMPONENT 7: Compact & Polished 4-Column Footer \*\/[\s\S]*?\.footer-bottom-links a:hover \{\s*color: #ffffff;\s*\}/i, newFooterCss);
fs.writeFileSync(cssPath, cssContent, 'utf8');
console.log('css/styles.css updated with sleek compact footer styles!');

// 2. HTML Footer Template
const newFooterHtml = `<footer class="site-footer">
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
            <li><a href="/contact/index.html" class="footer-link">Contact Desk</a></li>
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
          <a class="body-link" href="/contact/index.html">Help Desk</a>
        </div>
      </div>
    </div>
  </footer>`;

// Replace footer across all HTML files
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
let updatedHtmlCount = 0;

for (const file of htmlFiles) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('<footer class="site-footer">')) {
    content = content.replace(/<footer class="site-footer">[\s\S]*?<\/footer>/gi, newFooterHtml);
    fs.writeFileSync(file, content, 'utf8');
    updatedHtmlCount++;
  }
}

console.log(`Updated footer across ${updatedHtmlCount} HTML files.`);
