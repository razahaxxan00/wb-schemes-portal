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
console.log(`Auditing visible text and links across ${htmlFiles.length} HTML files...`);

let visibleEmailCount = 0;
let visibleVercelCount = 0;
let visiblePhoneCount = 0;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(rootDir, file).replace(/\\/g, '/');

  // Strip script, style, head tags to test public visible body
  const bodyMatch = content.match(/<body[\s\S]*?<\/body>/i);
  if (bodyMatch) {
    const bodyText = bodyMatch[0].replace(/<script[\s\S]*?<\/script>/gi, '');
    
    // Check for email
    if (bodyText.includes('contact@') || bodyText.includes('support@') || bodyText.includes('mailto:')) {
      visibleEmailCount++;
      console.log(`Visible email found in body of ${relPath}`);
    }

    // Check for vercel.app in visible body text or visible link text (excluding canonical / og:url / schemas which are in <head>)
    if (bodyText.toLowerCase().includes('vercel')) {
      visibleVercelCount++;
      console.log(`Visible vercel text found in body of ${relPath}`);
    }

    // Check for 1800- phone number
    if (bodyText.includes('1800-')) {
      visiblePhoneCount++;
      console.log(`Visible 1800 phone found in body of ${relPath}`);
    }
  }
}

console.log(`\n=================== SCANNER SUMMARY ===================`);
console.log(`Visible Emails in Body: ${visibleEmailCount}`);
console.log(`Visible Vercel Text in Body: ${visibleVercelCount}`);
console.log(`Visible 1800 Phone Numbers in Body: ${visiblePhoneCount}`);
