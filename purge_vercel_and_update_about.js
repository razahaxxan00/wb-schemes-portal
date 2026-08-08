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
console.log(`Processing ${htmlFiles.length} HTML files...`);

// -------------------------------------------------------------
// 1. Update About Us page (about/index.html)
// -------------------------------------------------------------
const aboutPath = path.join(rootDir, 'about', 'index.html');
let aboutContent = fs.readFileSync(aboutPath, 'utf8');

const newBlogsComponent = `<section class="content-block">
          <h2>Latest Guides & Updates</h2>
          <p style="color: #64748b; margin-bottom: 20px;">Recent announcements, policy updates, and operational guides from our editorial team:</p>
          
          <div class="scheme-grid">
            <a href="/blog/aikyashree-scholarship-2026-application-window/index.html" class="scheme-card">
              <div class="scheme-card-header">
                <span class="scheme-card-badge" style="background: #dbeafe; color: #1e40af;">Minority Welfare</span>
                <span class="scheme-card-icon">📰</span>
              </div>
              <h3 class="scheme-card-title">Aikyashree Scholarship 2026 Application Window</h3>
              <p class="scheme-card-summary">WBMDFC opens online portal for 2026-27 pre-matric, post-matric, and SVMCM scholarship renewals and fresh applications.</p>
              <div class="scheme-card-cta">Read Full Update →</div>
            </a>

            <a href="/blog/krishak-bandhu-kharif-2026-disbursement-date/index.html" class="scheme-card">
              <div class="scheme-card-header">
                <span class="scheme-card-badge" style="background: #dcfce7; color: #166534;">Farmer News</span>
                <span class="scheme-card-icon">🌾</span>
              </div>
              <h3 class="scheme-card-title">Krishak Bandhu Kharif 2026 Disbursement Schedule</h3>
              <p class="scheme-card-summary">Agriculture Department announces bank transfer dates for Kharif season financial assistance up to Rs. 5,000 per farmer.</p>
              <div class="scheme-card-cta">Read Full Update →</div>
            </a>

            <a href="/blog/lakshmir-bhandar-becomes-annapurna-bhandar/index.html" class="scheme-card">
              <div class="scheme-card-header">
                <span class="scheme-card-badge" style="background: #fce7f3; color: #9d174d;">Policy Transition</span>
                <span class="scheme-card-icon">👩</span>
              </div>
              <h3 class="scheme-card-title">Lakshmir Bhandar Transition to Annapurna Bhandar</h3>
              <p class="scheme-card-summary">Detailed guide on how monthly financial assistance for women is transitioning with enhanced benefits across West Bengal.</p>
              <div class="scheme-card-cta">Read Full Update →</div>
            </a>
          </div>

          <div style="margin-top: 24px;">
            <a href="/blog/index.html" class="body-link" style="font-weight: 600;">View All Posts & Updates →</a>
          </div>
        </section>`;

// Replace "Get in Touch" block on About page
if (aboutContent.includes('<h2>Get in Touch</h2>')) {
  aboutContent = aboutContent.replace(/<section class="content-block">\s*<h2>Get in Touch<\/h2>[\s\S]*?<\/section>/gi, newBlogsComponent);
  fs.writeFileSync(aboutPath, aboutContent, 'utf8');
  console.log('about/index.html: Replaced "Get in Touch" section with Blogs preview component!');
}

// -------------------------------------------------------------
// 2. Remove raw emails and Vercel references across all HTML files
// -------------------------------------------------------------
let cleanedCount = 0;

for (const file of htmlFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  // Remove email lines on Contact Page
  if (content.includes('contact@wb-schemes-portal-three.vercel.app')) {
    content = content.replace(/<p style="color: #6b7280; margin: 0;">contact@wb-schemes-portal-three\.vercel\.app<\/p>/gi, '<p style="color: #6b7280; margin: 0;">Submit your query using the form above for prompt guidance.</p>');
    content = content.replace(/"email":\s*"contact@wb-schemes-portal-three\.vercel\.app",?\s*/gi, '');
    content = content.replace(/contact@wb-schemes-portal-three\.vercel\.app/gi, '');
    modified = true;
  }

  // Remove any remaining raw email or 1800 numbers in text
  if (content.includes('1800-123-4567')) {
    content = content.replace(/Dial 1800-123-4567 or contact/gi, 'Contact');
    content = content.replace(/1800-123-4567/gi, '');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
    cleanedCount++;
  }
}

console.log(`Cleaned email/phone references in ${cleanedCount} files.`);
