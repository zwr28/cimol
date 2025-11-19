// Efek fade-in saat discroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.15 });

document
  .querySelectorAll('.fade-section')
  .forEach(sec => observer.observe(sec));
