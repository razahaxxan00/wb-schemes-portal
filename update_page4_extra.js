const fs = require('fs');
const path = require('path');

const rootDir = __dirname;

function getArticleWordCount(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  const text = match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return text.split(' ').length;
}

const page4Path = path.join(rootDir, 'schemes', 'krishak-bandhu', 'beneficiary-list', 'index.html');
let content = fs.readFileSync(page4Path, 'utf8');

// Insert additional detail paragraphs into Section 1 and Section 6
content = content.replace(
  'The beneficiary database is maintained electronically within the Integrated Financial Management System (IFMS) to prevent duplicate applications across adjacent Gram Panchayats.',
  `The beneficiary database is maintained electronically within the Integrated Financial Management System (IFMS) to prevent duplicate applications across adjacent Gram Panchayats.

Every entry on the beneficiary schedule undergoes systematic three-tier verification before final inclusion: initial field authentication by Krishi Technology Sahayaks (KTS), document scrutiny by the Assistant Director of Agriculture (ADA), and treasury queue authorization by the Block Development Officer (BDO). This ensures that genuine landowning farmers, sharecroppers (Bhagchasi), and Patta holders receive their direct cash assistance transparently.`
);

content = content.replace(
  'Combining both tools gives you a full picture of your enrolment: the beneficiary list verifies your official standing in the state database, while the status check tracks every Direct Benefit Transfer (DBT) credit into your bank account.',
  `Combining both tools gives you a full picture of your enrolment: the beneficiary list verifies your official standing in the state database, while the status check tracks every Direct Benefit Transfer (DBT) credit into your bank account.

Farmers are advised to check the beneficiary list at the start of each agricultural season (Kharif in May–June and Rabi in November–December) to ensure their record remains active following periodic departmental audits and land mutation updates across West Bengal.`
);

fs.writeFileSync(page4Path, content, 'utf8');
console.log(`Page 4 New Word Count: ${getArticleWordCount(page4Path)} words`);
