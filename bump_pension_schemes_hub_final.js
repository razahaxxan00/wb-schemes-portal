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
const p36FinalExtra = `
<section class="content-block">
  <h2>Convergence with Swasthya Sathi Cashless Healthcare</h2>
  <p>
    All approved beneficiaries under the Jai Bangla pension platform — including senior citizens, widows, disabled persons, and unorganized sector workers — automatically qualify for cashless secondary and tertiary medical care under the state's Swasthya Sathi scheme:
  </p>
  <ul>
    <li><strong>₹5 Lakh Annual Family Health Cover:</strong> Pensioners and their dependent family members receive up to ₹5,00,000 annual cashless coverage across government hospitals and empanelled private nursing homes.</li>
    <li><strong>No Premium Cost for Pensioners:</strong> Healthcare coverage is fully subsidized by the West Bengal government, eliminating medical debt for low-income senior citizens.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Nominee Nomination and Arrears Claim Protocol</h2>
  <p>
    To protect the financial interests of pensioner families in the event of a beneficiary's death:
  </p>
  <ul>
    <li><strong>Form P Nominee Designation:</strong> Applicants specify a legal nominee (spouse, son, or daughter) during initial Form P submission at the BDO office.</li>
    <li><strong>Disbursement of Pending Arrears:</strong> If a pensioner passes away before receiving approved monthly instalments, accumulated arrears are credited directly to the registered nominee's bank account upon presenting a valid death certificate.</li>
  </ul>
</section>
`;
content36 = content36.replace('</article>', `${p36FinalExtra}\n</article>`);
fs.writeFileSync(page36Path, content36, 'utf8');

console.log(`Page 36 Final Word Count: ${getArticleWordCount(page36Path)} words`);
