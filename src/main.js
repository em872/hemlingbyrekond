import './style.css';

const modal = document.getElementById('booking-modal');
const closeBtn = document.getElementById('modal-close');
const allBookButtons = document.querySelectorAll('.js-book-btn');
const widgetMount = document.getElementById('bookd-widget-bd1f2c21');
const year = document.getElementById('year');
let widgetLoaded = false;

function mountWidget() {
  if (widgetLoaded || !widgetMount) return;
  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.bookd.se/book/bd1f2c21?embed=1';
  iframe.style.width = '100%';
  iframe.style.height = '750px';
  iframe.style.border = '1px solid #e5e7eb';
  iframe.style.borderRadius = '14px';
  iframe.style.overflow = 'hidden';
  iframe.loading = 'eager';
  iframe.setAttribute('fetchpriority', 'high');
  iframe.setAttribute('allow', 'fullscreen');
  widgetMount.appendChild(iframe);
  widgetLoaded = true;
}

function openModal() {
  if (!modal) return;
  mountWidget();
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

allBookButtons.forEach((btn) => {
  btn.addEventListener('click', openModal);
});

if (closeBtn) closeBtn.addEventListener('click', closeModal);

if (modal) {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal && modal.classList.contains('is-open')) {
    closeModal();
  }
});

if (year) year.textContent = new Date().getFullYear();
