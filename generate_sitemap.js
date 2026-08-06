const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const domain = 'https://wb-schemes-portal-three.vercel.app';

function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === 'brain') continue;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html') && file !== '404.html') {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const htmlFiles = getHtmlFiles(rootDir);
const urls = htmlFiles.map(filePath => {
  let relPath = path.relative(rootDir, filePath).replace(/\\/g, '/');
  if (relPath.endsWith('index.html')) {
    relPath = relPath.slice(0, -10); // remove index.html
  }
  let url = `${domain}/${relPath}`;
  if (!url.endsWith('/')) {
    url = url + '/';
  }
  return url;
});

// Remove duplicates & sort
const uniqueUrls = Array.from(new Set(urls)).sort();

const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueUrls.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>2026-08-06</lastmod>
    <changefreq>${url === `${domain}/` ? 'daily' : 'weekly'}</changefreq>
    <priority>${url === `${domain}/` ? '1.0' : url.includes('/schemes/') && url.split('/').length === 6 ? '0.8' : '0.6'}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), xmlContent, 'utf8');
console.log(`Generated sitemap.xml with ${uniqueUrls.length} URLs for domain ${domain}.`);
