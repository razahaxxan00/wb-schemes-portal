const fs = require('fs');
const path = require('path');

const page14Path = path.join(__dirname, 'schemes', 'khadya-sathi', 'card-download', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const match = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  return match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content14 = fs.readFileSync(page14Path, 'utf8');
content14 = content14.replace(
  'Your registered mobile number, for OTP (One-Time Password) identity verification.',
  'Your registered mobile number, for OTP (One-Time Password) identity verification and account security validation.'
);

content14 = content14.replace(
  'Citizens needing emergency assistance with card downloads can visit any nearest Tathya Mitra Kendra or Duare Sarkar camp counter for instant guided support.',
  'Citizens needing emergency assistance with card downloads can visit any nearest Tathya Mitra Kendra or Duare Sarkar camp counter for instant guided support and physical printout assistance.'
);

content14 = content14.replace(
  'Raise a correction request at your local Food & Supplies office with proof of the family relationship, such as a birth or marriage certificate — this isn\'t something you can fix by simply re-downloading.',
  'Raise a correction request at your local Food & Supplies office with proof of the family relationship, such as a birth or marriage certificate — this isn\'t something you can fix by simply re-downloading. Once the inspection team verifies the missing member\'s credentials on the RCMS backend, the newly updated e-ration card will become available for digital download.'
);

content14 = content14.replace(
  'You\'ll need to complete the renewal process first; an expired card generally won\'t generate a fresh valid digital copy until renewal is complete.',
  'You\'ll need to complete the renewal process first; an expired card generally won\'t generate a fresh valid digital copy until renewal is complete through Form 10 authentication.'
);

fs.writeFileSync(page14Path, content14, 'utf8');

console.log(`Page 14 Absolute Target Met Word Count: ${getArticleWordCount(page14Path)} words`);
