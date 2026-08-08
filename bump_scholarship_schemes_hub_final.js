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
const p35FinalExtra = `
<section class="content-block">
  <h2>Hosteller vs. Day Scholar Maintenance Rates Comparison</h2>
  <p>
    Scholarship amounts under state portals like Oasis and Aikyashree differentiate between day scholars and students residing in recognized hostels:
  </p>
  <ul>
    <li><strong>Day Scholar Allowances:</strong> Cover basic tuition fees, book purchases, and routine school transportation, ranging from ₹1,000 to ₹5,500 per annum across secondary and degree levels.</li>
    <li><strong>Hosteller Maintenance Rates:</strong> Provide enhanced monthly maintenance stipends (up to ₹1,200/month or ₹14,400/year) to cover mess charges and hostel accommodation expenses for students residing away from home.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Special Disability Reader Allowances and Special Equipment Support</h2>
  <p>
    Students with benchmark disabilities (40% or higher) receiving state scholarships qualify for additional supportive allowances:
  </p>
  <ul>
    <li><strong>Reader Allowance for Visually Impaired Trainees:</strong> Visually impaired scholars receive additional monthly allowances (₹1,000 to ₹2,000/month) to compensate reader assistants.</li>
    <li><strong>Escort and Prosthetic Device Support:</strong> Orthopedically or hearing-impaired students receive one-time grants for purchasing hearing aids, wheelchairs, and specialized learning devices under Social Welfare Department guidelines.</li>
  </ul>
</section>
`;
content35 = content35.replace('</article>', `${p35FinalExtra}\n</article>`);
fs.writeFileSync(page35Path, content35, 'utf8');

console.log(`Page 35 Final Word Count: ${getArticleWordCount(page35Path)} words`);
