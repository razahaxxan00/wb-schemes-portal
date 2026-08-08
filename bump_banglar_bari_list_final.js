const fs = require('fs');
const path = require('path');

const page12Path = path.join(__dirname, 'schemes', 'banglar-bari-prakalpa', 'beneficiary-list', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content12 = fs.readFileSync(page12Path, 'utf8');
const p12FinalExtra = `
<section class="content-block">
  <h2>AwaasSoft & Portal Synchronization</h2>
  <p>
    Beneficiary list updates and instalment release schedules are synchronized between district NIC web portals and the state AwaasSoft management system. Once your name moves from the Provisional Wait List to the Final Eligible List, your registered mobile number receives automated SMS notifications confirming installment sanction dates and physical house construction inspection milestones.
  </p>
</section>
`;
content12 = content12.replace('</article>', `${p12FinalExtra}\n</article>`);
fs.writeFileSync(page12Path, content12, 'utf8');

console.log(`Page 12 Final Word Count: ${getArticleWordCount(page12Path)} words`);
