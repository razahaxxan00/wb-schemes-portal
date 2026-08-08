const fs = require('fs');
const path = require('path');

const page34Path = path.join(__dirname, 'schemes', 'student-schemes', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content34 = fs.readFileSync(page34Path, 'utf8');
const p34Extra = `
<section class="content-block">
  <h2>West Bengal Student Credit Card Scheme (WBSCC)</h2>
  <p>
    For students pursuing higher education, professional degrees, or competitive exam preparation, the state government provides accessible financial credit:
  </p>
  <ul>
    <li><strong>Collateral-Free Loan up to ₹10 Lakh:</strong> Students studying in Class 10 pass onward can obtain education loans up to ₹10,00,000 at a nominal 4% simple interest rate, guaranteed entirely by the Government of West Bengal without requiring third-party collateral or property security.</li>
    <li><strong>Flexible Moratorium & Repayment:</strong> A 15-year repayment period begins 1 year after completing higher education courses or securing employment.</li>
    <li><strong>Coverage for Domestic & Overseas Institutions:</strong> Covers tuition fees, hostel expenses, laptops, and study materials for undergraduate, postgraduate, engineering, medical, and competitive coaching courses across India and abroad.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Aikyashree Scholarship Framework for Minority Students</h2>
  <p>
    Administered by the West Bengal Minorities' Development and Finance Corporation (WBMDFC), Aikyashree supports students belonging to Buddhist, Christian, Jain, Muslim, Parsee, and Sikh communities:
  </p>
  <ul>
    <li><strong>Pre-Matric & Post-Matric Stipends:</strong> Financial assistance ranging from ₹1,100 to ₹10,200 per year for students studying from Class 1 through Class 12, ITI, and polytechnics.</li>
    <li><strong>Merit-cum-Means (MCM) Scholarship:</strong> Professional and technical degree students (B.Tech, MBBS, MBA, MCA) receive up to ₹33,000 per year to cover course fees.</li>
    <li><strong>Swami Vivekananda Merit-cum-Means (SVMCM) Integration:</strong> High-performing minority students obtaining 60%+ marks in board examinations qualify for enhanced stipends up to ₹60,000 per year.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Banglar Shiksha Portal Integration and School Nodal Verification</h2>
  <p>
    To prevent scholarship payment delays and streamline student data management, West Bengal utilizes unified educational technology infrastructure:
  </p>
  <ul>
    <li><strong>Banglar Shiksha Student ID (BSID):</strong> Every enrolled student is assigned a unique 14-digit Banglar Shiksha ID linking academic progress, attendance records, and welfare scheme eligibility across schools.</li>
    <li><strong>School Nodal Officer Verification:</strong> Designated teacher-in-charge officers inspect Aadhaar details, mark sheets, and single-operated bank accounts before uploading institutional recommendations onto state scheme portals.</li>
    <li><strong>Direct Benefit Transfer (DBT) Payouts:</strong> Scholarship amounts are transferred directly into verified student bank accounts via IFMS automated clearing system.</li>
  </ul>
</section>
`;
content34 = content34.replace('</article>', `${p34Extra}\n</article>`);
fs.writeFileSync(page34Path, content34, 'utf8');

console.log(`Page 34 Final Word Count: ${getArticleWordCount(page34Path)} words`);
