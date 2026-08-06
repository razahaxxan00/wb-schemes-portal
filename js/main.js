// main.js - Interactive functionality & SEO Enhancements for West Bengal Schemes Portal

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Hamburger Menu Handler
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.querySelector('.main-nav');

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mainNav.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenuBtn.contains(e.target) && !mainNav.contains(e.target)) {
        mainNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
      }
    });
  }
  
  // 1. FAQ Accordion Functionality
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isOpen = answer && answer.style.display === 'block';

      document.querySelectorAll('.faq-answer').forEach(item => {
        item.style.display = 'none';
      });
      document.querySelectorAll('.faq-question').forEach(btn => {
        btn.classList.remove('active');
        const icon = btn.querySelector('.faq-icon');
        if (icon) icon.textContent = '+';
      });

      if (!isOpen && answer) {
        answer.style.display = 'block';
        question.classList.add('active');
        const icon = question.querySelector('.faq-icon');
        if (icon) icon.textContent = '−';
      }
    });
  });

  // 2. Table of Contents (TOC) Generator for Long Form Articles
  const article = document.querySelector('.article-body');
  if (article && !article.classList.contains('no-toc')) {
    const textLength = article.textContent.trim().split(/\s+/).length;
    const headings = article.querySelectorAll('h2');
    
    // Generate TOC if article is > 1000 words or contains 3+ H2 headings
    if ((textLength > 1000 || headings.length >= 3) && !document.querySelector('.toc-box')) {
      const tocContainer = document.createElement('nav');
      tocContainer.className = 'toc-box';
      tocContainer.setAttribute('aria-label', 'Table of Contents');

      const tocTitle = document.createElement('div');
      tocTitle.className = 'toc-title';
      tocTitle.innerHTML = '📋 Table of Contents';
      tocContainer.appendChild(tocTitle);

      const tocList = document.createElement('ul');
      tocList.className = 'toc-list';

      headings.forEach((heading, idx) => {
        if (!heading.id) {
          heading.id = `section-${idx + 1}`;
        }
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${heading.id}`;
        a.className = 'toc-link';
        a.className = 'toc-link';
        a.textContent = `${idx + 1}. ${heading.textContent.replace(/^[\d.\s]+/, '')}`;
        li.appendChild(a);
        tocList.appendChild(li);
      });

      tocContainer.appendChild(tocList);

      // Insert TOC after intro paragraph or first H2
      const firstParagraph = article.querySelector('p.intro-text') || article.querySelector('p');
      if (firstParagraph && firstParagraph.nextSibling) {
        article.insertBefore(tocContainer, firstParagraph.nextSibling);
      } else {
        article.insertBefore(tocContainer, headings[0]);
      }
    }
  }

  // 3. Homepage Live Search Filter (Filters both category cards & scheme cards)
  const searchInput = document.getElementById('scheme-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const searchableCards = document.querySelectorAll('.scheme-searchable-item, .category-card');

      searchableCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // 4. Contact Form Anti-Spam & Submission Handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const captchaAns = document.getElementById('captchaAnswer').value.trim();
      const feedback = document.getElementById('formFeedback');
      
      if (captchaAns !== '8') {
        feedback.style.display = 'block';
        feedback.style.background = '#fef2f2';
        feedback.style.color = '#991b1b';
        feedback.style.border = '1px solid #fca5a5';
        feedback.textContent = '❌ Security verification failed. Please check 5 + 3 answer.';
        return;
      }

      feedback.style.display = 'block';
      feedback.style.background = '#f0fdf4';
      feedback.style.color = '#166534';
      feedback.style.border = '1px solid #86efac';
      feedback.textContent = '✅ Thank you! Your message has been sent to our editorial desk. We will get back to you shortly.';
      contactForm.reset();
    });
  }

  // 5. Redesigned Cookie Consent Banner
  if (!localStorage.getItem('cookieConsentGiven')) {
    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.innerHTML = `
      <div class="cookie-banner-content">
        <span>🍪 We use essential cookies to optimize user experience and analyze site traffic. Read our <a href="/privacy-policy/index.html" class="cookie-policy-link">Privacy Policy</a>.</span>
        <button id="acceptCookieBtn" class="cookie-accept-btn">Accept & Close</button>
      </div>
    `;
    document.body.appendChild(banner);

    document.getElementById('acceptCookieBtn').addEventListener('click', () => {
      localStorage.setItem('cookieConsentGiven', 'true');
      banner.remove();
    });
  }
});
