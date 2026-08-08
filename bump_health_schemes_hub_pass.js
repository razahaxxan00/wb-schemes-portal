const fs = require('fs');
const path = require('path');

const page38Path = path.join(__dirname, 'schemes', 'health-schemes', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content38 = fs.readFileSync(page38Path, 'utf8');
const p38Extra = `
<section class="content-block">
  <h2>Empanelled Hospital Kiosks and Swasthya Sathi Mitras</h2>
  <p>
    To assist patients during emergency or planned hospital admissions across West Bengal:
  </p>
  <ul>
    <li><strong>Dedicated Kiosks in All Medical Colleges:</strong> Every government hospital, district secondary hospital, and major private nursing home houses a Swasthya Sathi helpdesk kiosk.</li>
    <li><strong>Swasthya Sathi Mitras:</strong> Stationed executive staff assist cardholders with biometric thumbprint validation, smart card activation, pre-authorization claims, and discharge package clearance.</li>
    <li><strong>24x7 Toll-Free Medical Helpline (1800-345-5384):</strong> Beneficiaries can verify hospital empanelment status, lodge refusal complaints, or track pre-authorization approvals anytime.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Coverage Packages for Specialized Secondary & Tertiary Procedures</h2>
  <p>
    State health insurance packages cover over 1,900 pre-defined medical procedures across clinical specialties:
  </p>
  <ul>
    <li><strong>Cardiology & Cardiothoracic Surgeries:</strong> Cashless coverage for coronary angioplasty, pacemaker implantation, and open-heart valve replacement procedures.</li>
    <li><strong>Oncology & Chemotherapy Packages:</strong> Medical, surgical, and radiation oncology treatments including chemotherapy cycles and PET scans.</li>
    <li><strong>Orthopedic Surgeries & Joint Replacements:</strong> Major orthopedic interventions, trauma care, and joint replacement surgeries without out-of-pocket payments.</li>
  </ul>
</section>
`;
content38 = content38.replace('</article>', `${p38Extra}\n</article>`);
fs.writeFileSync(page38Path, content38, 'utf8');

console.log(`Page 38 Final Word Count: ${getArticleWordCount(page38Path)} words`);
