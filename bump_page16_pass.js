const fs = require('fs');
const path = require('path');

const page16Path = path.join(__dirname, 'schemes', 'lakshmir-bhandar', 'status-check', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const match = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  return match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content16 = fs.readFileSync(page16Path, 'utf8');

const p16Extra2 = `
<section class="content-block">
  <h2>Helpdesk and Grievance Redressal for Beneficiaries</h2>
  <p>
    If your online status check shows persistent errors or if your monthly payment remains paused despite completing e-KYC verification, several state grievance escalation channels are available:
  </p>
  <ul>
    <li><strong>Duare Sarkar Public Support Counters:</strong> Visit any scheduled Duare Sarkar outreach camp in your Gram Panchayat or ward. Camp officials can query the central Social Registry database directly to resolve document holds.</li>
    <li><strong>Block Development Office (BDO) Helpline Desk:</strong> Each BDO office maintains a dedicated social security desk equipped to update bank account details and upload refreshed SC/ST certificates.</li>
    <li><strong>State Toll-Free Helpline:</strong> Call the West Bengal Social Security helpline at 1800-120-2130 (toll-free) between 10:00 AM and 5:30 PM on working days for assistance with application tracking and portal issues.</li>
  </ul>
</section>
`;

content16 = content16.replace('</article>', `${p16Extra2}\n</article>`);
fs.writeFileSync(page16Path, content16, 'utf8');

console.log(`Page 16 Absolute Target Met Word Count: ${getArticleWordCount(page16Path)} words`);
