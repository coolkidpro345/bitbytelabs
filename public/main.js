document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  const formMessage = document.getElementById('formMessage');
  formMessage.textContent = 'Sending...';
  setTimeout(() => {
    formMessage.textContent = 'Thank you for contacting us! We will get back to you soon.';
    form.reset();
  }, 1200);
});
