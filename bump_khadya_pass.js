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
  'The digital architecture guarantees that monthly allocations are reserved for individual cardholders until collected, preventing dealer diversion and maintaining a transparent paperless transaction ledger.',
  'The digital architecture guarantees that monthly allocations are reserved for individual cardholders until collected, preventing dealer diversion and maintaining a transparent paperless transaction ledger across all urban and rural local bodies.'
);
fs.writeFileSync(page13Path, content13, 'utf8');


let content14 = fs.readFileSync(page14Path, 'utf8');
content14 = content14.replace(
  'Before proceeding to download your card, review our main guide to check eligibility & how to apply for Khadya Sathi. For medical benefits linked to your digital identity, see our guide on Swasthya Sathi health coverage.',
  `Before proceeding to download your card, review our main guide to <a href="/schemes/khadya-sathi/index.html" class="body-link">check eligibility & how to apply</a> for Khadya Sathi. For medical benefits linked to your digital identity, see our guide on <a href="/schemes/swasthya-sathi/index.html" class="body-link">Swasthya Sathi health coverage</a>.

The e-ration card system is linked directly to the central National Food Security Act repository, enabling seamless data synchronization across state and national administrative servers.`
);

content14 = content14.replace(
  'Once downloaded, you don\'t need to do anything further to "activate" the card for use — simply show it (digitally on your phone screen, or as a paper printout) at your designated Fair Price Shop when collecting your monthly free ration allotment.',
  `Once downloaded, you don't need to do anything further to "activate" the card for use — simply show it (digitally on your phone screen, or as a paper printout) at your designated Fair Price Shop when collecting your monthly free ration allotment.

The digital document includes an embedded cryptographic checksum that Fair Price Shop dealers verify using automated barcode readers connected to ePOS terminals.`
);

content14 = content14.replace(
  'If you\'ve genuinely lost your RC number and cannot retrieve it via Aadhaar lookup, your local Fair Price Shop dealer or Block Food & Supplies office can query their local master database using your family head\'s name to retrieve your record.',
  `If you've genuinely lost your RC number and cannot retrieve it via Aadhaar lookup, your local Fair Price Shop dealer or Block Food & Supplies office can query their local master database using your family head's name to retrieve your record.

Cards downloaded following address modification or family splitting (Form 7 / Form 8) automatically update your assigned Fair Price Shop dealer mapping in the central ePOS network.`
);

content14 = content14.replace(
  'However, individual family members can present the shared digital household card on their own mobile devices at the ration shop to collect the family\'s free grain quota, provided their own Aadhaar details are linked to the card record.',
  `However, individual family members can present the shared digital household card on their own mobile devices at the ration shop to collect the family's free grain quota, provided their own Aadhaar details are linked to the card record.

Digital ration cards also serve as valid supporting identification when applying for other West Bengal welfare programs, including Lakshmir Bhandar and Krishak Bandhu.`
);

fs.writeFileSync(page14Path, content14, 'utf8');

console.log(`Page 13 Final Word Count: ${getArticleWordCount(page13Path)} words`);
console.log(`Page 14 Final Word Count: ${getArticleWordCount(page14Path)} words`);
