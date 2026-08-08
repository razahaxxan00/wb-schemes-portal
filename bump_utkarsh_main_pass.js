const fs = require('fs');
const path = require('path');

const page30Path = path.join(__dirname, 'schemes', 'utkarsh-bangla', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content30 = fs.readFileSync(page30Path, 'utf8');
const p30Extra = `
<section class="content-block">
  <h2>Training Quality Control, NSQF Alignment and Biometric Audits</h2>
  <p>
    To guarantee high instructional standards across all 23 districts, the Paschim Banga Society for Skill Development (PBSSD) implements strict quality management controls:
  </p>
  <ul>
    <li><strong>NSQF & Sector Skill Council Accreditation:</strong> All short-term courses are aligned with National Skills Qualifications Framework (NSQF) levels (Levels 3 to 6), ensuring standardized practical curricula across ITIs and private training hubs.</li>
    <li><strong>Time-Stamped Biometric Monitoring:</strong> Daily attendance of both trainers and students is captured via Aadhaar-enabled biometric attendance systems (AEBAS) to eliminate proxy attendance and verify course completion hours.</li>
    <li><strong>Third-Party Skill Assessment:</strong> Final practical assessments and theory examinations are conducted by independent Sector Skill Council (SSC) assessors before digital certificates are generated on the PBSSD portal.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Corporate Placement Melas, Apprenticeships and Entrepreneurship Loans</h2>
  <p>
    Utkarsh Bangla integrates skill certification with active employment facilitation infrastructure across West Bengal:
  </p>
  <ul>
    <li><strong>District Level Placement Fairs (Utkarsh Melas):</strong> The Department of Technical Education organizes quarterly job fairs in Kolkata, Siliguri, Asansol, and Kharagpur, bringing together top employers like Samsung, Tata Motors, and Berger Paints for direct campus hiring.</li>
    <li><strong>National Apprenticeship Promotion Scheme (NAPS):</strong> Certified candidates are onboarded onto the NAPS and West Bengal Apprenticeship portals, securing paid industry apprenticeships with monthly stipends.</li>
    <li><strong>Bhavishyat Credit Card & Self-Employment Capital:</strong> Trainees seeking self-employment in trades like tailoring, electrical repair, or beauty services are linked with the Bhavishyat Credit Card scheme for low-interest business loans up to ₹5 lakh.</li>
  </ul>
</section>
`;
content30 = content30.replace('</article>', `${p30Extra}\n</article>`);
fs.writeFileSync(page30Path, content30, 'utf8');

console.log(`Page 30 Final Word Count: ${getArticleWordCount(page30Path)} words`);
