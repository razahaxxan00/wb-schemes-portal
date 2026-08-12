const fs = require('fs');
const path = require('path');

const rootDir = __dirname;

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

const htmlFiles = getAllHtmlFiles(rootDir);
const non404Files = htmlFiles.filter(f => !f.endsWith('404.html'));

const sitemapPath = path.join(rootDir, 'sitemap.xml');
const sitemapText = fs.readFileSync(sitemapPath, 'utf8');
const locs = [...sitemapText.matchAll(/<loc>([\s\S]*?)<\/loc>/gi)].map(m => m[1]);

const sitemapPaths = locs.map(url => {
  let u = url.replace('https://wb-schemes-portal-three.vercel.app', '');
  if (u.endsWith('/')) u += 'index.html';
  if (u.startsWith('/')) u = u.substring(1);
  return u;
});

console.log(`Non-404 HTML Files: ${non404Files.length}`);
console.log(`Sitemap URLs: ${sitemapPaths.length}`);

const fileRelPaths = non404Files.map(f => path.relative(rootDir, f).replace(/\\/g, '/'));

const missingFromSitemap = fileRelPaths.filter(f => !sitemapPaths.includes(f));
console.log('Missing from sitemap:', missingFromSitemap);
