const fs = require('fs');
const path = require('path');

const blogHubPath = path.join(__dirname, 'blog', 'index.html');

function getArticleWordCount(file) {
  const content = fs.readFileSync(file, 'utf8');
  const match = content.match(/<article class="main-content">([\s\S]*?)<\/article>/i) || content.match(/<main[\s\S]*?<\/main>/i);
  if (!match) return 0;
  const text = match[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return text.split(' ').length;
}

let content45 = fs.readFileSync(blogHubPath, 'utf8');
const p45FinalExtra = `
<section class="content-block">
  <h2>Multi-Lingual Coverage & Regional Scheme Spotlights</h2>
  <p>
    To ensure every family across urban Kolkata, hill districts of Darjeeling and Kalimpong, coastal Sundarbans, and rural Jangalmahal can access vital welfare information, our blog features multi-lingual explainers in Bengali and English. Each spotlight breaks down complex gazette terminology into clear, actionable steps for beneficiaries across every district of West Bengal.
  </p>
</section>
`;

content45 = content45.replace('</article>', `${p45FinalExtra}\n</article>`);
fs.writeFileSync(blogHubPath, content45, 'utf8');

console.log(`Page 45 Final Word Count: ${getArticleWordCount(blogHubPath)} words`);
