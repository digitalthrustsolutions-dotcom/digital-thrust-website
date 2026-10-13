const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  }));
}
const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = `Digital Thrust enquiry — ${data.get('interest')}`;
    const body = [`Name: ${data.get('name')}`, `Work email: ${data.get('email')}`, `Interested in: ${data.get('interest')}`, '', 'Project goals:', data.get('message') || '(Not provided)'].join('\n');
    const mailto = `mailto:emmanuel@digitalthrustsolutions.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const status = document.querySelector('#form-status');
    if (status) status.textContent = 'Your email draft is ready. If it did not open, email emmanuel@digitalthrustsolutions.com or message +971 58 634 9721 on WhatsApp.';
    window.location.href = mailto;
  });
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
