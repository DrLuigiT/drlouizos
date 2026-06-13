// Reveal cards and sections as they scroll into view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Stagger the smart-button cards slightly for a nicer cascade
document.querySelectorAll(".card-grid .reveal").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 70}ms`;
});

// Current year in the footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
