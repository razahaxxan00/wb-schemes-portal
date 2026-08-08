const fs = require('fs');
const path = require('path');

const page17Path = path.join(__dirname, 'schemes', 'bangla-shasya-bima', 'index.html');
const page18Path = path.join(__dirname, 'schemes', 'bangla-shasya-bima', 'apply-form', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const match = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  return match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content17 = fs.readFileSync(page17Path, 'utf8');
content17 = content17.replace(
  'Enrolling seasonal crop declarations promptly before official closing dates protects farming households against unexpected weather shifts and ensures full inclusion in state disaster relief payouts.',
  'Enrolling seasonal crop declarations promptly before official closing dates protects farming households against unexpected weather shifts and ensures full inclusion in state disaster relief payouts across all agricultural blocks.'
);
fs.writeFileSync(page17Path, content17, 'utf8');


let content18 = fs.readFileSync(page18Path, 'utf8');
const p18Extra3 = `
<section class="content-block">
  <h2>Verification of Bank Account Seeding and Direct Benefit Transfer</h2>
  <p>
    Because all compensation payouts under Bangla Shasya Bima are disbursed electronically through the Public Financial Management System (PFMS), verifying bank account details is critical:
  </p>
  <ul>
    <li>Confirm that your bank account is active and seeded with your Aadhaar number in the National Payments Corporation of India (NPCI) mapper.</li>
    <li>Ensure the bank account holder's name matches the name on your Aadhaar card and land Parcha exactly.</li>
    <li>In case of recent bank branch mergers or IFSC changes, submit an updated bank passbook photocopy to your local Krishi Bhavan to prevent transaction bounce errors.</li>
  </ul>
</section>
`;
content18 = content18.replace('</article>', `${p18Extra3}\n</article>`);
fs.writeFileSync(page18Path, content18, 'utf8');

console.log(`Page 17 Final Word Count: ${getArticleWordCount(page17Path)} words`);
console.log(`Page 18 Final Word Count: ${getArticleWordCount(page18Path)} words`);
