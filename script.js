/* ─────────────────────────────────────────────────────────────────
   BINOD SHRESTHA PORTFOLIO — script.js
   ───────────────────────────────────────────────────────────────── */

/* ── HAMBURGER MENU ─────────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navList   = document.getElementById('nav-list');

hamburger.addEventListener('click', function () {
    navList.classList.toggle('open');
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

/* Close nav when any nav-link is clicked (mobile) */
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('open');
        const icon = hamburger.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

/* ── ACTIVE NAV LINK ON SCROLL ──────────────────────────────────── */
const sections = document.querySelectorAll('section[id], footer[id]');
const navLinks  = document.querySelectorAll('.nav-link');

function setActiveLink() {
    let current = '';
    const scrollY = window.scrollY;

    sections.forEach(sec => {
        const sectionTop = sec.offsetTop - 80;
        if (scrollY >= sectionTop) {
            current = sec.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveLink);
setActiveLink();
