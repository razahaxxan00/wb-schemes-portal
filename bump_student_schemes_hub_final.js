const fs = require('fs');
const path = require('path');

const page34Path = path.join(__dirname, 'schemes', 'student-schemes', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!m) return 0;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content34 = fs.readFileSync(page34Path, 'utf8');
const p34FinalExtra = `
<section class="content-block">
  <h2>Taruner Swapno Scheme (Free Tablet / Smartphone Grant)</h2>
  <p>
    To bridge the digital divide and support online learning for higher secondary students across West Bengal:
  </p>
  <ul>
    <li><strong>₹10,000 Direct Cash Assistance:</strong> Enrolled Class 11 and Class 12 students in government and government-aided schools receive a one-time grant of ₹10,000 directly into their bank accounts to purchase a smartphone, tablet, or PC.</li>
    <li><strong>Digital Classrooms & E-Learning Access:</strong> Facilitates access to online lectures, digital textbooks on Banglar Shiksha portal, and competitive exam preparation modules.</li>
  </ul>
</section>

<section class="content-block">
  <h2>Medhashree Scholarship for OBC Students (Classes 5–8)</h2>
  <p>
    Launched by the Backward Classes Welfare Department, Medhashree fills the pre-matric financial gap for Other Backward Class (OBC) students:
  </p>
  <ul>
    <li><strong>Annual Stipend of ₹800:</strong> OBC day scholars in Classes 5 to 8 receive an annual stipend of ₹800 to meet essential stationery, uniform, and book expenses.</li>
    <li><strong>Simplified Family Income Limit:</strong> Available to OBC students with family income under ₹2.5 Lakh per annum, registered through the OASIS web portal.</li>
  </ul>
</section>
`;
content34 = content34.replace('</article>', `${p34FinalExtra}\n</article>`);
fs.writeFileSync(page34Path, content34, 'utf8');

console.log(`Page 34 Final Word Count: ${getArticleWordCount(page34Path)} words`);
