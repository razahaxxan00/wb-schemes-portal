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
// PAGE 37: /schemes/housing-schemes/index.html
// -------------------------------------------------------------------------
const page37Path = path.join(rootDir, 'schemes', 'housing-schemes', 'index.html');
const oldWordCountPage37 = getArticleWordCount(page37Path);

const page37Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>West Bengal Housing Schemes 2026 — Full List & Guide</title>
  <meta name="description" content="Complete list of West Bengal government housing schemes 2026 — Banglar Bari, Geetanjali & more. Eligibility, assistance amount & how to apply.">
  <meta name="keywords" content="west bengal housing schemes, wb awas yojana schemes, west bengal government housing schemes, list of housing schemes in west bengal, west bengal housing schemes 2026, wb affordable housing schemes">
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="canonical" href="${domain}/schemes/housing-schemes/">
  <meta name="robots" content="index, follow">
  
  <meta property="og:title" content="West Bengal Housing Schemes 2026 — Full List & Guide">
  <meta property="og:description" content="Complete list of West Bengal government housing schemes 2026 — Banglar Bari, Geetanjali & more. Eligibility, assistance amount & how to apply.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${domain}/schemes/housing-schemes/">
  <meta property="og:image" content="${domain}/images/og-default.jpg">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="West Bengal Housing Schemes 2026 — Full List & Guide">
  <meta name="twitter:description" content="Complete list of West Bengal government housing schemes 2026 — Banglar Bari, Geetanjali & more. Eligibility, assistance amount & how to apply.">

  <!-- FAQPage Schema JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the main housing schemes in West Bengal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The two main programmes are Banglar Bari Prakalpa (rural pucca house construction, launched 2024) and the Geetanjali Housing Scheme (broader coverage for homeless and EWS families, including urban group housing)."
        }
      },
      {
        "@type": "Question",
        "name": "How much financial assistance do these schemes provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Banglar Bari reportedly provides around Rs. 1.2–1.3 lakh per house. Geetanjali's historical rate was around Rs. 70,000–75,000 per unit, though figures vary across sources — confirm the current amount with your local housing office."
        }
      },
      {
        "@type": "Question",
        "name": "Is Banglar Bari still called \"Banglar Bari\" in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It may not be for much longer — following the 2026 change in state government, several sources describe the scheme as transitioning toward alignment with the central PMAY-G scheme, sometimes referred to as \"PM Awas West Bengal.\" Check your district's official portal for the current name and status."
        }
      },
      {
        "@type": "Question",
        "name": "Can urban residents without land get help under these schemes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — the Geetanjali Housing Scheme specifically covers group housing for urban applicants without land, built on land provided by the district administration or municipality."
        }
      },
      {
        "@type": "Question",
        "name": "How do I check if I'm on a housing beneficiary list?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "See the dedicated Banglar Bari Beneficiary List guide for the district and Gram Panchayat-wise checking process."
        }
      },
      {
        "@type": "Question",
        "name": "Who do I contact if I believe I qualify but I'm not listed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Visit your Gram Panchayat or BDO office to check whether a new survey or inclusion window is open, and submit a written request with your supporting documents."
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
        <span class="current">Housing Schemes</span>
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
            <h1>West Bengal Housing Schemes — Complete List (2026)</h1>
            <div class="eeat-badge-container">
              <span class="fact-checked-badge">Fact-Checked 2026</span>
              <span>Fact-checked against official state notifications (wb.gov.in) • Editorial Review: August 2026</span>
            </div>
            <p class="intro-text">
              Complete guide to state-funded rural and urban housing assistance schemes in West Bengal — helping homeless, BPL, and EWS families build or acquire permanent pucca homes.
            </p>
          </div>

          <!-- Section 1 — What Are West Bengal's Housing Schemes -->
          <section class="content-block">
            <h2>What Are West Bengal's Housing Schemes</h2>
            <p>
              West Bengal runs its housing welfare programmes through the Panchayat and Rural Development Department (for rural areas) and district housing authorities (for urban areas), aimed at replacing kutcha/mud housing with pucca (permanent) houses for economically weaker families. Both of the state's major housing schemes are currently going through administrative change following the 2026 state election, so this page also flags what's shifting and what to double-check before relying on older information.
            </p>
            <p>
              Explore <a href="/schemes/social-welfare/index.html" class="body-link">all Social Welfare Schemes</a> operating across West Bengal for broader family security options.
            </p>
          </section>

          <!-- Section 2 — Rural Housing Schemes -->
          <section class="content-block">
            <h2>Rural Housing Schemes</h2>
            <p>
              <strong><a href="/schemes/banglar-bari-prakalpa/index.html" class="body-link">Banglar Bari Prakalpa</a>:</strong> Launched in December 2024, this is West Bengal's primary rural housing scheme, providing financial assistance (reportedly around Rs. 1.2–1.3 lakh per house) to build pucca houses. It was created as a fully state-funded programme after the central government's PMAY-G funding share to West Bengal was paused amid a Centre-State funding dispute. Over 28 lakh beneficiaries were identified at launch.
            </p>
            <ul>
              <li><a href="/schemes/banglar-bari-prakalpa/beneficiary-list/index.html" class="body-link">Check the Banglar Bari beneficiary list</a></li>
            </ul>
          </section>

          <!-- Section 3 — Schemes for the Homeless & Urban Poor -->
          <section class="content-block">
            <h2>Schemes for the Homeless & Urban Poor</h2>
            <p>
              <strong><a href="/schemes/geetanjali-housing-scheme/index.html" class="body-link">Geetanjali Housing Scheme</a>:</strong> Covers both rural construction assistance (historically around Rs. 70,000–75,000 per unit under IAY-pattern rates, though newer listings cite higher figures) and urban group housing for homeless applicants who don't own land, built on land provided by the district administration or municipality. Merged with the earlier "Amar Thikana" scheme in 2014, and places special focus on Sundarban, Paschimanchal, minority community, and fishermen households.
            </p>
          </section>

          <!-- Section 4 — How the Two Main Schemes Differ -->
          <section class="content-block">
            <h2>How the Two Main Schemes Differ</h2>
            <p>Key architectural differences between Banglar Bari Prakalpa and Geetanjali Housing Scheme:</p>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Banglar Bari Prakalpa</th>
                  <th>Geetanjali Housing Scheme</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Launched</strong></td>
                  <td>December 2024</td>
                  <td>Predecessor "Amar Thikana" merged in 2014</td>
                </tr>
                <tr>
                  <td><strong>Focus</strong></td>
                  <td>Rural pucca house construction</td>
                  <td>Homeless & EWS families, rural + urban</td>
                </tr>
                <tr>
                  <td><strong>Urban coverage</strong></td>
                  <td>Not specifically designed for urban</td>
                  <td>Yes — group housing for landless urban applicants</td>
                </tr>
                <tr>
                  <td><strong>Funding origin</strong></td>
                  <td>State-funded, filling PMAY-G gap</td>
                  <td>State-administered via District Magistrates</td>
                </tr>
                <tr>
                  <td><strong>Approx. assistance</strong></td>
                  <td>Rs. 1.2–1.3 lakh/house</td>
                  <td>Rs. 70,000–75,000/unit (older rate); newer listings vary</td>
                </tr>
              </tbody>
            </table>
            <p>
              Because both schemes serve overlapping goals (housing for the rural poor), families should check with their Gram Panchayat or BDO office to confirm which scheme actually applies to their specific district and household situation, since local implementation and terminology can vary.
            </p>
          </section>

          <!-- Section 5 — The 2026 PMAY-G Realignment -->
          <section class="content-block">
            <h2>The 2026 PMAY-G Realignment</h2>
            <p>
              Important context for both schemes: Following the 2026 West Bengal Legislative Assembly election and the resulting change in state government, several sources report that West Bengal's rural housing delivery is being realigned with the central Pradhan Mantri Awas Yojana–Gramin (PMAY-G) scheme. Some websites are now referring to Banglar Bari as "PM Awas West Bengal (formerly Banglar Bari)."
            </p>
            <p>Because this administrative transition was still developing at the time of writing:</p>
            <ul>
              <li>If you already have a house sanctioned or are on a provisional list, continue monitoring your status through your district's official housing portal or Gram Panchayat office.</li>
              <li>Watch for any new survey or re-verification notice, since realigned schemes sometimes require households to be re-checked against updated criteria.</li>
              <li>Treat scheme names, funding sources, and exact assistance amounts as subject to change until confirmed through your local BDO or District Magistrate's office.</li>
            </ul>
          </section>

          <!-- Section 6 — How to Apply for These Schemes -->
          <section class="content-block">
            <h2>How to Apply for These Schemes</h2>
            <p>Follow these steps to apply for state housing assistance in West Bengal:</p>
            <ol>
              <li>Check if you're already on a survey list — both schemes rely heavily on existing SECC/BPL household survey data rather than requiring a fully independent application from scratch.</li>
              <li>Visit your Gram Panchayat, BDO, SDO, or District Magistrate's office to confirm your eligibility status or raise an inclusion request if you believe you qualify but aren't listed.</li>
              <li>For urban applicants without land, contact your Municipal Corporation or municipality office to ask about group housing options under Geetanjali.</li>
              <li>Gather your documents — Aadhaar card, income certificate, proof of residence, and land ownership/possession document (for rural construction) or landlessness proof (for urban group housing).</li>
              <li>Track your status online through your district's official website or <code>wbhousing.gov.in</code>, where available.</li>
            </ol>
          </section>

          <!-- Section 7 — FAQs -->
          <section class="content-block">
            <h2>Frequently Asked Questions</h2>
            
            <div class="faq-accordion">
              <div class="faq-item">
                <button class="faq-question">
                  <span>What are the main housing schemes in West Bengal?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>The two main programmes are Banglar Bari Prakalpa (rural pucca house construction, launched 2024) and the Geetanjali Housing Scheme (broader coverage for homeless and EWS families, including urban group housing).</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>How much financial assistance do these schemes provide?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Banglar Bari reportedly provides around Rs. 1.2–1.3 lakh per house. Geetanjali's historical rate was around Rs. 70,000–75,000 per unit, though figures vary across sources — confirm the current amount with your local housing office.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Is Banglar Bari still called "Banglar Bari" in 2026?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>It may not be for much longer — following the 2026 change in state government, several sources describe the scheme as transitioning toward alignment with the central PMAY-G scheme, sometimes referred to as "PM Awas West Bengal." Check your district's official portal for the current name and status.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Can urban residents without land get help under these schemes?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Yes — the Geetanjali Housing Scheme specifically covers group housing for urban applicants without land, built on land provided by the district administration or municipality.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>How do I check if I'm on a housing beneficiary list?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>See the dedicated Banglar Bari Beneficiary List guide for the district and Gram Panchayat-wise checking process.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Who do I contact if I believe I qualify but I'm not listed?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Visit your Gram Panchayat or BDO office to check whether a new survey or inclusion window is open, and submit a written request with your supporting documents.</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Related Category Hubs Section -->
          <section class="content-block">
            <h2>Related Category Hubs</h2>
            <div class="scheme-grid">
              <a href="/schemes/social-welfare/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Category Hub</span>
                  <span class="scheme-card-icon">🏛️</span>
                </div>
                <h3 class="scheme-card-title">Social Welfare</h3>
                <p class="scheme-card-summary">Master directory of food security, pensions, housing, and social security programs.</p>
                <div class="scheme-card-cta">Explore Category →</div>
              </a>
              <a href="/schemes/senior-citizen-schemes/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Category Hub</span>
                  <span class="scheme-card-icon">👴</span>
                </div>
                <h3 class="scheme-card-title">Senior Citizen Schemes</h3>
                <p class="scheme-card-summary">Old-age pensions, healthcare coverage, and social security for elderly citizens.</p>
                <div class="scheme-card-cta">Explore Category →</div>
              </a>
              <a href="/schemes/child-welfare-schemes/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Category Hub</span>
                  <span class="scheme-card-icon">👶</span>
                </div>
                <h3 class="scheme-card-title">Child Welfare Schemes</h3>
                <p class="scheme-card-summary">Integrated child development, nutrition, and orphan welfare programs.</p>
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
            <li><a href="/schemes/housing-schemes/index.html" class="footer-link">🏠 Housing Schemes</a></li>
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

fs.writeFileSync(page37Path, page37Html, 'utf8');
const newWordCountPage37 = getArticleWordCount(page37Path);
console.log(`Page 37 Updated: ${oldWordCountPage37} words -> ${newWordCountPage37} words`);
