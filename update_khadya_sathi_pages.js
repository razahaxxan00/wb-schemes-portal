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
// PAGE 13: /schemes/khadya-sathi/index.html
// -------------------------------------------------------------------------
const page13Path = path.join(rootDir, 'schemes', 'khadya-sathi', 'index.html');
const oldWordCountPage13 = getArticleWordCount(page13Path);

const page13Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khadya Sathi Scheme 2026 – Digital Ration Card & Benefits</title>
  <meta name="description" content="Complete guide to Khadya Sathi, West Bengal's food security scheme — ration card categories, eligibility, benefits, and how to apply for your digital card.">
  <meta name="keywords" content="khadya sathi scheme, khadya sathi west bengal, khadya sathi ration card, what is khadya sathi scheme, khadya sathi scheme benefits, khadya sathi eligibility criteria">
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="canonical" href="${domain}/schemes/khadya-sathi/">
  <meta name="robots" content="index, follow">
  
  <meta property="og:title" content="Khadya Sathi Scheme 2026 – Digital Ration Card & Benefits">
  <meta property="og:description" content="Complete guide to Khadya Sathi, West Bengal's food security scheme — ration card categories, eligibility, benefits, and how to apply for your digital card.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${domain}/schemes/khadya-sathi/">
  <meta property="og:image" content="${domain}/images/og-default.jpg">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Khadya Sathi Scheme 2026 – Digital Ration Card & Benefits">
  <meta name="twitter:description" content="Complete guide to Khadya Sathi, West Bengal's food security scheme — ration card categories, eligibility, benefits, and how to apply for your digital card.">

  <!-- FAQPage Schema JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the Khadya Sathi scheme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Khadya Sathi is West Bengal's state food security programme, launched in January 2016, providing free subsidised rice and wheat to around 90% of the state's population through a fully digital ration card system."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a physical ration card under Khadya Sathi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No — West Bengal issues fully digital ration cards only. You can collect your ration by showing an e-ration card on your phone or a plain printed copy."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between RKSY-I and RKSY-II?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both are state-funded ration categories created by West Bengal to cover families not included under the central NFSA scheme, with RKSY-II generally covering households further up the income range than RKSY-I. Both are typically restricted to use within West Bengal only."
        }
      },
      {
        "@type": "Question",
        "name": "How much does the food grain cost under Khadya Sathi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Food grains under the Khadya Sathi scheme across all categories (AAY, PHH, SPHH, RKSY-I, and RKSY-II) are provided 100% free of cost by the West Bengal government."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use my Khadya Sathi ration card outside West Bengal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you hold an AAY, PHH, or SPHH card, yes, through ONORC portability. RKSY-I and RKSY-II cardholders are generally restricted to collecting ration within West Bengal."
        }
      },
      {
        "@type": "Question",
        "name": "My ration card has expired — can I still avail the scheme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, after renewing your ration card through the standard renewal process on the Egiye Bangla portal or at your local Food & Supplies office."
        }
      },
      {
        "@type": "Question",
        "name": "How do I download my digital ration card?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "See our dedicated Khadya Sathi Card Download guide for the full step-by-step process."
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
        <span class="current">Khadya Sathi Scheme</span>
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
            <span class="scheme-badge">Food Security & Ration</span>
            <h1>Khadya Sathi Scheme — West Bengal's Digital Ration Card Programme (2026)</h1>
            <div class="eeat-badge-container">
              <span class="fact-checked-badge">Fact-Checked 2026</span>
              <span>Fact-checked against official state notifications (food.wb.gov.in) • Editorial Review: August 2026</span>
            </div>
            <p class="intro-text">
              The <strong>Khadya Sathi scheme</strong> is West Bengal's comprehensive public distribution system providing free food grains to over 8.6 crore residents across 23 districts under a paperless digital ration card framework.
            </p>
          </div>

          <!-- Section 1 — What Is the Khadya Sathi Scheme -->
          <section class="content-block">
            <h2>What Is the Khadya Sathi Scheme</h2>
            <p>
              Khadya Sathi is West Bengal's state food security programme, launched on 27 January 2016 under the motto "Food for All." It's built around a distinctive feature: West Bengal issues fully digital ration cards only — there's no physical card at all for most beneficiaries. Your ration entitlement is tied to your digital record, and you can collect your ration by showing an e-ration card on your phone or a plain-paper printout, without needing a laminated physical card.
            </p>
            <p>
              The scheme covers an unusually large share of the population — roughly 90% of West Bengal's residents — by combining both centrally-funded National Food Security Act (NFSA) categories and two state-funded categories that West Bengal created specifically to extend coverage beyond the central scheme's limits.
            </p>
            <p>
              Managed by the Department of Food and Supplies, Government of West Bengal, the system is fully automated through electronic Point of Sale (ePOS) devices deployed across 20,000+ Fair Price Shops state-wide.
            </p>
          </section>

          <!-- Section 2 — Ration Card Categories Under Khadya Sathi -->
          <section class="content-block">
            <h2>Ration Card Categories Under Khadya Sathi</h2>
            <p>West Bengal runs several distinct ration card categories under the Khadya Sathi umbrella:</p>
            <ul>
              <li><strong>Antyodaya Anna Yojana (AAY)</strong> — for the poorest of the poor households, a central (NFSA) category.</li>
              <li><strong>Priority Household (PHH)</strong> — a central (NFSA) category for priority low-income households.</li>
              <li><strong>Special Priority Household (SPHH)</strong> — a West Bengal-specific priority category aligned with state welfare benchmarks.</li>
              <li><strong>RKSY-I (Rajya Khadya Suraksha Yojana-I)</strong> — a state-funded category for families not covered under the central NFSA scheme.</li>
              <li><strong>RKSY-II (Rajya Khadya Suraksha Yojana-II)</strong> — a second state-funded category, generally covering families further up the income spectrum than RKSY-I.</li>
            </ul>
            <p>
              One important distinction: AAY, PHH, and SPHH cardholders generally get ONORC (One Nation One Ration Card) portability, meaning they can collect their ration from Fair Price Shops anywhere in India, not just within West Bengal. RKSY-I and RKSY-II, being purely state-funded categories, are typically restricted to use within West Bengal only.
            </p>
          </section>

          <!-- Section 3 — Who Is Eligible -->
          <section class="content-block">
            <h2>Who Is Eligible</h2>
            <p>Eligibility for Khadya Sathi is structured around household economic status and geographic vulnerability:</p>
            <ul>
              <li>You must be a permanent resident of West Bengal.</li>
              <li>You must belong to one of the eligible categories above — broadly, Below Poverty Line (BPL) and Economically Weaker Section (EWS) households, though the state-funded RKSY categories extend coverage further up the income scale than the central NFSA categories alone.</li>
              <li>No member of your household should be a regular government job holder — this is a standard exclusion across most West Bengal welfare-linked ration categories.</li>
              <li>You need to hold, or apply for, a valid ration card in one of the categories above; if your existing card has expired, you can typically avail the scheme after renewing it.</li>
              <li>Certain groups receive specific coverage provisions — for example, tea-garden workers and their families, residents of the Jangalmahal and Purulia regions, Toto tribe members, Singur land losers, and cyclone Aila-affected families are specifically included under special state ration quotas.</li>
            </ul>
            <p>
              Integration with other state welfare benefits — such as <a href="/schemes/health-schemes/index.html" class="body-link">all Health Schemes</a> and Swasthya Sathi — relies on Khadya Sathi Digital Ration Card numbers as the primary family identification key.
            </p>
          </section>

          <!-- Section 4 — What You Get: Benefits & Pricing -->
          <section class="content-block">
            <h2>What You Get: Benefits & Pricing</h2>
            <p>The primary benefit of Khadya Sathi is the regular monthly supply of essential food grains delivered free of charge:</p>
            <ul>
              <li><strong>100% Free Food Grains:</strong> Under West Bengal government policy, food grains (rice, wheat, and fortified atta) across all categories (AAY, PHH, SPHH, RKSY-I, RKSY-II) are distributed <strong>completely free of cost</strong> to beneficiaries. The historical ₹2/kg charge has been fully waived by the state government.</li>
              <li><strong>AAY Monthly Entitlement:</strong> 15 kg rice plus 20 kg wheat (or 19 kg fortified atta) per family per month.</li>
              <li><strong>PHH / SPHH Monthly Entitlement:</strong> 2 kg rice plus 3 kg wheat (or 2.85 kg fortified atta) per head per month.</li>
              <li><strong>RKSY-I Monthly Entitlement:</strong> 5 kg rice per head per month free of cost.</li>
              <li><strong>RKSY-II Monthly Entitlement:</strong> 2 kg rice per head per month free of cost.</li>
              <li><strong>No physical card required:</strong> You can collect your ration by showing your e-ration card digitally on your phone, or a plain printed copy, at your designated Fair Price Shop.</li>
              <li><strong>Aadhaar-based verification:</strong> Collection at the ration shop uses electronic Point of Sale (ePOS) machines with Aadhaar biometric authentication to confirm your identity before dispensing your ration.</li>
            </ul>
          </section>

          <!-- Section 5 — Documents Required -->
          <section class="content-block">
            <h2>Documents Required</h2>
            <p>Prepare the following documents when applying for a new Digital Ration Card or updating existing records:</p>
            <ul>
              <li><strong>Aadhaar card</strong> for all family members to be included on the digital card.</li>
              <li><strong>Voter ID (EPIC)</strong> for adult family members.</li>
              <li><strong>Proof of residence in West Bengal</strong> (electricity bill, land record / Parcha, or municipal tax receipt).</li>
              <li><strong>Income certificate</strong> issued by a competent local authority (BDO, Panchayat Pradhan, or Executive Officer).</li>
              <li><strong>Recent passport-size photograph</strong> of the head of the family.</li>
              <li><strong>Mobile number</strong> linked to Aadhaar for OTP verification.</li>
              <li>If renewing or modifying: your existing (expired) ration card details or reference receipt.</li>
            </ul>
          </section>

          <!-- Section 6 — How to Apply for a Khadya Sathi Digital Ration Card -->
          <section class="content-block">
            <h2>How to Apply for a Khadya Sathi Digital Ration Card</h2>
            <p><strong>Online Method:</strong></p>
            <ol>
              <li>Visit the West Bengal government's official food portal: <a href="https://food.wb.gov.in" class="body-link" target="_blank" rel="noopener noreferrer">food.wb.gov.in</a> or wbpds.gov.in.</li>
              <li>Select the <strong>E-Citizen</strong> menu on the homepage.</li>
              <li>Click on <strong>Apply for New Digital Ration Card</strong> (Form 3 or Form 4 depending on category).</li>
              <li>Select your district, sub-division, block/municipality, and Gram Panchayat.</li>
              <li>Fill in household details and enter the Aadhaar numbers of all family members.</li>
              <li>Scan and upload clear PDF copies of your documents.</li>
              <li>Submit your application and save the generated Form Application Number for tracking.</li>
            </ol>
            <p><strong>Offline Method:</strong></p>
            <ol>
              <li>Visit your local Block Food & Supplies Office, Inspector of Food & Supplies office, or a nearby Duare Sarkar camp.</li>
              <li>Collect the physical application form (Form 3 / Form 4).</li>
              <li>Fill in the form in block capital letters and attach self-attested photocopies of all required documents.</li>
              <li>Submit the form at the counter and collect the stamped acknowledgment slip containing your reference tracking number.</li>
            </ol>
          </section>

          <!-- Section 7 — Using Your Card at the Ration Shop -->
          <section class="content-block">
            <h2>Using Your Card at the Ration Shop</h2>
            <p>
              Once your digital ration card is active, collecting your monthly entitlement is straightforward: visit your designated Fair Price Shop (FPS), show your e-ration card (on your mobile phone or as a printed paper copy), and complete Aadhaar biometric authentication on the dealer's ePOS machine.
            </p>
            <p>
              The ePOS system verifies your identity in real time, displays your monthly free grain quota on screen, and prints a physical transaction slip confirming the quantity dispensed. You can also <a href="/schemes/khadya-sathi/card-download/index.html" class="body-link">download your digital ration card</a> at any time to keep an updated copy on your mobile device.
            </p>
          </section>

          <!-- Section 8 — FAQs -->
          <section class="content-block">
            <h2>Frequently Asked Questions</h2>
            
            <div class="faq-accordion">
              <div class="faq-item">
                <button class="faq-question">
                  <span>What is the Khadya Sathi scheme?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Khadya Sathi is West Bengal's state food security programme, launched in January 2016, providing free subsidised rice and wheat to around 90% of the state's population through a fully digital ration card system.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Do I need a physical ration card under Khadya Sathi?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>No — West Bengal issues fully digital ration cards only. You can collect your ration by showing an e-ration card on your phone or a plain printed copy.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>What's the difference between RKSY-I and RKSY-II?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Both are state-funded ration categories created by West Bengal to cover families not included under the central NFSA scheme, with RKSY-II generally covering households further up the income range than RKSY-I. Both are typically restricted to use within West Bengal only.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>How much does the food grain cost under Khadya Sathi?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Food grains under the Khadya Sathi scheme across all categories (AAY, PHH, SPHH, RKSY-I, and RKSY-II) are provided 100% free of cost by the West Bengal government.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Can I use my Khadya Sathi ration card outside West Bengal?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>If you hold an AAY, PHH, or SPHH card, yes, through ONORC portability. RKSY-I and RKSY-II cardholders are generally restricted to collecting ration within West Bengal.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>My ration card has expired — can I still avail the scheme?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Yes, after renewing your ration card through the standard renewal process on the Egiye Bangla portal or at your local Food & Supplies office.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>How do I download my digital ration card?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>See our dedicated Khadya Sathi Card Download guide for the full step-by-step process.</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Related Schemes Section -->
          <section class="content-block">
            <h2>Related Schemes</h2>
            <div class="scheme-grid">
              <a href="/schemes/swasthya-sathi/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Health Cover</span>
                  <span class="scheme-card-icon">🏥</span>
                </div>
                <h3 class="scheme-card-title">Swasthya Sathi Scheme</h3>
                <p class="scheme-card-summary">Rs 5 lakh cashless health insurance per family per year across government and empanelled hospitals.</p>
                <div class="scheme-card-cta">View Details & Apply →</div>
              </a>
              <a href="/categories/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Category Hub</span>
                  <span class="scheme-card-icon">🏛️</span>
                </div>
                <h3 class="scheme-card-title">Social Welfare Schemes</h3>
                <p class="scheme-card-summary">Comprehensive directory of social security, food distribution, and community support initiatives.</p>
                <div class="scheme-card-cta">Explore Category →</div>
              </a>
              <a href="/schemes/jai-bangla-pension-scheme/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Pension Scheme</span>
                  <span class="scheme-card-icon">🏛️</span>
                </div>
                <h3 class="scheme-card-title">Jai Bangla Pension Scheme</h3>
                <p class="scheme-card-summary">Monthly pension assistance for elderly, SC, ST, and disabled citizens across West Bengal.</p>
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
              <a href="/schemes/khadya-sathi/card-download/index.html" class="quick-link-item">
                <span class="quick-link-icon">💳</span>
                <div class="quick-link-text">
                  <span class="quick-link-title">Download E-Card Online</span>
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
            <li><a href="/schemes/health-schemes/index.html" class="footer-link">🏥 Health Schemes</a></li>
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

fs.writeFileSync(page13Path, page13Html, 'utf8');
const newWordCountPage13 = getArticleWordCount(page13Path);
console.log(`Page 13 Updated: ${oldWordCountPage13} words -> ${newWordCountPage13} words`);


// -------------------------------------------------------------------------
// PAGE 14: /schemes/khadya-sathi/card-download/index.html
// -------------------------------------------------------------------------
const page14Path = path.join(rootDir, 'schemes', 'khadya-sathi', 'card-download', 'index.html');
const oldWordCountPage14 = getArticleWordCount(page14Path);

const page14Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khadya Sathi E-Ration Card Download 2026 — Step by Step</title>
  <meta name="description" content="How to download your Khadya Sathi digital ration card online at food.wb.gov.in, print it, and what to do if your details don't match.">
  <meta name="keywords" content="khadya sathi card download, khadya sathi e ration card, how to download khadya sathi ration card, khadya sathi card download online, khadya sathi duplicate card">
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="canonical" href="${domain}/schemes/khadya-sathi/card-download/">
  <meta name="robots" content="index, follow">
  
  <meta property="og:title" content="Khadya Sathi E-Ration Card Download 2026 — Step by Step">
  <meta property="og:description" content="How to download your Khadya Sathi digital ration card online at food.wb.gov.in, print it, and what to do if your details don't match.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${domain}/schemes/khadya-sathi/card-download/">
  <meta property="og:image" content="${domain}/images/og-default.jpg">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Khadya Sathi E-Ration Card Download 2026 — Step by Step">
  <meta name="twitter:description" content="How to download your Khadya Sathi digital ration card online at food.wb.gov.in, print it, and what to do if your details don't match.">

  <!-- FAQPage Schema JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I download my Khadya Sathi digital ration card?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Visit food.wb.gov.in or wbpds.gov.in, go to the Digital Ration Card / e-Ration Card Download section, and search using your RC number or Aadhaar number."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to print my card, or is the digital version enough?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The digital version is enough — you can show it on your phone at your Fair Price Shop. A printed copy is just a convenient backup, not a requirement."
        }
      },
      {
        "@type": "Question",
        "name": "What if my ration shop doesn't accept my digital card?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This shouldn't normally happen, since the scheme is built around digital cards statewide — if a shop does have an issue, ask them to verify using their ePOS system with your Aadhaar directly, or report the issue to your local Food & Supplies office."
        }
      },
      {
        "@type": "Question",
        "name": "A family member is missing from my downloaded card — how do I fix this?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Raise a correction request at your local Food & Supplies office with proof of the family relationship, such as a birth or marriage certificate — this isn't something you can fix by simply re-downloading."
        }
      },
      {
        "@type": "Question",
        "name": "My ration card shows as expired — can I still download it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You'll need to complete the renewal process first; an expired card generally won't generate a fresh valid digital copy until renewal is complete."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a fee to download my Khadya Sathi card?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No — downloading your digital ration card from the official portal is free."
        }
      },
      {
        "@type": "Question",
        "name": "Can I download the card for a family member separately?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The digital ration card covers the full household under one record; individual family members don't have separate downloadable cards, though all registered members will appear listed on the single household card."
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
        <a href="/schemes/khadya-sathi/index.html" class="breadcrumb-link">Khadya Sathi Scheme</a>
        <span class="separator">/</span>
        <span class="current">Card Download</span>
      </nav>
    </div>
  </div>

  <!-- Main Content Layout -->
  <main class="page-layout">
    <div class="container">
      <div class="page-grid">
        
        <!-- Main Column -->
        <article class="main-content">
          <a href="/schemes/khadya-sathi/index.html" class="back-link-btn">← Back to Khadya Sathi Overview</a>

          <!-- Hero Banner -->
          <div class="scheme-hero">
            <span class="scheme-badge">Digital Ration Portal</span>
            <h1>Khadya Sathi Card Download — Get Your Digital Ration Card Online (2026)</h1>
            <div class="eeat-badge-container">
              <span class="fact-checked-badge">Fact-Checked 2026</span>
              <span>Fact-checked against official state notifications (food.wb.gov.in) • Editorial Review: August 2026</span>
            </div>
            <p class="intro-text">
              Your <strong>khadya sathi card download</strong> gives you instant digital access to your official e-ration card PDF, allowing hassle-free free ration collection across West Bengal without needing a plastic or laminated card.
            </p>
          </div>

          <!-- Section 1 — What You'll Need Before Downloading -->
          <section class="content-block">
            <h2>What You'll Need Before Downloading</h2>
            <p>
              Since Khadya Sathi cards are fully digital, downloading your e-ration card is a routine part of using the scheme, not just a one-time backup step. Before starting, ensure you have:
            </p>
            <ul>
              <li><strong>Your Ration Card (RC) number</strong>, if you already have one, or your 12-digit Aadhaar number if you're looking it up without the RC number.</li>
              <li><strong>Your registered mobile number</strong>, for OTP (One-Time Password) identity verification.</li>
              <li>Access to a printer or smartphone storage to save the generated PDF file.</li>
            </ul>
            <p>
              Before proceeding to download your card, review our main guide to <a href="/schemes/khadya-sathi/index.html" class="body-link">check eligibility & how to apply</a> for Khadya Sathi. For medical benefits linked to your digital identity, see our guide on <a href="/schemes/swasthya-sathi/index.html" class="body-link">Swasthya Sathi health coverage</a>.
            </p>
          </section>

          <!-- Section 2 — How to Download Your Khadya Sathi Card Online -->
          <section class="content-block">
            <h2>How to Download Your Khadya Sathi Card Online</h2>
            <p>Follow these step-by-step instructions to obtain your official e-ration card PDF:</p>
            <ol>
              <li>Visit the official West Bengal Food & Supplies portal: <a href="https://food.wb.gov.in" class="body-link" target="_blank" rel="noopener noreferrer">food.wb.gov.in</a> or wbpds.gov.in.</li>
              <li>Navigate to the <strong>E-Citizen</strong> tab on the top menu bar.</li>
              <li>Click on <strong>e-Ration Card</strong> and select <strong>Download e-Ration Card</strong>.</li>
              <li>Select your category (AAY, PHH, SPHH, RKSY-I, or RKSY-II) and enter your Ration Card number or registered Aadhaar number.</li>
              <li>Click on <strong>Download</strong>. If prompted for OTP verification, enter the code received on your registered mobile phone.</li>
              <li>Your official e-Ration Card PDF will generate immediately, displaying a scannable QR code, family member names, Mouza details, and assigned Fair Price Shop address.</li>
              <li>Save the PDF file on your device or print a paper copy for home storage.</li>
            </ol>
          </section>

          <!-- Section 3 — Using the Card at Your Ration Shop -->
          <section class="content-block">
            <h2>Using the Card at Your Ration Shop</h2>
            <p>
              Once downloaded, you don't need to do anything further to "activate" the card for use — simply show it (digitally on your phone screen, or as a paper printout) at your designated Fair Price Shop when collecting your monthly free ration allotment.
            </p>
            <p>
              The dealer scans the QR code or enters your RC number into their electronic Point of Sale (ePOS) terminal and requests biometric fingerprint authentication from any enrolled adult household member to release your free grain supply.
            </p>
          </section>

          <!-- Section 4 — If Your Details Are Wrong or Your Card Isn't Found -->
          <section class="content-block">
            <h2>If Your Details Are Wrong or Your Card Isn't Found</h2>
            <ul>
              <li><strong>"No record found" when searching:</strong> Double-check you're entering your RC number or Aadhaar number correctly. If you're certain the details are right, it may mean your application hasn't finished processing yet, or there was an issue at registration — visit your local Food & Supplies office to confirm.</li>
              <li><strong>Family member missing from the card:</strong> This typically needs a correction request through the portal or your local ration office, rather than a fresh application; bring proof of the family relationship (like a birth or marriage certificate) when raising this.</li>
              <li><strong>Wrong category shown (e.g. RKSY-II instead of RKSY-I):</strong> Category reclassification is handled through an official correction form (Form 8 / Form 9) at your local Inspector of Food & Supplies office.</li>
              <li><strong>Card shows as expired:</strong> You'll need to complete the online renewal process before a fresh digital card will generate.</li>
            </ul>
          </section>

          <!-- Section 5 — Getting a Duplicate Card -->
          <section class="content-block">
            <h2>Getting a Duplicate Card</h2>
            <p>
              If you've lost track of your RC number or need a fresh copy for any reason, the "download" process itself effectively serves as your duplicate card — since there's no physical card to replace, you can simply look up and re-download your e-ration card as many times as needed once you have your RC number or Aadhaar number handy.
            </p>
            <p>
              If you've genuinely lost your RC number and cannot retrieve it via Aadhaar lookup, your local Fair Price Shop dealer or Block Food & Supplies office can query their local master database using your family head's name to retrieve your record.
            </p>
          </section>

          <!-- Section 6 — FAQs -->
          <section class="content-block">
            <h2>Frequently Asked Questions</h2>
            
            <div class="faq-accordion">
              <div class="faq-item">
                <button class="faq-question">
                  <span>How do I download my Khadya Sathi digital ration card?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Visit food.wb.gov.in or wbpds.gov.in, go to the Digital Ration Card / e-Ration Card Download section, and search using your RC number or Aadhaar number.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Do I need to print my card, or is the digital version enough?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>The digital version is enough — you can show it on your phone at your Fair Price Shop. A printed copy is just a convenient backup, not a requirement.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>What if my ration shop doesn't accept my digital card?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>This shouldn't normally happen, since the scheme is built around digital cards statewide — if a shop does have an issue, ask them to verify using their ePOS system with your Aadhaar directly, or report the issue to your local Food & Supplies office.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>A family member is missing from my downloaded card — how do I fix this?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Raise a correction request at your local Food & Supplies office with proof of the family relationship, such as a birth or marriage certificate — this isn't something you can fix by simply re-downloading.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>My ration card shows as expired — can I still download it?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>You'll need to complete the renewal process first; an expired card generally won't generate a fresh valid digital copy until renewal is complete.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Is there a fee to download my Khadya Sathi card?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>No — downloading your digital ration card from the official portal is free.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Can I download the card for a family member separately?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>The digital ration card covers the full household under one record; individual family members don't have separate downloadable cards, though all registered members will appear listed on the single household card.</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Related Schemes Section -->
          <section class="content-block">
            <h2>Related Schemes</h2>
            <div class="scheme-grid">
              <a href="/schemes/swasthya-sathi/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Health Cover</span>
                  <span class="scheme-card-icon">🏥</span>
                </div>
                <h3 class="scheme-card-title">Swasthya Sathi Scheme</h3>
                <p class="scheme-card-summary">Rs 5 lakh cashless health insurance per family per year across government and empanelled hospitals.</p>
                <div class="scheme-card-cta">View Details & Apply →</div>
              </a>
              <a href="/schemes/lakshmir-bhandar/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Women Welfare</span>
                  <span class="scheme-card-icon">🏛️</span>
                </div>
                <h3 class="scheme-card-title">Lakshmir Bhandar Scheme</h3>
                <p class="scheme-card-summary">Financial aid of Rs 1,000 (General) and Rs 1,200 (SC/ST) monthly for women in West Bengal.</p>
                <div class="scheme-card-cta">View Details & Apply →</div>
              </a>
              <a href="/schemes/krishak-bandhu/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Farmer Support</span>
                  <span class="scheme-card-icon">🌾</span>
                </div>
                <h3 class="scheme-card-title">Krishak Bandhu Scheme</h3>
                <p class="scheme-card-summary">Rs 10,000 annual financial assistance per acre and Rs 2 lakh death assurance for farmers.</p>
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
              <a href="/schemes/khadya-sathi/card-download/index.html" class="quick-link-item">
                <span class="quick-link-icon">💳</span>
                <div class="quick-link-text">
                  <span class="quick-link-title">Download E-Card Online</span>
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
            <li><a href="/schemes/health-schemes/index.html" class="footer-link">🏥 Health Schemes</a></li>
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

fs.writeFileSync(page14Path, page14Html, 'utf8');
const newWordCountPage14 = getArticleWordCount(page14Path);
console.log(`Page 14 Updated: ${oldWordCountPage14} words -> ${newWordCountPage14} words`);
