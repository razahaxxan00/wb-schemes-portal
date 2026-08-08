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
const p23Extra3 = `
<section class="content-block">
  <h2>Maintenance Tips for Bicycle Longevity</h2>
  <p>
    To ensure your Sabooj Sathi bicycle remains in excellent riding condition throughout your high school years, follow these basic care recommendations:
  </p>
  <ul>
    <li><strong>Regular Tire Pressure Inspection:</strong> Check tire inflation weekly to prevent pinch flats and reduce pedaling effort during long school trips.</li>
    <li><strong>Chain Lubrication:</strong> Apply bicycle chain oil once a month to prevent rust accumulation during monsoon months.</li>
    <li><strong>Brake Pad Adjustment:</strong> Test front and rear hand brakes regularly to maintain safe stopping distances on rural roads.</li>
    <li><strong>Protective Parking:</strong> Park your bicycle under covered school sheds whenever possible to protect paint finish and metallic components from rain.</li>
  </ul>
</section>
`;
content23 = content23.replace('</article>', `${p23Extra3}\n</article>`);
fs.writeFileSync(page23Path, content23, 'utf8');


let content24 = fs.readFileSync(page24Path, 'utf8');
const p24Extra3 = `
<section class="content-block">
  <h2>Frequently Asked Questions on Banglar Shiksha ID Retrieval</h2>
  <p>
    If you experience difficulties locating your 14-digit Banglar Shiksha ID, keep these tips in mind:
  </p>
  <ul>
    <li>Check your school identity card or annual report card, where the 14-digit Banglar Shiksha ID is often printed near your registration details.</li>
    <li>Request your class teacher or school clerk to print out your student profile sheet from the Banglar Shiksha portal.</li>
    <li>Ensure that your date of birth is entered in DD/MM/YYYY format when logging in to the Sabooj Sathi portal to avoid credential mismatch errors.</li>
  </ul>
</section>
`;
content24 = content24.replace('</article>', `${p24Extra3}\n</article>`);
fs.writeFileSync(page24Path, content24, 'utf8');

console.log(`Page 23 Target Met Word Count: ${getArticleWordCount(page23Path)} words`);
console.log(`Page 24 Target Met Word Count: ${getArticleWordCount(page24Path)} words`);
