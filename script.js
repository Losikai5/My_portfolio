/* ========== NAVBAR SCROLL + ACTIVE LINKS ========== */
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  // Navbar scrolled class
  navbar.classList.toggle('scrolled', window.scrollY > 20);

  // Active link highlighting
  let current = '';
  sections.forEach(sec => {
    const secTop = sec.offsetTop - 100;
    if (window.scrollY >= secTop) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
});

/* ========== HAMBURGER MENU ========== */
const hamburger = document.getElementById('hamburger');
const navLinksList = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinksList.classList.toggle('open');
});

// Close menu when a link is clicked
navLinksList.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinksList.classList.remove('open'));
});

/* ========== TYPED TEXT ANIMATION ========== */
const roles = [
  'Data Scientist 📊',
  'Machine Learning Engineer 🤖',
  'Data Analyst 🔍',
  'API Developer 🛠️',
  'Problem Solver 💡',
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typed-text');

function typeEffect() {
  const currentRole = roles[roleIndex];
  if (isDeleting) {
    typedEl.textContent = currentRole.substring(0, charIndex--);
  } else {
    typedEl.textContent = currentRole.substring(0, charIndex++);
  }

  let delay = isDeleting ? 50 : 90;

  if (!isDeleting && charIndex > currentRole.length) {
    delay = 1800; // pause at end
    isDeleting = true;
  } else if (isDeleting && charIndex < 0) {
    isDeleting = false;
    charIndex = 0;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 400;
  }
  setTimeout(typeEffect, delay);
}
typeEffect();

/* ========== SCROLL REVEAL ========== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Stagger children if multiple `.reveal` in same parent
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ========== CONTACT FORM (demo handler) ========== */
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  // Simulate async send (replace with actual fetch/EmailJS call)
  setTimeout(() => {
    formStatus.textContent = '✅ Message sent! I\'ll get back to you soon.';
    formStatus.style.color = '#06b6d4';
    formStatus.style.display = 'block';
    form.reset();
    btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
    btn.disabled = false;
  }, 1500);
});
