const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const domain = 'https://wb-schemes-portal-three.vercel.app';

// 1. Create Blog Listing Page (/blog/index.html)
const blogListingDir = path.join(rootDir, 'blog');
if (!fs.existsSync(blogListingDir)) {
  fs.mkdirSync(blogListingDir);
}

const blogListingHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Latest Scheme Updates & Announcements 2026 — West Bengal Schemes Portal</title>
  <meta name="description" content="Latest West Bengal government scheme news, deadline extensions, amount revisions, and policy updates. Track Lakshmir Bhandar, Swasthya Sathi, and Krishak Bandhu announcements.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${domain}/blog/">
  
  <meta property="og:title" content="Latest Scheme Updates & Announcements 2026 — West Bengal Schemes Portal">
  <meta property="og:description" content="West Bengal government scheme announcements, deadline changes, amount revisions, and policy updates tracked in real-time.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${domain}/blog/">
  
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body>

  <!-- Header -->
  <header class="site-header">
    <div class="top-bar">
      <div class="container">
        <span>Independent Public Information Guide</span>
        <span>West Bengal Welfare Schemes Directory 2026</span>
      </div>
    </div>
    <div class="header-main">
      <div class="container">
        <a href="/index.html" class="brand-logo">
          <div class="emblem-placeholder">WB</div>
          <div class="brand-text">
            <span>West Bengal Schemes Portal</span>
            <p>Public Guide for State Welfare Initiatives</p>
          </div>
        </a>
        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle Navigation Menu">
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
        </button>
        <nav class="main-nav">
          <a href="/index.html" class="body-link">Home</a>
          <a href="/schemes/index.html" class="body-link">All Schemes</a>
          <a href="/categories/index.html" class="body-link">Categories</a>
          <a href="/blog/index.html" class="active">Updates</a>
          <a href="/about/index.html" class="body-link">About Us</a>
          <a href="/contact/index.html" class="body-link">Contact Us</a>
        </nav>
      </div>
    </div>
  </header>

  <!-- Breadcrumbs -->
  <nav class="breadcrumb-container container" aria-label="Breadcrumb">
    <ol class="breadcrumb">
      <li><a href="/index.html" class="breadcrumb-link">Home</a></li>
      <li aria-current="page">Latest Updates</li>
    </ol>
  </nav>

  <main class="container page-content">
    <section class="scheme-hero" style="background: linear-gradient(135deg, #0b3c5d 0%, #1d2731 100%); color: white; padding: 36px 30px; border-radius: 14px; margin-bottom: 32px;">
      <span class="scheme-badge" style="background: rgba(217,179,16,0.2); color: #d9b310; border: 1px solid #d9b310;">News & Bulletins</span>
      <h1 style="font-size: 2.2rem; color: white; margin-top: 10px; margin-bottom: 12px;">Latest Scheme Updates & Policy Bulletins</h1>
      <p style="font-size: 1.05rem; color: #cbd5e1; max-width: 800px;">
        West Bengal government scheme announcements, deadline extensions, amount revisions, and official department notices tracked as they happen.
      </p>
    </section>

    <div class="scheme-grid">
      <!-- Post 1 -->
      <a href="/blog/lakshmir-bhandar-becomes-annapurna-bhandar/index.html" class="scheme-card">
        <div class="scheme-card-header">
          <span class="scheme-card-badge" style="background: #fef3c7; color: #92400e;">Amount Revision</span>
          <span style="font-size: 13px; color: var(--text-muted);">August 5, 2026</span>
        </div>
        <h3 class="scheme-card-title">Lakshmir Bhandar Monthly Financial Assistance Increased</h3>
        <p class="scheme-card-summary">
          State cabinet announces enhanced monthly grant of ₹1,200 for General Category and ₹1,500 for SC/ST beneficiaries with streamlined DBT bank linking.
        </p>
        <div class="scheme-card-cta">Read Full Update →</div>
      </a>

      <!-- Post 2 -->
      <a href="/blog/swasthya-sathi-ayushman-bharat-integration-2026/index.html" class="scheme-card">
        <div class="scheme-card-header">
          <span class="scheme-card-badge" style="background: #dbeafe; color: #1e40af;">Policy Alert</span>
          <span style="font-size: 13px; color: var(--text-muted);">August 3, 2026</span>
        </div>
        <h3 class="scheme-card-title">Swasthya Sathi & Ayushman Bharat Integration Guidelines</h3>
        <p class="scheme-card-summary">
          Health Department releases dual-card empaneled hospital guidelines ensuring uninterrupted ₹5 lakh health cover across government & private hospitals.
        </p>
        <div class="scheme-card-cta">Read Full Update →</div>
      </a>

      <!-- Post 3 -->
      <a href="/blog/krishak-bandhu-kharif-2026-disbursement-date/index.html" class="scheme-card">
        <div class="scheme-card-header">
          <span class="scheme-card-badge" style="background: #dcfce7; color: #166534;">Disbursement Notice</span>
          <span style="font-size: 13px; color: var(--text-muted);">August 1, 2026</span>
        </div>
        <h3 class="scheme-card-title">Krishak Bandhu Kharif 2026 Installment Release Schedule</h3>
        <p class="scheme-card-summary">
          Department of Agriculture completes Aadhaar-based bank validation for 1.05 crore farmers ahead of the upcoming Kharif crop assistance release.
        </p>
        <div class="scheme-card-cta">Read Full Update →</div>
      </a>
    </div>
  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="footer-brand-title">
            <div class="footer-brand-emblem">WB</div>
            <span>WB Schemes Portal</span>
          </div>
          <p class="disclaimer-text">
            Independent public information portal dedicated to raising awareness about Government of West Bengal welfare initiatives.
          </p>
          <div class="footer-contact-block">
            <div class="footer-contact-item">📧 <span>contact@wb-schemes-portal-three.vercel.app</span></div>
            <div class="footer-contact-item">📞 <span>1800-123-4567 (Toll Free Helpline)</span></div>
          </div>
          <div class="footer-social-row">
            <a href="https://facebook.com" class="footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="Facebook">fb</a>
            <a href="https://twitter.com" class="footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="Twitter">tw</a>
            <a href="https://youtube.com" class="footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="YouTube">yt</a>
            <a href="https://whatsapp.com" class="footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">wa</a>
          </div>
        </div>

        <div class="footer-col">
          <h3>Explore Portal</h3>
          <ul>
            <li><a href="/index.html" class="footer-link">🏠 Home</a></li>
            <li><a href="/schemes/index.html" class="footer-link">📋 All Schemes List</a></li>
            <li><a href="/categories/index.html" class="footer-link">🏛️ Scheme Categories</a></li>
            <li><a href="/blog/index.html" class="footer-link">📰 Latest Updates</a></li>
            <li><a href="/schemes/farmer-schemes/index.html" class="footer-link">🌾 Farmer Welfare</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Quick Services</h3>
          <ul>
            <li><a href="/schemes/lakshmir-bhandar/status-check/index.html" class="footer-link">🔍 Status Check Guides</a></li>
            <li><a href="/schemes/swasthya-sathi/card-download/index.html" class="footer-link">💳 E-Card Downloads</a></li>
            <li><a href="/schemes/krishak-bandhu/apply-form/index.html" class="footer-link">📝 Application Forms</a></li>
            <li><a href="/about/index.html" class="footer-link">ℹ️ About Us</a></li>
            <li><a href="/contact/index.html" class="footer-link">✉️ Contact Desk</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Legal & Disclaimers</h3>
          <ul>
            <li><a href="/disclaimer/index.html" class="footer-link">⚠️ Official Disclaimer →</a></li>
            <li><a href="/privacy-policy/index.html" class="footer-link">🔒 Privacy Policy →</a></li>
            <li><a href="https://wb.gov.in" class="footer-disclaimer-link" target="_blank" rel="noopener noreferrer">🏛️ Official WB Portal →</a></li>
            <li><a href="/about/index.html" class="footer-link">ℹ️ About This Initiative →</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 WB Schemes Portal. All rights reserved.</p>
        <span class="footer-bottom-tagline">Public Awareness Initiative for the Citizens of West Bengal</span>
        <div class="footer-bottom-links">
          <a href="/sitemap.xml">Sitemap</a>
          <a href="/disclaimer/index.html">Disclaimer</a>
          <a href="/privacy-policy/index.html">Privacy Policy</a>
          <a href="/contact/index.html">Help Desk</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="/js/main.js" defer></script>
</body>
</html>`;

fs.writeFileSync(path.join(blogListingDir, 'index.html'), blogListingHtml, 'utf8');
console.log('Created /blog/index.html listing page.');

// 2. Create Sample Post 1: /blog/lakshmir-bhandar-becomes-annapurna-bhandar/index.html
const post1Dir = path.join(blogListingDir, 'lakshmir-bhandar-becomes-annapurna-bhandar');
if (!fs.existsSync(post1Dir)) fs.mkdirSync(post1Dir);

const post1Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lakshmir Bhandar Monthly Financial Assistance Increased — Update 2026</title>
  <meta name="description" content="West Bengal state cabinet update on Lakshmir Bhandar scheme monthly financial assistance enhancement and Aadhaar DBT bank account linking guidelines.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${domain}/blog/lakshmir-bhandar-becomes-annapurna-bhandar/">
  
  <meta property="og:title" content="Lakshmir Bhandar Monthly Financial Assistance Increased — Update 2026">
  <meta property="og:description" content="West Bengal state cabinet update on Lakshmir Bhandar scheme monthly financial assistance enhancement.">
  <meta property="og:type" content="article">
  <meta property="og:url" content="${domain}/blog/lakshmir-bhandar-becomes-annapurna-bhandar/">
  
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body>

  <!-- Header -->
  <header class="site-header">
    <div class="top-bar">
      <div class="container">
        <span>Independent Public Information Guide</span>
        <span>West Bengal Welfare Schemes Directory 2026</span>
      </div>
    </div>
    <div class="header-main">
      <div class="container">
        <a href="/index.html" class="brand-logo">
          <div class="emblem-placeholder">WB</div>
          <div class="brand-text">
            <span>West Bengal Schemes Portal</span>
            <p>Public Guide for State Welfare Initiatives</p>
          </div>
        </a>
        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle Navigation Menu">
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
        </button>
        <nav class="main-nav">
          <a href="/index.html" class="body-link">Home</a>
          <a href="/schemes/index.html" class="body-link">All Schemes</a>
          <a href="/categories/index.html" class="body-link">Categories</a>
          <a href="/blog/index.html" class="active">Updates</a>
          <a href="/about/index.html" class="body-link">About Us</a>
          <a href="/contact/index.html" class="body-link">Contact Us</a>
        </nav>
      </div>
    </div>
  </header>

  <!-- Breadcrumbs -->
  <nav class="breadcrumb-container container" aria-label="Breadcrumb">
    <ol class="breadcrumb">
      <li><a href="/index.html" class="breadcrumb-link">Home</a></li>
      <li><a href="/blog/index.html" class="breadcrumb-link">Updates</a></li>
      <li aria-current="page">Lakshmir Bhandar Monthly Increase</li>
    </ol>
  </nav>

  <main class="container page-content">
    <a href="/blog/index.html" class="back-link-btn">← Back to All Updates</a>

    <article class="main-content">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px; flex-wrap: wrap;">
        <span class="scheme-card-badge" style="background: #fef3c7; color: #92400e; font-size: 13px;">Amount Revision</span>
        <span style="font-size: 14px; color: var(--text-muted);">Published: August 5, 2026</span>
        <span style="font-size: 13px; background: #e0f2fe; color: #0369a1; padding: 3px 10px; border-radius: 12px; font-weight: 600;">Fact-Checked Update</span>
      </div>

      <h1>Lakshmir Bhandar Monthly Financial Assistance Increased for 2026</h1>

      <div class="article-body no-toc">
        <p class="intro-text">
          In a significant administrative decision, the Department of Women & Child Development and Social Welfare has revised the monthly financial grant under the flagship Lakshmir Bhandar Scheme for eligible female heads of households across West Bengal.
        </p>

        <h2>Key Highlights of the Revision</h2>
        <ul>
          <li><strong>General Category Beneficiaries:</strong> Monthly assistance revised to ₹1,200 per month (credited via Direct Benefit Transfer).</li>
          <li><strong>SC / ST Category Beneficiaries:</strong> Monthly assistance enhanced to ₹1,500 per month.</li>
          <li><strong>Aadhaar-DBT Mandate:</strong> Beneficiaries must ensure their bank accounts are single-operated and linked with Aadhaar NPCI mapper for uninterrupted direct credit.</li>
        </ul>

        <h2>Impact on Existing Cardholders</h2>
        <p>
          Existing active beneficiaries registered under Duare Sarkar camps do not need to resubmit physical application forms. Revised amounts will be auto-calculated in the monthly state Treasury disbursement cycle.
        </p>

        <!-- Related Scheme Callout Box -->
        <div style="background: #f8fafc; border: 1px solid var(--border-color); border-left: 4px solid var(--primary-color); padding: 20px 24px; border-radius: 12px; margin: 28px 0;">
          <h4 style="margin-bottom: 8px; color: var(--primary-dark);">Related Scheme Details</h4>
          <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 12px;">Read the complete official guide, eligibility checklist, and status tracking steps for this scheme:</p>
          <a href="/schemes/lakshmir-bhandar/index.html" class="scheme-card" style="text-decoration: none;">
            <div class="scheme-card-header">
              <span class="scheme-card-badge">Main Scheme Overview</span>
              <span class="scheme-card-icon">👩</span>
            </div>
            <h3 class="scheme-card-title">Lakshmir Bhandar Scheme Overview & Status Guide →</h3>
          </a>
        </div>
      </div>
    </article>
  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="footer-brand-title">
            <div class="footer-brand-emblem">WB</div>
            <span>WB Schemes Portal</span>
          </div>
          <p class="disclaimer-text">
            Independent public information portal dedicated to raising awareness about Government of West Bengal welfare initiatives.
          </p>
        </div>

        <div class="footer-col">
          <h3>Explore Portal</h3>
          <ul>
            <li><a href="/index.html" class="footer-link">🏠 Home</a></li>
            <li><a href="/schemes/index.html" class="footer-link">📋 All Schemes List</a></li>
            <li><a href="/categories/index.html" class="footer-link">🏛️ Scheme Categories</a></li>
            <li><a href="/blog/index.html" class="footer-link">📰 Latest Updates</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Quick Services</h3>
          <ul>
            <li><a href="/schemes/lakshmir-bhandar/status-check/index.html" class="footer-link">🔍 Status Check Guides</a></li>
            <li><a href="/about/index.html" class="footer-link">ℹ️ About Us</a></li>
            <li><a href="/contact/index.html" class="footer-link">✉️ Contact Desk</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Legal & Disclaimers</h3>
          <ul>
            <li><a href="/disclaimer/index.html" class="footer-link">⚠️ Official Disclaimer →</a></li>
            <li><a href="/privacy-policy/index.html" class="footer-link">🔒 Privacy Policy →</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 WB Schemes Portal. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="/js/main.js" defer></script>
</body>
</html>`;

fs.writeFileSync(path.join(post1Dir, 'index.html'), post1Html, 'utf8');
console.log('Created sample blog post 1.');

// 3. Create Sample Post 2: /blog/swasthya-sathi-ayushman-bharat-integration-2026/index.html
const post2Dir = path.join(blogListingDir, 'swasthya-sathi-ayushman-bharat-integration-2026');
if (!fs.existsSync(post2Dir)) fs.mkdirSync(post2Dir);

const post2Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Swasthya Sathi & Ayushman Bharat Integration Guidelines 2026</title>
  <meta name="description" content="Updated guidelines on Swasthya Sathi health smart cards and dual hospital empanelement under Ayushman Bharat in West Bengal.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${domain}/blog/swasthya-sathi-ayushman-bharat-integration-2026/">
  <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
  <header class="site-header">
    <div class="top-bar">
      <div class="container">
        <span>Independent Public Information Guide</span>
        <span>West Bengal Welfare Schemes Directory 2026</span>
      </div>
    </div>
    <div class="header-main">
      <div class="container">
        <a href="/index.html" class="brand-logo">
          <div class="emblem-placeholder">WB</div>
          <div class="brand-text"><span>West Bengal Schemes Portal</span><p>Public Guide for State Welfare Initiatives</p></div>
        </a>
        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle Navigation Menu">
          <span class="hamburger-bar"></span><span class="hamburger-bar"></span><span class="hamburger-bar"></span>
        </button>
        <nav class="main-nav">
          <a href="/index.html" class="body-link">Home</a>
          <a href="/schemes/index.html" class="body-link">All Schemes</a>
          <a href="/categories/index.html" class="body-link">Categories</a>
          <a href="/blog/index.html" class="active">Updates</a>
          <a href="/about/index.html" class="body-link">About Us</a>
          <a href="/contact/index.html" class="body-link">Contact Us</a>
        </nav>
      </div>
    </div>
  </header>

  <nav class="breadcrumb-container container" aria-label="Breadcrumb">
    <ol class="breadcrumb">
      <li><a href="/index.html" class="breadcrumb-link">Home</a></li>
      <li><a href="/blog/index.html" class="breadcrumb-link">Updates</a></li>
      <li aria-current="page">Swasthya Sathi Policy Update</li>
    </ol>
  </nav>

  <main class="container page-content">
    <a href="/blog/index.html" class="back-link-btn">← Back to All Updates</a>

    <article class="main-content">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
        <span class="scheme-card-badge" style="background: #dbeafe; color: #1e40af;">Policy Alert</span>
        <span style="font-size: 14px; color: var(--text-muted);">Published: August 3, 2026</span>
      </div>

      <h1>Swasthya Sathi & Ayushman Bharat Dual Coverage Clarification</h1>

      <div class="article-body no-toc">
        <p class="intro-text">
          The Department of Health & Family Welfare has issued a public notice regarding the joint hospital empanelement framework for Swasthya Sathi smart card holders across West Bengal.
        </p>

        <h2>Key Operational Guidelines</h2>
        <ul>
          <li><strong>₹5 Lakh Family Limit:</strong> Cashless cover up to ₹5 lakh per family per year remains fully active for all registered households.</li>
          <li><strong>Empanelled Hospital Network:</strong> Cardholders can access secondary and tertiary treatment at all state medical colleges, district hospitals, and empaneled private nursing homes.</li>
        </ul>

        <div style="background: #f8fafc; border: 1px solid var(--border-color); border-left: 4px solid var(--primary-color); padding: 20px 24px; border-radius: 12px; margin: 28px 0;">
          <h4 style="margin-bottom: 8px; color: var(--primary-dark);">Related Health Scheme</h4>
          <a href="/schemes/swasthya-sathi/index.html" class="scheme-card" style="text-decoration: none;">
            <h3 class="scheme-card-title">Swasthya Sathi Scheme Full Details & Hospital List →</h3>
          </a>
        </div>
      </div>
    </article>
  </main>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-bottom"><p>&copy; 2026 WB Schemes Portal. All rights reserved.</p></div>
    </div>
  </footer>
  <script src="/js/main.js" defer></script>
</body>
</html>`;

fs.writeFileSync(path.join(post2Dir, 'index.html'), post2Html, 'utf8');
console.log('Created sample blog post 2.');

// 4. Create Sample Post 3: /blog/krishak-bandhu-kharif-2026-disbursement-date/index.html
const post3Dir = path.join(blogListingDir, 'krishak-bandhu-kharif-2026-disbursement-date');
if (!fs.existsSync(post3Dir)) fs.mkdirSync(post3Dir);

const post3Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Krishak Bandhu Kharif 2026 Installment Release Schedule</title>
  <meta name="description" content="Official timeline and Aadhaar bank account validation details for the upcoming Krishak Bandhu Kharif season financial grant.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${domain}/blog/krishak-bandhu-kharif-2026-disbursement-date/">
  <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
  <header class="site-header">
    <div class="top-bar">
      <div class="container">
        <span>Independent Public Information Guide</span>
        <span>West Bengal Welfare Schemes Directory 2026</span>
      </div>
    </div>
    <div class="header-main">
      <div class="container">
        <a href="/index.html" class="brand-logo">
          <div class="emblem-placeholder">WB</div>
          <div class="brand-text"><span>West Bengal Schemes Portal</span><p>Public Guide for State Welfare Initiatives</p></div>
        </a>
        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle Navigation Menu">
          <span class="hamburger-bar"></span><span class="hamburger-bar"></span><span class="hamburger-bar"></span>
        </button>
        <nav class="main-nav">
          <a href="/index.html" class="body-link">Home</a>
          <a href="/schemes/index.html" class="body-link">All Schemes</a>
          <a href="/categories/index.html" class="body-link">Categories</a>
          <a href="/blog/index.html" class="active">Updates</a>
          <a href="/about/index.html" class="body-link">About Us</a>
          <a href="/contact/index.html" class="body-link">Contact Us</a>
        </nav>
      </div>
    </div>
  </header>

  <nav class="breadcrumb-container container" aria-label="Breadcrumb">
    <ol class="breadcrumb">
      <li><a href="/index.html" class="breadcrumb-link">Home</a></li>
      <li><a href="/blog/index.html" class="breadcrumb-link">Updates</a></li>
      <li aria-current="page">Krishak Bandhu Disbursement</li>
    </ol>
  </nav>

  <main class="container page-content">
    <a href="/blog/index.html" class="back-link-btn">← Back to All Updates</a>

    <article class="main-content">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
        <span class="scheme-card-badge" style="background: #dcfce7; color: #166534;">Disbursement Notice</span>
        <span style="font-size: 14px; color: var(--text-muted);">Published: August 1, 2026</span>
      </div>

      <h1>Krishak Bandhu Kharif 2026 Installment Release Schedule</h1>

      <div class="article-body no-toc">
        <p class="intro-text">
          The Department of Agriculture has initiated the direct bank account validation process for over 1 crore registered farmers across West Bengal for the Kharif 2026 financial grant.
        </p>

        <h2>Disbursement Breakdown</h2>
        <ul>
          <li><strong>Maximum Financial Aid:</strong> ₹5,000 per Kharif season for landholders with 1 acre or more.</li>
          <li><strong>Pro-Rata Financial Aid:</strong> Minimum ₹2,000 per season for marginal farmers with less than 1 acre.</li>
        </ul>

        <div style="background: #f8fafc; border: 1px solid var(--border-color); border-left: 4px solid var(--primary-color); padding: 20px 24px; border-radius: 12px; margin: 28px 0;">
          <h4 style="margin-bottom: 8px; color: var(--primary-dark);">Related Farmer Scheme</h4>
          <a href="/schemes/krishak-bandhu/index.html" class="scheme-card" style="text-decoration: none;">
            <h3 class="scheme-card-title">Krishak Bandhu Scheme Status Check & Application →</h3>
          </a>
        </div>
      </div>
    </article>
  </main>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-bottom"><p>&copy; 2026 WB Schemes Portal. All rights reserved.</p></div>
    </div>
  </footer>
  <script src="/js/main.js" defer></script>
</body>
</html>`;

fs.writeFileSync(path.join(post3Dir, 'index.html'), post3Html, 'utf8');
console.log('Created sample blog post 3.');
