const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const domain = 'https://wbschemes.in';

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

const results = {
  totalFiles: htmlFiles.length,
  canonicals: [],
  missingCanonicals: [],
  wrongDomainCanonicals: [],
  titlesAndDescs: [],
  duplicateTitles: [],
  duplicateDescs: [],
  h1Counts: [],
  h1Issues: [],
  wordCounts: [],
  jsonLdBlocks: [],
  externalLinks: [],
  internalLinkMap: {},
  crawlDepths: {},
  analyticsTags: []
};

// Map file relative path (e.g. index.html, schemes/index.html, schemes/lakshmir-bhandar/index.html)
const pageRelPaths = htmlFiles.map(fp => path.relative(rootDir, fp).replace(/\\/g, '/'));
const pageRelSet = new Set(pageRelPaths);

pageRelPaths.forEach(rel => {
  const filePath = path.join(rootDir, rel);
  const content = fs.readFileSync(filePath, 'utf8');

  // 1. Canonical check
  const canonicalMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/i);
  if (!canonicalMatch) {
    results.missingCanonicals.push(rel);
  } else {
    const href = canonicalMatch[1];
    if (!href.startsWith(domain)) {
      results.wrongDomainCanonicals.push({ rel, href });
    }
    results.canonicals.push({ rel, href });
  }

  // 2. Title & Meta Description
  const titleMatch = content.match(/<title>(.*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : 'MISSING TITLE';

  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
  const desc = descMatch ? descMatch[1].trim() : 'MISSING DESCRIPTION';

  results.titlesAndDescs.push({ rel, title, desc });

  // 3. H1 Count
  const h1Matches = content.match(/<h1[\s>]/gi);
  const h1Count = h1Matches ? h1Matches.length : 0;
  results.h1Counts.push({ rel, h1Count });
  if (h1Count !== 1) {
    results.h1Issues.push({ rel, h1Count });
  }

  // 4. Word Count
  const cleanBody = content
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const wordCount = cleanBody ? cleanBody.split(' ').length : 0;
  results.wordCounts.push({ rel, wordCount });

  // 5. JSON-LD Extraction
  const jsonLdRegex = /<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi;
  let jsonMatch;
  while ((jsonMatch = jsonLdRegex.exec(content)) !== null) {
    try {
      const parsed = JSON.parse(jsonMatch[1].trim());
      results.jsonLdBlocks.push({ rel, schema: parsed });
    } catch (e) {
      results.jsonLdBlocks.push({ rel, raw: jsonMatch[1].trim(), error: e.message });
    }
  }

  // 6. Links (Internal graph & External links)
  const aRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
  let aMatch;
  const outLinks = [];
  while ((aMatch = aRegex.exec(content)) !== null) {
    const fullTag = aMatch[0];
    const href = aMatch[1];

    if (href.startsWith('http://') || href.startsWith('https://')) {
      if (!href.includes('wbschemes.in')) {
        const hasNoopener = /rel=["'].*?noopener.*?["']/i.test(fullTag);
        const hasNofollow = /rel=["'].*?nofollow.*?["']/i.test(fullTag);
        results.externalLinks.push({ rel, href, fullTag, hasNoopener, hasNofollow });
      }
    } else if (!href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
      let cleanHref = href.split('#')[0];
      if (cleanHref) {
        let absPath;
        if (cleanHref.startsWith('/')) {
          absPath = path.join(rootDir, cleanHref);
        } else {
          absPath = path.resolve(path.dirname(filePath), cleanHref);
        }
        
        let targetRel = path.relative(rootDir, absPath).replace(/\\/g, '/');
        if (targetRel.endsWith('/')) targetRel += 'index.html';
        if (!targetRel.endsWith('.html')) {
          if (fs.existsSync(path.join(rootDir, targetRel, 'index.html'))) {
            targetRel = path.posix.join(targetRel, 'index.html');
          }
        }
        
        if (pageRelSet.has(targetRel)) {
          outLinks.push(targetRel);
        }
      }
    }
  }
  results.internalLinkMap[rel] = outLinks;

  // 7. Analytics & Verification tags
  const gaMatch = content.match(/G-[A-Z0-9]+/g);
  const gscMatch = content.match(/google-site-verification.*?content=["'](.*?)["']/i);
  const bingMatch = content.match(/msvalidate\.01.*?content=["'](.*?)["']/i);
  const clarityMatch = content.match(/clarity/i);

  results.analyticsTags.push({
    rel,
    ga: gaMatch ? gaMatch[0] : 'None / Placeholder',
    gsc: gscMatch ? gscMatch[1] : 'None / Placeholder',
    bing: bingMatch ? bingMatch[1] : 'None / Placeholder',
    clarity: clarityMatch ? 'Present (Placeholder/Script)' : 'None'
  });
});

// Check Duplicate Titles & Meta Descriptions
const titleMap = {};
const descMap = {};

results.titlesAndDescs.forEach(item => {
  if (titleMap[item.title]) {
    titleMap[item.title].push(item.rel);
  } else {
    titleMap[item.title] = [item.rel];
  }

  if (descMap[item.desc]) {
    descMap[item.desc].push(item.rel);
  } else {
    descMap[item.desc] = [item.rel];
  }
});

results.duplicateTitles = Object.keys(titleMap).filter(t => titleMap[t].length > 1).map(t => ({ title: t, files: titleMap[t] }));
results.duplicateDescs = Object.keys(descMap).filter(d => descMap[d].length > 1).map(d => ({ desc: d, files: descMap[d] }));

// BFS Crawl Depth starting at 'index.html'
const depths = { 'index.html': 0 };
const queue = ['index.html'];

while (queue.length > 0) {
  const current = queue.shift();
  const currDepth = depths[current];
  const neighbors = results.internalLinkMap[current] || [];

  neighbors.forEach(nxt => {
    if (depths[nxt] === undefined) {
      depths[nxt] = currDepth + 1;
      queue.push(nxt);
    }
  });
}

pageRelPaths.forEach(rel => {
  results.crawlDepths[rel] = depths[rel] !== undefined ? depths[rel] : 'ORPHAN / UNREACHABLE';
});

// Sort Word Counts Lowest to Highest
results.wordCounts.sort((a, b) => a.wordCount - b.wordCount);

fs.writeFileSync(path.join(rootDir, 'verification_evidence.json'), JSON.stringify(results, null, 2), 'utf8');
console.log('Deep audit verification data collected successfully!');
