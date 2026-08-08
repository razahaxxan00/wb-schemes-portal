const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const page19Path = path.join(rootDir, 'schemes', 'rupashree-prakalpa', 'index.html');
const page20Path = path.join(rootDir, 'schemes', 'rupashree-prakalpa', 'how-to-apply', 'index.html');

function getArticleWordCount(file) {
  const content = fs.readFileSync(file, 'utf8');
  const match = content.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  const text = match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return text.split(' ').length;
}

let content19 = fs.readFileSync(page19Path, 'utf8');
const p19Extra = `
<section class="content-block">
  <h2>Verification and Field Inquiry Procedure</h2>
  <p>
    Following application submission at your local Block Development Office (BDO) or Sub-Divisional Office (SDO), an official field inquiry is conducted before funds are sanctioned:
  </p>
  <ul>
    <li><strong>Designated Inquiry Officer:</strong> An Inquiry Officer (typically a Block Welfare Officer or Assistant Director of Agriculture staff member) is assigned to verify the physical residence of the applicant.</li>
    <li><strong>Neighborhood Inquiry:</strong> The officer visits the bride's residence to confirm that the marriage is genuine, planned for the declared date, and that the bride is unmarried and at least 18 years of age.</li>
    <li><strong>Document Cross-Checking:</strong> The officer checks original age proof documents and verifies that the family's annual income falls within the ₹1.5 lakh threshold.</li>
    <li><strong>Approval & IFMS Clearance:</strong> Upon satisfactory verification, the BDO/SDO approves the application electronically on the Rupashree Online 3.0 portal, forwarding it to the Treasury for Direct Benefit Transfer.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Role in Preventing Child Marriage</h2>
  <p>
    Rupashree Prakalpa plays a crucial role in West Bengal's social reform strategy against early marriage:
  </p>
  <ul>
    <li><strong>Financial Incentive:</strong> Providing ₹25,000 directly to adult brides incentivizes families to delay marriage until daughters complete age 18.</li>
    <li><strong>Synergy with Kanyashree:</strong> Adolescent girls who receive annual Kanyashree K1/K2 stipends during school transition seamlessly into Rupashree eligibility upon reaching 18 years.</li>
    <li><strong>Community Awareness:</strong> Panchayat Pradhans and Ward Councillors actively raise awareness about the 18+ age mandate during local marriage registration drives.</li>
  </ul>
</section>
`;
content19 = content19.replace('</article>', `${p19Extra}\n</article>`);
fs.writeFileSync(page19Path, content19, 'utf8');


let content20 = fs.readFileSync(page20Path, 'utf8');
const p20Extra = `
<section class="content-block">
  <h2>Field Inquiry and Verification Step-by-Step</h2>
  <p>
    Understanding what happens after you submit your application form helps avoid unnecessary delays:
  </p>
  <ol>
    <li><strong>Application Digitization:</strong> Office staff at the BDO/SDO counter digitize your paper application and generate an electronic tracking number on wbrupashree.gov.in.</li>
    <li><strong>Inquiry Officer Assignment:</strong> A local welfare inspector is tasked with conducting a field visit to your declared residential address.</li>
    <li><strong>On-Site Verification:</strong> The inspector inspects original age proof, speaks with local Panchayat members, and verifies the wedding venue or invitation card.</li>
    <li><strong>Sanction Order Issuance:</strong> Once approved, the District Magistrate / SDO issues a formal financial sanction order releasing ₹25,000 into the bride's bank account.</li>
  </ol>
</section>

<section class="content-block">
  <h2>Handling Delays and Escalation</h2>
  <p>
    If your application remains pending past 30 days without an update, follow these escalation steps:
  </p>
  <ul>
    <li>Visit the BDO/SDO office with your Application Receipt slip and request to meet the Rupashree Nodal Officer.</li>
    <li>Confirm whether your file has been assigned to a field Inquiry Officer or if additional document clarification is required.</li>
    <li>Ensure your bank account details (IFSC code and account number) are correctly recorded to prevent Direct Benefit Transfer transaction bounces.</li>
    <li>Call the state social welfare helpline at 1800-345-5505 for administrative tracking assistance.</li>
  </ul>
</section>
`;
content20 = content20.replace('</article>', `${p20Extra}\n</article>`);
fs.writeFileSync(page20Path, content20, 'utf8');

console.log(`Page 19 New Word Count: ${getArticleWordCount(page19Path)} words`);
console.log(`Page 20 New Word Count: ${getArticleWordCount(page20Path)} words`);
