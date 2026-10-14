/**
 * data-fallback.js — Embedded product & post data for file:// usage.
 *
 * PPKS — Petro Palayesh Khavar Sadra
 *
 * Purpose:
 *   When the site is opened directly via file:// (no web server), browsers
 *   block fetch() of local JSON files (CORS / file protocol restriction).
 *   This file embeds the full content of assets/data/products.json and
 *   posts.json as arrays on window.__PPKS_DATA_FALLBACK__.products and
 *   .posts. assets/js/main.js loadJSON() checks this global FIRST (before
 *   fetch), so products.html / product.html / blog.html / post.html work
 *   identically whether served over http(s):// or opened via file://.
 *
 * How to enable for file:// usage:
 *   Include this script in each HTML page BEFORE assets/js/main.js, e.g.:
 *     <script src="assets/js/config.js"></script>
 *     <script src="assets/js/i18n-fallback.js"></script>   <!-- optional -->
 *     <script src="assets/js/i18n.js"></script>
 *     <script src="assets/js/data-fallback.js"></script>   <!-- fallback -->
 *     ... (gsap, anime, etc.)
 *     <script src="assets/js/main.js" defer></script>
 *   For pages in the /services/ subfolder, use src="../assets/js/data-fallback.js".
 *
 * Regeneration:
 *   This file is auto-generated from the two source JSON files. To regenerate:
 *     python3 -c "import json; p=json.load(open('assets/data/products.json')); \
 *       b=json.load(open('assets/data/posts.json')); \
 *       open('assets/js/data-fallback.js','w').write(
 *         'window.__PPKS_DATA_FALLBACK__ = ' +
 *         json.dumps({'products':p,'posts':b}, ensure_ascii=False, indent=2) + ';\n')"
 *
 * Stats: products=14 items (schema: slug, name_fa, name_en, formula, cas, category, featured, image, gallery, short_fa, short_en, description_fa, description_en, applications_fa, applications_en, specs, packaging_fa, packaging_en, safety_fa, safety_en, _disclaimer, faq),
 *        posts=6 items (schema: slug, title_fa, title_en, category, date, readingTime, author, author_en, image, excerpt_fa, excerpt_en, tags_fa, tags_en, toc_fa, toc_en, content_fa, content_en).
 */
window.__PPKS_DATA_FALLBACK__ = {
  "products": [
  {
    "slug": "sodium-metasilicate",
    "name_fa": "متاسیلیکات سدیم",
    "name_en": "Sodium Metasilicate",
    "formula": "Na₂SiO₃",
    "cas": "6834-92-0",
    "category": "salts_silicates",
    "featured": true,
    "image": "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=900&q=70",
    "gallery": [
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1607998491345-30c4f7e8c8f0?auto=format&fit=crop&w=1200&q=70"
    ],
    "short_fa": "بافر قلیایی، خورنده‌پاک‌کن و عامل کلاته‌کننده در شوینده‌های صنعتی و خانگی.",
    "short_en": "Alkaline buffer, corrosion inhibitor and chelating agent in industrial and household detergents.",
    "description_fa": "متاسیلیکات سدیم نمک سدیم سیلیسیک اسید است که به‌صورت پودر سفید، بی‌بو و بلورین عرضه می‌شود. این ماده در فرمولاسیون شوینده‌های صنعتی و خانگی نقش چندگانه‌ای دارد: بافر قلیایی قوی، کنترل‌کننده سختی آب از طریق کلاته‌کردن یون‌های کلسیم و منیزیم، عامل ضدخوردگی برای قطعات فلزی ماشین‌های ظرفشویی و افزایش‌دهنده قدرت پاک‌کنندگی سورفاکتانت‌ها. در فرمولاسیون صابون‌ها، پاک‌کننده‌های صنعتی، شوینده‌های دستی و ماشین لباسشویی کاربرد گسترده‌ای دارد. خاور صدرا گرید پنتاهیدرات و آنهیدرید این محصول را در بسته‌بندی‌های ۲۵ کیلوگرمی تأمین می‌کند.",
    "description_en": "Sodium metasilicate is the sodium salt of silicic acid, supplied as a white, odorless crystalline powder. It plays multiple roles in industrial and household detergent formulations: strong alkaline buffer, water hardness controller through chelation of calcium and magnesium ions, corrosion inhibitor for metal parts of dishwashers, and booster of surfactant cleaning power. It is widely used in soap formulations, industrial cleaners, hand and machine laundry detergents. Khavar Sadra supplies both pentahydrate and anhydrous grades in 25 kg packaging.",
    "applications_fa": [
      "تولید پودر و مایع ماشین ظرفشویی",
      "شوینده‌های صنعتی و چربی‌پاک‌کن",
      "بافترة قلیایی صابون‌ها و شوینده‌های لباسشویی",
      "عامل ضدخوردگی در سیستم‌های شوینده فلزی",
      "تصفیه آب و کنترل خوردگی در دیگ‌های بخار"
    ],
    "applications_en": [
      "Dishwasher powder and liquid production",
      "Industrial cleaners and degreasers",
      "Alkaline buffer for soaps and laundry detergents",
      "Corrosion inhibitor in metal cleaning systems",
      "Water treatment and boiler corrosion control"
    ],
    "specs": [
      {
        "key_fa": "خلوص (Na₂SiO₃)",
        "value_fa": "حداقل ۹۸٪",
        "key_en": "Purity (Na₂SiO₃)",
        "value_en": "Min. 98%"
      },
      {
        "key_fa": "گرید",
        "value_fa": "پنتاهیدرات / آنهیدرید",
        "key_en": "Grade",
        "value_en": "Pentahydrate / Anhydrous"
      },
      {
        "key_fa": "شکل ظاهری",
        "value_fa": "پودر سفید بلورین",
        "key_en": "Appearance",
        "value_en": "White crystalline powder"
      },
      {
        "key_fa": "pH (محلول ۱٪)",
        "value_fa": "۱۲ تا ۱۳",
        "key_en": "pH (1% solution)",
        "value_en": "12 – 13"
      },
      {
        "key_fa": "بسته‌بندی",
        "value_fa": "کیسه ۲۵ کیلوگرمی",
        "key_en": "Packaging",
        "value_en": "25 kg bag"
      }
    ],
    "packaging_fa": "بسته‌بندی در کیسه‌های پلی‌پروپیلن ۲۵ کیلوگرمی با روکش ضد رطوبت. نگهداری در مکان خشک، خنک و دارای تهویه، دور از رطوبت و اسیدها. حداکثر دمای نگهداری ۳۰ درجه سانتی‌گراد. عمر مفید ۲۴ ماه در شرایط مناسب.",
    "packaging_en": "Packaged in 25 kg polypropylene bags with moisture-proof inner liner. Store in a dry, cool and ventilated place, away from moisture and acids. Maximum storage temperature 30°C. Shelf life 24 months under proper conditions.",
    "safety_fa": "خورنده! تماس با پوست و چشم می‌تواند باعث سوختگی شدید شیمیایی شود. استفاده از دستکش، عینک محافظ و روپوش ضروری است. در صورت تماس با چشم، فوراً ۱۵ دقیقه با آب فراوان شستشو داده و به پزشک مراجعه کنید. دور از دسترس کودکان نگهداری شود. برگه ایمنی کامل (SDS) همراه محصول ارائه می‌شود.",
    "safety_en": "Corrosive! Contact with skin and eyes can cause severe chemical burns. Use of gloves, safety goggles and protective clothing is mandatory. In case of eye contact, rinse immediately with plenty of water for 15 minutes and seek medical attention. Keep out of reach of children. Full Safety Data Sheet (SDS) provided with the product.",
    "_disclaimer": "DEMO VALUES — to be verified by Khavar Sadra technical team before ordering.",
    "faq": [
      {
        "q_fa": "تفاوت گرید پنتاهیدرات و آنهیدرید چیست؟",
        "a_fa": "گرید پنتاهیدرات شامل پنج مولکول آب تبلور است و قلیاییت نسبتاً ملایم‌تری دارد؛ آنهیدرید فاقد آب تبلور، قلیایی‌تر و واکنش‌پذیرتر است. انتخاب بسته به فرمولاسیون و تجهیزات خط تولید است.",
        "q_en": "What is the difference between pentahydrate and anhydrous grade?",
        "a_en": "Pentahydrate grade contains five molecules of water of crystallization and has a relatively milder alkalinity; anhydrous has no water of crystallization, is more alkaline and more reactive. The choice depends on formulation and production line equipment."
      },
      {
        "q_fa": "برای ماشین ظرفشویی صنعتی چه مقدار استفاده می‌شود؟",
        "a_fa": "مقدار مصرف بسته به سختی آب و درجه چربی ظروف متغیر است؛ مقدار دقیق توسط کارشناس فنی خاور صدرا پیشنهاد می‌شود.",
        "q_en": "How much is used for industrial dishwashers?",
        "a_en": "The amount used varies depending on water hardness and grease level; the exact amount is recommended by a Khavar Sadra technical specialist."
      }
    ]
  },
  {
    "slug": "polyvinyl-alcohol-pva",
    "name_fa": "پلی‌وینیل الکل (PVA)",
    "name_en": "Polyvinyl Alcohol (PVA)",
    "formula": "(C₂H₄O)ₙ",
    "cas": "9002-89-5",
    "category": "polymers_resins",
    "featured": true,
    "image": "https://images.unsplash.com/photo-1611123624238-8cfff6c3ac9c?auto=format&fit=crop&w=900&q=70",
    "gallery": [
      "https://images.unsplash.com/photo-1611123624238-8cfff6c3a9c?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1565043589221-994025e2cd1d?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=70"
    ],
    "short_fa": "پلیمر محلول در آب با کاربرد در چسب، پوشش، نساجی و کپسول‌های شوینده.",
    "short_en": "Water-soluble polymer used in adhesives, coatings, textiles and detergent capsules.",
    "description_fa": "پلی‌وینیل الکل (PVA) یک پلیمر سنتزی محلول در آب است که از هیدرولیز پلی‌وینیل استات به دست می‌آید. این ماده به دلیل فیلم‌سازی شفاف، چسبندگی بالا، سازگاری با محیط زیست و قابلیت تجزیه‌پذیری، در صنایع چسب و چسب‌سازی، پوشش‌های محافظ، نساجی (اندازه نخ)، کاغذسازی، چاپ و بسته‌بندی فیلم‌های محلول در آب استفاده می‌شود. گریدهای مختلف PVA با درجه هیدرولیز و ویسکوزیته متفاوت عرضه می‌شوند و انتخاب گرید به کاربرد نهایی بستگی دارد. خاور صدرا گریدهای کاملاً هیدرولیز و parcial هیدرولیز را تأمین می‌کند.",
    "description_en": "Polyvinyl alcohol (PVA) is a synthetic water-soluble polymer produced by hydrolysis of polyvinyl acetate. Due to its clear film-forming, high adhesion, environmental compatibility and biodegradability, it is used in adhesive and glue manufacturing, protective coatings, textiles (yarn sizing), papermaking, printing and water-soluble film packaging. Different PVA grades are available with varying degrees of hydrolysis and viscosity, and grade selection depends on the end application. Khavar Sadra supplies both fully hydrolyzed and partially hydrolyzed grades.",
    "applications_fa": [
      "تولید چسب‌های چوب، کاغذ و بسته‌بندی",
      "اندازه‌کردن نخ در نساجی (sizing)",
      "تولید فیلم‌های محلول در آب (کپسول شوینده)",
      "پوشش‌های محافظ و رنگ‌های پایه آب",
      "چسب‌سازی صنعتی و چاپ"
    ],
    "applications_en": [
      "Wood, paper and packaging adhesive production",
      "Yarn sizing in textiles",
      "Water-soluble film production (detergent capsules)",
      "Protective coatings and water-based paints",
      "Industrial adhesives and printing"
    ],
    "specs": [
      {
        "key_fa": "درجه هیدرولیز",
        "value_fa": "۸۷ تا ۸۹٪ / ۹۸ تا ۹۹٪",
        "key_en": "Hydrolysis degree",
        "value_en": "87–89% / 98–99%"
      },
      {
        "key_fa": "ویسکوزیته (۴٪، ۲۰°C)",
        "value_fa": "۲۰ تا ۵۰ سانتی‌پواز",
        "key_en": "Viscosity (4%, 20°C)",
        "value_en": "20–50 cP"
      },
      {
        "key_fa": "گرید",
        "value_fa": "صنعتی / دارویی",
        "key_en": "Grade",
        "value_en": "Industrial / Pharma"
      },
      {
        "key_fa": "شکل ظاهری",
        "value_fa": "پودر سفید تا کرم",
        "key_en": "Appearance",
        "value_en": "White to cream powder"
      },
      {
        "key_fa": "بسته‌بندی",
        "value_fa": "کیسه ۲۵ کیلوگرمی",
        "key_en": "Packaging",
        "value_en": "25 kg bag"
      }
    ],
    "packaging_fa": "بسته‌بندی در کیسه‌های چندلایه کاغذی ۲۵ کیلوگرمی با روکش پلی‌اتیلن. نگهداری در محل خشک، خنک و دور از تابش مستقیم خورشید. رطوبت محیط باید زیر ۶۰٪ باشد. عمر مفید ۲۴ ماه.",
    "packaging_en": "Packaged in 25 kg multi-layer paper bags with polyethylene inner liner. Store in a dry, cool place away from direct sunlight. Ambient humidity should be below 60%. Shelf life 24 months.",
    "safety_fa": "کم‌خطر در شرایط عادی کاربرد. در صورت inhalation پودر، ممکن است باعث تحریک خفیف دستگاه تنفسی شود. استفاده از ماسک ضد گرد و غبار در هنگام جابجایی توصیه می‌شود. تماس با چشم را با آب شستشو دهید. اطلاعات کامل در SDS.",
    "safety_en": "Low hazard under normal handling conditions. Inhalation of powder may cause mild respiratory irritation. A dust mask is recommended during handling. Rinse eye contact with water. Full details in SDS.",
    "_disclaimer": "DEMO VALUES — to be verified by Khavar Sadra technical team before ordering.",
    "faq": [
      {
        "q_fa": "گرید کاملاً هیدرولیز و پاره‌ای هیدرولیز چه تفاوتی دارند؟",
        "a_fa": "گرید کاملاً هیدرولیز (۹۸٪+) مقاومت به آب و فیلم سخت‌تری ایجاد می‌کند و برای کاربردهایی که نیاز به مقاومت بالاست مناسب است. گرید پاره‌ای هیدرولیز (۸۷–۸۹٪) انعطاف‌پذیرتر و برای چسب‌ها و کپسول‌های شوینده معمول است.",
        "q_en": "What is the difference between fully and partially hydrolyzed grades?",
        "a_en": "Fully hydrolyzed grade (98%+) provides water resistance and harder film, suitable for applications requiring high durability. Partially hydrolyzed grade (87–89%) is more flexible and is commonly used in adhesives and detergent capsules."
      }
    ]
  },
  {
    "slug": "sulfonic-acid-labsa",
    "name_fa": "اسید سولفونیک پودری (LABSA)",
    "name_en": "Powdered Sulfonic Acid (LABSA)",
    "formula": "C₁₈H₃₀O₃S",
    "cas": "27176-87-0",
    "category": "surfactants",
    "featured": true,
    "image": "https://images.unsplash.com/photo-1607998491335-30c4f7e8c8f0?auto=format&fit=crop&w=900&q=70",
    "gallery": [
      "https://images.unsplash.com/photo-1607998491335-30c4f7e8c8f0?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1565043589221-994025e2cd1d?auto=format&fit=crop&w=1200&q=70"
    ],
    "short_fa": "سورفاکتانت آنیونی پایه برای تولید مایع و پودر شوینده و خمیر صابون.",
    "short_en": "Anionic surfactant base for liquid and powder detergents and soap paste.",
    "description_fa": "اسید سولفونیک لینیر آلکیل بنزن (LABSA) یکی از پرکاربردترین سورفاکتانت‌های آنیونی در صنعت شوینده است. این ماده از سولفوناسیون اسید لینیر آلکیل بنزن تولید می‌شود و به‌عنوان ماده فعال سطحی پایه در اکثر پودر و مایع شوینده‌های خانگی و صنعتی، خمیر صابون، شوینده‌های ظرفشویی و تمیزکننده‌های صنعتی استفاده می‌شود. فرم پودری آن برای فرمولاسیون پودرها و حمل آسان‌تر مناسب است. خاور صدرا گرید ۹۶٪ فعال را تأمین می‌کند.",
    "description_en": "Linear alkyl benzene sulfonic acid (LABSA) is one of the most widely used anionic surfactants in the detergent industry. It is produced by sulfonation of linear alkyl benzene and is used as the base surfactant in most household and industrial powder and liquid detergents, soap paste, dishwashing detergents and industrial cleaners. Its powder form is suitable for powder formulations and easier transport. Khavar Sadra supplies the 96% active grade.",
    "applications_fa": [
      "تولید پودر و مایع لباسشویی و ظرفشویی",
      "خمیر صابون و صابون‌های صنعتی",
      "شوینده‌های صنعتی و چربی‌پاک‌کن",
      "شامپوهای صنعتی و خانگی پایه سولفونات",
      "امولسی‌فایر در صنایع مختلف"
    ],
    "applications_en": [
      "Laundry and dishwashing powder and liquid production",
      "Soap paste and industrial soaps",
      "Industrial cleaners and degreasers",
      "Industrial and household sulfonate-based shampoos",
      "Emulsifier in various industries"
    ],
    "specs": [
      {
        "key_fa": "ماده فعال",
        "value_fa": "حداقل ۹۶٪",
        "key_en": "Active matter",
        "value_en": "Min. 96%"
      },
      {
        "key_fa": "اسید آزاد (H₂SO₄)",
        "value_fa": "حداکثر ۱.۵٪",
        "key_en": "Free acid (H₂SO₄)",
        "value_en": "Max. 1.5%"
      },
      {
        "key_fa": "رنگ کریزن (5%活性)",
        "value_fa": "حداکثر ۳۰",
        "key_en": "Klett color (5% active)",
        "value_en": "Max. 30"
      },
      {
        "key_fa": "آب",
        "value_fa": "حداکثر ۱.۵٪",
        "key_en": "Water",
        "value_en": "Max. 1.5%"
      },
      {
        "key_fa": "بسته‌بندی",
        "value_fa": "کیسه ۲۵ کیلوگرمی",
        "key_en": "Packaging",
        "value_en": "25 kg bag"
      }
    ],
    "packaging_fa": "بسته‌بندی در کیسه پلی‌پروپیلن ۲۵ کیلوگرمی با روکش ضد رطوبت. نگهداری در محیط خشک، خنک، دارای تهویه و دور از اکسیدکننده‌ها. عمر مفید ۱۲ ماه در شرایط مناسب.",
    "packaging_en": "Packaged in 25 kg polypropylene bags with moisture-proof liner. Store in a dry, cool, ventilated environment away from oxidizers. Shelf life 12 months under proper conditions.",
    "safety_fa": "اسید! خورنده پوست و چشم. تماس باعث سوختگی شدید می‌شود. استفاده از دستکش اسیدپروپیل، عینک محافظ و روپوش کامل الزامی است. در صورت تماس با پوست، فوراً با آب فراوان بشویید. در صورت inhalation بخارات، به هوای تازه منتقل شوید. اطلاعات کامل در SDS.",
    "safety_en": "Acid! Corrosive to skin and eyes. Contact causes severe burns. Acid-resistant gloves, safety goggles and full protective clothing are mandatory. In case of skin contact, rinse immediately with plenty of water. In case of vapor inhalation, move to fresh air. Full details in SDS.",
    "_disclaimer": "DEMO VALUES — to be verified by Khavar Sadra technical team before ordering.",
    "faq": [
      {
        "q_fa": "تفاوت فرم پودری و مایع چیست؟",
        "a_fa": "فرم مایع رایج‌تر و برای تولید مایعات مناسب است؛ فرم پودری برای فرمولاسیون پودرها، حمل مسافت‌های طولانی و انبارش آسان‌تر مناسب است. فعالیت سورفاکتانتی در هر دو یکسان است.",
        "q_en": "What is the difference between powder and liquid form?",
        "a_en": "The liquid form is more common and suitable for liquid production; the powder form is suitable for powder formulations, long-distance transport and easier storage. Surfactant activity is the same in both."
      }
    ]
  },
  {
    "slug": "industrial-phosphoric-acid",
    "name_fa": "اسید فسفریک صنعتی",
    "name_en": "Industrial Phosphoric Acid",
    "formula": "H₃PO₄",
    "cas": "7664-38-2",
    "category": "acids",
    "featured": true,
    "image": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=70",
    "gallery": [
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1607998491335-30c4f7e8c8f0?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=70"
    ],
    "short_fa": "اسید معدنی متوسط برای شوینده، تصفیه آب، فلزکاری و صنایع غذایی (گرید مجاز).",
    "short_en": "Medium-strength mineral acid for detergents, water treatment, metalworking and food-grade uses.",
    "description_fa": "اسید فسفریک یکی از مهم‌ترین اسیدهای معدنی صنعت است که در گرید ۸۵٪ صنعتی عرضه می‌شود. این ماده در فرمولاسیون شوینده‌های صنعتی (به‌ویژه شوینده‌های اسیدی و ضدعفونی‌کننده‌ها)، تصفیه آب به‌عنوان تنظیم‌کننده pH و ضدرسوب، فلزکاری (فسفاته کردن فلز، آنودیzing آلومینیوم)، تولید کود فسفاته، و در گرید غذایی به‌عنوان اسیدی‌کننده و طعم‌دهنده کاربرد دارد. خاور صدرا گرید ۸۵٪ صنعتی و گرید غذایی (Food Grade) را تأمین می‌کند.",
    "description_en": "Phosphoric acid is one of the most important industrial mineral acids, supplied in 85% industrial grade. It is used in industrial detergent formulations (especially acidic cleaners and disinfectants), water treatment as pH adjuster and anti-scaling agent, metalworking (metal phosphating, aluminum anodizing), phosphate fertilizer production, and in food grade as acidulant and flavoring agent. Khavar Sadra supplies 85% industrial grade and Food Grade.",
    "applications_fa": [
      "شوینده‌های اسیدی و ضدعفونی‌کننده‌ها",
      "تصفیه آب و کنترل pH",
      "فسفاته‌کردن فلز و آندایزینگ آلومینیوم",
      "تولید کودهای فسفاته",
      "صنایع غذایی (فقط گرید Food Grade)"
    ],
    "applications_en": [
      "Acidic detergents and disinfectants",
      "Water treatment and pH control",
      "Metal phosphating and aluminum anodizing",
      "Phosphate fertilizer production",
      "Food industry (Food Grade only)"
    ],
    "specs": [
      {
        "key_fa": "غلظت (H₃PO₄)",
        "value_fa": "حداقل ۸۵٪",
        "key_en": "Concentration (H₃PO₄)",
        "value_en": "Min. 85%"
      },
      {
        "key_fa": "گرید",
        "value_fa": "صنعتی / Food Grade",
        "key_en": "Grade",
        "value_en": "Industrial / Food Grade"
      },
      {
        "key_fa": "رنگ",
        "value_fa": "بی‌رنگ تا زرد کمرنگ",
        "key_en": "Color",
        "value_en": "Colorless to pale yellow"
      },
      {
        "key_fa": "چگالی",
        "value_fa": "حدود ۱.۶۸ گرم بر سانتی‌متر مکعب",
        "key_en": "Density",
        "value_en": "~1.68 g/cm³"
      },
      {
        "key_fa": "بسته‌بندی",
        "value_fa": "بشکه ۳۵ کیلوگرمی / IBC",
        "key_en": "Packaging",
        "value_en": "35 kg drum / IBC"
      }
    ],
    "packaging_fa": "بسته‌بندی در بشکه‌های پلی‌اتیلن ۳۵ کیلوگرمی یا تانک IBC. نگهداری در محیط خشک و خنک، دور از فلزات، بازارها و مواد آلی. از تماس با ظروف فلزی (به‌جز فولاد ضدزنگ) خودداری کنید. عمر مفید ۱۲ ماه.",
    "packaging_en": "Packaged in 35 kg polyethylene drums or IBC tanks. Store in a dry, cool environment away from metals, alkalis and organic materials. Avoid contact with metal containers (except stainless steel). Shelf life 12 months.",
    "safety_fa": "اسید متوسط! خورنده. تماس با پوست و چشم باعث سوختگی شیمیایی می‌شود. استفاده از تجهیزات محافظ فردی کامل الزامی است. در صورت تماس، ۱۵ دقیقه با آب فراوان شستشو دهید. نگهداری دور از بازارها و اکسیدکننده‌های قوی. اطلاعات کامل در SDS.",
    "safety_en": "Medium acid! Corrosive. Contact with skin and eyes causes chemical burns. Use of full personal protective equipment is mandatory. In case of contact, rinse with plenty of water for 15 minutes. Store away from alkalis and strong oxidizers. Full details in SDS.",
    "_disclaimer": "DEMO VALUES — to be verified by Khavar Sadra technical team before ordering.",
    "faq": [
      {
        "q_fa": "گرید غذایی و صنعتی چه تفاوتی دارند؟",
        "a_fa": "گرید غذایی (Food Grade) خلوص بالاتر و محدودیت سخت‌گیرانه‌ای برای ناخالصی‌های فلز سنگین (آرسنیک، سرب و...) دارد و برای مصرف انسانی مجاز است. گرید صنعتی فقط برای مصارف غیرغذایی استفاده می‌شود.",
        "q_en": "What is the difference between food grade and industrial grade?",
        "a_en": "Food grade has higher purity and strict limits for heavy metal impurities (arsenic, lead, etc.) and is approved for human consumption. Industrial grade is used only for non-food applications."
      }
    ]
  },
  {
    "slug": "xanthan-gum-china",
    "name_fa": "صمغ زانتان (گرید چین)",
    "name_en": "Xanthan Gum (China grade)",
    "formula": "C₃₅H₄₉O₂₉",
    "cas": "11138-66-2",
    "category": "gums_additives",
    "featured": true,
    "image": "https://images.unsplash.com/photo-1565043589221-994025e2cd1d?auto=format&fit=crop&w=900&q=70",
    "gallery": [
      "https://images.unsplash.com/photo-1565043589221-994025e2cd1d?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1611123624238-8cfff6c3a9c?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=70"
    ],
    "short_fa": "قوام‌دهنده و تثبیت‌کننده میکروبی پلی‌ساکارید با کاربرد در غذا، آرایشی و گل حفاری.",
    "short_en": "Microbial polysaccharide thickener and stabilizer for food, cosmetics and drilling mud.",
    "description_fa": "صمغ زانتان یک پلی‌ساکارید میکروبی است که توسط تخمیر باکتری Xanthomonas campestris تولید می‌شود. این ماده به دلیل خاصیت قوام‌دهندگی قوی، سازگاری با محدوده وسیع دما و pH، و رفتار رئولوژیک پلاستیک (برشی)، در صنایع غذایی (سس‌ها، لبنیات، نوشیدنی‌ها)، آرایشی و بهداشتی (کرم‌ها، ژل‌ها، خمیردندان)، دارویی، و در گل حفاری به‌عنوان کنترل‌کننده ویسکوزیته کاربرد گسترده‌ای دارد. خاور صدرا گرید چینی این محصول را با قیمت رقابتی و کیفیت پایدار تأمین می‌کند.",
    "description_en": "Xanthan gum is a microbial polysaccharide produced by fermentation of the bacterium Xanthomonas campestris. Due to its strong thickening property, compatibility with a wide temperature and pH range, and plastic (shear-thinning) rheological behavior, it is widely used in food industries (sauces, dairy, beverages), cosmetics and personal care (creams, gels, toothpaste), pharmaceuticals, and in drilling mud as a viscosity controller. Khavar Sadra supplies the Chinese grade with competitive pricing and stable quality.",
    "applications_fa": [
      "تثبیت‌کننده و قوام‌دهنده در سس‌ها و لبنیات",
      "گل حفاری نفت و گاز (کنترل ویسکوزیته)",
      "کرم‌ها و ژل‌های آرایشی و بهداشتی",
      "محصولات دارویی و مکمل‌ها",
      "رنگ‌ها و پوشش‌های پایه آب"
    ],
    "applications_en": [
      "Stabilizer and thickener in sauces and dairy",
      "Oil & gas drilling mud (viscosity control)",
      "Cosmetic and personal care creams and gels",
      "Pharmaceutical products and supplements",
      "Water-based paints and coatings"
    ],
    "specs": [
      {
        "key_fa": "خلوص",
        "value_fa": "حداقل ۹۱٪",
        "key_en": "Purity",
        "value_en": "Min. 91%"
      },
      {
        "key_fa": "گرید",
        "value_fa": "صنعتی (چین) / Food Grade قابل تأمین",
        "key_en": "Grade",
        "value_en": "Industrial (China) / Food Grade available"
      },
      {
        "key_fa": "ویسکوزیته (۱٪ محلول)",
        "value_fa": "۱۲۰۰ تا ۱۷۰۰ سانتی‌پواز",
        "key_en": "Viscosity (1% solution)",
        "value_en": "1200–1700 cP"
      },
      {
        "key_fa": "شکل ظاهری",
        "value_fa": "پودر سفید تا کمرنگ",
        "key_en": "Appearance",
        "value_en": "White to off-white powder"
      },
      {
        "key_fa": "بسته‌بندی",
        "value_fa": "کیسه ۲۵ کیلوگرمی",
        "key_en": "Packaging",
        "value_en": "25 kg bag"
      }
    ],
    "packaging_fa": "بسته‌بندی در کیسه‌های چندلایه کاغذی ۲۵ کیلوگرمی با روکش پلی‌اتیلن. نگهداری در محل خشک، خنک و دور از تابش مستقیم خورشید. رطوبت محیط زیر ۶۰٪. عمر مفید ۲۴ ماه.",
    "packaging_en": "Packaged in 25 kg multi-layer paper bags with polyethylene inner liner. Store in a dry, cool place away from direct sunlight. Ambient humidity below 60%. Shelf life 24 months.",
    "safety_fa": "کم‌خطر. در شرایط عادی کاربرد ایمن است. inhalation پودر ممکن است باعث تحریک خفیف تنفسی شود. استفاده از ماسک ضد گرد و غبار در هنگام جابجایی توصیه می‌شود. اطلاعات کامل در SDS.",
    "safety_en": "Low hazard. Safe to handle under normal conditions. Powder inhalation may cause mild respiratory irritation. A dust mask is recommended during handling. Full details in SDS.",
    "_disclaimer": "DEMO VALUES — to be verified by Khavar Sadra technical team before ordering.",
    "faq": [
      {
        "q_fa": "تفاوت زانتان چینی با اروپایی چیست؟",
        "a_fa": "هر دو از همان باکتری تولید می‌شوند و مشخصات کلی مشابهی دارند. زانتان چینی به دلیل مزیت قیمت در صنایع غیرغذایی و گل حفاری رایج است. برای کاربردهای حساس دارویی و غذایی، گرید اروپایی یا آمریکایی قابل تأمین است.",
        "q_en": "What is the difference between Chinese and European xanthan?",
        "a_en": "Both are produced by the same bacterium and have similar general specifications. Chinese xanthan is common in non-food industries and drilling muds due to its price advantage. For sensitive pharmaceutical and food applications, European or American grades can be supplied."
      }
    ]
  },
  {
    "slug": "caustic-soda-flakes",
    "name_fa": "سود سوزآور پرک (NaOH)",
    "name_en": "Caustic Soda Flakes (NaOH)",
    "formula": "NaOH",
    "cas": "1310-73-2",
    "category": "salts_silicates",
    "featured": true,
    "image": "https://images.unsplash.com/photo-1607998491335-30c4f7e8c8f0?auto=format&fit=crop&w=900&q=70",
    "gallery": [
      "https://images.unsplash.com/photo-1607998491335-30c4f7e8c8f0?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=70"
    ],
    "short_fa": "باز قوی پرکاربرد در صنایع شیمیایی، شوینده، نساجی، آلومینیوم و تصفیه آب.",
    "short_en": "Strong base widely used in chemicals, detergents, textiles, aluminum and water treatment.",
    "description_fa": "سود سوزآور (هیدروکسید سدیم) یکی از پایه‌ای‌ترین مواد شیمیایی صنعتی است که به‌صورت پرک سفید، بی‌بو و بسیار خورنده عرضه می‌شود. این ماده در صنایع شوینده (ساپونیفیکاسیون چربی‌ها به صابون)، خمیر و کاغذ، نساجی (مرسریزاسیون پنبه)، آلومینیوم (تصفیه بوکسیت)، شیمیایی (تولید سورفاکتانت‌ها، فنل‌ها، اپوکسی)، تصفیه آب (تنظیم pH) و پتروشیمی کاربرد بنیادی دارد. خاور صدرا گرید ۹۹٪ پرک را در بسته‌بندی‌های ۲۵ کیلوگرمی تأمین می‌کند.",
    "description_en": "Caustic soda (sodium hydroxide) is one of the most fundamental industrial chemicals, supplied as white, odorless, highly corrosive flakes. It is essential in detergent industries (saponification of fats into soap), pulp and paper, textiles (cotton mercerization), aluminum (bauxite refining), chemicals (production of surfactants, phenols, epoxy), water treatment (pH adjustment) and petrochemicals. Khavar Sadra supplies 99% flake grade in 25 kg packaging.",
    "applications_fa": [
      "ساپونیفیکاسیون و تولید صابون و شوینده",
      "مرسریزاسیون پنبه در نساجی",
      "تصفیه بوکسیت در صنعت آلومینیوم",
      "تولید خمیر کاغذ و پرکننده‌ها",
      "تنظیم pH در تصفیه آب و پساب"
    ],
    "applications_en": [
      "Saponification and soap/detergent production",
      "Cotton mercerization in textiles",
      "Bauxite refining in aluminum industry",
      "Pulp and filler production",
      "pH adjustment in water and wastewater treatment"
    ],
    "specs": [
      {
        "key_fa": "خلوص (NaOH)",
        "value_fa": "حداقل ۹۹٪",
        "key_en": "Purity (NaOH)",
        "value_en": "Min. 99%"
      },
      {
        "key_fa": "سدیم کربنات (Na₂CO₃)",
        "value_fa": "حداکثر ۰.۵٪",
        "key_en": "Sodium carbonate (Na₂CO₃)",
        "value_en": "Max. 0.5%"
      },
      {
        "key_fa": "کلرید سدیم (NaCl)",
        "value_fa": "حداکثر ۰.۰۲٪",
        "key_en": "Sodium chloride (NaCl)",
        "value_en": "Max. 0.02%"
      },
      {
        "key_fa": "شکل ظاهری",
        "value_fa": "پرک سفید",
        "key_en": "Appearance",
        "value_en": "White flakes"
      },
      {
        "key_fa": "بسته‌بندی",
        "value_fa": "کیسه ۲۵ کیلوگرمی",
        "key_en": "Packaging",
        "value_en": "25 kg bag"
      }
    ],
    "packaging_fa": "بسته‌بندی در کیسه‌های پلی‌پروپیلن ۲۵ کیلوگرمی با دو روکش پلاستیکی ضد رطوبت. نگهداری در محیط کاملاً خشک، خنک و دارای تهویه، دور از اسیدها، فلزات و مواد آلی. عمر مفید ۱۲ ماه در شرایط مناسب.",
    "packaging_en": "Packaged in 25 kg polypropylene bags with two moisture-proof plastic liners. Store in a completely dry, cool, ventilated environment away from acids, metals and organic materials. Shelf life 12 months under proper conditions.",
    "safety_fa": "باز قوی و به شدت خورنده! تماس با پوست و چشم باعث سوختگی شدید شیمیایی و آسیب دائمی می‌شود. واکنش با آب شدیداً گرمازا است. استفاده از تجهیزات محافظ فردی کامل (دستکش لاستیکی، عینک، روپوش، کفش ایمن) الزامی است. در صورت تماس، فوراً و طولانی با آب شستشو دهید. اطلاعات کامل در SDS.",
    "safety_en": "Strong base and highly corrosive! Contact with skin and eyes causes severe chemical burns and permanent damage. Reaction with water is highly exothermic. Use of full personal protective equipment (rubber gloves, goggles, suit, safety shoes) is mandatory. In case of contact, rinse immediately and extensively with water. Full details in SDS.",
    "_disclaimer": "DEMO VALUES — to be verified by Khavar Sadra technical team before ordering.",
    "faq": [
      {
        "q_fa": "پرک و مایع چه تفاوتی دارند؟",
        "a_fa": "گرید پرک معمولاً ۹۸ تا ۹۹٪ خلوص دارد و حمل و انبارش آسان‌تری دارد. گرید مایع معمولاً ۵۰٪ خلوص دارد و برای خطوطی که پمپاژ دارند مناسب است. انتخاب بسته به تجهیزات خط تولید است.",
        "q_en": "What is the difference between flakes and liquid?",
        "a_en": "Flake grade is typically 98–99% pure and easier to transport and store. Liquid grade is typically 50% pure and suitable for lines with pumping. The choice depends on production line equipment."
      }
    ]
  },
  {
    "slug": "citric-acid",
    "name_fa": "اسید سیتریک",
    "name_en": "Citric Acid",
    "formula": "C₆H₈O₇",
    "cas": "77-92-9",
    "category": "acids",
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=900&q=70",
    "gallery": [
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1565043589221-994025e2cd1d?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1607998491335-30c4f7e8c8f0?auto=format&fit=crop&w=1200&q=70"
    ],
    "short_fa": "اسید آلی ضعیف با کاربرد در صنایع غذایی، آرایشی، شوینده و تصفیه آب.",
    "short_en": "Weak organic acid used in food, cosmetics, detergents and water treatment.",
    "description_fa": "اسید سیتریک یک اسید آلی ضعیف است که به‌طور طبیعی در مرکبات یافت می‌شود و به‌صورت صنعتی از تخمیر ملاس تولید می‌گردد. این ماده در گرید آنهیدرید و مونوهیدرات عرضه می‌شود. کاربردهای اصلی آن در صنایع غذایی (اسیدی‌کننده، طعم‌دهنده، نگهدارنده)، نوشیدنی‌ها، آرایشی و بهداشتی (تنظیم pH، کلاته‌کننده)، شوینده‌ها (جرم‌گیر و ضدرسوب)، دارویی و تصفیه آب است. خاور صدرا گرید Food Grade و Industrial را تأمین می‌کند.",
    "description_en": "Citric acid is a weak organic acid naturally found in citrus fruits and industrially produced by fermentation of molasses. It is supplied in anhydride and monohydrate grades. Its main applications are in food industries (acidulant, flavoring, preservative), beverages, cosmetics and personal care (pH adjuster, chelating agent), detergents (descaler and anti-scaling), pharmaceuticals and water treatment. Khavar Sadra supplies Food Grade and Industrial grades.",
    "applications_fa": [
      "اسیدی‌کننده و نگهدارنده در نوشیدنی و غذای فرآوری‌شده",
      "تنظیم pH در محصولات آرایشی و بهداشتی",
      "جرم‌گیر و ضدرسوب در شوینده‌ها",
      "کلاته‌کننده در تصفیه آب",
      "صنایع دارویی و مکمل"
    ],
    "applications_en": [
      "Acidulant and preservative in beverages and processed food",
      "pH adjustment in cosmetics and personal care products",
      "Descaler and anti-scaling agent in detergents",
      "Chelating agent in water treatment",
      "Pharmaceutical and supplement industries"
    ],
    "specs": [
      {
        "key_fa": "خلوص",
        "value_fa": "حداقل ۹۹.۵٪",
        "key_en": "Purity",
        "value_en": "Min. 99.5%"
      },
      {
        "key_fa": "گرید",
        "value_fa": "Food / Industrial / مونوهیدرات و آنهیدرید",
        "key_en": "Grade",
        "value_en": "Food / Industrial / Monohydrate & Anhydrous"
      },
      {
        "key_fa": "رنگ",
        "value_fa": "بی‌رنگ تا سفید",
        "key_en": "Color",
        "value_en": "Colorless to white"
      },
      {
        "key_fa": "شکل ظاهری",
        "value_fa": "بلور یا پودر",
        "key_en": "Appearance",
        "value_en": "Crystal or powder"
      },
      {
        "key_fa": "بسته‌بندی",
        "value_fa": "کیسه ۲۵ کیلوگرمی",
        "key_en": "Packaging",
        "value_en": "25 kg bag"
      }
    ],
    "packaging_fa": "بسته‌بندی در کیسه‌های چندلایه کاغذی ۲۵ کیلوگرمی با روکش پلی‌اتیلن. نگهداری در محیط خشک، خنک و دارای تهویه. دور از بازارها و اکسیدکننده‌ها. عمر مفید ۲۴ ماه.",
    "packaging_en": "Packaged in 25 kg multi-layer paper bags with polyethylene inner liner. Store in a dry, cool, ventilated environment. Away from alkalis and oxidizers. Shelf life 24 months.",
    "safety_fa": "کم‌خطر. اسید ضعیف است اما تماس مکرر با پوست ممکن است باعث تحریک شود. در صورت inhalation پودر، به هوای تازه منتقل شوید. استفاده از ماسک و عینک توصیه می‌شود. اطلاعات کامل در SDS.",
    "safety_en": "Low hazard. A weak acid, but repeated skin contact may cause irritation. In case of powder inhalation, move to fresh air. Use of mask and goggles recommended. Full details in SDS.",
    "_disclaimer": "DEMO VALUES — to be verified by Khavar Sadra technical team before ordering.",
    "faq": [
      {
        "q_fa": "مونوهیدرات و آنهیدرید چه تفاوتی دارند؟",
        "a_fa": "مونوهیدرات شامل یک مولکول آب تبلور است و معمولاً در صنایع غذایی و نوشیدنی رایج است. آنهیدرید فاقد آب تبلور است و برای کاربردهای حساس به رطوبت مناسب‌تر است.",
        "q_en": "What is the difference between monohydrate and anhydrous?",
        "a_en": "Monohydrate contains one molecule of water of crystallization and is common in food and beverage industries. Anhydrous is free of water of crystallization and is more suitable for moisture-sensitive applications."
      }
    ]
  },
  {
    "slug": "cmc",
    "name_fa": "کربوکسی متیل سلولز (CMC)",
    "name_en": "Carboxymethyl Cellulose (CMC)",
    "formula": "[C₆H₇O₂(OH)₂OCH₂COOH]ₙ",
    "cas": "9004-32-4",
    "category": "gums_additives",
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611123624238-8cfff6c3a9c?auto=format&fit=crop&w=900&q=70",
    "gallery": [
      "https://images.unsplash.com/photo-1611123624238-8cfff6c3a9c?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1565043589221-994025e2cd1d?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1607998491335-30c4f7e8c8f0?auto=format&fit=crop&w=1200&q=70"
    ],
    "short_fa": "قوام‌دهنده، چسب و عامل تعلیق سلولزی در شوینده، غذایی، نساجی و حفاری.",
    "short_en": "Cellulosic thickener, binder and suspending agent in detergents, food, textiles and drilling.",
    "description_fa": "کربوکسی متیل سلولز (CMC) یک مشتق سلولزی محلول در آب است که به‌عنوان قوام‌دهنده، چسب، عامل تعلیق و تثبیت‌کننده در بسیاری از صنایع استفاده می‌شود. در شوینده‌ها (به‌عنوان ضدرسوب‌کننده و قوام‌دهنده مایع)، غذایی (بستنی، سس، ژله)، نساجی (اندازه نخ)، کاغذسازی، دارویی و در گل حفاری کاربرد دارد. گریدهای مختلف CMC با درجه جایگزینی (DS) و ویسکوزیته متفاوت عرضه می‌شوند. خاور صدرا گریدهای صنعتی و خوراکی را تأمین می‌کند.",
    "description_en": "Carboxymethyl cellulose (CMC) is a water-soluble cellulosic derivative used as a thickener, binder, suspending agent and stabilizer in many industries. It is used in detergents (as anti-redeposition agent and liquid thickener), food (ice cream, sauces, jelly), textiles (yarn sizing), papermaking, pharmaceuticals and in drilling mud. Different CMC grades are available with varying degrees of substitution (DS) and viscosity. Khavar Sadra supplies industrial and food grades.",
    "applications_fa": [
      "ضدرسوب‌کننده در پودر و مایع شوینده",
      "قوام‌دهنده در بستنی و سس",
      "اندازه‌کردن نخ در نساجی",
      "گل حفاری (کنترل فیلتر loss)",
      "چسب و بایندر در صنایع مختلف"
    ],
    "applications_en": [
      "Anti-redeposition agent in detergent powder and liquid",
      "Thickener in ice cream and sauces",
      "Yarn sizing in textiles",
      "Drilling mud (fluid loss control)",
      "Binder and adhesive in various industries"
    ],
    "specs": [
      {
        "key_fa": "درجه جایگزینی (DS)",
        "value_fa": "۰.۶ تا ۰.۹",
        "key_en": "Degree of substitution (DS)",
        "value_en": "0.6 – 0.9"
      },
      {
        "key_fa": "ویسکوزیته (۲٪ محلول)",
        "value_fa": "۵۰۰ تا ۲۵۰۰ سانتی‌پواز",
        "key_en": "Viscosity (2% solution)",
        "value_en": "500–2500 cP"
      },
      {
        "key_fa": "گرید",
        "value_fa": "صنعتی / Food Grade",
        "key_en": "Grade",
        "value_en": "Industrial / Food Grade"
      },
      {
        "key_fa": "شکل ظاهری",
        "value_fa": "پودر سفید تا کمرنگ",
        "key_en": "Appearance",
        "value_en": "White to off-white powder"
      },
      {
        "key_fa": "بسته‌بندی",
        "value_fa": "کیسه ۲۵ کیلوگرمی",
        "key_en": "Packaging",
        "value_en": "25 kg bag"
      }
    ],
    "packaging_fa": "بسته‌بندی در کیسه‌های چندلایه کاغذی ۲۵ کیلوگرمی با روکش پلی‌اتیلن. نگهداری در محل خشک، خنک و دارای تهویه. عمر مفید ۲۴ ماه.",
    "packaging_en": "Packaged in 25 kg multi-layer paper bags with polyethylene inner liner. Store in a dry, cool and ventilated place. Shelf life 24 months.",
    "safety_fa": "کم‌خطر. در شرایط عادی ایمن است. inhalation پودر ممکن است باعث تحریک خفیف تنفسی شود. استفاده از ماسک ضد گرد و غبار توصیه می‌شود. اطلاعات کامل در SDS.",
    "safety_en": "Low hazard. Safe under normal conditions. Powder inhalation may cause mild respiratory irritation. A dust mask is recommended. Full details in SDS.",
    "_disclaimer": "DEMO VALUES — to be verified by Khavar Sadra technical team before ordering.",
    "faq": [
      {
        "q_fa": "DS چیست و چه اثری دارد؟",
        "a_fa": "DS (Degree of Substitution) تعداد گروه‌های هیدروکسیل جایگزین‌شده در هر واحد سلولز است. DS بالاتر یعنی حلالیت بهتر در آب و ویسکوزیته بالاتر.",
        "q_en": "What is DS and what is its effect?",
        "a_en": "DS (Degree of Substitution) is the number of hydroxyl groups substituted per cellulose unit. Higher DS means better water solubility and higher viscosity."
      }
    ]
  },
  {
    "slug": "stpp",
    "name_fa": "تری‌پلی‌فسفات سدیم (STPP)",
    "name_en": "Sodium Tripolyphosphate (STPP)",
    "formula": "Na₅P₃O₁₀",
    "cas": "7758-29-4",
    "category": "salts_silicates",
    "featured": false,
    "image": "https://images.unsplash.com/photo-1607998491335-30c4f7e8c8f0?auto=format&fit=crop&w=900&q=70",
    "gallery": [
      "https://images.unsplash.com/photo-1607998491335-30c4f7e8c8f0?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1565043589221-994025e2cd1d?auto=format&fit=crop&w=1200&q=70"
    ],
    "short_fa": "بیلدر و کلاته‌کننده اصلی در پودر شوینده و سفت‌کننده آب.",
    "short_en": "Main builder and chelating agent in detergent powders and water hardener.",
    "description_fa": "تری‌پلی‌فسفات سدیم (STPP) یک نمک فسفات صنعتی است که به‌عنوان بیلدر اصلی در فرمولاسیون پودرهای شوینده استفاده می‌شود. این ماده یون‌های کلسیم و منیزیم (سختی آب) را کلاته می‌کند و در نتیجه عملکرد سورفاکتانت‌ها را افزایش می‌دهد. علاوه بر شوینده، در تصفیه آب، به‌عنوان عامل تعلیق و در صنایع غذایی (گرید Food Grade) به‌عنوان نگهدارنده و تثبیت‌کننده کاربرد دارد. خاور صدرا گرید صنعتی و خوراکی را تأمین می‌کند.",
    "description_en": "Sodium tripolyphosphate (STPP) is an industrial phosphate salt used as the main builder in detergent powder formulations. It chelates calcium and magnesium ions (water hardness), thereby increasing surfactant performance. In addition to detergents, it is used in water treatment, as a suspending agent, and in food industries (Food Grade) as a preservative and stabilizer. Khavar Sadra supplies industrial and food grades.",
    "applications_fa": [
      "بیلدر و کلاته‌کننده در پودر شوینده",
      "تصفیه آب و کنترل سختی",
      "عامل تعلیق در صنایع مختلف",
      "تثبیت‌کننده و نگهدارنده غذایی (Food Grade)",
      "سرامیک و تولید شیشه"
    ],
    "applications_en": [
      "Builder and chelating agent in detergent powder",
      "Water treatment and hardness control",
      "Suspending agent in various industries",
      "Food stabilizer and preservative (Food Grade)",
      "Ceramics and glass production"
    ],
    "specs": [
      {
        "key_fa": "خلوص (Na₅P₃O₁₀)",
        "value_fa": "حداقل ۹۰٪",
        "key_en": "Purity (Na₅P₃O₁₀)",
        "value_en": "Min. 90%"
      },
      {
        "key_fa": "گرید",
        "value_fa": "صنعتی / Food Grade",
        "key_en": "Grade",
        "value_en": "Industrial / Food Grade"
      },
      {
        "key_fa": "فاز",
        "value_fa": "فاز I / فاز II",
        "key_en": "Phase",
        "value_en": "Phase I / Phase II"
      },
      {
        "key_fa": "شکل ظاهری",
        "value_fa": "پودر سفید",
        "key_en": "Appearance",
        "value_en": "White powder"
      },
      {
        "key_fa": "بسته‌بندی",
        "value_fa": "کیسه ۲۵ کیلوگرمی",
        "key_en": "Packaging",
        "value_en": "25 kg bag"
      }
    ],
    "packaging_fa": "بسته‌بندی در کیسه‌های پلی‌پروپیلن ۲۵ کیلوگرمی با روکش پلی‌اتیلن. نگهداری در محیط خشک و خنک. عمر مفید ۲۴ ماه.",
    "packaging_en": "Packaged in 25 kg polypropylene bags with polyethylene inner liner. Store in a dry, cool place. Shelf life 24 months.",
    "safety_fa": "کم‌خطر. در شرایط عادی ایمن است. inhalation پودر ممکن است باعث تحریک خفیف تنفسی شود. اطلاعات کامل در SDS.",
    "safety_en": "Low hazard. Safe under normal conditions. Powder inhalation may cause mild respiratory irritation. Full details in SDS.",
    "_disclaimer": "DEMO VALUES — to be verified by Khavar Sadra technical team before ordering.",
    "faq": [
      {
        "q_fa": "فاز I و فاز II چه تفاوتی دارند؟",
        "a_fa": "فاز I در دمای بالاتر تشکیل می‌شود و حلالیت سریع‌تری در آب دارد. فاز II حلالیت ملایم‌تری دارد و برای فرمولاسیون‌هایی که نیاز به حل‌شدن تدریجی دارند مناسب است.",
        "q_en": "What is the difference between Phase I and Phase II?",
        "a_en": "Phase I forms at higher temperatures and dissolves faster in water. Phase II has a milder dissolution and is suitable for formulations requiring gradual dissolution."
      }
    ]
  },
  {
    "slug": "soda-ash",
    "name_fa": "کربنات سدیم (سودا اش)",
    "name_en": "Soda Ash (Sodium Carbonate)",
    "formula": "Na₂CO₃",
    "cas": "497-19-8",
    "category": "salts_silicates",
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=900&q=70",
    "gallery": [
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1607998491335-30c4f7e8c8f0?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=70"
    ],
    "short_fa": "باز متوسط و بیلدر اقتصادی در شوینده، شیشه، فلزکاری و تصفیه آب.",
    "short_en": "Medium base and economic builder in detergents, glass, metalworking and water treatment.",
    "description_fa": "کربنات سدیم (سودا اش) یکی از پرکاربردترین مواد شیمیایی پایه است که به‌صورت پودر سفید عرضه می‌شود. در صنایع شوینده (به‌عنوان بیلدر و بافر قلیایی اقتصادی)، شیشه‌سازی (کاهش نقطه ذوب سیلیس)، صابون، فلزکاری (تنظیم pH)، تصفیه آب (تنظیم pH و نرم‌کردن) و تولید مواد شیمیایی دیگر کاربرد گسترده‌ای دارد. خاور صدرا گرید سبک (Light) و سنگین (Dense) را تأمین می‌کند.",
    "description_en": "Sodium carbonate (soda ash) is one of the most widely used base chemicals, supplied as a white powder. It is widely used in detergent industries (as a builder and economic alkaline buffer), glassmaking (lowering silica melting point), soap, metalworking (pH adjustment), water treatment (pH adjustment and softening) and the production of other chemicals. Khavar Sadra supplies both Light and Dense grades.",
    "applications_fa": [
      "بیلدر اقتصادی در پودر شوینده",
      "صنعت شیشه و سرامیک",
      "تولید صابون و مواد شیمیایی",
      "تصفیه آب و تنظیم pH",
      "فلزکاری و فرآوری کانه"
    ],
    "applications_en": [
      "Economic builder in detergent powder",
      "Glass and ceramic industry",
      "Soap and chemical production",
      "Water treatment and pH adjustment",
      "Metalworking and ore processing"
    ],
    "specs": [
      {
        "key_fa": "خلوص (Na₂CO₃)",
        "value_fa": "حداقل ۹۹.۲٪",
        "key_en": "Purity (Na₂CO₃)",
        "value_en": "Min. 99.2%"
      },
      {
        "key_fa": "گرید",
        "value_fa": "Light / Dense",
        "key_en": "Grade",
        "value_en": "Light / Dense"
      },
      {
        "key_fa": "چگالی ظاهری",
        "value_fa": "Light: ۰.۵، Dense: ۱.۰ g/cm³",
        "key_en": "Bulk density",
        "value_en": "Light: 0.5, Dense: 1.0 g/cm³"
      },
      {
        "key_fa": "شکل ظاهری",
        "value_fa": "پودر سفید",
        "key_en": "Appearance",
        "value_en": "White powder"
      },
      {
        "key_fa": "بسته‌بندی",
        "value_fa": "کیسه ۲۵ / ۵۰ کیلوگرمی",
        "key_en": "Packaging",
        "value_en": "25 / 50 kg bag"
      }
    ],
    "packaging_fa": "بسته‌بندی در کیسه‌های پلی‌پروپیلن ۲۵ یا ۵۰ کیلوگرمی. نگهداری در محیط خشک و خنک. دور از اسیدها. عمر مفید ۲۴ ماه.",
    "packaging_en": "Packaged in 25 or 50 kg polypropylene bags. Store in a dry, cool place. Away from acids. Shelf life 24 months.",
    "safety_fa": "کم‌خطر تا متوسط. باز متوسط است و تماس طولانی با پوست ممکن است باعث تحریک شود. استفاده از دستکش و ماسک توصیه می‌شود. اطلاعات کامل در SDS.",
    "safety_en": "Low to medium hazard. A medium base and prolonged skin contact may cause irritation. Use of gloves and mask recommended. Full details in SDS.",
    "_disclaimer": "DEMO VALUES — to be verified by Khavar Sadra technical team before ordering.",
    "faq": [
      {
        "q_fa": "Light و Dense چه تفاوتی دارند؟",
        "a_fa": "Light حجم بیشتر و چگالی کمتری دارد و برای فرمولاسیون مایع و کاربردهایی که نیاز به حلالیت سریع دارند مناسب است. Dense چگالی بالاتری دارد و برای حمل آسان‌تر و پودرهای شوینده رایج است.",
        "q_en": "What is the difference between Light and Dense?",
        "a_en": "Light has higher volume and lower density, suitable for liquid formulations and applications requiring fast dissolution. Dense has higher density and is common for easier transport and detergent powders."
      }
    ]
  },
  {
    "slug": "sulfuric-acid",
    "name_fa": "اسید سولفوریک",
    "name_en": "Sulfuric Acid",
    "formula": "H₂SO₄",
    "cas": "7664-93-9",
    "category": "acids",
    "featured": false,
    "image": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=70",
    "gallery": [
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1607998491335-30c4f7e8c8f0?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=70"
    ],
    "short_fa": "اسید معدنی قوی و یکی از پایه‌ای‌ترین مواد صنایع شیمیایی، شوینده و باتری.",
    "short_en": "Strong mineral acid and one of the foundational chemicals in chemicals, detergents and battery industries.",
    "description_fa": "اسید سولفوریک یکی از مهم‌ترین و پرکاربردترین اسیدهای معدنی در صنعت است. این ماده در گریدهای مختلف غلظت (۹۸٪، ۹۳٪، ۷۰٪) عرضه می‌شود. کاربردهای اصلی آن در تولید سورفاکتانت‌ها (سولفوناسیون LAB)، تولید اسید فسفریک و هیدروکلریک، کود فسفاته، تصفیه آب و پساب، باتری‌های اسیدی، فلزکاری (پاک‌کردن و اسیدشویی)، پتروشیمی و تولید رنگ و رزین است. خاور صدرا گرید صنعتی و باتری را تأمین می‌کند.",
    "description_en": "Sulfuric acid is one of the most important and widely used mineral acids in industry. It is supplied in various concentration grades (98%, 93%, 70%). Its main applications are in surfactant production (LAB sulfonation), production of phosphoric and hydrochloric acid, phosphate fertilizers, water and wastewater treatment, acid batteries, metalworking (cleaning and pickling), petrochemicals and paint and resin production. Khavar Sadra supplies industrial and battery grades.",
    "applications_fa": [
      "سولفوناسیون در تولید سورفاکتانت",
      "تولید اسید فسفریک و هیدروکلریک",
      "اسیدشویی فلزات و پاک‌کردن سطوح",
      "باتری‌های اسیدی سرب",
      "تصفیه آب و پساب"
    ],
    "applications_en": [
      "Sulfonation in surfactant production",
      "Production of phosphoric and hydrochloric acid",
      "Metal pickling and surface cleaning",
      "Lead-acid batteries",
      "Water and wastewater treatment"
    ],
    "specs": [
      {
        "key_fa": "غلظت (H₂SO₄)",
        "value_fa": "۹۸٪ / ۹۳٪ / ۷۰٪",
        "key_en": "Concentration (H₂SO₄)",
        "value_en": "98% / 93% / 70%"
      },
      {
        "key_fa": "گرید",
        "value_fa": "صنعتی / باتری",
        "key_en": "Grade",
        "value_en": "Industrial / Battery"
      },
      {
        "key_fa": "رنگ",
        "value_fa": "بی‌رنگ تا زرد کمرنگ",
        "key_en": "Color",
        "value_en": "Colorless to pale yellow"
      },
      {
        "key_fa": "چگالی (۹۸٪)",
        "value_fa": "حدود ۱.۸۴ گرم بر سانتی‌متر مکعب",
        "key_en": "Density (98%)",
        "value_en": "~1.84 g/cm³"
      },
      {
        "key_fa": "بسته‌بندی",
        "value_fa": "بشکه ۳۵ کیلوگرمی / تانک IBC",
        "key_en": "Packaging",
        "value_en": "35 kg drum / IBC tank"
      }
    ],
    "packaging_fa": "بسته‌بندی در بشکه پلی‌اتیلن ۳۵ کیلوگرمی یا تانک IBC. نگهداری در محیط خشک، خنک و دارای تهویه فراوان. دور از آب، فلزات، بازارها و مواد آلی. هرگز آب را به اسید اضافه نکنید. عمر مفید ۱۲ ماه.",
    "packaging_en": "Packaged in 35 kg polyethylene drums or IBC tanks. Store in a dry, cool and well-ventilated environment. Away from water, metals, alkalis and organic materials. Never add water to acid. Shelf life 12 months.",
    "safety_fa": "اسید قوی و به شدت خورنده! تماس با پوست و چشم باعث سوختگی شدید و آسیب دائمی می‌شود. واکنش با آب به شدت گرمازا است. استفاده از تجهیزات محافظ کامل الزامی است. در صورت تماس، فوراً ۱۵ دقیقه با آب شستشو دهید و به پزشک مراجعه کنید. اطلاعات کامل در SDS.",
    "safety_en": "Strong acid and highly corrosive! Contact with skin and eyes causes severe burns and permanent damage. Reaction with water is highly exothermic. Use of full protective equipment is mandatory. In case of contact, rinse immediately with water for 15 minutes and seek medical attention. Full details in SDS.",
    "_disclaimer": "DEMO VALUES — to be verified by Khavar Sadra technical team before ordering.",
    "faq": [
      {
        "q_fa": "گرید باتری و صنعتی چه تفاوتی دارند؟",
        "a_fa": "گرید باتری خلوص بالاتر و محدودیت سخت‌گیرانه‌ای برای ناخالصی‌های فلزی (آهن، مس) دارد تا عمر باتری افزایش یابد. گرید صنعتی برای کاربردهای فرآیندی مناسب است.",
        "q_en": "What is the difference between battery and industrial grade?",
        "a_en": "Battery grade has higher purity and strict limits for metallic impurities (iron, copper) to extend battery life. Industrial grade is suitable for process applications."
      }
    ]
  },
  {
    "slug": "sles",
    "name_fa": "سدیم لورت اتر سولفات (SLES)",
    "name_en": "Sodium Laureth Sulfate (SLES)",
    "formula": "CH₃(CH₂)₁₁(OCH₂CH₂)ₙOSO₃Na",
    "cas": "9004-82-4",
    "category": "surfactants",
    "featured": false,
    "image": "https://images.unsplash.com/photo-1607998491335-30c4f7e8c8f0?auto=format&fit=crop&w=900&q=70",
    "gallery": [
      "https://images.unsplash.com/photo-1607998491335-30c4f7e8c8f0?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1565043589221-994025e2cd1d?auto=format&fit=crop&w=1200&q=70"
    ],
    "short_fa": "سورفاکتانت آنیونی ملایم و کف‌دهنده اصلی در شامپو و ژل‌های بهداشتی.",
    "short_en": "Mild anionic surfactant and main foaming agent in shampoos and personal care gels.",
    "description_fa": "سدیم لورت اتر سولفات (SLES) یکی از پرکاربردترین سورفاکتانت‌های آنیونی در صنایع آرایشی و بهداشتی است. این ماده به دلیل کف‌دهندگی عالی، سازگاری با پوست، قیمت مناسب و قابلیت ترکیب با سایر سورفاکتانت‌ها، در فرمولاسیون شامپوها، ژل‌های حمام، مایع دستشویی، شوینده‌های صورت، خمیردندان و شوینده‌های صنعتی ملایم استفاده می‌شود. خاور صدرا گرید ۲۸٪ و ۷۰٪ فعال را تأمین می‌کند.",
    "description_en": "Sodium laureth sulfate (SLES) is one of the most widely used anionic surfactants in the cosmetics and personal care industries. Due to its excellent foaming, skin compatibility, affordable price and ability to combine with other surfactants, it is used in shampoos, bath gels, hand wash liquids, face cleansers, toothpastes and mild industrial cleaners. Khavar Sadra supplies 28% and 70% active grades.",
    "applications_fa": [
      "شامپو و ژل حمام خانگی و صنعتی",
      "مایع دستشویی و شوینده‌های صورت",
      "خمیردندان و دهان‌شویه",
      "شوینده‌های ملایم صنعتی",
      "بایداس کودکان و شوینده‌های حساس"
    ],
    "applications_en": [
      "Household and industrial shampoo and bath gel",
      "Hand wash liquids and face cleansers",
      "Toothpaste and mouthwash",
      "Mild industrial cleaners",
      "Baby baths and sensitive-skin cleaners"
    ],
    "specs": [
      {
        "key_fa": "ماده فعال",
        "value_fa": "۲۸٪ / ۷۰٪",
        "key_en": "Active matter",
        "value_en": "28% / 70%"
      },
      {
        "key_fa": "pH (محلول ۱۰٪)",
        "value_fa": "۷ تا ۹",
        "key_en": "pH (10% solution)",
        "value_en": "7 – 9"
      },
      {
        "key_fa": "نمک سولفات بدون",
        "value_fa": "حداکثر ۲٪",
        "key_en": "Unsulfated salt",
        "value_en": "Max. 2%"
      },
      {
        "key_fa": "شکل ظاهری",
        "value_fa": "مایع شفاف تا کدر",
        "key_en": "Appearance",
        "value_en": "Clear to hazy liquid"
      },
      {
        "key_fa": "بسته‌بندی",
        "value_fa": "بشکه ۲۲۰ کیلوگرمی / IBC",
        "key_en": "Packaging",
        "value_en": "220 kg drum / IBC"
      }
    ],
    "packaging_fa": "بسته‌بندی در بشکه پلاستیکی ۲۲۰ کیلوگرمی یا تانک IBC. نگهداری در محیط خنک، دور از نور مستقیم و یخزدگی. عمر مفید ۱۲ ماه.",
    "packaging_en": "Packaged in 220 kg plastic drums or IBC tanks. Store in a cool environment, away from direct light and freezing. Shelf life 12 months.",
    "safety_fa": "کم‌خطر. در غلظت مصرف ایمن است اما تماس مستقیم با غلظت بالا ممکن است باعث تحریک چشم شود. استفاده از عینک توصیه می‌شود. اطلاعات کامل در SDS.",
    "safety_en": "Low hazard. Safe at use concentration but direct contact with high concentration may cause eye irritation. Use of goggles recommended. Full details in SDS.",
    "_disclaimer": "DEMO VALUES — to be verified by Khavar Sadra technical team before ordering.",
    "faq": [
      {
        "q_fa": "تفاوت SLES و SLS چیست؟",
        "a_fa": "SLS سدیم لوریل سولفات است و تحریک‌پذیری بالاتری برای پوست دارد. SLES با افزودن گروه اکسید اتیلن ملایم‌تر شده و در محصولات بهداشتی رایج‌تر است.",
        "q_en": "What is the difference between SLES and SLS?",
        "a_en": "SLS is sodium lauryl sulfate and has higher skin irritation. SLES is made milder by adding ethylene oxide groups and is more common in personal care products."
      }
    ]
  },
  {
    "slug": "glycerin",
    "name_fa": "گلیسیرین",
    "name_en": "Glycerin",
    "formula": "C₃H₈O₃",
    "cas": "56-81-5",
    "category": "gums_additives",
    "featured": false,
    "image": "https://images.unsplash.com/photo-1565043589221-994025e2cd1d?auto=format&fit=crop&w=900&q=70",
    "gallery": [
      "https://images.unsplash.com/photo-1565043589221-994025e2cd1d?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1611123624238-8cfff6c3a9c?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=70"
    ],
    "short_fa": "مرطوب‌کننده، حلال و روان‌کننده در آرایشی، غذایی، دارویی و صنایع مختلف.",
    "short_en": "Humectant, solvent and lubricant in cosmetics, food, pharma and various industries.",
    "description_fa": "گلیسیرین (گلیسرول) یک الکل پلی‌هیدریک بی‌رنگ، بی‌بو و شیرین است که به‌طور طبیعی در چربی‌ها یافت می‌شود. این ماده به دلیل خاصیت مرطوب‌کنندگی قوی، حلالیت بالا در آب و الکل، سازگاری با پوست و سمیت پایین، در صنایع آرایشی و بهداشتی (کرم‌ها، لوسیون‌ها، خمیردندان)، دارویی (شربت‌ها، کپسول‌ها)، غذایی (شیرین‌کننده، مرطوب‌کننده)، تنباکو، چرم و بسیاری از صنایع دیگر کاربرد دارد. خاور صدرا گرید خوراکی (USP) و صنعتی را تأمین می‌کند.",
    "description_en": "Glycerin (glycerol) is a polyhydric alcohol that is colorless, odorless and sweet, naturally found in fats. Due to its strong humectant properties, high solubility in water and alcohol, skin compatibility and low toxicity, it is used in cosmetics and personal care (creams, lotions, toothpaste), pharmaceuticals (syrups, capsules), food (sweetener, humectant), tobacco, leather and many other industries. Khavar Sadra supplies USP (food) and industrial grades.",
    "applications_fa": [
      "مرطوب‌کننده در کرم‌ها و لوسیون‌ها",
      "حلال در شربت‌ها و کپسول‌های دارویی",
      "شیرین‌کننده و نگهدارنده رطوبت غذایی",
      "خمیردندان و محصولات بهداشت دهان",
      "نرم‌کننده چرم و نساجی"
    ],
    "applications_en": [
      "Humectant in creams and lotions",
      "Solvent in pharmaceutical syrups and capsules",
      "Food sweetener and moisture preserver",
      "Toothpaste and oral hygiene products",
      "Leather and textile softener"
    ],
    "specs": [
      {
        "key_fa": "خلوص (گلیسرول)",
        "value_fa": "حداقل ۹۹.۵٪",
        "key_en": "Purity (Glycerol)",
        "value_en": "Min. 99.5%"
      },
      {
        "key_fa": "گرید",
        "value_fa": "USP / صنعتی",
        "key_en": "Grade",
        "value_en": "USP / Industrial"
      },
      {
        "key_fa": "رنگ",
        "value_fa": "بی‌رغب",
        "key_en": "Color",
        "value_en": "Colorless"
      },
      {
        "key_fa": "چگالی",
        "value_fa": "حدود ۱.۲۶ گرم بر سانتی‌متر مکعب",
        "key_en": "Density",
        "value_en": "~1.26 g/cm³"
      },
      {
        "key_fa": "بسته‌بندی",
        "value_fa": "بشکه ۲۵۰ کیلوگرمی / IBC",
        "key_en": "Packaging",
        "value_en": "250 kg drum / IBC"
      }
    ],
    "packaging_fa": "بسته‌بندی در بشکه پلاستیکی ۲۵۰ کیلوگرمی یا تانک IBC. نگهداری در محیط خشک، خنک و دارای تهویه، دور از نور مستقیم و اکسیدکننده‌ها. عمر مفید ۲۴ ماه.",
    "packaging_en": "Packaged in 250 kg plastic drums or IBC tanks. Store in a dry, cool, ventilated place away from direct light and oxidizers. Shelf life 24 months.",
    "safety_fa": "کم‌خطر. در شرایط عالی ایمن است. inhalation بخار در دمای بالا ممکن است باعث تحریک خفیف دستگاه تنفسی شود. اطلاعات کامل در SDS.",
    "safety_en": "Low hazard. Very safe under normal conditions. Inhalation of vapors at high temperatures may cause mild respiratory irritation. Full details in SDS.",
    "_disclaimer": "DEMO VALUES — to be verified by Khavar Sadra technical team before ordering.",
    "faq": [
      {
        "q_fa": "گلیسیرین گیاهی و سنتزی چه تفاوتی دارند؟",
        "a_fa": "گلیسیرین گیاهی از هیدرولیز چربی‌های گیاهی (مثل روغن پالم) و گلیسیرین سنتزی از پروپیلن تولید می‌شود. هر دو از نظر شیمیایی یکسان هستند اما گرید گیاهی برای محصولات طبیعی و حلال ترجیح داده می‌شود.",
        "q_en": "What is the difference between vegetable and synthetic glycerin?",
        "a_en": "Vegetable glycerin is produced by hydrolysis of vegetable fats (such as palm oil) and synthetic glycerin from propylene. Both are chemically identical but vegetable grade is preferred for natural and halal products."
      }
    ]
  },
  {
    "slug": "acrylic-resin",
    "name_fa": "رزین اکریلیک",
    "name_en": "Acrylic Resin",
    "formula": "(C₃H₄O₂)ₙ",
    "cas": "9003-01-4",
    "category": "polymers_resins",
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611123624238-8cfff6c3a9c?auto=format&fit=crop&w=900&q=70",
    "gallery": [
      "https://images.unsplash.com/photo-1611123624238-8cfff6c3a9c?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1565043589221-994025e2cd1d?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=70"
    ],
    "short_fa": "رزین پایه برای رنگ‌های اکریلیک، چسب، چوب و صنایع ساختمانی.",
    "short_en": "Base resin for acrylic paints, adhesives, wood and construction industries.",
    "description_fa": "رزین اکریلیک یک پلیمر سنتزی است که از پلیمریزاسیون مونومرهای اکریلات تولید می‌شود و به دو شکل امولسیون (آبی) و خالص (جامد یا محلول) عرضه می‌گردد. این رزین به دلیل شفافیت بالا، مقاومت در برابر UV و زردشدن، چسبندگی عالی به سطوح مختلف، سرعت خشک‌شدن و سازگاری با محیط زیست، در تولید رنگ‌های اکریلیک ساختمانی و صنعتی، چسب‌های چوب و بسته‌بندی، جوهر چاپ، پوشش‌های چوب و چرم، و صنایع نساجی کاربرد گسترده‌ای دارد. خاور صدرا گرید امولسیون و خالص را تأمین می‌کند.",
    "description_en": "Acrylic resin is a synthetic polymer produced by polymerization of acrylate monomers, supplied in two forms: emulsion (water-based) and pure (solid or solution). Due to its high transparency, UV and yellowing resistance, excellent adhesion to various surfaces, fast drying and environmental compatibility, it is widely used in the production of architectural and industrial acrylic paints, wood and packaging adhesives, printing inks, wood and leather coatings, and textile industries. Khavar Sadra supplies both emulsion and pure grades.",
    "applications_fa": [
      "رنگ‌های اکریلیک ساختمانی و صنعتی",
      "چسب چوب و بسته‌بندی",
      "پوشش‌های چوب و چرم",
      "جوهر چاپ و نساجی",
      "پوشش‌های محافظ صنعتی"
    ],
    "applications_en": [
      "Architectural and industrial acrylic paints",
      "Wood and packaging adhesives",
      "Wood and leather coatings",
      "Printing inks and textiles",
      "Industrial protective coatings"
    ],
    "specs": [
      {
        "key_fa": "ماده جامد",
        "value_fa": "۴۸ تا ۵۰٪ (امولسیون)",
        "key_en": "Solid content",
        "value_en": "48–50% (emulsion)"
      },
      {
        "key_fa": "گرید",
        "value_fa": "امولسیون / خالص",
        "key_en": "Grade",
        "value_en": "Emulsion / Pure"
      },
      {
        "key_fa": "ویسکوزیته",
        "value_fa": "۱۰۰۰ تا ۳۰۰۰ سانتی‌پواز",
        "key_en": "Viscosity",
        "value_en": "1000–3000 cP"
      },
      {
        "key_fa": "pH",
        "value_fa": "۷ تا ۹",
        "key_en": "pH",
        "value_en": "7 – 9"
      },
      {
        "key_fa": "بسته‌بندی",
        "value_fa": "بشکه ۲۲۰ کیلوگرمی / IBC",
        "key_en": "Packaging",
        "value_en": "220 kg drum / IBC"
      }
    ],
    "packaging_fa": "بسته‌بندی در بشکه پلاستیکی ۲۲۰ کیلوگرمی یا تانک IBC. نگهداری در محیط خنک و دارای تهویه، دور از نور مستقیم و یخزدگی. عمر مفید ۱۲ ماه در دمای ۵ تا ۳۵ درجه سانتی‌گراد.",
    "packaging_en": "Packaged in 220 kg plastic drums or IBC tanks. Store in a cool, ventilated place away from direct sunlight and freezing. Shelf life 12 months at 5–35°C.",
    "safety_fa": "کم‌خطر. در شرایط عادی ایمن است. تماس با چشم ممکن است باعث تحریک خفیف شود. استفاده از عینک توصیه می‌شود. اطلاعات کامل در SDS.",
    "safety_en": "Low hazard. Safe under normal conditions. Eye contact may cause mild irritation. Use of goggles recommended. Full details in SDS.",
    "_disclaimer": "DEMO VALUES — to be verified by Khavar Sadra technical team before ordering.",
    "faq": [
      {
        "q_fa": "تفاوت رزین امولسیون و خالص چیست؟",
        "a_fa": "امولسیون در آب پخش شده و برای رنگ‌ها و چسب‌های پایه آب مناسب است. رزین خالص (محلول یا جامد) برای کاربردهایی که نیاز به پوشش قوی‌تر و مقاومت شیمیایی بالاتر دارند استفاده می‌شود.",
        "q_en": "What is the difference between emulsion and pure resin?",
        "a_en": "Emulsion is dispersed in water and is suitable for water-based paints and adhesives. Pure resin (solution or solid) is used for applications requiring stronger coating and higher chemical resistance."
      }
    ]
  }
],
  "posts": [
  {
    "slug": "sodium-metasilicate-in-detergents",
    "title_fa": "کاربردهای متاسیلیکات سدیم در صنعت شوینده",
    "title_en": "Applications of Sodium Metasilicate in the Detergent Industry",
    "category": "detergents",
    "date": "2025-09-12",
    "readingTime": 6,
    "author": "تیم فنی خاور صدرا",
    "author_en": "Khavar Sadra Technical Team",
    "image": "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1600&q=70",
    "excerpt_fa": "متاسیلیکات سدیم یکی از چندکاره‌ترین مواد در فرمولاسیون شوینده‌هاست؛ از بافر قلیایی تا کنترل سختی آب و جلوگیری از خوردگی قطعات فلزی. در این مقاله نقش‌های اصلی آن را مرور می‌کنیم.",
    "excerpt_en": "Sodium metasilicate is one of the most multi-functional materials in detergent formulations — from alkaline buffering to water hardness control and metal parts corrosion protection. In this article we review its main roles.",
    "tags_fa": [
      "شوینده",
      "متاسیلیکات",
      "سیلیکات"
    ],
    "tags_en": [
      "Detergents",
      "Metasilicate",
      "Silicate"
    ],
    "toc_fa": [
      {
        "id": "intro",
        "title": "چرا متاسیلیکات سدیم؟"
      },
      {
        "id": "alkalinity",
        "title": "نقش به‌عنوان بافر قلیایی"
      },
      {
        "id": "hardness",
        "title": "کنترل سختی آب"
      },
      {
        "id": "corrosion",
        "title": "محافظت از قطعات فلزی"
      },
      {
        "id": "grade",
        "title": "انتخاب گرید مناسب"
      }
    ],
    "toc_en": [
      {
        "id": "intro",
        "title": "Why Sodium Metasilicate?"
      },
      {
        "id": "alkalinity",
        "title": "Role as an Alkaline Buffer"
      },
      {
        "id": "hardness",
        "title": "Water Hardness Control"
      },
      {
        "id": "corrosion",
        "title": "Metal Parts Protection"
      },
      {
        "id": "grade",
        "title": "Selecting the Right Grade"
      }
    ],
    "content_fa": "<p>متاسیلیکات سدیم (Na₂SiO₃) یکی از پایه‌ای‌ترین اجزای فرمولاسیون شوینده‌های صنعتی و خانگی است که اغلب در کنار سورفاکتانت‌ها، فسفات‌ها و کربنات‌ها به کار می‌رود. این ماده به‌خاطر چندکاره بودن، قیمت اقتصادی و سازگاری با محیط زیست، جایگاه ویژه‌ای در صنعت دارد.</p><h2 id='intro'>چرا متاسیلیکات سدیم؟</h2><p>در فرمولاسیون یک شوینده مؤثر، تنها داشتن سورفاکتانت کافی نیست. سختی آب، خوردگی قطعات ماشین، ناپایداری قلیاییت و کاهش راندمان پاک‌کنندگی از جمله مسائلی هستند که حضور یک بیلدر قلیایی مناسب را ضروری می‌کند. متاسیلیکات سدیم به دلیل ترکیب ویژه‌ای از خواص، پاسخی کارآمد به این چالش‌ها ارائه می‌دهد.</p><h2 id='alkalinity'>نقش به‌عنوان بافر قلیایی</h2><p>متاسیلیکات در آب به یون‌های سدیم و سیلیکات تجزیه می‌شود و pH محلول شوینده را در محدوده ۱۲ تا ۱۳ نگه می‌دارد. این قلیاییت بالا برای ساپونیفیکاسیون چربی‌ها، هیدرولیز پروتئین‌ها و افزایش راندمان سورفاکتانت‌ها ضروری است. بر خلاف کربنات سدیم، بافر متاسیلیکات پایدارتر است و در طول شستشو افت pH نشان نمی‌دهد.</p><h2 id='hardness'>کنترل سختی آب</h2><p>یون‌های کلسیم و منیزیم موجود در آب سخت، با سورفاکتانت‌ها واکنش داده و رسوب نامحلول ایجاد می‌کنند که هم باعث افت قدرت پاک‌کنندگی می‌شود و هم روی سطوح لکه می‌گذارد. متاسیلیکات این یون‌ها را کلاته کرده و در محلول نگه می‌دارد. اثر سینرژیک آن با STPP و زئولیت‌ها، می‌تواند مصرف سورفاکتانت را به‌طور چشمگیری کاهش دهد.</p><h2 id='corrosion'>محافظت از قطعات فلزی</h2><p>یکی از مهم‌ترین مزایای متاسیلیکات نسبت به سود سوزآور خالص، خاصیت ضدخوردگی آن است. سیلیکات در سطح فلز یک لایه محافظ پلی‌سیلیکاتی تشکیل می‌دهد که از حمله قلیا به آلومینیوم، مس و فولاد جلوگیری می‌کند. به همین دلیل در شوینده‌های ماشین ظرفشویی صنعتی تقریباً اجتناب‌ناپذیر است.</p><h2 id='grade'>انتخاب گرید مناسب</h2><p>گرید پنتاهیدرات (Na₂SiO₃·5H₂O) قلیاییت ملایم‌تری دارد و برای شوینده‌های ظرفشویی خانگی و فرمولاسیون‌های حساس مناسب است. گرید آنهیدرید قلیایی‌تر و واکنش‌پذیرتر است و برای شوینده‌های صنعتی و چربی‌پاک‌کن‌های قوی استفاده می‌شود. مشاوره با کارشناس فنی خاور صدرا می‌تواند به انتخاب گرید مناسب برای خط تولید شما کمک کند.</p>",
    "content_en": "<p>Sodium metasilicate (Na₂SiO₃) is one of the foundational components of industrial and household detergent formulations, often used alongside surfactants, phosphates and carbonates. Its versatility, economical price and environmental compatibility give it a special place in the industry.</p><h2 id='intro'>Why Sodium Metasilicate?</h2><p>An effective detergent formulation requires more than just a surfactant. Water hardness, machine parts corrosion, alkalinity instability and reduced cleaning efficiency are among the issues that make a proper alkaline builder essential. Sodium metasilicate offers an effective response to these challenges through its unique combination of properties.</p><h2 id='alkalinity'>Role as an Alkaline Buffer</h2><p>Metasilicate dissociates in water into sodium and silicate ions, keeping the detergent solution pH in the 12–13 range. This high alkalinity is essential for saponification of fats, protein hydrolysis and boosting surfactant performance. Unlike sodium carbonate, the metasilicate buffer is more stable and does not show pH drop during washing.</p><h2 id='hardness'>Water Hardness Control</h2><p>Calcium and magnesium ions in hard water react with surfactants to form insoluble precipitates that reduce cleaning power and leave stains on surfaces. Metasilicate chelates these ions and keeps them in solution. Its synergistic effect with STPP and zeolites can significantly reduce surfactant consumption.</p><h2 id='corrosion'>Metal Parts Protection</h2><p>One of metasilicate's key advantages over pure caustic soda is its corrosion inhibition. Silicate forms a protective polysilicate layer on the metal surface, preventing alkaline attack on aluminum, copper and steel. This makes it nearly indispensable in industrial dishwasher detergents.</p><h2 id='grade'>Selecting the Right Grade</h2><p>The pentahydrate grade (Na₂SiO₃·5H₂O) has milder alkalinity and is suitable for household dishwashing detergents and sensitive formulations. The anhydrous grade is more alkaline and reactive, used for industrial cleaners and powerful degreasers. Consulting with a Khavar Sadra technical specialist can help you select the right grade for your production line.</p>"
  },
  {
    "slug": "pva-grades-differences",
    "title_fa": "تفاوت گریدهای پلی‌وینیل الکل (PVA) و معیارهای انتخاب",
    "title_en": "Differences Between PVA Grades and Selection Criteria",
    "category": "polymers",
    "date": "2025-08-28",
    "readingTime": 7,
    "author": "تیم فنی خاور صدرا",
    "author_en": "Khavar Sadra Technical Team",
    "image": "https://images.unsplash.com/photo-1611123624238-8cfff6c3a9c?auto=format&fit=crop&w=1600&q=70",
    "excerpt_fa": "PVA در گریدهای مختلف هیدرولیز و ویسکوزیته عرضه می‌شود. در این مقاله تفاوت‌های کلیدی و معیارهای انتخاب برای هر کاربرد را بررسی می‌کنیم.",
    "excerpt_en": "PVA is supplied in various hydrolysis and viscosity grades. This article examines the key differences and selection criteria for each application.",
    "tags_fa": [
      "پلیمر",
      "PVA",
      "چسب"
    ],
    "tags_en": [
      "Polymer",
      "PVA",
      "Adhesive"
    ],
    "toc_fa": [
      {
        "id": "intro",
        "title": "PVA چیست و چرا گریدهای مختلف دارد؟"
      },
      {
        "id": "hydrolysis",
        "title": "درجه هیدرولیز چیست؟"
      },
      {
        "id": "viscosity",
        "title": "ویسکوزیته و وزن مولکولی"
      },
      {
        "id": "applications",
        "title": "گرید مناسب برای هر کاربرد"
      },
      {
        "id": "summary",
        "title": "خلاصه انتخاب"
      }
    ],
    "toc_en": [
      {
        "id": "intro",
        "title": "What is PVA and Why Multiple Grades?"
      },
      {
        "id": "hydrolysis",
        "title": "What is Hydrolysis Degree?"
      },
      {
        "id": "viscosity",
        "title": "Viscosity and Molecular Weight"
      },
      {
        "id": "applications",
        "title": "Suitable Grade per Application"
      },
      {
        "id": "summary",
        "title": "Selection Summary"
      }
    ],
    "content_fa": "<p>پلی‌وینیل الکل (PVA) یک پلیمر سنتزی محلول در آب است که از هیدرولیز پلی‌وینیل استات (PVAc) به دست می‌آید. بسته به میزان هیدرولیز و وزن مولکولی، گریدهای مختلفی از این پلیمر تولید می‌شود که هر کدام برای کاربرد خاصی طراحی شده‌اند.</p><h2 id='intro'>PVA چیست و چرا گریدهای مختلف دارد؟</h2><p>PVA به دلیل تنوع در درجه هیدرولیز و وزن مولکولی، طیف وسیعی از خواص فیزیکی و شیمیایی را ارائه می‌دهد. انتخاب گرید اشتباه می‌تواند باعث افت کیفیت محصول نهایی، ناپایداری فیلم یا کاهش چسبندگی شود. به همین دلیل آشنایی با دو پارامتر اصلی تعیین‌کننده گرید ضروری است.</p><h2 id='hydrolysis'>درجه هیدرولیز چیست؟</h2><p>درجه هیدرولیز درصد گروه‌های استیل است که به گروه‌های هیدروکسیل تبدیل شده‌اند. گرید کاملاً هیدرولیز (۹۸ تا ۹۹٪) مقاومت بالاتری به آب و حلال‌ها دارد و فیلم سخت‌تر و شفاف‌تری ایجاد می‌کند. گرید پاره‌ای هیدرولیز (۸۷ تا ۸۹٪) انعطاف‌پذیرتر، محلول‌تر در آب سرد و برای کاربردهایی که نیاز به انعطاف و قابلیت انحلال مجدد دارند مناسب‌تر است.</p><h2 id='viscosity'>ویسکوزیته و وزن مولکولی</h2><p>ویسکوزیته محلول PVA با وزن مولکولی پلیمر رابطه مستقیم دارد. ویسکوزیته پایین (۴ تا ۶ سانتی‌پواز) برای فیلم‌های نازک و اسپری‌ها مناسب است. ویسکوزیته متوسط (۲۰ تا ۳۵ سانتی‌پواز) رایج‌ترین دسته برای چسب‌ها و پوشش‌هاست. ویسکوزیته بالا (۵۰ سانتی‌پواز و بالاتر) برای کاربردهایی که نیاز به ساختار مکانیکی قوی دارند مانند اندازه‌کردن نساجی استفاده می‌شود.</p><h2 id='applications'>گرید مناسب برای هر کاربرد</h2><p>برای چسب‌های چوب و بسته‌بندی، گرید پاره‌ای هیدرولیز با ویسکوزیته متوسط معمول است. برای کپسول‌های شوینده محلول در آب، گرید پاره‌ای هیدرولیز با ویسکوزیته پایین ترجیح داده می‌شود. برای فیلم‌های مقاوم در برابر رطوبت، گرید کاملاً هیدرولیز با ویسکوزیته متوسط مناسب است.</p><h2 id='summary'>خلاصه انتخاب</h2><p>برای انتخاب گرید مناسب، به سه سوال پاسخ دهید: ۱) محصول نهایی با آب تماس خواهد داشت؟ ۲) به انعطاف نیاز دارید یا مقاومت؟ ۳) ویسکوزیته فرمولاسیون شما در چه محدوده‌ای قابل کنترل است؟ کارشناس فنی خاور صدرا می‌تواند بر اساس این پاسخ‌ها، گرید بهینه را پیشنهاد دهد.</p>",
    "content_en": "<p>Polyvinyl alcohol (PVA) is a water-soluble synthetic polymer produced by hydrolysis of polyvinyl acetate (PVAc). Depending on the degree of hydrolysis and molecular weight, different grades are produced, each designed for specific applications.</p><h2 id='intro'>What is PVA and Why Multiple Grades?</h2><p>PVA's range of hydrolysis degrees and molecular weights offers a wide spectrum of physical and chemical properties. Selecting the wrong grade can cause quality loss, film instability or reduced adhesion. Familiarity with the two main grade-determining parameters is therefore essential.</p><h2 id='hydrolysis'>What is Hydrolysis Degree?</h2><p>Hydrolysis degree is the percentage of acetyl groups converted to hydroxyl groups. Fully hydrolyzed grades (98–99%) have higher water and solvent resistance and create harder, clearer films. Partially hydrolyzed grades (87–89%) are more flexible, more soluble in cold water and better for applications requiring flexibility and re-dispersibility.</p><h2 id='viscosity'>Viscosity and Molecular Weight</h2><p>PVA solution viscosity directly correlates with polymer molecular weight. Low viscosity (4–6 cP) suits thin films and sprays. Medium viscosity (20–35 cP) is the most common category for adhesives and coatings. High viscosity (50 cP and above) is used for applications requiring strong mechanical structure such as textile sizing.</p><h2 id='applications'>Suitable Grade per Application</h2><p>For wood and packaging adhesives, partially hydrolyzed medium-viscosity grade is common. For water-soluble detergent capsules, partially hydrolyzed low-viscosity grade is preferred. For moisture-resistant films, fully hydrolyzed medium-viscosity grade is appropriate.</p><h2 id='summary'>Selection Summary</h2><p>To select the right grade, answer three questions: 1) Will the final product contact water? 2) Do you need flexibility or resistance? 3) What viscosity range can your formulation handle? A Khavar Sadra technical specialist can recommend the optimal grade based on these answers.</p>"
  },
  {
    "slug": "safe-storage-of-acids",
    "title_fa": "ایمنی انبارش اسیدهای صنعتی: فسفریک، سولفوریک و نیتریک",
    "title_en": "Safe Storage of Industrial Acids: Phosphoric, Sulfuric and Nitric",
    "category": "safety",
    "date": "2025-08-10",
    "readingTime": 8,
    "author": "تیم فنی خاور صدرا",
    "author_en": "Khavar Sadra Technical Team",
    "image": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1600&q=70",
    "excerpt_fa": "هر اسید خطرات و الزامات انبارش مخصوص به خود را دارد. این راهنما اصول عمومی و نکات اختصاصی برای سه اسید پرکاربرد صنعتی را مرور می‌کند.",
    "excerpt_en": "Each acid has its own storage hazards and requirements. This guide reviews general principles and specific notes for three widely used industrial acids.",
    "tags_fa": [
      "ایمنی",
      "اسید",
      "انبارش"
    ],
    "tags_en": [
      "Safety",
      "Acid",
      "Storage"
    ],
    "toc_fa": [
      {
        "id": "intro",
        "title": "اهمیت انبارش ایمن"
      },
      {
        "id": "general",
        "title": "اصول عمومی"
      },
      {
        "id": "phosphoric",
        "title": "اسید فسفریک"
      },
      {
        "id": "sulfuric",
        "title": "اسید سولفوریک"
      },
      {
        "id": "nitric",
        "title": "اسید نیتریک"
      }
    ],
    "toc_en": [
      {
        "id": "intro",
        "title": "Importance of Safe Storage"
      },
      {
        "id": "general",
        "title": "General Principles"
      },
      {
        "id": "phosphoric",
        "title": "Phosphoric Acid"
      },
      {
        "id": "sulfuric",
        "title": "Sulfuric Acid"
      },
      {
        "id": "nitric",
        "title": "Nitric Acid"
      }
    ],
    "content_fa": "<p>اسیدهای صنعتی از پایه‌ای‌ترین مواد در صنایع شیمیایی هستند اما به دلیل خطرات جدی برای سلامت انسان و ایمنی تأسیسات، انبارش و جابجایی آن‌ها نیازمند رعایت دقیق اصول ایمنی است.</p><h2 id='intro'>اهمیت انبارش ایمن</h2><p>انبارش نادرست اسیدها می‌تواند باعث نشتی، خوردگی تأسیسات، آلودگی محیط زیست و آسیب به کارکنان شود. علاوه بر این، افت کیفیت محصول، تغییر رنگ و افزایش ناخالصی از عواقب شایع نگهداری غیراصولی است. در ادامه اصول عمومی و نکات اختصاصی هر اسید را مرور می‌کنیم.</p><h2 id='general'>اصول عمومی</h2><p>انبار اسید باید دارای تهویه قوی، کف مقاوم به اسید، دستگاه‌های تشخیص نشتی و تجهیزات اطفای حریق مناسب باشد. ظروف اسید باید برچسب‌گذاری شده، دور از بازارها، اکسیدکننده‌ها و مواد آلی نگهداری شوند. کارکنان باید از تجهیزات محافظ فردی کامل (دستکش اسیدپروپیل، عینک، روپوش، کفش ایمن) استفاده کنند. دستگاه شستشوی چارک یا چشم‌شوی باید در دسترس باشد.</p><h2 id='phosphoric'>اسید فسفریک</h2><p>اسید فسفریک (۸۵٪) یک اسید متوسط است که در بشکه‌های پلی‌اتیلن یا تانک‌های IBC نگهداری می‌شود. این اسید با فلزات واکنش می‌دهد و تولید گاز هیدروژن می‌کند که خطر انفجار دارد. نگهداری در ظروف فولاد ضدزنگ (316L) برای حجم‌های بالا توصیه می‌شود. عمر مفید ۱۲ ماه است.</p><h2 id='sulfuric'>اسید سولفوریک</h2><p>اسید سولفوریک (۹۸٪) به شدت خورنده و واکنش با آب آن به شدت گرمازاست. هرگز آب را به اسید اضافه نکنید. این اسید در ظروف پلی‌اتیلن با ضخامت بالا یا فولاد ضدزنگ نگهداری می‌شود. کف انبار باید دارای شیب رو به حوضچه خنثی‌سازی باشد. نشتی کوچک می‌تواند باعث سوختگی شدید شود.</p><h2 id='nitric'>اسید نیتریک</h2><p>اسید نیتریک یک اکسیدکننده قوی است که با مواد آلی واکنش شدید می‌دهد و گازهای سمی NOₓ تولید می‌کند. نگهداری باید در ظروف پلی‌اتیلن یا شیشه‌ای تیره، دور از هرگونه ماده قابل اشتعال باشد. تهویه انبار باید فعال و مداوم باشد.</p>",
    "content_en": "<p>Industrial acids are foundational materials in the chemical industry, but their storage and handling require strict safety compliance due to serious risks to human health and facility safety.</p><h2 id='intro'>Importance of Safe Storage</h2><p>Improper acid storage can cause leaks, facility corrosion, environmental contamination and personnel injury. Beyond this, product quality loss, discoloration and increased impurities are common consequences of improper storage. Below we review general principles and specific notes for each acid.</p><h2 id='general'>General Principles</h2><p>Acid storage should have strong ventilation, acid-resistant flooring, leak detection devices and appropriate fire suppression. Acid containers must be labeled and stored away from alkalis, oxidizers and organic materials. Personnel must use full personal protective equipment (acid-resistant gloves, goggles, suit, safety shoes). An eyewash and emergency shower must be accessible.</p><h2 id='phosphoric'>Phosphoric Acid</h2><p>Phosphoric acid (85%) is a medium acid stored in polyethylene drums or IBC tanks. It reacts with metals and produces hydrogen gas, posing an explosion risk. Storage in 316L stainless steel vessels is recommended for large volumes. Shelf life is 12 months.</p><h2 id='sulfuric'>Sulfuric Acid</h2><p>Sulfuric acid (98%) is highly corrosive and its reaction with water is extremely exothermic. Never add water to acid. It is stored in high-density polyethylene or stainless steel vessels. Storage floors should slope toward a neutralization sump. Even a small leak can cause severe burns.</p><h2 id='nitric'>Nitric Acid</h2><p>Nitric acid is a strong oxidizer that reacts violently with organic materials and produces toxic NOₓ gases. Storage should be in polyethylene or dark glass containers, away from any flammable material. Storage ventilation must be active and continuous.</p>"
  },
  {
    "slug": "xanthan-gum-food-drilling",
    "title_fa": "صمغ زانتان در صنایع غذایی و گل حفاری",
    "title_en": "Xanthan Gum in Food Industries and Drilling Mud",
    "category": "additives",
    "date": "2025-07-22",
    "readingTime": 6,
    "author": "تیم فنی خاور صدرا",
    "author_en": "Khavar Sadra Technical Team",
    "image": "https://images.unsplash.com/photo-1565043589221-994025e2cd1d?auto=format&fit=crop&w=1600&q=70",
    "excerpt_fa": "صمغ زانتان به دلیل رفتار رئولوژیک پلاستیک و سازگاری با محدوده وسیع دما و pH، در دو صنعت به ظاهر بی‌ربط یعنی غذا و حفاری کاربرد موثری دارد.",
    "excerpt_en": "Thanks to its plastic rheological behavior and compatibility with a wide temperature and pH range, xanthan gum is effectively used in two seemingly unrelated industries — food and drilling.",
    "tags_fa": [
      "صمغ",
      "زانتان",
      "حفاری",
      "غذا"
    ],
    "tags_en": [
      "Gum",
      "Xanthan",
      "Drilling",
      "Food"
    ],
    "toc_fa": [
      {
        "id": "intro",
        "title": "زانتان چیست؟"
      },
      {
        "id": "rheology",
        "title": "رفتار رئولوژیک کلید موفقیت"
      },
      {
        "id": "food",
        "title": "در صنایع غذایی"
      },
      {
        "id": "drilling",
        "title": "در گل حفاری"
      },
      {
        "id": "grade",
        "title": "گرید مناسب"
      }
    ],
    "toc_en": [
      {
        "id": "intro",
        "title": "What is Xanthan?"
      },
      {
        "id": "rheology",
        "title": "Rheological Behavior: The Key"
      },
      {
        "id": "food",
        "title": "In Food Industries"
      },
      {
        "id": "drilling",
        "title": "In Drilling Mud"
      },
      {
        "id": "grade",
        "title": "Suitable Grade"
      }
    ],
    "content_fa": "<p>صمغ زانتان یک پلی‌ساکارید میکروبی است که از تخمیر باکتری Xanthomonas campestris تولید می‌شود. این بیوپلیمر به دلیل خواص منحصربه‌فرد رئولوژیک، در طیف وسیعی از صنایع از غذا تا نفت و گاز کاربرد دارد.</p><h2 id='intro'>زانتان چیست؟</h2><p>زانتان پس از سلولز، یکی از پرکاربردترین بیوپلیمرهای صنعتی است. ساختار شیمیایی آن شامل زنجیره اصلی سلولزی با شاخه‌های جانبی تری‌ساکاریدی است که به آن خاصیت قوام‌دهندگی قوی و رفتار برشی (shear-thinning) می‌دهد. این یعنی ویسکوزیته در حال سکون بالا و در حال برش پایین است.</p><h2 id='rheology'>رفتار رئولوژیک کلید موفقیت</h2><p>خاصیت پلاستیک زانتان باعث می‌شود محصول در حال تولید (برش بالا) روان و قابل پمپاژ باشد، اما در حال سکون (در بسته‌بندی یا در چاه) ویسکوز و پایدار باقی بماند. این ویژگی، زانتان را برای هر دو کاربرد غذایی و صنعتی ایده‌آل می‌کند.</p><h2 id='food'>در صنایع غذایی</h2><p>زانتان در سس‌ها، لبنیات، بستنی، نوشیدنی‌ها و محصولات بدون گلوتن به‌عنوان تثبیت‌کننده، قوام‌دهنده و عامل تعلیق استفاده می‌شود. در سس‌های سالاد، از زانتان برای جلوگیری از جداشدن فاز روغن و آب استفاده می‌شود. در بستنی، از تشکیل بلورهای یخ بزرگ جلوگیری می‌کند.</p><h2 id='drilling'>در گل حفاری</h2><p>در چاه‌های نفت و گاز، زانتان به گل حفاری افزوده می‌شود تا ویسکوزیته گل را در زمان پمپاژ (برش بالا) پایین نگه دارد و در زمان توقف (برش پایین) قطعات حفاری را معلق نگه دارد. این رفتار، حمل قطعات به سطح را تضمین می‌کند. زانتان نسبت به پلیمرهای سنتزی مانند PAC و CMC در دماهای پایین‌تر و شوره بیشتر بهتر عمل می‌کند.</p><h2 id='grade'>گرید مناسب</h2><p>برای صنایع غذایی، گرید Food Grade با خلوص بالا و مطابق با استانداردهای FCC لازم است. برای حفاری، گرید صنعتی با ویسکوزیته بالا (۱۶۰۰ تا ۲۰۰۰ سانتی‌پواز در محلول ۱٪) مناسب است. خاور صدرا هر دو گرید را تأمین می‌کند.</p>",
    "content_en": "<p>Xanthan gum is a microbial polysaccharide produced by fermentation of the bacterium Xanthomonas campestris. Due to its unique rheological properties, this biopolymer is used in a wide range of industries from food to oil and gas.</p><h2 id='intro'>What is Xanthan?</h2><p>After cellulose, xanthan is one of the most widely used industrial biopolymers. Its chemical structure consists of a cellulosic main chain with trisaccharide side branches, giving it strong thickening properties and shear-thinning behavior. This means viscosity is high at rest and low under shear.</p><h2 id='rheology'>Rheological Behavior: The Key</h2><p>Xanthan's plastic behavior makes the product flow easily during production (high shear) while remaining viscous and stable at rest (in packaging or in the well). This property makes xanthan ideal for both food and industrial applications.</p><h2 id='food'>In Food Industries</h2><p>Xanthan is used in sauces, dairy, ice cream, beverages and gluten-free products as a stabilizer, thickener and suspending agent. In salad dressings, xanthan prevents oil-water phase separation. In ice cream, it prevents large ice crystal formation.</p><h2 id='drilling'>In Drilling Mud</h2><p>In oil and gas wells, xanthan is added to drilling mud to keep mud viscosity low during pumping (high shear) and suspend drill cuttings at rest (low shear). This behavior ensures cuttings transport to the surface. Xanthan performs better at lower temperatures and higher salinity than synthetic polymers like PAC and CMC.</p><h2 id='grade'>Suitable Grade</h2><p>For food industries, Food Grade with high purity and FCC-compliant standards is required. For drilling, industrial grade with high viscosity (1600–2000 cP in 1% solution) is suitable. Khavar Sadra supplies both grades.</p>"
  },
  {
    "slug": "choosing-surfactant-base",
    "title_fa": "انتخاب سورفاکتانت پایه برای فرمولاسیون شوینده",
    "title_en": "Choosing the Base Surfactant for Detergent Formulation",
    "category": "detergents",
    "date": "2025-07-05",
    "readingTime": 7,
    "author": "تیم فنی خاور صدرا",
    "author_en": "Khavar Sadra Technical Team",
    "image": "https://images.unsplash.com/photo-1607998491335-30c4f7e8c8f0?auto=format&fit=crop&w=1600&q=70",
    "excerpt_fa": "LABSA، SLES و SLS پرکاربردترین سورفاکتانت‌های آنیونی در صنعت شوینده‌اند. هر یک نقاط قوت و محدودیت‌های خود را دارند. این راهنما به انتخاب بین آن‌ها کمک می‌کند.",
    "excerpt_en": "LABSA, SLES and SLS are the most common anionic surfactants in the detergent industry. Each has its strengths and limitations. This guide helps you choose between them.",
    "tags_fa": [
      "سورفاکتانت",
      "شوینده",
      "LABSA"
    ],
    "tags_en": [
      "Surfactant",
      "Detergent",
      "LABSA"
    ],
    "toc_fa": [
      {
        "id": "intro",
        "title": "چرا انتخاب سورفاکتانت مهم است؟"
      },
      {
        "id": "labsa",
        "title": "LABSA: اقتصادی و قدرتمند"
      },
      {
        "id": "sles",
        "title": "SLES: ملایم و کف‌دهنده"
      },
      {
        "id": "sls",
        "title": "SLS: قوی اما تحریک‌کننده"
      },
      {
        "id": "comparison",
        "title": "مقایسه و انتخاب نهایی"
      }
    ],
    "toc_en": [
      {
        "id": "intro",
        "title": "Why Surfactant Choice Matters"
      },
      {
        "id": "labsa",
        "title": "LABSA: Economic and Powerful"
      },
      {
        "id": "sles",
        "title": "SLES: Mild and Foaming"
      },
      {
        "id": "sls",
        "title": "SLS: Strong but Irritating"
      },
      {
        "id": "comparison",
        "title": "Comparison and Final Choice"
      }
    ],
    "content_fa": "<p>سورفاکتانت پایه، قلب هر فرمولاسیون شوینده است. انتخاب درست آن، نه‌تنها بر قدرت پاک‌کنندگی بلکه بر کف، سازگاری با پوست، قیمت تمام‌شده و حتی رفتار در آب سخت تأثیر می‌گذارد.</p><h2 id='intro'>چرا انتخاب سورفاکتانت مهم است؟</h2><p>سورفاکتانت‌های آنیونی به دلیل قیمت مناسب و قدرت پاک‌کنندگی بالا، پایه‌ی اکثر شوینده‌های خانگی و صنعتی هستند. اما هر یک از آن‌ها نقاط قوت و ضعف مخصوص به خود را دارند. انتخاب اشتباه می‌تواند باعث افت کیفیت، افزایش هزینه یا حتی عدم پذیرش محصول توسط مشتری شود.</p><h2 id='labsa'>LABSA: اقتصادی و قدرتمند</h2><p>اسید سولفونیک لینیر آلکیل بنزن (LABSA) اقتصادی‌ترین و پرکاربردترین سورفاکتانت آنیونی در صنعت شوینده ایران است. ماده فعال ۹۶٪، قیمت پایین، سازگاری با آب سخت و عملکرد عالی در پودر و خمیر شوینده از مزایای اصلی آن است. اما برای محصولات بهداشتی پوست مناسب نیست و باید با سورفاکتانت‌های ملایم‌تر ترکیب شود.</p><h2 id='sles'>SLES: ملایم و کف‌دهنده</h2><p>سدیم لورت اتر سولفات (SLES) به دلیل کف‌دهندگی عالی، سازگاری با پوست و قابلیت ترکیب آسان با سایر سورفاکتانت‌ها، در شامپوها، ژل‌های حمام و مایع دستشویی رایج است. SLES به‌صورت ۲۸٪ و ۷۰٪ فعال عرضه می‌شود. گرید ۲EO نسبت به ۳EO ملایم‌تر است.</p><h2 id='sls'>SLS: قوی اما تحریک‌کننده</h2><p>سدیم لوریل سولفات (SLS) قدرت پاک‌کنندگی و کف‌دهندگی بالایی دارد اما به دلیل تحریک‌پذیری بالا، امروزه در محصولات بهداشتی پوست استفاده کمتری دارد. کاربرد اصلی آن در شوینده‌های صنعتی، خمیردندان و برخی محصولات تحریک‌پذیری پوست مهم نیست.</p><h2 id='comparison'>مقایسه و انتخاب نهایی</h2><p>برای پودر و خمیر لباسشویی، LABSA گزینه اقتصادی است. برای شامپو و ژل حمام، ترکیب SLES با کمک سورفاکتانت‌های آمفوتریک بهترین تعادل را می‌دهد. برای شوینده‌های صنعتی قوی، SLS یا LABSA بسته به کاربرد. مشاوره با کارشناس فنی خاور صدرا می‌تواند به شما در انتخاب ترکیب بهینه کمک کند.</p>",
    "content_en": "<p>The base surfactant is the heart of any detergent formulation. The right choice affects not only cleaning power but also foam, skin compatibility, cost and even behavior in hard water.</p><h2 id='intro'>Why Surfactant Choice Matters</h2><p>Anionic surfactants are the base of most household and industrial detergents due to their affordable price and high cleaning power. But each has its own strengths and weaknesses. A wrong choice can cause quality loss, increased cost or even customer rejection.</p><h2 id='labsa'>LABSA: Economic and Powerful</h2><p>Linear alkyl benzene sulfonic acid (LABSA) is the most economical and widely used anionic surfactant in the Iranian detergent industry. 96% active matter, low price, hard water compatibility and excellent performance in detergent powders and pastes are its main advantages. But it is not suitable for skin care products and should be combined with milder surfactants.</p><h2 id='sles'>SLES: Mild and Foaming</h2><p>Sodium laureth sulfate (SLES) is common in shampoos, bath gels and hand wash liquids due to its excellent foaming, skin compatibility and easy combination with other surfactants. SLES is supplied as 28% and 70% active. The 2EO grade is milder than 3EO.</p><h2 id='sls'>SLS: Strong but Irritating</h2><p>Sodium lauryl sulfate (SLS) has high cleaning and foaming power, but due to its high irritation, it is now less used in skin care products. Its main application is in industrial cleaners, toothpaste and products where skin irritation is not a concern.</p><h2 id='comparison'>Comparison and Final Choice</h2><p>For laundry powder and paste, LABSA is the economic choice. For shampoo and bath gel, a combination of SLES with amphoteric co-surfactants provides the best balance. For powerful industrial cleaners, SLS or LABSA depending on the application. Consulting with a Khavar Sadra technical specialist can help you choose the optimal combination.</p>"
  },
  {
    "slug": "caustic-soda-handling-safety",
    "title_fa": "ایمنی جابجایی و واکنش سود سوزآور با آب",
    "title_en": "Safe Handling and Water Reaction of Caustic Soda",
    "category": "safety",
    "date": "2025-06-18",
    "readingTime": 5,
    "author": "تیم فنی خاور صدرا",
    "author_en": "Khavar Sadra Technical Team",
    "image": "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1600&q=70",
    "excerpt_fa": "سود سوزآور یکی از پرکاربردترین بازهای صنعتی است اما جابجایی نادرست آن می‌تواند خطرات جدی به همراه داشته باشد. این مقاله اصول ایمنی کلیدی را مرور می‌کند.",
    "excerpt_en": "Caustic soda is one of the most widely used industrial bases, but improper handling can pose serious risks. This article reviews key safety principles.",
    "tags_fa": [
      "ایمنی",
      "سود سوزآور",
      "NaOH"
    ],
    "tags_en": [
      "Safety",
      "Caustic Soda",
      "NaOH"
    ],
    "toc_fa": [
      {
        "id": "intro",
        "title": "خطرات اصلی"
      },
      {
        "id": "ppe",
        "title": "تجهیزات محافظ فردی"
      },
      {
        "id": "dissolution",
        "title": "حل‌کردن در آب"
      },
      {
        "id": "spill",
        "title": "نشتی و واکنش اضطراری"
      }
    ],
    "toc_en": [
      {
        "id": "intro",
        "title": "Main Hazards"
      },
      {
        "id": "ppe",
        "title": "Personal Protective Equipment"
      },
      {
        "id": "dissolution",
        "title": "Dissolution in Water"
      },
      {
        "id": "spill",
        "title": "Spill and Emergency Response"
      }
    ],
    "content_fa": "<p>سود سوزآور (NaOH) به دلیل کاربرد گسترده در صنایع شیمیایی، شوینده، نساجی و تصفیه آب، یکی از پرتقاضاترین مواد شیمیایی صنعتی است. اما به دلیل خورندگی شدید و واکنش گرمازای آن با آب، جابجایی نادرست آن می‌تواند خطرات جدی به همراه داشته باشد.</p><h2 id='intro'>خطرات اصلی</h2><p>سود سوزآور به شدت خورنده است و تماس آن با پوست و چشم می‌تواند باعث سوختگی شیمیایی عمیق و آسیب دائمی شود. واکنش آن با آب به شدت گرمازاست و می‌تواند باعث پاشش محلول داغ و خورنده شود. این ماده با فلزات (آلومینیوم، قلع، روی) واکنش داده و گاز هیدروژن قابل اشتعال تولید می‌کند.</p><h2 id='ppe'>تجهیزات محافظ فردی</h2><p>هنگام جابجایی سود سوزآور باید از دستکش لاستیکی بلند، عینک محافظ ضد پاشش، روپوش اسیدپروپیل، کفش ایمن و در صورت امکان ماسک صورت کامل استفاده کرد. دستگاه شستشوی چارک و چشم‌شوی باید در مجاورت نزدیک محل کار باشد.</p><h2 id='dissolution'>حل‌کردن در آب</h2><p>برای آماده‌سازی محلول NaOH، همیشه سود را به آرامی به آب اضافه کنید، نه برعکس. این کار از پاشش ناگهانی محلول داغ جلوگیری می‌کند. از ظروف پلاستیکی یا فولاد ضدزنگ استفاده کنید و همزن را به آرامی بچرخانید. دمای محلول در حال آماده‌سازی به سرعت بالا می‌رود و نیاز به خنک‌کننده دارد.</p><h2 id='spill'>نشتی و واکنش اضطراری</h2><p>در صورت نشتی، منطقه را تخلیه کرده و با اسید ضعیف (مثل سرکه رقیق) خنثی‌سازی اولیه انجام دهید. سپس با آب فراوان بشویید. هرگز محلول غلیظ NaOH را مستقیماً به فاضلاب نریزید. در صورت تماس با پوست، فوراً ۱۵ دقیقه با آب فراوان شستشو دهید و به پزشک مراجعه کنید.</p>",
    "content_en": "<p>Caustic soda (NaOH) is one of the most in-demand industrial chemicals due to its wide use in chemicals, detergents, textiles and water treatment. But due to its severe corrosivity and exothermic reaction with water, improper handling can pose serious risks.</p><h2 id='intro'>Main Hazards</h2><p>Caustic soda is highly corrosive and contact with skin and eyes can cause deep chemical burns and permanent damage. Its reaction with water is highly exothermic and can cause splashing of hot corrosive solution. It reacts with metals (aluminum, tin, zinc) and produces flammable hydrogen gas.</p><h2 id='ppe'>Personal Protective Equipment</h2><p>When handling caustic soda, use long rubber gloves, splash-proof safety goggles, acid-resistant suit, safety shoes and if possible a full face shield. An emergency shower and eyewash must be nearby.</p><h2 id='dissolution'>Dissolution in Water</h2><p>To prepare NaOH solution, always slowly add caustic to water, never the reverse. This prevents sudden splashing of hot solution. Use plastic or stainless steel containers and stir slowly. The solution temperature rises rapidly during preparation and requires cooling.</p><h2 id='spill'>Spill and Emergency Response</h2><p>In case of spill, evacuate the area and perform initial neutralization with a weak acid (such as diluted vinegar). Then wash with plenty of water. Never discharge concentrated NaOH solution directly to the sewer. In case of skin contact, rinse immediately with plenty of water for 15 minutes and seek medical attention.</p>"
  }
]
};
