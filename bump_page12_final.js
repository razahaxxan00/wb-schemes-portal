const fs = require('fs');
const path = require('path');

const page12Path = path.join(__dirname, 'schemes', 'aikyashree-scholarship', 'status-check', 'index.html');
let content = fs.readFileSync(page12Path, 'utf8');

content = content.replace(
  'Because thousands of applications are verified across schools, madrasahs, colleges, and technical institutes simultaneously, backend database updates typically occur in periodic batches rather than in real time.',
  'Because thousands of applications are verified across schools, madrasahs, colleges, and technical institutes simultaneously, backend database updates typically occur in periodic batches rather than in real time. It is normal for status tags to remain unchanged for several days while institutional Nodal Officers process physical document submissions.'
);

content = content.replace(
  'Students receiving maintenance allowances for hostel residence should also verify that their hostel warden has verified their residential status on the WBMDFC institutional portal.',
  'Students receiving maintenance allowances for hostel residence should also verify that their hostel warden has verified their residential status on the WBMDFC institutional portal. If a hosteller is incorrectly flagged as a day scholar in portal records, the sanctioned maintenance allowance will automatically revert to the lower day-scholar tier.'
);

content = content.replace(
  'Alternatively, students can visit their District Minority Development Office located at the District Magistrate headquarters for in-person status lookup and grievance resolution.',
  'Alternatively, students can visit their District Minority Development Office located at the District Magistrate headquarters for in-person status lookup and grievance resolution, where dedicated desk officers can query the central database for individual disbursement transaction logs.'
);

fs.writeFileSync(page12Path, content, 'utf8');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const match = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  return match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

console.log(`Page 12 Final Word Count: ${getArticleWordCount(page12Path)} words`);
