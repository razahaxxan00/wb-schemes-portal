const fs = require('fs');
const path = require('path');

const page41Path = path.join(__dirname, 'schemes', 'disability-schemes', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content41 = fs.readFileSync(page41Path, 'utf8');
const p41Extra = `
<section class="content-block">
  <h2>Unique Disability ID (UDID) Card Online Registration Workflow</h2>
  <p>
    Under the Rights of Persons with Disabilities Act 2016, West Bengal has migrated to the national UDID portal (<code>swavlambancard.gov.in</code>) for digital certification:
  </p>
  <ul>
    <li><strong>Single Digital Identity across India:</strong> The smart UDID card eliminates the need for holding multiple paper disability certificates across state and central government departments.</li>
    <li><strong>Hospital Board Assessment Scheduling:</strong> Applicants submit online registration with Aadhaar details, after which an automated SMS notifies them of their physical assessment date at their designated District CMOH Hospital Board.</li>
    <li><strong>QR-Coded Smart Card Issuance:</strong> Once approved by the medical board, a laminated QR-coded UDID card is delivered directly to the beneficiary's home address via registered post.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Accessible Public Infrastructure and Barrier-Free Accessibility Mandates</h2>
  <p>
    West Bengal enforces statutory accessibility standards across public transport, government offices, and educational institutions:
  </p>
  <ul>
    <li><strong>Ramp and Lift Retrofitting in Public Buildings:</strong> Municipalities and district collectorates mandate tactile paving, wheelchair ramps, and braille signage across all public service centers.</li>
    <li><strong>Accessible Mass Rapid Transit:</strong> Kolkata Metro Rail and state bus terminals incorporate audio-visual announcements and dedicated low-floor bus services for PwD commuters.</li>
  </ul>
</section>
`;
content41 = content41.replace('</article>', `${p41Extra}\n</article>`);
fs.writeFileSync(page41Path, content41, 'utf8');

console.log(`Page 41 Final Word Count: ${getArticleWordCount(page41Path)} words`);
