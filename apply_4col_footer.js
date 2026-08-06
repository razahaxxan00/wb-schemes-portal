const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const cssFile = path.join(rootDir, 'css', 'styles.css');

// 1. Update css/styles.css with 4-Column Footer CSS
let cssContent = fs.readFileSync(cssFile, 'utf8');

const newFooterCss = `/* COMPONENT 7: Premium 4-Column Site Footer */
.site-footer {
  background: linear-gradient(180deg, var(--primary-dark) 0%, #041525 100%);
  color: #94a3b8;
  padding: 60px 0 24px 0;
  border-top: 4px solid var(--accent-gold);
  margin-top: 60px;
  font-size: 14px;
  position: relative;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
  gap: 36px;
  margin-bottom: 40px;
}

.footer-col h3 {
  color: #ffffff;
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 16px;
}

.footer-brand-title {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 12px;
}

.footer-brand-emblem {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, var(--accent-gold), #b89309);
  color: var(--primary-dark);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 15px;
}

.footer-contact-block {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 13.5px;
  color: #cbd5e1;
}

.footer-contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer-social-row {
  display: flex;
  gap: 10px;
  margin-top: 16px;
}

.footer-social-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  color: #cbd5e1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-social-btn:hover, .footer-social-btn:focus-visible {
  background: var(--accent-gold);
  color: var(--primary-dark);
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(217, 179, 16, 0.3);
  outline: 2px solid #ffffff;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-col li {
  margin-bottom: 8px;
}

.footer-link {
  color: #cbd5e1;
  text-decoration: none;
  padding: 4px 8px;
  border-radius: 6px;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
}

.footer-link:hover, .footer-link:focus-visible {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.12);
  transform: translateX(4px);
}

.footer-link:focus-visible {
  outline: 2px solid var(--accent-gold);
  outline-offset: 2px;
}

.footer-disclaimer-link {
  color: var(--accent-gold);
  text-decoration: none;
  border-bottom: 1.5px solid rgba(217, 179, 16, 0.4);
  font-weight: 600;
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
  font-size: 13.5px;
  line-height: 1.65;
  color: #94a3b8;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: #64748b;
  font-size: 13px;
}

.footer-bottom-tagline {
  color: #94a3b8;
  font-size: 13px;
}

.footer-bottom-links {
  display: flex;
  gap: 16px;
}

.footer-bottom-links a {
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-bottom-links a:hover {
  color: var(--accent-gold);
}`;

cssContent = cssContent.replace(/\/\* COMPONENT 7[\s\S]*?\/\* Premium Floating Cookie Consent Banner \*/gi, `${newFooterCss}\n\n/* Premium Floating Cookie Consent Banner */`);
fs.writeFileSync(cssFile, cssContent, 'utf8');

// 2. Update HTML Files with 4-Column Footer Markup
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

const master4ColFooter = `  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Col 1: Brand & Contact -->
        <div class="footer-col">
          <div class="footer-brand-title">
            <div class="footer-brand-emblem">WB</div>
            <span>WB Schemes Portal</span>
          </div>
          <p class="disclaimer-text">
            Independent public information portal dedicated to raising awareness about Government of West Bengal welfare initiatives.
          </p>
          <div class="footer-contact-block">
            <div class="footer-contact-item">📧 <span>contact@wbschemes.in</span></div>
            <div class="footer-contact-item">📞 <span>1800-123-4567 (Toll Free Helpline)</span></div>
          </div>
          <div class="footer-social-row">
            <a href="https://facebook.com" class="footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="Facebook">fb</a>
            <a href="https://twitter.com" class="footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="Twitter">tw</a>
            <a href="https://youtube.com" class="footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="YouTube">yt</a>
            <a href="https://whatsapp.com" class="footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">wa</a>
          </div>
        </div>

        <!-- Col 2: Explore Navigation -->
        <div class="footer-col">
          <h3>Explore Portal</h3>
          <ul>
            <li><a href="/index.html" class="footer-link">🏠 Home</a></li>
            <li><a href="/schemes/index.html" class="footer-link">📋 All Schemes List</a></li>
            <li><a href="/categories/index.html" class="footer-link">🏛️ Scheme Categories</a></li>
            <li><a href="/schemes/farmer-schemes/index.html" class="footer-link">🌾 Farmer Welfare</a></li>
            <li><a href="/schemes/women-welfare/index.html" class="footer-link">👩 Women Empowerment</a></li>
          </ul>
        </div>

        <!-- Col 3: Quick Services & Company -->
        <div class="footer-col">
          <h3>Quick Services</h3>
          <ul>
            <li><a href="/schemes/lakshmir-bhandar/status-check/index.html" class="footer-link">🔍 Status Check Guides</a></li>
            <li><a href="/schemes/swasthya-sathi/card-download/index.html" class="footer-link">💳 E-Card Downloads</a></li>
            <li><a href="/schemes/krishak-bandhu/apply-form/index.html" class="footer-link">📝 Application Forms</a></li>
            <li><a href="/about/index.html" class="footer-link">ℹ️ About Us</a></li>
            <li><a href="/contact/index.html" class="footer-link">✉️ Contact Desk</a></li>
          </ul>
        </div>

        <!-- Col 4: Official Disclaimer & Transparency -->
        <div class="footer-col">
          <h3>Official Disclaimer</h3>
          <p class="disclaimer-text">
            WB Schemes Portal is an independent informational guide and is NOT affiliated with, authorized by, or associated with the Government of West Bengal or any official department. No financial transactions are processed on this site. For official services, visit <a href="https://wb.gov.in" class="footer-disclaimer-link" target="_blank" rel="noopener noreferrer">wb.gov.in</a>.
          </p>
        </div>
      </div>

      <!-- Footer Bottom Bar -->
      <div class="footer-bottom">
        <p>&copy; 2026 WB Schemes Portal. All rights reserved.</p>
        <span class="footer-bottom-tagline">Public Awareness Initiative for the Citizens of West Bengal</span>
        <div class="footer-bottom-links">
          <a href="/sitemap.xml">Sitemap</a>
          <a href="/privacy-policy/index.html">Privacy Policy</a>
          <a href="/contact/index.html">Help Desk</a>
        </div>
      </div>
    </div>
  </footer>`;

let count = 0;

htmlFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/<footer class="site-footer">[\s\S]*?<\/footer>/gi, master4ColFooter);
  fs.writeFileSync(filePath, content, 'utf8');
  count++;
});

console.log(`Successfully upgraded 4-column footer across all ${count} HTML files!`);
