const REVEAL_THRESHOLD = 0.15;

export function initReveal(selector = '[data-reveal]') {
  const targets = document.querySelectorAll(selector);

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: REVEAL_THRESHOLD }
  );

  targets.forEach((el) => observer.observe(el));
}
