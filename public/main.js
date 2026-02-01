// BitByteLabs - Inspired by GitHub.com

document.addEventListener('DOMContentLoaded', function() {
  // Example: Smooth scroll for anchor links (if needed)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
