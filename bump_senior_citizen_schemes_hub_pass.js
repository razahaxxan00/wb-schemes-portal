const fs = require('fs');
const path = require('path');

const page42Path = path.join(__dirname, 'schemes', 'senior-citizen-schemes', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content42 = fs.readFileSync(page42Path, 'utf8');
const p42Extra = `
<section class="content-block">
  <h2>Maintenance Tribunals under Maintenance of Parents & Senior Citizens Act</h2>
  <p>
    To protect vulnerable elderly residents from financial neglect, eviction, or property coercion by children or legal heirs:
  </p>
  <ul>
    <li><strong>Sub-Divisional Maintenance Tribunals:</strong> Senior citizens can file summary claims before the Sub-Divisional Officer (SDO) Maintenance Tribunal for monthly maintenance allowances (up to ₹10,000 per month) from children or legal heirs.</li>
    <li><strong>Revocation of Property Transfers:</strong> Property conditional transfers executed by senior citizens can be declared void by the Tribunal if children fail to provide basic physical amenities and care.</li>
    <li><strong>Protection Against Forcible Eviction:</strong> Local police stations and District Magistrates are legally empowered to intervene and reinstate senior citizens facing illegal home eviction.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Samabyathi Prakalpa — Emergency Bereavement Financial Aid</h2>
  <p>
    To ensure dignified funeral rites for deceased senior citizens from impoverished families across West Bengal:
  </p>
  <ul>
    <li><strong>₹2,000 One-Time Ex-Gratia Grant:</strong> Immediate cash assistance of ₹2,000 is disbursed to bereaved low-income family members or caretakers to perform cremation or burial rites.</li>
    <li><strong>On-the-Spot Disbursement:</strong> Processed through local Gram Panchayat offices, Municipalities, or cremation ground administrative counters upon presenting a death declaration.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Geriatric Care Wards and Tele-Medicine Helplines for Seniors</h2>
  <p>
    Specialized medical facilities are provided for elderly patients across medical colleges and district hospitals:
  </p>
  <ul>
    <li><strong>Dedicated Geriatric OPD Counters:</strong> Senior citizens receive priority registration, non-queue pharmacy counters, and dedicated OPD consultation desks in all state medical colleges.</li>
    <li><strong>Elder Line Helpline (14567):</strong> National toll-free helpline providing tele-counseling, legal advice, emergency rescue, and information on old age homes for senior citizens across West Bengal.</li>
  </ul>
</section>
`;
content42 = content42.replace('</article>', `${p42Extra}\n</article>`);
fs.writeFileSync(page42Path, content42, 'utf8');

console.log(`Page 42 Final Word Count: ${getArticleWordCount(page42Path)} words`);
