const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const cssFile = path.join(rootDir, 'css', 'styles.css');
const jsFile = path.join(rootDir, 'js', 'main.js');

// 1. Update css/styles.css with Hamburger Menu and Polished Mobile Footer CSS
let cssContent = fs.readFileSync(cssFile, 'utf8');

const hamburgerAndFooterCss = `
/* =============================================================
   MOBILE HAMBURGER MENU & POLISHED FOOTER (320px - 640px)
   ============================================================= */

/* Mobile Hamburger Button (Hidden on Desktop) */
.mobile-menu-btn {
  display: none;
}

@media (max-width: 640px) {
  /* Header Layout Adjustment */
  .header-main .container {
    flex-direction: row !important;
    justify-content: space-between !important;
    align-items: center !important;
    flex-wrap: wrap !important;
  }

  .brand-logo {
    justify-content: flex-start !important;
  }

  /* Hamburger Toggle Button */
  .mobile-menu-btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 44px;
    height: 44px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    cursor: pointer;
    padding: 8px;
    transition: all 0.2s ease;
    flex-shrink: 0;
  }

  .mobile-menu-btn:hover, .mobile-menu-btn:focus-visible {
    background: rgba(255, 255, 255, 0.2);
    outline: 2px solid var(--accent-gold);
    outline-offset: 2px;
  }

  .hamburger-bar {
    width: 22px;
    height: 2px;
    background: #ffffff;
    border-radius: 2px;
    transition: all 0.25s ease;
  }

  /* Animated X State when active */
  .mobile-menu-btn.active .hamburger-bar:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }
  .mobile-menu-btn.active .hamburger-bar:nth-child(2) {
    opacity: 0;
  }
  .mobile-menu-btn.active .hamburger-bar:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  /* Mobile Dropdown Panel */
  .main-nav {
    display: none;
    width: 100% !important;
    margin-top: 14px;
    padding-top: 12px;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
  }

  .main-nav.active {
    display: flex !important;
    animation: fadeInDown 0.25s ease forwards;
  }

  .main-nav ul {
    flex-direction: column !important;
    width: 100% !important;
    gap: 8px !important;
  }

  .main-nav a {
    width: 100% !important;
    justify-content: flex-start !important;
    padding: 12px 16px !important;
    font-size: 15px !important;
    font-weight: 600 !important;
    min-height: 44px !important;
    border-radius: 8px !important;
    background: rgba(255, 255, 255, 0.06);
    box-sizing: border-border !important;
  }

  .main-nav a:hover, .main-nav a.active {
    background: rgba(255, 255, 255, 0.2) !important;
    color: var(--accent-gold) !important;
  }

  /* Keyframe animation for mobile menu */
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Polished Mobile Footer Dividers & Cards */
  .site-footer {
    padding: 36px 0 20px 0 !important;
  }

  .footer-grid {
    grid-template-columns: 1fr !important;
    gap: 0 !important;
  }

  .footer-col {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 22px;
    margin-bottom: 22px;
  }

  .footer-col:last-child {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  .footer-col h3 {
    color: var(--accent-gold) !important;
    font-size: 17px !important;
    margin-bottom: 14px !important;
  }

  .footer-col li {
    margin-bottom: 8px !important;
  }

  .footer-link {
    width: 100% !important;
    font-size: 14.5px !important;
    padding: 10px 14px !important;
    min-height: 44px !important;
    border-radius: 8px !important;
    background: rgba(255, 255, 255, 0.05);
    display: flex !important;
    align-items: center !important;
    gap: 10px !important;
    color: #e2e8f0 !important;
    font-weight: 500 !important;
    box-sizing: border-box !important;
  }

  .footer-link:hover, .footer-link:focus-visible {
    background: rgba(255, 255, 255, 0.15) !important;
    color: #ffffff !important;
    transform: translateX(4px) !important;
  }

  .footer-social-row {
    display: flex !important;
    gap: 12px !important;
    margin-top: 18px !important;
  }

  .footer-social-btn {
    width: 44px !important;
    height: 44px !important;
    font-size: 16px !important;
    border-radius: 50% !important;
    background: rgba(255, 255, 255, 0.1) !important;
  }

  .footer-bottom {
    padding-top: 20px !important;
    flex-direction: column !important;
    text-align: center !important;
    gap: 12px !important;
  }
}
`;

if (!cssContent.includes('.mobile-menu-btn')) {
  cssContent += `\n\n${hamburgerAndFooterCss}`;
  fs.writeFileSync(cssFile, cssContent, 'utf8');
  console.log('Updated css/styles.css with mobile hamburger and footer styling');
}

// 2. Update js/main.js to handle mobile menu click toggle
let jsContent = fs.readFileSync(jsFile, 'utf8');
if (!jsContent.includes('mobileMenuBtn')) {
  const mobileJsSnippet = `
  // Mobile Hamburger Menu Handler
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.querySelector('.main-nav');

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mainNav.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenuBtn.contains(e.target) && !mainNav.contains(e.target)) {
        mainNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
      }
    });
  }
  `;

  jsContent = jsContent.replace("document.addEventListener('DOMContentLoaded', () => {", "document.addEventListener('DOMContentLoaded', () => {" + mobileJsSnippet);
  fs.writeFileSync(jsFile, jsContent, 'utf8');
  console.log('Updated js/main.js with mobile hamburger JS handler');
}

// 3. Update all 55 HTML files to include <button class="mobile-menu-btn" id="mobileMenuBtn"> inside header
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
let count = 0;

htmlFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');

  // Insert mobile menu button inside brand logo area if missing
  if (!content.includes('id="mobileMenuBtn"')) {
    content = content.replace(/(<a href="\/index\.html" class="brand-logo">[\s\S]*?<\/a>)/i, `$1
        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle Navigation Menu">
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
        </button>`);
    fs.writeFileSync(filePath, content, 'utf8');
    count++;
  }
});

console.log(`Successfully added mobile hamburger button markup across ${count} HTML files.`);
