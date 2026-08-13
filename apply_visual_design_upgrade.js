const fs = require('fs');
const path = require('path');

const rootDir = __dirname;

// SVG Icon Definitions for categories
const svgIcons = {
  social: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M3 10h18M5 10v11M9 10v11M13 10v11M17 10v11M12 3L2 10h20L12 3z"/></svg>`,
  women: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  farmer: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M12 20a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-4-2.5-4-2.5m0 15a7 7 0 0 1-7-7c0-2 1-3.9 3-5.5s4-2.5 4-2.5"/></svg>`,
  student: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  scholarship: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
  pension: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
  housing: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  health: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  employment: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  minority: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  disability: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/></svg>`,
  senior: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  child: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
  chevron: `<svg class="faq-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`
};

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

// -------------------------------------------------------------
// 1. UPDATE HOMEPAGE (index.html)
// -------------------------------------------------------------
const indexPath = path.join(rootDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Replace old Hero section with new visual Hero & Stats Bar
const newHeroHtml = `<section class="hero-section">
    <div class="container">
      <div class="hero-grid">
        <div class="hero-content">
          <span class="hero-badge">Public Information Guide 2026</span>
          <h1 class="hero-title">Every West Bengal Government Scheme, Explained in Plain Language</h1>
          <p class="hero-subtitle">
            Find every major West Bengal government scheme in one place — eligibility, benefits, and how to apply, check status, or download your card.
          </p>
        </div>
        <div class="hero-illustration-box">
          <svg class="hero-graphic-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 21h18M3 10h18M5 10v11M9 10v11M13 10v11M17 10v11M12 3L2 10h20L12 3z"/>
          </svg>
          <span>Government of West Bengal<br>Welfare Initiatives Directory</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats Counter Bar -->
  <div class="container">
    <div class="stats-bar">
      <div class="stat-card">
        <div class="stat-number">49+</div>
        <div class="stat-label">Scheme Guides</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">13</div>
        <div class="stat-label">Welfare Categories</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">2.2 Cr+</div>
        <div class="stat-label">Beneficiaries Covered</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">100%</div>
        <div class="stat-label">Free & Fact-Checked</div>
      </div>
    </div>
  </div>`;

indexContent = indexContent.replace(/<section class="scheme-hero"[\s\S]*?<\/section>/i, newHeroHtml);

// Upgrade Interactive Eligibility Checker CTA Button
indexContent = indexContent.replace(
  /<button type="button" style="background: #0b3c5d; color: #ffffff; padding: 10px 20px; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">Find Qualifying Schemes →<\/button>/gi,
  '<button type="button" id="find-schemes-btn" class="cta-btn-gold">Find Qualifying Schemes →</button>'
);

// Style 2026 Welfare Landscape notice as Alert Banner
const oldLandscapeNotice = `<section class="content-block">\s*<h2>West Bengal's Welfare Landscape Is Changing<\/h2>[\s\S]*?<\/section>`;
const newAlertBannerHtml = `<div class="alert-banner-2026">
              <svg class="alert-banner-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <div class="alert-banner-content">
                <h3>Notice: 2026 West Bengal Welfare Transition Updates</h3>
                <p>
                  2026 has been a significant year of change for West Bengal's welfare schemes. Following the May 2026 state elections, several major programmes have been renamed, restructured, or replaced — Swasthya Sathi is transitioning into the central Ayushman Bharat scheme, and Lakshmir Bhandar has been replaced by Annapurna Bhandar with a higher monthly benefit. If you've used these schemes before under their old names, it's worth checking the current pages on this site rather than relying on older information.
                </p>
              </div>
            </div>`;

indexContent = indexContent.replace(new RegExp(oldLandscapeNotice, 'i'), newAlertBannerHtml);

// Replace raw Emojis in category-icon divs on homepage
indexContent = indexContent.replace(/<div class="category-icon" style="background: rgba\(11, 60, 93, 0\.1\); color: #0b3c5d;">🏛️<\/div>/g, `<div class="category-icon">${svgIcons.social}</div>`);
indexContent = indexContent.replace(/<div class="category-icon" style="background: rgba\(217, 70, 239, 0\.1\); color: #c026d3;">👩<\/div>/g, `<div class="category-icon">${svgIcons.women}</div>`);
indexContent = indexContent.replace(/<div class="category-icon" style="background: rgba\(10, 135, 84, 0\.1\); color: #0a8754;">🌾<\/div>/g, `<div class="category-icon">${svgIcons.farmer}</div>`);
indexContent = indexContent.replace(/<div class="category-icon" style="background: rgba\(99, 102, 241, 0\.1\); color: #4f46e5;">📚<\/div>/g, `<div class="category-icon">${svgIcons.student}</div>`);
indexContent = indexContent.replace(/<div class="category-icon" style="background: rgba\(245, 158, 11, 0\.1\); color: #d97706;">🎓<\/div>/g, `<div class="category-icon">${svgIcons.scholarship}</div>`);
indexContent = indexContent.replace(/<div class="category-icon" style="background: rgba\(239, 68, 68, 0\.1\); color: #dc2626;">👵<\/div>/g, `<div class="category-icon">${svgIcons.pension}</div>`);
indexContent = indexContent.replace(/<div class="category-icon" style="background: rgba\(168, 85, 247, 0\.1\); color: #9333ea;">🏠<\/div>/g, `<div class="category-icon">${svgIcons.housing}</div>`);
indexContent = indexContent.replace(/<div class="category-icon" style="background: rgba\(14, 165, 233, 0\.1\); color: #0284c7;">🏥<\/div>/g, `<div class="category-icon">${svgIcons.health}</div>`);
indexContent = indexContent.replace(/<div class="category-icon" style="background: rgba\(20, 184, 166, 0\.1\); color: #0d9488;">💼<\/div>/g, `<div class="category-icon">${svgIcons.employment}</div>`);
indexContent = indexContent.replace(/<div class="category-icon" style="background: rgba\(59, 130, 246, 0\.1\); color: #2563eb;">🕌<\/div>/g, `<div class="category-icon">${svgIcons.minority}</div>`);
indexContent = indexContent.replace(/<div class="category-icon" style="background: rgba\(236, 72, 153, 0\.1\); color: #db2777;">♿<\/div>/g, `<div class="category-icon">${svgIcons.disability}</div>`);
indexContent = indexContent.replace(/<div class="category-icon" style="background: rgba\(107, 114, 128, 0\.1\); color: #4b5563;">👴<\/div>/g, `<div class="category-icon">${svgIcons.senior}</div>`);
indexContent = indexContent.replace(/<div class="category-icon" style="background: rgba\(16, 185, 129, 0\.1\); color: #059669;">👶<\/div>/g, `<div class="category-icon">${svgIcons.child}</div>`);

// Upgrade Popular Schemes cards with Amount Stat Callouts
indexContent = indexContent.replace(
  /<span class="scheme-card-icon">🌾<\/span>/g,
  `<div class="scheme-amount-stat">💰 ₹10,000 / Year</div>`
);
indexContent = indexContent.replace(
  /<span class="scheme-card-icon">🏥<\/span>/g,
  `<div class="scheme-amount-stat">🛡️ ₹5 Lakh Cover</div>`
);
indexContent = indexContent.replace(
  /<span class="scheme-card-icon">👧<\/span>/g,
  `<div class="scheme-amount-stat">🎓 ₹25,000 Grant</div>`
);
indexContent = indexContent.replace(
  /<span class="scheme-card-icon">👩<\/span>/g,
  `<div class="scheme-amount-stat">💳 ₹3,000 / Month</div>`
);
indexContent = indexContent.replace(
  /<span class="scheme-card-icon">🕌<\/span>/g,
  `<div class="scheme-amount-stat">📜 Pre-Matric to PhD</div>`
);
indexContent = indexContent.replace(
  /<span class="scheme-card-icon">🍚<\/span>/g,
  `<div class="scheme-amount-stat">🌾 Free Digital Ration</div>`
);

// Replace FAQ icons on homepage
indexContent = indexContent.replace(/<span class="faq-icon">\+<\/span>/g, svgIcons.chevron);

fs.writeFileSync(indexPath, indexContent, 'utf8');
console.log('Successfully upgraded homepage (index.html) UI design!');

// -------------------------------------------------------------
// 2. SITELINK EMOJI SWEEP ACROSS ALL OTHER HTML FILES
// -------------------------------------------------------------
const htmlFiles = getAllHtmlFiles(rootDir);
let sitewideUpdated = 0;

for (const file of htmlFiles) {
  if (file === indexPath) continue;
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  // Replace FAQ icons
  if (content.includes('<span class="faq-icon">+</span>')) {
    content = content.replace(/<span class="faq-icon">\+<\/span>/g, svgIcons.chevron);
    modified = true;
  }

  // Replace raw Emojis in category-icon divs
  if (content.includes('category-icon')) {
    content = content.replace(/<div class="category-icon" style="[^"]*">🏛️<\/div>/g, `<div class="category-icon">${svgIcons.social}</div>`);
    content = content.replace(/<div class="category-icon" style="[^"]*">👩<\/div>/g, `<div class="category-icon">${svgIcons.women}</div>`);
    content = content.replace(/<div class="category-icon" style="[^"]*">🌾<\/div>/g, `<div class="category-icon">${svgIcons.farmer}</div>`);
    content = content.replace(/<div class="category-icon" style="[^"]*">📚<\/div>/g, `<div class="category-icon">${svgIcons.student}</div>`);
    content = content.replace(/<div class="category-icon" style="[^"]*">🎓<\/div>/g, `<div class="category-icon">${svgIcons.scholarship}</div>`);
    content = content.replace(/<div class="category-icon" style="[^"]*">👵<\/div>/g, `<div class="category-icon">${svgIcons.pension}</div>`);
    content = content.replace(/<div class="category-icon" style="[^"]*">🏠<\/div>/g, `<div class="category-icon">${svgIcons.housing}</div>`);
    content = content.replace(/<div class="category-icon" style="[^"]*">🏥<\/div>/g, `<div class="category-icon">${svgIcons.health}</div>`);
    content = content.replace(/<div class="category-icon" style="[^"]*">💼<\/div>/g, `<div class="category-icon">${svgIcons.employment}</div>`);
    content = content.replace(/<div class="category-icon" style="[^"]*">🕌<\/div>/g, `<div class="category-icon">${svgIcons.minority}</div>`);
    content = content.replace(/<div class="category-icon" style="[^"]*">♿<\/div>/g, `<div class="category-icon">${svgIcons.disability}</div>`);
    content = content.replace(/<div class="category-icon" style="[^"]*">👴<\/div>/g, `<div class="category-icon">${svgIcons.senior}</div>`);
    content = content.replace(/<div class="category-icon" style="[^"]*">👶<\/div>/g, `<div class="category-icon">${svgIcons.child}</div>`);
    
    content = content.replace(/<span class="scheme-card-icon">🏛️<\/span>/g, `<span class="scheme-card-icon-svg">${svgIcons.social}</span>`);
    content = content.replace(/<span class="scheme-card-icon">👩<\/span>/g, `<span class="scheme-card-icon-svg">${svgIcons.women}</span>`);
    content = content.replace(/<span class="scheme-card-icon">🌾<\/span>/g, `<span class="scheme-card-icon-svg">${svgIcons.farmer}</span>`);
    content = content.replace(/<span class="scheme-card-icon">📚<\/span>/g, `<span class="scheme-card-icon-svg">${svgIcons.student}</span>`);
    content = content.replace(/<span class="scheme-card-icon">🎓<\/span>/g, `<span class="scheme-card-icon-svg">${svgIcons.scholarship}</span>`);
    content = content.replace(/<span class="scheme-card-icon">👵<\/span>/g, `<span class="scheme-card-icon-svg">${svgIcons.pension}</span>`);
    content = content.replace(/<span class="scheme-card-icon">🏠<\/span>/g, `<span class="scheme-card-icon-svg">${svgIcons.housing}</span>`);
    content = content.replace(/<span class="scheme-card-icon">🏥<\/span>/g, `<span class="scheme-card-icon-svg">${svgIcons.health}</span>`);
    content = content.replace(/<span class="scheme-card-icon">💼<\/span>/g, `<span class="scheme-card-icon-svg">${svgIcons.employment}</span>`);
    content = content.replace(/<span class="scheme-card-icon">🕌<\/span>/g, `<span class="scheme-card-icon-svg">${svgIcons.minority}</span>`);
    content = content.replace(/<span class="scheme-card-icon">♿<\/span>/g, `<span class="scheme-card-icon-svg">${svgIcons.disability}</span>`);
    content = content.replace(/<span class="scheme-card-icon">👴<\/span>/g, `<span class="scheme-card-icon-svg">${svgIcons.senior}</span>`);
    content = content.replace(/<span class="scheme-card-icon">👶<\/span>/g, `<span class="scheme-card-icon-svg">${svgIcons.child}</span>`);
    modified = true;
  }

  // Replace quick-link-icon emojis
  if (content.includes('quick-link-icon')) {
    content = content.replace(/<span class="quick-link-icon">📋<\/span>/g, `<span class="quick-link-icon-svg">${svgIcons.student}</span>`);
    content = content.replace(/<span class="quick-link-icon">🏛️<\/span>/g, `<span class="quick-link-icon-svg">${svgIcons.social}</span>`);
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
    sitewideUpdated++;
  }
}

console.log(`Successfully updated SVG line icons across ${sitewideUpdated} HTML pages!`);
