const fs = require('fs');
const path = require('path');

const page31Path = path.join(__dirname, 'schemes', 'social-welfare', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content31 = fs.readFileSync(page31Path, 'utf8');
const p31FinalExtra = `
<section class="content-block">
  <h2>Financial Literacy and Bank Account Seeding Mandates</h2>
  <p>
    To ensure seamless Direct Benefit Transfer (DBT) credit across all social welfare schemes, beneficiaries must link their active bank accounts with Aadhaar and ensure National Payments Corporation of India (NPCI) mapping at their bank branch. Single-operated savings accounts avoid payment rejections, guaranteeing uninterrupted monthly pension, scholarship, and cash incentive credits.
  </p>
</section>
`;
content31 = content31.replace('</article>', `${p31FinalExtra}\n</article>`);
fs.writeFileSync(page31Path, content31, 'utf8');

console.log(`Page 31 Final Word Count: ${getArticleWordCount(page31Path)} words`);
