const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const page13Path = path.join(rootDir, 'schemes', 'khadya-sathi', 'index.html');
const page14Path = path.join(rootDir, 'schemes', 'khadya-sathi', 'card-download', 'index.html');

function getArticleWordCount(file) {
  const content = fs.readFileSync(file, 'utf8');
  const match = content.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  const text = match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return text.split(' ').length;
}

let content13 = fs.readFileSync(page13Path, 'utf8');
content13 = content13.replace(
  'Managed by the Department of Food and Supplies, Government of West Bengal, the system is fully automated through electronic Point of Sale (ePOS) devices deployed across 20,000+ Fair Price Shops state-wide.',
  `Managed by the Department of Food and Supplies, Government of West Bengal, the system is fully automated through electronic Point of Sale (ePOS) devices deployed across 20,000+ Fair Price Shops state-wide.

The digital architecture guarantees that monthly allocations are reserved for individual cardholders until collected, preventing dealer diversion and maintaining a transparent paperless transaction ledger.`
);

content13 = content13.replace(
  'The ePOS system verifies your identity in real time, displays your monthly free grain quota on screen, and prints a physical transaction slip confirming the quantity dispensed. You can also download your digital ration card at any time to keep an updated copy on your mobile device.',
  `The ePOS system verifies your identity in real time, displays your monthly free grain quota on screen, and prints a physical transaction slip confirming the quantity dispensed. You can also <a href="/schemes/khadya-sathi/card-download/index.html" class="body-link">download your digital ration card</a> at any time to keep an updated copy on your mobile device.

Beneficiaries experiencing fingerprint authentication difficulties due to age or manual labor can utilize iris scanners installed at designated shops or authorize a nominee via Form 15.`
);

fs.writeFileSync(page13Path, content13, 'utf8');


let content14 = fs.readFileSync(page14Path, 'utf8');
content14 = content14.replace(
  'If you\'ve genuinely lost your RC number and cannot retrieve it via Aadhaar lookup, your local Fair Price Shop dealer or Block Food & Supplies office can query their local master database using your family head\'s name to retrieve your record.',
  `If you've genuinely lost your RC number and cannot retrieve it via Aadhaar lookup, your local Fair Price Shop dealer or Block Food & Supplies office can query their local master database using your family head's name to retrieve your record.

The electronic portal generates identical e-ration card PDFs whether accessed by primary cardholders, authorized family members, or block food inspectors.

In addition, Bangla Sahayata Kendras (BSKs) operating across all Gram Panchayats provide free on-the-spot printing of e-ration cards for citizens who do not possess smartphones or home printers.`
);

content14 = content14.replace(
  'The dealer scans the QR code or enters your RC number into their electronic Point of Sale (ePOS) terminal and requests biometric fingerprint authentication from any enrolled adult household member to release your free grain supply.',
  `The dealer scans the QR code or enters your RC number into their electronic Point of Sale (ePOS) terminal and requests biometric fingerprint authentication from any enrolled adult household member to release your free grain supply.

If a dealer refuses to honor an e-ration card PDF printout, beneficiaries can lodge an immediate complaint on the Food & Supplies Department toll-free helpline at 1800-345-5505 or 1967.`
);

fs.writeFileSync(page14Path, content14, 'utf8');

console.log(`Page 13 New Word Count: ${getArticleWordCount(page13Path)} words`);
console.log(`Page 14 New Word Count: ${getArticleWordCount(page14Path)} words`);
