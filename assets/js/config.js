/**
 * PPKS — Petro Palayesh Khavar Sadra
 * Central site configuration.
 *
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │  EDIT CONTACT INFORMATION HERE                                          │
 * │  Replace every "PLACEHOLDER" / "REPLACE_ME" value below with the real   │
 * │  company information. The whole site reads from this single object.     │
 * │  No other file needs to be edited to update phone numbers, socials,    │
 * │  address, working hours, etc.                                          │
 * └──────────────────────────────────────────────────────────────────────────┘
 */
window.PPKS_CONFIG = {
  /* ── Brand ─────────────────────────────────────────────────────────── */
  brand: {
    name_fa: 'پتروپالایش خاور صدرا',
    name_en: 'Petro Palayesh Khavar Sadra',
    short_fa: 'خاور صدرا',
    short_en: 'Khavar Sadra',
    legalName_fa: 'شرکت تأمین و توزیع مواد شیمیایی صنعتی پتروپالایش خاور صدرا',
    legalName_en: 'Khavar Sadra Petro-Refining Industrial Chemicals Supply & Distribution Co.',
    registrationNo: 'PLACEHOLDER-REG-NO',        // ← REPLACE with real registration number
    nationalId: 'PLACEHOLDER-NATIONAL-ID',      // ← REPLACE with real national ID
    description_fa:
      'تأمین‌کننده و توزیع‌کننده تخصصی مواد شیمیایی صنعتی برای صنایع شوینده، رنگ و رزین، نساجی، غذایی، دارویی، ساخت‌وساز و حفاری.',
    description_en:
      'Specialized supplier and distributor of industrial chemicals for the detergent, paint & resin, textile, food, pharmaceutical, construction and drilling industries.',
  },

  /* ── Contact channels ──────────────────────────────────────────────── */
  contact: {
    /* Phone numbers — replace with real ones */
    phone1_fa: '۰۲۱-۲۲۸۸۴۴۰۰',
    phone1_en: '+98 21 2288 4400',
    phone1_tel: '+982122884400',
    phone2_fa: '۰۲۱-۲۲۸۸۴۴۰۱',
    phone2_en: '+98 21 2288 4401',
    phone2_tel: '+982122884401',
    mobile_fa: '۰۹۱۲-۳۴۵۶۷۸۹',
    mobile_en: '+98 912 345 6789',
    mobile_tel: '+989123456789',

    /* WhatsApp — international format, no plus sign, no spaces */
    whatsapp: '989123456789',                   // ← REPLACE

    /* Telegram — username without @ */
    telegram: 'KhavarSadra',                    // ← REPLACE

    /* Email */
    email: 'info@khavarsadra.com',              // ← REPLACE
    salesEmail: 'sales@khavarsadra.com',        // ← REPLACE
    technicalEmail: 'technical@khavarsadra.com',// ← REPLACE

    /* Address */
    address_fa:
      'تهران، خیابان ولیعصر، بالاتر از میدان ونک، برج صنعتی، طبقه ۸، واحد ۸۰۲',
    address_en:
      'Unit 802, 8th Floor, Sanati Tower, Above Vanak Square, Valiasr Street, Tehran, Iran',
    mapEmbed:
      'https://www.openstreetmap.org/export/embed.html?bbox=51.41%2C35.75%2C51.43%2C35.77&layer=mapnik',
    mapLink: 'https://www.openstreetmap.org/?mlat=35.76&mlon=51.42#map=15/35.76/51.42',

    /* Working hours */
    hours_fa: 'شنبه تا چهارشنبه، ۸:۳۰ تا ۱۷:۰۰ — پنجشنبه ۸:۳۰ تا ۱۳:۰۰',
    hours_en: 'Saturday to Wednesday, 8:30–17:00 — Thursday 8:30–13:00',
    hoursShort_fa: '۸:۳۰ - ۱۷:۰۰',
    hoursShort_en: '8:30 – 17:00',
    responseNote_fa: 'پاسخگویی به درخواست‌ها در ساعات کاری انجام می‌شود.',
    responseNote_en: 'Inquiries are answered during working hours.',
  },

  /* ── Social links ──────────────────────────────────────────────────── */
  social: {
    linkedin: 'https://www.linkedin.com/company/khavarsadra',  // ← REPLACE
    instagram: 'https://www.instagram.com/khavarsadra',        // ← REPLACE
    telegram: 'https://t.me/KhavarSadra',                       // ← REPLACE
    whatsapp: 'https://wa.me/989123456789',                     // ← REPLACE
    aparat: 'https://www.aparat.com/khavarsadra',               // ← REPLACE (Iranian video platform)
  },

  /* ── Downloads (placeholders) ──────────────────────────────────────── */
  downloads: {
    catalogFa: '#',   // ← REPLACE with real catalog URL
    catalogEn: '#',
    sdsTemplate: '#', // ← REPLACE with real SDS template URL
  },

  /* ── SEO / Site ────────────────────────────────────────────────────── */
  site: {
    url: 'https://www.khavarsadra.com',         // ← REPLACE with production URL
    defaultLang: 'fa',
    supportedLangs: ['fa', 'en'],
  },

  /* ── Helpers (used across the site) ────────────────────────────────── */
  /**
   * Build a WhatsApp deep link with a pre-filled message.
   * @param {string} message - pre-filled text (will be encoded).
   * @returns {string} full https://wa.me/... URL
   */
  whatsappLink(message) {
    const base = 'https://wa.me/' + this.contact.whatsapp;
    return message ? `${base}?text=${encodeURIComponent(message)}` : base;
  },

  /** Telegram deep link */
  telegramLink() {
    return 'https://t.me/' + this.contact.telegram;
  },

  /** tel: link */
  telLink() {
    return 'tel:' + this.contact.phone1_tel;
  },

  /** mailto: link */
  mailLink(email) {
    return 'mailto:' + (email || this.contact.email);
  },
};

// Freeze to prevent accidental mutation at runtime.
Object.freeze(window.PPKS_CONFIG);
