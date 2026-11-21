(() => {
  const cfg = window.CREATIVITY_SITE || {};
  document.querySelectorAll('[data-link]').forEach((el) => {
    const key = el.getAttribute('data-link');
    const value = cfg[key];
    if (value && !value.includes('YOUR_')) el.href = value;
    else { el.href = '#'; el.classList.add('is-unconfigured'); el.setAttribute('aria-label', `${el.textContent.trim()} link needs configuration`); }
  });
  const appId = document.getElementById('application-id');
  if (appId) appId.textContent = cfg.applicationId && !cfg.applicationId.includes('YOUR_') ? cfg.applicationId : 'Add your application ID in site-config.js';
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '×' : '☰';
  });
})();
