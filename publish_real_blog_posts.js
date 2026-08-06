const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const domain = 'https://wb-schemes-portal-three.vercel.app';
const blogDir = path.join(rootDir, 'blog');

if (!fs.existsSync(blogDir)) fs.mkdirSync(blogDir);

// Standard Header & Footer Markup
const standardHeader = (activePage) => `<header class="site-header">
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
          <a href="/blog/index.html" class="${activePage === 'updates' ? 'active' : 'body-link'}">Updates</a>
          <a href="/about/index.html" class="body-link">About Us</a>
          <a href="/contact/index.html" class="body-link">Contact Us</a>
        </nav>
      </div>
    </div>
  </header>`;

const standardFooter = `  <footer class="site-footer">
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
  </footer>`;

// -------------------------------------------------------------
// POST 1: /blog/lakshmir-bhandar-becomes-annapurna-bhandar/
// -------------------------------------------------------------
const post1Dir = path.join(blogDir, 'lakshmir-bhandar-becomes-annapurna-bhandar');
if (!fs.existsSync(post1Dir)) fs.mkdirSync(post1Dir);

const post1Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lakshmir Bhandar Renamed Annapurna Bhandar — What Changed</title>
  <meta name="description" content="Lakshmir Bhandar has been replaced by Annapurna Bhandar from June 2026, with a higher monthly amount. Here's what existing beneficiaries need to know.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${domain}/blog/lakshmir-bhandar-becomes-annapurna-bhandar/">
  
  <meta property="og:title" content="Lakshmir Bhandar Renamed Annapurna Bhandar — What Changed">
  <meta property="og:description" content="Lakshmir Bhandar has been replaced by Annapurna Bhandar from June 2026, with a higher monthly amount. Here's what existing beneficiaries need to know.">
  <meta property="og:type" content="article">
  <meta property="og:url" content="${domain}/blog/lakshmir-bhandar-becomes-annapurna-bhandar/">
  
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body>
${standardHeader('updates')}

  <nav class="breadcrumb-container container" aria-label="Breadcrumb">
    <ol class="breadcrumb">
      <li><a href="/index.html" class="breadcrumb-link">Home</a></li>
      <li><a href="/blog/index.html" class="breadcrumb-link">Updates</a></li>
      <li aria-current="page">Lakshmir Bhandar Renamed Annapurna Bhandar</li>
    </ol>
  </nav>

  <main class="container page-content">
    <a href="/blog/index.html" class="back-link-btn">← Back to All Updates</a>

    <article class="main-content">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px; flex-wrap: wrap;">
        <span class="scheme-card-badge" style="background: #ffedd5; color: #c2410c; border: 1px solid #fed7aa; font-size: 13px;">Amount Revision</span>
        <span style="font-size: 14px; color: var(--text-muted);">Published: 2 June 2026</span>
        <span style="font-size: 13px; background: #e0f2fe; color: #0369a1; padding: 3px 10px; border-radius: 12px; font-weight: 600;">Fact-Checked Update</span>
      </div>

      <h1>Lakshmir Bhandar Is Now Annapurna Bhandar — Here's What Changed</h1>

      <div class="article-body no-toc">
        <p class="intro-text">
          Following the 2026 West Bengal Assembly election and the formation of a new state government, Lakshmir Bhandar — the monthly cash assistance scheme for women — has been restructured and renamed Annapurna Bhandar, with rollout starting June 2026.
        </p>

        <h2>What's Different</h2>
        <ul>
          <li>Monthly amount increased to ₹3,000 for all eligible women, replacing the earlier split of ₹1,500 (General category) and ₹1,700 (SC/ST category)</li>
          <li>Existing Lakshmir Bhandar beneficiaries are being migrated automatically after a re-verification exercise — in most cases, no fresh application is needed</li>
          <li>A new application window was opened for women who weren't previously enrolled</li>
          <li>Some previously enrolled women were removed during the eligibility audit — common reasons include government employment, pension status, or broken Aadhaar-bank linkage</li>
        </ul>

        <p style="margin-top: 20px;">
          If your payment has stopped: the most likely causes are a failed re-verification check, an Aadhaar-bank linking issue, or a change in eligibility status — not necessarily the scheme ending. See our full <a href="/schemes/lakshmir-bhandar/status-check/index.html" class="body-link">Lakshmir Bhandar status check guide</a> to track your specific case.
        </p>

        <p style="margin-top: 14px;">
          We'll keep this page updated as more details on the Annapurna Bhandar rollout become official.
        </p>

        <!-- Related Scheme Callout Box -->
        <div style="background: #f8fafc; border: 1px solid var(--border-color); border-left: 4px solid var(--primary-color); padding: 20px 24px; border-radius: 12px; margin: 32px 0;">
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

        <!-- Related Updates Section -->
        <section style="margin-top: 36px; border-top: 1px solid var(--border-color); padding-top: 28px;">
          <h3 style="margin-bottom: 20px;">Related Updates</h3>
          <div class="scheme-grid">
            <a href="/blog/manabik-pension-amount-revision-2026/index.html" class="scheme-card">
              <div class="scheme-card-header">
                <span class="scheme-card-badge" style="background: #fef3c7; color: #92400e;">Amount Revision</span>
                <span style="font-size: 13px; color: var(--text-muted);">August 2026</span>
              </div>
              <h3 class="scheme-card-title">Is the Manabik Pension Amount Increasing to ₹1,500?</h3>
              <p class="scheme-card-summary">Reports suggest monthly grant may rise from ₹1,000 to ₹1,500 under Jai Bangla.</p>
              <div class="scheme-card-cta">Read Update →</div>
            </a>
            <a href="/blog/aikyashree-scholarship-2026-application-window/index.html" class="scheme-card">
              <div class="scheme-card-header">
                <span class="scheme-card-badge" style="background: #ffedd5; color: #c2410c;">Deadline Alert</span>
                <span style="font-size: 13px; color: var(--text-muted);">February 2026</span>
              </div>
              <h3 class="scheme-card-title">Aikyashree Scholarship 2026: Application Window Open</h3>
              <p class="scheme-card-summary">Fresh applications and renewals open for Pre-Matric, Post-Matric, and MCM students.</p>
              <div class="scheme-card-cta">Read Update →</div>
            </a>
          </div>
        </section>
      </div>
    </article>
  </main>

${standardFooter}
  <script src="/js/main.js" defer></script>
</body>
</html>`;

fs.writeFileSync(path.join(post1Dir, 'index.html'), post1Html, 'utf8');
console.log('Published Post 1: Lakshmir Bhandar Renamed Annapurna Bhandar.');

// -------------------------------------------------------------
// POST 2: /blog/manabik-pension-amount-revision-2026/
// -------------------------------------------------------------
const post2Dir = path.join(blogDir, 'manabik-pension-amount-revision-2026');
if (!fs.existsSync(post2Dir)) fs.mkdirSync(post2Dir);

const post2Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Manabik Pension Amount May Rise to ₹1,500/Month — What We Know</title>
  <meta name="description" content="Reports suggest the Manabik Pension Scheme monthly amount may increase from ₹1,000 to ₹1,500, effective August 2026. Here's the current status.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${domain}/blog/manabik-pension-amount-revision-2026/">
  
  <meta property="og:title" content="Manabik Pension Amount May Rise to ₹1,500/Month — What We Know">
  <meta property="og:description" content="Reports suggest the Manabik Pension Scheme monthly amount may increase from ₹1,000 to ₹1,500, effective August 2026. Here's the current status.">
  <meta property="og:type" content="article">
  <meta property="og:url" content="${domain}/blog/manabik-pension-amount-revision-2026/">
  
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body>
${standardHeader('updates')}

  <nav class="breadcrumb-container container" aria-label="Breadcrumb">
    <ol class="breadcrumb">
      <li><a href="/index.html" class="breadcrumb-link">Home</a></li>
      <li><a href="/blog/index.html" class="breadcrumb-link">Updates</a></li>
      <li aria-current="page">Manabik Pension Revision</li>
    </ol>
  </nav>

  <main class="container page-content">
    <a href="/blog/index.html" class="back-link-btn">← Back to All Updates</a>

    <article class="main-content">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px; flex-wrap: wrap;">
        <span class="scheme-card-badge" style="background: #fef3c7; color: #92400e; border: 1px solid #fde68a; font-size: 13px;">Amount Revision</span>
        <span style="font-size: 14px; color: var(--text-muted);">Published: August 2026</span>
        <span style="font-size: 13px; background: #fffbe6; color: #856404; padding: 3px 10px; border-radius: 12px; font-weight: 600; border: 1px solid #ffe58f;">Unconfirmed Proposal</span>
      </div>

      <h1>Is the Manabik Pension Amount Increasing to ₹1,500? Here's What We Know</h1>

      <div class="article-body no-toc">
        <p class="intro-text">
          Manabik Pension Scheme beneficiaries currently receive ₹1,000 per month. Some recent reports suggest this may be revised upward to ₹1,500 per month, effective from August 2026, as part of a broader review of pension amounts under the Jai Bangla Pension umbrella.
        </p>

        <div style="background: #fffbe6; border-left: 5px solid #d9b310; padding: 20px 24px; border-radius: 8px; margin: 24px 0; color: #533f03;">
          <strong style="font-size: 1.05rem; color: #856404;">⚠️ Important Verification Note:</strong>
          <p style="margin-top: 6px; line-height: 1.6;">
            This revision is <strong>not yet fully confirmed</strong>. We're flagging it here because it's a commonly searched question, but we recommend checking the official West Bengal Social Security portal or your local BDO/SDO office for confirmation before relying on the higher figure. We'll update this page and the main <a href="/schemes/manabik-pension-scheme/index.html" class="body-link">Manabik Pension Scheme page</a> the moment the revision is officially confirmed.
          </p>
        </div>

        <p style="margin-top: 16px;">
          In the meantime, if you're an existing beneficiary, your payments should continue at the current confirmed rate without any action needed on your part.
        </p>

        <p style="margin-top: 14px;">
          See the full <a href="/schemes/manabik-pension-scheme/index.html" class="body-link">Manabik Pension Scheme overview</a> for eligibility criteria and application details.
        </p>

        <!-- Related Scheme Callout Box -->
        <div style="background: #f8fafc; border: 1px solid var(--border-color); border-left: 4px solid var(--primary-color); padding: 20px 24px; border-radius: 12px; margin: 32px 0;">
          <h4 style="margin-bottom: 8px; color: var(--primary-dark);">Related Disability Scheme</h4>
          <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 12px;">View official eligibility rules, certificate requirements, and application procedures:</p>
          <a href="/schemes/manabik-pension-scheme/index.html" class="scheme-card" style="text-decoration: none;">
            <div class="scheme-card-header">
              <span class="scheme-card-badge">Main Scheme Overview</span>
              <span class="scheme-card-icon">♿</span>
            </div>
            <h3 class="scheme-card-title">Manabik Pension Scheme Full Overview →</h3>
          </a>
        </div>

        <!-- Related Updates Section -->
        <section style="margin-top: 36px; border-top: 1px solid var(--border-color); padding-top: 28px;">
          <h3 style="margin-bottom: 20px;">Related Updates</h3>
          <div class="scheme-grid">
            <a href="/blog/lakshmir-bhandar-becomes-annapurna-bhandar/index.html" class="scheme-card">
              <div class="scheme-card-header">
                <span class="scheme-card-badge" style="background: #ffedd5; color: #c2410c;">Amount Revision</span>
                <span style="font-size: 13px; color: var(--text-muted);">2 June 2026</span>
              </div>
              <h3 class="scheme-card-title">Lakshmir Bhandar Is Now Annapurna Bhandar</h3>
              <p class="scheme-card-summary">Monthly cash grant increased to ₹3,000 for eligible women beneficiaries.</p>
              <div class="scheme-card-cta">Read Update →</div>
            </a>
            <a href="/blog/aikyashree-scholarship-2026-application-window/index.html" class="scheme-card">
              <div class="scheme-card-header">
                <span class="scheme-card-badge" style="background: #ffedd5; color: #c2410c;">Deadline Alert</span>
                <span style="font-size: 13px; color: var(--text-muted);">February 2026</span>
              </div>
              <h3 class="scheme-card-title">Aikyashree Scholarship 2026: Application Window Open</h3>
              <p class="scheme-card-summary">Fresh applications and renewals open for Pre-Matric, Post-Matric, and MCM students.</p>
              <div class="scheme-card-cta">Read Update →</div>
            </a>
          </div>
        </section>
      </div>
    </article>
  </main>

${standardFooter}
  <script src="/js/main.js" defer></script>
</body>
</html>`;

fs.writeFileSync(path.join(post2Dir, 'index.html'), post2Html, 'utf8');
console.log('Published Post 2: Manabik Pension Amount Revision.');

// -------------------------------------------------------------
// POST 3: /blog/aikyashree-scholarship-2026-application-window/
// -------------------------------------------------------------
const post3Dir = path.join(blogDir, 'aikyashree-scholarship-2026-application-window');
if (!fs.existsSync(post3Dir)) fs.mkdirSync(post3Dir);

const post3Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aikyashree Scholarship 2026 — Application Window Now Open</title>
  <meta name="description" content="Aikyashree Scholarship applications for the 2026 academic cycle are open. Here's what students need to know about deadlines and renewal.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${domain}/blog/aikyashree-scholarship-2026-application-window/">
  
  <meta property="og:title" content="Aikyashree Scholarship 2026 — Application Window Now Open">
  <meta property="og:description" content="Aikyashree Scholarship applications for the 2026 academic cycle are open. Here's what students need to know about deadlines and renewal.">
  <meta property="og:type" content="article">
  <meta property="og:url" content="${domain}/blog/aikyashree-scholarship-2026-application-window/">
  
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body>
${standardHeader('updates')}

  <nav class="breadcrumb-container container" aria-label="Breadcrumb">
    <ol class="breadcrumb">
      <li><a href="/index.html" class="breadcrumb-link">Home</a></li>
      <li><a href="/blog/index.html" class="breadcrumb-link">Updates</a></li>
      <li aria-current="page">Aikyashree Scholarship 2026 Window</li>
    </ol>
  </nav>

  <main class="container page-content">
    <a href="/blog/index.html" class="back-link-btn">← Back to All Updates</a>

    <article class="main-content">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px; flex-wrap: wrap;">
        <span class="scheme-card-badge" style="background: #ffedd5; color: #c2410c; border: 1px solid #fed7aa; font-size: 13px;">Deadline Alert</span>
        <span style="font-size: 14px; color: var(--text-muted);">Published: February 2026</span>
        <span style="font-size: 13px; background: #e0f2fe; color: #0369a1; padding: 3px 10px; border-radius: 12px; font-weight: 600;">Official Portal Alert</span>
      </div>

      <h1>Aikyashree Scholarship 2026: Application Window Now Open</h1>

      <div class="article-body no-toc">
        <p class="intro-text">
          The Aikyashree Scholarship application cycle for the current academic year is open, covering Pre-Matric, Post-Matric, and Merit-cum-Means (MCM) categories for students from West Bengal's minority communities.
        </p>

        <h2>A Few Things to Keep in Mind This Cycle</h2>
        <ul>
          <li>Fresh applications, renewals, Post-Matric, MCM, and TSP each have their own separate deadline — don't assume one date covers everything</li>
          <li>Renewal applicants should double-check their bank account is still active and Aadhaar-linked, since this is the most common reason for delayed disbursement</li>
          <li>If you're unsure of your application status from a previous cycle, use the official portal's "Track Your Application" feature before submitting a fresh application, to avoid duplicate entries</li>
        </ul>

        <p style="margin-top: 20px;">
          Because deadlines vary by category and are announced by WBMDFC at the start of each cycle, we recommend checking the official portal directly for the exact current date rather than relying on a fixed date here.
        </p>

        <p style="margin-top: 14px;">
          For full eligibility criteria and the application process, see our <a href="/schemes/aikyashree-scholarship/index.html" class="body-link">Aikyashree Scholarship guide</a> and <a href="/schemes/aikyashree-scholarship/status-check/index.html" class="body-link">Status Check guide</a>.
        </p>

        <!-- Related Scheme Callout Box -->
        <div style="background: #f8fafc; border: 1px solid var(--border-color); border-left: 4px solid var(--primary-color); padding: 20px 24px; border-radius: 12px; margin: 32px 0;">
          <h4 style="margin-bottom: 8px; color: var(--primary-dark);">Related Minority Scholarship Scheme</h4>
          <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 12px;">Check eligibility criteria, income limits, and online application portal link:</p>
          <a href="/schemes/aikyashree-scholarship/index.html" class="scheme-card" style="text-decoration: none;">
            <div class="scheme-card-header">
              <span class="scheme-card-badge">Main Scheme Overview</span>
              <span class="scheme-card-icon">🕌</span>
            </div>
            <h3 class="scheme-card-title">Aikyashree Scholarship Scheme Overview & Guide →</h3>
          </a>
        </div>

        <!-- Related Updates Section -->
        <section style="margin-top: 36px; border-top: 1px solid var(--border-color); padding-top: 28px;">
          <h3 style="margin-bottom: 20px;">Related Updates</h3>
          <div class="scheme-grid">
            <a href="/blog/lakshmir-bhandar-becomes-annapurna-bhandar/index.html" class="scheme-card">
              <div class="scheme-card-header">
                <span class="scheme-card-badge" style="background: #ffedd5; color: #c2410c;">Amount Revision</span>
                <span style="font-size: 13px; color: var(--text-muted);">2 June 2026</span>
              </div>
              <h3 class="scheme-card-title">Lakshmir Bhandar Is Now Annapurna Bhandar</h3>
              <p class="scheme-card-summary">Monthly cash grant increased to ₹3,000 for eligible women beneficiaries.</p>
              <div class="scheme-card-cta">Read Update →</div>
            </a>
            <a href="/blog/manabik-pension-amount-revision-2026/index.html" class="scheme-card">
              <div class="scheme-card-header">
                <span class="scheme-card-badge" style="background: #fef3c7; color: #92400e;">Amount Revision</span>
                <span style="font-size: 13px; color: var(--text-muted);">August 2026</span>
              </div>
              <h3 class="scheme-card-title">Is the Manabik Pension Amount Increasing to ₹1,500?</h3>
              <p class="scheme-card-summary">Reports suggest monthly grant may rise from ₹1,000 to ₹1,500 under Jai Bangla.</p>
              <div class="scheme-card-cta">Read Update →</div>
            </a>
          </div>
        </section>
      </div>
    </article>
  </main>

${standardFooter}
  <script src="/js/main.js" defer></script>
</body>
</html>`;

fs.writeFileSync(path.join(post3Dir, 'index.html'), post3Html, 'utf8');
console.log('Published Post 3: Aikyashree Scholarship 2026 Window.');

// -------------------------------------------------------------
// 5. UPDATE BLOG LISTING PAGE (/blog/index.html)
// -------------------------------------------------------------
const updatedBlogListingHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Latest Scheme Updates & Announcements 2026 — West Bengal Schemes Portal</title>
  <meta name="description" content="Latest West Bengal government scheme news, deadline extensions, amount revisions, and policy updates. Track Lakshmir Bhandar, Manabik Pension, and Aikyashree announcements.">
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
${standardHeader('updates')}

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
      <!-- Post 2 (Newest date: August 2026) -->
      <a href="/blog/manabik-pension-amount-revision-2026/index.html" class="scheme-card">
        <div class="scheme-card-header">
          <span class="scheme-card-badge" style="background: #fef3c7; color: #92400e;">Amount Revision</span>
          <span style="font-size: 13px; color: var(--text-muted);">August 2026</span>
        </div>
        <h3 class="scheme-card-title">Is the Manabik Pension Amount Increasing to ₹1,500?</h3>
        <p class="scheme-card-summary">
          Reports suggest the Manabik Pension Scheme monthly amount may increase from ₹1,000 to ₹1,500 under Jai Bangla. Here's the current status.
        </p>
        <div class="scheme-card-cta">Read Update →</div>
      </a>

      <!-- Post 1 (Date: 2 June 2026) -->
      <a href="/blog/lakshmir-bhandar-becomes-annapurna-bhandar/index.html" class="scheme-card">
        <div class="scheme-card-header">
          <span class="scheme-card-badge" style="background: #ffedd5; color: #c2410c;">Amount Revision</span>
          <span style="font-size: 13px; color: var(--text-muted);">2 June 2026</span>
        </div>
        <h3 class="scheme-card-title">Lakshmir Bhandar Is Now Annapurna Bhandar — What Changed</h3>
        <p class="scheme-card-summary">
          Lakshmir Bhandar has been replaced by Annapurna Bhandar from June 2026, with a higher monthly amount of ₹3,000. Here's what beneficiaries need to know.
        </p>
        <div class="scheme-card-cta">Read Update →</div>
      </a>

      <!-- Post 3 (Date: February 2026) -->
      <a href="/blog/aikyashree-scholarship-2026-application-window/index.html" class="scheme-card">
        <div class="scheme-card-header">
          <span class="scheme-card-badge" style="background: #ffedd5; color: #c2410c;">Deadline Alert</span>
          <span style="font-size: 13px; color: var(--text-muted);">February 2026</span>
        </div>
        <h3 class="scheme-card-title">Aikyashree Scholarship 2026: Application Window Now Open</h3>
        <p class="scheme-card-summary">
          Aikyashree Scholarship applications for the current academic cycle are open across Pre-Matric, Post-Matric, and MCM categories.
        </p>
        <div class="scheme-card-cta">Read Update →</div>
      </a>
    </div>
  </main>

${standardFooter}
  <script src="/js/main.js" defer></script>
</body>
</html>`;

fs.writeFileSync(path.join(blogDir, 'index.html'), updatedBlogListingHtml, 'utf8');
console.log('Updated /blog/index.html with the 3 real posts.');

// -------------------------------------------------------------
// 6. UPDATE HOMEPAGE (index.html) LATEST UPDATES SECTION
// -------------------------------------------------------------
const indexFile = path.join(rootDir, 'index.html');
if (fs.existsSync(indexFile)) {
  let indexContent = fs.readFileSync(indexFile, 'utf8');

  const newHomepageUpdatesSection = `      <!-- Latest Scheme Updates & News Section -->
      <section class="content-block" style="margin-top: 40px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
          <div>
            <h2>Latest Scheme Updates & Announcements</h2>
            <p style="color: #64748b; margin: 0;">Official deadline changes, amount revisions, and policy updates tracked in real-time.</p>
          </div>
          <a href="/blog/index.html" class="back-link-btn" style="margin: 0;">View All Updates →</a>
        </div>

        <div class="scheme-grid">
          <a href="/blog/manabik-pension-amount-revision-2026/index.html" class="scheme-card">
            <div class="scheme-card-header">
              <span class="scheme-card-badge" style="background: #fef3c7; color: #92400e;">Amount Revision</span>
              <span style="font-size: 13px; color: var(--text-muted);">August 2026</span>
            </div>
            <h3 class="scheme-card-title">Is the Manabik Pension Amount Increasing to ₹1,500?</h3>
            <p class="scheme-card-summary">Reports suggest monthly grant may rise from ₹1,000 to ₹1,500 under Jai Bangla.</p>
            <div class="scheme-card-cta">Read Update →</div>
          </a>

          <a href="/blog/lakshmir-bhandar-becomes-annapurna-bhandar/index.html" class="scheme-card">
            <div class="scheme-card-header">
              <span class="scheme-card-badge" style="background: #ffedd5; color: #c2410c;">Amount Revision</span>
              <span style="font-size: 13px; color: var(--text-muted);">2 June 2026</span>
            </div>
            <h3 class="scheme-card-title">Lakshmir Bhandar Is Now Annapurna Bhandar — What Changed</h3>
            <p class="scheme-card-summary">Monthly cash grant increased to ₹3,000 for eligible women beneficiaries.</p>
            <div class="scheme-card-cta">Read Update →</div>
          </a>

          <a href="/blog/aikyashree-scholarship-2026-application-window/index.html" class="scheme-card">
            <div class="scheme-card-header">
              <span class="scheme-card-badge" style="background: #ffedd5; color: #c2410c;">Deadline Alert</span>
              <span style="font-size: 13px; color: var(--text-muted);">February 2026</span>
            </div>
            <h3 class="scheme-card-title">Aikyashree Scholarship 2026: Application Window Open</h3>
            <p class="scheme-card-summary">Fresh applications and renewals open for Pre-Matric, Post-Matric, and MCM students.</p>
            <div class="scheme-card-cta">Read Update →</div>
          </a>
        </div>
      </section>`;

  indexContent = indexContent.replace(/<!-- Latest Scheme Updates & News Section -->[\s\S]*?<\/section>/gi, newHomepageUpdatesSection);
  fs.writeFileSync(indexFile, indexContent, 'utf8');
  console.log('Updated Latest Scheme Updates section on Homepage (index.html).');
}
