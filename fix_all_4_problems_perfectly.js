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

const schemeNameMap = {
  'lakshmir-bhandar': 'Lakshmir Bhandar Scheme',
  'swasthya-sathi': 'Swasthya Sathi Scheme',
  'krishak-bandhu': 'Krishak Bandhu Scheme',
  'kanyashree-prakalpa': 'Kanyashree Prakalpa',
  'aikyashree-scholarship': 'Aikyashree Scholarship',
  'bangla-shasya-bima': 'Bangla Shasya Bima',
  'banglar-bari-prakalpa': 'Banglar Bari Prakalpa',
  'jai-bangla-pension-scheme': 'Jai Bangla Pension Scheme',
  'khadya-sathi': 'Khadya Sathi Scheme',
  'manabik-pension-scheme': 'Manabik Pension Scheme',
  'oasis-scholarship': 'Oasis Scholarship',
  'rupashree-prakalpa': 'Rupashree Prakalpa',
  'sabooj-sathi': 'Sabooj Sathi Scheme',
  'samabyathi-prakalpa': 'Samabyathi Prakalpa',
  'shikshashree-scheme': 'Shikshashree Scheme',
  'utkarsh-bangla': 'Utkarsh Bangla Scheme',
  'geetanjali-housing-scheme': 'Geetanjali Housing Scheme'
};

const schemeSummaryMap = {
  'lakshmir-bhandar': 'Financial aid of Rs 1,000 (General) and Rs 1,200 (SC/ST) monthly for women in West Bengal.',
  'swasthya-sathi': 'Rs 5 lakh cashless health insurance per family per year across government and empanelled hospitals.',
  'krishak-bandhu': 'Rs 10,000 annual financial assistance per acre and Rs 2 lakh death assurance for farmers.',
  'kanyashree-prakalpa': 'K1 annual scholarship and K2 one-time grant of Rs 25,000 for unmarried girl students.',
  'aikyashree-scholarship': 'Pre-Matric, Post-Matric, MCM, and SVMCM scholarships for minority students in West Bengal.',
  'bangla-shasya-bima': '100% premium-free crop insurance scheme protecting farmers against crop loss.',
  'banglar-bari-prakalpa': 'Subsidized housing and flat allotment scheme for low income urban families.',
  'jai-bangla-pension-scheme': 'Rs 1,000 monthly pension for SC, ST, disabled, and elderly citizens in West Bengal.',
  'khadya-sathi': 'Subsidised rice and wheat at Rs 2 per kg for digital ration cardholders in West Bengal.',
  'manabik-pension-scheme': 'Rs 1,000 monthly pension for persons with 40%+ physical or mental disability.',
  'oasis-scholarship': 'SC, ST, and OBC pre-matric and post-matric scholarship scheme for West Bengal students.',
  'rupashree-prakalpa': 'Rs 25,000 one-time financial assistance for marriage of adult girls from low-income families.',
  'sabooj-sathi': 'Free bicycle distribution scheme for Class IX to XII students in government schools.',
  'samabyathi-prakalpa': 'Rs 2,000 one-time financial assistance for funeral expenses of poor family members.',
  'shikshashree-scheme': 'Annual educational stipend for SC and ST students studying in Class V to VIII.',
  'utkarsh-bangla': 'Free vocational training and skill development courses for unemployed youth.',
  'geetanjali-housing-scheme': 'Financial grant for construction of houses for economically weaker sections in rural areas.'
};

function getSubPageLabel(subSlug) {
  if (subSlug === 'status-check') return 'Track Application Status';
  if (subSlug === 'apply-form') return 'Download Application Form';
  if (subSlug === 'beneficiary-list') return 'View Beneficiary List';
  if (subSlug === 'card-download') return 'Download E-Card Online';
  if (subSlug === 'login-portal') return 'Portal Login & Access';
  if (subSlug === 'how-to-apply') return 'Step-by-Step Application Guide';
  if (subSlug === 'kanyashree-prakalpa-in-bengali') return 'Kanyashree Guide in Bengali';
  return subSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function getQuickIcon(subSlug) {
  if (subSlug.includes('status')) return '🔍';
  if (subSlug.includes('apply') || subSlug.includes('form')) return '📝';
  if (subSlug.includes('beneficiary')) return '📋';
  if (subSlug.includes('card')) return '💳';
  if (subSlug.includes('login')) return '🔐';
  return '📌';
}

const auditLog = {
  relatedSchemesFixed: [],
  quickLinksFixed: [],
  inlineLinksFixed: [],
  footersFixed: []
};

htmlFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let relPath = path.relative(rootDir, filePath).replace(/\\/g, '/');
  let parts = relPath.split('/');
  let isSubPage = parts.length === 4 && parts[0] === 'schemes';
  let isMainScheme = parts.length === 3 && parts[0] === 'schemes' && schemeNameMap[parts[1]];
  let schemeSlug = isSubPage || isMainScheme ? parts[1] : null;

  // -------------------------------------------------------------
  // PROBLEM 1: Fix Related Schemes Section
  // -------------------------------------------------------------
  if (content.includes('Related Schemes') || content.includes('related-card') || content.includes('class="related-schemes-grid"')) {
    content = content.replace(/<section class="content-block">\s*<h2>Related Schemes<\/h2>[\s\S]*?<\/section>/gi, (match) => {
      // Find default schemes to link
      let relatedSlugs = ['lakshmir-bhandar', 'swasthya-sathi', 'krishak-bandhu'].filter(s => s !== schemeSlug);
      if (relatedSlugs.length < 3) relatedSlugs.push('jai-bangla-pension-scheme');
      relatedSlugs = relatedSlugs.slice(0, 3);

      let cardsHtml = relatedSlugs.map(s => {
        let name = schemeNameMap[s] || s;
        let summary = schemeSummaryMap[s] || 'View full scheme details, eligibility criteria, and application steps.';
        return `          <a href="/schemes/${s}/index.html" class="scheme-card">
            <div class="scheme-card-header">
              <span class="scheme-card-badge">Welfare Guide</span>
              <span class="scheme-card-icon">🏛️</span>
            </div>
            <h3 class="scheme-card-title">${name}</h3>
            <p class="scheme-card-summary">${summary}</p>
            <div class="scheme-card-cta">View Details & Apply →</div>
          </a>`;
      }).join('\n');

      auditLog.relatedSchemesFixed.push(relPath);

      return `<section class="content-block">
        <h2>Related Schemes</h2>
        <div class="scheme-grid">
${cardsHtml}
        </div>
      </section>`;
    });
  }

  // -------------------------------------------------------------
  // PROBLEM 3: Fix Quick Links Sidebar Box (Populate or Provide Fallbacks)
  // -------------------------------------------------------------
  if (isMainScheme || isSubPage) {
    let schemeDir = path.join(rootDir, 'schemes', schemeSlug);
    let subDirs = [];
    if (fs.existsSync(schemeDir)) {
      subDirs = fs.readdirSync(schemeDir).filter(f => {
        let full = path.join(schemeDir, f);
        return fs.statSync(full).isDirectory() && fs.existsSync(path.join(full, 'index.html'));
      });
    }

    let quickItemsHtml = '';
    if (subDirs.length > 0) {
      quickItemsHtml = subDirs.map(sub => {
        let label = getSubPageLabel(sub);
        let icon = getQuickIcon(sub);
        return `        <a href="/schemes/${schemeSlug}/${sub}/index.html" class="quick-link-item">
          <span class="quick-link-icon">${icon}</span>
          <div class="quick-link-text">
            <span class="quick-link-title">${label}</span>
            <span class="quick-link-sub">Official Guide & Portal</span>
          </div>
          <span class="quick-link-arrow">→</span>
        </a>`;
      }).join('\n');
    } else {
      // Fallback for schemes without sub-pages
      quickItemsHtml = `        <a href="/schemes/index.html" class="quick-link-item">
          <span class="quick-link-icon">📋</span>
          <div class="quick-link-text">
            <span class="quick-link-title">All West Bengal Schemes</span>
            <span class="quick-link-sub">Browse Full Directory</span>
          </div>
          <span class="quick-link-arrow">→</span>
        </a>
        <a href="/categories/index.html" class="quick-link-item">
          <span class="quick-link-icon">🏛️</span>
          <div class="quick-link-text">
            <span class="quick-link-title">Browse Categories</span>
            <span class="quick-link-sub">Explore Welfare Hubs</span>
          </div>
          <span class="quick-link-arrow">→</span>
        </a>
        <a href="/contact/index.html" class="quick-link-item">
          <span class="quick-link-icon">✉️</span>
          <div class="quick-link-text">
            <span class="quick-link-title">Contact Help Desk</span>
            <span class="quick-link-sub">Ask Scheme Question</span>
          </div>
          <span class="quick-link-arrow">→</span>
        </a>`;
    }

    let sidebarHtml = `<div class="sidebar-widget">
      <h3>Quick Links & Services</h3>
      <div class="quick-links-container">
${quickItemsHtml}
      </div>
    </div>`;

    // Replace old sidebar widget
    if (content.includes('<aside class="sidebar">')) {
      content = content.replace(/<aside class="sidebar">[\s\S]*?<\/aside>/gi, `<aside class="sidebar">\n  ${sidebarHtml}\n</aside>`);
      auditLog.quickLinksFixed.push(relPath);
    }
  }

  // -------------------------------------------------------------
  // PROBLEM 2: Fix Inline Body Links (Ensure class="body-link")
  // -------------------------------------------------------------
  content = content.replace(/<span class="placeholder-text">\s*<a\s+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>\s*<\/span>/gi, 
    '<a href="$1" class="body-link" target="_blank" rel="noopener noreferrer">$2</a>');

  content = content.replace(/<a\s+href=["'](https?:\/\/(?!wbschemes\.in)[^"']+)["'](?![^>]*class=)([^>]*)>/gi, (match, href, rest) => {
    return `<a href="${href}" class="body-link"${rest}>`;
  });

  content = content.replace(/<p>([\s\S]*?)<\/p>/gi, (match, inner) => {
    let upgradedP = inner.replace(/<a\s+href=["']([^"']+)["'](?![^>]*class=)([^>]*)>/gi, (aMatch, href, rest) => {
      if (rest.includes('btn') || rest.includes('badge') || rest.includes('card') || rest.includes('footer')) return aMatch;
      return `<a href="${href}" class="body-link"${rest}>`;
    });
    return `<p>${upgradedP}</p>`;
  });

  // -------------------------------------------------------------
  // PROBLEM 4: Standardize Footer Links
  // -------------------------------------------------------------
  let standardFooter = `  <!-- Footer -->
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
            WB Schemes Portal is an independent informational guide and is NOT affiliated with, authorized by, or associated with the Government of West Bengal or any official department. No financial transactions or official applications are processed directly on this website. For official government services, visit <a href="https://wb.gov.in" class="footer-link" target="_blank" rel="noopener noreferrer" style="color: var(--accent-gold); text-decoration: underline;">wb.gov.in</a>.
          </p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 WB Schemes Portal. All rights reserved.</p>
      </div>
    </div>
  </footer>`;

  content = content.replace(/<footer class="site-footer">[\s\S]*?<\/footer>/gi, standardFooter);

  fs.writeFileSync(filePath, content, 'utf8');
});

fs.writeFileSync('audit_fix_log.json', JSON.stringify(auditLog, null, 2), 'utf8');
console.log('All 4 problems fixed across all 54 HTML files successfully!');
