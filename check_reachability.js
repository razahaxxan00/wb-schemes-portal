const fs = require('fs');
const path = require('path');

const rootDir = __dirname;

function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === 'brain') continue;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const htmlFiles = getHtmlFiles(rootDir);
const relFiles = htmlFiles.map(fp => path.relative(rootDir, fp).replace(/\\/g, '/'));

// Sub-pages are files in schemes/*/*/index.html
const subPages = relFiles.filter(f => f.startsWith('schemes/') && f.split('/').length === 4);

console.log(`Found ${subPages.length} sub-pages to audit for reachability.`);

const missingFromMain = [];
const missingFromCategory = [];

subPages.forEach(subPage => {
  const parts = subPage.split('/');
  const mainSchemePage = `schemes/${parts[1]}/index.html`;
  
  // Find Category Hub page for this scheme
  let categoryPage = null;
  if (fs.existsSync(mainSchemePage)) {
    const mainContent = fs.readFileSync(mainSchemePage, 'utf8');
    const catMatch = mainContent.match(/href=["'](\/schemes\/[^"']+-schemes\/index\.html|\/schemes\/[a-z-]+-welfare\/index\.html)["']/i);
    if (catMatch) {
      categoryPage = catMatch[1].replace(/^\//, '');
    }
  }

  // Check link from Main Scheme Page
  if (fs.existsSync(mainSchemePage)) {
    const mainContent = fs.readFileSync(mainSchemePage, 'utf8');
    const targetLink = `/${subPage}`;
    if (!mainContent.includes(targetLink) && !mainContent.includes(subPage)) {
      missingFromMain.push({ subPage, mainSchemePage });
    }
  } else {
    missingFromMain.push({ subPage, mainSchemePage: 'MISSING_MAIN_PAGE' });
  }

  // Check link from Category Hub Page
  if (categoryPage && fs.existsSync(categoryPage)) {
    const catContent = fs.readFileSync(categoryPage, 'utf8');
    const targetLink = `/${subPage}`;
    if (!catContent.includes(targetLink) && !catContent.includes(subPage)) {
      missingFromCategory.push({ subPage, categoryPage });
    }
  }
});

console.log('\n=== SUB-PAGE REACHABILITY REPORT ===');
console.log(`Sub-pages missing link from Main Scheme Page: ${missingFromMain.length}`);
missingFromMain.forEach(m => console.log(`  - Sub-page ${m.subPage} NOT linked from ${m.mainSchemePage}`));

console.log(`Sub-pages missing link from Category Hub Page: ${missingFromCategory.length}`);
missingFromCategory.forEach(m => console.log(`  - Sub-page ${m.subPage} NOT linked from ${m.categoryPage}`));
