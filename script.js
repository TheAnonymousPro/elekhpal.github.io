const ctaBtn = document.querySelector('.cta-btn');

ctaBtn.addEventListener('click', e => {
  e.preventDefault();
  const section = document.querySelector('#services');
  section.scrollIntoView({ behavior: 'smooth' });
});
