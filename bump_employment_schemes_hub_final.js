const fs = require('fs');
const path = require('path');

const page39Path = path.join(__dirname, 'schemes', 'employment-schemes', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content39 = fs.readFileSync(page39Path, 'utf8');
const p39FinalExtra = `
<section class="content-block">
  <h2>Rojgar Seva Portal and District Job Fairs (Rojgar Melas)</h2>
  <p>
    Job matching and employment linkages are facilitated across the state through dedicated labor exchange infrastructure:
  </p>
  <ul>
    <li><strong>Digital Employment Exchange (Rojgar Seva):</strong> Job seekers register their academic credentials, technical trade certificates, and work experience on the state portal (<code>employmentbankwb.gov.in</code>).</li>
    <li><strong>District Rojgar Melas:</strong> District Employment Exchanges organize quarterly job fairs connecting local employers, hospitality groups, and IT firms directly with registered youth.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Soft Skills and Digital Literacy Finishing Schools</h2>
  <p>
    To boost candidate interview performance in competitive job markets, PBSSD integrates soft skills training into core trade modules:
  </p>
  <ul>
    <li><strong>Spoken English & Communication Skills:</strong> Mandatory 40-hour communication and interpersonal training for all technical course participants.</li>
    <li><strong>Basic Digital Literacy:</strong> Fundamental computer operations, web navigation, and office software usage integrated across all vocational trades.</li>
  </ul>
</section>
`;
content39 = content39.replace('</article>', `${p39FinalExtra}\n</article>`);
fs.writeFileSync(page39Path, content39, 'utf8');

console.log(`Page 39 Final Word Count: ${getArticleWordCount(page39Path)} words`);
