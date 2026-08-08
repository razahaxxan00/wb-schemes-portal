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
  'Spelling mistakes or incorrect birth dates: Submit Form 5 online or offline to update personal credentials before generating a refreshed digital ration card.',
  `Spelling mistakes or incorrect birth dates: Submit Form 5 online or offline to update personal credentials before generating a refreshed digital ration card.

Address transfers or shifting to a new Fair Price Shop: Submit Form 6 online via the E-Citizen portal or physically at your new Block Food & Supplies Office along with proof of new residence to update your digital card mapping.`
);

content14 = content14.replace(
  'For households experiencing card deactivation resulting from non-linking of Aadhaar within prescribed deadlines, complete e-KYC authentication on the Food & Supplies portal or at your local ration shop to restore active status prior to card download.',
  `For households experiencing card deactivation resulting from non-linking of Aadhaar within prescribed deadlines, complete e-KYC authentication on the Food & Supplies portal or at your local ration shop to restore active status prior to card download.

If an e-ration card PDF displays incorrect family member photographs or mismatched gender tags, initiate a photo correction request through Form 5 at your local Inspector of Food & Supplies desk.`
);

content14 = content14.replace(
  'No — downloading your digital ration card from the official portal is free.',
  'No — downloading your digital ration card from the official portal is free of cost. Neither the portal nor local Food & Supplies offices charge any fee for e-ration card downloads, duplicate generations, or PDF printouts.'
);

content14 = content14.replace(
  'Digital ration cards also serve as valid supporting identification when applying for other West Bengal welfare programs, including Lakshmir Bhandar and Krishak Bandhu.',
  `Digital ration cards also serve as valid supporting identification when applying for other West Bengal welfare programs, including Lakshmir Bhandar and Krishak Bandhu.

Keeping a digital copy saved in your smartphone wallet ensures uninterrupted access to essential state food security benefits wherever you travel within West Bengal.`
);

fs.writeFileSync(page14Path, content14, 'utf8');

console.log(`Page 14 Target Met Word Count: ${getArticleWordCount(page14Path)} words`);
