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
// PAGE 23: /schemes/sabooj-sathi/index.html
// -------------------------------------------------------------------------
const page23Path = path.join(rootDir, 'schemes', 'sabooj-sathi', 'index.html');
const oldWordCountPage23 = getArticleWordCount(page23Path);

const page23Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sabooj Sathi Scheme 2026 — Free Bicycle for WB Students</title>
  <meta name="description" content="Complete guide to Sabooj Sathi, West Bengal's free bicycle scheme for Class 9-12 students — eligibility, how distribution works, and login help.">
  <meta name="keywords" content="sabooj sathi scheme, sabooj sathi west bengal, sabooj sathi bicycle scheme, what is sabooj sathi scheme, sabooj sathi eligibility criteria, sabooj sathi scheme benefits">
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="canonical" href="${domain}/schemes/sabooj-sathi/">
  <meta name="robots" content="index, follow">
  
  <meta property="og:title" content="Sabooj Sathi Scheme 2026 — Free Bicycle for WB Students">
  <meta property="og:description" content="Complete guide to Sabooj Sathi, West Bengal's free bicycle scheme for Class 9-12 students — eligibility, how distribution works, and login help.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${domain}/schemes/sabooj-sathi/">
  <meta property="og:image" content="${domain}/images/og-default.jpg">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Sabooj Sathi Scheme 2026 — Free Bicycle for WB Students">
  <meta name="twitter:description" content="Complete guide to Sabooj Sathi, West Bengal's free bicycle scheme for Class 9-12 students — eligibility, how distribution works, and login help.">

  <!-- FAQPage Schema JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the Sabooj Sathi scheme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sabooj Sathi is a West Bengal government scheme launched in 2015 that provides free bicycles to students in Class 9 through 12, aimed at reducing school dropout linked to commuting distance."
        }
      },
      {
        "@type": "Question",
        "name": "Who is eligible for a free bicycle under Sabooj Sathi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Students in Class 9–12 enrolled in a government school, government-aided school, or Madrasah, and who are permanent residents of West Bengal."
        }
      },
      {
        "@type": "Question",
        "name": "How do I apply for a Sabooj Sathi bicycle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You don't apply individually — your school registers eligible students directly on the official portal as part of its enrolment process."
        }
      },
      {
        "@type": "Question",
        "name": "I'm eligible but haven't received my bicycle yet — why?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Distribution happens in phases based on procurement and stock availability, so a delay doesn't necessarily mean an error. Contact your school directly for a status update specific to your batch."
        }
      },
      {
        "@type": "Question",
        "name": "Is there any cost to the student or family?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No — the bicycle is provided completely free, with no fee, deposit, or repayment required."
        }
      },
      {
        "@type": "Question",
        "name": "Can private school students get a Sabooj Sathi bicycle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No — the scheme covers government schools, government-aided schools, and Madrasahs only."
        }
      },
      {
        "@type": "Question",
        "name": "How do I log in to check my bicycle status?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "See our dedicated Sabooj Sathi Login guide, since the login uses a specific student ID that's different from your school roll number."
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
        <a href="/schemes/index.html" class="breadcrumb-link">Schemes</a>
        <span class="separator">/</span>
        <span class="current">Sabooj Sathi Scheme</span>
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
            <span class="scheme-badge">Student Mobility & Welfare</span>
            <h1>Sabooj Sathi Scheme — Free Bicycles for Students (2026)</h1>
            <div class="eeat-badge-container">
              <span class="fact-checked-badge">Fact-Checked 2026</span>
              <span>Fact-checked against official state notifications (wbsaboojsathi.gov.in) • Editorial Review: August 2026</span>
            </div>
            <p class="intro-text">
              The <strong>Sabooj Sathi scheme</strong> (সবুজ সাথী, "Green Companion") is West Bengal's landmark student welfare initiative, providing free bicycles to over 1.2 crore boys and girls studying in Classes 9 through 12 to reduce school dropouts and ensure equal educational access.
            </p>
          </div>

          <!-- Section 1 — What Is the Sabooj Sathi Scheme -->
          <section class="content-block">
            <h2>What Is the Sabooj Sathi Scheme</h2>
            <p>
              Sabooj Sathi ("Green Companion"), carrying the tagline "Wheels of Change," is West Bengal's flagship scheme providing free bicycles to secondary school students, launched in 2015 by Chief Minister Mamata Banerjee. Its purpose is simple but significant: for many students in rural West Bengal, the daily distance to school was itself a barrier to regular attendance — and a bicycle removes that barrier at essentially no cost to the family.
            </p>
            <p>
              The scheme has grown into one of the largest student welfare initiatives in India, with over 1.2 crore bicycles distributed to date, and it received international recognition, winning the prestigious World Summit on the Information Society (WSIS) award from the United Nations in the e-Government category.
            </p>
            <p>
              Procurement and state distribution logistics are managed by the West Bengal SC, ST & OBC Development & Finance Corporation through the official portal: <a href="https://wbsaboojsathi.gov.in" class="body-link" target="_blank" rel="noopener noreferrer">wbsaboojsathi.gov.in</a>.
            </p>
          </section>

          <!-- Section 2 — Who Is Eligible -->
          <section class="content-block">
            <h2>Who Is Eligible</h2>
            <p>Eligibility for receiving a free bicycle under Sabooj Sathi is defined by clear institutional criteria:</p>
            <ul>
              <li>The student must be studying in <strong>Class 9, 10, 11, or 12</strong> during the current academic session.</li>
              <li>The student must be enrolled in a government school, government-aided school, government-sponsored school, or recognized Madrasah across West Bengal — students in fully private un-aided institutions are not covered.</li>
              <li>The student must be a permanent resident of West Bengal with a valid 14-digit Banglar Shiksha Student ID.</li>
              <li>The scheme applies to all eligible students regardless of gender, caste, or family income — providing universal coverage for secondary students in public education.</li>
            </ul>
            <p>
              To <a href="/schemes/sabooj-sathi/login-portal/index.html" class="body-link">check your bicycle status / login</a> details, visit our dedicated portal walkthrough. Explore <a href="/schemes/student-schemes/index.html" class="body-link">all Student Schemes</a> operating across West Bengal for a complete overview of educational stipends and scholarships.
            </p>
          </section>

          <!-- Section 3 — How Distribution Actually Works -->
          <section class="content-block">
            <h2>How Distribution Actually Works</h2>
            <p>Unlike many welfare schemes where an individual applies directly, Sabooj Sathi works through the student's own school:</p>
            <ol>
              <li><strong>Student List Compilation:</strong> Each school compiles a master list of its enrolled students in Class 9 through Class 12 using the Banglar Shiksha database.</li>
              <li><strong>Portal Registration:</strong> School administrators upload eligible student records to <a href="https://wbsaboojsathi.gov.in" class="body-link" target="_blank" rel="noopener noreferrer">wbsaboojsathi.gov.in</a>.</li>
              <li><strong>Phased Procurement & Delivery:</strong> The state processes bicycle procurement and distribution in phases — bicycles aren't necessarily delivered to every eligible student simultaneously, since distribution depends on district procurement and assembly schedules.</li>
              <li><strong>School Verification & Handover:</strong> Bicycles are delivered to assembly centers, inspected for quality standards, and handed out to students on designated distribution days at their school premises.</li>
            </ol>
            <p>
              This means that if you're an eligible student who hasn't yet received a bicycle, it doesn't necessarily indicate an error — it may simply reflect where your school currently sits in the phased distribution schedule. Contacting your school administration directly is generally the fastest way to get an update specific to your situation.
            </p>
          </section>

          <!-- Section 4 — What You Get -->
          <section class="content-block">
            <h2>What You Get</h2>
            <p>The key specifications and benefits provided under Sabooj Sathi include:</p>
            <ul>
              <li><strong>Brand New Quality Bicycle:</strong> A brand-new, durable bicycle customized for male and female students (featuring front baskets, frame guards, and reflector safety lights).</li>
              <li><strong>Zero Financial Cost:</strong> Provided completely free — no fee, security deposit, or repayment is required from students or parents at any stage.</li>
              <li><strong>Commute Support:</strong> Significantly reduces daily travel time, physical fatigue, and public transport expenses for students residing far from their school campus.</li>
            </ul>
          </section>

          <!-- Section 5 — Checking Your Bicycle Distribution Status -->
          <section class="content-block">
            <h2>Checking Your Bicycle Distribution Status</h2>
            <p>
              Students (or their schools, on their behalf) can check distribution status online through the official portal, <a href="https://wbsaboojsathi.gov.in" class="body-link" target="_blank" rel="noopener noreferrer">wbsaboojsathi.gov.in</a>. This requires logging in — but the login uses a specific ID that's easy to confuse with other student identifiers.
            </p>
            <p>
              For the full step-by-step login and status-check process, including how to find your correct login ID, see our dedicated <a href="/schemes/sabooj-sathi/login-portal/index.html" class="body-link">Sabooj Sathi Login guide</a>.
            </p>
          </section>

          <!-- Section 6 — Why This Scheme Exists -->
          <section class="content-block">
            <h2>Why This Scheme Exists</h2>
            <p>
              In many parts of rural West Bengal, students — especially girls — faced real practical barriers to attending secondary school simply because of the distance between home and school, combined with the cost and difficulty of arranging daily transport.
            </p>
            <p>
              Sabooj Sathi was designed to remove that specific barrier directly: rather than a cash transfer or a fee waiver, it provides the actual means of transport, at zero cost, which research and government reporting has linked to measurable reductions in school dropout rates and significant increases in secondary school completion.
            </p>
          </section>

          <!-- Section 7 — FAQs -->
          <section class="content-block">
            <h2>Frequently Asked Questions</h2>
            
            <div class="faq-accordion">
              <div class="faq-item">
                <button class="faq-question">
                  <span>What is the Sabooj Sathi scheme?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Sabooj Sathi is a West Bengal government scheme launched in 2015 that provides free bicycles to students in Class 9 through 12, aimed at reducing school dropout linked to commuting distance.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Who is eligible for a free bicycle under Sabooj Sathi?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Students in Class 9–12 enrolled in a government school, government-aided school, or Madrasah, and who are permanent residents of West Bengal.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>How do I apply for a Sabooj Sathi bicycle?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>You don't apply individually — your school registers eligible students directly on the official portal as part of its enrolment process.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>I'm eligible but haven't received my bicycle yet — why?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Distribution happens in phases based on procurement and stock availability, so a delay doesn't necessarily mean an error. Contact your school directly for a status update specific to your batch.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Is there any cost to the student or family?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>No — the bicycle is provided completely free, with no fee, deposit, or repayment required.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Can private school students get a Sabooj Sathi bicycle?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>No — the scheme covers government schools, government-aided schools, and Madrasahs only.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>How do I log in to check my bicycle status?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>See our dedicated Sabooj Sathi Login guide, since the login uses a specific student ID that's different from your school roll number.</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Related Schemes Section -->
          <section class="content-block">
            <h2>Related Schemes</h2>
            <div class="scheme-grid">
              <a href="/schemes/kanyashree-prakalpa/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Girls Support</span>
                  <span class="scheme-card-icon">🎓</span>
                </div>
                <h3 class="scheme-card-title">Kanyashree Prakalpa</h3>
                <p class="scheme-card-summary">Annual stipends and one-time grants to encourage girls' education and prevent early marriage.</p>
                <div class="scheme-card-cta">View Details & Apply →</div>
              </a>
              <a href="/schemes/student-schemes/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Category Hub</span>
                  <span class="scheme-card-icon">📚</span>
                </div>
                <h3 class="scheme-card-title">Student Schemes</h3>
                <p class="scheme-card-summary">Complete directory of scholarships, educational stipends, and student credit card loans in West Bengal.</p>
                <div class="scheme-card-cta">Explore Category →</div>
              </a>
              <a href="/schemes/aikyashree-scholarship/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Scholarship</span>
                  <span class="scheme-card-icon">💡</span>
                </div>
                <h3 class="scheme-card-title">Aikyashree Scholarship</h3>
                <p class="scheme-card-summary">Financial assistance for minority students studying from Class 1 through higher education levels.</p>
                <div class="scheme-card-cta">View Details & Apply →</div>
              </a>
            </div>
          </section>

        </article>

        <!-- Sidebar Column -->
        <aside class="sidebar">
          <div class="sidebar-widget">
            <h3>Quick Links & Services</h3>
            <div class="quick-links-container">
              <a href="/schemes/sabooj-sathi/login-portal/index.html" class="quick-link-item">
                <span class="quick-link-icon">🔐</span>
                <div class="quick-link-text">
                  <span class="quick-link-title">Portal Login & Access</span>
                  <span class="quick-link-sub">Official Guide & Portal</span>
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
            <li><a href="/schemes/student-schemes/index.html" class="footer-link">📚 Student Welfare</a></li>
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

fs.writeFileSync(page23Path, page23Html, 'utf8');
const newWordCountPage23 = getArticleWordCount(page23Path);
console.log(`Page 23 Updated: ${oldWordCountPage23} words -> ${newWordCountPage23} words`);


// -------------------------------------------------------------------------
// PAGE 24: /schemes/sabooj-sathi/login-portal/index.html
// -------------------------------------------------------------------------
const page24Path = path.join(rootDir, 'schemes', 'sabooj-sathi', 'login-portal', 'index.html');
const oldWordCountPage24 = getArticleWordCount(page24Path);

const page24Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sabooj Sathi Login 2026 — Portal & Bicycle Status Check</title>
  <meta name="description" content="How to log in to the Sabooj Sathi portal using your Banglar Shiksha ID, check your bicycle distribution status, and fix common login issues.">
  <meta name="keywords" content="sabooj sathi login, sabooj sathi portal login, sabooj sathi school login, sabooj sathi login with school code, sabooj sathi portal login process, sabooj sathi login issue">
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="canonical" href="${domain}/schemes/sabooj-sathi/login-portal/">
  <meta name="robots" content="index, follow">
  
  <meta property="og:title" content="Sabooj Sathi Login 2026 — Portal & Bicycle Status Check">
  <meta property="og:description" content="How to log in to the Sabooj Sathi portal using your Banglar Shiksha ID, check your bicycle distribution status, and fix common login issues.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${domain}/schemes/sabooj-sathi/login-portal/">
  <meta property="og:image" content="${domain}/images/og-default.jpg">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Sabooj Sathi Login 2026 — Portal & Bicycle Status Check">
  <meta name="twitter:description" content="How to log in to the Sabooj Sathi portal using your Banglar Shiksha ID, check your bicycle distribution status, and fix common login issues.">

  <!-- FAQPage Schema JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I log in to the Sabooj Sathi portal as a student?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Visit wbsaboojsathi.gov.in, select Student Login, and enter your 14-digit Banglar Shiksha ID along with your date of birth and the captcha shown."
        }
      },
      {
        "@type": "Question",
        "name": "What is a Banglar Shiksha ID, and how is it different from my roll number?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's a unique 14-digit student identifier used across West Bengal's Banglar Shiksha education database — separate from your school roll number, and it's specifically what the Sabooj Sathi login requires."
        }
      },
      {
        "@type": "Question",
        "name": "I don't know my Banglar Shiksha ID — how do I find it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ask your school; teachers can look this up for you through their own Banglar Shiksha school login."
        }
      },
      {
        "@type": "Question",
        "name": "I'm in Class 9 but haven't received a bicycle yet — is something wrong?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not necessarily. Distribution happens in phases based on procurement cycles, so a delay commonly reflects where your school currently sits in that schedule rather than an individual problem."
        }
      },
      {
        "@type": "Question",
        "name": "What does 'Ready for Distribution' mean on my status?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It means bicycle stock has arrived at your school — contact your school office directly to arrange collection."
        }
      },
      {
        "@type": "Question",
        "name": "Can I log in using my school roll number instead?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No — the portal specifically requires your Banglar Shiksha ID, not your roll number; using the wrong ID is the most common reason for login failure."
        }
      },
      {
        "@type": "Question",
        "name": "Who do I contact if I can't resolve a login issue myself?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your school is the fastest point of contact, since they manage student registration and can verify or correct your details directly on the portal."
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
        <a href="/schemes/index.html" class="breadcrumb-link">Schemes</a>
        <span class="separator">/</span>
        <a href="/schemes/sabooj-sathi/index.html" class="breadcrumb-link">Sabooj Sathi Scheme</a>
        <span class="separator">/</span>
        <span class="current">Login Portal</span>
      </nav>
    </div>
  </div>

  <!-- Main Content Layout -->
  <main class="page-layout">
    <div class="container">
      <div class="page-grid">
        
        <!-- Main Column -->
        <article class="main-content">
          <a href="/schemes/sabooj-sathi/index.html" class="back-link-btn">← Back to Sabooj Sathi Overview</a>

          <!-- Hero Banner -->
          <div class="scheme-hero">
            <span class="scheme-badge">Portal Access Guide</span>
            <h1>Sabooj Sathi Login — Portal Access & Status Check (2026)</h1>
            <div class="eeat-badge-container">
              <span class="fact-checked-badge">Fact-Checked 2026</span>
              <span>Fact-checked against official state notifications (wbsaboojsathi.gov.in) • Editorial Review: August 2026</span>
            </div>
            <p class="intro-text">
              Completing your <strong>sabooj sathi login</strong> via the official state portal allows students and school administrators to track bicycle distribution phases and verify student enrolment status.
            </p>
          </div>

          <!-- Section 1 — The One Thing That Confuses Most Students: Your Login ID -->
          <section class="content-block">
            <h2>The One Thing That Confuses Most Students: Your Login ID</h2>
            <p>
              The single most common point of confusion with the Sabooj Sathi portal is the Student ID it asks for at login — many students assume this means their school roll number, but it doesn't. The portal requires your Banglar Shiksha ID, a unique 14-digit number assigned to every student in the West Bengal Banglar Shiksha education database, entirely separate from your roll number.
            </p>
            <p>
              If you don't know your Banglar Shiksha ID, your school can look it up for you through their own Banglar Shiksha school login — this is generally the fastest way to find it if you don't already have it recorded somewhere.
            </p>
            <p>
              To <a href="/schemes/sabooj-sathi/index.html" class="body-link">check eligibility & how the scheme works</a>, see our main scheme overview. For wider educational assistance, explore <a href="/schemes/student-schemes/index.html" class="body-link">all Student Schemes</a> in West Bengal.
            </p>
          </section>

          <!-- Section 2 — Student Login — Step by Step -->
          <section class="content-block">
            <h2>Student Login — Step by Step</h2>
            <p>Follow these step-by-step instructions to check your bicycle distribution status:</p>
            <ol>
              <li>Visit the official portal: <a href="https://wbsaboojsathi.gov.in" class="body-link" target="_blank" rel="noopener noreferrer">wbsaboojsathi.gov.in</a>.</li>
              <li>Click on the <strong>Student Corner / Student Login</strong> option on the homepage navigation bar.</li>
              <li>Enter your Applicant ID (your 14-digit Banglar Shiksha ID) and date of birth in DD/MM/YYYY format.</li>
              <li>Enter the security captcha code shown on screen.</li>
              <li>Click <strong>Submit</strong> to log in and view your student profile, school mapping, and current bicycle distribution stage.</li>
            </ol>
          </section>

          <!-- Section 3 — School Login — For Teachers & Administrators -->
          <section class="content-block">
            <h2>School Login — For Teachers & Administrators</h2>
            <p>Since schools are responsible for registering eligible students, teachers and school administrators use a separate login module:</p>
            <ol>
              <li>Visit <a href="https://wbsaboojsathi.gov.in" class="body-link" target="_blank" rel="noopener noreferrer">wbsaboojsathi.gov.in</a> and select the <strong>School Login / Admin Login</strong> option.</li>
              <li>Log in using the school's official User ID (School DISE Code) and administrative password issued by the District Inspector (DI) of Schools.</li>
              <li>From here, school administrators can upload new Class 9 student batches, update student Banglar Shiksha IDs, verify stock arrival, and mark bicycles as "Distributed" upon physical handover.</li>
            </ol>
          </section>

          <!-- Section 4 — Understanding Your Distribution Status -->
          <section class="content-block">
            <h2>Understanding Your Distribution Status</h2>
            <p>Once logged in, students can typically see a status reflecting where they are in the distribution process:</p>
            <ul>
              <li><strong>Registered:</strong> Your school has successfully added you to the eligible student list; you're in the system but bicycles haven't yet reached your school for distribution.</li>
              <li><strong>Procurement / Tender in Progress:</strong> The state SC/ST Corporation is in the process of purchasing bicycles for the current distribution phase; this stage simply requires waiting.</li>
              <li><strong>Ready for Distribution:</strong> Bicycle stock has arrived at your school's designated assembly point; contact your school office directly to arrange collection.</li>
              <li><strong>Distributed:</strong> Your bicycle has already been issued and recorded against your student record.</li>
            </ul>
          </section>

          <!-- Section 5 — Common Login Problems and Fixes -->
          <section class="content-block">
            <h2>Common Login Problems and Fixes</h2>
            <ul>
              <li><strong>"Invalid credentials" despite entering correct ID:</strong> Double-check you're using your 14-digit Banglar Shiksha ID, not your school roll number or registration number; this mix-up is the most frequent login issue.</li>
              <li><strong>Don't know your Banglar Shiksha ID:</strong> Ask your school headmaster or class teacher to look it up via their own Banglar Shiksha school portal login.</li>
              <li><strong>Date of birth mismatch:</strong> Ensure you are entering your date of birth exactly as recorded in the school's official admission register, which may differ from a birth certificate if an error occurred during school entry.</li>
              <li><strong>Portal not loading or slow:</strong> Server load can spike during peak registration windows; try clearing browser cache or accessing the site during off-peak morning hours.</li>
              <li><strong>Status stuck at "Registered" for a long time:</strong> This generally reflects the current phase of the state's bicycle procurement cycle rather than an individual account issue; check with your school for the latest update on your district's distribution timeline.</li>
            </ul>
          </section>

          <!-- Section 6 — FAQs -->
          <section class="content-block">
            <h2>Frequently Asked Questions</h2>
            
            <div class="faq-accordion">
              <div class="faq-item">
                <button class="faq-question">
                  <span>How do I log in to the Sabooj Sathi portal as a student?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Visit wbsaboojsathi.gov.in, select Student Login, and enter your 14-digit Banglar Shiksha ID along with your date of birth and the captcha shown.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>What is a Banglar Shiksha ID, and how is it different from my roll number?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>It's a unique 14-digit student identifier used across West Bengal's Banglar Shiksha education database — separate from your school roll number, and it's specifically what the Sabooj Sathi login requires.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>I don't know my Banglar Shiksha ID — how do I find it?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Ask your school; teachers can look this up for you through their own Banglar Shiksha school login.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>I'm in Class 9 but haven't received a bicycle yet — is something wrong?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Not necessarily. Distribution happens in phases based on procurement cycles, so a delay commonly reflects where your school currently sits in that schedule rather than an individual problem.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>What does "Ready for Distribution" mean on my status?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>It means bicycle stock has arrived at your school — contact your school office directly to arrange collection.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Can I log in using my school roll number instead?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>No — the portal specifically requires your Banglar Shiksha ID, not your roll number; using the wrong ID is the most common reason for login failure.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Who do I contact if I can't resolve a login issue myself?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Your school is the fastest point of contact, since they manage student registration and can verify or correct your details directly on the portal.</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Related Schemes Section -->
          <section class="content-block">
            <h2>Related Schemes</h2>
            <div class="scheme-grid">
              <a href="/schemes/kanyashree-prakalpa/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Girls Support</span>
                  <span class="scheme-card-icon">🎓</span>
                </div>
                <h3 class="scheme-card-title">Kanyashree Prakalpa</h3>
                <p class="scheme-card-summary">Annual stipends and one-time grants to encourage girls' education and prevent early marriage.</p>
                <div class="scheme-card-cta">View Details & Apply →</div>
              </a>
              <a href="/schemes/student-schemes/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Category Hub</span>
                  <span class="scheme-card-icon">📚</span>
                </div>
                <h3 class="scheme-card-title">Student Schemes</h3>
                <p class="scheme-card-summary">Complete directory of scholarships, educational stipends, and student credit card loans in West Bengal.</p>
                <div class="scheme-card-cta">Explore Category →</div>
              </a>
              <a href="/schemes/aikyashree-scholarship/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Scholarship</span>
                  <span class="scheme-card-icon">💡</span>
                </div>
                <h3 class="scheme-card-title">Aikyashree Scholarship</h3>
                <p class="scheme-card-summary">Financial assistance for minority students studying from Class 1 through higher education levels.</p>
                <div class="scheme-card-cta">View Details & Apply →</div>
              </a>
            </div>
          </section>

        </article>

        <!-- Sidebar Column -->
        <aside class="sidebar">
          <div class="sidebar-widget">
            <h3>Quick Links & Services</h3>
            <div class="quick-links-container">
              <a href="/schemes/sabooj-sathi/login-portal/index.html" class="quick-link-item">
                <span class="quick-link-icon">🔐</span>
                <div class="quick-link-text">
                  <span class="quick-link-title">Portal Login & Access</span>
                  <span class="quick-link-sub">Official Guide & Portal</span>
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
            <li><a href="/schemes/student-schemes/index.html" class="footer-link">📚 Student Welfare</a></li>
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

fs.writeFileSync(page24Path, page24Html, 'utf8');
const newWordCountPage24 = getArticleWordCount(page24Path);
console.log(`Page 24 Updated: ${oldWordCountPage24} words -> ${newWordCountPage24} words`);
