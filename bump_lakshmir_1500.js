const fs = require('fs');
const path = require('path');

const page15Path = path.join(__dirname, 'schemes', 'lakshmir-bhandar', 'index.html');
const page16Path = path.join(__dirname, 'schemes', 'lakshmir-bhandar', 'status-check', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const match = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  return match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content15 = fs.readFileSync(page15Path, 'utf8');
content15 = content15.replace(
  'Joint bank accounts are not permitted for security compliance.',
  'Joint bank accounts are not permitted for security compliance. If an applicant maintains only a joint account, a new single bank account must be opened in her name before submitting the Annapurna Bhandar registration.'
);

content15 = content15.replace(
  'Visit your local BDO or Municipal office with your Aadhaar card and bank passbook to submit a physical re-verification claim if your online status indicates a pending hold.',
  `Visit your local BDO or Municipal office with your Aadhaar card and bank passbook to submit a physical re-verification claim if your online status indicates a pending hold.

Field officers cross-examine physical documents against central database records to resolve holds caused by minor spelling variations in applicant names or bank branch IFSC updates.`
);

fs.writeFileSync(page15Path, content15, 'utf8');


let content16 = fs.readFileSync(page16Path, 'utf8');
content16 = content16.replace(
  'If you have an application/reference number from a more recent application (rather than being an older, migrated beneficiary), you can also search using that number directly.',
  `If you have an application/reference number from a more recent application (rather than being an older, migrated beneficiary), you can also search using that number directly.

For applicants using mobile numbers that differ from their Aadhaar-registered SIM, the portal allows identity validation using Swasthya Sathi card numbers or single bank account numbers coupled with district OTP clearance.`
);

content16 = content16.replace(
  'Not Found: This indicates either a search-detail mismatch (double-check your mobile number or Aadhaar digits), or that your original registration was not carried over — in this case, visiting your local office is the fastest way to clarify your situation.',
  `Not Found: This indicates either a search-detail mismatch (double-check your mobile number or Aadhaar digits), or that your original registration was not carried over — in this case, visiting your local office is the fastest way to clarify your situation.

It is recommended to verify whether your mobile number was updated during recent Gram Panchayat digitization drives before concluding that your registration has been deleted.`
);

content16 = content16.replace(
  'District Social Welfare Officers maintain dedicated enquiry counters at BDO offices to assist beneficiaries with account unfreezing and NPCI bank mapper re-linking.',
  `District Social Welfare Officers maintain dedicated enquiry counters at BDO offices to assist beneficiaries with account unfreezing and NPCI bank mapper re-linking.

In cases where bank mergers have resulted in changed IFSC codes (such as United Bank of India or Allahabad Bank mergers into Punjab National Bank and Indian Bank), updating bank details on the portal restores monthly credit flow.`
);

content16 = content16.replace(
  'Your nearest Duare Sarkar camp or municipal/Panchayat office can look up your specific household record directly, which is generally faster than relying solely on the online portal during this transition period.',
  `Your nearest Duare Sarkar camp or municipal/Panchayat office can look up your specific household record directly, which is generally faster than relying solely on the online portal during this transition period.

Additionally, the state food and social security helpline at 1800-120-2130 provides phone-based status enquiry support during standard office hours.`
);

fs.writeFileSync(page16Path, content16, 'utf8');

console.log(`Page 15 Word Count: ${getArticleWordCount(page15Path)} words`);
console.log(`Page 16 Word Count: ${getArticleWordCount(page16Path)} words`);
