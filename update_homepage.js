const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const domain = 'https://wb-schemes-portal-three.vercel.app';

function getBodyWordCount(file) {
  const content = fs.readFileSync(file, 'utf8');
  const match = content.match(/<main[\s\S]*?<\/main>/i) || content.match(/<body[\s\S]*?<\/body>/i);
  if (!match) return 0;
  const text = match[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return text.split(' ').length;
}

// -------------------------------------------------------------------------
// PAGE 44: index.html (Homepage)
// -------------------------------------------------------------------------
const homepagePath = path.join(rootDir, 'index.html');
const oldWordCountPage44 = getBodyWordCount(homepagePath);

const homepageHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>West Bengal Government Schemes 2026 — Full List & Apply</title>
  <meta name="description" content="Find every West Bengal government scheme in one place — eligibility, benefits, and how to apply, check status, or download your card, in plain language.">
  <meta name="keywords" content="west bengal government schemes, wb schemes list, west bengal sarkari yojana, list of all west bengal government schemes, west bengal government schemes 2026, west bengal sarkari yojana list">
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="canonical" href="${domain}/">
  <meta name="robots" content="index, follow">
  <meta name="google-site-verification" content="DeuzhHB1cbMAjGOkZdFcBGXGWHMHpn-TbDlMnMK5upM" />
  
  <meta property="og:title" content="West Bengal Government Schemes 2026 — Full List & Apply">
  <meta property="og:description" content="Find every West Bengal government scheme in one place — eligibility, benefits, and how to apply, check status, or download your card, in plain language.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${domain}/">
  <meta property="og:image" content="${domain}/images/og-default.jpg">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="West Bengal Government Schemes 2026 — Full List & Apply">
  <meta name="twitter:description" content="Find every West Bengal government scheme in one place — eligibility, benefits, and how to apply, check status, or download your card, in plain language.">

  <!-- Organization & WebSite & FAQPage Schema JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "${domain}/#organization",
        "name": "West Bengal Schemes Portal",
        "url": "${domain}/",
        "logo": "${domain}/images/logo.png",
        "sameAs": []
      },
      {
        "@type": "WebSite",
        "@id": "${domain}/#website",
        "url": "${domain}/",
        "name": "West Bengal Schemes Portal",
        "publisher": {
          "@id": "${domain}/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is this the official West Bengal government website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No — this is an independent, citizen-friendly information resource explaining West Bengal government schemes in plain language. Always complete your actual application through the official government portal linked from each scheme's page."
            }
          },
          {
            "@type": "Question",
            "name": "How many schemes does this site cover?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "This site currently covers 49+ pages across 13 categories, spanning agriculture, health, education, women's welfare, pensions, housing, and more."
            }
          },
          {
            "@type": "Question",
            "name": "Is it free to use this website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, completely free — there's no registration, subscription, or fee to browse scheme information on this site."
            }
          },
          {
            "@type": "Question",
            "name": "I used to have Swasthya Sathi or Lakshmir Bhandar — do I need to do anything?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Both schemes have transitioned to new programmes in 2026 (Ayushman Bharat and Annapurna Bhandar respectively). Visit the relevant scheme's page on this site for what the transition means for you and what action, if any, you need to take."
            }
          },
          {
            "@type": "Question",
            "name": "How do I know which scheme applies to me?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use the eligibility-check widget above for a starting point, or browse by category if you already know roughly what kind of support you're looking for (farmer support, student scholarships, pensions, and so on)."
            }
          },
          {
            "@type": "Question",
            "name": "How often is this site updated?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Scheme details are reviewed and updated as official information changes, particularly important in 2026 given the number of scheme transitions following the state's change of government."
            }
          },
          {
            "@type": "Question",
            "name": "Can I check my application or payment status through this site?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "This site provides step-by-step guidance on how to check your status on the relevant official portal for each scheme — links to the actual status-check tools are provided on each scheme's dedicated page."
            }
          }
        ]
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
          <a href="/index.html" class="active">Home</a>
          <a href="/schemes/index.html" class="body-link">All Schemes</a>
          <a href="/categories/index.html" class="body-link">Categories</a>
          <a href="/blog/index.html" class="body-link">Updates</a>
          <a href="/about/index.html" class="body-link">About Us</a>
          <a href="/contact/index.html" class="body-link">Contact Us</a>
        </nav>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="scheme-hero" style="padding: 48px 0; background: linear-gradient(135deg, #0b3c5d 0%, #1d2731 100%); color: #ffffff;">
    <div class="container">
      <div style="max-width: 850px; margin: 0 auto; text-align: center;">
        <span class="scheme-badge" style="background: rgba(217, 179, 16, 0.2); color: #d9b310; border: 1px solid #d9b310; display: inline-block; margin-bottom: 12px;">Public Information Guide 2026</span>
        <h1 style="font-size: 2.5rem; font-weight: 800; line-height: 1.2; margin-bottom: 16px; color: #ffffff;">Every West Bengal Government Scheme, Explained in Plain Language</h1>
        <p style="font-size: 1.15rem; line-height: 1.6; color: #cbd5e1; margin-bottom: 24px;">
          Find every major West Bengal government scheme in one place — eligibility, benefits, and how to apply, check status, or download your card.
        </p>
      </div>
    </div>
  </section>

  <!-- Main Content Layout -->
  <main class="page-layout">
    <div class="container">
      <div class="page-grid" style="grid-template-columns: 1fr;">
        
        <!-- Main Column -->
        <article class="main-content" style="max-width: 100%;">
          
          <!-- Section 1 — Find the Right Scheme, Without the Confusion -->
          <section class="content-block">
            <h2>Find the Right Scheme, Without the Confusion</h2>
            <p>
              West Bengal runs dozens of government welfare schemes — for farmers, students, women, senior citizens, persons with disabilities, and more — but finding the right one, understanding whether you qualify, and knowing exactly how to apply can be genuinely confusing. Official information is often spread across multiple department websites, each with its own portal, its own login system, and its own paperwork.
            </p>
            <p>
              This site brings it all into one place: every major West Bengal scheme, explained in plain language, with clear eligibility criteria, real benefit amounts, step-by-step application guides, and direct links to check your application or payment status — all organised so you can find what you need in a few clicks, not a few hours of searching.
            </p>

            <!-- Eligibility Check Widget Box -->
            <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-top: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
              <h3 style="color: #0b3c5d; margin-top: 0; font-size: 1.25rem;">Interactive Eligibility Checker</h3>
              <p style="color: #475569; margin-bottom: 16px;">Answer 3 quick questions to see which schemes you may qualify for.</p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
                <div>
                  <label for="widget-category" style="display: block; font-size: 0.9rem; font-weight: 600; color: #1e293b; margin-bottom: 6px;">1. Select Beneficiary Type:</label>
                  <select id="widget-category" style="width: 100%; padding: 10px 14px; border: 1px solid #cbd5e1; border-radius: 6px; font-family: inherit; font-size: 0.95rem;">
                    <option value="">-- All Categories --</option>
                    <option value="farmer">Farmer / Agricultural Worker</option>
                    <option value="student">Student / Youth</option>
                    <option value="women">Woman / Homemaker</option>
                    <option value="senior">Senior Citizen (60+)</option>
                    <option value="pwd">Person with Disability</option>
                    <option value="minority">Minority Community Member</option>
                  </select>
                </div>
                <div>
                  <label for="widget-district" style="display: block; font-size: 0.9rem; font-weight: 600; color: #1e293b; margin-bottom: 6px;">2. Select District:</label>
                  <select id="widget-district" style="width: 100%; padding: 10px 14px; border: 1px solid #cbd5e1; border-radius: 6px; font-family: inherit; font-size: 0.95rem;">
                    <option value="">-- All 23 Districts --</option>
                    <option value="kolkata">Kolkata</option>
                    <option value="howrah">Howrah</option>
                    <option value="north24">North 24 Parganas</option>
                    <option value="south24">South 24 Parganas</option>
                    <option value="hooghly">Hooghly</option>
                    <option value="murshidabad">Murshidabad</option>
                    <option value="other">Other District</option>
                  </select>
                </div>
                <div>
                  <label for="widget-income" style="display: block; font-size: 0.9rem; font-weight: 600; color: #1e293b; margin-bottom: 6px;">3. Annual Household Income:</label>
                  <select id="widget-income" style="width: 100%; padding: 10px 14px; border: 1px solid #cbd5e1; border-radius: 6px; font-family: inherit; font-size: 0.95rem;">
                    <option value="bpl">Below ₹1,00,000 / BPL</option>
                    <option value="ews">₹1,00,000 to ₹2,50,000</option>
                    <option value="mig">Above ₹2,50,000</option>
                  </select>
                </div>
              </div>
              <div style="margin-top: 16px; text-align: right;">
                <button type="button" style="background: #0b3c5d; color: #ffffff; padding: 10px 20px; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">Find Qualifying Schemes →</button>
              </div>
            </div>
          </section>

          <!-- Section 2 — West Bengal's Welfare Landscape Is Changing -->
          <section class="content-block">
            <h2>West Bengal's Welfare Landscape Is Changing</h2>
            <p>
              2026 has been a significant year of change for West Bengal's welfare schemes. Following the May 2026 state elections, several major programmes have been renamed, restructured, or replaced — Swasthya Sathi is transitioning into the central Ayushman Bharat scheme, and Lakshmir Bhandar has been replaced by Annapurna Bhandar with a higher monthly benefit. If you've used these schemes before under their old names, it's worth checking the current pages on this site rather than relying on older information you may have seen elsewhere, since eligibility rules and application portals have changed alongside the names.
            </p>
          </section>

          <!-- Section 3 — Browse by Category -->
          <section class="content-block">
            <h2>Browse by Category</h2>
            <p>Each category page lists every scheme in that group, with a short summary and a direct link to the full eligibility and application guide:</p>
            
            <div class="category-grid">
              <a href="/schemes/social-welfare/index.html" class="category-card">
                <div class="category-icon" style="background: rgba(11, 60, 93, 0.1); color: #0b3c5d;">🏛️</div>
                <div class="category-info">
                  <h3 class="category-title">Social Welfare</h3>
                  <p class="category-desc">Master directory of food security, pensions, housing, and social security programs.</p>
                </div>
              </a>

              <a href="/schemes/women-welfare/index.html" class="category-card">
                <div class="category-icon" style="background: rgba(217, 70, 239, 0.1); color: #c026d3;">👩</div>
                <div class="category-info">
                  <h3 class="category-title">Women Welfare</h3>
                  <p class="category-desc">Lakshmir Bhandar, Kanyashree & marriage assistance grants.</p>
                </div>
              </a>

              <a href="/schemes/farmer-schemes/index.html" class="category-card">
                <div class="category-icon" style="background: rgba(10, 135, 84, 0.1); color: #0a8754;">🌾</div>
                <div class="category-info">
                  <h3 class="category-title">Farmer Schemes</h3>
                  <p class="category-desc">Krishak Bandhu, crop insurance & farm support.</p>
                </div>
              </a>

              <a href="/schemes/student-schemes/index.html" class="category-card">
                <div class="category-icon" style="background: rgba(99, 102, 241, 0.1); color: #4f46e5;">📚</div>
                <div class="category-info">
                  <h3 class="category-title">Student Schemes</h3>
                  <p class="category-desc">Directory of educational aid, bicycles, tab schemes, and credit cards for students.</p>
                </div>
              </a>

              <a href="/schemes/scholarship-schemes/index.html" class="category-card">
                <div class="category-icon" style="background: rgba(245, 158, 11, 0.1); color: #d97706;">🎓</div>
                <div class="category-info">
                  <h3 class="category-title">Scholarship Schemes</h3>
                  <p class="category-desc">Educational scholarships and stipends for SC, ST, OBC, minority, and merit students.</p>
                </div>
              </a>

              <a href="/schemes/pension-schemes/index.html" class="category-card">
                <div class="category-icon" style="background: rgba(239, 68, 68, 0.1); color: #dc2626;">👵</div>
                <div class="category-info">
                  <h3 class="category-title">Pension Schemes</h3>
                  <p class="category-desc">Jai Bangla, Manabik & monthly social pensions.</p>
                </div>
              </a>

              <a href="/schemes/housing-schemes/index.html" class="category-card">
                <div class="category-icon" style="background: rgba(168, 85, 247, 0.1); color: #9333ea;">🏠</div>
                <div class="category-info">
                  <h3 class="category-title">Housing Schemes</h3>
                  <p class="category-desc">Banglar Bari & Geetanjali EWS housing.</p>
                </div>
              </a>

              <a href="/schemes/health-schemes/index.html" class="category-card">
                <div class="category-icon" style="background: rgba(14, 165, 233, 0.1); color: #0284c7;">🏥</div>
                <div class="category-info">
                  <h3 class="category-title">Health Schemes</h3>
                  <p class="category-desc">Swasthya Sathi & Ayushman Bharat updates.</p>
                </div>
              </a>

              <a href="/schemes/employment-schemes/index.html" class="category-card">
                <div class="category-icon" style="background: rgba(20, 184, 166, 0.1); color: #0d9488;">💼</div>
                <div class="category-info">
                  <h3 class="category-title">Employment Schemes</h3>
                  <p class="category-desc">Utkarsh Bangla free skill development & youth allowances.</p>
                </div>
              </a>

              <a href="/schemes/minority-schemes/index.html" class="category-card">
                <div class="category-icon" style="background: rgba(59, 130, 246, 0.1); color: #2563eb;">🕌</div>
                <div class="category-info">
                  <h3 class="category-title">Minority Schemes</h3>
                  <p class="category-desc">Aikyashree scholarship, WBMDFC loans & madrasah grants.</p>
                </div>
              </a>

              <a href="/schemes/disability-schemes/index.html" class="category-card">
                <div class="category-icon" style="background: rgba(236, 72, 153, 0.1); color: #db2777;">♿</div>
                <div class="category-info">
                  <h3 class="category-title">Disability Schemes</h3>
                  <p class="category-desc">Manabik Pension, assistive devices & 4% job reservations.</p>
                </div>
              </a>

              <a href="/schemes/senior-citizen-schemes/index.html" class="category-card">
                <div class="category-icon" style="background: rgba(107, 114, 128, 0.1); color: #4b5563;">👴</div>
                <div class="category-info">
                  <h3 class="category-title">Senior Citizen Schemes</h3>
                  <p class="category-desc">WCD Old Age Pension, Senior Citizen Card & old age homes.</p>
                </div>
              </a>

              <a href="/schemes/child-welfare-schemes/index.html" class="category-card">
                <div class="category-icon" style="background: rgba(16, 185, 129, 0.1); color: #059669;">👶</div>
                <div class="category-info">
                  <h3 class="category-title">Child Welfare Schemes</h3>
                  <p class="category-desc">Sishu Sathi cardiac care, Anganwadi nutrition & girl child aid.</p>
                </div>
              </a>
            </div>
          </section>

          <!-- Section 4 — Popular Schemes on This Site -->
          <section class="content-block">
            <h2>Popular Schemes on This Site</h2>
            <p>Explore full eligibility, application steps, and portal links for West Bengal's most-searched welfare programs:</p>
            
            <div class="scheme-grid">
              <a href="/schemes/krishak-bandhu/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge" style="background: #dcfce7; color: #166534;">Farmer Welfare</span>
                  <span class="scheme-card-icon">🌾</span>
                </div>
                <h3 class="scheme-card-title">Krishak Bandhu Scheme</h3>
                <p class="scheme-card-summary">Annual income support (up to ₹10,000) and ₹2 lakh death assurance cover for West Bengal's farming families.</p>
                <div class="scheme-card-cta">View Details & Apply →</div>
              </a>

              <a href="/schemes/swasthya-sathi/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge" style="background: #e0f2fe; color: #0284c7;">Health Cover</span>
                  <span class="scheme-card-icon">🏥</span>
                </div>
                <h3 class="scheme-card-title">Swasthya Sathi Scheme</h3>
                <p class="scheme-card-summary">Rs. 5 lakh cashless health coverage, now transitioning into Ayushman Bharat; see what this means for your existing card.</p>
                <div class="scheme-card-cta">View Details & Apply →</div>
              </a>

              <a href="/schemes/kanyashree-prakalpa/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge" style="background: #fef08a; color: #854d0e;">Girl Student Aid</span>
                  <span class="scheme-card-icon">👧</span>
                </div>
                <h3 class="scheme-card-title">Kanyashree Prakalpa</h3>
                <p class="scheme-card-summary">UN-recognised scholarship (K1 ₹1,000/yr) and one-time grant (K2 ₹25,000) supporting girls through school and beyond.</p>
                <div class="scheme-card-cta">View Details & Apply →</div>
              </a>

              <a href="/schemes/lakshmir-bhandar/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge" style="background: #fce7f3; color: #9d174d;">Women Security</span>
                  <span class="scheme-card-icon">👩</span>
                </div>
                <h3 class="scheme-card-title">Lakshmir Bhandar Scheme</h3>
                <p class="scheme-card-summary">Monthly financial support for women (₹1,000–₹1,200), now transitioning into Annapurna Bhandar.</p>
                <div class="scheme-card-cta">View Details & Apply →</div>
              </a>

              <a href="/schemes/aikyashree-scholarship/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge" style="background: #dbeafe; color: #1e40af;">Minority Scholarship</span>
                  <span class="scheme-card-icon">🕌</span>
                </div>
                <h3 class="scheme-card-title">Aikyashree Scholarship</h3>
                <p class="scheme-card-summary">The umbrella scholarship system for minority-community students (Muslim, Christian, Sikh, Buddhist, Jain, Parsi), Class 1 through PhD.</p>
                <div class="scheme-card-cta">View Details & Apply →</div>
              </a>

              <a href="/schemes/khadya-sathi/index.html" class="scheme-card">
                <div class="scheme-card-header">
                  <span class="scheme-card-badge" style="background: #fef3c7; color: #92400e;">Food Security</span>
                  <span class="scheme-card-icon">🍚</span>
                </div>
                <h3 class="scheme-card-title">Khadya Sathi Scheme</h3>
                <p class="scheme-card-summary">West Bengal's fully digital ration card and food security scheme providing subsidised rice and wheat.</p>
                <div class="scheme-card-cta">View Details & Apply →</div>
              </a>
            </div>
          </section>

          <!-- Section 5 — Why Trust This Portal -->
          <section class="content-block">
            <h2>Why Trust This Portal</h2>
            <p>Our commitment to clear, accurate, and independent public information:</p>
            <ul>
              <li><strong>Plain-Language Explanations:</strong> Every scheme summarised without bureaucratic jargon, so you can understand eligibility and benefits in minutes, not hours.</li>
              <li><strong>Step-by-Step Guidance:</strong> Application, status-check, and card-download pages walk through the exact process, screen by screen, rather than just linking you to an official portal and leaving you to figure it out.</li>
              <li><strong>Kept Current Through 2026's Changes:</strong> As schemes get renamed or restructured (like the Swasthya Sathi and Lakshmir Bhandar transitions), this site is updated to reflect the current reality, not just the scheme's original 2018-era rules.</li>
              <li><strong>Independent and Free:</strong> This is a citizen-information resource, not the official Government of West Bengal website; it's built to help you navigate official schemes faster, and is completely free to use. Read more on our <a href="/about/index.html" class="body-link">About this site</a> page.</li>
            </ul>
          </section>

          <!-- Section 6 — How the Eligibility Check Works -->
          <section class="content-block">
            <h2>How the Eligibility Check Works</h2>
            <p>
              The quick eligibility widget above asks a few basic questions — your general category (farmer, student, senior citizen, and so on), your district, and your approximate family income — and surfaces the schemes most likely to be relevant to your situation. It's a starting point for narrowing down which schemes to look into, not a formal eligibility determination — final eligibility is always confirmed by the actual scheme's official application process and verification, not by this tool.
            </p>
          </section>

          <!-- Section 7 — FAQs -->
          <section class="content-block">
            <h2>Frequently Asked Questions</h2>
            
            <div class="faq-accordion">
              <div class="faq-item">
                <button class="faq-question">
                  <span>Is this the official West Bengal government website?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>No — this is an independent, citizen-friendly information resource explaining West Bengal government schemes in plain language. Always complete your actual application through the official government portal linked from each scheme's page.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>How many schemes does this site cover?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>This site currently covers 49+ pages across 13 categories, spanning agriculture, health, education, women's welfare, pensions, housing, and more.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Is it free to use this website?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Yes, completely free — there's no registration, subscription, or fee to browse scheme information on this site.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>I used to have Swasthya Sathi or Lakshmir Bhandar — do I need to do anything?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Both schemes have transitioned to new programmes in 2026 (Ayushman Bharat and Annapurna Bhandar respectively). Visit the relevant scheme's page on this site for what the transition means for you and what action, if any, you need to take.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>How do I know which scheme applies to me?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Use the eligibility-check widget above for a starting point, or browse by category if you already know roughly what kind of support you're looking for (farmer support, student scholarships, pensions, and so on).</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>How often is this site updated?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>Scheme details are reviewed and updated as official information changes, particularly important in 2026 given the number of scheme transitions following the state's change of government.</p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Can I check my application or payment status through this site?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" style="display: none;">
                  <p>This site provides step-by-step guidance on how to check your status on the relevant official portal for each scheme — links to the actual status-check tools are provided on each scheme's dedicated page.</p>
                </div>
              </div>
            </div>
          </section>

        </article>

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
            <li><a href="/schemes/farmer-schemes/index.html" class="footer-link">🌾 Farmer Welfare</a></li>
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

fs.writeFileSync(homepagePath, homepageHtml, 'utf8');
const newWordCountPage44 = getBodyWordCount(homepagePath);
console.log(`Page 44 (Homepage) Updated: ${oldWordCountPage44} words -> ${newWordCountPage44} words`);
