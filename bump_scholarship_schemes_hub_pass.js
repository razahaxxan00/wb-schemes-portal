const fs = require('fs');
const path = require('path');

const page35Path = path.join(__dirname, 'schemes', 'scholarship-schemes', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content35 = fs.readFileSync(page35Path, 'utf8');
const p35Extra = `
<section class="content-block">
  <h2>Swami Vivekananda Merit-cum-Means (SVMCM) Scholarship Framework</h2>
  <p>
    For high-performing students pursuing higher secondary, undergraduate, postgraduate, and doctoral studies in West Bengal:
  </p>
  <ul>
    <li><strong>Merit Criterion (60%+ Marks):</strong> Students scoring 60% or higher marks in Madhyamik, Higher Secondary, or undergraduate degree examinations qualify for merit-based financial stipends.</li>
    <li><strong>Monthly Financial Support Rates:</strong> Grants range from ₹1,000 per month for Higher Secondary students up to ₹5,000 per month for M.Phil and Ph.D. scholars across general, technical, and medical streams.</li>
    <li><strong>Bikash Bhavan Web Portal (svmcm.wbhed.gov.in):</strong> Applications are submitted directly on the official Higher Education Department portal with digital mark sheet verification.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Income Certificate Issuance Guidelines for Scholarship Applicants</h2>
  <p>
    Since most state scholarships require proof of family income below specific annual ceilings (₹1.0 Lakh to ₹2.5 Lakh), applicants must submit valid revenue certificates:
  </p>
  <ul>
    <li><strong>Competent Issuing Authorities:</strong> Income certificates must be issued by a Block Development Officer (BDO), Sub-Divisional Officer (SDO), Joint BDO, or Executive Officer of a Municipality/Corporation.</li>
    <li><strong>Pradhan / Councillor Recommendations:</strong> Certificates issued by Gram Panchayat Pradhans or Municipal Councillors serve as preliminary recommendations and must be countersigned by BDO/SDO officers.</li>
    <li><strong>e-District Digital Certificate Portal:</strong> Applicants can request digital income certificates online through the West Bengal e-District portal (edistrict.wb.gov.in) using Aadhaar authentication.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Audit and Physical Document Verification Protocols</h2>
  <p>
    To ensure transparent disbursement and prevent duplicate claims across multiple portals:
  </p>
  <ul>
    <li><strong>Institutional Level Verification (Level 1):</strong> School headmasters and college principals verify candidate mark sheets, caste certificates, and admission receipts before institutional portal approval.</li>
    <li><strong>District Welfare Officer Inspection (Level 2):</strong> District Inspectors of Schools (DI) and Backward Classes Welfare officers conduct sample physical document audits prior to treasury fund release.</li>
    <li><strong>Single Scholarship Rule Compliance:</strong> Automated cross-checking across Oasis, Aikyashree, and SVMCM database servers blocks duplicate disbursements for the same academic year.</li>
  </ul>
</section>
`;
content35 = content35.replace('</article>', `${p35Extra}\n</article>`);
fs.writeFileSync(page35Path, content35, 'utf8');

console.log(`Page 35 Final Word Count: ${getArticleWordCount(page35Path)} words`);
