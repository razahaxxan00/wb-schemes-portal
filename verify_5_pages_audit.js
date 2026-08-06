const fs = require('fs');

const pages = [
  'schemes/swasthya-sathi/index.html',
  'schemes/banglar-bari-prakalpa/index.html',
  'schemes/krishak-bandhu/index.html',
  'schemes/kanyashree-prakalpa/index.html',
  'schemes/aikyashree-scholarship/index.html'
];

console.log('=== VERIFYING 5 CHECKED PAGES FOR BODY LINKS & FAQS ===');

pages.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  const hasOfficialPortalLink = content.includes('class="body-link"') && (content.includes('Official Portal:') || content.includes('.gov.in') || content.includes('.org'));
  const hasFaqAccordion = content.includes('class="faq-item"') && content.includes('class="faq-question"') && content.includes('class="faq-icon"');
  const hasStepGuideLink = content.includes('class="body-link"') && content.includes('See full');
  
  console.log(`\nPAGE: ${p}`);
  console.log(`  - Official Portal / External Link (body-link): ${hasOfficialPortalLink ? '✅ CONFIRMED' : '❌ FAILED'}`);
  console.log(`  - FAQ Accordion (.faq-item, .faq-icon circle): ${hasFaqAccordion ? '✅ CONFIRMED' : '❌ FAILED'}`);
  console.log(`  - See Full Guide Inline Link (body-link): ${hasStepGuideLink ? '✅ CONFIRMED' : 'N/A'}`);
});
