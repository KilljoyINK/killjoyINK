/* ═══════════════════════════════════════════════════
   script.js  —  Portfolio / Art Direction Studio
   ═══════════════════════════════════════════════════ */

'use strict';

/* ─── Loading Screen ─────────────────────────────── */
(function initLoader() {
  const loader  = document.getElementById('loader');
  const bar     = document.querySelector('.loader-bar');
  const pct     = document.querySelector('.loader-pct');

  let progress = 0;
  const interval = setInterval(() => {
    // Accelerate to ~80 quickly, then slow
    const step = progress < 70 ? Math.random() * 8 + 3
               : progress < 90 ? Math.random() * 2 + 0.5
               : 0.3;
    progress = Math.min(progress + step, 99);
    bar.style.width = progress + '%';
    pct.textContent = Math.floor(progress) + '%';
  }, 60);

  function finish() {
    clearInterval(interval);
    bar.style.width = '100%';
    pct.textContent = '100%';
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.classList.add('loaded');
    }, 400);
  }

  // Fire when page resources ready
  if (document.readyState === 'complete') {
    setTimeout(finish, 600);
  } else {
    window.addEventListener('load', () => setTimeout(finish, 400));
  }
})();


/* ─── Dynamic Year in Footer ─────────────────────── */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


/* ─── Custom Cursor ──────────────────────────────── */
(function initCursor() {
  const cursor = document.querySelector('.cursor');
  if (!cursor) return;

  let mx = 0, my = 0;
  let cx = 0, cy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
  });

  // Smooth follow with lerp
  (function loop() {
    cx += (mx - cx) * 0.18;
    cy += (my - cy) * 0.18;
    cursor.style.left = cx + 'px';
    cursor.style.top  = cy + 'px';
    requestAnimationFrame(loop);
  })();

  // Expand on hoverable elements
  const hoverable = 'a, button, .project, [data-hover]';
  document.querySelectorAll(hoverable).forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
  });

  // Hide when leaving window
  document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { cursor.style.opacity = '1'; });
})();


/* ─── Header — Scroll State ──────────────────────── */
(function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
})();


/* ─── Intersection Observer — Scroll Reveals ─────── */
(function initReveal() {
  const targets = document.querySelectorAll('.project');
  if (!targets.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger by index within the visible batch
        const delay = (entry.target.dataset.revealDelay || 0) * 1;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  // Give each project a slight stagger offset within its row
  targets.forEach((el, i) => {
    el.dataset.revealDelay = (i % 3) * 100;
    obs.observe(el);
  });
})();


/* ─── Smooth Scroll for Nav Links ────────────────── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 56;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();


/* ─── Parallax on Hero Image ─────────────────────── */
(function initParallax() {
  const heroImg = document.querySelector('.hero-img');
  if (!heroImg) return;

  const onScroll = () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      heroImg.style.transform = `scale(1) translateY(${y * 0.25}px)`;
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
})();
