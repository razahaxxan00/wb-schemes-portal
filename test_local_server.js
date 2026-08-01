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
console.log(`Total HTML pages on disk: ${htmlFiles.length}`);

// We will click-test every link on http://localhost:3000
const brokenLinks = [];
let totalLinksTested = 0;

async function runTest() {
  for (const filePath of htmlFiles) {
    const relPath = path.relative(baseDir, filePath).replace(/\\/g, '/');
    const content = fs.readFileSync(filePath, 'utf8');

    const aRegex = /<a[^>]+href=["']([^"']+)["']/gi;
    let match;

    while ((match = aRegex.exec(content)) !== null) {
      const href = match[1];
      if (href.startsWith('http') || href.startsWith('//') || href.startsWith('mailto:') || href.startsWith('tel:') || href === '#') {
        continue;
      }

      totalLinksTested++;

      // Compute how http://localhost:3000 resolves this link from the page URL http://localhost:3000/${relPath}
      const pageUrl = `http://localhost:3000/${relPath}`;
      // Use URL class to resolve relative href exactly like a web browser does!
      const targetUrl = new URL(href, pageUrl).toString();

      // Make HTTP request to local server on port 3000
      await new Promise((resolve) => {
        http.get(targetUrl, (res) => {
          if (res.statusCode !== 200) {
            brokenLinks.push({
              page: `/${relPath}`,
              href: href,
              targetUrl: targetUrl,
              statusCode: res.statusCode
            });
          }
          resolve();
        }).on('error', (err) => {
          brokenLinks.push({
            page: `/${relPath}`,
            href: href,
            targetUrl: targetUrl,
            statusCode: 'CONN_ERR'
          });
          resolve();
        });
      });
    }
  }

  console.log(`\n--- LOCAL SERVER CLICK-TEST RESULTS ---`);
  console.log(`Total internal links tested: ${totalLinksTested}`);
  console.log(`Total working links (HTTP 200): ${totalLinksTested - brokenLinks.length}`);
  console.log(`Total broken links: ${brokenLinks.length}\n`);

  if (brokenLinks.length > 0) {
    console.log(`Detailed Breakdown of Broken Links:`);
    brokenLinks.forEach((b, idx) => {
      console.log(`${idx + 1}. Page: ${b.page} | href: "${b.href}" | Resolved Target: ${b.targetUrl} | Status: ${b.statusCode}`);
    });
  }
}

runTest();
