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
const p37FinalExtra = `
<section class="content-block">
  <h2>Convergence with MGNREGA Unskilled Labor Wages</h2>
  <p>
    Rural housing beneficiaries under Banglar Bari and Geetanjali receive additional financial benefits through labor convergence with MGNREGA (100 Days Work scheme):
  </p>
  <ul>
    <li><strong>90 to 95 Mandays of Wage Support:</strong> Beneficiaries or eligible household members working on their own house construction earn 90 to 95 mandays of unskilled labor wages (worth approximately ₹22,000 to ₹25,000 extra) credited directly to their job card bank accounts.</li>
    <li><strong>SBM-G Household Toilet Incentive:</strong> An additional ₹12,000 grant is provided under Swachh Bharat Mission (Gramin) for constructing an attached pour-flush toilet.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Integration with Basic Utilities (Electricity & LPG Connections)</h2>
  <p>
    Completed pucca houses are integrated with basic household infrastructure before final clearance certification:
  </p>
  <ul>
    <li><strong>Saubhagya Household Electricity Connection:</strong> Power utility companies provide free single-phase electricity connections and digital meters to newly constructed Banglar Bari homes.</li>
    <li><strong>Clean Cooking Energy Support:</strong> Beneficiaries are linked with liquid petroleum gas (LPG) distribution agencies for free initial stove and cylinder setups under clean fuel initiatives.</li>
  </ul>
</section>
`;
content37 = content37.replace('</article>', `${p37FinalExtra}\n</article>`);
fs.writeFileSync(page37Path, content37, 'utf8');

console.log(`Page 37 Final Word Count: ${getArticleWordCount(page37Path)} words`);
