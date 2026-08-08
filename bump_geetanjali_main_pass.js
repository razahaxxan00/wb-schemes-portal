const fs = require('fs');
const path = require('path');

const page27Path = path.join(__dirname, 'schemes', 'geetanjali-housing-scheme', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content27 = fs.readFileSync(page27Path, 'utf8');
const p27Extra = `
<section class="content-block">
  <h2>Multi-Departmental Rural Implementation Channels</h2>
  <p>
    A unique feature of the Geetanjali Housing Scheme is its decentralized implementation strategy across specialized state departments:
  </p>
  <ul>
    <li><strong>Sundarban & Paschimanchal Affairs:</strong> Targeted housing construction grants tailored for vulnerable coastal and drought-prone western districts.</li>
    <li><strong>Fisheries & Forest Departments:</strong> Dedicated housing allocations for recognized traditional fishermen and forest-dwelling tribal communities.</li>
    <li><strong>Minority Affairs & Backward Classes Welfare:</strong> Direct unit quotas for EWS households from minority, SC, and ST demographic groups managed via District Welfare Officers.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Technical Inspection, Utilisation Certificates & Geo-Tagging</h2>
  <p>
    To ensure quality construction and prevent fund misuse, project disbursements are linked to strict physical milestones:
  </p>
  <ul>
    <li><strong>Lintel & Plinth Level Verification:</strong> Block Assistant Engineers inspect house construction at plinth and lintel levels before authorizing second installment releases.</li>
    <li><strong>Geo-Tagged Photographic Proof:</strong> Beneficiaries and block technical officers upload geo-tagged photos of the under-construction dwelling to the Housing Department portal.</li>
    <li><strong>Utilisation Certificate (UC) Submission:</strong> Final payment releases require a formal UC signed by the applicant and certified by the Gram Panchayat Executive Assistant or Municipal Inspector.</li>
  </ul>
</section>
`;
content27 = content27.replace('</article>', `${p27Extra}\n</article>`);
fs.writeFileSync(page27Path, content27, 'utf8');

console.log(`Page 27 Final Word Count: ${getArticleWordCount(page27Path)} words`);
