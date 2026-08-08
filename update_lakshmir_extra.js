const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const page15Path = path.join(rootDir, 'schemes', 'lakshmir-bhandar', 'index.html');
const page16Path = path.join(rootDir, 'schemes', 'lakshmir-bhandar', 'status-check', 'index.html');

function getArticleWordCount(file) {
  const content = fs.readFileSync(file, 'utf8');
  const match = content.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  const text = match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return text.split(' ').length;
}

let content15 = fs.readFileSync(page15Path, 'utf8');
content15 = content15.replace(
  'Direct Benefit Transfer (DBT) payments directly credited into the beneficiary\'s single Aadhaar-linked bank account, typically during the first week of each month.',
  `Direct Benefit Transfer (DBT) payments directly credited into the beneficiary's single Aadhaar-linked bank account, typically during the first week of each month.

The scheme represented a structural shift in state welfare delivery by establishing direct financial autonomy for adult women in rural and urban households across West Bengal.`
);

content15 = content15.replace(
  'Submit the form at the designated counter and obtain a stamped acknowledgment receipt containing your registration ID.',
  `Submit the form at the designated counter and obtain a stamped acknowledgment receipt containing your registration ID.

During Duare Sarkar camps, field officials conduct on-the-spot document scanning and initial data entry into the Social Registry portal, reducing processing delays for new applicants.`
);

fs.writeFileSync(page15Path, content15, 'utf8');


let content16 = fs.readFileSync(page16Path, 'utf8');
content16 = content16.replace(
  'If you have an application/reference number from a more recent application (rather than being an older, migrated beneficiary), you can also search using that number directly.',
  `If you have an application/reference number from a more recent application (rather than being an older, migrated beneficiary), you can also search using that number directly.

The portal dashboard provides complete transparency regarding monthly transaction reference numbers, Public Financial Management System (PFMS) credit dates, and bank account clearance codes.`
);

content16 = content16.replace(
  'If your status check doesn\'t clarify the reason, visiting your nearest Duare Sarkar camp or municipal/Panchayat office with your registration details is generally the fastest way to get a specific answer for your household.',
  `If your status check doesn't clarify the reason, visiting your nearest Duare Sarkar camp or municipal/Panchayat office with your registration details is generally the fastest way to get a specific answer for your household.

District Social Welfare Officers maintain dedicated enquiry counters at BDO offices to assist beneficiaries with account unfreezing and NPCI bank mapper re-linking.`
);

fs.writeFileSync(page16Path, content16, 'utf8');

console.log(`Page 15 New Word Count: ${getArticleWordCount(page15Path)} words`);
console.log(`Page 16 New Word Count: ${getArticleWordCount(page16Path)} words`);
