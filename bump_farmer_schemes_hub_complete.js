const fs = require('fs');
const path = require('path');

const page33Path = path.join(__dirname, 'schemes', 'farmer-schemes', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content33 = fs.readFileSync(page33Path, 'utf8');
const p33CompleteExtra = `
<section class="content-block">
  <h2>Kisan Credit Card (KCC) and Institutional Credit Linkages</h2>
  <p>
    To protect farming households from high-interest informal moneylenders, the West Bengal Department of Agriculture collaborates with Commercial Banks, Regional Rural Banks (RRBs), and District Central Cooperative Banks (DCCBs) to issue Kisan Credit Cards. KCC holders receive concessional crop loans up to ₹3 Lakh at an effective interest rate of 4% per annum (with prompt repayment interest subventions), securing seasonal liquidity for seeds, fertilizers, diesel, and labor payments across Kharif and Rabi cycles.
  </p>
</section>
`;
content33 = content33.replace('</article>', `${p33CompleteExtra}\n</article>`);
fs.writeFileSync(page33Path, content33, 'utf8');

console.log(`Page 33 Final Word Count: ${getArticleWordCount(page33Path)} words`);
