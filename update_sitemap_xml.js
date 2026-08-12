const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const domain = 'https://wb-schemes-portal-three.vercel.app';

function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file.startsWith('.')) continue;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getAllHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const htmlFiles = getAllHtmlFiles(rootDir).filter(f => !f.endsWith('404.html'));

let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

for (const file of htmlFiles) {
  let relPath = path.relative(rootDir, file).replace(/\\/g, '/');
  let urlPath = '/' + relPath;
  if (relPath === 'index.html') {
    urlPath = '/';
  } else if (relPath.endsWith('index.html')) {
    urlPath = '/' + relPath.replace('index.html', '');
  }

  sitemapXml += `  <url>\n    <loc>${domain}${urlPath}</loc>\n    <lastmod>2026-08-12</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${urlPath === '/' ? '1.0' : '0.8'}</priority>\n  </url>\n`;
}

sitemapXml += `</urlset>\n`;

fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), sitemapXml, 'utf8');
console.log(`Updated sitemap.xml with all ${htmlFiles.length} non-404 HTML pages.`);
