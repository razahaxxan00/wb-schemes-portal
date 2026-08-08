const fs = require('fs');
const path = require('path');

const page23Path = path.join(__dirname, 'schemes', 'sabooj-sathi', 'index.html');
const page24Path = path.join(__dirname, 'schemes', 'sabooj-sathi', 'login-portal', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const match = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  return match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content23 = fs.readFileSync(page23Path, 'utf8');
const p23Extra4 = `
<p>
  By providing reliable eco-friendly transportation to over 1.2 crore students, Sabooj Sathi continues to transform rural student mobility and empower youth across West Bengal.
</p>
`;
content23 = content23.replace('</article>', `${p23Extra4}\n</article>`);
fs.writeFileSync(page23Path, content23, 'utf8');


let content24 = fs.readFileSync(page24Path, 'utf8');
const p24Extra4 = `
<section class="content-block">
  <h2>Helpdesk Contact & Administrative Support</h2>
  <p>
    If technical issues prevent student login or if your Banglar Shiksha ID is not recognized on wbsaboojsathi.gov.in:
  </p>
  <ul>
    <li>Contact your school's ICT computer instructor or Assistant Headmaster handling student data.</li>
    <li>Send an email query to official scheme support at <strong>wbsaboojsathi@gmail.com</strong> providing your student ID and school DISE code.</li>
    <li>Visit your local Block Development Office (BDO) to consult the Sabooj Sathi Nodal Assistant.</li>
  </ul>
</section>
`;
content24 = content24.replace('</article>', `${p24Extra4}\n</article>`);
fs.writeFileSync(page24Path, content24, 'utf8');

console.log(`Page 23 Final Word Count: ${getArticleWordCount(page23Path)} words`);
console.log(`Page 24 Final Word Count: ${getArticleWordCount(page24Path)} words`);
