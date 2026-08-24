document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.site-nav-toggle').forEach((btn) => {
    const dropdown = btn.closest('.site-nav').querySelector('.site-nav-dropdown');
    if (!dropdown) return;

    const close = () => {
      btn.classList.remove('is-open');
      dropdown.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    };

    btn.addEventListener('click', () => {
      const open = !btn.classList.contains('is-open');
      btn.classList.toggle('is-open', open);
      dropdown.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', String(open));
    });

    dropdown.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
  });
});
