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
const p32FinalExtra = `
<section class="content-block">
  <h2>Self-Help Group (SHG) Integration under Anandadhara</h2>
  <p>
    Beyond direct cash transfers, female beneficiaries in West Bengal are encouraged to join Self-Help Groups under the Anandadhara (West Bengal State Rural Livelihoods Mission) programme. SHG membership opens access to micro-credit bank linkages, revolving funds, and vocational training in tailoring, food processing, and handicraft production.
  </p>
</section>

<section class="content-block">
  <h2>Higher Benefit Rates for SC and ST Women</h2>
  <p>
    Across major social welfare programs, the state government provides enhanced financial assistance to women belonging to Scheduled Caste (SC) and Scheduled Tribe (ST) communities. For example, under Lakshmir Bhandar, SC/ST women receive ₹1,200 monthly compared to ₹1,000 for general category recipients, while scholarship allocations under Shikshashree and Oasis guarantee 100% coverage for eligible SC/ST female applicants.
  </p>
</section>
`;
content32 = content32.replace('</article>', `${p32FinalExtra}\n</article>`);
fs.writeFileSync(page32Path, content32, 'utf8');

console.log(`Page 32 Final Word Count: ${getArticleWordCount(page32Path)} words`);
