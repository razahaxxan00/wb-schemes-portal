const fs = require('fs');
const path = require('path');

const page37Path = path.join(__dirname, 'schemes', 'housing-schemes', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content37 = fs.readFileSync(page37Path, 'utf8');
const p37CompleteExtra = `
<section class="content-block">
  <h2>Long-Term Impact on Rural Housing Security and Community Living</h2>
  <p>
    By replacing vulnerable kutcha mud huts with permanent concrete pucca dwellings, West Bengal's housing programs significantly enhance family safety, disaster resilience, and health outcomes. Secure housing ownership, issued preferably in the name of female heads of household or jointly with spouses, promotes gender equity, economic stability, and long-term socio-economic dignity across rural panchayats and urban municipalities alike.
  </p>
</section>
`;
content37 = content37.replace('</article>', `${p37CompleteExtra}\n</article>`);
fs.writeFileSync(page37Path, content37, 'utf8');

console.log(`Page 37 Final Word Count: ${getArticleWordCount(page37Path)} words`);
