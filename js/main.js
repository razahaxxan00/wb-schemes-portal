// main.js - Interactive functionality for West Bengal Schemes Portal

document.addEventListener('DOMContentLoaded', () => {
  // FAQ Accordion functionality
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isOpen = answer.style.display === 'block';

      // Close all other open answers
      document.querySelectorAll('.faq-answer').forEach(item => {
        item.style.display = 'none';
      });
      document.querySelectorAll('.faq-question').forEach(btn => {
        btn.classList.remove('active');
        const icon = btn.querySelector('.faq-icon');
        if (icon) icon.textContent = '+';
      });

      // Toggle current answer
      if (!isOpen) {
        answer.style.display = 'block';
        question.classList.add('active');
        const icon = question.querySelector('.faq-icon');
        if (icon) icon.textContent = '−';
      }
    });
  });

  // Homepage Live Search Filter
  const searchInput = document.getElementById('scheme-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const schemeCards = document.querySelectorAll('.scheme-searchable-item');

      schemeCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
});
