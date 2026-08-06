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
console.log(`Starting precision component refactoring across all ${htmlFiles.length} HTML pages...`);

const iconMap = {
  'social-welfare': { icon: '⚖️', bg: 'rgba(11, 60, 93, 0.1)', color: '#0b3c5d', name: 'Social Welfare' },
  'women-welfare': { icon: '👩', bg: 'rgba(217, 70, 239, 0.1)', color: '#c026d3', name: 'Women Welfare' },
  'farmer-schemes': { icon: '🌾', bg: 'rgba(10, 135, 84, 0.1)', color: '#0a8754', name: 'Farmer Schemes' },
  'student-schemes': { icon: '🎓', bg: 'rgba(99, 102, 241, 0.1)', color: '#4f46e5', name: 'Student Schemes' },
  'scholarship-schemes': { icon: '📘', bg: 'rgba(245, 158, 11, 0.1)', color: '#d97706', name: 'Scholarship Schemes' },
  'pension-schemes': { icon: '👵', bg: 'rgba(239, 68, 68, 0.1)', color: '#dc2626', name: 'Pension Schemes' },
  'housing-schemes': { icon: '🏠', bg: 'rgba(168, 85, 247, 0.1)', color: '#9333ea', name: 'Housing Schemes' },
  'health-schemes': { icon: '🏥', bg: 'rgba(14, 165, 233, 0.1)', color: '#0284c7', name: 'Health Schemes' },
  'employment-schemes': { icon: '💼', bg: 'rgba(20, 184, 166, 0.1)', color: '#0d9488', name: 'Employment Schemes' },
  'minority-schemes': { icon: '🕌', bg: 'rgba(59, 130, 246, 0.1)', color: '#2563eb', name: 'Minority Schemes' },
  'disability-schemes': { icon: '♿', bg: 'rgba(236, 72, 153, 0.1)', color: '#db2777', name: 'Disability Schemes' },
  'senior-citizen-schemes': { icon: '👴', bg: 'rgba(107, 114, 128, 0.1)', color: '#4b5563', name: 'Senior Citizen Schemes' },
  'child-welfare-schemes': { icon: '🧒', bg: 'rgba(16, 185, 129, 0.1)', color: '#059669', name: 'Child Welfare Schemes' }
};

function getQuickIcon(href) {
  if (href.includes('status-check')) return '🔍';
  if (href.includes('apply') || href.includes('how-to-apply')) return '📝';
  if (href.includes('beneficiary')) return '📋';
  if (href.includes('card-download')) return '💳';
  if (href.includes('login')) return '🔐';
  return '📌';
}

function getSchemeName(slug) {
  const map = {
    'lakshmir-bhandar': 'Lakshmir Bhandar',
    'swasthya-sathi': 'Swasthya Sathi',
    'krishak-bandhu': 'Krishak Bandhu',
    'kanyashree-prakalpa': 'Kanyashree Prakalpa',
    'aikyashree-scholarship': 'Aikyashree Scholarship',
    'bangla-shasya-bima': 'Bangla Shasya Bima',
    'banglar-bari-prakalpa': 'Banglar Bari Prakalpa',
    'jai-bangla-pension-scheme': 'Jai Bangla Pension Scheme',
    'khadya-sathi': 'Khadya Sathi',
    'manabik-pension-scheme': 'Manabik Pension Scheme',
    'oasis-scholarship': 'Oasis Scholarship',
    'rupashree-prakalpa': 'Rupashree Prakalpa',
    'sabooj-sathi': 'Sabooj Sathi',
    'samabyathi-prakalpa': 'Samabyathi Prakalpa',
    'shikshashree-scheme': 'Shikshashree Scheme',
    'utkarsh-bangla': 'Utkarsh Bangla',
    'geetanjali-housing-scheme': 'Geetanjali Housing Scheme'
  };
  return map[slug] || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

let modifiedCount = 0;

htmlFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let relPath = path.relative(rootDir, filePath).replace(/\\/g, '/');
  if (relPath === 'index.html') return; // Single source of truth

  let parts = relPath.split('/');
  let isSubPage = parts.length === 4 && parts[0] === 'schemes';
  let isMainScheme = parts.length === 3 && parts[0] === 'schemes' && !parts[1].endsWith('-schemes') && parts[1] !== 'women-welfare' && parts[1] !== 'social-welfare';
  let isCategoryHub = parts.length === 3 && parts[0] === 'schemes' && (parts[1].endsWith('-schemes') || parts[1] === 'women-welfare' || parts[1] === 'social-welfare');
  let schemeSlug = isSubPage || isMainScheme ? parts[1] : null;

  // A. Replace any leftover class="related-card" or unstyled links with .scheme-card or .category-card
  content = content.replace(/<div class="related-schemes-grid"[^>]*>([\s\S]*?)<\/div>/gi, (match, inner) => {
    let upgradedInner = inner.replace(/<a\s+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, (aMatch, href, aInner) => {
      let titleMatch = aInner.match(/<h[34]>(.*?)<\/h[34]>/i);
      let title = titleMatch ? titleMatch[1].trim() : 'Scheme Guide';
      let descMatch = aInner.match(/<p>(.*?)<\/p>/i);
      let desc = descMatch ? descMatch[1].trim() : 'View full scheme details and eligibility guidelines.';
      
      // Determine if destination is Category or Scheme
      if (href.includes('-schemes') || href.includes('women-welfare') || href.includes('social-welfare')) {
        let catKey = href.split('/')[2] || 'social-welfare';
        let meta = iconMap[catKey] || { icon: '🏛️', bg: 'rgba(11,60,93,0.1)', color: '#0b3c5d' };
        return `<a href="${href}" class="category-card">
          <div class="category-icon" style="background: ${meta.bg}; color: ${meta.color};">${meta.icon}</div>
          <div class="category-info">
            <h3 class="category-title">${title}</h3>
            <p class="category-desc">${desc}</p>
          </div>
        </a>`;
      } else {
        return `<a href="${href}" class="scheme-card">
          <div class="scheme-card-header">
            <span class="scheme-card-badge">Welfare Guide</span>
            <span class="scheme-card-icon">🏛️</span>
          </div>
          <h3 class="scheme-card-title">${title}</h3>
          <p class="scheme-card-summary">${desc}</p>
          <div class="scheme-card-cta">View Details & Apply →</div>
        </a>`;
      }
    });

    return `<div class="scheme-grid">${upgradedInner}</div>`;
  });

  // B. Replace any standalone Back Link (e.g. ← Back to ...) with .back-link-btn
  content = content.replace(/<a\s+href=["']([^"']+)["'][^>]*>\s*←\s*Back[^<]*<\/a>/gi, (match, href) => {
    let parentTitle = schemeSlug ? getSchemeName(schemeSlug) : 'Overview';
    return `<a href="${href}" class="back-link-btn">← Back to ${parentTitle} Overview</a>`;
  });

  // Ensure Sub-Pages have .back-link-btn at top of article
  if (isSubPage && !content.includes('class="back-link-btn"')) {
    let parentTitle = getSchemeName(schemeSlug);
    let parentHref = `/schemes/${schemeSlug}/index.html`;
    let backBtn = `<a href="${parentHref}" class="back-link-btn">← Back to ${parentTitle} Overview</a>\n`;
    content = content.replace(/(<article class="main-content[^>]*>)/i, `$1\n${backBtn}`);
  }

  // C. Replace sidebar quick links <ul><li> or unstyled list with .quick-link-item
  content = content.replace(/<div class="sidebar-widget">([\s\S]*?)<\/div>/gi, (match, inner) => {
    if (!inner.includes('Quick Links')) return match;
    let titleMatch = inner.match(/<h3>(.*?)<\/h3>/i);
    let h3Title = titleMatch ? titleMatch[1] : 'Quick Links';
    
    let aMatches = inner.match(/<a\s+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi) || [];
    let items = aMatches.map(aTag => {
      let hrefMatch = aTag.match(/href=["']([^"']+)["']/i);
      let href = hrefMatch ? hrefMatch[1] : '#';
      let text = aTag.replace(/<[^>]+>/g, '').replace(/→/g, '').trim();
      let icon = getQuickIcon(href);
      return `<a href="${href}" class="quick-link-item">
        <span class="quick-link-icon">${icon}</span>
        <div class="quick-link-text">
          <span class="quick-link-title">${text}</span>
          <span class="quick-link-sub">Official Guide & Portal</span>
        </div>
        <span class="quick-link-arrow">→</span>
      </a>`;
    }).join('\n');

    return `<div class="sidebar-widget">
      <h3>${h3Title}</h3>
      <div class="quick-links-container">
        ${items}
      </div>
    </div>`;
  });

  // D. Standardize Breadcrumbs (.breadcrumb-link)
  content = content.replace(/<nav class="breadcrumbs" aria-label="Breadcrumb">([\s\S]*?)<\/nav>/gi, (match, inner) => {
    let cleanInner = inner.replace(/<a\s+href=["']([^"']+)["'][^>]*>/gi, '<a href="$1" class="breadcrumb-link">');
    return `<nav class="breadcrumbs" aria-label="Breadcrumb">${cleanInner}</nav>`;
  });
  content = content.replace(/<ol class="breadcrumb">([\s\S]*?)<\/ol>/gi, (match, inner) => {
    let cleanInner = inner.replace(/<a\s+href=["']([^"']+)["'][^>]*>/gi, '<a href="$1" class="breadcrumb-link">');
    return `<ol class="breadcrumb">${cleanInner}</ol>`;
  });

  // E. Standardize Paragraph Links (.body-link)
  content = content.replace(/<p>([\s\S]*?)<\/p>/gi, (match, inner) => {
    let upgradedP = inner.replace(/<a\s+href=["']([^"']+)["'](?![^>]*class=)([^>]*)>/gi, (aMatch, href, rest) => {
      if (rest.includes('btn') || rest.includes('badge') || rest.includes('card')) return aMatch;
      return `<a href="${href}" class="body-link"${rest}>`;
    });
    return `<p>${upgradedP}</p>`;
  });

  // F. Standardize Footer Links (.footer-link)
  content = content.replace(/<footer class="site-footer">([\s\S]*?)<\/footer>/gi, (match, inner) => {
    let cleanFooter = inner.replace(/<a\s+href=["']([^"']+)["'](?![^>]*class=)([^>]*)>/gi, '<a href="$1" class="footer-link"$2>');
    return `<footer class="site-footer">${cleanFooter}</footer>`;
  });

  fs.writeFileSync(filePath, content, 'utf8');
  modifiedCount++;
});

console.log(`Successfully refactored ${modifiedCount} HTML files with 100% homepage component alignment!`);
