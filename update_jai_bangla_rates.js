const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, 'schemes', 'jai-bangla-pension-scheme', 'index.html');
let content = fs.readFileSync(pagePath, 'utf8');

content = content.replace(
  'Most Jai Bangla sub-schemes pay a uniform ₹1,000 per month',
  'Most Jai Bangla sub-schemes pay ₹1,000 per month (revised to ₹1,500 per month effective 1 August 2026 under the 2026-27 state budget)'
);

content = content.replace(
  'A uniform ₹1,000 per month across most sub-schemes',
  '₹1,000 per month (revised to ₹1,500/month effective August 2026) across most sub-schemes'
);

content = content.replace(
  'into a single ₹1,000/month programme',
  'into a single ₹1,000–₹1,500/month programme'
);

fs.writeFileSync(pagePath, content, 'utf8');
console.log('Jai Bangla main page updated with ₹1,500/month rate revision details!');
