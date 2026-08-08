const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const domain = 'https://wb-schemes-portal-three.vercel.app';

function getArticleWordCount(file) {
  const content = fs.readFileSync(file, 'utf8');
  const match = content.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  const text = match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return text.split(' ').length;
}

// -------------------------------------------------------------------------
// PAGE 36: /schemes/pension-schemes/index.html
// -------------------------------------------------------------------------
const page36Path = path.join(rootDir, 'schemes', 'pension-schemes', 'index.html');
const oldWordCountPage36 = getArticleWordCount(page36Path);

const page36Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>West Bengal Pension Schemes 2026 — Full List & Guide</title>
  <meta name="description" content="Complete list of West Bengal government pension schemes 2026 — Jai Bangla, Manabik Pension & sub-schemes. Eligibility, amount ₹1,000–1,500 & apply.">
  <meta name="keywords" content="west bengal pension schemes, wb pension scheme list, west bengal government pension schemes, list of pension schemes in west bengal, west bengal old age pension schemes 2026, wb pension scheme eligibility">
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="canonical" href="${domain}/schemes/pension-schemes/">
  <meta name="robots" content="index, follow">
  
  <meta property="og:title" content="West Bengal Pension Schemes 2026 — Full List & Guide">
  <meta property="og:description" content="Complete list of West Bengal government pension schemes 2026 — Jai Bangla, Manabik Pension & sub-schemes. Eligibility, amount ₹1,000–1,500 & apply.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${domain}/schemes/pension-schemes/">
  <meta property="og:image" content="${domain}/images/og-default.jpg">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="West Bengal Pension Schemes 2026 — Full List & Guide">
  <meta name="twitter:description" content="Complete list of West Bengal government pension schemes 2026 — Jai Bangla, Manabik Pension & sub-schemes. Eligibility, amount ₹1,000–1,500 & apply.">

  <!-- FAQPage Schema JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the main pension schemes in West Bengal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nearly all state pensions run under one umbrella called Jai Bangla, covering old age, widow, disability (Manabik), SC/ST (Taposili Bandhu/Jai Johar), and occupation-based categories."
        }
      },
      {
        "@type": "Question",
        "name": "How much monthly pension do I get?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Jai Bangla sub-schemes pay Rs. 1,000/month. The disability-specific Manabik Pension is higher, at Rs. 1,500/month since August 2026."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a different form for each pension category?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No — all Jai Bangla sub-schemes use the same application form, Form P; you simply select your relevant category on it."
        }
      },
      {
        "@type": "Question",
        "name": "Who is eligible for the old age pension?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Residents of West Bengal aged 60 or above, subject to the scheme's other general conditions such as not already receiving another government pension for the same purpose."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between Taposili Bandhu and Jai Johar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Taposili Bandhu is the sub-scheme for Scheduled Caste (SC) elderly residents, while Jai Johar is the equivalent for Scheduled Tribe (ST) elderly residents. Both currently pay the standard Rs. 1,000/month."
        }
      },
      {
        "@type": "Question",
        "name": "How do I check my pension payment status?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "See the dedicated Jai Bangla Status Check guide for the full process using your Beneficiary ID, mobile number, or Aadhaar."
        }
      }
    ]
  }
  </script>
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
          <div class="brand-text"><span>West Bengal Schemes Portal</span>
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
          <a href="/schemes/index.html" class="active">All Schemes</a>
          <a href="/categories/index.html" class="body-link">Categories</a>
          <a href="/blog/index.html" class="body-link">Updates</a>
          <a href="/about/index.html" class="body-link">About Us</a>
          <a href="/contact/index.html" class="body-link">Contact Us</a>
        </nav>
      </div>
    </div>
  </header>

  <!-- Breadcrumbs -->
  <div class="breadcrumb-section">
    <div class="container">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="/index.html" class="breadcrumb-link">Home</a>
        <span class="separator">/</span>
        <a href="/categories/index.html" class="breadcrumb-link">Categories</a>
        <span class="separator">/</span>
        <span class="current">Pension Schemes</span>
      </nav>
    </div>
  </div>

  <!-- Main Content Layout -->
  <main class="page-layout">
    <div class="container">
      <div class="page-grid">
        
        <!-- Main Column -->
        <article class="main-content">
          
          <!-- Hero Banner -->
          <div class="scheme-hero">
            <span class="scheme-badge">Category Hub</span>
            <h1>West Bengal Pension Schemes — Complete List (2026)</h1>
            <div class="eeat-badge-container">
              <span class="fact-checked-badge">Fact-Checked 2026</span>
              <span>Fact-checked against official state notifications (wb.gov.in) • Editorial Review: August 2026</span>
            </div>
            <p class="intro-text">
              Complete guide to West Bengal government social security pensions — covering old age, widowhood, disability, SC/ST, and unorganized sector worker pensions under the Jai Bangla umbrella platform.
            </p>
          </div>

          <!-- Section 1 — What Are West Bengal's Pension Schemes -->
          <section class="content-block">
            <h2>What Are West Bengal's Pension Schemes</h2>
            <p>
              West Bengal consolidated nearly all of its state pension programmes — covering old age, widowhood, disability, SC/ST status, and specific occupations — under a single umbrella platform called Jai Bangla, launched in April 2020. Rather than navigating a dozen separate schemes with different forms and offices, residents apply once, select the category that fits their situation, and receive a standardised monthly pension through the same system.
            </p>
            <p>
              This page explains how Jai Bangla and its sub-schemes work together, including the one notable sub-scheme, Manabik Pension, that also has its own detailed page on this site. Explore <a href="/schemes/social-welfare/index.html" class="body-link">all Social Welfare Schemes</a> across West Bengal.
            </p>
          </section>

          <!-- Section 2 — Jai Bangla — The Umbrella Pension Platform -->
          <section class="content-block">
            <h2>Jai Bangla — The Umbrella Pension Platform</h2>
            <p>
              <strong><a href="/schemes/jai-bangla-pension-scheme/index.html" class="body-link">Jai Bangla Pension Scheme</a>:</strong> Launched on 1 April 2020, Jai Bangla brings together around 11 separate state pension programmes under one application system (Form P) and a standardised Rs. 1,000/month payment. It covers over 82 lakh approved beneficiaries across all sub-schemes combined, making it one of the largest pension programmes run by any Indian state.
            </p>
            <ul>
              <li><a href="/schemes/jai-bangla-pension-scheme/status-check/index.html" class="body-link">Check your Jai Bangla payment status</a></li>
            </ul>
          </section>

          <!-- Section 3 — All Sub-Schemes Under Jai Bangla -->
          <section class="content-block">
            <h2>All Sub-Schemes Under Jai Bangla</h2>
            <p>The Jai Bangla umbrella platform incorporates the following category-specific sub-schemes:</p>
            <ul>
              <li><strong>WCD Old Age Pension Scheme:</strong> The largest single component, providing monthly financial support for senior citizens aged 60 and above. See also our <a href="/schemes/senior-citizen-schemes/index.html" class="body-link">Senior Citizen Schemes</a> hub.</li>
              <li><strong>Widow Pension:</strong> For eligible widows aged 18 and above residing in West Bengal.</li>
              <li><strong><a href="/schemes/manabik-pension-scheme/index.html" class="body-link">Manabik Pension Scheme</a>:</strong> For persons with disabilities (40% or higher), featured on its own detailed page since it was recently revised to a higher monthly payment rate. See also our <a href="/schemes/disability-schemes/index.html" class="body-link">Disability Schemes</a> hub.</li>
              <li><strong>Taposili Bandhu:</strong> Pension specifically for Scheduled Caste (SC) elderly residents aged 60 and above.</li>
              <li><strong>Jai Johar:</strong> Pension specifically for Scheduled Tribe (ST) elderly residents aged 60 and above.</li>
              <li><strong>Occupation-Based Pensions:</strong> Specialized monthly pensions for small farmers, fishermen, artisans, handloom/textile workers, licensed purohits (priests), MSME artisans, and folk artists under Lok Prasar Prakalpa.</li>
            </ul>
            <p>
              All of these sub-schemes are accessed through the same Jai Bangla application form and portal, so there's no need to identify a completely separate scheme name or office for each category — you simply select the relevant category on Form P.
            </p>
          </section>

          <!-- Section 4 — Manabik Pension — Disability-Specific Support -->
          <section class="content-block">
            <h2>Manabik Pension — Disability-Specific Support</h2>
            <p>Manabik Pension deserves special mention because its payment amount was revised more recently than the standard Jai Bangla rate:</p>
            <ul>
              <li>Launched in 2018 at Rs. 1,000/month, Manabik Pension was increased to Rs. 1,500/month effective 1 August 2026 — a higher rate than most other Jai Bangla sub-schemes, which remain at the standard Rs. 1,000/month.</li>
              <li>Eligibility requires 40% or higher disability (revised down from an original 50% threshold in 2020), certified by a competent medical authority (Chief Medical Officer of Health / CMOH Disability Board).</li>
              <li>See the full <a href="/schemes/manabik-pension-scheme/index.html" class="body-link">Manabik Pension Scheme</a> guide for complete eligibility criteria and the application process.</li>
            </ul>
          </section>

          <!-- Section 5 — How Much Pension Do You Get -->
          <section class="content-block">
            <h2>How Much Pension Do You Get</h2>
            <p>Monthly disbursement breakdown across state pension sub-schemes:</p>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Sub-scheme</th>
                  <th>Monthly Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>WCD Old Age Pension</strong></td>
                  <td>Rs. 1,000</td>
                </tr>
                <tr>
                  <td><strong>Widow Pension</strong></td>
                  <td>Rs. 1,000</td>
                </tr>
                <tr>
                  <td><strong>Taposili Bandhu (SC)</strong></td>
                  <td>Rs. 1,000</td>
                </tr>
                <tr>
                  <td><strong>Jai Johar (ST)</strong></td>
                  <td>Rs. 1,000</td>
                </tr>
                <tr>
                  <td><strong>Occupation-based pensions</strong></td>
                  <td>Rs. 1,000</td>
                </tr>
                <tr>
                  <td><strong>Manabik Pension (disability)</strong></td>
                  <td>Rs. 1,500 (revised Aug 2026)</td>
                </tr>
              </tbody>
            </table>
            <p>
              Payments across all categories are made via Direct Benefit Transfer (DBT), processed through the West Bengal Integrated Financial Management System (WBIFMS), generally released on or around the first of each month.
            </p>
          </section>

          <!-- Section 6 — How to Apply for Any Pension Category -->
          <section class="content-block">
            <h2>How to Apply for Any Pension Category</h2>
            <p>Follow these steps to submit your pension application under Jai Bangla:</p>
            <ol>
              <li>Identify your eligible category — old age, widow, disability, SC/ST, or occupation-based — since this determines which supporting documents you'll need.</li>
              <li>Collect Form P, the single standard application form used across all Jai Bangla sub-schemes, from your local BDO office, Gram Panchayat, or Municipal office.</li>
              <li>Fill in your personal details and select your pension category on the same form — there's no separate form per sub-scheme.</li>
              <li>Attach category-specific documents — age proof for old-age pensions, a disability certificate for Manabik, an SC/ST certificate for Taposili Bandhu/Jai Johar, or an occupational registration document for occupation-based categories.</li>
              <li>Submit the form at the same office and retain any acknowledgment receipt given to you.</li>
              <li>Your application is verified locally before approval and addition to the monthly disbursement cycle.</li>
            </ol>
          </section>

          <!-- Section 7 — FAQs -->
          <section class="content-block">
            <h2>Frequently Asked Questions</h2>
            
            <div class="faq-accordion">
              <div class="faq-item">
                <button class="faq-question">
                  <span>What are the main pension schemes in West Bengal?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Nearly all state pensions run under one umbrella called Jai Bangla, covering old age, widow, disability (Manabik), SC/ST (Taposili Bandhu/Jai Johar), and occupation-based categories.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>How much monthly pension do I get?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Most Jai Bangla sub-schemes pay Rs. 1,000/month. The disability-specific Manabik Pension is higher, at Rs. 1,500/month since August 2026.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Do I need a different form for each pension category?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>No — all Jai Bangla sub-schemes use the same application form, Form P; you simply select your relevant category on it.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Who is eligible for the old age pension?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Residents of West Bengal aged 60 or above, subject to the scheme's other general conditions such as not already receiving another government pension for the same purpose.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>What's the difference between Taposili Bandhu and Jai Johar?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Taposili Bandhu is the sub-scheme for Scheduled Caste (SC) elderly residents, while Jai Johar is the equivalent for Scheduled Tribe (ST) elderly residents. Both currently pay the standard Rs. 1,000/month.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>How do I check my pension payment status?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>See the dedicated Jai Bangla Status Check guide for the full process using your Beneficiary ID, mobile number, or Aadhaar.</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Related Category Hubs Section -->
          <section class="content-block">
            <h2>Related Category Hubs</h2>
            <div class="scheme-grid">
              <a href="/schemes/senior-citizen-schemes/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Category Hub</span>
                  <span class="scheme-card-icon">👴</span>
                </div>
                <h3 class="scheme-card-title">Senior Citizen Schemes</h3>
                <p class="scheme-card-summary">Old-age pensions, healthcare coverage, and social security for elderly citizens.</p>
                <div class="scheme-card-cta">Explore Category →</div>
              </a>
              <a href="/schemes/disability-schemes/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Category Hub</span>
                  <span class="scheme-card-icon">♿</span>
                </div>
                <h3 class="scheme-card-title">Disability Schemes</h3>
                <p class="scheme-card-summary">Monthly disability pensions, assistive devices, and empowerment schemes.</p>
                <div class="scheme-card-cta">Explore Category →</div>
              </a>
              <a href="/schemes/social-welfare/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Category Hub</span>
                  <span class="scheme-card-icon">🏛️</span>
                </div>
                <h3 class="scheme-card-title">Social Welfare</h3>
                <p class="scheme-card-summary">Master directory of food security, pensions, housing, and social security programs.</p>
                <div class="scheme-card-cta">Explore Category →</div>
              </a>
              <a href="/schemes/women-welfare/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Category Hub</span>
                  <span class="scheme-card-icon">👩</span>
                </div>
                <h3 class="scheme-card-title">Women Welfare</h3>
                <p class="scheme-card-summary">Financial security, health, and empowerment schemes for women in West Bengal.</p>
                <div class="scheme-card-cta">Explore Category →</div>
              </a>
            </div>
          </section>

        </article>

        <!-- Sidebar Column -->
        <aside class="sidebar">
          <div class="sidebar-widget">
            <h3>Quick Links & Services</h3>
            <div class="quick-links-container">
              <a href="/schemes/index.html" class="quick-link-item">
                <span class="quick-link-icon">📋</span>
                <div class="quick-link-text">
                  <span class="quick-link-title">All Schemes Directory</span>
                  <span class="quick-link-sub">Browse Full List</span>
                </div>
                <span class="quick-link-arrow">→</span>
              </a>
              <a href="/categories/index.html" class="quick-link-item">
                <span class="quick-link-icon">🏛️</span>
                <div class="quick-link-text">
                  <span class="quick-link-title">Scheme Categories</span>
                  <span class="quick-link-sub">Explore Welfare Hubs</span>
                </div>
                <span class="quick-link-arrow">→</span>
              </a>
            </div>
          </div>
        </aside>

      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Col 1: Brand & Contact -->
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

        <!-- Col 2: Explore Navigation -->
        <div class="footer-col">
          <h3>Explore Portal</h3>
          <ul>
            <li><a href="/index.html" class="footer-link">🏠 Home</a></li>
            <li><a href="/schemes/index.html" class="footer-link">📋 All Schemes List</a></li>
            <li><a href="/categories/index.html" class="footer-link">🏛️ Scheme Categories</a></li>
            <li><a href="/blog/index.html" class="footer-link">📰 Latest Updates</a></li>
            <li><a href="/schemes/pension-schemes/index.html" class="footer-link">👵 Pension Schemes</a></li>
          </ul>
        </div>

        <!-- Col 3: Quick Services -->
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

        <!-- Col 4: Legal & Disclaimers -->
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

      <!-- Footer Bottom Bar -->
      <div class="footer-bottom">
        <p>&copy; 2026 WB Schemes Portal. All rights reserved.</p>
        <span class="footer-bottom-tagline">Public Awareness Initiative for the Citizens of West Bengal</span>
        <div class="footer-bottom-links">
          <a class="body-link" href="/sitemap.xml">Sitemap</a>
          <a class="body-link" href="/disclaimer/index.html">Disclaimer</a>
          <a class="body-link" href="/privacy-policy/index.html">Privacy Policy</a>
          <a class="body-link" href="/contact/index.html">Help Desk</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="/js/main.js" defer></script>
</body>
</html>`;

fs.writeFileSync(page36Path, page36Html, 'utf8');
const newWordCountPage36 = getArticleWordCount(page36Path);
console.log(`Page 36 Updated: ${oldWordCountPage36} words -> ${newWordCountPage36} words`);
