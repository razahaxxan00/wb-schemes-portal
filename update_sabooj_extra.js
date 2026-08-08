const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const page23Path = path.join(rootDir, 'schemes', 'sabooj-sathi', 'index.html');
const page24Path = path.join(rootDir, 'schemes', 'sabooj-sathi', 'login-portal', 'index.html');

function getArticleWordCount(file) {
  const content = fs.readFileSync(file, 'utf8');
  const match = content.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  const text = match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return text.split(' ').length;
}

let content23 = fs.readFileSync(page23Path, 'utf8');
const p23Extra = `
<section class="content-block">
  <h2>Technical Specifications and Quality Inspections</h2>
  <p>
    The bicycles distributed under Sabooj Sathi are manufactured by leading Indian bicycle producers (such as Hero Cycles, Avon Cycles, and TI Cycles) adhering to strict Bureau of Indian Standards (BIS) specifications:
  </p>
  <ul>
    <li><strong>Customized Frame Design:</strong> Bicycles for female students feature a low-step-through frame design for ease of riding with traditional school uniforms or sarees.</li>
    <li><strong>Safety & Accessories:</strong> Equipped with front wire baskets for carrying school bags, heavy-duty rear carriers, dress guards, and high-visibility reflector lights.</li>
    <li><strong>Quality Certification:</strong> Independent third-party inspection agencies conduct physical stress tests on frame welds, brakes, and tires at district assembly centers prior to distribution.</li>
    <li><strong>Free Maintenance Support:</strong> Manufacturers provide a standard warranty covering structural frame defects during the first academic year of distribution.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Global Recognition: UN WSIS Award Winner</h2>
  <p>
    In June 2020, the Sabooj Sathi initiative achieved international acclaim when it won the prestigious World Summit on the Information Society (WSIS) Prize awarded by the International Telecommunication Union (ITU), a agency of the United Nations:
  </p>
  <ul>
    <li>Selected among 800 global nominations in the "e-Government" category for transparent digital supply chain management.</li>
    <li>Recognized for seamlessly integrating end-to-end e-governance tracking from manufacturer dispatch to student delivery receipt.</li>
    <li>Praised as a global benchmark for leveraging digital innovation to eliminate educational gender disparities in developing regions.</li>
  </ul>
</section>
`;
content23 = content23.replace('</article>', `${p23Extra}\n</article>`);
fs.writeFileSync(page23Path, content23, 'utf8');


let content24 = fs.readFileSync(page24Path, 'utf8');
const p24Extra = `
<section class="content-block">
  <h2>District Education Officer (DEO) & Nodal Verification Workflow</h2>
  <p>
    Behind the scenes, district education authorities monitor portal records to maintain transparent distribution timelines:
  </p>
  <ol>
    <li><strong>District Demand Mapping:</strong> District Inspectors of Schools (Secondary) aggregate school-level student enrollments uploaded on wbsaboojsathi.gov.in.</li>
    <li><strong>Assembly Center Allocation:</strong> Bicycles are shipped in knock-down condition to designated block-level assembly centers where certified technicians assemble and inspect each unit.</li>
    <li><strong>Challan Generation & e-Receipts:</strong> When bicycles are dispatched to individual schools, electronic transport challans are generated on the portal.</li>
    <li><strong>Student Distribution Marking:</strong> School teachers scan or enter student Banglar Shiksha IDs during physical distribution events to instantly update portal status to "Distributed".</li>
  </ol>
</section>

<section class="content-block">
  <h2>Guidelines for Transferred or New Students</h2>
  <p>
    Students who transfer between schools during Class 9 or Class 10 must follow specific update guidelines:
  </p>
  <ul>
    <li><strong>School Transfer Update:</strong> Ensure your new school updates your Banglar Shiksha ID mapping on the Banglar Shiksha portal immediately upon admission.</li>
    <li><strong>Preventing Duplicate Allocation:</strong> If you received a Sabooj Sathi bicycle at your previous school, your Banglar Shiksha ID will reflect "Distributed" status and prevent duplicate allotment.</li>
    <li><strong>District Nodal Resolution:</strong> For student ID transfer delays, contact the District Nodal Officer (Sabooj Sathi) located at the District Magistrate office.</li>
  </ul>
</section>
`;
content24 = content24.replace('</article>', `${p24Extra}\n</article>`);
fs.writeFileSync(page24Path, content24, 'utf8');

console.log(`Page 23 New Word Count: ${getArticleWordCount(page23Path)} words`);
console.log(`Page 24 New Word Count: ${getArticleWordCount(page24Path)} words`);
