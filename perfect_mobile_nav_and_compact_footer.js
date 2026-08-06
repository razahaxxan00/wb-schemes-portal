const fs = require('fs');
const path = require('path');

const cssFile = path.join(__dirname, 'css', 'styles.css');
let cssContent = fs.readFileSync(cssFile, 'utf8');

// Remove old mobile media queries to avoid conflicting rules
cssContent = cssContent.replace(/\/\* =============================================================\s*SYSTEMATIC MOBILE RESPONSIVENESS[\s\S]*/gi, '');

const perfectMobileCss = `/* =============================================================
   PERFECT MOBILE RESPONSIVENESS SYSTEM (320px - 640px)
   ============================================================= */

/* Universal Mobile Fix for Horizontal Overflow */
html, body {
  max-width: 100%;
  overflow-x: hidden;
}

/* Mobile Hamburger Button (Hidden on Desktop) */
.mobile-menu-btn {
  display: none;
}

@media (max-width: 640px) {
  /* 1. Header Layout & Positioning */
  .site-header {
    position: relative !important;
  }

  .top-bar {
    padding: 6px 0 !important;
  }
  .top-bar .container {
    flex-direction: column !important;
    gap: 3px !important;
    text-align: center !important;
    font-size: 11.5px !important;
  }

  .header-main {
    padding: 12px 0 !important;
    position: relative !important;
  }
  .header-main .container {
    flex-direction: row !important;
    justify-content: space-between !important;
    align-items: center !important;
  }

  .brand-logo {
    justify-content: flex-start !important;
  }
  .brand-text h1, .brand-text span {
    font-size: 16px !important;
  }
  .brand-text p {
    font-size: 11px !important;
  }

  /* Hamburger Toggle Button */
  .mobile-menu-btn {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    gap: 5px !important;
    width: 44px !important;
    height: 44px !important;
    background: rgba(255, 255, 255, 0.1) !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
    border-radius: 8px !important;
    cursor: pointer !important;
    padding: 8px !important;
    flex-shrink: 0 !important;
  }

  .hamburger-bar {
    width: 22px !important;
    height: 2px !important;
    background: #ffffff !important;
    border-radius: 2px !important;
    transition: all 0.25s ease !important;
  }

  /* Animated X State when active */
  .mobile-menu-btn.active .hamburger-bar:nth-child(1) {
    transform: translateY(7px) rotate(45deg) !important;
  }
  .mobile-menu-btn.active .hamburger-bar:nth-child(2) {
    opacity: 0 !important;
  }
  .mobile-menu-btn.active .hamburger-bar:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg) !important;
  }

  /* 100% Separate Mobile Nav Dropdown Panel (NO Horizontal Squeezing) */
  .main-nav {
    display: none !important;
    position: absolute !important;
    top: 100% !important;
    left: 0 !important;
    right: 0 !important;
    background: #07253b !important;
    border-bottom: 4px solid #d9b310 !important;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4) !important;
    z-index: 99999 !important;
    padding: 12px 16px !important;
    margin: 0 !important;
    box-sizing: border-box !important;
  }

  .main-nav.active {
    display: block !important;
    animation: fadeInDown 0.2s ease forwards !important;
  }

  .main-nav ul {
    display: flex !important;
    flex-direction: column !important;
    width: 100% !important;
    gap: 6px !important;
    margin: 0 !important;
    padding: 0 !important;
    list-style: none !important;
  }

  .main-nav ul li {
    width: 100% !important;
    margin: 0 !important;
  }

  .main-nav ul li a, .main-nav a, .main-nav a.body-link {
    display: flex !important;
    width: 100% !important;
    align-items: center !important;
    justify-content: flex-start !important;
    padding: 12px 16px !important;
    font-size: 15px !important;
    font-weight: 600 !important;
    color: #ffffff !important;
    text-decoration: none !important;
    border: none !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
    background: rgba(255, 255, 255, 0.05) !important;
    border-radius: 8px !important;
    box-sizing: border-box !important;
    margin: 0 !important;
    min-height: 44px !important;
  }

  .main-nav a:hover, .main-nav a.active {
    background: rgba(255, 255, 255, 0.18) !important;
    color: var(--accent-gold) !important;
  }

  @keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* 2. Hero Section & Search Bar */
  .scheme-hero {
    padding: 24px 0 !important;
  }
  .scheme-hero h1 {
    font-size: 1.6rem !important;
    line-height: 1.3 !important;
  }
  .scheme-hero p {
    font-size: 0.9rem !important;
  }
  #scheme-search-input {
    width: 100% !important;
    box-sizing: border-box !important;
    padding: 12px 14px !important;
    font-size: 0.95rem !important;
  }

  /* 3. Category & Scheme Card Grids */
  .category-grid {
    grid-template-columns: 1fr !important;
    gap: 12px !important;
  }
  .scheme-grid {
    grid-template-columns: 1fr !important;
    gap: 14px !important;
  }
  .category-card, .scheme-card {
    padding: 16px !important;
  }

  /* 4. Layout & Sidebar */
  .page-layout {
    padding: 12px 0 24px 0 !important;
  }
  .page-grid {
    grid-template-columns: 1fr !important;
    gap: 20px !important;
  }
  .main-content {
    padding: 18px 14px !important;
    border-radius: 10px !important;
  }
  aside.sidebar {
    position: static !important;
    top: auto !important;
    width: 100% !important;
    margin-top: 20px !important;
  }

  /* 5. Content Typography */
  h1 { font-size: 1.6rem !important; line-height: 1.3 !important; }
  h2 { font-size: 1.25rem !important; line-height: 1.35 !important; margin-top: 20px !important; }
  p, li { font-size: 14px !important; line-height: 1.6 !important; }

  /* 6. FAQ Accordion Mobile Touch Targets */
  .faq-question {
    padding: 14px 16px !important;
    font-size: 14.5px !important;
    min-height: 48px !important;
    align-items: flex-start !important;
    gap: 10px !important;
  }
  .faq-answer {
    padding: 14px 16px !important;
    font-size: 14px !important;
  }

  /* 7. Compact Mobile Footer (Height Reduction + Section Dividers) */
  .site-footer {
    padding: 24px 0 14px 0 !important;
  }

  .footer-grid {
    grid-template-columns: 1fr !important;
    gap: 0 !important;
    margin-bottom: 16px !important;
  }

  .footer-col {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
    padding-bottom: 16px !important;
    margin-bottom: 16px !important;
  }

  .footer-col:last-child {
    border-bottom: none !important;
    padding-bottom: 0 !important;
    margin-bottom: 0 !important;
  }

  .footer-col h3 {
    color: var(--accent-gold) !important;
    font-size: 16px !important;
    margin-bottom: 10px !important;
  }

  .footer-col li {
    margin-bottom: 4px !important;
  }

  .footer-link {
    width: 100% !important;
    font-size: 13.5px !important;
    padding: 6px 10px !important;
    min-height: 38px !important;
    border-radius: 6px !important;
    background: rgba(255, 255, 255, 0.04) !important;
    display: flex !important;
    align-items: center !important;
    gap: 8px !important;
    color: #e2e8f0 !important;
    font-weight: 500 !important;
    box-sizing: border-box !important;
  }

  .footer-social-row {
    display: flex !important;
    gap: 10px !important;
    margin-top: 14px !important;
  }

  .footer-social-btn {
    width: 38px !important;
    height: 38px !important;
    font-size: 15px !important;
  }

  .footer-bottom {
    padding-top: 14px !important;
    flex-direction: column !important;
    text-align: center !important;
    gap: 8px !important;
    font-size: 12px !important;
  }

  /* 8. Breadcrumbs & Cookie Banner */
  .breadcrumb-container {
    padding: 10px 16px !important;
  }
  .breadcrumb {
    font-size: 12.5px !important;
    gap: 4px 6px !important;
  }

  .cookie-banner {
    padding: 12px 16px !important;
  }
  .cookie-banner-content {
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 10px !important;
    font-size: 13px !important;
    text-align: center !important;
  }
  .cookie-accept-btn {
    width: 100% !important;
    min-height: 42px !important;
  }
}
`;

cssContent += `\n\n${perfectMobileCss}`;
fs.writeFileSync(cssFile, cssContent, 'utf8');
console.log('Successfully consolidated perfect mobile CSS rules into css/styles.css');
