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
console.log(`Verifying FAQ schema matching across ${htmlFiles.length} HTML files...`);

let totalFaqPages = 0;
let mismatchedFaqPages = 0;
const mismatches = [];

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(rootDir, file).replace(/\\/g, '/');

  // Check if page has FAQ JSON-LD schema
  const jsonLdMatch = content.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi);
  if (!jsonLdMatch) continue;

  let faqSchemaQuestions = [];
  for (const scriptTag of jsonLdMatch) {
    const jsonText = scriptTag.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '').trim();
    try {
      const parsed = JSON.parse(jsonText);
      
      const findFaqPage = (obj) => {
        if (!obj) return null;
        if (obj['@type'] === 'FAQPage' && Array.isArray(obj.mainEntity)) return obj;
        if (Array.isArray(obj['@graph'])) {
          return obj['@graph'].find(item => item['@type'] === 'FAQPage');
        }
        return null;
      };

      const faqObj = findFaqPage(parsed);
      if (faqObj && faqObj.mainEntity) {
        faqSchemaQuestions = faqObj.mainEntity.map(q => ({
          question: q.name.trim(),
          answer: q.acceptedAnswer.text.trim()
        }));
      }
    } catch (e) {
      // JSON parse error or non-FAQ schema
    }
  }

  if (faqSchemaQuestions.length === 0) continue;
  totalFaqPages++;

  // Extract visible FAQ items from .faq-accordion
  const faqItemMatches = [...content.matchAll(/<div\s+class=["']faq-item["'][^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi)];
  const visibleFaqQuestions = [];

  for (const item of faqItemMatches) {
    const itemHtml = item[1];
    const qMatch = itemHtml.match(/<button\s+class=["']faq-question["'][^>]*>[\s\S]*?<span>([\s\S]*?)<\/span>/i);
    const aMatch = itemHtml.match(/<div\s+class=["']faq-answer["'][^>]*>[\s\S]*?<p>([\s\S]*?)<\/p>/i);

    if (qMatch && aMatch) {
      const qText = qMatch[1].replace(/<[^>]+>/g, '').trim();
      const aText = aMatch[1].replace(/<[^>]+>/g, '').trim();
      visibleFaqQuestions.push({ question: qText, answer: aText });
    }
  }

  // Compare visible vs schema
  if (faqSchemaQuestions.length !== visibleFaqQuestions.length) {
    mismatchedFaqPages++;
    mismatches.push({
      file: relPath,
      reason: `Count mismatch: Schema has ${faqSchemaQuestions.length}, Visible has ${visibleFaqQuestions.length}`
    });
    continue;
  }

  let fileHasMismatch = false;
  for (let i = 0; i < faqSchemaQuestions.length; i++) {
    const sq = faqSchemaQuestions[i];
    const vq = visibleFaqQuestions[i];

    // Normalize spaces and quotes for comparison
    const norm = s => s.replace(/\s+/g, ' ').replace(/["']/g, '"').trim();

    if (norm(sq.question) !== norm(vq.question) || norm(sq.answer) !== norm(vq.answer)) {
      fileHasMismatch = true;
      mismatches.push({
        file: relPath,
        index: i,
        schemaQ: sq.question,
        visibleQ: vq.question,
        schemaA: sq.answer,
        visibleA: vq.answer
      });
      break;
    }
  }

  if (fileHasMismatch) {
    mismatchedFaqPages++;
  }
}

console.log(`\n=================== FAQ SCHEMA VERIFICATION RESULTS ===================`);
console.log(`Total FAQ pages verified: ${totalFaqPages}`);
console.log(`Mismatched FAQ pages: ${mismatchedFaqPages}`);

if (mismatches.length > 0) {
  console.log(`Mismatches list:`, JSON.stringify(mismatches, null, 2));
} else {
  console.log(`✅ CONFIRMED: All visible FAQ questions and answers match JSON-LD schemas 100%!`);
}
