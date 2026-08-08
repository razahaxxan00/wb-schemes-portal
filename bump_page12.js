const fs = require('fs');
const path = require('path');

const page12Path = path.join(__dirname, 'schemes', 'aikyashree-scholarship', 'status-check', 'index.html');
let content = fs.readFileSync(page12Path, 'utf8');

content = content.replace(
  'Some portal updates also provide a direct guest tracking link where you can enter your Application ID and district without logging into the full student dashboard.',
  'Some portal updates also provide a direct guest tracking link where you can enter your Application ID and district without logging into the full student dashboard. When using the guest tracking tool, ensure that you enter the exact academic year corresponding to your submission.'
);

content = content.replace(
  'For persistent portal technical issues, call the WBMDFC toll-free helpline at 1800-120-2130 during standard working hours.',
  `For persistent portal technical issues, call the WBMDFC toll-free helpline at 1800-120-2130 during standard working hours (Monday through Saturday, 10:00 AM to 5:30 PM).

When contacting the helpline or visiting the district office, keep your User ID, registered mobile number, Aadhaar number, and institution bonafide receipt readily available to assist the technical desk in locating your record in the central WBMDFC database.`
);

content = content.replace(
  'Applied for the wrong component: If you registered under the wrong category (e.g., Post-Matric instead of SVMCM), consult your college Nodal Officer before the verification window closes so the record can be corrected or unlocked.',
  'Applied for the wrong component: If you registered under the wrong category (e.g., Post-Matric instead of SVMCM), consult your college Nodal Officer before the verification window closes so the record can be corrected or unlocked. Once an application is verified by the District Minority Officer under an incorrect category, modifying the component requires administrative intervention by WBMDFC portal support.'
);

fs.writeFileSync(page12Path, content, 'utf8');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const match = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  return match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

console.log(`Page 12 New Word Count: ${getArticleWordCount(page12Path)} words`);
