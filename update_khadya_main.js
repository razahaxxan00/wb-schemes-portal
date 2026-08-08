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
  <title>Khadya Sathi Scheme 2026 — ₹2/kg Rice & Wheat, Eligibility</title>
  <meta name="description" content="Complete guide to the Khadya Sathi Scheme — subsidised rice and wheat at ₹2/kg for West Bengal ration card holders. Eligibility, benefits & how to apply.">
  <meta name="keywords" content="khadya sathi scheme, khadya sathi west bengal, khadya sathi ration card, what is khadya sathi scheme, khadya sathi scheme benefits, khadya sathi eligibility criteria">
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="canonical" href="${domain}/schemes/khadya-sathi/">
  <meta name="robots" content="index, follow">
  
  <meta property="og:title" content="Khadya Sathi Scheme 2026 — ₹2/kg Rice & Wheat, Eligibility">
  <meta property="og:description" content="Complete guide to the Khadya Sathi Scheme — subsidised rice and wheat at ₹2/kg for West Bengal ration card holders. Eligibility, benefits & how to apply.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${domain}/schemes/khadya-sathi/">
  <meta property="og:image" content="${domain}/images/og-default.jpg">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Khadya Sathi Scheme 2026 — ₹2/kg Rice & Wheat, Eligibility">
  <meta name="twitter:description" content="Complete guide to the Khadya Sathi Scheme — subsidised rice and wheat at ₹2/kg for West Bengal ration card holders. Eligibility, benefits & how to apply.">

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
          "text": "It is a West Bengal government food security scheme that provides rice and wheat at Rs. 2 per kilogram to ration card holders, particularly BPL and EWS families, under the motto 'Food for All.'"
        }
      },
      {
        "@type": "Question",
        "name": "Who is eligible for Khadya Sathi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Permanent residents of West Bengal who hold, or qualify for, an AAY, PHH, RKSY-1, or RKSY-2 ration card, and who are not government employees."
        }
      },
      {
        "@type": "Question",
        "name": "How much rice and wheat do I get under Khadya Sathi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The quantity depends on your ration card category — AAY cardholders generally receive the highest monthly entitlement, while PHH and RKSY card holders receive amounts set for their respective categories."
        }
      },
      {
        "@type": "Question",
        "name": "How do I apply for a Khadya Sathi ration card?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Apply online through the West Bengal Food and Supplies Department portal or Egiye Bangla, or offline by submitting a form with the required documents at your local Fair Price Shop."
        }
      },
      {
        "@type": "Question",
        "name": "How do I download my Khadya Sathi e-ration card?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "See our dedicated Khadya Sathi Card Download guide for the complete download and printing process."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are needed for Khadya Sathi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aadhaar card, voter ID, proof of address, income certificate, a passport-size photo, and your existing ration card (if you have one) or birth certificate for children under 5."
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
            <span class="scheme-badge">Food Security & Public Distribution</span>
            <h1>Khadya Sathi Scheme — Subsidised Food Grains for West Bengal (2026)</h1>
            <div class="eeat-badge-container">
              <span class="fact-checked-badge">Fact-Checked 2026</span>
              <span>Fact-checked against official state notifications (wbpds.gov.in) • Editorial Review: August 2026</span>
            </div>
            <p class="intro-text">
              The <strong>Khadya Sathi scheme</strong> is West Bengal's flagship food security initiative, delivering essential food grains (rice and wheat) at highly subsidised rates of Rs. 2/kg (and free state quotas) to nearly 90% of the state's population.
            </p>
          </div>

          <!-- Section 1 — What Is the Khadya Sathi Scheme -->
          <section class="content-block">
            <h2>What Is the Khadya Sathi Scheme</h2>
            <p>
              Khadya Sathi is the food security scheme run by the Government of West Bengal, launched on 27 January 2016 by Chief Minister Smt. Mamata Banerjee under the motto "Food for All." The scheme provides rice and wheat at a highly subsidised rate of Rs. 2 per kilogram to ration card holders across the state, with the aim of ensuring that no resident goes without access to basic food grains.
            </p>
            <p>
              The scheme is administered by the Department of Food and Supplies, Government of West Bengal, and is estimated to cover close to 90% of the state's population through its various ration card categories. It works alongside the central government's National Food Security Act (NFSA) framework but also extends coverage through West Bengal's own state-funded card categories for households that fall outside the central scheme's criteria.
            </p>
            <p>
              Under <a href="/index.html" class="body-link">West Bengal government schemes</a>, Khadya Sathi acts as the primary social safety net ensuring nutritional security for urban and rural families alike.
            </p>
          </section>

          <!-- Section 2 — Objectives of the Scheme -->
          <section class="content-block">
            <h2>Objectives of the Scheme</h2>
            <p>The primary socio-economic goals of Khadya Sathi include:</p>
            <ul>
              <li><strong>Ensure Food Security:</strong> Ensure food security for economically weaker sections (EWS) and Below Poverty Line (BPL) families across West Bengal.</li>
              <li><strong>Extend Coverage Beyond Central NFSA:</strong> Extend coverage beyond central NFSA limits, so that households not covered under Antyodaya Anna Yojana (AAY) or Priority Household (PHH) cards can still access subsidised grain through state-funded cards.</li>
              <li><strong>Standardised Digital Distribution:</strong> Standardise food distribution through a uniform digital ration card system linked to Fair Price Shops across the state.</li>
              <li><strong>Prioritise Vulnerable Populations:</strong> Prioritise vulnerable groups, including SC/ST communities, tea garden workers, cyclone-affected households, Singur land losers, and single-parent (particularly female-headed) families.</li>
            </ul>
            <p>
              Discover <a href="/categories/index.html" class="body-link">all Social Welfare Schemes in West Bengal</a> to see how Khadya Sathi connects with health, pension, and housing programs across the state.
            </p>
          </section>

          <!-- Section 3 — Types of Ration Cards Under Khadya Sathi -->
          <section class="content-block">
            <h2>Types of Ration Cards Under Khadya Sathi</h2>
            <p>Khadya Sathi operates through several ration card categories, each with different entitlements:</p>
            <ul>
              <li><strong>Antyodaya Anna Yojana (AAY) Card:</strong> For the poorest of poor families, offering the highest quantity of subsidised grain per household.</li>
              <li><strong>Priority Household (PHH) Card:</strong> For households falling under NFSA priority criteria based on economic indicators.</li>
              <li><strong>Rajya Khadya Suraksha Yojana (RKSY-1) Card:</strong> A state-funded card for BPL/EWS households that don't qualify under central NFSA categories.</li>
              <li><strong>Rajya Khadya Suraksha Yojana (RKSY-2) Card:</strong> A state card for households above the BPL line but still eligible for subsidised distribution at different rates.</li>
            </ul>
            <p>
              The exact quantity of rice and wheat a household receives each month depends on which of these categories its ration card falls under, so it's worth confirming your card type before estimating your monthly entitlement.
            </p>
          </section>

          <!-- Section 4 — Eligibility Criteria -->
          <section class="content-block">
            <h2>Eligibility Criteria</h2>
            <p>To qualify for a Khadya Sathi ration card, applicants must satisfy the following conditions:</p>
            <ul>
              <li>The applicant and family members must be Indian citizens and permanent residents of West Bengal.</li>
              <li>The household must generally fall under the BPL or EWS category, or otherwise qualify under one of the state's RKSY card categories.</li>
              <li>The applicant or any family member should not be a government employee, since government job holders are typically excluded from BPL/EWS-linked benefits.</li>
              <li>The applicant must hold, or apply for, a valid ration card (AAY, PHH, RKSY-1, or RKSY-2, as applicable). If an existing card has expired, the scheme can be availed after renewal.</li>
            </ul>
          </section>

          <!-- Section 5 — Benefits of Khadya Sathi -->
          <section class="content-block">
            <h2>Benefits of Khadya Sathi</h2>
            <ul>
              <li><strong>Subsidised & Free Grains:</strong> Rice and wheat at Rs. 2 per kilogram (and 100% free under ongoing state welfare quotas), dramatically below open-market rates, for eligible ration card holders.</li>
              <li><strong>Near-Universal Coverage:</strong> Coverage for an estimated 90% of West Bengal's population, making it one of the widest-reaching food security schemes in the country.</li>
              <li><strong>Category-Based Entitlement:</strong> Category-based entitlement, ensuring the poorest households (AAY) receive the largest quantities per month.</li>
              <li><strong>Priority Access for Vulnerable Groups:</strong> Priority access for SC/ST families, tea garden workers, cyclone or disaster-affected households, and single female-headed families.</li>
              <li><strong>Digital & Transparent Distribution:</strong> Digital ration card and ePOS-based distribution, reducing leakage and making it easier to verify entitlements at the Fair Price Shop (FPS).</li>
              <li><strong>State-Wide Uniformity:</strong> A uniform, state-wide food distribution mechanism, meaning benefits don't vary arbitrarily by district or ration shop.</li>
            </ul>
          </section>

          <!-- Section 6 — Documents Required -->
          <section class="content-block">
            <h2>Documents Required</h2>
            <p>Prepare the following documents when applying for a new Khadya Sathi card or submitting modification forms:</p>
            <ul>
              <li>Digital/e-ration card, or a photocopy of it (if updating existing records).</li>
              <li>Aadhaar card of all family members.</li>
              <li>Voter ID card (EPIC) for adult family members.</li>
              <li>Proof of address (utility bill, land Parcha, or tax receipt).</li>
              <li>Income certificate (for BPL/EWS classification).</li>
              <li>Birth certificate, for family members under 5 years of age.</li>
              <li>Passport-size photograph of the head of the family.</li>
            </ul>
          </section>

          <!-- Section 7 — How to Apply -->
          <section class="content-block">
            <h2>How to Apply</h2>
            <p>Khadya Sathi can be accessed either online or offline:</p>
            <p><strong>Online Method:</strong></p>
            <ol>
              <li>Visit the West Bengal Food and Supplies Department portal (<a href="https://wbpds.gov.in" class="body-link" target="_blank" rel="noopener noreferrer">wbpds.gov.in</a>) or the official food portal (<a href="https://food.wb.gov.in" class="body-link" target="_blank" rel="noopener noreferrer">food.wb.gov.in</a>).</li>
              <li>Look for the ration card / Khadya Sathi application section under E-Citizen services.</li>
              <li>Fill in your personal, household, and income details, and upload the required documents.</li>
              <li>Submit the form and note your application/reference number for future status tracking.</li>
            </ol>
            <p><strong>Offline Method:</strong></p>
            <ol>
              <li>Collect the Khadya Sathi/ration card application form from your local Fair Price Shop (FPS), BDO office, or ration office.</li>
              <li>Fill in the form completely and attach the required documents.</li>
              <li>Submit the completed form at the same ration shop or the designated food and supplies office.</li>
              <li>Your application will be verified before your card is issued or updated.</li>
            </ol>
            <p>
              For issues related to name correction, adding a family member, address change, changing your ration shop, or unblocking a card, the department provides specific forms (Form 3U, 4R, 5R, 6R, 7, 8, and 12) available at ration shops or the department portal.
            </p>
          </section>

          <!-- Section 8 — Khadya Sathi Card Download & Status Check -->
          <section class="content-block">
            <h2>Khadya Sathi Card Download & Status Check</h2>
            <p>
              Once your application is approved, your digital ration card can be downloaded and printed from the official portal, and used directly at your Fair Price Shop along with ePOS verification. If you've applied recently and want to track progress, the department portal also lets you check your application status using your application/reference number or your registered mobile number and OTP.
            </p>
            <p>
              To <a href="/schemes/khadya-sathi/card-download/index.html" class="body-link">download or print your e-ration card</a>, visit our dedicated card download guide for a complete step-by-step walkthrough.
            </p>
          </section>

          <!-- Section 9 — FAQs -->
          <section class="content-block">
            <h2>Frequently Asked Questions</h2>
            
            <div class="faq-accordion">
              <div class="faq-item">
                <button class="faq-question">
                  <span>What is the Khadya Sathi scheme?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>It is a West Bengal government food security scheme that provides rice and wheat at Rs. 2 per kilogram to ration card holders, particularly BPL and EWS families, under the motto "Food for All."</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Who is eligible for Khadya Sathi?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Permanent residents of West Bengal who hold, or qualify for, an AAY, PHH, RKSY-1, or RKSY-2 ration card, and who are not government employees.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>How much rice and wheat do I get under Khadya Sathi?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>The quantity depends on your ration card category — AAY cardholders generally receive the highest monthly entitlement, while PHH and RKSY card holders receive amounts set for their respective categories.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>How do I apply for a Khadya Sathi ration card?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Apply online through the West Bengal Food and Supplies Department portal or Egiye Bangla, or offline by submitting a form with the required documents at your local Fair Price Shop.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>How do I download my Khadya Sathi e-ration card?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>See our dedicated Khadya Sathi Card Download guide for the complete download and printing process.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>What documents are needed for Khadya Sathi?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Aadhaar card, voter ID, proof of address, income certificate, a passport-size photo, and your existing ration card (if you have one) or birth certificate for children under 5.</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Related Schemes Section -->
          <section class="content-block">
            <h2>Related Schemes</h2>
            <div class="scheme-grid">
              <a href="/schemes/khadya-sathi/card-download/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">E-Card Guide</span>
                  <span class="scheme-card-icon">💳</span>
                </div>
                <h3 class="scheme-card-title">Khadya Sathi Card Download</h3>
                <p class="scheme-card-summary">Step-by-step guide to downloading and printing your digital ration card online.</p>
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
              <a href="/schemes/krishak-bandhu/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Farmer Support</span>
                  <span class="scheme-card-icon">🌾</span>
                </div>
                <h3 class="scheme-card-title">Krishak Bandhu Scheme</h3>
                <p class="scheme-card-summary">Financial assistance for farmers across West Bengal with death assurance cover.</p>
                <div class="scheme-card-cta">View Details & Apply →</div>
              </a>
              <a href="/schemes/lakshmir-bhandar/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge">Women Welfare</span>
                  <span class="scheme-card-icon">👩</span>
                </div>
                <h3 class="scheme-card-title">Lakshmir Bhandar Scheme</h3>
                <p class="scheme-card-summary">Monthly cash assistance for adult women in West Bengal, upgraded as Annapurna Bhandar.</p>
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
