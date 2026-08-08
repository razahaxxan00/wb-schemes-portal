const fs = require('fs');
const path = require('path');

const page12Path = path.join(__dirname, 'schemes', 'banglar-bari-prakalpa', 'beneficiary-list', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content12 = fs.readFileSync(page12Path, 'utf8');
const p12Extra = `
<section class="content-block">
  <h2>Gram Sabha Approval and Public Vetting Process</h2>
  <p>
    The publication of Banglar Bari beneficiary lists follows a strict multi-tier vetting protocol to maintain complete transparency:
  </p>
  <ul>
    <li><strong>Gram Sabha Reading:</strong> Provisional wait lists are read out loud during open Gram Sabha meetings in each Gram Panchayat to allow community inspection and spot verification.</li>
    <li><strong>Field Re-Verification by BDO Teams:</strong> Multi-member inquiry teams headed by Extension Officers visit households to confirm lack of a pucca house, land ownership, and family income status.</li>
    <li><strong>District Level Approval Committee (DLAC):</strong> Final eligible lists are approved by the DLAC chaired by the District Magistrate prior to publishing PDF notices on district portals.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Step-by-Step Guide to PDF Search on District Portals</h2>
  <p>
    Since district housing lists are hosted as large Gram Panchayat-wise PDF documents, follow these search tips to locate your household record quickly:
  </p>
  <ul>
    <li><strong>Use Exact Registration / Survey ID:</strong> Search using your 18-digit SECC survey ID or application reference number for 100% accurate matching.</li>
    <li><strong>Search by Head of Family Name:</strong> If searching by name, try searching both in English and Bengali spelling variants as transcribed in local Panchayat rolls.</li>
    <li><strong>Verify Father / Husband Name & Village Code:</strong> Always cross-check the listed father's or husband's name and JL number (Jurisdiction List number) to distinguish between similar names within the same Gram Panchayat.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Official Grievance Redressal and Inclusion Appeals</h2>
  <p>
    If your eligible household was omitted during field surveys or incorrectly marked under the Ineligible category, submit a formal appeal through these official channels:
  </p>
  <ul>
    <li><strong>Written Objection at BDO Office:</strong> Submit a written representation addressed to the Block Development Officer along with self-attested photocopies of your Aadhaar, Ration Card, and land Parcha within 15 days of list publication.</li>
    <li><strong>Duare Sarkar Grievance Desk:</strong> Register housing omission complaints at seasonal Duare Sarkar camps for priority field re-inspection.</li>
    <li><strong>District Housing Cell Toll-Free Helpline:</strong> Contact your District Magistrate's office housing cell helpdesk for tracking the status of your submitted objection.</li>
  </ul>
</section>
`;
content12 = content12.replace('</article>', `${p12Extra}\n</article>`);
fs.writeFileSync(page12Path, content12, 'utf8');

console.log(`Page 12 Final Word Count: ${getArticleWordCount(page12Path)} words`);
