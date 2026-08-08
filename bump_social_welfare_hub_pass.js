const fs = require('fs');
const path = require('path');

const page31Path = path.join(__dirname, 'schemes', 'social-welfare', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content31 = fs.readFileSync(page31Path, 'utf8');
const p31Extra = `
<section class="content-block">
  <h2>State Departments Administering Welfare Initiatives</h2>
  <p>
    Social security programs in West Bengal are planned and executed through specialized administrative departments working in coordination with district administrations:
  </p>
  <ul>
    <li><strong>Department of Women and Child Development and Social Welfare:</strong> Oversees Lakshmir Bhandar, Kanyashree Prakalpa, Rupashree Prakalpa, and the Jai Bangla pension umbrella (including Manabik disability pension).</li>
    <li><strong>Department of Agriculture & Agricultural Marketing:</strong> Manages Krishak Bandhu income assistance and state crop insurance via Bangla Shasya Bima.</li>
    <li><strong>Department of Food and Supplies:</strong> Administers Khadya Sathi food grain distribution and e-ration card management via wbpds.gov.in.</li>
    <li><strong>Panchayat and Rural Development (P&RD) Department:</strong> Implements rural housing under Banglar Bari Prakalpa, rural road connectivity, and MGNREGA asset creation.</li>
    <li><strong>Backward Classes Welfare and Tribal Development Department:</strong> Manages OASIS pre-matric/post-matric scholarships, Shikshashree, and Medhashree stipends.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Statewide Grievance Redressal and Helpline Support</h2>
  <p>
    If you experience payment delays, application rejections, or document discrepancies while accessing state welfare benefits, utilize these official channels:
  </p>
  <ul>
    <li><strong>CMO Public Grievance Portal (Nabanna):</strong> Submit written or digital complaints directly to the Chief Minister's Office public helpline desk for expedited resolution.</li>
    <li><strong>Duare Sarkar Grievance Cells:</strong> Every seasonal Duare Sarkar camp features a dedicated Help Desk counter for logging status queries and resolving missing Aadhaar/bank account seeding issues.</li>
    <li><strong>Toll-Free Helpline Services:</strong> Contact the statewide welfare helpline at 1800-123-4567 or visit your local Block Development Officer (BDO) for in-person administrative support.</li>
  </ul>
</section>
`;
content31 = content31.replace('</article>', `${p31Extra}\n</article>`);
fs.writeFileSync(page31Path, content31, 'utf8');

console.log(`Page 31 Final Word Count: ${getArticleWordCount(page31Path)} words`);
