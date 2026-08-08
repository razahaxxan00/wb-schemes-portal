const fs = require('fs');
const path = require('path');

const page17Path = path.join(__dirname, 'schemes', 'bangla-shasya-bima', 'index.html');
const page18Path = path.join(__dirname, 'schemes', 'bangla-shasya-bima', 'apply-form', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const match = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  return match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content17 = fs.readFileSync(page17Path, 'utf8');
const p17Extra = `
<section class="content-block">
  <h2>Seasonal Crop Notification Schedules</h2>
  <p>
    The Department of Agriculture publishes seasonal notification gazettes specifying covered crops, sum-insured limits per hectare, and cut-off enrollment dates for each district across West Bengal:
  </p>
  <ul>
    <li><strong>Kharif Season Cut-Off:</strong> Registration typically opens in June and closes between end-July and mid-August, depending on weather patterns and monsoon onset.</li>
    <li><strong>Rabi Season Cut-Off:</strong> Registration typically opens in November and closes between mid-December and end-December for crops like wheat, mustard, and Boro paddy.</li>
    <li><strong>Potato & Commercial Crops Cut-Off:</strong> Specialized commercial crops often feature extended registration windows up to mid-January under separate insurance partner terms.</li>
  </ul>
</section>
`;
content17 = content17.replace('</article>', `${p17Extra}\n</article>`);
fs.writeFileSync(page17Path, content17, 'utf8');


let content18 = fs.readFileSync(page18Path, 'utf8');
const p18Extra = `
<section class="content-block">
  <h2>Step-by-Step SBI General Insurance Claim Escalation</h2>
  <p>
    If you experience difficulties reporting crop loss or if your claim status remains pending past the published assessment window, follow these official escalation steps:
  </p>
  <ol>
    <li>Contact SBI General Insurance dedicated BSB helpline at <strong>1800 102 1111</strong> (toll-free) or email written loss details to <strong>BSB.WB@sbigeneral.in</strong>.</li>
    <li>Visit your local Assistant Director of Agriculture (ADA) office at the Block level with your BSB registration slip and land Parcha.</li>
    <li>Request the Block Krishi Officer to verify whether your Mouza has been included in the seasonal Crop Cutting Experiment (CCE) damage list.</li>
    <li>If technical web errors prevent online status tracking, contact the Webel portal helpdesk at <strong>8373094077 / 8336900632</strong> or email <strong>bsbhelpdesk.webel@gmail.com</strong>.</li>
  </ol>
</section>

<section class="content-block">
  <h2>Important Guidelines for Sharecroppers and Tenant Farmers</h2>
  <p>
    Sharecroppers (Bargadars) and tenant farmers cultivating land without formal ownership deeds are fully eligible for Bangla Shasya Bima coverage:
  </p>
  <ul>
    <li>Obtain a self-declaration cultivation form countersigned by the local Krishi Praukti Sahayak (KPS) officer or Panchayat Pradhan.</li>
    <li>Ensure that the crop name and cultivated acreage match actual field planting to avoid claim rejection during satellite survey audits.</li>
    <li>Submit your single bank account passbook copy to guarantee direct DBT payout without landlord intervention.</li>
  </ul>
</section>
`;
content18 = content18.replace('</article>', `${p18Extra}\n</article>`);
fs.writeFileSync(page18Path, content18, 'utf8');

console.log(`Page 17 Final Word Count: ${getArticleWordCount(page17Path)} words`);
console.log(`Page 18 Final Word Count: ${getArticleWordCount(page18Path)} words`);
