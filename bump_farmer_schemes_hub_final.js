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
const p33FinalExtra = `
<section class="content-block">
  <h2>Farm Mechanization Subsidies and Equipment Custom Hiring Centers</h2>
  <p>
    To boost agricultural productivity and reduce manual labor costs, the Department of Agriculture provides financial subsidies for farm equipment purchases:
  </p>
  <ul>
    <li><strong>Financial Assistance for Farm Machinery (FOTA):</strong> Small and marginal farmers receive up to 50% capital subsidy (max ₹10,000 to ₹50,000) for purchasing power tillers, reapers, and seed drills.</li>
    <li><strong>Custom Hiring Centres (CHC):</strong> Farmers' Farmer Producer Organizations (FPOs) and Self-Help Groups receive 40% to 80% subsidies (up to ₹20 Lakh) to establish Custom Hiring Centres, allowing local cultivators to rent tractors and harvesters at nominal hourly fees.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Soil Health Cards and Micro-Irrigation Subsidies</h2>
  <p>
    Sustainable agriculture initiatives help farmers optimize soil fertility and water resources:
  </p>
  <ul>
    <li><strong>Soil Health Testing:</strong> Free soil sample testing laboratories across all blocks issue micro-nutrient recommendations, helping farmers reduce unnecessary fertilizer expenditure.</li>
    <li><strong>Per Drop More Crop (Micro-Irrigation):</strong> Subsidies up to 80% are provided for installing drip and sprinkler irrigation systems in drought-prone districts like Bankura, Purulia, and Paschim Medinipur.</li>
  </ul>
</section>
`;
content33 = content33.replace('</article>', `${p33FinalExtra}\n</article>`);
fs.writeFileSync(page33Path, content33, 'utf8');

console.log(`Page 33 Final Word Count: ${getArticleWordCount(page33Path)} words`);
