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
// PAGE 39: /schemes/employment-schemes/index.html
// -------------------------------------------------------------------------
const page39Path = path.join(rootDir, 'schemes', 'employment-schemes', 'index.html');
const oldWordCountPage39 = getArticleWordCount(page39Path);

const page39Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>West Bengal Employment Schemes 2026 — Full List & Update</title>
  <meta name="description" content="Complete guide to West Bengal government employment schemes 2026 — Utkarsh Bangla skill training and the youth unemployment allowance update.">
  <meta name="keywords" content="west bengal employment schemes, wb job schemes, west bengal government employment schemes, list of employment schemes in west bengal, west bengal government job schemes 2026, wb self employment schemes for youth">
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="canonical" href="${domain}/schemes/employment-schemes/">
  <meta name="robots" content="index, follow">
  
  <meta property="og:title" content="West Bengal Employment Schemes 2026 — Full List & Update">
  <meta property="og:description" content="Complete guide to West Bengal government employment schemes 2026 — Utkarsh Bangla skill training and the youth unemployment allowance update.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${domain}/schemes/employment-schemes/">
  <meta property="og:image" content="${domain}/images/og-default.jpg">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="West Bengal Employment Schemes 2026 — Full List & Update">
  <meta name="twitter:description" content="Complete guide to West Bengal government employment schemes 2026 — Utkarsh Bangla skill training and the youth unemployment allowance update.">

  <!-- FAQPage Schema JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What employment schemes does West Bengal offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The main schemes are Utkarsh Bangla (free skill development and placement-linked training) and a monthly unemployment allowance for youth, which is currently transitioning from Banglar Yuva Sathi to a new, higher-paying successor scheme."
        }
      },
      {
        "@type": "Question",
        "name": "Is Banglar Yuva Sathi still active in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It was active from April 2026, but following the 2026 change in state government, a successor programme with a higher monthly amount has been announced, expected to roll out around October 2026. Existing beneficiaries should watch for official transition guidance."
        }
      },
      {
        "@type": "Question",
        "name": "How much does the new youth unemployment scheme pay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reported figures suggest around Rs. 3,000/month for eligible unemployed graduates and Rs. 2,000/month for other eligible unemployed youth, though this hasn't been fully finalised as of the most recent reporting."
        }
      },
      {
        "@type": "Question",
        "name": "Is Utkarsh Bangla affected by the government change?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No — Utkarsh Bangla has not been reported as affected by the 2026 transition and continues to operate as a stable, ongoing skill development scheme."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to reapply if I already registered for Banglar Yuva Sathi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This isn't yet confirmed — watch for official communication about whether existing registrations will carry over automatically to the new scheme or require a fresh application."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I check the latest official update on the youth allowance transition?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Check yubasathi.wb.gov.in and official West Bengal government budget notifications, since the new scheme's exact rollout details were still being finalised at the time of writing."
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
        <span class="current">Employment Schemes</span>
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
            <h1>West Bengal Employment Schemes — Complete Guide (2026)</h1>
            <div class="eeat-badge-container">
              <span class="fact-checked-badge">Fact-Checked 2026</span>
              <span>Fact-checked against official state notifications (wb.gov.in) • Editorial Review: August 2026</span>
            </div>
            <p class="intro-text">
              Complete guide to West Bengal government employment initiatives — covering Utkarsh Bangla skill development, vocational training, and the 2026 youth unemployment allowance transition.
            </p>
          </div>

          <!-- Section 1 — What Are West Bengal's Employment Schemes -->
          <section class="content-block">
            <h2>What Are West Bengal's Employment Schemes</h2>
            <p>
              West Bengal's employment-focused welfare programmes fall into two broad categories: skill development schemes that train people for wage or self-employment, and direct income-support allowances for unemployed youth while they search for work. The skill-development side of this category has remained stable; the income-support side is currently going through a significant transition following the 2026 change in state government, so this page covers both in detail.
            </p>
            <p>
              Explore <a href="/schemes/student-schemes/index.html" class="body-link">all Student Schemes</a> and <a href="/schemes/social-welfare/index.html" class="body-link">all Social Welfare Schemes</a> for related youth empowerment options.
            </p>
          </section>

          <!-- Section 2 — Skill Development — Utkarsh Bangla -->
          <section class="content-block">
            <h2>Skill Development — Utkarsh Bangla</h2>
            <p>
              <strong><a href="/schemes/utkarsh-bangla/index.html" class="body-link">Utkarsh Bangla</a>:</strong> West Bengal's flagship skill development scheme, launched February 2016 under the Paschim Banga Society for Skill Development (PBSSD). It provides free, placement-linked vocational training across sectors like agriculture, automotive, banking, construction, electronics, and IT, with course durations generally ranging from about 100 to 1,500 hours. The scheme won a World Summit on the Information Society (WSIS) award under the United Nations, and connects certified candidates to employment through the Rojgar Seva Portal and the West Bengal Apprenticeship Scheme.
            </p>
            <p>
              This scheme has not been reported as affected by the 2026 government transition and continues to operate as described on its dedicated page.
            </p>
          </section>

          <!-- Section 3 — Important 2026 Update — Youth Unemployment Allowance Transition -->
          <section class="content-block">
            <h2>Important 2026 Update — Youth Unemployment Allowance Transition</h2>
            <p>
              This is essential context if you're researching a monthly unemployment allowance in West Bengal. A direct cash allowance for unemployed youth, originally called Banglar Yuva Sathi, was launched by the previous state government on 1 April 2026, offering Rs. 1,500 per month to unemployed residents aged 21–40 who had passed Madhyamik, for up to five years or until they secured employment (a maximum lifetime benefit of around Rs. 90,000). Registrations reportedly drew over 84 lakh applicants, reflecting significant demand.
            </p>
            <p>
              Following the 2026 West Bengal Assembly election and the change in state government, the new administration has reportedly announced a successor programme, referred to in different sources as "Yuva Shakti Bharosa Card" or "Bhorsha Karmasuchi," confirmed as part of the West Bengal Budget 2026-27, presented on 22 June 2026. Reported details of the new scheme include:
            </p>
            <ul>
              <li><strong>A higher monthly amount:</strong> around Rs. 3,000/month for eligible unemployed graduates, and Rs. 2,000/month for other eligible unemployed youth — replacing the earlier flat Rs. 1,500/month.</li>
              <li><strong>A wider age band:</strong> reportedly up to 45 years in some listings (versus 21–40 under the earlier scheme).</li>
              <li><strong>An income condition:</strong> with some sources citing a family income limit of under Rs. 1 lakh/year.</li>
              <li><strong>Rollout timeline:</strong> expected around October 2026, though the detailed guidelines, application portal, and exact eligibility criteria were still being finalised at the time of writing.</li>
            </ul>
            <p>
              Because this is an active transition with rules still being finalised, treat specific figures above as reported but not yet fully confirmed, and check the official West Bengal government notification or portal before relying on them for a real application.
            </p>
          </section>

          <!-- Section 4 — Comparing the Old and New Youth Allowance Structure -->
          <section class="content-block">
            <h2>Comparing the Old and New Youth Allowance Structure</h2>
            <p>Comparison of original Banglar Yuva Sathi framework versus reported successor scheme:</p>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Banglar Yuva Sathi (original)</th>
                  <th>Bhorsha Karmasuchi / Yuva Shakti Bharosa Card (reported successor)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Launched</strong></td>
                  <td>1 April 2026</td>
                  <td>Announced 22 June 2026; rollout expected ~October 2026</td>
                </tr>
                <tr>
                  <td><strong>Monthly amount</strong></td>
                  <td>Rs. 1,500 (flat)</td>
                  <td>Rs. 3,000 (graduates) / Rs. 2,000 (others), reportedly</td>
                </tr>
                <tr>
                  <td><strong>Age range</strong></td>
                  <td>21–40 years</td>
                  <td>Reportedly up to 45 years in some listings</td>
                </tr>
                <tr>
                  <td><strong>Duration</strong></td>
                  <td>Up to 5 years or until employed</td>
                  <td>Not yet confirmed</td>
                </tr>
                <tr>
                  <td><strong>Payment mode</strong></td>
                  <td>DBT via Aadhaar Payment Bridge System</td>
                  <td>Expected to remain DBT-based</td>
                </tr>
              </tbody>
            </table>
          </section>

          <!-- Section 5 — What Unemployed Youth Should Do Right Now -->
          <section class="content-block">
            <h2>What Unemployed Youth Should Do Right Now</h2>
            <p>Actionable guidance for job seekers during the administrative transition:</p>
            <ol>
              <li>If you already registered under Banglar Yuva Sathi, continue watching for official communication about whether your registration carries over to the new scheme or whether a fresh application will be required.</li>
              <li>Don't pay anyone claiming to guarantee enrolment in either scheme — all West Bengal government scheme applications are free.</li>
              <li>Watch for the official rollout announcement, expected around October 2026, since the application portal and exact process for the new scheme had not been finalised at the time of writing.</li>
              <li>Check whether the existing Banglar Yuva Sathi portal (<code>yubasathi.wb.gov.in</code>) continues to be used for the new scheme, since some reports suggest it may be repurposed rather than replaced with an entirely new website.</li>
            </ol>
          </section>

          <!-- Section 6 — How to Apply for These Schemes -->
          <section class="content-block">
            <h2>How to Apply for These Schemes</h2>
            <p>Registration procedures for skill development and youth allowances:</p>
            <ul>
              <li><strong><a href="/schemes/utkarsh-bangla/index.html" class="body-link">Utkarsh Bangla</a>:</strong> Register online through the official PBSSD portal or your district's Utkarsh Bangla page, browse available courses, and complete registration during an open enrolment window. See the full Utkarsh Bangla guide for the complete process.</li>
              <li><strong>Youth Unemployment Allowance (transitioning scheme):</strong> Until the new scheme's application process is officially confirmed, monitor <code>yubasathi.wb.gov.in</code> and official West Bengal government notifications for updates on registration dates and required documents.</li>
            </ul>
          </section>

          <!-- Section 7 — FAQs -->
          <section class="content-block">
            <h2>Frequently Asked Questions</h2>
            
            <div class="faq-accordion">
              <div class="faq-item">
                <button class="faq-question">
                  <span>What employment schemes does West Bengal offer?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>The main schemes are Utkarsh Bangla (free skill development and placement-linked training) and a monthly unemployment allowance for youth, which is currently transitioning from Banglar Yuva Sathi to a new, higher-paying successor scheme.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Is Banglar Yuva Sathi still active in 2026?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>It was active from April 2026, but following the 2026 change in state government, a successor programme with a higher monthly amount has been announced, expected to roll out around October 2026. Existing beneficiaries should watch for official transition guidance.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>How much does the new youth unemployment scheme pay?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Reported figures suggest around Rs. 3,000/month for eligible unemployed graduates and Rs. 2,000/month for other eligible unemployed youth, though this hasn't been fully finalised as of the most recent reporting.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Is Utkarsh Bangla affected by the government change?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>No — Utkarsh Bangla has not been reported as affected by the 2026 transition and continues to operate as a stable, ongoing skill development scheme.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Do I need to reapply if I already registered for Banglar Yuva Sathi?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>This isn't yet confirmed — watch for official communication about whether existing registrations will carry over automatically to the new scheme or require a fresh application.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Where can I check the latest official update on the youth allowance transition?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Check yubasathi.wb.gov.in and official West Bengal government budget notifications, since the new scheme's exact rollout details were still being finalised at the time of writing.</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Related Category Hubs Section -->
          <section class="content-block">
            <h2>Related Category Hubs</h2>
            <div class="scheme-grid">
              <a href="/schemes/student-schemes/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Category Hub</span>
                  <span class="scheme-card-icon">📚</span>
                </div>
                <h3 class="scheme-card-title">Student Schemes</h3>
                <p class="scheme-card-summary">Directory of educational aid, bicycles, tab schemes, and credit cards for students.</p>
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
              <a href="/schemes/farmer-schemes/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Category Hub</span>
                  <span class="scheme-card-icon">🌾</span>
                </div>
                <h3 class="scheme-card-title">Farmer Schemes</h3>
                <p class="scheme-card-summary">Financial support, free crop insurance, and equipment subsidies for agricultural workers.</p>
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
            <li><a href="/schemes/employment-schemes/index.html" class="footer-link">💼 Employment Schemes</a></li>
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

fs.writeFileSync(page39Path, page39Html, 'utf8');
const newWordCountPage39 = getArticleWordCount(page39Path);
console.log(`Page 39 Updated: ${oldWordCountPage39} words -> ${newWordCountPage39} words`);
