const fs = require('fs');
const path = require('path');

const page17Path = path.join(__dirname, 'schemes', 'bangla-shasya-bima', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content17 = fs.readFileSync(page17Path, 'utf8');
const p17Extra = `
<section class="content-block">
  <h2>Crop Cutting Experiments (CCE) and Area Yield Estimation</h2>
  <p>
    To determine accurate yield loss percentages across notified Gram Panchayats, the Department of Agriculture conducts structured Crop Cutting Experiments (CCE):
  </p>
  <ul>
    <li><strong>Randomized Field Sampling:</strong> Officers from the Directorate of Agriculture select randomized 5m x 5m plots within notified Gram Panchayats to harvest and weigh crop samples.</li>
    <li><strong>Threshold Yield Comparison:</strong> The harvested average yield per hectare is compared against the historical 5-year average (Threshold Yield) for that specific Mouza.</li>
    <li><strong>Automated Loss Calculation:</strong> If the actual yield falls below the threshold yield, all enrolled farmers in that notified unit receive proportional claim compensation automatically without needing individual loss surveys.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Satellite Remote Sensing and Drone Surveys for Mid-Season Losses</h2>
  <p>
    Modern agricultural technology ensures rapid compensation release during widespread flood or cyclone emergencies:
  </p>
  <ul>
    <li><strong>Normalized Difference Vegetation Index (NDVI):</strong> Satellite imagery provided by ISRO and RSAC assesses vegetation vigor loss immediately following natural calamities like cyclones Amphan or Remal.</li>
    <li><strong>Drone Reconnaissance in High-Risk Zones:</strong> In flood-prone regions such as Ghatal, Sundarbans, and Murshidabad, high-resolution drone imagery provides micro-level flooding verification for fast-track claim settlement.</li>
    <li><strong>Direct IFMS Payout Integration:</strong> Final claim settlements are uploaded to the Integrated Financial Management System (IFMS) for direct bank credit into Aadhaar-seeded accounts.</li>
  </ul>
</section>
`;
content17 = content17.replace('</article>', `${p17Extra}\n</article>`);
fs.writeFileSync(page17Path, content17, 'utf8');

console.log(`Page 17 Final Word Count: ${getArticleWordCount(page17Path)} words`);
