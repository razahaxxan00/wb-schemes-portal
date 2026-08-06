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
let updatedNav = 0;

htmlFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');

  // Update header nav if 'Updates' link is missing
  if (content.includes('<nav class="main-nav">') && !content.includes('href="/blog/index.html"')) {
    content = content.replace(/(<a href="\/categories\/index\.html"[^>]*>Categories<\/a>)/i, `$1\n          <a href="/blog/index.html" class="body-link">Updates</a>`);
    fs.writeFileSync(filePath, content, 'utf8');
    updatedNav++;
  }
});

console.log(`Updated header navigation to include Updates link across ${updatedNav} HTML files.`);

// Add Latest Updates Section to Homepage (index.html)
const indexFile = path.join(rootDir, 'index.html');
if (fs.existsSync(indexFile)) {
  let indexContent = fs.readFileSync(indexFile, 'utf8');

  const blogHomepageSection = `
      <!-- Latest Scheme Updates & News Section -->
      <section class="content-block" style="margin-top: 40px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
          <div>
            <h2>Latest Scheme Updates & Announcements</h2>
            <p style="color: #64748b; margin: 0;">Official deadline changes, amount revisions, and policy updates tracked in real-time.</p>
          </div>
          <a href="/blog/index.html" class="back-link-btn" style="margin: 0;">View All Updates →</a>
        </div>

        <div class="scheme-grid">
          <a href="/blog/lakshmir-bhandar-becomes-annapurna-bhandar/index.html" class="scheme-card">
            <div class="scheme-card-header">
              <span class="scheme-card-badge" style="background: #fef3c7; color: #92400e;">Amount Revision</span>
              <span style="font-size: 13px; color: var(--text-muted);">August 5, 2026</span>
            </div>
            <h3 class="scheme-card-title">Lakshmir Bhandar Monthly Financial Assistance Increased</h3>
            <p class="scheme-card-summary">State cabinet announces enhanced monthly grant of ₹1,200 for General Category and ₹1,500 for SC/ST beneficiaries.</p>
            <div class="scheme-card-cta">Read Full Update →</div>
          </a>

          <a href="/blog/swasthya-sathi-ayushman-bharat-integration-2026/index.html" class="scheme-card">
            <div class="scheme-card-header">
              <span class="scheme-card-badge" style="background: #dbeafe; color: #1e40af;">Policy Alert</span>
              <span style="font-size: 13px; color: var(--text-muted);">August 3, 2026</span>
            </div>
            <h3 class="scheme-card-title">Swasthya Sathi & Ayushman Bharat Integration Guidelines</h3>
            <p class="scheme-card-summary">Health Department releases dual-card empaneled hospital guidelines ensuring uninterrupted ₹5 lakh health cover.</p>
            <div class="scheme-card-cta">Read Full Update →</div>
          </a>

          <a href="/blog/krishak-bandhu-kharif-2026-disbursement-date/index.html" class="scheme-card">
            <div class="scheme-card-header">
              <span class="scheme-card-badge" style="background: #dcfce7; color: #166534;">Disbursement Notice</span>
              <span style="font-size: 13px; color: var(--text-muted);">August 1, 2026</span>
            </div>
            <h3 class="scheme-card-title">Krishak Bandhu Kharif 2026 Installment Release Schedule</h3>
            <p class="scheme-card-summary">Department of Agriculture completes Aadhaar-based bank validation for 1.05 crore farmers.</p>
            <div class="scheme-card-cta">Read Full Update →</div>
          </a>
        </div>
      </section>`;

  if (!indexContent.includes('Latest Scheme Updates & Announcements')) {
    indexContent = indexContent.replace(/<\/section>\s*<!-- FAQ Section -->/i, `</section>\n${blogHomepageSection}\n\n<!-- FAQ Section -->`);
    fs.writeFileSync(indexFile, indexContent, 'utf8');
    console.log('Added Latest Scheme Updates section to Homepage (index.html).');
  }
}
