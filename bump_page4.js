const fs = require('fs');
const path = require('path');

const page4Path = path.join(__dirname, 'schemes', 'krishak-bandhu', 'beneficiary-list', 'index.html');
let content = fs.readFileSync(page4Path, 'utf8');

content = content.replace(
  'You can print or download the Gram Panchayat beneficiary schedule directly from the portal for your personal documentation.',
  'You can print or download the Gram Panchayat beneficiary schedule directly from the portal for your personal documentation, or request a certified copy from your local Panchayat Pradhan during official office hours.'
);

content = content.replace(
  'For municipal or semi-urban village areas bordering municipal corporations, select the adjacent block authority where your agricultural land plot is officially registered in land records.',
  'For municipal or semi-urban village areas bordering municipal corporations, select the adjacent block authority where your agricultural land plot is officially registered in land records, as urban local bodies do not maintain separate agricultural beneficiary schedules.'
);

fs.writeFileSync(page4Path, content, 'utf8');

function getArticleWordCount(filePath) {
  const c = fs.readFileSync(filePath, 'utf8');
  const match = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  return match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

console.log(`Page 4 Final Word Count: ${getArticleWordCount(page4Path)} words`);
