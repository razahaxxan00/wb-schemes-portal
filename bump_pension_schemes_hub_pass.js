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
const p36Extra = `
<section class="content-block">
  <h2>WBIFMS Direct Benefit Transfer Architecture and Payment Schedule</h2>
  <p>
    State pension disbursements across all 11 Jai Bangla categories are automated through the West Bengal Integrated Financial Management System (WBIFMS):
  </p>
  <ul>
    <li><strong>Automated Monthly Clearing:</strong> Pension funds are generated electronically by the State Treasury on the 1st of every month and credited directly into Aadhaar-seeded savings accounts.</li>
    <li><strong>Zero Banking Fees:</strong> Beneficiaries receive 100% of their sanctioned pension amount (₹1,000 or ₹1,500) without any bank processing fees or deduction charges.</li>
    <li><strong>Real-Time SMS Alerts:</strong> Successful credits trigger automated SMS notifications to registered mobile numbers via the WBIFMS electronic gateway.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Annual Life Certificate Verification and Aadhaar-LGD Seeding</h2>
  <p>
    To prevent fraudulent claims and ensure continuous pension delivery, the Department of Women and Child Development requires periodic beneficiary verification:
  </p>
  <ul>
    <li><strong>Aadhaar & Local Government Directory (LGD) Seeding:</strong> Beneficiary details are mapped against LGD village and municipal ward codes to verify genuine West Bengal residency.</li>
    <li><strong>Life Certificate Verification:</strong> Elderly and disabled pensioners complete annual physical or digital life certificate (Jeevan Pramaan) verification at local Gram Panchayat offices or BDO desks during winter verification drives.</li>
    <li><strong>Automatic De-Duplication:</strong> Database checks ensure no beneficiary receives dual pensions under both state (Jai Bangla) and central (IGNOAPS/IGNWPS) schemes simultaneously for the same entitlement category.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Grievance Redressal for Payment Failure or Bank Account Mismatch</h2>
  <p>
    If your monthly pension stops unexpectedly or fails to credit despite approval, follow these official grievance channels:
  </p>
  <ul>
    <li><strong>BDO Office Pension Desk Submission:</strong> Submit an updated bank passbook copy, Aadhaar card, and Form P acknowledgment receipt to your local Block Development Officer for account re-linking.</li>
    <li><strong>Duare Sarkar Camp Resolution:</strong> Seasonal Duare Sarkar camps feature specialized pension grievance desks to resolve NPCI mapping and account hold errors on the spot.</li>
    <li><strong>Jai Bangla Portal Status Check:</strong> Track application progress or payment failure reasons online using your Beneficiary ID on the official portal.</li>
  </ul>
</section>
`;
content36 = content36.replace('</article>', `${p36Extra}\n</article>`);
fs.writeFileSync(page36Path, content36, 'utf8');

console.log(`Page 36 Final Word Count: ${getArticleWordCount(page36Path)} words`);
