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
// PAGE 15: /schemes/lakshmir-bhandar/index.html
// -------------------------------------------------------------------------
const page15Path = path.join(rootDir, 'schemes', 'lakshmir-bhandar', 'index.html');
const oldWordCountPage15 = getArticleWordCount(page15Path);

const page15Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lakshmir Bhandar / Annapurna Bhandar 2026 — Amount & Status</title>
  <meta name="description" content="Lakshmir Bhandar is now Annapurna Bhandar — new amount, eligibility, and what existing beneficiaries need to know about the 2026 West Bengal transition.">
  <meta name="keywords" content="lakshmir bhandar scheme, lakshmir bhandar west bengal, lakshmir bhandar yojana, lakshmir bhandar amount, what is lakshmir bhandar scheme, lakshmir bhandar eligibility criteria, lakshmir bhandar monthly amount details">
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="canonical" href="${domain}/schemes/lakshmir-bhandar/">
  <meta name="robots" content="index, follow">
  
  <meta property="og:title" content="Lakshmir Bhandar / Annapurna Bhandar 2026 — Amount & Status">
  <meta property="og:description" content="Lakshmir Bhandar is now Annapurna Bhandar — new amount, eligibility, and what existing beneficiaries need to know about the 2026 West Bengal transition.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${domain}/schemes/lakshmir-bhandar/">
  <meta property="og:image" content="${domain}/images/og-default.jpg">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Lakshmir Bhandar / Annapurna Bhandar 2026 — Amount & Status">
  <meta name="twitter:description" content="Lakshmir Bhandar is now Annapurna Bhandar — new amount, eligibility, and what existing beneficiaries need to know about the 2026 West Bengal transition.">

  <!-- FAQPage Schema JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Lakshmir Bhandar still active, or has it changed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lakshmir Bhandar is being replaced by a new scheme, Annapurna Bhandar, effective from 1 June 2026, with a higher monthly benefit. Existing beneficiaries are expected to be automatically migrated."
        }
      },
      {
        "@type": "Question",
        "name": "How much money will I get under Annapurna Bhandar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The announced amount is ₹3,000 per month, up from Lakshmir Bhandar's previous ₹1,500 (General) / ₹1,700 (SC/ST) — confirm this has fully rolled out for your household via the official portal."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to reapply if I already receive Lakshmir Bhandar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most existing beneficiaries are expected to be automatically migrated, generally needing only a simple e-KYC verification rather than a completely fresh application — but it's worth actively confirming your status rather than assuming."
        }
      },
      {
        "@type": "Question",
        "name": "My payment stopped around mid-2026 — why?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This is commonly linked to the migration verification audit rather than a permanent loss of eligibility. Check your status directly and follow up at your local office if you believe there's an error."
        }
      },
      {
        "@type": "Question",
        "name": "What's the age eligibility for Annapurna Bhandar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The confirmed age criteria covers women aged 25 to 60 years who meet the residence and non-employment conditions."
        }
      },
      {
        "@type": "Question",
        "name": "Where do I check my application or payment status now?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use socialregistry.wb.gov.in — see our Status Check guide for the full step-by-step process."
        }
      },
      {
        "@type": "Question",
        "name": "What happened to the Swasthya Sathi enrollment requirement for this scheme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Since Swasthya Sathi has itself transitioned to Ayushman Bharat, this specific eligibility link may have changed too — confirm current requirements directly with the portal rather than relying on the old rule."
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
        <span class="current">Lakshmir Bhandar Scheme</span>
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
            <span class="scheme-badge">Women Welfare & Financial Assistance</span>
            <h1>Lakshmir Bhandar Scheme — Now Annapurna Bhandar (2026 Update)</h1>
            <div class="eeat-badge-container">
              <span class="fact-checked-badge">Fact-Checked 2026</span>
              <span>Fact-checked against official state notifications (socialregistry.wb.gov.in) • Editorial Review: August 2026</span>
            </div>
            <p class="intro-text">
              The <strong>Lakshmir Bhandar scheme</strong>, West Bengal's flagship direct benefit cash transfer initiative for adult female residents, has been officially restructured as <strong>Annapurna Bhandar</strong> starting June 2026.
            </p>
          </div>

          <!-- Section 1 — Important Update: Lakshmir Bhandar Has Become Annapurna Bhandar (Callout Box) -->
          <section class="content-block">
            <div style="background: #fff7ed; border-left: 5px solid #f97316; padding: 20px; border-radius: 8px; margin-bottom: 24px; color: #9a3412;">
              <h2 style="font-size: 20px; margin-top: 0; margin-bottom: 12px; color: #9a3412;">Important Update: Lakshmir Bhandar Has Become Annapurna Bhandar</h2>
              <p style="margin-bottom: 12px; line-height: 1.6;">
                Following the May 2026 West Bengal Assembly elections, the state government announced that Lakshmir Bhandar is being replaced by a new scheme called <strong>Annapurna Bhandar</strong>, effective from 1 June 2026. If you're searching for "Lakshmir Bhandar," this is the primary update you need — the scheme name has changed, and so has the monthly benefit amount.
              </p>
              <p style="margin-bottom: 12px; font-weight: 600;">Key points about the 2026 transition:</p>
              <ul style="padding-left: 20px; margin-bottom: 12px; line-height: 1.6;">
                <li><strong>Monthly Benefit Increase:</strong> The monthly benefit is set to rise to <strong>₹3,000 per month</strong> per eligible woman, replacing Lakshmir Bhandar's earlier split of ₹1,500 (General) and ₹1,700 (SC/ST).</li>
                <li><strong>Automatic Migration:</strong> Existing Lakshmir Bhandar beneficiaries are expected to be automatically migrated to Annapurna Bhandar, generally without needing to file a completely fresh application — though a simple e-KYC verification step may be required.</li>
                <li><strong>New Official Portal:</strong> The scheme is now managed through the state's unified Social Registry platform: <a href="https://socialregistry.wb.gov.in" class="body-link" target="_blank" rel="noopener noreferrer">socialregistry.wb.gov.in</a>.</li>
                <li><strong>Age Eligibility:</strong> Confirmed age eligibility remains set between <strong>25 and 60 years</strong> of age for qualifying female heads of households.</li>
              </ul>
              <p style="margin-bottom: 0; font-size: 14px;">
                The rest of this page explains what the original Lakshmir Bhandar scheme covered (useful context for existing beneficiaries checking payment history) and what actions you should take right now under the new system.
              </p>
            </div>
          </section>

          <!-- Section 2 — What Lakshmir Bhandar Originally Offered -->
          <section class="content-block">
            <h2>What Lakshmir Bhandar Originally Offered</h2>
            <p>
              Lakshmir Bhandar was launched in February 2021 as West Bengal's flagship monthly cash transfer scheme for women, quickly becoming one of the largest women-targeted direct benefit transfer (DBT) programmes in India — at its peak, roughly 2.2 crore women were enrolled state-wide. It provided:
            </p>
            <ul>
              <li><strong>₹1,500 per month</strong> to women from General category households.</li>
              <li><strong>₹1,700 per month</strong> to women from Scheduled Caste (SC) and Scheduled Tribe (ST) category households.</li>
              <li>Direct Benefit Transfer (DBT) payments directly credited into the beneficiary's single Aadhaar-linked bank account, typically during the first week of each month.</li>
            </ul>
            <p>
              The original scheme required beneficiaries to be enrolled under Swasthya Sathi (West Bengal's state health insurance scheme), be a permanent female resident of the state, and meet income-related exclusion criteria — for example, households with an income-tax-paying member, or owning more than 2 hectares of agricultural land, were generally excluded from General-category eligibility.
            </p>
            <p>
              Given that Swasthya Sathi has itself undergone major structural updates under the <a href="/schemes/swasthya-sathi/index.html" class="body-link">Swasthya Sathi / Ayushman Bharat transition</a>, this Swasthya-Sathi-enrollment requirement is one more area worth checking directly on the current portal, as the underlying referenced health scheme has evolved.
            </p>
          </section>

          <!-- Section 3 — Eligibility Under the New Scheme -->
          <section class="content-block">
            <h2>Eligibility Under the New Scheme</h2>
            <p>Based on official guidelines for the ongoing Annapurna Bhandar rollout:</p>
            <ul>
              <li><strong>Gender & Residence:</strong> Must be a permanent female resident (domicile) of West Bengal.</li>
              <li><strong>Age Criteria:</strong> Must be between <strong>25 and 60 years</strong> of age. Upon reaching 60 years, beneficiaries transition automatically to state elderly social security pensions.</li>
              <li><strong>Employment Exclusion:</strong> Must not be a current or retired government employee (central or state), and not employed in a government undertaking, statutory body, municipality, panchayat, or government-aided institution drawing a regular salary or pension.</li>
              <li><strong>Tax & Income Exclusions:</strong> Income-tax-paying households and families owning more than 2 hectares of agricultural land remain excluded from General category financial support.</li>
              <li><strong>Bank Account Requirement:</strong> Must possess an active single-operated bank account linked to Aadhaar for Direct Benefit Transfer (DBT). Joint bank accounts are not permitted for security compliance.</li>
            </ul>
            <p>
              You can explore <a href="/schemes/women-welfare/index.html" class="body-link">all Women Welfare schemes</a> in West Bengal to review complementary financial, educational, and social security benefits available to women.
            </p>
          </section>

          <!-- Section 4 — What Existing Beneficiaries Need to Do -->
          <section class="content-block">
            <h2>What Existing Beneficiaries Need to Do</h2>
            <p>If you were already receiving Lakshmir Bhandar monthly transfers prior to June 2026:</p>
            <ol>
              <li><strong>Check Migration Status:</strong> Visit <a href="https://socialregistry.wb.gov.in" class="body-link" target="_blank" rel="noopener noreferrer">socialregistry.wb.gov.in</a> and select "Track Applicant Status" using your registered mobile number or Aadhaar number — do not assume migration has occurred without verifying on screen. Be sure to <a href="/schemes/lakshmir-bhandar/status-check/index.html" class="body-link">check your payment status</a> for detailed instructions.</li>
              <li><strong>Complete e-KYC Verification:</strong> If prompted on the portal, complete biometric or mobile OTP e-KYC verification to confirm active bank seeding before the revised ₹3,000 disbursement begins.</li>
              <li><strong>Verify Bank Account Seeding:</strong> Ensure your bank account remains seeded with the National Payments Corporation of India (NPCI) mapper for Aadhaar Direct Benefit Transfer.</li>
              <li><strong>Monitor Payment Credits:</strong> If payments pause during the audit phase, review Section 6 below to resolve potential verification flags.</li>
            </ol>
          </section>

          <!-- Section 5 — How to Apply If You're Not Yet Enrolled -->
          <section class="content-block">
            <h2>How to Apply If You're Not Yet Enrolled</h2>
            <p><strong>Online Application Procedure:</strong></p>
            <ol>
              <li>Visit the official portal: <a href="https://socialregistry.wb.gov.in" class="body-link" target="_blank" rel="noopener noreferrer">socialregistry.wb.gov.in</a>.</li>
              <li>Click on <strong>New Applicant Registration</strong> under the Citizen Services tab.</li>
              <li>Enter your active 10-digit mobile number and authenticate using the received OTP.</li>
              <li>Fill in personal details, Aadhaar number, district, Gram Panchayat / Ward, and single bank account credentials (IFSC and account number).</li>
              <li>Upload scanned copies of your Aadhaar card, bank passbook front page, and caste certificate (if applying under SC/ST quota).</li>
              <li>Submit the form and record your generated Application Reference Number for online tracking.</li>
            </ol>
            <p><strong>Offline Application Procedure:</strong></p>
            <ol>
              <li>Visit your nearest Duare Sarkar outreach camp, Block Development Office (BDO), or Municipal Office.</li>
              <li>Collect the physical Annapurna Bhandar application form free of charge.</li>
              <li>Fill in the form in block capital letters and attach self-attested photocopies of your Aadhaar card, bank passbook, and SC/ST certificate (if applicable).</li>
              <li>Submit the form at the designated counter and obtain a stamped acknowledgment receipt containing your registration ID.</li>
            </ol>
          </section>

          <!-- Section 6 — What If Your Payment Stopped -->
          <section class="content-block">
            <h2>What If Your Payment Stopped</h2>
            <p>
              If your monthly cash transfer stopped around the mid-2026 transition period, it is frequently due to administrative migration verification rather than permanent disqualification:
            </p>
            <ul>
              <li><strong>Migration Audit Pause:</strong> State treasury systems audit accounts during batch migration to verify Aadhaar-bank NPCI seeding. Accounts with minor name spelling discrepancies are placed on temporary review.</li>
              <li><strong>Age Transition:</strong> Beneficiaries turning 60 years old automatically age out of Annapurna Bhandar and become eligible for senior citizen pension programs such as Jai Johar or the Old Age Allowance.</li>
              <li><strong>Ineligible Exclusion Flag:</strong> Accounts flagged for government employment, pension receipt, or income tax filings are removed following audit cross-checks.</li>
            </ul>
            <p>
              Visit your local BDO or Municipal office with your Aadhaar card and bank passbook to submit a physical re-verification claim if your online status indicates a pending hold.
            </p>
          </section>

          <!-- Section 7 — FAQs -->
          <section class="content-block">
            <h2>Frequently Asked Questions</h2>
            
            <div class="faq-accordion">
              <div class="faq-item">
                <button class="faq-question">
                  <span>Is Lakshmir Bhandar still active, or has it changed?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Lakshmir Bhandar is being replaced by a new scheme, Annapurna Bhandar, effective from 1 June 2026, with a higher monthly benefit. Existing beneficiaries are expected to be automatically migrated.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>How much money will I get under Annapurna Bhandar?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>The announced amount is ₹3,000 per month, up from Lakshmir Bhandar's previous ₹1,500 (General) / ₹1,700 (SC/ST) — confirm this has fully rolled out for your household via the official portal.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Do I need to reapply if I already receive Lakshmir Bhandar?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Most existing beneficiaries are expected to be automatically migrated, generally needing only a simple e-KYC verification rather than a completely fresh application — but it's worth actively confirming your status rather than assuming.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>My payment stopped around mid-2026 — why?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>This is commonly linked to the migration verification audit rather than a permanent loss of eligibility. Check your status directly and follow up at your local office if you believe there's an error.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>What's the age eligibility for Annapurna Bhandar?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>The confirmed age criteria covers women aged 25 to 60 years who meet the residence and non-employment conditions.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Where do I check my application or payment status now?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Use socialregistry.wb.gov.in — see our Status Check guide for the full step-by-step process.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>What happened to the Swasthya Sathi enrollment requirement for this scheme?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Since Swasthya Sathi has itself transitioned to Ayushman Bharat, this specific eligibility link may have changed too — confirm current requirements directly with the portal rather than relying on the old rule.</p>
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
                  <span class="scheme-card-badge">Girls Education</span>
                  <span class="scheme-card-icon">🎓</span>
                </div>
                <h3 class="scheme-card-title">Kanyashree Prakalpa</h3>
                <p class="scheme-card-summary">Financial support and annual stipends to encourage girls' education and prevent early marriage in West Bengal.</p>
                <div class="scheme-card-cta">View Details & Apply →</div>
              </a>
              <a href="/schemes/rupashree-prakalpa/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Marriage Assistance</span>
                  <span class="scheme-card-icon">💍</span>
                </div>
                <h3 class="scheme-card-title">Rupashree Prakalpa</h3>
                <p class="scheme-card-summary">One-time financial grant of Rs 25,000 to economically stressed families for adult daughters' marriage costs.</p>
                <div class="scheme-card-cta">View Details & Apply →</div>
              </a>
              <a href="/schemes/women-welfare/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Category Hub</span>
                  <span class="scheme-card-icon">👩</span>
                </div>
                <h3 class="scheme-card-title">Women Welfare Schemes</h3>
                <p class="scheme-card-summary">Comprehensive directory of financial empowerment, health, and social security programs for women.</p>
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
              <a href="/schemes/lakshmir-bhandar/status-check/index.html" class="quick-link-item">
                <span class="quick-link-icon">🔍</span>
                <div class="quick-link-text">
                  <span class="quick-link-title">Track Application Status</span>
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
            <li><a href="/schemes/women-welfare/index.html" class="footer-link">👩 Women Empowerment</a></li>
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

fs.writeFileSync(page15Path, page15Html, 'utf8');
const newWordCountPage15 = getArticleWordCount(page15Path);
console.log(`Page 15 Updated: ${oldWordCountPage15} words -> ${newWordCountPage15} words`);


// -------------------------------------------------------------------------
// PAGE 16: /schemes/lakshmir-bhandar/status-check/index.html
// -------------------------------------------------------------------------
const page16Path = path.join(rootDir, 'schemes', 'lakshmir-bhandar', 'status-check', 'index.html');
const oldWordCountPage16 = getArticleWordCount(page16Path);

const page16Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lakshmir Bhandar Status Check 2026 — Track Payment Online</title>
  <meta name="description" content="Check your Lakshmir Bhandar / Annapurna Bhandar payment status online at socialregistry.wb.gov.in, and what to do if your payment stopped.">
  <meta name="keywords" content="lakshmir bhandar status check, lakshmir bhandar payment status, lakshmir bhandar application status, how to check lakshmir bhandar status online, lakshmir bhandar status by application number, lakshmir bhandar payment not received">
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="canonical" href="${domain}/schemes/lakshmir-bhandar/status-check/">
  <meta name="robots" content="index, follow">
  
  <meta property="og:title" content="Lakshmir Bhandar Status Check 2026 — Track Payment Online">
  <meta property="og:description" content="Check your Lakshmir Bhandar / Annapurna Bhandar payment status online at socialregistry.wb.gov.in, and what to do if your payment stopped.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${domain}/schemes/lakshmir-bhandar/status-check/">
  <meta property="og:image" content="${domain}/images/og-default.jpg">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Lakshmir Bhandar Status Check 2026 — Track Payment Online">
  <meta name="twitter:description" content="Check your Lakshmir Bhandar / Annapurna Bhandar payment status online at socialregistry.wb.gov.in, and what to do if your payment stopped.">

  <!-- FAQPage Schema JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I check my Lakshmir Bhandar / Annapurna Bhandar status?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Visit socialregistry.wb.gov.in, select your district, enter your registered mobile number, verify with the OTP sent to you, and your current status will display."
        }
      },
      {
        "@type": "Question",
        "name": "My status shows 'Pending e-KYC' — what should I do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This means you likely need to complete a verification step before your migrated registration becomes fully active — check the portal for specific next steps, or visit your local office if unclear."
        }
      },
      {
        "@type": "Question",
        "name": "My payment has stopped — have I lost eligibility?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not necessarily. Many paused payments are linked to the migration audit rather than a permanent loss of eligibility — check your status and follow up locally if it remains unclear."
        }
      },
      {
        "@type": "Question",
        "name": "I'm over 60 — will I still get Annapurna Bhandar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The confirmed upper age limit for the new scheme should be checked directly on the official portal; if you're outside the eligible range, ask about alternative programmes like Jai Johar or the state's Old Age Allowance."
        }
      },
      {
        "@type": "Question",
        "name": "The portal shows 'Not Found' for my mobile number — why?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This usually means either a details mismatch or that your prior registration wasn't automatically carried over during migration — visiting your local office with your original registration details is the fastest way to resolve this."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I check my status?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Checking every few weeks during this transition period is reasonable; there's no need to check daily, since updates happen in review batches rather than continuously."
        }
      },
      {
        "@type": "Question",
        "name": "Who can I contact if the online status check doesn't resolve my issue?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your nearest Duare Sarkar camp or municipal/Panchayat office can look up your specific household record directly, which is generally faster than relying solely on the online portal during this transition period."
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
        <a href="/schemes/lakshmir-bhandar/index.html" class="breadcrumb-link">Lakshmir Bhandar Scheme</a>
        <span class="separator">/</span>
        <span class="current">Status Check</span>
      </nav>
    </div>
  </div>

  <!-- Main Content Layout -->
  <main class="page-layout">
    <div class="container">
      <div class="page-grid">
        
        <!-- Main Column -->
        <article class="main-content">
          <a href="/schemes/lakshmir-bhandar/index.html" class="back-link-btn">← Back to Lakshmir Bhandar Overview</a>

          <!-- Hero Banner -->
          <div class="scheme-hero">
            <span class="scheme-badge">Status & Payment Tracking</span>
            <h1>Lakshmir Bhandar Status Check — Track Your Payment (2026)</h1>
            <div class="eeat-badge-container">
              <span class="fact-checked-badge">Fact-Checked 2026</span>
              <span>Fact-checked against official state notifications (socialregistry.wb.gov.in) • Editorial Review: August 2026</span>
            </div>
            <p class="intro-text">
              Tracking your <strong>lakshmir bhandar status check</strong> online allows you to monitor monthly payment transfers, confirm your Annapurna Bhandar migration status, and resolve Direct Benefit Transfer (DBT) verification issues.
            </p>
          </div>

          <!-- Section 1 — Before You Start: Which Portal to Use -->
          <section class="content-block">
            <h2>Before You Start: Which Portal to Use</h2>
            <p>
              Status checking for this scheme now happens through <a href="https://socialregistry.wb.gov.in" class="body-link" target="_blank" rel="noopener noreferrer">socialregistry.wb.gov.in</a>, the newer Social Registry portal introduced alongside the transition from Lakshmir Bhandar to Annapurna Bhandar. If you have an old bookmark for a different portal from before the transition, use the current link above instead, since older URLs may no longer reflect your latest status.
            </p>
            <p>
              To <a href="/schemes/lakshmir-bhandar/index.html" class="body-link">understand the Annapurna Bhandar transition</a> and updated monthly benefits, review our primary scheme guide. For information on health card linkages under state healthcare initiatives, see our <a href="/schemes/swasthya-sathi/index.html" class="body-link">Swasthya Sathi / Ayushman Bharat update</a> guide.
            </p>
          </section>

          <!-- Section 2 — How to Check Your Status, Step by Step -->
          <section class="content-block">
            <h2>How to Check Your Status, Step by Step</h2>
            <p>Follow these instructions to check your registration and payment status online:</p>
            <ol>
              <li>Visit the official portal: <a href="https://socialregistry.wb.gov.in" class="body-link" target="_blank" rel="noopener noreferrer">socialregistry.wb.gov.in</a> (or navigate to the citizen-facing tracking section).</li>
              <li>Select your district from the dropdown list.</li>
              <li>Enter your registered mobile number, Aadhaar number, or Application Reference ID.</li>
              <li>Click on <strong>Get OTP</strong> and enter the 6-digit verification code sent to your registered mobile phone.</li>
              <li>Your beneficiary status card will display on screen, showing your current registration state, migration status under Annapurna Bhandar, and recent DBT payment credit history.</li>
            </ol>
            <p>
              If you have an application/reference number from a more recent application (rather than being an older, migrated beneficiary), you can also search using that number directly.
            </p>
          </section>

          <!-- Section 3 — Understanding Your Status Result -->
          <section class="content-block">
            <h2>Understanding Your Status Result</h2>
            <p>The online tracking system displays four primary status indicators:</p>
            <ul>
              <li><strong>Active / Verified:</strong> Your registration is confirmed and payments are processing under the current scheme (Annapurna Bhandar) as expected.</li>
              <li><strong>Pending e-KYC:</strong> You need to complete a verification step before your migrated registration is fully active — check the portal for specific instructions or visit your local BDO office.</li>
              <li><strong>Under Review / Flagged:</strong> Your account has been selected for closer checking as part of the migration audit. This does not necessarily mean you've lost eligibility, but it means payments may be paused until review completes.</li>
              <li><strong>Not Found:</strong> This indicates either a search-detail mismatch (double-check your mobile number or Aadhaar digits), or that your original registration was not carried over — in this case, visiting your local office is the fastest way to clarify your situation.</li>
            </ul>
          </section>

          <!-- Section 4 — If Your Payment Stopped or Changed -->
          <section class="content-block">
            <h2>If Your Payment Stopped or Changed</h2>
            <p>Given the scale of this transition, a stopped or changed payment does not automatically mean you have lost eligibility. Common, resolvable reasons include:</p>
            <ul>
              <li><strong>Migration Audit Flag:</strong> Accounts are being systematically reviewed during the shift from Lakshmir Bhandar to Annapurna Bhandar; a temporary pause during review is common and not necessarily permanent.</li>
              <li><strong>Age-Range Transition:</strong> If you turn 60, payments under this scheme cease and you become eligible for senior pension programs such as Jai Johar or Old Age Allowance.</li>
              <li><strong>Aadhaar-Bank Linkage Issue:</strong> As with any DBT scheme, a payment can fail silently if your bank account is not correctly Aadhaar-seeded in the NPCI mapper, even if your registration itself is fully valid.</li>
              <li><strong>Income or Employment Status Change:</strong> A household member securing a government job or crossing an income-tax threshold affects ongoing eligibility under the scheme's exclusion rules.</li>
            </ul>
            <p>
              If your status check doesn't clarify the reason, visiting your nearest Duare Sarkar camp or municipal/Panchayat office with your registration details is generally the fastest way to get a specific answer for your household.
            </p>
          </section>

          <!-- Section 5 — FAQs -->
          <section class="content-block">
            <h2>Frequently Asked Questions</h2>
            
            <div class="faq-accordion">
              <div class="faq-item">
                <button class="faq-question">
                  <span>How do I check my Lakshmir Bhandar / Annapurna Bhandar status?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Visit socialregistry.wb.gov.in, select your district, enter your registered mobile number, verify with the OTP sent to you, and your current status will display.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>My status shows "Pending e-KYC" — what should I do?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>This means you likely need to complete a verification step before your migrated registration becomes fully active — check the portal for specific next steps, or visit your local office if unclear.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>My payment has stopped — have I lost eligibility?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Not necessarily. Many paused payments are linked to the migration audit rather than a permanent loss of eligibility — check your status and follow up locally if it remains unclear.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>I'm over 60 — will I still get Annapurna Bhandar?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>The confirmed upper age limit for the new scheme should be checked directly on the official portal; if you're outside the eligible range, ask about alternative programmes like Jai Johar or the state's Old Age Allowance.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>The portal shows "Not Found" for my mobile number — why?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>This usually means either a details mismatch or that your prior registration wasn't automatically carried over during migration — visiting your local office with your original registration details is the fastest way to resolve this.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>How often should I check my status?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Checking every few weeks during this transition period is reasonable; there's no need to check daily, since updates happen in review batches rather than continuously.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Who can I contact if the online status check doesn't resolve my issue?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Your nearest Duare Sarkar camp or municipal/Panchayat office can look up your specific household record directly, which is generally faster than relying solely on the online portal during this transition period.</p>
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
                  <span class="scheme-card-badge">Girls Education</span>
                  <span class="scheme-card-icon">🎓</span>
                </div>
                <h3 class="scheme-card-title">Kanyashree Prakalpa</h3>
                <p class="scheme-card-summary">Financial support and annual stipends to encourage girls' education and prevent early marriage in West Bengal.</p>
                <div class="scheme-card-cta">View Details & Apply →</div>
              </a>
              <a href="/schemes/rupashree-prakalpa/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Marriage Assistance</span>
                  <span class="scheme-card-icon">💍</span>
                </div>
                <h3 class="scheme-card-title">Rupashree Prakalpa</h3>
                <p class="scheme-card-summary">One-time financial grant of Rs 25,000 to economically stressed families for adult daughters' marriage costs.</p>
                <div class="scheme-card-cta">View Details & Apply →</div>
              </a>
              <a href="/schemes/women-welfare/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Category Hub</span>
                  <span class="scheme-card-icon">👩</span>
                </div>
                <h3 class="scheme-card-title">Women Welfare Schemes</h3>
                <p class="scheme-card-summary">Comprehensive directory of financial empowerment, health, and social security programs for women.</p>
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
              <a href="/schemes/lakshmir-bhandar/status-check/index.html" class="quick-link-item">
                <span class="quick-link-icon">🔍</span>
                <div class="quick-link-text">
                  <span class="quick-link-title">Track Application Status</span>
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
            <li><a href="/schemes/women-welfare/index.html" class="footer-link">👩 Women Empowerment</a></li>
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

fs.writeFileSync(page16Path, page16Html, 'utf8');
const newWordCountPage16 = getArticleWordCount(page16Path);
console.log(`Page 16 Updated: ${oldWordCountPage16} words -> ${newWordCountPage16} words`);
