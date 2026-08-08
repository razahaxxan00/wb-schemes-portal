const fs = require('fs');
const path = require('path');

const page35Path = path.join(__dirname, 'schemes', 'scholarship-schemes', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content35 = fs.readFileSync(page35Path, 'utf8');
const p35CompleteExtra = `
<section class="content-block">
  <h2>Timely Application Renewal and Help Desk Channels</h2>
  <p>
    To maintain uninterrupted annual scholarship disbursements, students must submit online renewal applications immediately after passing end-of-year board or university examinations. For technical support, password resets, or bank account update queries, candidates can visit their institution's scholarship desk or call the Department of Higher Education toll-free helpline at 1800-102-8014.
  </p>
</section>
`;
content35 = content35.replace('</article>', `${p35CompleteExtra}\n</article>`);
fs.writeFileSync(page35Path, content35, 'utf8');

console.log(`Page 35 Final Word Count: ${getArticleWordCount(page35Path)} words`);
