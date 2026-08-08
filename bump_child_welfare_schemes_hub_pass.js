const fs = require('fs');
const path = require('path');

const page43Path = path.join(__dirname, 'schemes', 'child-welfare-schemes', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content43 = fs.readFileSync(page43Path, 'utf8');
const p43Extra = `
<section class="content-block">
  <h2>Integrated Child Protection Scheme (ICPS) and Non-Institutional Foster Care</h2>
  <p>
    For orphaned, abandoned, or destitute children needing institutional or family-based rehabilitation:
  </p>
  <ul>
    <li><strong>State Child Care Institutions (CCIs):</strong> Provides free shelter, education, medical care, and vocational training for vulnerable children in government and NGO-run specialized adoption agencies (SAAs).</li>
    <li><strong>Monthly Foster Care & Sponsorship Stipend:</strong> Families providing foster care to vulnerable or orphaned children receive a monthly financial sponsorship grant of ₹4,000 per child under ICPS guidelines.</li>
    <li><strong>Childline Toll-Free Helpline (1098):</strong> 24x7 emergency helpline for reporting child labor, trafficking, early marriage, or physical abuse, integrated with District Child Protection Units (DCPUs).</li>
  </ul>
</section>

<section class="content-block">
  <h2>Poshan Abhiyaan & Special Take-Home Ration (THR) Formulations</h2>
  <p>
    To eradicate severe acute malnutrition (SAM) among infants and young children across West Bengal:
  </p>
  <ul>
    <li><strong>Enhanced Fortified Take-Home Rations:</strong> Anganwadi centres distribute micro-nutrient fortified khichdi mix, lentils, and eggs specifically tailored for malnourished infants aged 6 to 36 months.</li>
    <li><strong>Nutritional Rehabilitation Centres (NRCs):</strong> Severely malnourished children are admitted to district hospital NRCs for intensive medical treatment, therapeutic feeding, and parental caregiving stipends.</li>
  </ul>
</section>

<section class="content-block">
  <h2>State Commission for Protection of Child Rights (WBSCPCR) Oversight</h2>
  <p>
    The statutory child rights commission enforces legal safeguards for all children across the state:
  </p>
  <ul>
    <li><strong>RTE Act Compliance & Anti-Dropout Monitoring:</strong> Audits government and private schools to enforce the 25% free seat reservation for economically disadvantaged children under the Right to Education Act.</li>
    <li><strong>POCSO Act Legal Support:</strong> Provides legal counseling, psychological support, and victim compensation processing for child abuse survivors.</li>
  </ul>
</section>
`;
content43 = content43.replace('</article>', `${p43Extra}\n</article>`);
fs.writeFileSync(page43Path, content43, 'utf8');

console.log(`Page 43 Final Word Count: ${getArticleWordCount(page43Path)} words`);
