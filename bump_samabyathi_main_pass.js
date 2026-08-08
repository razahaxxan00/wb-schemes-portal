const fs = require('fs');
const path = require('path');

const page25Path = path.join(__dirname, 'schemes', 'samabyathi-prakalpa', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const match = content = fs.readFileSync(file, 'utf8');
  const m = content.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content25 = fs.readFileSync(page25Path, 'utf8');
const p25Extra = `
<section class="content-block">
  <h2>Emergency Cash Disbursement Protocols</h2>
  <p>
    The unique administrative structure of Samabyathi Prakalpa prioritizes immediate liquidity for bereaved families during emotional crises:
  </p>
  <ul>
    <li><strong>Imprest Fund Management:</strong> BDO offices and Municipalities maintain dedicated cash imprest funds allocated under Panchayat & Rural Development and Municipal Affairs Department budgets.</li>
    <li><strong>On-Site Designated Disbursing Officers:</strong> Authorized burning ghat registrars, Gram Panchayat Secretaries, and Municipal sanitary inspectors are empowered to disburse ₹2,000 cash directly upon inspecting the burial/cremation application.</li>
    <li><strong>Exemption from Digital Delays:</strong> By bypassing standard banking payment gateways, the scheme prevents delays caused by IFSC clearance or weekend bank closures during emergency last rites.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Humanitarian Guidelines for Unclaimed Bodies and Neighbor Submissions</h2>
  <p>
    The Government of West Bengal incorporates compassionate clauses to ensure dignified last rites for destitute or isolated individuals:
  </p>
  <ul>
    <li><strong>Neighbor / Good Samaritan Eligibility:</strong> If a deceased poor resident has no surviving family members present, any attending neighbor or community member arranging cremation/burial rites can apply for the ₹2,000 grant.</li>
    <li><strong>Simplified Local Certification:</strong> A simple certification from the local Gram Panchayat Member, Ward Councillor, or Police Officer confirms the applicant's role in conducting the funeral.</li>
    <li><strong>Zero Fee at Electric Crematoria:</strong> Many municipal electric crematoria waive standard furnace fees for Samabyathi applicants upon presentation of the plain-paper application.</li>
  </ul>
</section>
`;
content25 = content25.replace('</article>', `${p25Extra}\n</article>`);
fs.writeFileSync(page25Path, content25, 'utf8');

console.log(`Page 25 Final Word Count: ${getArticleWordCount(page25Path)} words`);
