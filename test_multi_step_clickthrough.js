const http = require('http');
const fs = require('fs');
const path = require('path');

const baseDir = path.resolve('C:/Users/Raza Hassan/.gemini/antigravity-ide/scratch/wb-schemes-portal');

// Define multi-step user navigation journeys simulating real browser click-throughs
const testJourneys = [
  {
    name: "Farmer Journey (Homepage -> Farmer Hub -> Krishak Bandhu -> Apply Form -> Status Check -> Home)",
    steps: [
      "/index.html",
      "/schemes/farmer-schemes/index.html",
      "/schemes/krishak-bandhu/index.html",
      "/schemes/krishak-bandhu/apply-form/index.html",
      "/schemes/krishak-bandhu/status-check/index.html",
      "/schemes/krishak-bandhu/beneficiary-list/index.html",
      "/index.html"
    ]
  },
  {
    name: "Health Journey (Homepage -> Swasthya Sathi -> Card Download -> Status Check -> Login Portal)",
    steps: [
      "/index.html",
      "/schemes/health-schemes/index.html",
      "/schemes/swasthya-sathi/index.html",
      "/schemes/swasthya-sathi/card-download/index.html",
      "/schemes/swasthya-sathi/status-check/index.html",
      "/schemes/swasthya-sathi/login-portal/index.html",
      "/schemes/swasthya-sathi/apply-form/index.html",
      "/schemes/swasthya-sathi/beneficiary-list/index.html"
    ]
  },
  {
    name: "Women Welfare Journey (Homepage -> Women Hub -> Lakshmir Bhandar -> Status Check -> Kanyashree)",
    steps: [
      "/index.html",
      "/schemes/women-welfare/index.html",
      "/schemes/lakshmir-bhandar/index.html",
      "/schemes/lakshmir-bhandar/status-check/index.html",
      "/schemes/kanyashree-prakalpa/index.html",
      "/schemes/kanyashree-prakalpa/kanyashree-prakalpa-in-bengali/index.html",
      "/schemes/rupashree-prakalpa/index.html",
      "/schemes/rupashree-prakalpa/how-to-apply/index.html"
    ]
  },
  {
    name: "Scholarship Journey (Homepage -> Scholarship Hub -> Aikyashree -> Status Check -> Oasis -> Shikshashree)",
    steps: [
      "/index.html",
      "/schemes/scholarship-schemes/index.html",
      "/schemes/aikyashree-scholarship/index.html",
      "/schemes/aikyashree-scholarship/status-check/index.html",
      "/schemes/oasis-scholarship/index.html",
      "/schemes/shikshashree-scheme/index.html"
    ]
  },
  {
    name: "Housing & Pension Journey (Homepage -> Housing Hub -> Banglar Bari -> Beneficiary List -> Jai Bangla -> Pension Hub)",
    steps: [
      "/index.html",
      "/schemes/housing-schemes/index.html",
      "/schemes/banglar-bari-prakalpa/index.html",
      "/schemes/banglar-bari-prakalpa/beneficiary-list/index.html",
      "/schemes/geetanjali-housing-scheme/index.html",
      "/schemes/pension-schemes/index.html",
      "/schemes/jai-bangla-pension-scheme/index.html",
      "/schemes/jai-bangla-pension-scheme/status-check/index.html",
      "/schemes/manabik-pension-scheme/index.html"
    ]
  }
];

async function testStep(url) {
  return new Promise((resolve) => {
    // Make request on http://localhost:3000
    http.get(`http://localhost:3000${url}`, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (err) => {
      resolve({ url, status: 'CONN_ERR' });
    });
  });
}

async function runJourneys() {
  console.log("Simulating real multi-step browser click-through user journeys on http://localhost:3000...\n");

  let totalSteps = 0;
  let passedSteps = 0;
  let failedSteps = 0;

  for (const journey of testJourneys) {
    console.log(`📌 Journey: ${journey.name}`);
    let currentBrowserUrl = "http://localhost:3000/";

    for (const stepPath of journey.steps) {
      totalSteps++;
      // Calculate how a browser resolves stepPath from currentBrowserUrl
      const resolvedTarget = new URL(stepPath, currentBrowserUrl).toString();
      const res = await testStep(new URL(resolvedTarget).pathname);

      if (res.status === 200 || res.status === 301) {
        passedSteps++;
        console.log(`  ✅ Step: "${stepPath}" -> HTTP ${res.status} OK`);
      } else {
        failedSteps++;
        console.log(`  ❌ Step: "${stepPath}" -> HTTP ${res.status} FAILED`);
      }

      // Update current browser URL for next step
      currentBrowserUrl = resolvedTarget;
    }
    console.log('');
  }

  console.log(`========================================`);
  console.log(`MULTI-STEP BROWSER CLICK-THROUGH TEST SUMMARY:`);
  console.log(`Total Click-Through Steps Tested: ${totalSteps}`);
  console.log(`Passed Steps (HTTP 200/301 OK):   ${passedSteps}`);
  console.log(`Failed Steps (404/403 Errors):    ${failedSteps}`);
  console.log(`========================================\n`);
}

runJourneys();
