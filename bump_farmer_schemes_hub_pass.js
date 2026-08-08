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
const p33Extra = `
<section class="content-block">
  <h2>Krishak Bandhu Death Benefit Insurance Protocol (₹2 Lakh Assistance)</h2>
  <p>
    Beyond seasonal crop input assistance, Krishak Bandhu includes a comprehensive life assurance component for farming households across West Bengal:
  </p>
  <ul>
    <li><strong>Universal Coverage (Ages 18–60):</strong> In the unfortunate event of the death of a registered farmer or sharecropper aged between 18 and 60, the legal nominee receives a one-time ex-gratia grant of ₹2,00,000.</li>
    <li><strong>No Premium Cost:</strong> The entire insurance coverage premium is borne by the Department of Agriculture, requiring no annual premium payments from the farmer.</li>
    <li><strong>Claim Submission Timeline:</strong> Nominees must submit the official claim form along with the death certificate, land records, and Aadhaar copy to the Block Development Officer (BDO) or Assistant Director of Agriculture (ADA) within 30 days of death.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Crop Cutting Experiments and Satellite Remote Sensing</h2>
  <p>
    Bangla Shasya Bima relies on modern agricultural technology to calculate area-wide yield losses and release compensation without individual field friction:
  </p>
  <ul>
    <li><strong>Gram Panchayat Area Yield Assessment:</strong> Crop loss is evaluated at the Mouza or Gram Panchayat unit level using randomized Crop Cutting Experiments (CCE) conducted by agricultural officers.</li>
    <li><strong>Satellite NDVI Vegetation Index:</strong> In cases of widespread monsoon flooding or tropical cyclones (such as Remal or Amphan), satellite vegetation index maps from RSAC (Remote Sensing Application Centre) cross-verify field damage.</li>
    <li><strong>Direct Benefit Transfer to Bank Accounts:</strong> Verified claim amounts are credited electronically to Aadhaar-seeded single bank accounts via IFMS portal automation.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Role of Krishi Praukti Sahayaks (KPS) and Local Officers</h2>
  <p>
    Frontline agricultural extension officers play an essential role in guiding farmers through scheme registration and documentation:
  </p>
  <ul>
    <li><strong>Cultivation Verification for Bargadars:</strong> Krishi Praukti Sahayaks (KPS) issue official cultivation certificates for sharecroppers and tenant farmers lacking formal land Parcha titles.</li>
    <li><strong>e-POS and Portal Entry Support:</strong> Local KPS officers assist farmers with land area verification, crop code selection, and e-Kisan portal updates during seasonal enrolment drives.</li>
    <li><strong>Grievance Resolution:</strong> Farmers facing payment holds due to bank account mismatch can visit their Block Assistant Director of Agriculture (ADA) office for manual re-verification.</li>
  </ul>
</section>
`;
content33 = content33.replace('</article>', `${p33Extra}\n</article>`);
fs.writeFileSync(page33Path, content33, 'utf8');

console.log(`Page 33 Final Word Count: ${getArticleWordCount(page33Path)} words`);
