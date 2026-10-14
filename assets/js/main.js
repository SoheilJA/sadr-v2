/**
 * main.js — Khavar Sadra site core.
 *
 * Loaded as a regular <script> (not module) on every page. Handles:
 *   - Preloader
 *   - Header (sticky shrink, mobile menu, mega menu)
 *   - Footer dynamic injection
 *   - Mobile CTA bar + floating desktop CTA
 *   - Announcement bar (online/offline by working hours)
 *   - ScrollTrigger reveals (GSAP)
 *   - anime.js counters
 *   - Dynamic data loading (products, posts) with file:// fallback
 *   - Products list: search, filter, sort, render
 *   - Single product page rendering
 *   - Blog list + pagination
 *   - Single post: TOC, reading progress, share, related
 *   - Forms (quick / contact) -> WhatsApp redirect + validation
 *   - FAQ accordion
 *   - JSON-LD schema injection
 *   - Page-specific dispatchers via body[data-page]
 *
 * Dependencies (loaded by each page):
 *   - assets/js/config.js
 *   - assets/js/i18n.js
 *   - GSAP + ScrollTrigger (CDN)
 *   - anime.js (CDN)
 *   - assets/css/custom.css
 *
 * Page-specific page dispatchers (services, 404 quiz etc.) are at the bottom.
 */
(function () {
  'use strict';

  // ── Globals ──────────────────────────────────────────────────────────
  const CONFIG = window.PPKS_CONFIG;
  const i18n = window.PPKS_i18n;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Compute site root URL from this script's src so that data/asset paths
  // resolve correctly from any subfolder (e.g. /services/supply.html).
  // Falls back to '' if currentScript not available (e.g. older browsers).
  const _SCRIPT_SRC = (document.currentScript && document.currentScript.src) || '';
  const SITE_BASE = _SCRIPT_SRC
    ? _SCRIPT_SRC.replace(/\/assets\/js\/[^/]+$/, '')
    : '';  // '' means document-relative (root pages)
  const DATA_URL = (file) => SITE_BASE + '/assets/data/' + file;

  // ── Small DOM helpers ────────────────────────────────────────────────
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const el = (tag, attrs, children) => {
    const e = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      if (k === 'class') e.className = attrs[k];
      else if (k === 'html') e.innerHTML = attrs[k];
      else if (k.startsWith('data-') || k === 'for' || k === 'id' || k === 'role' || k === 'aria-*') e.setAttribute(k, attrs[k]);
      else if (k === 'dataset') for (const d in attrs.dataset) e.dataset[d] = attrs.dataset[d];
      else e.setAttribute(k, attrs[k]);
    }
    if (children) {
      (Array.isArray(children) ? children : [children]).forEach((c) => {
        if (c == null) return;
        e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
      });
    }
    return e;
  };

  // Convert latin digits to Persian
  const faDigits = (s) => i18n ? i18n.toFaDigits(s) : String(s);

  // Translate helper (used inside dynamic HTML)
  const t = (key, vars) => (i18n ? i18n.t(key, vars) : key);

  // Current language
  const lang = () => (i18n ? i18n.current : (CONFIG.site.defaultLang || 'fa'));
  const isFa = () => lang() === 'fa';
  const L = () => lang(); // short alias for inline data access (e.g. product.name[L()])

  // ── Icon library (inline SVG strings) ────────────────────────────────
  // Lucide-style line icons. Each returns an <svg> string.
  const ICONS = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.74-.86-2-.95-.27-.1-.46-.15-.66.15-.2.3-.76.95-.93 1.14-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.18-.24-.58-.48-.5-.66-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.74-.71 1.99-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35z"/><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C16.18 3.03 13.69 2 12.04 2zm0 18.13c-1.53 0-3.04-.41-4.35-1.18l-.31-.18-3.22.85.86-3.14-.2-.32a8.2 8.2 0 0 1-1.26-4.35c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.23 8.23z" fill="currentColor"/></svg>',
    telegram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.94 4.55L18.6 19.06c-.25 1.11-.91 1.39-1.84.86l-5.08-3.75-2.45 2.36c-.27.27-.5.5-1 .5l.36-5.16L17.92 6.4c.41-.36-.09-.57-.63-.21L6.36 13.21l-5-1.56c-1.09-.34-1.11-1.09.23-1.61l19.55-7.53c.91-.33 1.7.21 1.4 1.56z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    arrow_right: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
    arrow_left: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>',
    chevron_down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
    chevron_right: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
    flask: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6M10 3v6.5L4 19a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-6-9.5V3"/></svg>',
    truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M14 9h4l4 4v4a1 1 0 0 1-1 1h-1"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    map_pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>',
    package: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16.5 9.4 7.5 4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg>',
    award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/></svg>',
    settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',
    microscope: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18h8M3 22h18M14 22a7 7 0 1 0 0-14h-1M9 14h2"/><path d="M9 12a4 4 0 0 1 4-4V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v3a4 4 0 0 1 4 4z"/></svg>',
    sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>',
    factory: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/><path d="M17 18h1M12 18h1M7 18h1"/></svg>',
    droplet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>',
    share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>',
    copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  };

  // ────────────────────────────────────────────────────────────────────
  // 1. PRELOADER
  // ────────────────────────────────────────────────────────────────────
  function initPreloader() {
    const pre = $('#preloader');
    if (!pre) return;

    // Only show once per session
    let shown = false;
    try { shown = sessionStorage.getItem('ppks-preloader-shown') === '1'; } catch (e) {}
    if (shown || reducedMotion) {
      pre.remove();
      return;
    }

    // SVG molecule animation with anime.js
    const mol = $('.mol', pre);
    if (mol && window.anime) {
      try {
        window.anime.timeline({ loop: false })
          .add({
            targets: mol.querySelectorAll('circle'),
            scale: [0, 1],
            opacity: [0, 1],
            delay: window.anime.stagger(80),
            duration: 500,
            easing: 'easeOutBack',
          })
          .add({
            targets: mol.querySelectorAll('line'),
            opacity: [0, 1],
            duration: 400,
            easing: 'easeOutQuad',
          });
      } catch (e) {}
    }

    // Progress bar
    const bar = $('.progress-bar > span', pre);
    const prog = $('.progress', pre);
    let pct = 0;
    const tick = setInterval(() => {
      pct += Math.max(2, Math.random() * 10);
      if (pct >= 100) { pct = 100; clearInterval(tick); finish(); }
      if (bar) bar.style.width = pct + '%';
      if (prog) prog.textContent = Math.floor(pct) + '%';
    }, 110);

    function finish() {
      setTimeout(() => {
        pre.classList.add('is-done');
        try { sessionStorage.setItem('ppks-preloader-shown', '1'); } catch (e) {}
        setTimeout(() => pre.remove(), 900);
      }, 200);
    }

    // Fallback: finish after 2 seconds regardless
    setTimeout(() => { if (!pre.classList.contains('is-done')) { clearInterval(tick); finish(); } }, 2000);
    // Or finish when window.load fires
    window.addEventListener('load', () => {
      setTimeout(() => { if (!pre.classList.contains('is-done')) { clearInterval(tick); finish(); } }, 300);
    });
  }

  // ────────────────────────────────────────────────────────────────────
  // 2. HEADER (sticky shrink + mobile menu + mega menu)
  // ────────────────────────────────────────────────────────────────────
  function initHeader() {
    const header = $('.site-header');
    if (!header) return;

    // Shrink on scroll
    const onScroll = () => {
      if (window.scrollY > 12) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Mobile menu open/close
    const menu = $('#mobile-menu');
    const openBtn = $('[data-open-mobile]', header);
    const closeBtns = $$('[data-close-mobile]', menu || document);
    if (openBtn && menu) {
      openBtn.addEventListener('click', () => {
        menu.classList.add('is-open');
        document.body.style.overflow = 'hidden';
        openBtn.setAttribute('aria-expanded', 'true');
      });
      closeBtns.forEach((b) => b.addEventListener('click', () => {
        menu.classList.remove('is-open');
        document.body.style.overflow = '';
        openBtn.setAttribute('aria-expanded', 'false');
      }));
      // Close on Escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('is-open')) {
          menu.classList.remove('is-open');
          document.body.style.overflow = '';
          openBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // Mega menu (desktop hover/focus) — also keyboard accessible
    $$('.nav-item-mega').forEach((item) => {
      const trigger = $('.nav-link', item);
      const menu2 = $('.mega-menu', item);
      if (!trigger || !menu2) return;
      let hoverTimeout = null;

      item.addEventListener('mouseenter', () => {
        clearTimeout(hoverTimeout);
        menu2.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      });
      item.addEventListener('mouseleave', () => {
        hoverTimeout = setTimeout(() => {
          menu2.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
        }, 150);
      });
      trigger.addEventListener('focus', () => {
        menu2.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      });
      trigger.addEventListener('click', (e) => {
        // On narrow screens, the mobile menu handles this. On desktop, treat as toggle.
        if (window.innerWidth >= 1024) {
          e.preventDefault();
          menu2.classList.toggle('is-open');
        }
      });
      // Close on Escape
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          menu2.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
          trigger.focus();
        }
      });
    });

    // Mobile accordion for services
    $$('.mobile-accordion-item').forEach((item) => {
      const btn = $('button', item);
      if (!btn) return;
      btn.addEventListener('click', () => {
        item.classList.toggle('is-open');
        const expanded = item.classList.contains('is-open');
        btn.setAttribute('aria-expanded', String(expanded));
      });
    });

    // Update phone number / language switcher in header from config
    updateHeaderContact();
  }

  function updateHeaderContact() {
    const cfg = CONFIG.contact;
    // Phone links
    $$('[data-phone]').forEach((node) => {
      node.setAttribute('href', 'tel:' + cfg.phone1_tel);
    });
    $$('[data-phone-text]').forEach((node) => {
      node.textContent = isFa() ? cfg.phone1_fa : cfg.phone1_en;
    });

    // WhatsApp deep links (with optional pre-filled message via data-wa-msg key)
    $$('[data-wa]').forEach((node) => {
      const msgKey = node.getAttribute('data-wa-msg');
      const msg = msgKey ? t(msgKey) : (i18n ? t('whatsapp.greeting') : '');
      node.setAttribute('href', CONFIG.whatsappLink(msg));
    });

    // Telegram
    $$('[data-tg]').forEach((node) => {
      node.setAttribute('href', CONFIG.telegramLink());
    });

    // Email
    $$('[data-mail]').forEach((node) => {
      const addr = node.getAttribute('data-mail') || cfg.email;
      node.setAttribute('href', 'mailto:' + addr);
      if (!node.textContent.trim()) node.textContent = addr;
    });

    // Catalog downloads
    $$('[data-download-catalog]').forEach((node) => {
      node.setAttribute('href', isFa() ? CONFIG.downloads.catalogFa : CONFIG.downloads.catalogEn);
    });
  }

  // ────────────────────────────────────────────────────────────────────
  // 3. FOOTER dynamic content (contact info, links)
  // ────────────────────────────────────────────────────────────────────
  function initFooter() {
    const cfg = CONFIG.contact;
    $$('[data-f-footer-address]').forEach((n) => n.textContent = isFa() ? cfg.address_fa : cfg.address_en);
    $$('[data-f-footer-hours]').forEach((n) => n.textContent = isFa() ? cfg.hours_fa : cfg.hours_en);
    $$('[data-f-footer-email]').forEach((n) => n.textContent = cfg.email);
    $$('[data-f-footer-phone]').forEach((n) => n.textContent = isFa() ? cfg.phone1_fa : cfg.phone1_en);

    // Registration / national id
    $$('[data-f-reg-no]').forEach((n) => n.textContent = (isFa() ? 'شماره ثبت: ' : 'Registration No: ') + CONFIG.brand.registrationNo);
    $$('[data-f-nat-id]').forEach((n) => n.textContent = (isFa() ? 'شناسه ملی: ' : 'National ID: ') + CONFIG.brand.nationalId);
  }

  // ────────────────────────────────────────────────────────────────────
  // 4. Announcement bar (online/offline by working hours)
  // ────────────────────────────────────────────────────────────────────
  function initAnnounceBar() {
    const bar = $('[data-announce-status]');
    if (!bar) return;
    // Iranian working hours: Sat-Wed 8:30-17:00, Thu 8:30-13:00, Fri closed.
    // Tehran time = UTC+3:30
    const now = new Date();
    // Convert to Tehran time (approx, ignoring DST variations)
    const tehranOffset = 3.5 * 60; // minutes
    const localOffset = -now.getTimezoneOffset();
    const tehranMs = now.getTime() + (tehranOffset - localOffset) * 60 * 1000;
    const tDate = new Date(tehranMs);
    const day = tDate.getDay(); // 0=Sun ... 6=Sat
    const hours = tDate.getHours() + tDate.getMinutes() / 60;

    // Iranian week: Sat=6, Sun=0, Mon=1, Tue=2, Wed=3, Thu=4, Fri=5
    let online = false;
    if (day === 5) online = false; // Friday
    else if (day === 4) online = hours >= 8.5 && hours < 13; // Thursday
    else online = hours >= 8.5 && hours < 17; // Sat-Wed

    bar.classList.toggle('online', online);
    bar.classList.toggle('offline', !online);
    bar.setAttribute('data-status', online ? 'online' : 'offline');

    const dot = $('.dot', bar);
    if (dot) dot.classList.toggle('online', online), dot.classList.toggle('offline', !online);

    const text = $('[data-announce-status-text]', bar);
    if (text) text.textContent = t(online ? 'announce.working_now' : 'announce.closed');
  }

  // ────────────────────────────────────────────────────────────────────
  // 5. SCROLL REVEAL (GSAP ScrollTrigger)
  // ────────────────────────────────────────────────────────────────────
  function initReveal() {
    if (reducedMotion) {
      $$('[data-reveal]').forEach((e) => e.classList.add('is-revealed'));
      return;
    }
    if (!window.gsap || !window.ScrollTrigger) {
      // Fallback: just reveal with IntersectionObserver
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('is-revealed'); obs.unobserve(e.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
      $$('[data-reveal]').forEach((e) => obs.observe(e));
      return;
    }
    try {
      window.gsap.registerPlugin(window.ScrollTrigger);
      $$('[data-reveal]').forEach((e) => {
        const delay = parseFloat(e.getAttribute('data-reveal-delay') || '0');
        const y = e.getAttribute('data-reveal-y') || 28;
        window.gsap.fromTo(e,
          { opacity: 0, y: y },
          {
            opacity: 1, y: 0, duration: .75, delay, ease: 'power2.out',
            scrollTrigger: { trigger: e, start: 'top 88%', toggleActions: 'play none none none' }
          });
      });
    } catch (e) {
      console.warn('GSAP reveal failed', e);
    }
  }

  // ────────────────────────────────────────────────────────────────────
  // 6. COUNTERS (anime.js)
  // ────────────────────────────────────────────────────────────────────
  function initCounters() {
    const counters = $$('[data-counter]');
    if (!counters.length) return;

    const run = (node) => {
      const target = parseFloat(node.getAttribute('data-counter'));
      const dur = 1800;
      const start = performance.now();
      const isFloat = target % 1 !== 0;
      const tick = (now) => {
        const p = Math.min(1, (now - start) / dur);
        const ease = 1 - Math.pow(1 - p, 3); // cubic out
        const v = target * ease;
        const text = isFloat ? v.toFixed(1) : Math.round(v).toString();
        node.textContent = isFa() ? faDigits(text) : text;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (reducedMotion || !window.IntersectionObserver) {
      counters.forEach((c) => {
        const v = c.getAttribute('data-counter');
        c.textContent = isFa() ? faDigits(v) : v;
      });
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { run(e.target); obs.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach((c) => obs.observe(c));
  }

  // ────────────────────────────────────────────────────────────────────
  // 7. MOBILE BOTTOM BAR + FLOATING DESKTOP CTA
  // ────────────────────────────────────────────────────────────────────
  function initFloatingCTA() {
    const f = $('#floating-cta');
    if (!f) return;
    const fab = $('.fab', f);
    if (fab) fab.addEventListener('click', () => f.classList.toggle('is-open'));
    document.addEventListener('click', (e) => {
      if (!f.contains(e.target)) f.classList.remove('is-open');
    });
  }

  // ────────────────────────────────────────────────────────────────────
  // 8. DATA LOADERS (products, posts) with file:// fallback
  // ────────────────────────────────────────────────────────────────────
  async function loadJSON(path, fallbackKey) {
    // Embedded fallback first (for file://)
    if (window.__PPKS_DATA_FALLBACK__ && window.__PPKS_DATA_FALLBACK__[fallbackKey]) {
      return window.__PPKS_DATA_FALLBACK__[fallbackKey];
    }
    try {
      const res = await fetch(path, { cache: 'no-cache' });
      if (!res.ok) throw new Error('http ' + res.status);
      return await res.json();
    } catch (e) {
      // Try dynamic import of fallback module
      try {
        const mod = await import('./data-fallback.js');
        if (mod && mod[fallbackKey]) return mod[fallbackKey];
      } catch (e2) {}
      console.warn(`[data] Failed to load ${path} and no fallback available.`);
      return [];
    }
  }
  const loadProducts = () => loadJSON(DATA_URL('products.json'), 'products');
  const loadPosts = () => loadJSON(DATA_URL('posts.json'), 'posts');

  // ────────────────────────────────────────────────────────────────────
  // 9. PRODUCT CARD HTML
  // ────────────────────────────────────────────────────────────────────
  function productCardHTML(p) {
    const name = isFa() ? p.name_fa : p.name_en;
    const short = isFa() ? p.short_fa : p.short_en;
    const categoryLabel = t('category.' + p.category);
    const formulaClass = isFa() ? 'formula-chip formula-chip-fa' : 'formula-chip';
    const orderMsg = t('product_page.order_msg', { name, url: location.origin + location.pathname.replace(/[^/]*$/, '') + 'product.html?slug=' + p.slug });
    const waLink = CONFIG.whatsappLink(orderMsg);
    return `
      <article class="card card-hover product-card" data-reveal>
        <a href="product.html?slug=${p.slug}" class="thumb block" aria-label="${name}">
          <img src="${p.image}" alt="${name}" loading="lazy" width="600" height="450">
          <span class="${formulaClass}">${p.formula}</span>
        </a>
        <div class="card-body" style="display:flex;flex-direction:column;flex:1;gap:8px">
          <div class="flex items-center justify-between gap-2">
            <span class="chip chip-teal">${categoryLabel}</span>
            <span class="text-xs text-slate-400 font-mono">CAS: ${p.cas}</span>
          </div>
          <h3 class="text-lg font-bold text-navy-800">${name}</h3>
          <p class="text-sm text-slate-600 leading-relaxed">${short}</p>
          <div class="mt-auto flex gap-2 pt-3">
            <a href="product.html?slug=${p.slug}" class="btn btn-outline btn-sm flex-1" data-cta="product-details">${t('cta.view_details')}</a>
            <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm flex-1" data-cta="whatsapp-product-card" aria-label="${t('cta.order')}">
              ${ICONS.whatsapp}<span>${t('cta.order')}</span>
            </a>
          </div>
        </div>
      </article>`;
  }

  // ────────────────────────────────────────────────────────────────────
  // 10. HOME PAGE — featured products + latest posts + counters + quick form
  // ────────────────────────────────────────────────────────────────────
  async function initHome() {
    // Featured products
    const featGrid = $('[data-featured-products]');
    if (featGrid) {
      const products = await loadProducts();
      const featured = products.filter((p) => p.featured).slice(0, 6);
      const list = featured.length ? featured : products.slice(0, 6);
      featGrid.innerHTML = list.map(productCardHTML).join('');
      // re-run reveal on the freshly injected nodes
      initReveal();
      featGrid.classList.remove('opacity-0');
    }

    // Latest posts
    const latestGrid = $('[data-latest-posts]');
    if (latestGrid) {
      const posts = await loadPosts();
      const sorted = posts.slice().sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
      latestGrid.innerHTML = sorted.map(postCardHTML).join('');
      initReveal();
    }

    // Process timeline (GSAP)
    initProcessTimeline();

    // Quick form -> WhatsApp
    initQuickForm();

    // Hero 3D
    initHero3D();
  }

  function postCardHTML(p) {
    const title = isFa() ? p.title_fa : p.title_en;
    const excerpt = isFa() ? p.excerpt_fa : p.excerpt_en;
    const author = isFa() ? p.author : (p.author_en || p.author);
    const date = formatDate(p.date);
    const cat = postCategoryLabel(p.category);
    return `
      <article class="card card-hover overflow-hidden" data-reveal>
        <a href="post.html?slug=${p.slug}" class="block aspect-[16/9] overflow-hidden bg-slate-100">
          <img src="${p.image}" alt="${title}" loading="lazy" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105">
        </a>
        <div class="card-body" style="display:flex;flex-direction:column;gap:10px">
          <div class="flex items-center gap-2">
            <span class="chip chip-teal">${cat}</span>
            <span class="text-xs text-slate-400">${date} • ${p.readingTime} ${t('post_page.read_time')}</span>
          </div>
          <h3 class="text-lg font-bold text-navy-800 leading-snug">${title}</h3>
          <p class="text-sm text-slate-600 leading-relaxed line-clamp-3">${excerpt}</p>
          <a href="post.html?slug=${p.slug}" class="inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:text-navy-800 mt-2">
            ${t('cta.read_more')}
            ${isFa() ? ICONS.arrow_left : ICONS.arrow_right}
          </a>
        </div>
      </article>`;
  }

  function postCategoryLabel(cat) {
    const map = {
      detergents: isFa() ? 'شوینده' : 'Detergents',
      polymers: isFa() ? 'پلیمر' : 'Polymers',
      safety: isFa() ? 'ایمنی' : 'Safety',
      additives: isFa() ? 'افزودنی‌ها' : 'Additives',
    };
    return map[cat] || cat;
  }

  function formatDate(iso) {
    try {
      const d = new Date(iso);
      const opts = { year: 'numeric', month: 'long', day: 'numeric' };
      if (isFa()) {
        // Persian display (we don't depend on Intl fa locale reliably; just use a simple format)
        const months = ['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'];
        // Convert Gregorian to Jalali roughly via Intl if available
        try {
          const parts = new Intl.DateTimeFormat('fa-IR', opts).formatToParts(d);
          return parts.map((p) => p.value).join(' ');
        } catch (e) {
          return d.toLocaleDateString();
        }
      }
      return d.toLocaleDateString('en-US', opts);
    } catch (e) { return iso; }
  }

  function initProcessTimeline() {
    if (reducedMotion || !window.gsap || !window.ScrollTrigger) return;
    try {
      window.gsap.registerPlugin(window.ScrollTrigger);
      const steps = $$('.process-step');
      if (!steps.length) return;
      window.gsap.fromTo(steps,
        { opacity: 0, x: isFa() ? 40 : -40 },
        {
          opacity: 1, x: 0, duration: .8, ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: { trigger: '.process-section', start: 'top 70%' }
        });
    } catch (e) {}
  }

  function initQuickForm() {
    const form = $('#quick-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = (fd.get('name') || '').toString().trim();
      const phone = (fd.get('phone') || '').toString().trim();
      const product = (fd.get('product') || '').toString().trim();
      const notes = (fd.get('notes') || '').toString().trim();
      if (!name || !phone) return;

      const L = isFa() ? 'fa' : 'en';
      const lines = L === 'fa' ? [
        'سلام، از وب‌سایت خاور صدرا هستم. درخواست استعلام قیمت دارم:',
        '',
        'نام: ' + name,
        'تماس: ' + phone,
      ] : [
        'Hello, I am contacting from the Khavar Sadra website for a price quote:',
        '',
        'Name: ' + name,
        'Phone: ' + phone,
      ];
      if (product) lines.push((L === 'fa' ? 'محصول: ' : 'Product: ') + product);
      if (notes) lines.push((L === 'fa' ? 'توضیحات: ' : 'Notes: ') + notes);
      const msg = lines.join('\n');
      const url = CONFIG.whatsappLink(msg);
      window.open(url, '_blank', 'noopener');
      showToast(t('quick_form.success'));
      form.reset();
    });
  }

  // ────────────────────────────────────────────────────────────────────
  // 11. PRODUCTS LIST PAGE
  // ────────────────────────────────────────────────────────────────────
  async function initProductsPage() {
    const grid = $('[data-products-grid]');
    if (!grid) return;
    const all = await loadProducts();
    const searchInput = $('[data-products-search]');
    const catSelect = $('[data-products-cat]');
    const sortSelect = $('[data-products-sort]');
    const resultsCount = $('[data-products-count]');
    const resetBtn = $('[data-products-reset]');
    let state = { q: '', cat: 'all', sort: 'default' };

    function render() {
      let list = all.slice();
      // Filter by category
      if (state.cat !== 'all') list = list.filter((p) => p.category === state.cat);
      // Search
      if (state.q) {
        const q = state.q.toLowerCase();
        list = list.filter((p) =>
          p.name_fa.toLowerCase().includes(q) ||
          p.name_en.toLowerCase().includes(q) ||
          p.formula.toLowerCase().includes(q) ||
          p.cas.toLowerCase().includes(q) ||
          p.short_fa.includes(q) || p.short_en.toLowerCase().includes(q)
        );
      }
      // Sort
      if (state.sort === 'name') {
        list.sort((a, b) => (isFa() ? a.name_fa.localeCompare(b.name_fa) : a.name_en.localeCompare(b.name_en)));
      } else if (state.sort === 'cas') {
        list.sort((a, b) => a.cas.localeCompare(b.cas));
      }

      // Render
      if (!list.length) {
        grid.innerHTML = `<div class="col-span-full text-center py-16 text-slate-500">${t('products_page.no_results')}</div>`;
      } else {
        grid.innerHTML = list.map(productCardHTML).join('');
        initReveal();
      }
      if (resultsCount) resultsCount.textContent = t('products_page.results', { count: isFa() ? faDigits(list.length) : list.length });
    }

    if (searchInput) searchInput.addEventListener('input', () => { state.q = searchInput.value.trim(); render(); });
    if (catSelect) catSelect.addEventListener('change', () => { state.cat = catSelect.value; render(); });
    if (sortSelect) sortSelect.addEventListener('change', () => { state.sort = sortSelect.value; render(); });
    if (resetBtn) resetBtn.addEventListener('click', () => {
      state = { q: '', cat: 'all', sort: 'default' };
      if (searchInput) searchInput.value = '';
      if (catSelect) catSelect.value = 'all';
      if (sortSelect) sortSelect.value = 'default';
      render();
    });

    render();
  }

  // ────────────────────────────────────────────────────────────────────
  // 12. SINGLE PRODUCT PAGE
  // ────────────────────────────────────────────────────────────────────
  async function initProductDetail() {
    const root = $('[data-product-detail]');
    if (!root) return;
    const slug = new URLSearchParams(location.search).get('slug');
    const all = await loadProducts();
    const product = all.find((p) => p.slug === slug);

    if (!product) {
      root.innerHTML = `
        <div class="ppks-container py-24 text-center">
          <h1 class="text-3xl font-bold mb-3">${t('product_page.not_found')}</h1>
          <p class="text-slate-600 mb-6">${t('product_page.not_found_desc')}</p>
          <a href="products.html" class="btn btn-primary">${t('products_page.title')}</a>
        </div>`;
      return;
    }

    const name = isFa() ? product.name_fa : product.name_en;
    const description = isFa() ? product.description_fa : product.description_en;
    const packaging = isFa() ? product.packaging_fa : product.packaging_en;
    const safety = isFa() ? product.safety_fa : product.safety_en;
    const applications = isFa() ? product.applications_fa : product.applications_en;
    const specs = product.specs || [];
    const faq = product.faq || [];
    const gallery = product.gallery && product.gallery.length ? product.gallery : [product.image];
    const categoryLabel = t('category.' + product.category);
    const orderMsg = t('product_page.order_msg', { name, url: location.href });
    const waLink = CONFIG.whatsappLink(orderMsg);

    // Update title/meta
    document.title = name + ' | ' + t('meta.suffix');
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', (isFa() ? product.short_fa : product.short_en));

    // Breadcrumbs schema
    injectBreadcrumbSchema([
      { name: t('nav.home'), url: location.origin + location.pathname.replace(/[^/]*$/, '') + 'index.html' },
      { name: t('products_page.title'), url: location.origin + location.pathname.replace(/[^/]*$/, '') + 'products.html' },
      { name, url: location.href },
    ]);

    // Product schema
    injectSchema('Product', {
      name,
      description: isFa() ? product.short_fa : product.short_en,
      category: categoryLabel,
      identifier: product.cas,
      url: location.href,
    });

    root.innerHTML = `
      <nav class="ppks-container py-4 text-sm text-slate-500" aria-label="breadcrumb">
        <ol class="flex items-center gap-2 flex-wrap">
          <li><a href="index.html" class="hover:text-navy-700">${t('product_page.home')}</a></li>
          <li>${isFa() ? ICONS.chevron_left : ICONS.chevron_right.replace('chevron-right', 'chevron-right')}</li>
          <li><a href="products.html" class="hover:text-navy-700">${t('product_page.breadcrumb')}</a></li>
          <li>${isFa() ? ICONS.chevron_left : ICONS.chevron_right}</li>
          <li class="text-navy-800 font-semibold" aria-current="page">${name}</li>
        </ol>
      </nav>

      <div class="ppks-container pb-12">
        <div class="grid lg:grid-cols-2 gap-10">
          <!-- Gallery -->
          <div>
            <div class="rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3] mb-4">
              <img id="product-main-img" src="${gallery[0]}" alt="${name}" class="w-full h-full object-cover">
            </div>
            <div class="grid grid-cols-${Math.min(gallery.length, 4)} gap-3">
              ${gallery.map((g, i) => `
                <button class="rounded-lg overflow-hidden aspect-square border-2 ${i === 0 ? 'border-teal-600' : 'border-transparent'}" data-gallery-thumb="${g}">
                  <img src="${g}" alt="${name} ${i+1}" class="w-full h-full object-cover">
                </button>`).join('')}
            </div>
          </div>

          <!-- Info -->
          <div>
            <span class="chip chip-teal mb-3">${categoryLabel}</span>
            <h1 class="text-3xl md:text-4xl font-extrabold text-navy-800 mb-3">${name}</h1>
            <div class="flex flex-wrap gap-3 mb-5 text-sm">
              <span class="chip chip-navy">${t('product_page.formula')}: <span class="font-mono ms-1">${product.formula}</span></span>
              <span class="chip chip-navy">CAS: <span class="font-mono ms-1">${product.cas}</span></span>
            </div>
            <p class="text-slate-700 leading-relaxed mb-6">${description}</p>

            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-800">
              ${ICONS.bolt}<span class="ms-2">${t('product_page.disclaimer')}</span>
            </div>

            <div class="flex flex-wrap gap-3 mb-6">
              <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-lg" data-cta="whatsapp-product-detail">
                ${ICONS.whatsapp}<span>${t('cta.order')}</span>
              </a>
              <a href="tel:${CONFIG.contact.phone1_tel}" class="btn btn-navy btn-lg" data-cta="call-product-detail">
                ${ICONS.phone}<span>${t('cta.call')}</span>
              </a>
              <a href="${CONFIG.telegramLink()}" target="_blank" rel="noopener" class="btn btn-outline btn-lg" data-cta="telegram-product-detail">
                ${ICONS.telegram}<span>${t('cta.telegram')}</span>
              </a>
            </div>

            <a href="${CONFIG.downloads.sdsTemplate}" class="inline-flex items-center gap-2 text-sm text-teal-700 hover:text-navy-800 font-semibold">
              ${ICONS.download}<span>${t('cta.download_sds')}</span>
            </a>
          </div>
        </div>

        <!-- Specs & Applications -->
        <div class="grid lg:grid-cols-3 gap-8 mt-12">
          <div class="lg:col-span-2">
            <h2 class="text-2xl font-bold mb-4 text-navy-800">${t('product_page.specs')}</h2>
            <div class="card overflow-hidden">
              <table class="w-full text-sm">
                <thead class="bg-slate-50 text-navy-800">
                  <tr>
                    <th class="text-start p-4 font-semibold">${t('product_page.spec_property')}</th>
                    <th class="text-start p-4 font-semibold">${t('product_page.spec_value')}</th>
                  </tr>
                </thead>
                <tbody>
                  ${specs.map((s) => `
                    <tr class="border-t border-slate-100">
                      <td class="p-4 text-slate-700">${isFa() ? s.key_fa : s.key_en}</td>
                      <td class="p-4 font-semibold text-navy-800">${isFa() ? s.value_fa : s.value_en}</td>
                    </tr>`).join('')}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 class="text-2xl font-bold mb-4 text-navy-800">${t('product_page.applications')}</h2>
            <ul class="space-y-3">
              ${applications.map((a) => `
                <li class="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-3">
                  <span class="text-teal-600 flex-shrink-0">${ICONS.check}</span>
                  <span class="text-slate-700 text-sm">${a}</span>
                </li>`).join('')}
            </ul>
          </div>
        </div>

        <!-- Packaging & Safety -->
        <div class="grid lg:grid-cols-2 gap-8 mt-12">
          <div class="card card-body">
            <h2 class="text-xl font-bold mb-3 text-navy-800 flex items-center gap-2">${ICONS.package}<span>${t('product_page.packaging')}</span></h2>
            <p class="text-slate-700 leading-relaxed">${packaging}</p>
          </div>
          <div class="card card-body bg-red-50 border-red-200">
            <h2 class="text-xl font-bold mb-3 text-red-800 flex items-center gap-2">${ICONS.shield}<span>${t('product_page.safety')}</span></h2>
            <p class="text-slate-700 leading-relaxed">${safety}</p>
          </div>
        </div>

        <!-- FAQ -->
        ${faq.length ? `
        <div class="mt-12">
          <h2 class="text-2xl font-bold mb-4 text-navy-800">${t('product_page.faq')}</h2>
          <div>
            ${faq.map((f) => `
              <div class="faq-item">
                <button aria-expanded="false">
                  <span>${isFa() ? f.q_fa : f.q_en}</span>
                  <span class="chev">${ICONS.chevron_down}</span>
                </button>
                <div class="faq-content"><div>${isFa() ? f.a_fa : f.a_en}</div></div>
              </div>`).join('')}
          </div>
        </div>` : ''}

        <!-- Related -->
        <div class="mt-16" data-related-products></div>
      </div>

      <!-- Mobile sticky order bar -->
      <div class="product-sticky-bar" id="product-sticky-bar">
        <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-block" data-cta="whatsapp-product-sticky">
          ${ICONS.whatsapp}<span>${t('product_page.sticky_order')}</span>
        </a>
      </div>
    `;

    // Gallery thumbnail switching
    $$('[data-gallery-thumb]').forEach((b) => {
      b.addEventListener('click', () => {
        const src = b.getAttribute('data-gallery-thumb');
        const main = $('#product-main-img');
        if (main) main.src = src;
        $$('[data-gallery-thumb]').forEach((o) => o.classList.remove('border-teal-600'), o.classList.add('border-transparent'));
        b.classList.add('border-teal-600'); b.classList.remove('border-transparent');
      });
    });

    // FAQ accordion
    initFAQ();

    // Show mobile sticky bar
    const stickyBar = $('#product-sticky-bar');
    if (stickyBar) {
      stickyBar.classList.add('is-visible');
      document.body.classList.add('no-bottom-pad');
    }

    // Related products
    const relatedRoot = $('[data-related-products]');
    if (relatedRoot) {
      const related = all.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);
      if (related.length) {
        relatedRoot.innerHTML = `
          <h2 class="text-2xl font-bold mb-6 text-navy-800">${t('product_page.related')}</h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">${related.map(productCardHTML).join('')}</div>`;
        initReveal();
      }
    }
  }

  // ────────────────────────────────────────────────────────────────────
  // 13. BLOG LIST PAGE
  // ────────────────────────────────────────────────────────────────────
  async function initBlogPage() {
    const grid = $('[data-blog-grid]');
    if (!grid) return;
    const all = await loadPosts();
    const sorted = all.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
    const featured = sorted[0];
    const rest = sorted.slice(1);

    const searchInput = $('[data-blog-search]');
    const catSelect = $('[data-blog-cat]');
    const featuredEl = $('[data-blog-featured]');
    const paginationEl = $('[data-blog-pagination]');

    const PER_PAGE = 6;
    let state = { q: '', cat: 'all', page: 1 };

    function renderFeatured() {
      if (!featuredEl || !featured) return;
      const title = isFa() ? featured.title_fa : featured.title_en;
      const excerpt = isFa() ? featured.excerpt_fa : featured.excerpt_en;
      featuredEl.innerHTML = `
        <a href="post.html?slug=${featured.slug}" class="card card-hover grid md:grid-cols-2 overflow-hidden">
          <div class="aspect-[16/9] md:aspect-auto overflow-hidden bg-slate-100">
            <img src="${featured.image}" alt="${title}" class="w-full h-full object-cover">
          </div>
          <div class="card-body" style="display:flex;flex-direction:column;justify-content:center;gap:12px">
            <div class="flex items-center gap-2">
              <span class="chip chip-amber">${t('blog_page.featured')}</span>
              <span class="chip chip-teal">${postCategoryLabel(featured.category)}</span>
            </div>
            <h2 class="text-2xl md:text-3xl font-bold text-navy-800 leading-tight">${title}</h2>
            <p class="text-slate-600 leading-relaxed">${excerpt}</p>
            <span class="inline-flex items-center gap-1 text-sm font-semibold text-teal-700">
              ${t('cta.read_more')}
              ${isFa() ? ICONS.arrow_left : ICONS.arrow_right}
            </span>
          </div>
        </a>`;
    }

    function renderList() {
      let list = rest.slice();
      if (state.cat !== 'all') list = list.filter((p) => p.category === state.cat);
      if (state.q) {
        const q = state.q.toLowerCase();
        list = list.filter((p) =>
          (isFa() ? p.title_fa : p.title_en).toLowerCase().includes(q) ||
          (isFa() ? p.excerpt_fa : p.excerpt_en).toLowerCase().includes(q)
        );
      }
      const totalPages = Math.max(1, Math.ceil(list.length / PER_PAGE));
      if (state.page > totalPages) state.page = totalPages;
      const pageList = list.slice((state.page - 1) * PER_PAGE, state.page * PER_PAGE);

      if (!list.length) {
        grid.innerHTML = `<div class="col-span-full text-center py-16 text-slate-500">${t('blog_page.no_results')}</div>`;
      } else {
        grid.innerHTML = pageList.map(postCardHTML).join('');
        initReveal();
      }

      // Pagination
      if (paginationEl) {
        if (totalPages <= 1) { paginationEl.innerHTML = ''; return; }
        let html = '';
        html += `<button ${state.page === 1 ? 'disabled' : ''} data-page="${state.page - 1}">${isFa() ? ICONS.chevron_right : ICONS.chevron_left}</button>`;
        for (let i = 1; i <= totalPages; i++) {
          html += `<button class="${i === state.page ? 'is-active' : ''}" data-page="${i}">${isFa() ? faDigits(i) : i}</button>`;
        }
        html += `<button ${state.page === totalPages ? 'disabled' : ''} data-page="${state.page + 1}">${isFa() ? ICONS.chevron_left : ICONS.chevron_right}</button>`;
        paginationEl.innerHTML = html;
        $$('button', paginationEl).forEach((b) => {
          b.addEventListener('click', () => {
            const p = parseInt(b.getAttribute('data-page'), 10);
            if (!isNaN(p) && p >= 1 && p <= totalPages) { state.page = p; renderList(); window.scrollTo({ top: grid.offsetTop - 120, behavior: 'smooth' }); }
          });
        });
      }
    }

    if (searchInput) searchInput.addEventListener('input', () => { state.q = searchInput.value.trim(); state.page = 1; renderList(); });
    if (catSelect) catSelect.addEventListener('change', () => { state.cat = catSelect.value; state.page = 1; renderList(); });

    renderFeatured();
    renderList();
  }

  // ────────────────────────────────────────────────────────────────────
  // 14. SINGLE POST PAGE
  // ────────────────────────────────────────────────────────────────────
  async function initPostDetail() {
    const root = $('[data-post-detail]');
    if (!root) return;
    const slug = new URLSearchParams(location.search).get('slug');
    const all = await loadPosts();
    const post = all.find((p) => p.slug === slug);
    if (!post) {
      root.innerHTML = `<div class="ppks-container py-24 text-center"><h1 class="text-3xl font-bold mb-3">${t('post_page.not_found')}</h1><p class="text-slate-600 mb-6">${t('post_page.not_found_desc')}</p><a href="blog.html" class="btn btn-primary">${t('blog_page.title')}</a></div>`;
      return;
    }
    const title = isFa() ? post.title_fa : post.title_en;
    const content = isFa() ? post.content_fa : post.content_en;
    const excerpt = isFa() ? post.excerpt_fa : post.excerpt_en;
    const author = isFa() ? post.author : (post.author_en || post.author);
    const toc = isFa() ? post.toc_fa : post.toc_en;
    const date = formatDate(post.date);
    const cat = postCategoryLabel(post.category);

    document.title = title + ' | ' + t('meta.suffix');
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', excerpt);

    injectBreadcrumbSchema([
      { name: t('nav.home'), url: location.origin + location.pathname.replace(/[^/]*$/, '') + 'index.html' },
      { name: t('blog_page.title'), url: location.origin + location.pathname.replace(/[^/]*$/, '') + 'blog.html' },
      { name: title, url: location.href },
    ]);
    injectSchema('Article', {
      headline: title,
      author: { '@type': 'Organization', name: author },
      datePublished: post.date,
      image: post.image,
      articleBody: excerpt,
      url: location.href,
    });

    root.innerHTML = `
      <div class="read-progress" id="read-progress"></div>
      <nav class="ppks-container py-4 text-sm text-slate-500" aria-label="breadcrumb">
        <ol class="flex items-center gap-2 flex-wrap">
          <li><a href="index.html" class="hover:text-navy-700">${t('post_page.home')}</a></li>
          <li>${isFa() ? ICONS.chevron_left : ICONS.chevron_right}</li>
          <li><a href="blog.html" class="hover:text-navy-700">${t('post_page.breadcrumb')}</a></li>
          <li>${isFa() ? ICONS.chevron_left : ICONS.chevron_right}</li>
          <li class="text-navy-800 font-semibold line-clamp-1" aria-current="page">${title}</li>
        </ol>
      </nav>

      <header class="ppks-container text-center max-w-3xl mx-auto mb-10">
        <div class="flex items-center justify-center gap-3 mb-4 text-sm">
          <span class="chip chip-teal">${cat}</span>
          <span class="text-slate-400">${date}</span>
          <span class="text-slate-400">•</span>
          <span class="text-slate-500">${post.readingTime} ${t('post_page.read_time')}</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-800 leading-tight mb-4 text-balance">${title}</h1>
        <p class="text-slate-600 text-lg leading-relaxed">${excerpt}</p>
        <div class="mt-4 text-sm text-slate-500">${t('post_page.by')} <span class="font-semibold text-navy-800">${author}</span></div>
      </header>

      <div class="ppks-container mb-10">
        <img src="${post.image}" alt="${title}" class="w-full max-h-[480px] object-cover rounded-2xl">
      </div>

      <div class="ppks-container grid lg:grid-cols-[1fr_280px] gap-10">
        <article class="post-content prose max-w-none">
          ${content}
          <div class="mt-10 p-6 rounded-2xl bg-navy-800 text-white">
            <h2 class="text-white text-xl font-bold mb-2">${t('post_page.cta_title')}</h2>
            <p class="text-slate-300 mb-4">${t('post_page.cta_desc')}</p>
            <div class="flex flex-wrap gap-3">
              <a href="${CONFIG.whatsappLink(t('whatsapp.greeting'))}" target="_blank" rel="noopener" class="btn btn-whatsapp" data-cta="whatsapp-post-cta">${ICONS.whatsapp}<span>${t('cta.whatsapp')}</span></a>
              <a href="tel:${CONFIG.contact.phone1_tel}" class="btn btn-ghost-light" data-cta="call-post-cta">${ICONS.phone}<span>${t('cta.call')}</span></a>
            </div>
          </div>
          <div class="mt-6 flex items-center gap-3 flex-wrap text-sm">
            <span class="font-semibold text-navy-800">${t('post_page.share')}:</span>
            <button class="btn btn-outline btn-sm" data-share="wa" data-cta="share-wa">${ICONS.whatsapp}<span>WhatsApp</span></button>
            <button class="btn btn-outline btn-sm" data-share="tg" data-cta="share-tg">${ICONS.telegram}<span>Telegram</span></button>
            <button class="btn btn-outline btn-sm" data-share="copy" data-cta="share-copy">${ICONS.copy}<span>${t('share.copy')}</span></button>
          </div>
        </article>
        <aside class="hidden lg:block">
          <div class="sticky-col">
            <div class="card card-body sticky-col">
              <h3 class="text-sm font-bold text-navy-800 mb-3 uppercase tracking-wide">${t('post_page.toc')}</h3>
              <nav>
                ${toc.map((item) => `<a class="toc-link" href="#${item.id}" data-toc-link="${item.id}">${item.title}</a>`).join('')}
              </nav>
            </div>
          </div>
        </aside>
      </div>

      <div class="ppks-container mt-16" data-related-posts></div>
    `;

    // Reading progress
    const prog = $('#read-progress');
    if (prog) {
      const onScroll = () => {
        const article = $('.post-content');
        if (!article) return;
        const top = article.offsetTop;
        const h = article.offsetHeight;
        const y = window.scrollY - top;
        const p = Math.max(0, Math.min(1, y / (h - window.innerHeight + 200)));
        prog.style.width = (p * 100) + '%';
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    // TOC active link
    if (window.IntersectionObserver) {
      const tocLinks = $$('[data-toc-link]');
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.id;
            tocLinks.forEach((l) => l.classList.toggle('is-active', l.getAttribute('data-toc-link') === id));
          }
        });
      }, { rootMargin: '-20% 0px -70% 0px' });
      $$('h2[id]').forEach((h) => obs.observe(h));
    }

    // Share buttons
    $$('[data-share]').forEach((b) => {
      b.addEventListener('click', () => {
        const kind = b.getAttribute('data-share');
        const url = location.href;
        const text = title;
        if (kind === 'wa') window.open(CONFIG.whatsappLink(text + ' ' + url), '_blank', 'noopener');
        else if (kind === 'tg') window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank', 'noopener');
        else if (kind === 'copy') {
          navigator.clipboard.writeText(url).then(() => showToast(t('share.copied'))).catch(() => {});
        }
      });
    });

    // Related posts
    const relatedRoot = $('[data-related-posts]');
    if (relatedRoot) {
      const related = all.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);
      const moreRelated = related.length < 3 ? all.filter((p) => p.slug !== post.slug && !related.includes(p)).slice(0, 3 - related.length) : [];
      const finalRelated = [...related, ...moreRelated];
      if (finalRelated.length) {
        relatedRoot.innerHTML = `
          <h2 class="text-2xl font-bold mb-6 text-navy-800">${t('post_page.related')}</h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">${finalRelated.map(postCardHTML).join('')}</div>`;
        initReveal();
      }
    }
  }

  // ────────────────────────────────────────────────────────────────────
  // 15. CONTACT PAGE — form validation + WhatsApp redirect
  // ────────────────────────────────────────────────────────────────────
  function initContactForm() {
    const form = $('#contact-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let ok = true;
      const fd = new FormData(form);
      const name = (fd.get('name') || '').toString().trim();
      const email = (fd.get('email') || '').toString().trim();
      const subject = (fd.get('subject') || '').toString().trim();
      const message = (fd.get('message') || '').toString().trim();

      // Validate
      const nameField = form.querySelector('[data-field="name"]');
      if (!name) { ok = false; nameField.classList.add('has-error'); } else nameField.classList.remove('has-error');

      const msgField = form.querySelector('[data-field="message"]');
      if (!message) { ok = false; msgField.classList.add('has-error'); } else msgField.classList.remove('has-error');

      if (!ok) return;

      // Compose WhatsApp message
      const L = isFa() ? 'fa' : 'en';
      const lines = L === 'fa' ? [
        'سلام، از وب‌سایت خاور صدرا هستم.',
        '',
        'نام: ' + name,
      ] : [
        'Hello, I am contacting from the Khavar Sadra website.',
        '',
        'Name: ' + name,
      ];
      if (email) lines.push((L === 'fa' ? 'ایمیل: ' : 'Email: ') + email);
      if (subject) lines.push((L === 'fa' ? 'موضوع: ' : 'Subject: ') + subject);
      lines.push((L === 'fa' ? 'پیام: ' : 'Message: ') + message);
      const msg = lines.join('\n');
      window.open(CONFIG.whatsappLink(msg), '_blank', 'noopener');
      showToast(t('contact_page.success'));
      form.reset();
    });

    // Email button
    const emailBtn = $('[data-send-email]', form);
    if (emailBtn) {
      emailBtn.addEventListener('click', () => {
        const fd = new FormData(form);
        const name = (fd.get('name') || '').toString().trim();
        const subject = (fd.get('subject') || '').toString().trim();
        const message = (fd.get('message') || '').toString().trim();
        const email = (fd.get('email') || '').toString().trim();
        const body = `${message}\n\n${name}${email ? ' <' + email + '>' : ''}`;
        window.location.href = 'mailto:' + CONFIG.contact.email + '?subject=' + encodeURIComponent(subject || (isFa() ? 'تماس از وب‌سایت' : 'Website inquiry')) + '&body=' + encodeURIComponent(body);
      });
    }
  }

  // ────────────────────────────────────────────────────────────────────
  // 16. FAQ accordion (generic, works for any [data-faq] or .faq-item)
  // ────────────────────────────────────────────────────────────────────
  function initFAQ() {
    $$('.faq-item').forEach((item) => {
      const btn = $('button', item);
      if (!btn || btn.dataset.faqBound) return;
      btn.dataset.faqBound = '1';
      btn.addEventListener('click', () => {
        const open = item.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', String(open));
        const content = $('.faq-content', item);
        if (content) content.style.maxHeight = open ? content.scrollHeight + 'px' : '0';
      });
    });
  }

  // ────────────────────────────────────────────────────────────────────
  // 17. JSON-LD schema injection
  // ────────────────────────────────────────────────────────────────────
  function injectSchema(type, data) {
    const obj = Object.assign({ '@context': 'https://schema.org', '@type': type }, data);
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(obj);
    document.head.appendChild(s);
  }
  function injectBreadcrumbSchema(items) {
    injectSchema('BreadcrumbList', {
      itemListElement: items.map((it, i) => ({
        '@type': 'ListItem', position: i + 1, name: it.name, item: it.url,
      })),
    });
  }

  // ────────────────────────────────────────────────────────────────────
  // 18. TOAST helper
  // ────────────────────────────────────────────────────────────────────
  function showToast(message) {
    let toast = $('#ppks-toast');
    if (!toast) {
      toast = el('div', { id: 'ppks-toast', class: 'toast', role: 'status', 'aria-live': 'polite' });
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.classList.remove('is-visible'), 3500);
  }

  // ────────────────────────────────────────────────────────────────────
  // 19. CTA tracking (analytics-ready)
  // ────────────────────────────────────────────────────────────────────
  function initCTATracking() {
    document.addEventListener('click', (e) => {
      const target = e.target.closest('[data-cta]');
      if (!target) return;
      const cta = target.getAttribute('data-cta');
      const detail = { cta, page: document.body.getAttribute('data-page') || location.pathname, ts: Date.now() };
      // Dispatch event for future analytics integration
      document.dispatchEvent(new CustomEvent('ppks:cta', { detail }));
      // localStorage log (dev only, capped)
      try {
        const arr = JSON.parse(localStorage.getItem('ppks-cta-log') || '[]');
        arr.push(detail);
        if (arr.length > 50) arr.shift();
        localStorage.setItem('ppks-cta-log', JSON.stringify(arr));
      } catch (e) {}
    });
  }

  // ────────────────────────────────────────────────────────────────────
  // 20. THREE.JS HERO (lazy)
  // ────────────────────────────────────────────────────────────────────
  function initHero3D() {
    const mount = $('#hero-3d');
    if (!mount) return;
    // Respect low-end devices
    const isMobile = window.innerWidth < 768;
    const cores = navigator.hardwareConcurrency || 4;
    if (isMobile || cores <= 2 || reducedMotion) {
      // Static SVG fallback already in HTML
      mount.setAttribute('data-fallback', 'true');
      return;
    }
    // Lazy load Three.js
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          import('./three-hero.js').then((mod) => {
            if (mod && mod.initHero3D) mod.initHero3D(mount);
          }).catch((err) => console.warn('Three.js lazy load failed', err));
          observer.disconnect();
        }
      });
    }, { rootMargin: '200px' });
    observer.observe(mount);
  }

  // ────────────────────────────────────────────────────────────────────
  // 21. SERVICE PAGE MODULES — conditional init by body[data-page]
  // ────────────────────────────────────────────────────────────────────

  // Service: Technical Consulting — interactive quiz
  function initConsultingQuiz() {
    const root = $('[data-quiz]');
    if (!root) return;
    // Quiz data — recommendation logic
    const questions = isFa() ? [
      {
        q: 'صنعت شما کدام است؟',
        opts: [
          { label: 'شوینده و بهداشتی', cat: 'surfactants' },
          { label: 'رنگ و رزین', cat: 'polymers_resins' },
          { label: 'غذایی و آشامیدنی', cat: 'gums_additives' },
          { label: 'نساجی', cat: 'salts_silicates' },
        ],
      },
      {
        q: 'فرمولاسیون شما پایه چیست؟',
        opts: [
          { label: 'پودر', tag: 'powder' },
          { label: 'مایع', tag: 'liquid' },
          { label: 'خمیر', tag: 'paste' },
        ],
      },
      {
        q: 'اولویت شما چیست؟',
        opts: [
          { label: 'قیمت اقتصادی', tag: 'eco' },
          { label: 'کیفیت بالا', tag: 'premium' },
          { label: 'حلالیت سریع', tag: 'fast' },
        ],
      },
    ] : [
      {
        q: 'What is your industry?',
        opts: [
          { label: 'Detergents & Hygiene', cat: 'surfactants' },
          { label: 'Paint & Resin', cat: 'polymers_resins' },
          { label: 'Food & Beverage', cat: 'gums_additives' },
          { label: 'Textiles', cat: 'salts_silicates' },
        ],
      },
      {
        q: 'What is your formulation base?',
        opts: [
          { label: 'Powder', tag: 'powder' },
          { label: 'Liquid', tag: 'liquid' },
          { label: 'Paste', tag: 'paste' },
        ],
      },
      {
        q: 'What is your priority?',
        opts: [
          { label: 'Economic price', tag: 'eco' },
          { label: 'Premium quality', tag: 'premium' },
          { label: 'Fast dissolution', tag: 'fast' },
        ],
      },
    ];
    let step = 0;
    let answers = [];

    function render() {
      if (step >= questions.length) return renderResult();
      const q = questions[step];
      root.innerHTML = `
        <div class="flex items-center justify-between mb-4">
          <span class="chip chip-navy">${isFa() ? 'سوال' : 'Question'} ${step + 1} / ${questions.length}</span>
          <div class="flex gap-1">
            ${questions.map((_, i) => `<span class="w-2 h-2 rounded-full ${i <= step ? 'bg-teal-600' : 'bg-slate-200'}"></span>`).join('')}
          </div>
        </div>
        <h3 class="text-xl font-bold mb-5 text-navy-800">${q.q}</h3>
        <div class="grid sm:grid-cols-2 gap-3">
          ${q.opts.map((o, i) => `
            <button class="card card-hover text-start p-4 hover:border-teal-500" data-quiz-opt="${i}">
              <span class="font-semibold text-navy-800">${o.label}</span>
            </button>`).join('')}
        </div>
        ${step > 0 ? `<button class="btn btn-outline btn-sm mt-4" data-quiz-prev>${isFa() ? ICONS.chevron_right : ICONS.chevron_left}<span>${t('services_consulting.quiz_prev')}</span></button>` : ''}
      `;
      $$('[data-quiz-opt]', root).forEach((b) => {
        b.addEventListener('click', () => {
          answers[step] = parseInt(b.getAttribute('data-quiz-opt'), 10);
          step++;
          render();
        });
      });
      const prev = $('[data-quiz-prev]', root);
      if (prev) prev.addEventListener('click', () => { step = Math.max(0, step - 1); render(); });
    }

    async function renderResult() {
      const products = await loadProducts();
      // Use first question's category as recommendation
      const cat = questions[0].opts[answers[0]].cat;
      const matches = products.filter((p) => p.category === cat).slice(0, 3);
      const list = matches.length ? matches : products.slice(0, 3);
      root.innerHTML = `
        <div class="text-center mb-6">
          <span class="chip chip-amber mb-3">${t('services_consulting.quiz_result')}</span>
          <h3 class="text-2xl font-bold text-navy-800">${isFa() ? 'پیشنهادهای ما برای شما' : 'Our recommendations for you'}</h3>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          ${list.map(productCardHTML).join('')}
        </div>
        <div class="text-center">
          <a href="${CONFIG.whatsappLink(t('whatsapp.greeting'))}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-lg" data-cta="whatsapp-quiz-result">
            ${ICONS.whatsapp}<span>${t('cta.get_quote_whatsapp')}</span>
          </a>
          <button class="btn btn-outline btn-lg ms-2" data-quiz-restart>${t('services_consulting.quiz_restart')}</button>
        </div>
      `;
      initReveal();
      const restart = $('[data-quiz-restart]', root);
      if (restart) restart.addEventListener('click', () => { step = 0; answers = []; render(); });
    }

    render();
  }

  // Service: Trading — horizontal scroll pin (GSAP ScrollTrigger)
  function initTradingHorizontal() {
    if (reducedMotion || !window.gsap || !window.ScrollTrigger) return;
    const section = $('[data-trading-horizontal]');
    if (!section) return;
    try {
      window.gsap.registerPlugin(window.ScrollTrigger);
      const track = $('.h-scroll-track', section);
      if (!track) return;
      const totalWidth = track.scrollWidth;
      const distance = totalWidth - window.innerWidth + 100;
      window.gsap.to(track, {
        x: isFa() ? distance : -distance,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=' + distance,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    } catch (e) { console.warn('trading horizontal scroll failed', e); }
  }

  // Service: Consulting — industry tabs
  function initConsultingTabs() {
    const tabBtns = $$('[data-consulting-tab]');
    if (!tabBtns.length) return;
    tabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-consulting-tab');
        tabBtns.forEach((b) => b.classList.toggle('is-active', b === btn));
        $$('[data-consulting-panel]').forEach((p) => {
          p.classList.toggle('is-active', p.getAttribute('data-consulting-panel') === target);
        });
      });
    });
  }

  // Service: QC — grade comparison tabs
  function initQcCompareTabs() {
    const tabBtns = $$('[data-qc-tab]');
    if (!tabBtns.length) return;
    tabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-qc-tab');
        tabBtns.forEach((b) => b.classList.toggle('is-active', b === btn));
        $$('[data-qc-panel]').forEach((p) => {
          p.classList.toggle('is-active', p.getAttribute('data-qc-panel') === target);
        });
      });
    });
  }

  // ────────────────────────────────────────────────────────────────────
  // 22. 404 — search redirect
  // ────────────────────────────────────────────────────────────────────
  function init404Search() {
    const form = $('[data-404-search]');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = (form.querySelector('input')?.value || '').trim();
      window.location.href = 'products.html' + (q ? ('?q=' + encodeURIComponent(q)) : '');
    });
  }

  // ────────────────────────────────────────────────────────────────────
  // 23. GENERIC TABS (used on contact page FAQ, etc.)
  // ────────────────────────────────────────────────────────────────────
  function initGenericTabs() {
    $$('[data-tabs]').forEach((group) => {
      const btns = $$('[data-tab]', group);
      btns.forEach((btn) => {
        btn.addEventListener('click', () => {
          const target = btn.getAttribute('data-tab');
          btns.forEach((b) => b.classList.toggle('is-active', b === btn));
          const panels = $$('[data-tab-panel]', group.parentElement);
          panels.forEach((p) => p.classList.toggle('is-active', p.getAttribute('data-tab-panel') === target));
        });
      });
    });
  }

  // ────────────────────────────────────────────────────────────────────
  // 24. INITIALIZE EVERYTHING
  // ────────────────────────────────────────────────────────────────────
  function init() {
    initPreloader();
    initHeader();
    initFooter();
    initAnnounceBar();
    initFloatingCTA();
    initCTATracking();

    // Wait for i18n to be ready before page-specific init (so dynamic content uses correct lang)
    const runPage = () => {
      const page = document.body.getAttribute('data-page');
      initReveal();
      initCounters();
      initFAQ();
      initGenericTabs();
      initContactForm();
      initConsultingTabs();
      initQcCompareTabs();
      init404Search();

      switch (page) {
        case 'home': initHome(); break;
        case 'about': initHome(); break; // about has counters/featured too via shared selectors
        case 'products': initProductsPage(); break;
        case 'product': initProductDetail(); break;
        case 'blog': initBlogPage(); break;
        case 'post': initPostDetail(); break;
        case 'contact': /* contact form handled above */ break;
        case 'services-trading': initTradingHorizontal(); break;
        case 'services-consulting': initConsultingQuiz(); break;
        case 'services-qc': /* tabs handled above */ break;
        case '404': init404Search(); break;
      }
    };

    if (i18n && i18n.ready) runPage();
    else if (i18n) i18n.on(() => runPage());
    else runPage();

    // Re-run i18n apply when language changes (for dynamically generated content)
    if (i18n) {
      i18n.on((newLang) => {
        // Re-render dynamic content for the new language
        const page = document.body.getAttribute('data-page');
        if (page === 'home') initHome();
        if (page === 'products') initProductsPage();
        if (page === 'product') initProductDetail();
        if (page === 'blog') initBlogPage();
        if (page === 'post') initPostDetail();
        if (page === 'services-consulting') initConsultingQuiz();
        // Re-apply header contact info
        updateHeaderContact();
        initFooter();
      });
    }
  }

  // Boot
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose a tiny API for debugging
  window.PPKS = { t, faDigits, ICONS, showToast };
})();
