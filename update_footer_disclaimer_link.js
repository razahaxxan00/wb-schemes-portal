const fs = require('fs');
const path = require('path');

const rootDir = __dirname;

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

const standardFooter = `  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h3>WB Schemes Portal</h3>
          <p>Independent public information portal for West Bengal government schemes, eligibility guidelines, status tracking, and online application procedures.</p>
        </div>
        <div class="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/index.html" class="footer-link">Home</a></li>
            <li><a href="/schemes/index.html" class="footer-link">All Schemes List</a></li>
            <li><a href="/categories/index.html" class="footer-link">Scheme Categories</a></li>
            <li><a href="/about/index.html" class="footer-link">About Us</a></li>
            <li><a href="/contact/index.html" class="footer-link">Contact Us</a></li>
            <li><a href="/privacy-policy/index.html" class="footer-link">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>Disclaimer & Disclosure</h3>
          <p class="disclaimer-text">
            WB Schemes Portal is an independent informational guide and is NOT affiliated with, authorized by, or associated with the Government of West Bengal or any official department. No financial transactions or official applications are processed directly on this website. For official government services, visit <a href="https://wb.gov.in" class="footer-disclaimer-link" target="_blank" rel="noopener noreferrer">wb.gov.in</a>.
          </p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 WB Schemes Portal. All rights reserved.</p>
      </div>
    </div>
  </footer>`;

let count = 0;

htmlFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/<footer class="site-footer">[\s\S]*?<\/footer>/gi, standardFooter);
  fs.writeFileSync(filePath, content, 'utf8');
  count++;
});

console.log(`Updated polished footer across all ${count} HTML files.`);
