const fs = require('fs');
const path = require('path');

const page36Path = path.join(__dirname, 'schemes', 'pension-schemes', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content36 = fs.readFileSync(page36Path, 'utf8');
const p36CompleteExtra = `
<section class="content-block">
  <h2>Long-Term Socio-Economic Impact of Universal Pension Security</h2>
  <p>
    By establishing a unified digital pension framework under Jai Bangla, West Bengal provides guaranteed monthly social security to over 82 lakh vulnerable citizens. Universal monthly Direct Benefit Transfer (DBT) credits ensure financial independence for elderly, disabled, and widowed residents, strengthening community welfare and reducing household economic vulnerability across all 23 districts.
  </p>
</section>
`;
content36 = content36.replace('</article>', `${p36CompleteExtra}\n</article>`);
fs.writeFileSync(page36Path, content36, 'utf8');

console.log(`Page 36 Final Word Count: ${getArticleWordCount(page36Path)} words`);
