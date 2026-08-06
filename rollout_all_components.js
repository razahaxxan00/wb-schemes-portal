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
console.log(`Starting global UI component rollout across ${htmlFiles.length} HTML files...`);

let processedCount = 0;
const fixesLog = [];
const orphanFixesLog = [];

// Helper to determine scheme display name from directory slug
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

// Icon mapping for quick links
function getQuickLinkIcon(href) {
  if (href.includes('status-check')) return '🔍';
  if (href.includes('apply') || href.includes('how-to-apply')) return '📝';
  if (href.includes('beneficiary')) return '📋';
  if (href.includes('card-download')) return '💳';
  if (href.includes('login')) return '🔐';
  return '📌';
}

htmlFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let relPath = path.relative(rootDir, filePath).replace(/\\/g, '/');
  let isHomepage = relPath === 'index.html';
  if (isHomepage) return; // Homepage already refactored in Step 2

  let parts = relPath.split('/');
  let isSubPage = parts.length === 4 && parts[0] === 'schemes';
  let isMainScheme = parts.length === 3 && parts[0] === 'schemes';
  let isCategoryHub = parts.length === 3 && parts[0] === 'schemes' && parts[1].includes('-');
  let schemeSlug = (isSubPage || isMainScheme) ? parts[1] : null;

  // 1. Upgrade Breadcrumbs
  content = content.replace(/<nav class="breadcrumbs" aria-label="Breadcrumb">([\s\S]*?)<\/nav>/gi, (match, inner) => {
    let upgradedInner = inner.replace(/<a\s+href=["']([^"']+)["'](?![^>]*class=)/gi, '<a href="$1" class="breadcrumb-link"');
    return `<nav class="breadcrumbs" aria-label="Breadcrumb">${upgradedInner}</nav>`;
  });
  content = content.replace(/<ol class="breadcrumb">([\s\S]*?)<\/ol>/gi, (match, inner) => {
    let upgradedInner = inner.replace(/<a\s+href=["']([^"']+)["'](?![^>]*class=)/gi, '<a href="$1" class="breadcrumb-link"');
    return `<ol class="breadcrumb">${upgradedInner}</ol>`;
  });

  // 2. Add Back Button on Sub-Pages
  if (isSubPage) {
    let parentSchemeName = getSchemeName(schemeSlug);
    let parentHref = `/schemes/${schemeSlug}/index.html`;
    let backBtnHtml = `<a href="${parentHref}" class="back-link-btn">← Back to ${parentSchemeName} Overview</a>\n`;

    if (!content.includes('class="back-link-btn"')) {
      content = content.replace(/(<article class="main-content[^>]*>)/i, `$1\n${backBtnHtml}`);
    }
  }

  // 3. Upgrade Quick Links Sidebar to .quick-link-item
  content = content.replace(/<ul class="quick-links-list">([\s\S]*?)<\/ul>/gi, (match, inner) => {
    let linkMatches = inner.match(/<a\s+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi) || [];
    let itemsHtml = linkMatches.map(link => {
      let hrefMatch = link.match(/href=["']([^"']+)["']/i);
      let href = hrefMatch ? hrefMatch[1] : '#';
      let rawText = link.replace(/<[^>]+>/g, '').replace(/→/g, '').trim();
      let icon = getQuickLinkIcon(href);
      return `<a href="${href}" class="quick-link-item">
        <span class="quick-link-icon">${icon}</span>
        <div class="quick-link-text">
          <span class="quick-link-title">${rawText}</span>
          <span class="quick-link-sub">Official Guide & Portal</span>
        </div>
        <span class="quick-link-arrow">→</span>
      </a>`;
    }).join('\n');

    return `<div class="quick-links-container">${itemsHtml}</div>`;
  });

  // 4. Upgrade Inline Body Links to .body-link
  content = content.replace(/<p>([\s\S]*?)<\/p>/gi, (match, inner) => {
    let upgradedParagraph = inner.replace(/<a\s+href=["']([^"']+)["'](?![^>]*class=)([^>]*)>/gi, (aMatch, href, rest) => {
      // Don't add body-link if it's already styled or button
      if (rest.includes('btn') || rest.includes('badge')) return aMatch;
      return `<a href="${href}" class="body-link"${rest}>`;
    });
    return `<p>${upgradedParagraph}</p>`;
  });

  // 5. Upgrade Footer Links
  content = content.replace(/<footer class="site-footer">([\s\S]*?)<\/footer>/gi, (match, inner) => {
    let upgradedFooter = inner.replace(/<a\s+href=["']([^"']+)["'](?![^>]*class=)([^>]*)>/gi, (aMatch, href, rest) => {
      return `<a href="${href}" class="footer-link"${rest}>`;
    });
    return `<footer class="site-footer">${upgradedFooter}</footer>`;
  });

  // 6. Ensure Scheme Cards on Category Hub & Directory pages use .scheme-card
  if (relPath.includes('schemes/index.html') || relPath.includes('categories/index.html')) {
    content = content.replace(/<a\s+href=["']([^"']+)["']\s+class="related-card">([\s\S]*?)<\/a>/gi, (match, href, inner) => {
      let titleMatch = inner.match(/<h[34]>(.*?)<\/h[34]>/i);
      let title = titleMatch ? titleMatch[1] : 'Welfare Scheme';
      let descMatch = inner.match(/<p>(.*?)<\/p>/i);
      let desc = descMatch ? descMatch[1] : 'View scheme eligibility and details.';
      return `<a href="${href}" class="scheme-card">
        <div class="scheme-card-header">
          <span class="scheme-card-badge">Welfare Portal</span>
          <span class="scheme-card-icon">🏛️</span>
        </div>
        <h3 class="scheme-card-title">${title}</h3>
        <p class="scheme-card-summary">${desc}</p>
        <div class="scheme-card-cta">View Details & Apply →</div>
      </a>`;
    });
  }

  fs.writeFileSync(filePath, content, 'utf8');
  processedCount++;
});

console.log(`Successfully refactored ${processedCount} HTML files with shared component architecture!`);
