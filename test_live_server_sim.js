const http = require('http');
const fs = require('fs');
const path = require('path');

const baseDir = path.resolve('C:/Users/Raza Hassan/.gemini/antigravity-ide/scratch/wb-schemes-portal');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.html')) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });

  return arrayOfFiles;
}

const htmlFiles = getAllFiles(baseDir);
const urlsToTest = new Set();

htmlFiles.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf8');
  const aRegex = /<a[^>]+href=["']([^"']+)["']/gi;
  let match;

  while ((match = aRegex.exec(content)) !== null) {
    const href = match[1];
    if (href.startsWith('http') || href.startsWith('//') || href.startsWith('mailto:') || href.startsWith('tel:') || href === '#') {
      continue;
    }
    const cleanHref = href.split('#')[0];
    if (!cleanHref) continue;

    // Convert relative href to path relative to baseDir
    const resolvedDisk = path.resolve(path.dirname(filePath), cleanHref);
    const relFromBase = path.relative(baseDir, resolvedDisk).replace(/\\/g, '/');
    urlsToTest.add('/' + relFromBase);

    // Also test folder variant without /index.html if ending in /index.html
    if (relFromBase.endsWith('/index.html')) {
      const folderUrl = '/' + relFromBase.replace('/index.html', '/');
      const folderUrlNoSlash = '/' + relFromBase.replace('/index.html', '');
      urlsToTest.add(folderUrl);
      urlsToTest.add(folderUrlNoSlash);
    }
  }
});

console.log(`Extracted ${urlsToTest.size} unique URL patterns across all 51 HTML pages.`);

// Start a simulated production server with Vercel/Netlify routing logic
const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0].split('#')[0];

  let filePath = path.join(baseDir, reqUrl);

  // Production static server index fallback logic:
  // 1. Check if exact file exists
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fs.readFileSync(filePath));
    return;
  }

  // 2. Check if folder + index.html exists
  let indexPath = path.join(filePath, 'index.html');
  if (fs.existsSync(indexPath) && fs.statSync(indexPath).isFile()) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fs.readFileSync(indexPath));
    return;
  }

  // 3. If directory exists but index.html missing -> 403 Forbidden
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  // 4. Otherwise 404
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('404 Not Found');
});

server.listen(4567, async () => {
  console.log('Testing live server endpoint simulation on port 4567...\n');

  let passed = 0;
  let failed = 0;
  const errors = [];

  for (const url of Array.from(urlsToTest)) {
    await new Promise((resolve) => {
      http.get(`http://localhost:4567${url}`, (res) => {
        if (res.statusCode === 200) {
          passed++;
        } else {
          failed++;
          errors.push({ url, status: res.statusCode });
        }
        resolve();
      }).on('error', (err) => {
        failed++;
        errors.push({ url, status: 'CONN_ERR' });
        resolve();
      });
    });
  }

  console.log(`--- LIVE ROUTING TEST RESULTS ---`);
  console.log(`Passed URLs (HTTP 200): ${passed}`);
  console.log(`Failed URLs (403/404): ${failed}`);

  if (errors.length > 0) {
    console.log('\nFailed URL Details:');
    errors.forEach(e => console.log(`  - ${e.url} -> Status ${e.status}`));
  } else {
    console.log('\n🎉 ALL 100% of tested URL patterns returned HTTP 200 OK!');
  }

  server.close();
});
