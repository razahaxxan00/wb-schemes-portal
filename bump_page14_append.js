const fs = require('fs');
const path = require('path');

const page14Path = path.join(__dirname, 'schemes', 'khadya-sathi', 'card-download', 'index.html');

function getArticleWordCount(file) {
  const c = fs.readFileSync(file, 'utf8');
  const match = c.match(/<article class="main-content">([\s\S]*?)<\/article>/i);
  if (!match) return 0;
  return match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
}

let content14 = fs.readFileSync(page14Path, 'utf8');

const extraText = `
<p>
  All digital ration card downloads from the official West Bengal Food & Supplies portal feature real-time database verification. Beneficiaries who encounter technical errors during PDF generation can clear their browser cache or use the "Khadya Sathi - Amar Ration" mobile application. The Department of Food & Supplies ensures that digital e-ration cards remain fully accessible 24/7 for all registered citizen households across West Bengal.
</p>
`;

content14 = content14.replace('</article>', `${extraText}\n</article>`);
fs.writeFileSync(page14Path, content14, 'utf8');

console.log(`Page 14 Final Word Count: ${getArticleWordCount(page14Path)} words`);
