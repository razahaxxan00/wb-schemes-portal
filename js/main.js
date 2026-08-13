// main.js - Interactive functionality & UI Enhancements for West Bengal Schemes Portal

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

  // 1. FAQ Accordion Functionality with SVG Chevron Rotation
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
      });

      if (!isOpen && answer) {
        answer.style.display = 'block';
        question.classList.add('active');
      }
    });
  });

  // 2. Interactive Eligibility Checker Widget Handler (Homepage)
  const findSchemesBtn = document.getElementById('find-schemes-btn');
  if (findSchemesBtn) {
    findSchemesBtn.addEventListener('click', () => {
      const category = document.getElementById('widget-category').value;
      if (category === 'farmer') {
        window.location.href = '/schemes/farmer-schemes/index.html';
      } else if (category === 'student') {
        window.location.href = '/schemes/student-schemes/index.html';
      } else if (category === 'women') {
        window.location.href = '/schemes/women-welfare/index.html';
      } else if (category === 'senior') {
        window.location.href = '/schemes/senior-citizen-schemes/index.html';
      } else if (category === 'pwd') {
        window.location.href = '/schemes/disability-schemes/index.html';
      } else if (category === 'minority') {
        window.location.href = '/schemes/minority-schemes/index.html';
      } else {
        window.location.href = '/schemes/index.html';
      }
    });
  }
});
