function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
  const scrollBtn = document.querySelector('.scroll-top');
  if (window.scrollY > 300) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});

function revealOnScroll() {
  const reveals = document.querySelectorAll('.scroll-reveal');

  for (const el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('revealed');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); 


