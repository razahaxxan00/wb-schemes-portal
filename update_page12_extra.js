const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const page12Path = path.join(rootDir, 'schemes', 'aikyashree-scholarship', 'status-check', 'index.html');

function getArticleWordCount(file) {
  const content = fs.readFileSync(file, 'utf8');
  const match = content.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  const text = match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return text.split(' ').length;
}

let page12Content = fs.readFileSync(page12Path, 'utf8');

// Insert additional detail into Section 3 & Section 4 of Page 12
page12Content = page12Content.replace(
  'If an application remains in "Pending Institute Verification" status past the announced verification closing date, contact your institute\'s scholarship Nodal Officer immediately to request manual queue release.',
  `If an application remains in "Pending Institute Verification" status past the announced verification closing date, contact your institute's scholarship Nodal Officer immediately to request manual queue release.

Institutional Nodal Officers are assigned unique administrative credentials by WBMDFC to verify student rolls, check marks percentage criteria, and cross-examine uploaded family income declarations against state norms. During peak verification months (September to February), institutions process thousands of student dossiers in batches.`
);

page12Content = page12Content.replace(
  'In cases where bank server failures cause transaction rejection, WBMDFC re-queues the disbursement once the student updates their bank credentials through the institute Nodal Officer.',
  `In cases where bank server failures cause transaction rejection, WBMDFC re-queues the disbursement once the student updates their bank credentials through the institute Nodal Officer.

Disbursement tracking codes issued by the Public Financial Management System (PFMS) allow bank branch managers to locate pending Direct Benefit Transfer credits when funds are delayed in inter-bank clearing queues.

Students receiving maintenance allowances for hostel residence should also verify that their hostel warden has verified their residential status on the WBMDFC institutional portal.`
);

page12Content = page12Content.replace(
  'For persistent portal technical issues, call the WBMDFC toll-free helpline at 1800-120-2130 during standard working hours.',
  `For persistent portal technical issues, call the WBMDFC toll-free helpline at 1800-120-2130 during standard working hours.

Alternatively, students can visit their District Minority Development Office located at the District Magistrate headquarters for in-person status lookup and grievance resolution.`
);

fs.writeFileSync(page12Path, page12Content, 'utf8');
console.log(`Page 12 Final Word Count: ${getArticleWordCount(page12Path)} words`);
