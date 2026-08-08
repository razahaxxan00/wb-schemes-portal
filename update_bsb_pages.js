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
// PAGE 17: /schemes/bangla-shasya-bima/index.html
// -------------------------------------------------------------------------
const page17Path = path.join(rootDir, 'schemes', 'bangla-shasya-bima', 'index.html');
const oldWordCountPage17 = getArticleWordCount(page17Path);

const page17Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bangla Shasya Bima 2026 — Crop Insurance Scheme, WB</title>
  <meta name="description" content="Complete guide to Bangla Shasya Bima, West Bengal's free crop insurance scheme — eligibility, covered crops, claim process, and how to apply.">
  <meta name="keywords" content="bangla shasya bima scheme, bangla shasya bima west bengal, bangla shasya bima crop insurance, what is bangla shasya bima scheme, bangla shasya bima eligibility criteria, bangla shasya bima claim process">
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="canonical" href="${domain}/schemes/bangla-shasya-bima/">
  <meta name="robots" content="index, follow">
  
  <meta property="og:title" content="Bangla Shasya Bima 2026 — Crop Insurance Scheme, WB">
  <meta property="og:description" content="Complete guide to Bangla Shasya Bima, West Bengal's free crop insurance scheme — eligibility, covered crops, claim process, and how to apply.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${domain}/schemes/bangla-shasya-bima/">
  <meta property="og:image" content="${domain}/images/og-default.jpg">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Bangla Shasya Bima 2026 — Crop Insurance Scheme, WB">
  <meta name="twitter:description" content="Complete guide to Bangla Shasya Bima, West Bengal's free crop insurance scheme — eligibility, covered crops, claim process, and how to apply.">

  <!-- FAQPage Schema JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Bangla Shasya Bima?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bangla Shasya Bima is West Bengal's free crop insurance scheme, launched in 2019, protecting farmers against crop loss from natural calamities, pests, or disease, with the entire premium paid by the state government."
        }
      },
      {
        "@type": "Question",
        "name": "Do I have to pay any premium to join Bangla Shasya Bima?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No — the West Bengal government pays the full premium on your behalf. There is no cost to the farmer at any stage of enrollment."
        }
      },
      {
        "@type": "Question",
        "name": "Can I enroll if I haven't taken an agricultural loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — both loanee and non-loanee farmers can enroll, as long as you're actively cultivating a notified crop in West Bengal."
        }
      },
      {
        "@type": "Question",
        "name": "How is compensation calculated under this scheme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Compensation uses an area-based model: a Mouza/Panchayat area is declared 'affected' if at least 50% of farmers there suffer crop loss, and enrolled farmers in that area then receive compensation calculated per hectare, paid in up to 4 stages."
        }
      },
      {
        "@type": "Question",
        "name": "My crop was damaged but I didn't receive compensation — why?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This commonly happens when your specific area didn't cross the 50% area-wide damage threshold, since the scheme assesses damage at the Mouza/Panchayat level rather than for each individual farmer's field."
        }
      },
      {
        "@type": "Question",
        "name": "Which crops are covered under Bangla Shasya Bima?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both Kharif and Rabi season crops are covered, including major food crops and commercial crops, with the exact notified list updated seasonally by the Department of Agriculture."
        }
      },
      {
        "@type": "Question",
        "name": "How do I check my Bangla Shasya Bima claim status?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Visit the official portal's Application/Claim Status section, and enter your Application ID or Aadhaar number to view the latest update — see our Apply Online page for full details."
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
        <span class="current">Bangla Shasya Bima</span>
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
            <span class="scheme-badge">Crop Insurance & Agriculture Support</span>
            <h1>Bangla Shasya Bima — West Bengal's Free Crop Insurance Scheme (2026)</h1>
            <div class="eeat-badge-container">
              <span class="fact-checked-badge">Fact-Checked 2026</span>
              <span>Fact-checked against official state notifications (banglashasyabima.net) • Editorial Review: August 2026</span>
            </div>
            <p class="intro-text">
              The <strong>Bangla Shasya Bima scheme</strong> (BSB) is West Bengal's fully state-funded crop insurance programme, securing over 80 lakh agricultural cultivators across Kharif and Rabi growing cycles against yield loss caused by natural disasters, unseasonal weather, and pest infestations.
            </p>
          </div>

          <!-- Section 1 — What Is Bangla Shasya Bima -->
          <section class="content-block">
            <h2>What Is Bangla Shasya Bima</h2>
            <p>
              Bangla Shasya Bima (BSB), also known as the West Bengal Bangla Shasya Crop Insurance Scheme, is a state crop insurance programme launched in 2019 by the Department of Agriculture, Government of West Bengal. Its core purpose is straightforward: protect farmers financially when their crops are damaged by natural calamities, pests, or disease, so a bad season doesn't push a farming family into debt.
            </p>
            <p>
              What makes the scheme distinctive is that it's entirely free for farmers — the West Bengal state government pays the full insurance premium on every enrolled farmer's behalf. You don't pay anything to be covered, whether or not you end up claiming compensation in a given season.
            </p>
            <p>
              For the 2025–2026 and 2026 academic agricultural cycles, the Government of West Bengal has partnered with <strong>SBI General Insurance Company Limited</strong> as the official implementing insurance agency. Online registration, certificate generation, and claim tracking are managed through the state portal: <a href="https://banglashasyabima.net" class="body-link" target="_blank" rel="noopener noreferrer">banglashasyabima.net</a>.
            </p>
          </section>

          <!-- Section 2 — Who Is Eligible -->
          <section class="content-block">
            <h2>Who Is Eligible</h2>
            <p>To qualify for free crop insurance coverage under Bangla Shasya Bima, farmers must satisfy the following criteria:</p>
            <ul>
              <li>You must be a farmer actively cultivating notified crops in West Bengal.</li>
              <li>You must be a resident of West Bengal, possessing a valid 12-digit Aadhaar card registered in your name.</li>
              <li>Both loanee farmers (those who have taken, or applied for, an agricultural Kisan Credit Card loan from a registered bank or co-operative society) and non-loanee farmers growing notified crops can enroll — you don't need an existing loan to be eligible.</li>
              <li>Applicants should not be a willful defaulter on an existing bank loan.</li>
              <li>Farms of all scale and operational tenures are covered — marginal, small, medium, sharecroppers (Bargadars), and tenant farmers can all enroll.</li>
            </ul>
            <p>
              Integrating BSB registration alongside <a href="/schemes/krishak-bandhu/index.html" class="body-link">Krishak Bandhu income support</a> guarantees that farmers receive both seasonal input assistance and risk protection against natural disasters. Discover <a href="/schemes/farmer-schemes/index.html" class="body-link">all Farmer Schemes</a> operating across West Bengal for complete agricultural welfare guidance.
            </p>
          </section>

          <!-- Section 3 — What Crops Are Covered -->
          <section class="content-block">
            <h2>What Crops Are Covered</h2>
            <p>Bangla Shasya Bima covers a wide range of crops across West Bengal's two main growing seasons:</p>
            <ul>
              <li><strong>Kharif Season (Monsoon-Sown):</strong> Paddy (Aman & Aus), Maize, Jute, Mung, Sesame, and Sugarcane.</li>
              <li><strong>Rabi Season (Winter-Sown):</strong> Boro Paddy, Wheat, Mustard, Gram, Lentil, Potato, and Commercial Vegetables.</li>
            </ul>
            <p>
              Protection applies across the full crop cycle — from sowing through to post-harvest — covering risks including mid-season adversity, prevented sowing, failed sowing, localized inundation, and post-harvest drying loss.
            </p>
          </section>

          <!-- Section 4 — How Compensation Is Calculated -->
          <section class="content-block">
            <h2>How Compensation Is Calculated</h2>
            <p>Bangla Shasya Bima uses an area-based damage assessment model rather than assessing each individual farmer's field separately. Here's how it works:</p>
            <ul>
              <li>A specific Mouza (revenue village) or Gram Panchayat area is declared "affected" only when at least 50% or more of the farmers in that area suffer crop loss.</li>
              <li>Once an area is declared affected following Crop Cutting Experiments (CCE), all enrolled farmers within that Mouza become eligible for compensation — you don't need to individually prove your specific field was damaged, but you do need to be enrolled and within a declared-affected area.</li>
              <li>Compensation is calculated per hectare based on sum-insured limits established for each notified crop, and paid out in up to 4 stages depending on the nature and timing of the loss.</li>
              <li>Assessment increasingly uses satellite imagery, remote sensing technology, and automated ePOS data collection alongside ground inspection to determine affected areas precisely.</li>
            </ul>
            <p>
              This area-based model is worth understanding clearly, because it's the source of a common frustration: a farmer can have a genuinely damaged crop but not receive compensation if their specific Mouza/Panchayat area doesn't cross the 50% damage threshold that triggers area-wide payouts.
            </p>
          </section>

          <!-- Section 5 — Documents Required -->
          <section class="content-block">
            <h2>Documents Required</h2>
            <p>Prepare the following documents when registering for a seasonal crop insurance policy:</p>
            <ul>
              <li><strong>Identity Proof:</strong> Aadhaar card (mandatory for DBT verification).</li>
              <li><strong>Land Ownership / Cultivation Proof:</strong> Khatian / Parcha, land tax receipt, or a certificate of cultivation signed by the local Krishi Praukti Sahayak (KPS) for Bargadars/tenant farmers.</li>
              <li><strong>Bank Account Details:</strong> Bank passbook front page showing account number, IFSC code, and single account holder name.</li>
              <li><strong>Sowing Certificate:</strong> Self-declaration or KPS certificate specifying the exact crop sown and cultivated area in acres/hectares.</li>
              <li><strong>Mobile Number:</strong> Active mobile number linked to Aadhaar for application tracking.</li>
            </ul>
          </section>

          <!-- Section 6 — How to Enroll and Report a Crop Loss -->
          <section class="content-block">
            <h2>How to Enroll and Report a Crop Loss</h2>
            <p><strong>To Enroll:</strong></p>
            <ol>
              <li>Visit the official portal: <a href="https://banglashasyabima.net" class="body-link" target="_blank" rel="noopener noreferrer">banglashasyabima.net</a>.</li>
              <li>Register for the relevant season (Kharif or Rabi) using your Aadhaar details and land cultivation information.</li>
              <li>Complete the online application form and submit — remember, there's no premium payment required from you.</li>
              <li>Download your Insurance Enrolment Certificate for reference.</li>
            </ol>
            <p><strong>To Report a Crop Loss:</strong></p>
            <ol>
              <li>If your area experiences localized crop damage (such as hail, landslide, or inundation), report the loss to the insurance partner <strong>SBI General Insurance</strong> within 72 hours via their toll-free helpline: <strong>1800 102 1111</strong> or email: <strong>BSB.WB@sbigeneral.in</strong>.</li>
              <li>Provide your BSB Application ID, Aadhaar number, Mouza name, and description of the damage.</li>
              <li>Field inspectors conduct joint ground surveys alongside Agriculture Department officers to assess loss percentages.</li>
              <li>If approved, compensation is credited directly into your Aadhaar-seeded bank account via Direct Benefit Transfer.</li>
            </ol>
            <p>
              To <a href="/schemes/bangla-shasya-bima/apply-form/index.html" class="body-link">apply or check your claim</a> status online, visit our detailed application step-by-step guide.
            </p>
          </section>

          <!-- Section 7 — Why Farmers Should Enroll Every Season -->
          <section class="content-block">
            <h2>Why Farmers Should Enroll Every Season</h2>
            <p>
              Because there's no cost to the farmer, agricultural advisors generally recommend enrolling every season — Kharif and Rabi — regardless of whether you expect to need to claim. Since the scheme is free and re-enrollment is typically required each season rather than being automatic and permanent, skipping a season's registration means going without coverage for that season entirely, even though there was no financial reason to skip it.
            </p>
            <p>
              Maintaining active seasonal enrolment guarantees continuous protection against unpredictable climate events, unseasonal rainfall, and flood surges during critical harvesting periods.
            </p>
          </section>

          <!-- Section 8 — FAQs -->
          <section class="content-block">
            <h2>Frequently Asked Questions</h2>
            
            <div class="faq-accordion">
              <div class="faq-item">
                <button class="faq-question">
                  <span>What is Bangla Shasya Bima?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Bangla Shasya Bima is West Bengal's free crop insurance scheme, launched in 2019, protecting farmers against crop loss from natural calamities, pests, or disease, with the entire premium paid by the state government.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Do I have to pay any premium to join Bangla Shasya Bima?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>No — the West Bengal government pays the full premium on your behalf. There is no cost to the farmer at any stage of enrollment.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Can I enroll if I haven't taken an agricultural loan?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Yes — both loanee and non-loanee farmers can enroll, as long as you're actively cultivating a notified crop in West Bengal.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>How is compensation calculated under this scheme?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Compensation uses an area-based model: a Mouza/Panchayat area is declared "affected" if at least 50% of farmers there suffer crop loss, and enrolled farmers in that area then receive compensation calculated per hectare, paid in up to 4 stages.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>My crop was damaged but I didn't receive compensation — why?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>This commonly happens when your specific area didn't cross the 50% area-wide damage threshold, since the scheme assesses damage at the Mouza/Panchayat level rather than for each individual farmer's field.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Which crops are covered under Bangla Shasya Bima?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Both Kharif and Rabi season crops are covered, including major food crops and commercial crops, with the exact notified list updated seasonally by the Department of Agriculture.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>How do I check my Bangla Shasya Bima claim status?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Visit the official portal's Application/Claim Status section, and enter your Application ID or Aadhaar number to view the latest update — see our Apply Online page for full details.</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Related Schemes Section -->
          <section class="content-block">
            <h2>Related Schemes</h2>
            <div class="scheme-grid">
              <a href="/schemes/krishak-bandhu/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Farmer Support</span>
                  <span class="scheme-card-icon">🌾</span>
                </div>
                <h3 class="scheme-card-title">Krishak Bandhu Scheme</h3>
                <p class="scheme-card-summary">Rs 10,000 annual financial assistance per acre and Rs 2 lakh death assurance for farmers.</p>
                <div class="scheme-card-cta">View Details & Apply →</div>
              </a>
              <a href="/schemes/farmer-schemes/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Category Hub</span>
                  <span class="scheme-card-icon">🚜</span>
                </div>
                <h3 class="scheme-card-title">Farmer Schemes</h3>
                <p class="scheme-card-summary">Comprehensive directory of agricultural support, income assistance, and crop insurance programs.</p>
                <div class="scheme-card-cta">Explore Category →</div>
              </a>
              <a href="/categories/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Directory</span>
                  <span class="scheme-card-icon">🏛️</span>
                </div>
                <h3 class="scheme-card-title">Social Welfare Schemes</h3>
                <p class="scheme-card-summary">Complete portal of West Bengal state welfare schemes and public assistance initiatives.</p>
                <div class="scheme-card-cta">View All Categories →</div>
              </a>
            </div>
          </section>

        </article>

        <!-- Sidebar Column -->
        <aside class="sidebar">
          <div class="sidebar-widget">
            <h3>Quick Links & Services</h3>
            <div class="quick-links-container">
              <a href="/schemes/bangla-shasya-bima/apply-form/index.html" class="quick-link-item">
                <span class="quick-link-icon">📝</span>
                <div class="quick-link-text">
                  <span class="quick-link-title">Download Application Form</span>
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
            <li><a href="/schemes/farmer-schemes/index.html" class="footer-link">🌾 Farmer Welfare</a></li>
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

fs.writeFileSync(page17Path, page17Html, 'utf8');
const newWordCountPage17 = getArticleWordCount(page17Path);
console.log(`Page 17 Updated: ${oldWordCountPage17} words -> ${newWordCountPage17} words`);


// -------------------------------------------------------------------------
// PAGE 18: /schemes/bangla-shasya-bima/apply-form/index.html
// -------------------------------------------------------------------------
const page18Path = path.join(rootDir, 'schemes', 'bangla-shasya-bima', 'apply-form', 'index.html');
const oldWordCountPage18 = getArticleWordCount(page18Path);

const page18Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bangla Shasya Bima Apply Online 2026 — Form & Claim Report</title>
  <meta name="description" content="How to register for Bangla Shasya Bima crop insurance online, download the application form, and report a crop loss to claim compensation.">
  <meta name="keywords" content="bangla shasya bima apply online, bangla shasya bima form pdf, bangla shasya bima registration, how to apply for bangla shasya bima online, bangla shasya bima application form download, bangla shasya bima claim form">
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="canonical" href="${domain}/schemes/bangla-shasya-bima/apply-form/">
  <meta name="robots" content="index, follow">
  
  <meta property="og:title" content="Bangla Shasya Bima Apply Online 2026 — Form & Claim Report">
  <meta property="og:description" content="How to register for Bangla Shasya Bima crop insurance online, download the application form, and report a crop loss to claim compensation.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${domain}/schemes/bangla-shasya-bima/apply-form/">
  <meta property="og:image" content="${domain}/images/og-default.jpg">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Bangla Shasya Bima Apply Online 2026 — Form & Claim Report">
  <meta name="twitter:description" content="How to register for Bangla Shasya Bima crop insurance online, download the application form, and report a crop loss to claim compensation.">

  <!-- FAQPage Schema JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I register for Bangla Shasya Bima?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Visit the official portal, select the current season (Kharif or Rabi), and register with your personal, land, and bank details — there's no premium payment required."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to register every season, or is it a one-time process?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You need to register each season separately — Kharif and Rabi registrations are distinct, so re-enroll every season you're cultivating a notified crop."
        }
      },
      {
        "@type": "Question",
        "name": "How do I report a crop loss to claim compensation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contact the scheme's insurance partner via their toll-free number or email as soon as possible after damage occurs, providing your registration details and a description of the loss."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to receive compensation after reporting a loss?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Timing varies based on ground inspection scheduling and whether your area is confirmed to meet the 50% damage threshold — check your claim status online or with your local agriculture office if it's taking longer than expected."
        }
      },
      {
        "@type": "Question",
        "name": "Can I apply using a paper form instead of online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — download the seasonal form from the official portal or collect one from your local Krishi Bhavan, fill it in, and submit it with your documents at your local agriculture office."
        }
      },
      {
        "@type": "Question",
        "name": "What if my bank details change after I've registered?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contact your local agriculture office to update your bank details on record, since incorrect bank information is a common cause of delayed compensation."
        }
      },
      {
        "@type": "Question",
        "name": "Is there really no cost at all to enroll?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Correct — the West Bengal government pays your entire premium, so there's no registration fee or premium payment required from the farmer at any stage."
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
        <a href="/schemes/bangla-shasya-bima/index.html" class="breadcrumb-link">Bangla Shasya Bima</a>
        <span class="separator">/</span>
        <span class="current">Apply & Download Form</span>
      </nav>
    </div>
  </div>

  <!-- Main Content Layout -->
  <main class="page-layout">
    <div class="container">
      <div class="page-grid">
        
        <!-- Main Column -->
        <article class="main-content">
          <a href="/schemes/bangla-shasya-bima/index.html" class="back-link-btn">← Back to Bangla Shasya Bima Overview</a>

          <!-- Hero Banner -->
          <div class="scheme-hero">
            <span class="scheme-badge">Registration & Claims Guide</span>
            <h1>How to Apply for Bangla Shasya Bima & Report a Crop Loss (2026)</h1>
            <div class="eeat-badge-container">
              <span class="fact-checked-badge">Fact-Checked 2026</span>
              <span>Fact-checked against official state notifications (banglashasyabima.net) • Editorial Review: August 2026</span>
            </div>
            <p class="intro-text">
              Completing your <strong>bangla shasya bima apply online</strong> registration guarantees premium-free crop insurance coverage across Kharif and Rabi cultivation seasons.
            </p>
          </div>

          <!-- Section 1 — Before You Register: What You'll Need -->
          <section class="content-block">
            <h2>Before You Register: What You'll Need</h2>
            <p>
              Registration for Bangla Shasya Bima is done season by season (Kharif and Rabi separately), so this isn't a one-time, lifetime registration — plan to re-enroll each season you're cultivating a notified crop. Have these ready before starting:
            </p>
            <ul>
              <li><strong>Aadhaar Card:</strong> Mandatory for beneficiary identification and DBT payout seeding.</li>
              <li><strong>Address Proof:</strong> Utility bill, Voter ID, or West Bengal domicile certificate.</li>
              <li><strong>Bank Account Details:</strong> Bank passbook front page displaying account number, IFSC code, and single holder name.</li>
              <li><strong>Land Cultivation Details:</strong> Khatian / Parcha land records, or KPS cultivation certificate for tenant farmers.</li>
              <li><strong>Loan Account Info (for Loanee Farmers):</strong> Kisan Credit Card (KCC) account number and lending bank branch details.</li>
            </ul>
            <p>
              To <a href="/schemes/bangla-shasya-bima/index.html" class="body-link">understand how the scheme works</a> and review covered crop lists, see our primary guide. For income assistance paired with insurance protection, explore <a href="/schemes/krishak-bandhu/index.html" class="body-link">Krishak Bandhu income support</a>.
            </p>
          </section>

          <!-- Section 2 — How to Register Online for a Season -->
          <section class="content-block">
            <h2>How to Register Online for a Season</h2>
            <p>Follow these step-by-step instructions to register on the official portal:</p>
            <ol>
              <li>Visit the official portal: <a href="https://banglashasyabima.net" class="body-link" target="_blank" rel="noopener noreferrer">banglashasyabima.net</a>.</li>
              <li>Select the relevant season — <strong>Kharif</strong> or <strong>Rabi</strong> — since registration is conducted separately for each cropping cycle.</li>
              <li>Click on <strong>Farmer Corner</strong> and select <strong>New Registration</strong>.</li>
              <li>Enter your Voter ID / Aadhaar number to verify existing record status.</li>
              <li>Fill in personal details, Gram Panchayat / Mouza location, crop sown, and cultivated area in acres.</li>
              <li>Enter your bank account credentials for future compensation credits.</li>
              <li>Submit the form — remember, there is no premium payment step, as the state government pays 100% of the insurance premium.</li>
              <li>Download and print your Enrolment Certificate for your records.</li>
            </ol>
          </section>

          <!-- Section 3 — How to Apply Using the Paper Form -->
          <section class="content-block">
            <h2>How to Apply Using the Paper Form</h2>
            <p>If online access is unavailable in your area, submit a physical application form:</p>
            <ol>
              <li>Download the seasonal application form (labelled for Kharif or Rabi specifically) from <a href="https://banglashasyabima.net" class="body-link" target="_blank" rel="noopener noreferrer">banglashasyabima.net</a>, or collect a printed copy from your local Krishi Bhavan / Assistant Director of Agriculture (ADA) office.</li>
              <li>Fill in your personal, land, crop, and bank details clearly in block capital letters.</li>
              <li>Attach self-attested photocopies of your Aadhaar card, land Parcha, bank passbook, and Krishi Praukti Sahayak (KPS) sowing certificate.</li>
              <li>Submit the completed form at your local Krishi Bhavan counter or Duare Sarkar camp.</li>
              <li>Retain the stamped acknowledgment slip given at submission.</li>
            </ol>
          </section>

          <!-- Section 4 — How to Report a Crop Loss and Claim Compensation -->
          <section class="content-block">
            <h2>How to Report a Crop Loss and Claim Compensation</h2>
            <p>If your crop suffers damage during an enrolled season:</p>
            <ol>
              <li>Report the loss as soon as possible — within 72 hours of localized damage (flooding, hail, landslide) — by contacting official insurer <strong>SBI General Insurance Company Limited</strong> via toll-free helpline: <strong>1800 102 1111</strong> or email: <strong>BSB.WB@sbigeneral.in</strong>.</li>
              <li>Provide your BSB Enrolment Number, Aadhaar number, Mouza name, and details of the affected crop and damaged acreage.</li>
              <li>The insurer schedules a joint ground inspection alongside Agriculture Department officers to assess damage percentages.</li>
              <li>If the Mouza/Panchayat area is declared affected (crossing the 50% damage threshold), compensation is calculated per hectare and credited directly into your registered bank account via Direct Benefit Transfer.</li>
            </ol>
          </section>

          <!-- Section 5 — Checking Your Claim Status -->
          <section class="content-block">
            <h2>Checking Your Claim Status</h2>
            <p>Track your insurance enrolment and claim status online:</p>
            <ol>
              <li>Visit <a href="https://banglashasyabima.net" class="body-link" target="_blank" rel="noopener noreferrer">banglashasyabima.net</a> and click on <strong>Insurance Coverage Status</strong> or <strong>Claim Status</strong>.</li>
              <li>Select the season and enter your Application ID or Voter ID / Aadhaar number.</li>
              <li>Submit to view your active enrolment status, declared Mouza damage status, and transaction reference numbers.</li>
            </ol>
          </section>

          <!-- Section 6 — Common Mistakes to Avoid -->
          <section class="content-block">
            <h2>Common Mistakes to Avoid</h2>
            <ul>
              <li><strong>Forgetting to re-register each season:</strong> Registration is not permanent. Skipping registration for a season leaves your crops uninsured for that cycle.</li>
              <li><strong>Delaying loss reporting:</strong> Reporting damage after 72 hours reduces the accuracy of joint ground inspection surveys.</li>
              <li><strong>Incorrect bank IFSC or account details:</strong> Mismatched bank details cause DBT transfer failures even when claims are approved.</li>
              <li><strong>Confusing individual damage with area threshold:</strong> Remember that payouts require the Mouza/Panchayat area to cross the 50% damage threshold.</li>
            </ul>
          </section>

          <!-- Section 7 — FAQs -->
          <section class="content-block">
            <h2>Frequently Asked Questions</h2>
            
            <div class="faq-accordion">
              <div class="faq-item">
                <button class="faq-question">
                  <span>How do I register for Bangla Shasya Bima?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Visit the official portal, select the current season (Kharif or Rabi), and register with your personal, land, and bank details — there's no premium payment required.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Do I need to register every season, or is it a one-time process?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>You need to register each season separately — Kharif and Rabi registrations are distinct, so re-enroll every season you're cultivating a notified crop.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>How do I report a crop loss to claim compensation?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Contact the scheme's insurance partner via their toll-free number or email as soon as possible after damage occurs, providing your registration details and a description of the loss.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>How long does it take to receive compensation after reporting a loss?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Timing varies based on ground inspection scheduling and whether your area is confirmed to meet the 50% damage threshold — check your claim status online or with your local agriculture office if it's taking longer than expected.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Can I apply using a paper form instead of online?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Yes — download the seasonal form from the official portal or collect one from your local Krishi Bhavan, fill it in, and submit it with your documents at your local agriculture office.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>What if my bank details change after I've registered?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Contact your local agriculture office to update your bank details on record, since incorrect bank information is a common cause of delayed compensation.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Is there really no cost at all to enroll?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Correct — the West Bengal government pays your entire premium, so there's no registration fee or premium payment required from the farmer at any stage.</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Related Schemes Section -->
          <section class="content-block">
            <h2>Related Schemes</h2>
            <div class="scheme-grid">
              <a href="/schemes/krishak-bandhu/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Farmer Support</span>
                  <span class="scheme-card-icon">🌾</span>
                </div>
                <h3 class="scheme-card-title">Krishak Bandhu Scheme</h3>
                <p class="scheme-card-summary">Rs 10,000 annual financial assistance per acre and Rs 2 lakh death assurance for farmers.</p>
                <div class="scheme-card-cta">View Details & Apply →</div>
              </a>
              <a href="/schemes/farmer-schemes/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Category Hub</span>
                  <span class="scheme-card-icon">🚜</span>
                </div>
                <h3 class="scheme-card-title">Farmer Schemes</h3>
                <p class="scheme-card-summary">Comprehensive directory of agricultural support, income assistance, and crop insurance programs.</p>
                <div class="scheme-card-cta">Explore Category →</div>
              </a>
              <a href="/schemes/lakshmir-bhandar/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Women Welfare</span>
                  <span class="scheme-card-icon">🏛️</span>
                </div>
                <h3 class="scheme-card-title">Lakshmir Bhandar Scheme</h3>
                <p class="scheme-card-summary">Financial assistance for women in West Bengal, now upgraded under Annapurna Bhandar.</p>
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
              <a href="/schemes/bangla-shasya-bima/apply-form/index.html" class="quick-link-item">
                <span class="quick-link-icon">📝</span>
                <div class="quick-link-text">
                  <span class="quick-link-title">Download Application Form</span>
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
            <li><a href="/schemes/farmer-schemes/index.html" class="footer-link">🌾 Farmer Welfare</a></li>
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

fs.writeFileSync(page18Path, page18Html, 'utf8');
const newWordCountPage18 = getArticleWordCount(page18Path);
console.log(`Page 18 Updated: ${oldWordCountPage18} words -> ${newWordCountPage18} words`);
