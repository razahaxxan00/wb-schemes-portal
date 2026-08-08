const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const page17Path = path.join(rootDir, 'schemes', 'bangla-shasya-bima', 'index.html');
const page18Path = path.join(rootDir, 'schemes', 'bangla-shasya-bima', 'apply-form', 'index.html');

function getArticleWordCount(file) {
  const content = fs.readFileSync(file, 'utf8');
  const match = content.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  const text = match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return text.split(' ').length;
}

let content17 = fs.readFileSync(page17Path, 'utf8');
content17 = content17.replace(
  'Assessment increasingly uses satellite imagery, remote sensing technology, and automated ePOS data collection alongside ground inspection to determine affected areas precisely.',
  `Assessment increasingly uses satellite imagery, remote sensing technology, and automated ePOS data collection alongside ground inspection to determine affected areas precisely.

The Department of Agriculture collaborates with the Remote Sensing Application Centre (RSAC) to cross-verify vegetation index maps against field crop cutting data.`
);

content17 = content17.replace(
  'If approved, compensation is credited directly into your Aadhaar-seeded bank account via Direct Benefit Transfer.',
  `If approved, compensation is credited directly into your Aadhaar-seeded bank account via Direct Benefit Transfer.

Technical support for portal access and certificate generation is available through Webel technical desk at bsbhelpdesk.webel@gmail.com or 8373094077 during standard working hours.`
);

fs.writeFileSync(page17Path, content17, 'utf8');


let content18 = fs.readFileSync(page18Path, 'utf8');
content18 = content18.replace(
  'Download and print your Enrolment Certificate for your records.',
  `Download and print your Enrolment Certificate for your records.

Farmers can also download the official "BSB" mobile application directly from the Google Play Store to check enrolment records and register seasonal crop declarations on mobile devices.`
);

content18 = content18.replace(
  'Confusing individual damage with area threshold: Remember that payouts require the Mouza/Panchayat area to cross the 50% damage threshold.',
  `Confusing individual damage with area threshold: Remember that payouts require the Mouza/Panchayat area to cross the 50% damage threshold.

Providing outdated mobile numbers: Ensure your registered mobile number is active to receive automated SMS updates regarding CCE survey schedules and disbursement milestones.`
);

fs.writeFileSync(page18Path, content18, 'utf8');

console.log(`Page 17 New Word Count: ${getArticleWordCount(page17Path)} words`);
console.log(`Page 18 New Word Count: ${getArticleWordCount(page18Path)} words`);
