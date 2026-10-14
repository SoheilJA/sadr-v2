# Petro Palayesh Khavar Sadra — Website

> **پتروپالایش خاور صدرا** — Static bilingual (Persian / English) marketing & product-catalog website for an industrial chemicals supply & distribution company based in Tehran, Iran.

---

## 1. Project Overview

This repository contains the **Petro Palayesh Khavar Sadra (PPKS)** company website — a pure, dependency-free, static HTML/CSS/JS site that presents the company's services (supply, trading, consulting, quality control), a searchable product catalog of 14 industrial chemicals, a technical blog, and full contact / WhatsApp / Telegram inquiry flows. The site is bilingual (Persian by default, with an instant client-side language switch to English), mobile-first, accessible, and ships with embedded JSON fallbacks so it can be opened directly from the file system (`file://`) without a web server. There is **no build step, no framework, no package manager** — every file is plain HTML/CSS/JS that runs as-is in any modern browser.

> **نمای کلی پروژه** — این مخزن شامل وب‌سایت شرکت پتروپالایش خاور صدرا است؛ یک سایت استاتیک دوزبانه (فارسی/انگلیسی) برای معرفی خدمات، کاتالوگ محصولات شیمیایی صنعتی، وبلاگ فنی و راه‌های ارتباطی. بدون فریم‌ورک، بدون مرحله بیلد، و قابل اجرا مستقیم از سیستم فایل.

---

## 2. How to Run

The site is **pure static HTML** — there is no build step and no server-side runtime required. Pick any of the following options:

### Option A — Quick local server (recommended)

From the project root:

```bash
python3 -m http.server 8080
```

Then open **<http://localhost:8080/>** in your browser.

### Option B — VS Code Live Server

Install the **"Live Server"** extension by Ritwick Dey, right-click `index.html` → **"Open with Live Server"**. The page reloads automatically when you save a file.

### Option C — Any web server

Nginx, Apache, Caddy, `php -S`, `npx serve`, `npx http-server`, etc. — point the document root at this folder and serve. No special MIME types or rewrite rules are needed.

### Option D — Open files directly via `file://`

You can also double-click `index.html` (or any other page) to open it directly in the browser without any server. The site ships with two **fallback JavaScript bundles** (`assets/js/i18n-fallback.js` and `assets/js/data-fallback.js`) that embed the JSON data inline, so translations, products, and blog posts still load when `fetch()` is blocked by the `file://` protocol. To enable this, include those two `<script>` tags in each HTML page (before `i18n.js` and `main.js` respectively) — see [§4 File structure](#4-file-structure) and the header comments inside each fallback file for the exact `<script>` order.

> **نحوه اجرا** — سایت کاملاً استاتیک است؛ ساده‌ترین راه اجرای `python3 -m http.server 8080` در پوشهٔ ریشه و باز کردن `http://localhost:8080/` است. همچنین می‌توانید فایل‌ها را مستقیماً با `file://` باز کنید؛ فایل‌های fallback جاوااسکریپتی امکان بارگذاری داده‌ها را بدون سرور فراهم می‌کنند.

---

## 3. File Structure

```
khavarsadra-website/
├── index.html                       # Home page (hero, services overview, featured products, latest posts, CTA)
├── about.html                       # About / company history, mission, values, team, certifications
├── contact.html                     # Contact page (form, WhatsApp/Telegram/phone/email, map, hours)
├── products.html                    # Product catalog with category filter + search
├── product.html                     # Single product detail (?slug=…) — specs, packaging, safety, FAQ
├── blog.html                        # Blog index with category filter + featured post
├── post.html                        # Single blog post (?slug=…) — TOC, content, tags, related
├── 404.html                         # Custom 404 Not Found page
├── sitemap.xml                      # XML sitemap (12 pages + alternates) for search engines
├── robots.txt                       # Robots directives (allows all, disallows /assets/data/)
├── README.md                        # This file
├── worklog.md                       # Development log (per-task entries)
│
├── services/                        # Service detail pages (subfolder)
│   ├── supply.html                  # Industrial Chemicals Supply & Distribution
│   ├── trading.html                 # Trading, Import & Customs Clearance
│   ├── consulting.html              # Technical Consulting & Grade Selection
│   └── quality-control.html         # Quality Control, Laboratory & Packaging
│
├── assets/
│   ├── css/
│   │   └── custom.css               # All custom styles (design tokens, components, page styles)
│   │
│   ├── js/
│   │   ├── config.js                # Central site config (brand, contact, social, SEO) — EDIT THIS
│   │   ├── i18n.js                  # Bilingual i18n engine (load, apply, switch, persist)
│   │   ├── i18n-fallback.js         # Embedded i18n data (for file:// usage) — auto-generated
│   │   ├── data-fallback.js         # Embedded products+posts (for file:// usage) — auto-generated
│   │   ├── main.js                  # Main app: nav, mega-menu, mobile menu, counters, FAQ, tabs,
│   │   │                            #   product/blog rendering, contact form, CTA tracking, Three.js
│   │   │                            #   lazy-load dispatcher, reveal-on-scroll, etc.
│   │   └── three-hero.js            # Three.js molecular-network hero animation (lazy-loaded ES module)
│   │
│   └── data/
│       ├── i18n-fa.json             # Persian UI strings (462 keys)
│       ├── i18n-en.json             # English UI strings (372 keys)
│       ├── products.json            # Product catalog (14 items)
│       └── posts.json               # Blog posts (6 items)
│
└── download/                        # Scratch / generated exports folder (see download/README.md)
```

---

## 4. How to Edit Contact Information

**All contact information lives in a single file: [`assets/js/config.js`](assets/js/config.js).**

Open it and replace every `PLACEHOLDER` / `REPLACE_ME` value inside `window.PPKS_CONFIG`. The whole site reads from this one object — no other file needs to be edited to update phone numbers, socials, address, working hours, etc.

### Placeholders to replace

| Section in `config.js`      | Keys to replace                                                                                          |
| --------------------------- | -------------------------------------------------------------------------------------------------------- |
| `brand`                     | `registrationNo`, `nationalId`                                                                           |
| `contact` (phone/email/etc) | `phone1_*`, `phone2_*`, `mobile_*`, `whatsapp`, `telegram`, `email`, `salesEmail`, `technicalEmail`     |
| `contact` (address)         | `address_fa`, `address_en`, `mapEmbed`, `mapLink`                                                        |
| `contact` (hours)           | `hours_fa`, `hours_en`, `hoursShort_fa`, `hoursShort_en`, `responseNote_fa`, `responseNote_en`          |
| `social`                    | `linkedin`, `instagram`, `telegram`, `whatsapp`, `aparat`                                                |
| `downloads`                 | `catalogFa`, `catalogEn`, `sdsTemplate`                                                                  |
| `site`                      | `url` (production URL — already `https://www.khavarsadra.com`)                                           |

### Example

```js
// Before
contact: {
  whatsapp: '989123456789',                 // ← REPLACE
  email: 'info@khavarsadra.com',            // ← REPLACE
  address_fa: 'تهران، خیابان ولیعصر، ...',
}

// After (your real values)
contact: {
  whatsapp: '989111223344',
  email: 'sales@khavarsadra.ir',
  address_fa: 'تهران، خیابان آفریقا، nr 12, طبقه ۵',
}
```

WhatsApp numbers must be in **international format without `+` or spaces** (e.g. `98912...` for Iran). Telegram usernames are written **without the `@`**.

> **ویرایش اطلاعات تماس** — تمام اطلاعات تماس (تلفن، واتساپ، تلگرام، ایمیل، آدرس، ساعات کاری، شبکه‌های اجتماعی، شماره ثبت و شناسه ملی) در یک فایل واحد به نام `assets/js/config.js` قرار دارد. مقادیر `PLACEHOLDER` را با اطلاعات واقعی شرکت جایگزین کنید. سایر فایل‌های پروژه نیازی به تغییر ندارند.

---

## 5. How to Add a New Product

Products are stored in **[`assets/data/products.json`](assets/data/products.json)** — a JSON array. Add a new object to the array. The product appears automatically on `products.html`, in the home page's featured carousel (if `featured: true`), and on its own `product.html?slug=...` detail page.

### Schema

| Field               | Type     | Required | Description                                                                  |
| ------------------- | -------- | -------- | ---------------------------------------------------------------------------- |
| `slug`              | string   | ✅       | URL-safe, unique identifier (used in `?slug=...`). Lowercase, hyphenated.    |
| `name_fa` / `name_en` | string | ✅       | Product name in Persian / English.                                           |
| `formula`           | string   | ✅       | Chemical formula (e.g. `Na₂SiO₃`).                                           |
| `cas`               | string   | ✅       | CAS registry number.                                                         |
| `category`          | string   | ✅       | Category key: `silicates` / `acids` / `polymers` / `gums` / `surfactants`.   |
| `featured`          | boolean  | ✅       | Show in the home page featured carousel.                                     |
| `image`             | string   | ✅       | Hero image URL (Unsplash or local).                                          |
| `short_fa` / `short_en` | string | ✅     | One-line summary for cards.                                                  |
| `description_fa` / `description_en` | string (HTML) | ✅ | Full description (HTML allowed).                                  |
| `applications_fa` / `applications_en` | string[] | ✅ | Array of application strings.                                     |
| `specs`             | object   | ✅       | `{ "purity": "≥98%", "appearance": "white powder", ... }` key/value spec table. |
| `packaging_fa` / `packaging_en` | string (HTML) | ✅ | Packaging description.                                          |
| `safety_fa` / `safety_en` | string (HTML) | ✅ | Safety / handling notes.                                            |
| `_disclaimer`       | string   | ✅       | Disclaimer shown under specs (e.g. "Values are typical, verify per batch."). |
| `gallery`           | string[] | ⛔ optional | Additional image URLs for a gallery section.                              |
| `faq`               | array    | ⛔ optional | `[{ "q_fa", "q_en", "a_fa", "a_en" }, ...]` Q&A pairs for the FAQ section. |
| `related`           | string[] | ⛔ optional | Slugs of related products to show in the "related products" section.      |

### Minimal example

```json
{
  "slug": "sodium-metasilicate",
  "name_fa": "متاسیلیکات سدیم",
  "name_en": "Sodium Metasilicate",
  "formula": "Na₂SiO₃",
  "cas": "6834-92-0",
  "category": "silicates",
  "featured": true,
  "image": "https://images.unsplash.com/photo-...?w=1200",
  "short_fa": "سیلیکات قلیایی پرکاربرد در شوینده و فرآوری صنعتی.",
  "short_en": "Alkaline silicate widely used in detergents and industrial processing.",
  "description_fa": "<p>متاسیلیکات سدیم ...</p>",
  "description_en": "<p>Sodium metasilicate ...</p>",
  "applications_fa": ["شوینده‌های صنعتی", "صنعت رنگ", "فرآوری معدنی"],
  "applications_en": ["Industrial detergents", "Paint industry", "Mineral processing"],
  "specs": { "خلوص": "≥98%", "pH (1٪)": "12.5", "ظاهر": "پودر سفید" },
  "packaging_fa": "<p>کیسه ۲۵ کیلوگرمی با روکش ضد رطوبت.</p>",
  "packaging_en": "<p>25 kg moisture-proof lined bags.</p>",
  "safety_fa": "<p>خورنده؛ از دستکش و عینک استفاده کنید.</p>",
  "safety_en": "<p>Corrosive; wear gloves and goggles.</p>",
  "_disclaimer": "ارقام مشخصات حدودی هستند و باید برای هر محموله تأیید شوند."
}
```

### Notes

- The **`slug`** must be URL-safe (`a-z`, `0-9`, `-`) and **unique** across all products. It becomes the URL: `product.html?slug=your-slug`.
- Optional fields (`gallery`, `faq`, `related`) are only rendered if present.
- For **`file://`** support, also append the same object to the `products` array in [`assets/js/data-fallback.js`](assets/js/data-fallback.js) (see the regen snippet at the top of that file — the simplest workflow is to edit `products.json` and re-run the python one-liner to regenerate the fallback).

> **افزودن محصول جدید** — اشیاء محصولات در `assets/data/products.json` قرار دارند. یک شیء جدید به آرایه اضافه کنید. `slug` باید یکتا و URL-safe باشد. برای پشتیبانی از `file://`، همان شیء را در `assets/js/data-fallback.js` نیز اضافه کنید.

---

## 6. How to Add a New Blog Post

Blog posts are stored in **[`assets/data/posts.json`](assets/data/posts.json)** — a JSON array. Add a new object; it appears automatically on `blog.html` and on its own `post.html?slug=...` detail page.

### Schema

| Field                | Type     | Required | Description                                                        |
| -------------------- | -------- | -------- | ------------------------------------------------------------------ |
| `slug`               | string   | ✅       | URL-safe, unique post identifier (`post.html?slug=...`).           |
| `title_fa` / `title_en` | string | ✅       | Post title in Persian / English.                                  |
| `category`           | string   | ✅       | Category key (e.g. `applications`, `safety`, `industry`).          |
| `date`               | string   | ✅       | ISO date (`YYYY-MM-DD`).                                           |
| `readingTime`        | number   | ✅       | Reading time in minutes (used for the "N min read" chip).          |
| `author` / `author_en` | string | ✅       | Author name (Persian / English).                                   |
| `image`              | string   | ✅       | Cover image URL.                                                   |
| `excerpt_fa` / `excerpt_en` | string | ✅ | Short excerpt for cards / meta description.                  |
| `tags_fa` / `tags_en` | string[] | ✅     | Array of tag strings.                                              |
| `toc_fa` / `toc_en`  | array    | ✅       | Table of contents: `[{ "id": "intro", "label": "مقدمه" }, ...]`. The `id` must match an `id=` on a heading inside `content_*`. |
| `content_fa` / `content_en` | string (HTML) | ✅ | Full HTML article body. Use `<h2 id="...">`, `<p>`, `<ul>`, `<table>`, etc. The TOC `id`s must match. |

### Minimal example

```json
{
  "slug": "sodium-metasilicate-in-detergents",
  "title_fa": "کاربردهای متاسیلیکات سدیم در صنعت شوینده",
  "title_en": "Applications of Sodium Metasilicate in the Detergent Industry",
  "category": "applications",
  "date": "2025-09-12",
  "readingTime": 7,
  "author": "تیم فنی خاور صدرا",
  "author_en": "Khavar Sadra Technical Team",
  "image": "https://images.unsplash.com/photo-...?w=1200",
  "excerpt_fa": "متاسیلیکات سدیم به‌عنوان یک عامل قلیایی و ضدخوردگی در فرمولاسیون شوینده‌ها نقش کلیدی دارد.",
  "excerpt_en": "Sodium metasilicate plays a key role as an alkaline and anti-corrosive agent in detergent formulations.",
  "tags_fa": ["شوینده", "متاسیلیکات سدیم", "فرمولاسیون"],
  "tags_en": ["detergent", "sodium metasilicate", "formulation"],
  "toc_fa": [
    { "id": "intro", "label": "مقدمه" },
    { "id": "mechanism", "label": "مکانیسم عمل" }
  ],
  "toc_en": [
    { "id": "intro", "label": "Introduction" },
    { "id": "mechanism", "label": "Mechanism of action" }
  ],
  "content_fa": "<h2 id=\"intro\">مقدمه</h2><p>...</p><h2 id=\"mechanism\">مکانیسم عمل</h2><p>...</p>",
  "content_en": "<h2 id=\"intro\">Introduction</h2><p>...</p><h2 id=\"mechanism\">Mechanism of action</h2><p>...</p>"
}
```

### Notes

- The **`slug`** must be URL-safe and **unique** across all posts.
- Every `id` in the `toc_*` array must have a matching `id="..."` attribute on a heading inside the corresponding `content_*` HTML, otherwise the TOC anchor links will be dead.
- For **`file://`** support, also append the same object to the `posts` array in [`assets/js/data-fallback.js`](assets/js/data-fallback.js) (or regenerate via the python snippet at the top of that file).

> **افزودن مقاله جدید** — مقالات در `assets/data/posts.json` قرار دارند. یک شیء جدید اضافه کنید؛ `slug` باید یکتا باشد و `id`های فهرست مطالب با `id` عناوین داخل `content_*` تطابق داشته باشند.

---

## 7. How to Add a New Language or Text

The site is bilingual (Persian / English) by default. All UI strings live in two JSON dictionaries:

- [`assets/data/i18n-fa.json`](assets/data/i18n-fa.json) — Persian strings (462 keys)
- [`assets/data/i18n-en.json`](assets/data/i18n-en.json) — English strings (372 keys)

Each entry is a flat `key: value` pair, e.g. `"nav.home": "خانه"` / `"nav.home": "Home"`.

### Using a string in HTML

Add the `data-i18n` attribute to any element, with the value being the dictionary key:

```html
<span data-i18n="nav.home">خانه</span>
<button data-i18n="cta.whatsapp">ثبت سفارش در واتساپ</button>
```

The default Persian text inside the element is shown until `i18n.js` loads, then it is replaced with the translated value. When the user switches to English, all `[data-i18n]` elements are updated in place without a page reload. The `<html lang>` and `dir` attributes are also flipped automatically (`fa`/`rtl` ↔ `en`/`ltr`), as are `<title>`, meta description, and `og:locale`.

Other i18n hooks:
- `data-i18n-attr="placeholder:search_ph,aria-label:search_aria"` — translate attributes
- `data-i18n-count="N"` — inject `{count}` substitution (auto-converted to Persian digits in `fa`)
- `data-i18n-vars='{"name":"X"}'` — `{name}` template substitution

### Adding a new language (e.g. Arabic `ar`)

1. **Copy** `assets/data/i18n-en.json` → `assets/data/i18n-ar.json` and translate every value to Arabic.
2. **Register the language** in [`assets/js/i18n.js`](assets/js/i18n.js) — find the `SUPPORTED` array near the top:
   ```js
   const SUPPORTED = ['fa', 'en'];
   ```
   change to:
   ```js
   const SUPPORTED = ['fa', 'en', 'ar'];
   ```
3. **Add a language switcher button** wherever the existing switcher lives (header + mobile menu), with the matching `data-lang-switch` attribute:
   ```html
   <button data-lang-switch="ar" aria-label="العربية">AR</button>
   ```
4. (Optional) Set `site.defaultLang` in `config.js` if Arabic should be the default.
5. For **`file://`** support, also add the new dictionary to `assets/js/i18n-fallback.js` (or regenerate it via the python snippet at the top of that file).

> **افزودن زبان یا متن جدید** — تمام متن‌های رابط کاربری در `assets/data/i18n-fa.json` و `i18n-en.json` قرار دارند. برای استفاده از یک متن در HTML، ویژگی `data-i18n="key.name"` را به عنصر اضافه کنید. برای افزودن زبان جدید، فایل انگلیسی را کپی کرده، ترجمه کنید، کد زبان را در آرایه `SUPPORTED` در `i18n.js` اضافه کنید و یک دکمه با `data-lang-switch="XX"` قرار دهید.

---

## 8. Dependencies & CDNs

The site uses a small set of CDN-hosted libraries. There is no `package.json` — everything loads from CDNs in each HTML `<head>` / before `</body>`.

| Library                | Version | CDN                                  | Purpose                                              |
| ---------------------- | ------- | ------------------------------------ | ---------------------------------------------------- |
| **Tailwind CSS**       | 3.4.16  | `https://cdn.tailwindcss.com/3.4.16` | Utility-first CSS framework (loaded as a runtime CDN script) |
| **GSAP**               | 3.12.5  | cdnjs (`gsap.min.js`)                | Animation engine (scroll-reveal, counters)           |
| **GSAP ScrollTrigger** | 3.12.5  | cdnjs (`ScrollTrigger.min.js`)       | Scroll-driven animations                             |
| **anime.js**           | 3.2.2   | cdnjs (`anime.min.js`)               | Lightweight number/attribute animation (counters)    |
| **Three.js**           | 0.160.0 | jsdelivr (`three.module.min.js`)     | WebGL molecular-network hero animation (lazy-loaded ES module from `assets/js/three-hero.js`) |

**Fonts** (Google Fonts):
- **Vazirmatn** (weights 400–800) — Persian/Latin UI font
- **Inter** (weights 400–800) — Latin UI font (English)

```html
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

> **وابستگی‌ها و CDNها** — سایت از Tailwind CSS 3.4.16، GSAP 3.12.5 به‌همراه ScrollTrigger، anime.js 3.2.2 و Three.js 0.160.0 استفاده می‌کند. فونت‌ها Vazirmatn و Inter از Google Fonts هستند.

---

## 9. Browser Support

The site targets **modern evergreen browsers** — the latest 2 versions of:

- Google Chrome / Chromium
- Mozilla Firefox
- Apple Safari (macOS + iOS)
- Microsoft Edge

Features used that require modern browsers: ES2020+ JavaScript, CSS custom properties, CSS Grid / Flexbox, `aspect-ratio`, `IntersectionObserver`, `ResizeObserver`, optional chaining, dynamic `import()`, ES modules, `localStorage`. Internet Explorer is **not** supported.

**`file://` protocol:** When opening HTML files directly (no web server), `fetch()` of JSON is blocked by the browser. The site ships with `assets/js/i18n-fallback.js` and `assets/js/data-fallback.js` which embed the data inline, so translations/products/posts still load. Include these two `<script>` tags (in the order shown in [§4](#4-file-structure)) to enable file:// usage.

> **پشتیبانی مرورگر** — آخرین ۲ نسخه از Chrome، Firefox، Safari و Edge. اینترنت اکسپلورر پشتیبانی نمی‌شود. در حالت `file://` فایل‌های fallback جاوااسکریپتی بارگذاری داده‌ها را تضمین می‌کنند.

---

## 10. Performance & Accessibility

- **Mobile-first** layout — every page is designed for small screens first, then progressively enhanced up to wide desktops via Tailwind responsive breakpoints (`sm:`, `md:`, `lg:`, `xl:`).
- **Lazy-loaded Three.js** — the WebGL hero animation is loaded via dynamic `import('three-hero.js')` only on the home page and only after the page is interactive, so it never blocks first paint on other pages.
- **`prefers-reduced-motion`** is respected — GSAP animations and the Three.js hero are disabled/simplified when the user has reduced motion turned on in their OS.
- **ARIA on interactive elements** — the mega menu, mobile menu, FAQ accordion buttons, tabs, language switcher buttons, and mobile CTA bar all carry appropriate `aria-expanded`, `aria-current`, `aria-label`, `aria-pressed`, `role="tab"`/`role="tablist"`/`role="tabpanel"`, etc.
- **Keyboard-navigable mega menu** — the desktop services dropdown opens on focus / Enter, closes on Escape, and arrow keys move between top-level nav items.
- **RTL & LTR** — the entire layout flips correctly between Persian (RTL) and English (LTR) via `dir` on `<html>` and Tailwind's logical-property utilities.
- **Preconnect** to font/CDN origins is set in `<head>` for faster first paint.
- **Semantic HTML** — `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<aside>`, `<figure>` are used throughout.
- **Skip-to-content link** and visible focus styles are present on all interactive elements.
- **Color contrast** targets WCAG AA on all text/body combinations.

> **کارایی و دسترس‌پذیری** — طراحی Mobile-first، بارگذاری تنبل Three.js، احترام به `prefers-reduced-motion`، استفاده از ARIA روی عناصر تعاملی، منوی مگا قابل پیمایش با کیبورد، و پشتیبانی کامل از RTL/LTR.

---

## 11. License & Credits

**Demo project for Petro Palayesh Khavar Sadra.** All imagery is sourced from [Unsplash](https://unsplash.com) (free license). Product data, contact information, social links, and registration numbers are **placeholders** — replace them via `assets/js/config.js` (see [§4](#4-how-to-edit-contact-information)) before deploying to production.

© Petro Palayesh Khavar Sadra. All rights reserved.

> **مجوز و اعتبارات** — این یک پروژهٔ دمو برای پتروپالایش خاور صدرا است. تصاویر از Unsplash گرفته شده‌اند. پیش از استفادهٔ عملیاتی، مقادیر جایگزین (اطلاعات تماس، شبکه‌های اجتماعی، شماره ثبت و...) را در `assets/js/config.js` با اطلاعات واقعی جایگزین کنید.
#   s a d r - v 2  
 