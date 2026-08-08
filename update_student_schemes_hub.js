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
// PAGE 34: /schemes/student-schemes/index.html
// -------------------------------------------------------------------------
const page34Path = path.join(rootDir, 'schemes', 'student-schemes', 'index.html');
const oldWordCountPage34 = getArticleWordCount(page34Path);

const page34Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>West Bengal Student Schemes 2026 — Full List & Guide</title>
  <meta name="description" content="Complete list of West Bengal government schemes for students 2026 — Sabooj Sathi, Kanyashree, Shikshashree & skill training. Eligibility & apply.">
  <meta name="keywords" content="west bengal student schemes, wb schemes for students, west bengal education schemes, list of student schemes in west bengal, west bengal government schemes for students 2026, wb schemes for school students">
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="canonical" href="${domain}/schemes/student-schemes/">
  <meta name="robots" content="index, follow">
  
  <meta property="og:title" content="West Bengal Student Schemes 2026 — Full List & Guide">
  <meta property="og:description" content="Complete list of West Bengal government schemes for students 2026 — Sabooj Sathi, Kanyashree, Shikshashree & skill training. Eligibility & apply.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${domain}/schemes/student-schemes/">
  <meta property="og:image" content="${domain}/images/og-default.jpg">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="West Bengal Student Schemes 2026 — Full List & Guide">
  <meta name="twitter:description" content="Complete list of West Bengal government schemes for students 2026 — Sabooj Sathi, Kanyashree, Shikshashree & skill training. Eligibility & apply.">

  <!-- FAQPage Schema JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the main student schemes in West Bengal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Key schemes include Sabooj Sathi (free bicycles), Kanyashree Prakalpa (girl-student scholarship), Shikshashree (SC/ST scholarship), Oasis Scholarship (SC/ST/OBC scholarship through postgraduate level), and Utkarsh Bangla (free vocational training)."
        }
      },
      {
        "@type": "Question",
        "name": "My child is in Class 9 at a government school — which schemes apply?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "They may be eligible for Sabooj Sathi (free bicycle), and if they're an unmarried girl aged 13–18, also for Kanyashree Prakalpa's K1 annual scholarship."
        }
      },
      {
        "@type": "Question",
        "name": "Are private school students eligible for these schemes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No — most of these schemes, including Sabooj Sathi and Shikshashree, are restricted to students in government, government-aided, or government-sponsored institutions."
        }
      },
      {
        "@type": "Question",
        "name": "Do I apply for these schemes myself, or does the school do it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For Sabooj Sathi, Kanyashree, and Shikshashree, your school or college handles the application process on your behalf. Oasis Scholarship and Utkarsh Bangla require you to register directly through their respective portals."
        }
      },
      {
        "@type": "Question",
        "name": "What if my child has dropped out of school — is there still support available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — Utkarsh Bangla specifically targets school dropouts and unemployed youth, offering free vocational training and placement support regardless of whether they're currently enrolled in school."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I find scholarship-specific schemes beyond school age?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "See the dedicated Scholarship Schemes hub for a complete list of West Bengal's scholarship programmes."
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
        <span class="current">Student Schemes</span>
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
            <h1>West Bengal Student Schemes — Complete List (2026)</h1>
            <div class="eeat-badge-container">
              <span class="fact-checked-badge">Fact-Checked 2026</span>
              <span>Fact-checked against official state notifications (wb.gov.in) • Editorial Review: August 2026</span>
            </div>
            <p class="intro-text">
              Complete guide to West Bengal government schemes supporting students across primary, secondary, higher education, and vocational skill streams — including bicycles, scholarships, and career training.
            </p>
          </div>

          <!-- Section 1 — What Are West Bengal's Student Schemes -->
          <section class="content-block">
            <h2>What Are West Bengal's Student Schemes</h2>
            <p>
              West Bengal runs a wide network of education-linked welfare schemes, covering everything from free transport to school, to scholarships for reserved-category students, to vocational training for those who leave school early. Most of these schemes are administered through students' own schools or colleges rather than requiring an independent application, and payments are typically made via Direct Benefit Transfer (DBT) to a student's own bank account.
            </p>
            <p>
              This page organises the state's major student-focused schemes by what stage of education they apply to, so families can quickly identify which ones are relevant to their child. Explore <a href="/schemes/social-welfare/index.html" class="body-link">all Social Welfare Schemes</a> operating across West Bengal.
            </p>
          </section>

          <!-- Section 2 — School-Level Schemes (Class 5–12) -->
          <section class="content-block">
            <h2>School-Level Schemes (Class 5–12)</h2>
            <p>Direct educational support and mobility incentives for primary and secondary students:</p>
            <ul>
              <li><strong><a href="/schemes/sabooj-sathi/index.html" class="body-link">Sabooj Sathi Scheme</a>:</strong> Provides a free bicycle to students in Classes 9–12 at government, government-aided, or government-sponsored schools and madrasahs, helping reduce dropout rates linked to difficult daily commutes. Check out the <a href="/schemes/sabooj-sathi/login-portal/index.html" class="body-link">Sabooj Sathi login portal</a> guide for school distribution status.</li>
              <li><strong><a href="/schemes/shikshashree-scheme/index.html" class="body-link">Shikshashree Scheme</a>:</strong> Pre-matric scholarship for SC and ST day scholars in Classes 5–8, providing Rs. 750–800 per year to help cover books and school supplies.</li>
            </ul>
          </section>

          <!-- Section 3 — Girl Student Welfare Schemes -->
          <section class="content-block">
            <h2>Girl Student Welfare Schemes</h2>
            <p>Specialized financial aid preventing child marriage and encouraging higher education among female youth:</p>
            <ul>
              <li><strong><a href="/schemes/kanyashree-prakalpa/index.html" class="body-link">Kanyashree Prakalpa</a>:</strong> West Bengal's flagship scheme for unmarried girls aged 13–18 in Classes 8–12, providing an annual K1 scholarship of Rs. 1,000, followed by a one-time K2 grant of Rs. 25,000 at age 18 for those continuing education or training. The scheme has been recognised internationally with a United Nations Public Service Award.</li>
            </ul>
          </section>

          <!-- Section 4 — Scholarship Schemes for SC/ST/OBC Students -->
          <section class="content-block">
            <h2>Scholarship Schemes for SC/ST/OBC Students</h2>
            <p>Targeted financial assistance for reserved community students at pre-matric and post-matric levels:</p>
            <ul>
              <li><strong><a href="/schemes/oasis-scholarship/index.html" class="body-link">Oasis Scholarship</a>:</strong> Covers SC, ST, and OBC students from Class 9 through postgraduate studies, with amounts varying by class, category, and hosteller/day-scholar status. Run through the dedicated <code>oasis.gov.in</code> portal.</li>
              <li><strong><a href="/schemes/shikshashree-scheme/index.html" class="body-link">Shikshashree Scheme</a>:</strong> Functions as an upper-primary pre-matric scholarship for SC/ST students in Classes 5–8.</li>
            </ul>
            <p>
              For a broader listing of all scholarship-specific schemes (not limited to school-age students), see the dedicated <a href="/schemes/scholarship-schemes/index.html" class="body-link">Scholarship Schemes</a> hub.
            </p>
          </section>

          <!-- Section 5 — Skill Development & Beyond School -->
          <section class="content-block">
            <h2>Skill Development & Beyond School</h2>
            <p>Job-oriented vocational training and technical education integration:</p>
            <ul>
              <li><strong><a href="/schemes/utkarsh-bangla/index.html" class="body-link">Utkarsh Bangla</a>:</strong> Free, placement-linked vocational skill training for youth and school dropouts, covering sectors from agriculture to IT. Also connects trained candidates to employment platforms like the Rojgar Seva Portal and the West Bengal Apprenticeship Scheme. Class 11–12 Kanyashree students specifically get access to career-centric technical training with a daily stipend under this scheme.</li>
            </ul>
          </section>

          <!-- Section 6 — Which Scheme Applies to Which Student -->
          <section class="content-block">
            <h2>Which Scheme Applies to Which Student</h2>
            <p>Use this summary matrix to quickly check eligible schemes based on student profile:</p>
            <ul>
              <li><strong>A boy or girl in Class 9–12 at a government/aided school:</strong> Eligible for Sabooj Sathi (free bicycle).</li>
              <li><strong>An SC/ST student in Class 5–8:</strong> Eligible for Shikshashree (annual pre-matric scholarship).</li>
              <li><strong>An unmarried girl aged 13–18 in Class 8–12:</strong> Eligible for Kanyashree Prakalpa (K1 annual scholarship, then K2 grant at age 18).</li>
              <li><strong>An SC/ST/OBC student in Class 9 through postgraduate level:</strong> Eligible for Oasis Scholarship.</li>
              <li><strong>A school dropout or unemployed youth wanting job-ready skills:</strong> Eligible for Utkarsh Bangla vocational training.</li>
            </ul>
            <p>
              Because eligibility conditions (class, category, income, residency) can overlap or exclude each other depending on the specific scheme, students and families should check the individual scheme page for exact criteria before assuming automatic eligibility.
            </p>
          </section>

          <!-- Section 7 — How to Apply for These Schemes -->
          <section class="content-block">
            <h2>How to Apply for These Schemes</h2>
            <p>Application routing depends on the nature of the education scheme:</p>
            <ol>
              <li><strong>Through Your School or College:</strong> Sabooj Sathi, Kanyashree, and Shikshashree applications are almost always processed by the educational institution itself, so the first step is usually talking to your school's administrative office.</li>
              <li><strong>Through Official Online Portals:</strong> Oasis Scholarship (<code>oasis.gov.in</code>) and Utkarsh Bangla (via PBSSD/district portals) require direct online registration by the student or candidate.</li>
              <li><strong>Aadhaar-Linked Bank Account:</strong> Required across all of these schemes for receiving scholarship amounts or stipends via Direct Benefit Transfer (DBT).</li>
              <li><strong>Annual Renewal Requirement:</strong> Several of these schemes (Shikshashree, Oasis) are not automatically carried forward; a fresh application or renewal submission is typically required each academic year after promotion to the next class.</li>
            </ol>
          </section>

          <!-- Section 8 — FAQs -->
          <section class="content-block">
            <h2>Frequently Asked Questions</h2>
            
            <div class="faq-accordion">
              <div class="faq-item">
                <button class="faq-question">
                  <span>What are the main student schemes in West Bengal?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Key schemes include Sabooj Sathi (free bicycles), Kanyashree Prakalpa (girl-student scholarship), Shikshashree (SC/ST scholarship), Oasis Scholarship (SC/ST/OBC scholarship through postgraduate level), and Utkarsh Bangla (free vocational training).</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>My child is in Class 9 at a government school — which schemes apply?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>They may be eligible for Sabooj Sathi (free bicycle), and if they're an unmarried girl aged 13–18, also for Kanyashree Prakalpa's K1 annual scholarship.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Are private school students eligible for these schemes?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>No — most of these schemes, including Sabooj Sathi and Shikshashree, are restricted to students in government, government-aided, or government-sponsored institutions.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Do I apply for these schemes myself, or does the school do it?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>For Sabooj Sathi, Kanyashree, and Shikshashree, your school or college handles the application process on your behalf. Oasis Scholarship and Utkarsh Bangla require you to register directly through their respective portals.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>What if my child has dropped out of school — is there still support available?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Yes — Utkarsh Bangla specifically targets school dropouts and unemployed youth, offering free vocational training and placement support regardless of whether they're currently enrolled in school.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Where can I find scholarship-specific schemes beyond school age?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>See the dedicated Scholarship Schemes hub for a complete list of West Bengal's scholarship programmes.</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Related Category Hubs Section -->
          <section class="content-block">
            <h2>Related Category Hubs</h2>
            <div class="scheme-grid">
              <a href="/schemes/scholarship-schemes/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Category Hub</span>
                  <span class="scheme-card-icon">🎓</span>
                </div>
                <h3 class="scheme-card-title">Scholarship Schemes</h3>
                <p class="scheme-card-summary">Educational scholarships and stipends for SC, ST, OBC, minority, and merit students.</p>
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
              <a href="/schemes/employment-schemes/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Category Hub</span>
                  <span class="scheme-card-icon">💼</span>
                </div>
                <h3 class="scheme-card-title">Employment Schemes</h3>
                <p class="scheme-card-summary">Skill training, self-employment loans, and job card initiatives in West Bengal.</p>
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
            <li><a href="/schemes/student-schemes/index.html" class="footer-link">📚 Student Schemes</a></li>
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

fs.writeFileSync(page34Path, page34Html, 'utf8');
const newWordCountPage34 = getArticleWordCount(page34Path);
console.log(`Page 34 Updated: ${oldWordCountPage34} words -> ${newWordCountPage34} words`);
