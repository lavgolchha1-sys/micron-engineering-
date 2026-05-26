/* =========================================================
   Micron Engineering — Main JS
   - Mobile nav toggle
   - RFQ form: client-side validation + demo success state
   - Smooth in-page anchor with header offset
   ========================================================= */

(function () {
  'use strict';

  /* ---------- Mobile nav toggle ---------- */
  const header = document.getElementById('header') || document.querySelector('.site-header');
  const toggle = document.getElementById('navToggle');
  if (header && toggle) {
    toggle.addEventListener('click', () => {
      const isOpen = header.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // Close menu on nav-link click
    header.querySelectorAll('.nav-links a').forEach((a) => {
      a.addEventListener('click', () => {
        header.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- RFQ form ---------- */
  const form = document.getElementById('rfqForm');
  if (form) {
    const success = document.getElementById('formSuccess');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // Demo behavior — replace with real endpoint integration.
      // Recommended options for backend:
      //   - Formspree (https://formspree.io)
      //   - Web3Forms (https://web3forms.com)
      //   - Netlify Forms (if hosting on Netlify)
      //   - Custom PHP / Node endpoint that emails sales@micronengineeringindustries.in
      const data = Object.fromEntries(new FormData(form).entries());
      console.log('RFQ submission (demo):', data);

      if (success) {
        success.classList.add('is-visible');
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
    });
  }

  /* ---------- Header shadow on scroll ---------- */
  if (header) {
    let ticking = false;
    const onScroll = () => {
      if (window.scrollY > 8) {
        header.style.boxShadow = '0 6px 24px -12px rgba(0,0,0,0.18)';
      } else {
        header.style.boxShadow = 'none';
      }
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });
  }

  /* ---------- Year in footer (graceful, no-op if absent) ---------- */
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();
