const fs = require('fs');
const path = require('path');

const page32Path = path.join(__dirname, 'schemes', 'women-welfare', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content32 = fs.readFileSync(page32Path, 'utf8');
const p32CompleteExtra = `
<section class="content-block">
  <h2>Legal Protections and Equal Beneficiary Rights</h2>
  <p>
    All women-focused welfare initiatives in West Bengal strictly enforce non-discrimination guidelines based on caste, religion, or regional location. Direct Benefit Transfer (DBT) payments credited to single-operated bank accounts ensure that female beneficiaries retain full financial autonomy, supporting economic self-reliance, improved household nutritional security, and long-term socio-economic dignity across urban and rural communities alike.
  </p>
</section>
`;
content32 = content32.replace('</article>', `${p32CompleteExtra}\n</article>`);
fs.writeFileSync(page32Path, content32, 'utf8');

console.log(`Page 32 Final Word Count: ${getArticleWordCount(page32Path)} words`);
