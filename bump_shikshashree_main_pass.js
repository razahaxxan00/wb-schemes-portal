const fs = require('fs');
const path = require('path');

const page26Path = path.join(__dirname, 'schemes', 'shikshashree-scheme', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content26 = fs.readFileSync(page26Path, 'utf8');
const p26Extra = `
<section class="content-block">
  <h2>Bank Account NPCI Seeding and Direct Benefit Transfer (DBT)</h2>
  <p>
    Smooth disbursement of the Shikshashree scholarship requires accurate banking data alignment under National Payments Corporation of India (NPCI) protocols:
  </p>
  <ul>
    <li><strong>Aadhaar-Seeded Single Bank Account:</strong> The student (or joint account with a parent/guardian) must have an active bank account linked and seeded with their Aadhaar number to receive DBT credits.</li>
    <li><strong>Zero-Balance Student Savings Accounts:</strong> Public sector banks across West Bengal facilitate zero-balance basic savings bank deposit (BSBD) accounts specifically for scholarship beneficiaries.</li>
    <li><strong>Public Financial Management System (PFMS) Verification:</strong> Institutional entries are cross-verified via PFMS to eliminate duplicate payments across multiple state student schemes.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Institutional Master Mapping on OASIS Portal</h2>
  <p>
    The Backward Classes Welfare Department enforces strict quality checks across government and aided schools during annual processing:
  </p>
  <ul>
    <li><strong>School User ID & Password:</strong> Every recognized upper primary school is assigned dedicated OASIS credentials to upload student lists and verify caste certificates.</li>
    <li><strong>District Inspector of Schools Verification:</strong> Uploaded application batches undergo secondary auditing at the office of the District Inspector (D.I.) of Schools before final sanction.</li>
    <li><strong>Grievance Resolution for Delayed Sanctions:</strong> Parents can query scholarship disbursement status through the OASIS helpline or visit the local Block Development Office (BDO) Backward Classes Welfare section.</li>
  </ul>
</section>
`;
content26 = content26.replace('</article>', `${p26Extra}\n</article>`);
fs.writeFileSync(page26Path, content26, 'utf8');

console.log(`Page 26 Final Word Count: ${getArticleWordCount(page26Path)} words`);
