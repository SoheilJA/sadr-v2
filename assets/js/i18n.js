/**
 * i18n.js — bilingual (FA/EN) support for Khavar Sadra site.
 *
 * Responsibilities:
 *  - Load translations from JSON (with JS-module fallback for file:// usage)
 *  - Apply translations to any element with [data-i18n] (text content)
 *  - Apply attributes: [data-i18n-attr="placeholder:search_ph,aria-label:..."]
 *  - Apply count substitutions: [data-i18n-count="N"]
 *  - Switch language, persist in localStorage, update <html lang/dir>
 *  - Update <title>, meta description, and hreflang alternates
 *
 * Public API:  window.PPKS_i18n = { current, set, t, ready }
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'ppks-lang';
  const SUPPORTED = ['fa', 'en'];
  const DEFAULT_LANG = (window.PPKS_CONFIG && window.PPKS_CONFIG.site && window.PPKS_CONFIG.site.defaultLang) || 'fa';

  // Resolve the data directory relative to THIS script's URL (not the document URL),
  // so that pages in subfolders (e.g. /services/supply.html) can still fetch the
  // shared i18n JSON files from /assets/data/ correctly. Falls back to a relative
  // path for environments where currentScript is unavailable.
  const _thisScript = (typeof document !== 'undefined' && document.currentScript) || null;
  const _scriptDir = (_thisScript && _thisScript.src) ? _thisScript.src.replace(/[^/]*$/, '') : '';
  const DATA_DIR = _scriptDir ? (_scriptDir + '../data/') : 'assets/data/';

  // Embedded fallbacks (used only if fetch fails — e.g. file://). These are
  // loaded from the same data files via <script> tag in the page if needed.
  // We keep them empty here; main.js will inject via window.__PPKS_I18N_FALLBACK__
  // before i18n.init() runs.

  let dict = {};          // merged {fa: {...}, en: {...}}
  let current = null;
  let ready = false;
  const listeners = [];

  /** Convert latin digits to Persian digits in a string. */
  function toFaDigits(s) {
    if (s == null) return s;
    return String(s).replace(/[0-9]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[+d]);
  }
  function toEnDigits(s) {
    if (s == null) return s;
    return String(s).replace(/[۰-۹]/g, (d) =>
      '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)
    );
  }

  /** Substitute {key} in string. */
  function interpolate(str, vars) {
    if (!str) return '';
    if (!vars) return str;
    return str.replace(/\{(\w+)\}/g, (_, k) => (vars[k] != null ? vars[k] : `{${k}}`));
  }

  /** Translate a key. */
  function t(key, vars) {
    const v = (dict[current] && dict[current][key]) || (dict.fa && dict.fa[key]) || (dict.en && dict.en[key]) || key;
    return interpolate(v, vars);
  }

  /** Apply translations to a root element (or document). */
  function applyTranslations(root) {
    root = root || document;
    const els = root.querySelectorAll('[data-i18n]');
    els.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const varsAttr = el.getAttribute('data-i18n-vars');
      let vars = null;
      if (varsAttr) {
        try { vars = JSON.parse(varsAttr); } catch (e) { vars = null; }
      }
      // data-i18n-count lets us inject the count as {count}
      const countAttr = el.getAttribute('data-i18n-count');
      if (countAttr != null) {
        vars = Object.assign({}, vars, { count: countAttr });
      }
      let text = t(key, vars);
      if (current === 'fa') text = toFaDigits(text);
      else text = toEnDigits(text);
      el.textContent = text;
    });

    // Attribute translations: data-i18n-attr="placeholder:ph_key,aria-label:other_key"
    root.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const spec = el.getAttribute('data-i18n-attr');
      spec.split(',').forEach((pair) => {
        const [attr, key] = pair.split(':').map((s) => s.trim());
        if (!attr || !key) return;
        let v = t(key);
        if (current === 'fa') v = toFaDigits(v); else v = toEnDigits(v);
        el.setAttribute(attr, v);
      });
    });

    // html element translates
    const html = document.documentElement;
    html.setAttribute('lang', current);
    html.setAttribute('dir', current === 'fa' ? 'rtl' : 'ltr');

    // title & description
    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) document.title = t(titleEl.getAttribute('data-i18n'));
    const descEl = document.querySelector('meta[name="description"][data-i18n]');
    if (descEl) descEl.setAttribute('content', t(descEl.getAttribute('data-i18n')));

    // og:locale
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', current === 'fa' ? 'fa_IR' : 'en_US');
  }

  /** Update the language switcher button text + active state. */
  function updateSwitcher() {
    document.querySelectorAll('[data-lang-switch]').forEach((btn) => {
      const target = current === 'fa' ? 'en' : 'fa';
      btn.setAttribute('data-lang-switch', target);
      btn.setAttribute('aria-label', target === 'fa' ? 'فارسی' : 'English');
      btn.textContent = target.toUpperCase();
    });
  }

  /** Switch language. */
  function set(lang, opts) {
    if (!SUPPORTED.includes(lang)) lang = DEFAULT_LANG;
    if (lang === current && ready) {
      // still re-apply
    }
    current = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    applyTranslations(document);
    updateSwitcher();
    if (!opts || !opts.silent) {
      listeners.forEach((fn) => { try { fn(current); } catch (e) {} });
    }
  }

  function on(fn) { listeners.push(fn); }

  /** Load one language file. Falls back to embedded if fetch fails. */
  async function loadLang(lang) {
    // 1. Embedded fallback (from a JS file that defines window.__PPKS_I18N_FALLBACK__.LANG)
    if (window.__PPKS_I18N_FALLBACK__ && window.__PPKS_I18N_FALLBACK__[lang]) {
      return window.__PPKS_I18N_FALLBACK__[lang];
    }
    // 2. Try fetch
    try {
      const res = await fetch(`${DATA_DIR}i18n-${lang}.json`, { cache: 'no-cache' });
      if (!res.ok) throw new Error('http ' + res.status);
      return await res.json();
    } catch (e) {
      // 3. Try the embedded module file as last resort (i18n-fallback.js)
      try {
        // dynamic import
        const mod = await import(`./i18n-fallback.js`);
        if (mod && mod[lang]) return mod[lang];
      } catch (e2) { /* ignore */ }
      console.warn(`[i18n] Failed to load i18n-${lang}.json and no fallback available.`);
      return {};
    }
  }

  async function init() {
    // Detect initial language
    let lang = null;
    try { lang = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (!lang || !SUPPORTED.includes(lang)) {
      lang = DEFAULT_LANG;
    }
    // Load both languages (so switching is instant)
    const [fa, en] = await Promise.all([loadLang('fa'), loadLang('en')]);
    dict = { fa: fa || {}, en: en || {} };
    ready = true;
    set(lang, { silent: true });
    // Fire initial event so non-silent listeners run
    listeners.forEach((fn) => { try { fn(current); } catch (e) {} });
    document.dispatchEvent(new CustomEvent('ppks:i18n-ready', { detail: { lang: current } }));
  }

  // Public API
  window.PPKS_i18n = {
    get current() { return current; },
    get ready() { return ready; },
    set, t, on, applyTranslations,
    toFaDigits, toEnDigits,
    SUPPORTED,
  };

  // Auto-init on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Wire up switcher buttons (delegated, works for dynamically added buttons)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-lang-switch]');
    if (!btn) return;
    e.preventDefault();
    const target = btn.getAttribute('data-lang-switch');
    if (target && target !== current) set(target);
  });
})();
