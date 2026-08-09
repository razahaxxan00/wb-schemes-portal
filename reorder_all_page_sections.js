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
console.log(`Auditing and reordering sections across ${htmlFiles.length} HTML files...`);

const reorderedFilesReport = [];
let totalFilesReordered = 0;

for (const file of htmlFiles) {
  let content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(rootDir, file).replace(/\\/g, '/');

  // Match <article class="main-content">...</article>
  const articleRegex = /(<article\s+class=["']main-content["'][^>]*>)([\s\S]*?)(<\/article>)/i;
  const articleMatch = content.match(articleRegex);

  if (!articleMatch) continue;

  const articleOpenTag = articleMatch[1];
  const articleBody = articleMatch[2];
  const articleCloseTag = articleMatch[3];

  // Extract top-level sections inside article
  // We split articleBody by top-level <section ...> ... </section>
  const sectionRegex = /(<section\b[^>]*>[\s\S]*?<\/section>)/gi;
  
  const sections = [];
  let match;
  let lastIndex = 0;
  let leadingContent = '';

  // Get leading content before first section
  const firstSectionMatch = articleBody.search(/<section\b[^>]*>/i);
  if (firstSectionMatch !== -1) {
    leadingContent = articleBody.substring(0, firstSectionMatch);
  } else {
    leadingContent = articleBody;
  }

  while ((match = sectionRegex.exec(articleBody)) !== null) {
    sections.push(match[1]);
  }

  if (sections.length === 0) continue;

  // Categorize sections
  let faqSection = null;
  let relatedSection = null;
  const bodySections = [];

  for (const sec of sections) {
    const isFaq = /<h2>\s*Frequently Asked Questions\s*<\/h2>/i.test(sec);
    const isRelated = /<h2>\s*Related (Category Hubs|Schemes)\s*<\/h2>/i.test(sec);

    if (isFaq) {
      faqSection = sec;
    } else if (isRelated) {
      relatedSection = sec;
    } else {
      bodySections.push(sec);
    }
  }

  // Check if reordering is needed
  // Original order of sections:
  const originalOrderTitles = sections.map(sec => {
    const h2Match = sec.match(/<h2>([\s\S]*?)<\/h2>/i);
    return h2Match ? h2Match[1].replace(/<[^>]+>/g, '').trim() : 'Untitled Section';
  });

  // Target order: bodySections, faqSection (if exists), relatedSection (if exists)
  const targetSections = [...bodySections];
  if (faqSection) targetSections.push(faqSection);
  if (relatedSection) targetSections.push(relatedSection);

  const targetOrderTitles = targetSections.map(sec => {
    const h2Match = sec.match(/<h2>([\s\S]*?)<\/h2>/i);
    return h2Match ? h2Match[1].replace(/<[^>]+>/g, '').trim() : 'Untitled Section';
  });

  // Check if order changed
  const isDifferent = JSON.stringify(originalOrderTitles) !== JSON.stringify(targetOrderTitles);

  if (isDifferent) {
    totalFilesReordered++;
    reorderedFilesReport.push({
      file: relPath,
      before: originalOrderTitles,
      after: targetOrderTitles
    });

    // Construct new article body
    let newArticleBody = leadingContent.trimEnd() + '\n\n';
    for (const sec of targetSections) {
      newArticleBody += '          ' + sec.trim() + '\n\n';
    }

    const newContent = content.replace(articleRegex, `${articleOpenTag}\n${newArticleBody}        ${articleCloseTag}`);
    fs.writeFileSync(file, newContent, 'utf8');
  }
}

console.log(`\n=================== REORDERING SUMMARY ===================`);
console.log(`Total files checked: ${htmlFiles.length}`);
console.log(`Total files reordered: ${totalFilesReordered}`);
console.log(JSON.stringify(reorderedFilesReport, null, 2));
