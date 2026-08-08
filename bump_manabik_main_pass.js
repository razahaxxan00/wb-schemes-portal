const fs = require('fs');
const path = require('path');

const page22Path = path.join(__dirname, 'schemes', 'manabik-pension-scheme', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const match = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  return match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content22 = fs.readFileSync(page22Path, 'utf8');
const p22Extra = `
<section class="content-block">
  <h2>Unique Disability ID (UDID) Card Integration</h2>
  <p>
    Under recent digital governance initiatives in West Bengal, the Manabik Pension application process aligns with the central Unique Disability ID (UDID) project:
  </p>
  <ul>
    <li><strong>Universal Disability Access:</strong> Applicants possessing a valid 18-digit UDID card issued by the Ministry of Social Justice and Empowerment can quote their UDID number directly on Form P.</li>
    <li><strong>Simplified Verification:</strong> UDID card verification speeds up block-level inquiry since disability percentage, medical board approval, and applicant credentials are automatically cross-checked on the Swavlamban portal.</li>
    <li><strong>Digital Certificate Archiving:</strong> Applicants without a UDID card are assisted at local BDO offices and Duare Sarkar camps to enroll for UDID generation alongside their pension registration.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Special Priority Processing and Grievance Redressal</h2>
  <p>
    The Department of Women and Child Development and Social Welfare mandates priority field processing for vulnerable applicant categories:
  </p>
  <ul>
    <li><strong>Terminal Illness & Severe Disability:</strong> Applicants with terminal illnesses or severe locomotor/neurological conditions are prioritized for immediate field verification within 15 days of Form P submission.</li>
    <li><strong>Duare Sarkar On-the-Spot Registration:</strong> During seasonal Duare Sarkar outreach camps, local medical officers conduct physical disability evaluations on-site to issue provisional certificates for pension sanction.</li>
    <li><strong>Jai Bangla Helpdesk Tracking:</strong> Beneficiaries can check their application status or log payment non-receipt grievances by calling the state toll-free helpline at 1800-345-5505 or visiting their local Block Social Welfare Officer.</li>
  </ul>
</section>
`;
content22 = content22.replace('</article>', `${p22Extra}\n</article>`);
fs.writeFileSync(page22Path, content22, 'utf8');

console.log(`Page 22 Final Word Count: ${getArticleWordCount(page22Path)} words`);
