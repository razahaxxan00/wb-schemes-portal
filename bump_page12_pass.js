const fs = require('fs');
const path = require('path');

const page12Path = path.join(__dirname, 'schemes', 'aikyashree-scholarship', 'status-check', 'index.html');
let content = fs.readFileSync(page12Path, 'utf8');

content = content.replace(
  'When contacting the helpline or visiting the district office, keep your User ID, registered mobile number, Aadhaar number, and institution bonafide receipt readily available to assist the technical desk in locating your record in the central WBMDFC database.',
  'When contacting the helpline or visiting the district office, keep your User ID, registered mobile number, Aadhaar number, and institution bonafide receipt readily available to assist the technical desk in locating your record in the central WBMDFC database. Having these identifiers ready allows officers to track your file across institutional verification and state treasury clearance stages without unnecessary delays.'
);

fs.writeFileSync(page12Path, content, 'utf8');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const match = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  return match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

console.log(`Page 12 Absolute Final Word Count: ${getArticleWordCount(page12Path)} words`);
