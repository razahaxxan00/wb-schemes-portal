const fs = require('fs');
const path = require('path');

const page40Path = path.join(__dirname, 'schemes', 'minority-schemes', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content40 = fs.readFileSync(page40Path, 'utf8');
const p40Extra = `
<section class="content-block">
  <h2>WBMDFC Micro-Finance Direct Lending to Minority Women SHGs</h2>
  <p>
    In addition to individual term loans, WBMDFC provides micro-credit to women belonging to notified minority communities:
  </p>
  <ul>
    <li><strong>Direct Group Credit (up to ₹30,000 per member):</strong> Minority Self-Help Groups (SHGs) registered under Anandadhara / NRLM receive direct micro-finance loans at a 3% annual interest rate to support tailoring, handicraft, and food processing micro-units.</li>
    <li><strong>Simplified Group Guarantee:</strong> Requires no individual collateral; loans are disbursed to the SHG bank account based on group solidarity and repayment history.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Haj House Infrastructure and Cultural Welfare Initiatives</h2>
  <p>
    The Minority Affairs and Madrasah Education Department oversees dedicated cultural and pilgrimage infrastructure across West Bengal:
  </p>
  <ul>
    <li><strong>State Haj Committee & Transit Infrastructure:</strong> Operates modern Haj Houses at Rajarhat, Kolkata, providing free lodging, visa processing desks, medical check-ups, and transit support for pilgrims.</li>
    <li><strong>Aliah University Academic Empowerment:</strong> Supports higher research, technical education, and language studies through autonomous state minority universities.</li>
  </ul>
</section>
`;
content40 = content40.replace('</article>', `${p40Extra}\n</article>`);
fs.writeFileSync(page40Path, content40, 'utf8');

console.log(`Page 40 Final Word Count: ${getArticleWordCount(page40Path)} words`);
