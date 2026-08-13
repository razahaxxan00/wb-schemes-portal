const fs = require('fs');
const path = require('path');

const rootDir = __dirname;

function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file.startsWith('.')) continue;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getAllHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const checkSvg = `<div class="trust-check-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>`;

// -------------------------------------------------------------
// 1. UPDATE HOMEPAGE (index.html) WITH POLISHED HTML STRUCTURE
// -------------------------------------------------------------
const indexPath = path.join(rootDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Add data-category attributes to category cards for color coding
indexContent = indexContent.replace(/<a href="\/schemes\/social-welfare\/" class="category-card">/g, '<a href="/schemes/social-welfare/" class="category-card" data-category="social">');
indexContent = indexContent.replace(/<a href="\/schemes\/women-welfare\/" class="category-card">/g, '<a href="/schemes/women-welfare/" class="category-card" data-category="women">');
indexContent = indexContent.replace(/<a href="\/schemes\/farmer-schemes\/" class="category-card">/g, '<a href="/schemes/farmer-schemes/" class="category-card" data-category="farmer">');
indexContent = indexContent.replace(/<a href="\/schemes\/student-schemes\/" class="category-card">/g, '<a href="/schemes/student-schemes/" class="category-card" data-category="student">');
indexContent = indexContent.replace(/<a href="\/schemes\/scholarship-schemes\/" class="category-card">/g, '<a href="/schemes/scholarship-schemes/" class="category-card" data-category="scholarship">');
indexContent = indexContent.replace(/<a href="\/schemes\/pension-schemes\/" class="category-card">/g, '<a href="/schemes/pension-schemes/" class="category-card" data-category="pension">');
indexContent = indexContent.replace(/<a href="\/schemes\/housing-schemes\/" class="category-card">/g, '<a href="/schemes/housing-schemes/" class="category-card" data-category="housing">');
indexContent = indexContent.replace(/<a href="\/schemes\/health-schemes\/" class="category-card">/g, '<a href="/schemes/health-schemes/" class="category-card" data-category="health">');
indexContent = indexContent.replace(/<a href="\/schemes\/employment-schemes\/" class="category-card">/g, '<a href="/schemes/employment-schemes/" class="category-card" data-category="employment">');
indexContent = indexContent.replace(/<a href="\/schemes\/minority-schemes\/" class="category-card">/g, '<a href="/schemes/minority-schemes/" class="category-card" data-category="minority">');
indexContent = indexContent.replace(/<a href="\/schemes\/disability-schemes\/" class="category-card">/g, '<a href="/schemes/disability-schemes/" class="category-card" data-category="disability">');
indexContent = indexContent.replace(/<a href="\/schemes\/senior-citizen-schemes\/" class="category-card">/g, '<a href="/schemes/senior-citizen-schemes/" class="category-card" data-category="senior">');
indexContent = indexContent.replace(/<a href="\/schemes\/child-welfare-schemes\/" class="category-card">/g, '<a href="/schemes/child-welfare-schemes/" class="category-card" data-category="child">');

// Upgrade "Why Trust This Portal" section with checkmark trust badges
const oldTrustSection = `<section class="content-block">\s*<h2>Why Trust This Portal\?<\/h2>[\s\S]*?<\/section>`;
const newTrustSectionHtml = `<section class="content-block">
            <h2>Why Trust This Portal?</h2>
            <p>
              This portal is an independent public information initiative created to make West Bengal government scheme information easy to find, easy to understand, and easy to act on. Here is how we ensure our content stays trustworthy:
            </p>
            <div class="trust-list">
              <div class="trust-item">
                ${checkSvg}
                <div class="trust-item-text">
                  <h4>Plain-Language Explanations</h4>
                  <p>We break down legal terminology, complex eligibility criteria, and administrative rules into simple, clear instructions everyone can follow.</p>
                </div>
              </div>
              <div class="trust-item">
                ${checkSvg}
                <div class="trust-item-text">
                  <h4>Step-by-Step Guidance</h4>
                  <p>Clear walkthroughs for every step — from finding forms and compiling documents to submitting applications and checking status.</p>
                </div>
              </div>
              <div class="trust-item">
                ${checkSvg}
                <div class="trust-item-text">
                  <h4>Kept Current Through 2026's Changes</h4>
                  <p>Regularly audited to reflect ongoing policy shifts, such as the Ayushman Bharat transition and Annapurna Bhandar updates.</p>
                </div>
              </div>
              <div class="trust-item">
                ${checkSvg}
                <div class="trust-item-text">
                  <h4>100% Independent & Free</h4>
                  <p>We do not collect personal data, charge fees, or ask for private documents. All official portal links point directly to .gov.in domains.</p>
                </div>
              </div>
            </div>
          </section>`;

indexContent = indexContent.replace(new RegExp(oldTrustSection, 'i'), newTrustSectionHtml);

// Upgrade "View All Posts" / secondary buttons to .btn-outline-navy
indexContent = indexContent.replace(
  /<a href="\/blog\/" class="body-link">View All Posts →<\/a>/g,
  '<a href="/blog/" class="btn-outline-navy">View All Posts →</a>'
);

fs.writeFileSync(indexPath, indexContent, 'utf8');
console.log('Upgraded homepage (index.html) with category data-attributes, trust checkmarks, and polished buttons!');

// -------------------------------------------------------------
// 2. SITEWIDE CATEGORY DATA ATTRIBUTES PASS
// -------------------------------------------------------------
const htmlFiles = getAllHtmlFiles(rootDir);
let updatedCount = 0;

for (const file of htmlFiles) {
  if (file === indexPath) continue;
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  if (content.includes('class="category-card"')) {
    content = content.replace(/<a href="\/schemes\/social-welfare\/" class="category-card">/g, '<a href="/schemes/social-welfare/" class="category-card" data-category="social">');
    content = content.replace(/<a href="\/schemes\/women-welfare\/" class="category-card">/g, '<a href="/schemes/women-welfare/" class="category-card" data-category="women">');
    content = content.replace(/<a href="\/schemes\/farmer-schemes\/" class="category-card">/g, '<a href="/schemes/farmer-schemes/" class="category-card" data-category="farmer">');
    content = content.replace(/<a href="\/schemes\/student-schemes\/" class="category-card">/g, '<a href="/schemes/student-schemes/" class="category-card" data-category="student">');
    content = content.replace(/<a href="\/schemes\/scholarship-schemes\/" class="category-card">/g, '<a href="/schemes/scholarship-schemes/" class="category-card" data-category="scholarship">');
    content = content.replace(/<a href="\/schemes\/pension-schemes\/" class="category-card">/g, '<a href="/schemes/pension-schemes/" class="category-card" data-category="pension">');
    content = content.replace(/<a href="\/schemes\/housing-schemes\/" class="category-card">/g, '<a href="/schemes/housing-schemes/" class="category-card" data-category="housing">');
    content = content.replace(/<a href="\/schemes\/health-schemes\/" class="category-card">/g, '<a href="/schemes/health-schemes/" class="category-card" data-category="health">');
    content = content.replace(/<a href="\/schemes\/employment-schemes\/" class="category-card">/g, '<a href="/schemes/employment-schemes/" class="category-card" data-category="employment">');
    content = content.replace(/<a href="\/schemes\/minority-schemes\/" class="category-card">/g, '<a href="/schemes/minority-schemes/" class="category-card" data-category="minority">');
    content = content.replace(/<a href="\/schemes\/disability-schemes\/" class="category-card">/g, '<a href="/schemes/disability-schemes/" class="category-card" data-category="disability">');
    content = content.replace(/<a href="\/schemes\/senior-citizen-schemes\/" class="category-card">/g, '<a href="/schemes/senior-citizen-schemes/" class="category-card" data-category="senior">');
    content = content.replace(/<a href="\/schemes\/child-welfare-schemes\/" class="category-card">/g, '<a href="/schemes/child-welfare-schemes/" class="category-card" data-category="child">');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
  }
}

console.log(`Successfully applied category color-coding data attributes across ${updatedCount} HTML files!`);
