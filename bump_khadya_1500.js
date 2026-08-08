const fs = require('fs');
const path = require('path');

const page13Path = path.join(__dirname, 'schemes', 'khadya-sathi', 'index.html');
const page14Path = path.join(__dirname, 'schemes', 'khadya-sathi', 'card-download', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const match = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  return match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content13 = fs.readFileSync(page13Path, 'utf8');
content13 = content13.replace(
  'Submit your application and save the generated Form Application Number for tracking.',
  `Submit your application and save the generated Form Application Number for tracking.

Applicants can track their digital ration card approval status online at any time by selecting the "Check Application Status" link on food.wb.gov.in and entering their form type and 16-digit application number.`
);

content13 = content13.replace(
  'Beneficiaries experiencing fingerprint authentication difficulties due to age or manual labor can utilize iris scanners installed at designated shops or authorize a nominee via Form 15.',
  `Beneficiaries experiencing fingerprint authentication difficulties due to age or manual labor can utilize iris scanners installed at designated shops or authorize a nominee via Form 15.

Under the state's Duare Ration outreach initiative, Fair Price Shop dealers also conduct weekly scheduled mobile distribution visits to remote hamlets and senior citizen households incapable of traveling to the fixed shop location.`
);

fs.writeFileSync(page13Path, content13, 'utf8');


let content14 = fs.readFileSync(page14Path, 'utf8');
content14 = content14.replace(
  'Save the PDF file on your device or print a paper copy for home storage.',
  `Save the PDF file on your device or print a paper copy for home storage.

Cardholders can also access and display their e-ration card via the official "Khadya Sathi - Amar Ration" Android mobile application developed by the Department of Food and Supplies, which stores verified offline copies directly on your mobile device.`
);

content14 = content14.replace(
  'Family member missing from the card: This typically needs a correction request through the portal or your local ration office, rather than a fresh application; bring proof of the family relationship (like a birth or marriage certificate) when raising this.',
  `Family member missing from the card: This typically needs a correction request through the portal or your local ration office, rather than a fresh application; submit Form 4 for adding a new family member (such as a newborn child or newly married spouse) along with birth or marriage proof documents.

Spelling mistakes or incorrect birth dates: Submit Form 5 online or offline to update personal credentials before generating a refreshed digital ration card.`
);

content14 = content14.replace(
  'In addition, Bangla Sahayata Kendras (BSKs) operating across all Gram Panchayats provide free on-the-spot printing of e-ration cards for citizens who do not possess smartphones or home printers.',
  `In addition, Bangla Sahayata Kendras (BSKs) operating across all Gram Panchayats provide free on-the-spot printing of e-ration cards for citizens who do not possess smartphones or home printers.

If you have surrendered an old physical card due to shifting your residence to a new municipality or block within West Bengal, use Form 6 to transfer your digital record to the new Fair Price Shop before downloading your updated e-ration card.`
);

fs.writeFileSync(page14Path, content14, 'utf8');

console.log(`Page 13 Word Count: ${getArticleWordCount(page13Path)} words`);
console.log(`Page 14 Word Count: ${getArticleWordCount(page14Path)} words`);
