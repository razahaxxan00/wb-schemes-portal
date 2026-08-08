const fs = require('fs');
const path = require('path');

const homepagePath = path.join(__dirname, 'index.html');

function getBodyWordCount(file) {
  const content = fs.readFileSync(file, 'utf8');
  const match = content.match(/<main[\s\S]*?<\/main>/i) || content.match(/<body[\s\S]*?<\/body>/i);
  if (!match) return 0;
  const text = match[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return text.split(' ').length;
}

let content44 = fs.readFileSync(homepagePath, 'utf8');
const p44Extra = `
<section class="content-block">
  <h2>Key Digital Portals & On-Ground Outreach Channels</h2>
  <p>
    Accessing West Bengal government schemes relies on a combination of online web portals and door-step outreach initiatives:
  </p>
  <ul>
    <li><strong>Duare Sarkar Outreach Camps:</strong> Seasonal administrative camps organized across every Gram Panchayat and Municipal ward allow citizens to submit applications, complete Aadhaar biometric verification, and check scheme enrolment status in person.</li>
    <li><strong>Banglar Shiksha Portal (banglarshiksha.gov.in):</strong> Centralized educational management system tracking student enrolment, textbook delivery, bicycle allocation under Sabooj Sathi, and school scholarship applications.</li>
    <li><strong>West Bengal e-District Portal (edistrict.wb.gov.in):</strong> Online gateway for issuing official income certificates, residential proof, caste certificates (SC/ST/OBC), and local governance clearances required across welfare applications.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Direct Benefit Transfer (DBT) & NPCI Bank Account Seeding</h2>
  <p>
    Over 95% of state cash assistance schemes transfer benefits directly to citizen bank accounts via automated clearing networks:
  </p>
  <ul>
    <li><strong>Aadhaar Payment Bridge System (APBS):</strong> Ensures monthly cash stipends (Annapurna Bhandar, Jai Bangla, Manabik) are credited seamlessly without bank branch delays.</li>
    <li><strong>NPCI Bank Account Mapping:</strong> Beneficiaries must ensure their primary savings account is linked to Aadhaar and mapped on the National Payments Corporation of India (NPCI) mapper to prevent credit holds.</li>
    <li><strong>WBIFMS Automated Clearing:</strong> Government treasury payments are processed electronically on fixed monthly schedules, providing SMS notifications upon successful credit.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Inter-Departmental Verification and Data Privacy Protection</h2>
  <p>
    To protect citizen data and prevent fraudulent duplicate applications:
  </p>
  <ul>
    <li><strong>Automated Database Cross-Checking:</strong> Applications submitted at Duare Sarkar or online portals are cross-verified against state databases (Ration Card, Land Records, Caste Certificate Registry).</li>
    <li><strong>Data Encryption & Security Protocols:</strong> Official portals utilize SSL encryption and OTP-based mobile authentication to safeguard applicant personal details and bank credentials.</li>
  </ul>
</section>
`;
content44 = content44.replace('</article>', `${p44Extra}\n</article>`);
fs.writeFileSync(homepagePath, content44, 'utf8');

console.log(`Page 44 Final Word Count: ${getBodyWordCount(homepagePath)} words`);
