const fs = require('fs');
const path = require('path');

const page37Path = path.join(__dirname, 'schemes', 'housing-schemes', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content37 = fs.readFileSync(page37Path, 'utf8');
const p37Extra = `
<section class="content-block">
  <h2>Housing Construction Milestone Instalment Tranches</h2>
  <p>
    Financial assistance under both Banglar Bari Prakalpa and Geetanjali Housing Scheme is disbursed in structured milestone tranches to guarantee genuine home construction:
  </p>
  <ul>
    <li><strong>First Instalment (Foundation Stage):</strong> ₹60,000 released upon administrative sanction and ground layout approval by Gram Panchayat / Block engineers.</li>
    <li><strong>Second Instalment (Lintel / Roof Level Stage):</strong> ₹50,000 credited after physical inspection and geotagged photograph upload showing completed wall masonry and roof shuttering.</li>
    <li><strong>Final Instalment (Completion & Sanitation Stage):</strong> Remaining ₹10,000 to ₹20,000 released upon completion of doors, windows, external plastering, and an integrated twin-pit sanitary latrine.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Special Housing Provisions for Climate-Vulnerable Regions</h2>
  <p>
    Recognizing ecological and disaster risks across West Bengal, state housing programs incorporate localized construction adaptations:
  </p>
  <ul>
    <li><strong>Sundarbans & Coastal Cyclone Belts:</strong> Raised plinth foundations and reinforced concrete pillar specifications protect homes from tidal surges and saline flooding.</li>
    <li><strong>Paschimanchal & Forest Fringe Zones:</strong> Specialized EWS housing grants cover disaster-resistant roof tiles and elephant-conflict safety barriers in Jhargram, Purulia, and Bankura districts.</li>
    <li><strong>Urban Slum Redevelopment:</strong> Landless urban families receive apartment allotment rights under municipal group housing projects administered by urban local bodies (ULBs).</li>
  </ul>
</section>

<section class="content-block">
  <h2>District Housing Cell Sanctions and AwaasSoft Tracking</h2>
  <p>
    Verification and fund release for housing grants are coordinated between district magistrate housing cells and digital reporting servers:
  </p>
  <ul>
    <li><strong>Geotagged Mobile Inspection (AwaasApp):</strong> Panchayat technical assistants capture time-stamped mobile photos at each construction stage (Plinth, Lintel, Completed) for audit compliance.</li>
    <li><strong>Direct Treasury Disbursement:</strong> Financial grants are transferred directly into Aadhaar-seeded single savings accounts via IFMS electronic treasury clearing.</li>
    <li><strong>Public Inquiry & Grievance Counters:</strong> Beneficiaries facing instalment holds can track their house status using survey IDs at BDO housing desks or District Magistrate offices.</li>
  </ul>
</section>
`;
content37 = content37.replace('</article>', `${p37Extra}\n</article>`);
fs.writeFileSync(page37Path, content37, 'utf8');

console.log(`Page 37 Final Word Count: ${getArticleWordCount(page37Path)} words`);
