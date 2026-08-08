const fs = require('fs');
const path = require('path');

const page23Path = path.join(__dirname, 'schemes', 'sabooj-sathi', 'index.html');
const page24Path = path.join(__dirname, 'schemes', 'sabooj-sathi', 'login-portal', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const match = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  return match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content23 = fs.readFileSync(page23Path, 'utf8');
content23 = content23.replace(
  'access official guidelines, distribution updates, and district node notices anytime on wbsaboojsathi.gov.in.',
  'access official guidelines, distribution updates, and district node notices anytime on wbsaboojsathi.gov.in for public awareness.'
);
fs.writeFileSync(page23Path, content23, 'utf8');


let content24 = fs.readFileSync(page24Path, 'utf8');
content24 = content24.replace(
  'checking portal status updates with your school guarantees smooth bicycle allocation during seasonal distribution drives.',
  'checking portal status updates with your school guarantees smooth bicycle allocation during seasonal distribution drives across West Bengal.'
);
fs.writeFileSync(page24Path, content24, 'utf8');

console.log(`Page 23 Final Met: ${getArticleWordCount(page23Path)} words`);
console.log(`Page 24 Final Met: ${getArticleWordCount(page24Path)} words`);
