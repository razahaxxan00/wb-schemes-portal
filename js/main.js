// main.js - Ultra-Fast, Non-Blocking UI Interactive Logic

(function() {
  function initUI() {
    // Mobile Hamburger Menu
    var mobileMenuBtn = document.getElementById('mobileMenuBtn');
    var mainNav = document.querySelector('.main-nav');

    if (mobileMenuBtn && mainNav) {
      mobileMenuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        mainNav.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
      });
    }

    // Categories Dropdown
    var dropdownBtns = document.querySelectorAll('.nav-dropdown-btn, .dropdown-toggle-btn');
    dropdownBtns.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        var parentDropdown = btn.closest('.nav-dropdown');
        if (parentDropdown) {
          var isOpen = parentDropdown.classList.toggle('open');
          btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        }
      });
    });

    // Single Delegated Document Click Handler for Outside Clicks
    document.addEventListener('click', function(e) {
      if (mainNav && mobileMenuBtn && !mobileMenuBtn.contains(e.target) && !mainNav.contains(e.target)) {
        mainNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
      }

      document.querySelectorAll('.nav-dropdown.open').forEach(function(dropdown) {
        if (!dropdown.contains(e.target)) {
          dropdown.classList.remove('open');
          var btn = dropdown.querySelector('.nav-dropdown-btn, .dropdown-toggle-btn');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      });
    }, { passive: true });

    // FAQ Accordion
    var faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(function(question) {
      question.addEventListener('click', function() {
        var answer = question.nextElementSibling;
        var isOpen = answer && answer.style.display === 'block';

        document.querySelectorAll('.faq-answer').forEach(function(item) {
          item.style.display = 'none';
        });
        document.querySelectorAll('.faq-question').forEach(function(btn) {
          btn.classList.remove('active');
        });

        if (!isOpen && answer) {
          answer.style.display = 'block';
          question.classList.add('active');
        }
      });
    });

    // Eligibility Checker Widget
    var findSchemesBtn = document.getElementById('find-schemes-btn');
    if (findSchemesBtn) {
      findSchemesBtn.addEventListener('click', function() {
        var categoryEl = document.getElementById('widget-category');
        var category = categoryEl ? categoryEl.value : '';
        var routes = {
          farmer: '/schemes/farmer-schemes/index.html',
          student: '/schemes/student-schemes/index.html',
          women: '/schemes/women-welfare/index.html',
          senior: '/schemes/senior-citizen-schemes/index.html',
          pwd: '/schemes/disability-schemes/index.html',
          minority: '/schemes/minority-schemes/index.html'
        };
        window.location.href = routes[category] || '/schemes/index.html';
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUI);
  } else {
    initUI();
  }
})();
