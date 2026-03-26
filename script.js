/* ============================================================
   iCoder — Shared JavaScript
   Author: Sumit Deshmukh
   ============================================================ */

// Sticky nav on scroll
(function () {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
})();

// Scroll reveal
(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.feature-card, .post-card, .tutorial-card, .blog-card, .contact-form-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
})();

// Skill bar animation
(function () {
  const bars = document.querySelectorAll('.skill-bar-fill');
  if (!bars.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const target = fill.style.width;
        fill.style.width = '0%';
        setTimeout(() => { fill.style.width = target; }, 100);
        observer.unobserve(fill);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(b => observer.observe(b));
})();
