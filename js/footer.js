/**
 * footer.js - Canonical Shared Footer Component for WB Schemes Portal
 * Single source of truth for website footer navigation.
 */
(function() {
  const CANONICAL_FOOTER_HTML = `<div class="container">
      <div class="footer-grid">
        <!-- Col 1: Brand & Short Tagline -->
        <div class="footer-col">
          <div class="footer-brand-title">
            <div class="footer-brand-emblem">WB</div>
            <span>WB Schemes Portal</span>
          </div>
          <p class="disclaimer-text"> Independent public information portal dedicated to raising awareness about Government of West Bengal welfare initiatives. </p>
        </div>
        <!-- Col 2: Explore -->
        <div class="footer-col">
          <h3>Explore</h3>
          <ul>
            <li><a href="/index.html" class="footer-link">Home</a></li>
            <li><a href="/schemes/index.html" class="footer-link">All Schemes List</a></li>
            <li><a href="/categories/index.html" class="footer-link">Scheme Categories</a></li>
          </ul>
        </div>
        <!-- Col 3: Quick Links -->
        <div class="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/schemes/lakshmir-bhandar/status-check/index.html" class="footer-link">Status Check Guides</a></li>
            <li><a href="/schemes/swasthya-sathi/card-download/index.html" class="footer-link">E-Card Downloads</a></li>
            <li><a href="/schemes/krishak-bandhu/apply-form/index.html" class="footer-link">Application Forms</a></li>
          </ul>
        </div>
        <!-- Col 4: Legal -->
        <div class="footer-col">
          <h3>Legal</h3>
          <ul>
            <li><a href="/about/index.html" class="footer-link">About Us</a></li>
            <li><a href="/contact/index.html" class="footer-link">Contact Us</a></li>
            <li><a href="/blog/index.html" class="footer-link">Blogs</a></li>
            <li><a href="/disclaimer/index.html" class="footer-link">Official Disclaimer</a></li>
            <li><a href="/privacy-policy/index.html" class="footer-link">Privacy Policy</a></li>
            <li><a href="https://wb.gov.in" class="footer-disclaimer-link" target="_blank" rel="noopener noreferrer">Official WB Portal &rarr;</a></li>
          </ul>
        </div>
      </div>
      <!-- Footer Bottom Bar -->
      <div class="footer-bottom">
        <p>&copy; 2026 WB Schemes Portal &middot; Independent public information guide. Not an official Government of West Bengal website.</p>
        <div class="footer-bottom-links">
          <a class="body-link" href="/disclaimer/index.html">Disclaimer</a>
          <a class="body-link" href="/privacy-policy/index.html">Privacy Policy</a>
        </div>
      </div>
    </div>`;

  function initFooter() {
    const footerEl = document.querySelector('footer.site-footer');
    if (footerEl) {
      footerEl.innerHTML = CANONICAL_FOOTER_HTML;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooter);
  } else {
    initFooter();
  }
})();
