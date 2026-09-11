/**
 * header.js - Canonical Shared Header Component for WB Schemes Portal
 * Single source of truth for website header navigation.
 */
(function() {
  const CANONICAL_HEADER_HTML = `<div class="top-bar">
      <div class="container">
        <span>Independent Public Information Guide</span>
        <span>West Bengal Welfare Schemes Directory 2026</span>
      </div>
    </div>
    <div class="header-main">
      <div class="container">
        <a href="/index.html" class="brand-logo">
          <div class="emblem-placeholder">WB</div>
          <div class="brand-text">
            <span>West Bengal Schemes Portal</span>
            <p>Public Guide for State Welfare Initiatives</p>
          </div>
        </a>
        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle Navigation Menu">
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
        </button>
        <nav class="main-nav">
          <a href="/index.html" class="nav-home">Home</a>
          <a href="/schemes/index.html" class="nav-schemes">All Schemes</a>
          <div class="nav-dropdown">
            <button type="button" class="nav-dropdown-btn" aria-label="Toggle Categories Menu" aria-expanded="false">
              <span>Categories</span>
              <svg class="dropdown-arrow-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
            <div class="dropdown-menu">
              <a href="/schemes/social-welfare/index.html" class="dropdown-item">Social Welfare Schemes</a>
              <a href="/schemes/women-welfare/index.html" class="dropdown-item">Women Welfare Schemes</a>
              <a href="/schemes/farmer-schemes/index.html" class="dropdown-item">Farmer Schemes</a>
              <a href="/schemes/student-schemes/index.html" class="dropdown-item">Student Schemes</a>
              <a href="/schemes/scholarship-schemes/index.html" class="dropdown-item">Scholarship Schemes</a>
              <a href="/schemes/pension-schemes/index.html" class="dropdown-item">Pension Schemes</a>
              <a href="/schemes/housing-schemes/index.html" class="dropdown-item">Housing Schemes</a>
              <a href="/schemes/health-schemes/index.html" class="dropdown-item">Health Schemes</a>
              <a href="/schemes/employment-schemes/index.html" class="dropdown-item">Employment Schemes</a>
              <a href="/schemes/minority-schemes/index.html" class="dropdown-item">Minority Schemes</a>
              <a href="/schemes/disability-schemes/index.html" class="dropdown-item">Disability Schemes</a>
              <a href="/schemes/senior-citizen-schemes/index.html" class="dropdown-item">Senior Citizen Schemes</a>
              <a href="/schemes/child-welfare-schemes/index.html" class="dropdown-item">Child Welfare Schemes</a>
            </div>
          </div>
          <a href="/blog/index.html" class="nav-blog">Blogs</a>
          <a href="/about/index.html" class="nav-about">About Us</a>
        </nav>
      </div>
    </div>`;

  function initHeader() {
    const headerEl = document.querySelector('header.site-header');
    if (headerEl) {
      headerEl.innerHTML = CANONICAL_HEADER_HTML;

      // Highlight active nav item
      const path = window.location.pathname;
      const homeLink = headerEl.querySelector('.nav-home');
      const schemesLink = headerEl.querySelector('.nav-schemes');
      const categoriesBtn = headerEl.querySelector('.nav-dropdown-btn');
      const blogLink = headerEl.querySelector('.nav-blog');
      const aboutLink = headerEl.querySelector('.nav-about');

      if (homeLink) homeLink.className = 'body-link';
      if (schemesLink) schemesLink.className = 'body-link';
      if (categoriesBtn) categoriesBtn.className = 'nav-dropdown-btn';
      if (blogLink) blogLink.className = 'body-link';
      if (aboutLink) aboutLink.className = 'body-link';

      if (path === '/' || path === '/index.html') {
        if (homeLink) homeLink.className = 'active';
      } else if (path.startsWith('/blog')) {
        if (blogLink) blogLink.className = 'active';
      } else if (path.startsWith('/about')) {
        if (aboutLink) aboutLink.className = 'active';
      } else if (path.startsWith('/categories')) {
        if (categoriesBtn) categoriesBtn.className = 'nav-dropdown-btn active';
      } else if (path.startsWith('/schemes')) {
        if (schemesLink) schemesLink.className = 'active';
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeader);
  } else {
    initHeader();
  }
})();
