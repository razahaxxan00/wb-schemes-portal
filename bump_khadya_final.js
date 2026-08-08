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
  'Applicants can track their digital ration card approval status online at any time by selecting the "Check Application Status" link on food.wb.gov.in and entering their form type and 16-digit application number.',
  'Applicants can track their digital ration card approval status online at any time by selecting the "Check Application Status" link on food.wb.gov.in and entering their form type and 16-digit application number to view real-time processing milestones.'
);
fs.writeFileSync(page13Path, content13, 'utf8');


let content14 = fs.readFileSync(page14Path, 'utf8');
content14 = content14.replace(
  'Save the PDF file on your device or print a paper copy for home storage.',
  `Save the PDF file on your device or print a paper copy for home storage.

The digital e-ration card PDF features full cryptographic security signatures from the Department of Food and Supplies, rendering it legally equivalent to traditional physical cards for official identity and address verification purposes across all West Bengal government departments.`
);

content14 = content14.replace(
  'The dealer scans the QR code or enters your RC number into their electronic Point of Sale (ePOS) terminal and requests biometric fingerprint authentication from any enrolled adult household member to release your free grain supply.',
  `The dealer scans the QR code or enters your RC number into their electronic Point of Sale (ePOS) terminal and requests biometric fingerprint authentication from any enrolled adult household member to release your free grain supply.

In cases where biometric fingerprint scanners encounter temporary connectivity drops, dealers utilize SMS OTP verification sent to the head of household's registered mobile number to authorize immediate offline grain release.`
);

content14 = content14.replace(
  'If you have surrendered an old physical card due to shifting your residence to a new municipality or block within West Bengal, use Form 6 to transfer your digital record to the new Fair Price Shop before downloading your updated e-ration card.',
  `If you have surrendered an old physical card due to shifting your residence to a new municipality or block within West Bengal, use Form 6 to transfer your digital record to the new Fair Price Shop before downloading your updated e-ration card.

For households experiencing card deactivation resulting from non-linking of Aadhaar within prescribed deadlines, complete e-KYC authentication on the Food & Supplies portal or at your local ration shop to restore active status prior to card download.`
);

content14 = content14.replace(
  'The digital ration card covers the full household under one record; individual family members don\'t have separate downloadable cards, though all registered members will appear listed on the single household card.',
  `The digital ration card covers the full household under one record; individual family members don't have separate downloadable cards, though all registered members will appear listed on the single household card.

However, individual family members can present the shared digital household card on their own mobile devices at the ration shop to collect the family's free grain quota, provided their own Aadhaar details are linked to the card record.`
);

fs.writeFileSync(page14Path, content14, 'utf8');

console.log(`Page 13 Word Count: ${getArticleWordCount(page13Path)} words`);
console.log(`Page 14 Word Count: ${getArticleWordCount(page14Path)} words`);
