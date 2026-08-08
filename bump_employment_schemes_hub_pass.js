const fs = require('fs');
const path = require('path');

const page39Path = path.join(__dirname, 'schemes', 'employment-schemes', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content39 = fs.readFileSync(page39Path, 'utf8');
const p39Extra = `
<section class="content-block">
  <h2>National Skill Qualification Framework (NSQF) Certification Standards</h2>
  <p>
    Vocational training under Utkarsh Bangla adheres strictly to National Skill Qualification Framework (NSQF) levels 3 through 6:
  </p>
  <ul>
    <li><strong>Government-Recognized Skill Certificates:</strong> Trainees completing assessment evaluations receive joint certification from PBSSD and NCVET (National Council for Vocational Education and Training).</li>
    <li><strong>Corporate Recruiter Partnerships:</strong> Over 1,200 empanelled industrial units, IT parks, retail chains, and healthcare groups conduct direct campus interviews at ITIs and Polytechnic institutes.</li>
    <li><strong>Free Uniforms, Course Materials, and Daily Stipends:</strong> Enrolled candidates, particularly female students from Kanyashree institutions, receive free learning kits and daily attendance stipends.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Karma Sathi Prakalpa — Self-Employment Loans for Youth</h2>
  <p>
    For unemployed youth seeking to establish micro-enterprises or small businesses rather than wage jobs:
  </p>
  <ul>
    <li><strong>Subsidized Loans up to ₹2 Lakh:</strong> Scheme provides soft loans up to ₹2,00,000 for manufacturing, trading, or service enterprises with 15% state capital subsidy (up to ₹25,000).</li>
    <li><strong>Co-Operative & Commercial Bank Tie-ups:</strong> Applications are processed through the Co-operation Department and state-run banks with interest subsidy assistance.</li>
    <li><strong>Target Group:</strong> Open to unemployed youth aged 18 to 50 who have passed Class 8 or above, managed via <code>karmasathi.wb.gov.in</code>.</li>
  </ul>
</section>

<section class="content-block">
  <h2>West Bengal Apprenticeship Scheme (WBAS) Stipend Subsidies</h2>
  <p>
    To incentivize private MSMEs and industrial units to hire local youth as apprentices:
  </p>
  <ul>
    <li><strong>50% State Stipend Re-imbursement:</strong> Government reimburses 50% of the prescribed monthly apprenticeship stipend (up to ₹4,500/month per apprentice) to registered employers.</li>
    <li><strong>On-the-Job Industrial Exposure:</strong> Graduates and diploma holders gain 12 to 24 months of practical shop-floor training across manufacturing plants and technology hubs.</li>
  </ul>
</section>
`;
content39 = content39.replace('</article>', `${p39Extra}\n</article>`);
fs.writeFileSync(page39Path, content39, 'utf8');

console.log(`Page 39 Final Word Count: ${getArticleWordCount(page39Path)} words`);
