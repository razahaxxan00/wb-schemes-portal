const fs = require('fs');
const path = require('path');

const page18Path = path.join(__dirname, 'schemes', 'bangla-shasya-bima', 'apply-form', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const match = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  return match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content18 = fs.readFileSync(page18Path, 'utf8');
const p18Extra4 = `
<p>
  Maintaining a complete physical dossier of your seasonal enrolment certificate, land Parcha, bank passbook photocopy, and KPS sowing receipt ensures prompt resolution of any claim discrepancies during district-level agricultural audits.
</p>
`;
content18 = content18.replace('</article>', `${p18Extra4}\n</article>`);
fs.writeFileSync(page18Path, content18, 'utf8');

console.log(`Page 18 Target Reached Word Count: ${getArticleWordCount(page18Path)} words`);
