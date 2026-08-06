const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');
const aRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
let match;
while ((match = aRegex.exec(content)) !== null) {
  console.log(match[1]);
}
