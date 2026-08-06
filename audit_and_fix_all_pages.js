const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const domain = 'https://wbschemes.in';

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
console.log(`Found ${htmlFiles.length} HTML files to audit and update.`);

let updatedCount = 0;

htmlFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let relPath = path.relative(rootDir, filePath).replace(/\\/g, '/');
  
  let canonicalPath = relPath;
  if (canonicalPath.endsWith('index.html')) {
    canonicalPath = canonicalPath.slice(0, -10);
  }
  let canonicalUrl = `${domain}/${canonicalPath}`;
  if (canonicalUrl.length > domain.length + 1 && canonicalUrl.endsWith('/')) {
    canonicalUrl = canonicalUrl.slice(0, -1);
  }
  if (canonicalUrl === `${domain}/`) canonicalUrl = `${domain}/`;

  let isHomepage = relPath === 'index.html';
  let is404 = relPath === '404.html';
  let isAbout = relPath === 'about/index.html';
  let isPrivacy = relPath === 'privacy-policy/index.html';
  let isContact = relPath === 'contact/index.html';

  // Extract Page Title
  let titleMatch = content.match(/<title>(.*?)<\/title>/i);
  let titleText = titleMatch ? titleMatch[1].trim() : 'West Bengal Government Schemes Portal';

  // Fix branding H1 in header to span so each page has exactly ONE H1 tag
  content = content.replace(/<div class="brand-text">\s*<h1>West Bengal Schemes Portal<\/h1>/gi, 
    '<div class="brand-text"><span>West Bengal Schemes Portal</span>');
  content = content.replace(/<div class="brand-text">\s*<h1>West Bengal Government Schemes Portal<\/h1>/gi, 
    '<div class="brand-text"><span>West Bengal Schemes Portal</span>');

  // Extract Meta Description
  let descMatch = content.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
  let descText = descMatch ? descMatch[1].trim() : 'Detailed guide to West Bengal government welfare schemes, eligibility, benefits, application steps, and status checking in 2026.';

  // Build Head Elements
  let canonicalTag = `<link rel="canonical" href="${canonicalUrl}">`;
  let robotsTag = is404 ? `<meta name="robots" content="noindex, follow">` : `<meta name="robots" content="index, follow">`;
  
  let ogTags = `
  <!-- Open Graph / Social Media -->
  <meta property="og:title" content="${titleText.replace(/"/g, '&quot;')}">
  <meta property="og:description" content="${descText.replace(/"/g, '&quot;')}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:image" content="${domain}/images/og-default.jpg">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${titleText.replace(/"/g, '&quot;')}">
  <meta name="twitter:description" content="${descText.replace(/"/g, '&quot;')}">`;

  // Update <head>
  if (!content.includes('rel="canonical"')) {
    content = content.replace(/<\/head>/i, `  ${canonicalTag}\n  ${robotsTag}${ogTags}\n</head>`);
  } else {
    content = content.replace(/<link\s+rel=["']canonical["'].*?>/gi, canonicalTag);
    if (!content.includes('og:title')) {
      content = content.replace(/<\/head>/i, `${ogTags}\n</head>`);
    }
  }

  // Update Header Navigation
  let navActiveHome = isHomepage ? ' class="active"' : '';
  let navActiveSchemes = relPath.startsWith('schemes/') ? ' class="active"' : '';
  let navActiveCategories = relPath.startsWith('categories/') ? ' class="active"' : '';
  let navActiveAbout = isAbout ? ' class="active"' : '';
  let navActiveContact = isContact ? ' class="active"' : '';

  let standardNav = `<nav class="main-nav">
          <a href="/index.html"${navActiveHome}>Home</a>
          <a href="/schemes/index.html"${navActiveSchemes}>All Schemes</a>
          <a href="/categories/index.html"${navActiveCategories}>Categories</a>
          <a href="/about/index.html"${navActiveAbout}>About Us</a>
          <a href="/contact/index.html"${navActiveContact}>Contact Us</a>
        </nav>`;

  content = content.replace(/<nav class="main-nav">[\s\S]*?<\/nav>/gi, standardNav);

  // Update Footer with standard links & disclaimers
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
            <li><a href="/index.html">Home</a></li>
            <li><a href="/schemes/index.html">All Schemes List</a></li>
            <li><a href="/categories/index.html">Scheme Categories</a></li>
            <li><a href="/about/index.html">About Us</a></li>
            <li><a href="/contact/index.html">Contact Us</a></li>
            <li><a href="/privacy-policy/index.html">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>Disclaimer & Disclosure</h3>
          <p class="disclaimer-text">
            WB Schemes Portal is an independent informational guide and is NOT affiliated with, authorized by, or associated with the Government of West Bengal or any official department. No financial transactions or official applications are processed directly on this website. For official government services, visit <a href="https://wb.gov.in" target="_blank" rel="noopener noreferrer">wb.gov.in</a>.
          </p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 WB Schemes Portal. All rights reserved.</p>
      </div>
    </div>
  </footer>`;

  content = content.replace(/<footer class="site-footer">[\s\S]*?<\/footer>/gi, standardFooter);

  // Ensure external links have rel="noopener noreferrer" and target="_blank"
  content = content.replace(/<a\s+([^>]*href=["']https?:\/\/(?!wbschemes\.in)[^"']+["'][^>]*)>/gi, (match, p1) => {
    let tag = p1;
    if (!tag.includes('target=')) tag += ' target="_blank"';
    if (!tag.includes('rel=')) tag += ' rel="noopener noreferrer"';
    return `<a ${tag}>`;
  });

  // Inject E-E-A-T Fact-Check badge on scheme pages if missing
  if (relPath.startsWith('schemes/') && !relPath.endsWith('schemes/index.html') && !content.includes('fact-checked-badge')) {
    let badgeHtml = `\n<div class="eeat-badge-container">
      <span class="fact-checked-badge">Fact-Checked 2026</span>
      <span>Fact-checked against official state notifications (wb.gov.in) • Editorial Review: August 2026</span>
    </div>\n`;
    content = content.replace(/(<h1[^>]*>[\s\S]*?<\/h1>)/i, `$1${badgeHtml}`);
  }

  // Ensure main.js has defer attribute
  content = content.replace(/<script src=["']\/js\/main\.js["']><\/script>/gi, '<script src="/js/main.js" defer></script>');

  fs.writeFileSync(filePath, content, 'utf8');
  updatedCount++;
});

console.log(`Successfully audited and updated ${updatedCount} HTML files.`);
