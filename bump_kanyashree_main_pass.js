const fs = require('fs');
const path = require('path');

const page21Path = path.join(__dirname, 'schemes', 'kanyashree-prakalpa', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const match = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  return match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content21 = fs.readFileSync(page21Path, 'utf8');
const p21Extra = `
<section class="content-block">
  <h2>Institutional Verification Workflow and Nodal Teacher Role</h2>
  <p>
    The administration of Kanyashree Prakalpa relies heavily on educational institutions across West Bengal to ensure transparent beneficiary management:
  </p>
  <ul>
    <li><strong>School Nodal Teachers:</strong> Every recognized high school and higher secondary institution designates a Kanyashree Nodal Teacher responsible for distributing Form K1/K2 and assisting students during submission.</li>
    <li><strong>Digital Data Entry:</strong> Nodal teachers digitize paper forms onto the portal at wbkanyashree.gov.in, verifying student attendance and unmarried declarations against school registers.</li>
    <li><strong>Block & District Approval:</strong> Submitted files are verified by the Block Development Officer (BDO) and formally sanctioned by the District Magistrate's office prior to IFMS fund release.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Special Coverage for Vulnerable Categories</h2>
  <p>
    To ensure complete social inclusion, Kanyashree Prakalpa incorporates special relaxation provisions:
  </p>
  <ul>
    <li><strong>Juvenile Justice Home Inmates:</strong> Resident girls in government-registered J.J. homes are eligible for K1 and K2 grants with age relaxation and simplified documentation.</li>
    <li><strong>Differently-Abled Students:</strong> Girls with 40% or higher physical or intellectual disability receive priority processing and automatic fee waivers across technical courses.</li>
    <li><strong>Orphaned Girls:</strong> Orphaned applicants are exempted from guardian income declarations upon certification by local social welfare officers.</li>
  </ul>
</section>
`;
content21 = content21.replace('</article>', `${p21Extra}\n</article>`);
fs.writeFileSync(page21Path, content21, 'utf8');

console.log(`Page 21 Final Word Count: ${getArticleWordCount(page21Path)} words`);
