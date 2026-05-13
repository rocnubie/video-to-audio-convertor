<p align="center">
  <img src="app/icon.svg" alt="VideoToAudioConverter Logo" width="80" height="80" />
</p>

<h1 align="center">VideoToAudioConverter.org</h1>

<p align="center">
  <a href="./README.md">English</a> ·
  <a href="./README.zh.md">简体中文</a> ·
  <a href="./README.es.md">Español</a> ·
  <a href="./README.ja.md">日本語</a> ·
  <a href="./README.ko.md">한국어</a> ·
  <a href="./README.de.md">Deutsch</a> ·
  <a href="./README.fr.md">Français</a> ·
  <a href="./README.pt.md">Português</a> ·
  <a href="./README.it.md">Italiano</a> ·
  <strong>العربية</strong> ·
  <a href="./README.hi.md">हिन्दी</a>
</p>

<p align="center">
  <strong>أسرع محول مجاني للفيديو إلى صوت — يعمل 100% داخل متصفحك، بدون أي رفع، وبدون أي تتبع.</strong>
</p>

<p align="center">
  <a href="https://videotoaudioconverter.org"><img src="https://img.shields.io/badge/live-videotoaudioconverter.org-0ea5e9?style=flat-square&logo=cloudflare&logoColor=white" alt="Live site" /></a>
  <img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/Tailwind-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind v4" />
  <img src="https://img.shields.io/badge/FFmpeg-WASM-007808?style=flat-square&logo=ffmpeg&logoColor=white" alt="FFmpeg WASM" />
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="MIT License" />
</p>

<p align="center">
  <a href="https://videotoaudioconverter.org">🌐 العرض الحي</a> ·
  <a href="#-getting-started">البدء السريع</a> ·
  <a href="#-how-it-works">آلية العمل</a> ·
  <a href="#-supported-formats">الصيغ</a> ·
  <a href="#-deploy">النشر</a>
</p>

---

## ما هذا المشروع؟

**[VideoToAudioConverter.org](https://videotoaudioconverter.org)** هو **محول فيديو إلى صوت** مفتوح المصدر بجودة إنتاجية، يعمل بالكامل داخل متصفح المستخدم. أفلِت ملف فيديو، اختر صيغة الصوت، اضغط على "تحويل" — فيُنزَّل الصوت فوراً. بدون خادم، بدون حساب، وبدون أي حد لحجم الملف يفرضه خادم خلفي.

```
┌──────────────────────────────────────────────────────────────────┐
│                   Video to Audio Converter                       │
│                                                                  │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │  📂  Drop MP4 / MOV / MKV / WebM / AVI  …or click      │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│   Output format:  [MP3] [WAV] [AAC] [M4A] [FLAC] [OGG] [Opus]  │
│   Quality:        [High 320 kbps]  [Med 192 kbps]  [Low 128]   │
│                                                                  │
│   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░  68 %   Extracting audio …     │
│                                                                  │
│   ✅  output.mp3  (4.2 MB)   [ ⬇ Download ]                    │
│                                                                  │
│   🔒  Your file never leaves your device.                       │
└──────────────────────────────────────────────────────────────────┘
```

<p align="center">
  <a href="https://videotoaudioconverter.org/ar/">
    <img src="https://videotoaudioconverter.org/screenshots/01-hero.webp" alt="Video to audio converter — free online tool to convert MP4, MOV, MKV, WebM, AVI to MP3, WAV, AAC, M4A, FLAC, OGG, Opus directly in the browser with zero upload" width="900" />
  </a>
</p>

<p align="center">
  <a href="https://videotoaudioconverter.org/ar/">
    <img src="https://videotoaudioconverter.org/screenshots/07-mobile-hero.webp" alt="Video to audio converter mobile view — works on iPhone Safari and Android Chrome, no app install required" width="320" />
  </a>
</p>


### لماذا محول فيديو إلى صوت آخر؟

| الميزة | VideoToAudioConverter.org | المحولات الإلكترونية النموذجية |
|---|---|---|
| يعمل 100% في المتصفح | ✅ WebCodecs + FFmpeg WASM | ❌ يرفع إلى الخادم |
| حدّ حجم الملف | ✅ لا يوجد (الذاكرة هي الحد) | ❌ سقف 50–500 ميغابايت |
| الخصوصية / بدون تتبع | ✅ صفر ملفات تعريف ارتباط، صفر رفع | ❌ تُخزَّن الملفات على الخادم |
| يعمل دون اتصال (بعد التحميل الأول) | ✅ WASM مخزَّن للأبد | ❌ يحتاج إنترنت |
| مفتوح المصدر | ✅ MIT | ❌ مغلق المصدر |
| خالٍ من الإعلانات | ✅ | ❌ إعلانات عدوانية |
| سريع (الصيغ الحديثة) | ✅ سرعة WebCodecs الأصلية | ❌ طابور خادم |

---

## ✨ الميزات

### المحوّل الأساسي

- **السحب والإفلات** أو الضغط لاختيار أي ملف فيديو
- **9 صيغ مدخلة** ← MP4, MOV, MKV, WebM, AVI, FLV, WMV, 3GP, MPEG
- **7 صيغ مخرجة** ← MP3, WAV, M4A, AAC, FLAC, OGG, Opus
- **إعدادات جودة مسبقة** ← عالية (320 kbps)، متوسطة (192 kbps)، منخفضة (128 kbps)، بدون فقدان
- **شريط تقدم لحظي** بتسميات المراحل (demux ← decode ← encode ← mux)
- **تنزيل فوري** — يُقدَّم الصوت من الذاكرة، ولا يلامس خادماً أبداً

### بنية تحترم الخصوصية أولاً

```
User Device
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  Video File  ──▶  Browser Engine  ──▶  Audio File      │
│  (local disk)      (WASM / JS)        (local disk)     │
│                                                         │
│  ✗  No upload    ✗  No server call    ✗  No storage     │
└─────────────────────────────────────────────────────────┘
         │
         │ only anonymous analytics event fired
         ▼
   Plausible (cookieless)
```

### صفحات هبوط محسَّنة لمحركات البحث لكل صيغة

صفحات هبوط مخصصة ومترجَمة بالكامل لكل ثنائية تحويل **فيديو إلى صوت** شائعة:

| الصفحة | الرابط الحي |
|---|---|
| محول MP4 إلى MP3 | [videotoaudioconverter.org/ar/mp4-to-mp3](https://videotoaudioconverter.org/ar/mp4-to-mp3) |
| محول MOV إلى MP3 | [videotoaudioconverter.org/ar/mov-to-mp3](https://videotoaudioconverter.org/ar/mov-to-mp3) |
| محول MKV إلى MP3 | [videotoaudioconverter.org/ar/mkv-to-mp3](https://videotoaudioconverter.org/ar/mkv-to-mp3) |
| محول WebM إلى MP3 | [videotoaudioconverter.org/ar/webm-to-mp3](https://videotoaudioconverter.org/ar/webm-to-mp3) |
| محول AVI إلى MP3 | [videotoaudioconverter.org/ar/avi-to-mp3](https://videotoaudioconverter.org/ar/avi-to-mp3) |

تحتوي كل صفحة على محتوى نصي فريد، ومخططات JSON-LD (SoftwareApplication، HowTo، FAQPage)، ووسوم Open Graph — بدون أي محتوى مكرر.

### التعريب وتعدد اللغات

- الإنجليزية (`/en/`) والفرنسية (`/fr/`) جاهزتان من البداية
- مساحات أسماء الرسائل لكل صفحة لتعريب عميق (وليس فقط نصوص الواجهة)
- البنية التحتية جاهزة لأكثر من 15 لغة إضافية (zh, ja, ko, es, de, pt, it, ru, ar, hi, id, tr, vi …)

---

## 🔧 آلية العمل

يعتمد المحوّل على **بنية ثنائية المحركات** تختار تلقائياً المحرك الأسرع المتاح لكل ملف إدخال:

```
                 User drops a video file
                          │
                          ▼
              ┌───────────────────────┐
              │   pickEngineHint()    │
              │  (check file ext)     │
              └───────────┬───────────┘
                          │
          ┌───────────────┴───────────────┐
          │                               │
   MP4 / MOV / MKV / WebM         AVI / FLV / WMV / 3GP
          │                               │
          ▼                               ▼
  ┌───────────────────┐         ┌──────────────────────┐
  │    MediaBunny     │         │    FFmpeg WASM        │
  │   (WebCodecs)     │         │  (@ffmpeg/ffmpeg)     │
  │                   │         │                       │
  │  Native browser   │         │  30 MB WASM bundle    │
  │  codec pipeline   │         │  full format support  │
  │  ~10× faster      │         │  AVI/FLV/WMV/3GP etc  │
  └────────┬──────────┘         └──────────┬────────────┘
           │                               │
           └───────────────┬───────────────┘
                           │
                           ▼
                   Audio Blob (MP3/WAV/…)
                           │
                           ▼
                   Browser Downloads File
```

### تفاصيل المحركات

#### MediaBunny — المحرك الأساسي

تُغلّف [MediaBunny](https://github.com/nicktindall/mediabunny) واجهة **WebCodecs API** الأصلية للمتصفح ضمن خط أنابيب تحويل ترميز بسيط. تعمل في الخيط الرئيسي بدون أي عبء WASM للصيغ المدعومة.

- **المدخلات المدعومة:** MP4, M4V, MOV, QT, MKV, WebM
- **السرعة:** قريبة من السرعة الأصلية — يمكن تحويل MP4 مدته ساعة في نحو 10 ثوانٍ على الأجهزة الحديثة
- **لا يتطلب رؤوس COOP/COEP** — يعمل جنباً إلى جنب مع نصوص الطرف الثالث

#### FFmpeg WASM — المحرك الاحتياطي

تُصرِّف [@ffmpeg/ffmpeg](https://github.com/ffmpegwasm/ffmpeg.wasm) ملف FFmpeg الثنائي الكامل إلى WebAssembly. يعمل بخيط وحيد (لا يتطلب SharedArrayBuffer / COOP).

- **المدخلات المدعومة:** AVI, FLV, WMV, 3GP, MPEG، وأي صيغة لا تستطيع MediaBunny التعامل معها
- **حجم WASM:** ~31 ميغابايت (مخزَّن عبر `Cache-Control: immutable, max-age=31536000`)
- **طبقة JS مستضافة ذاتياً** على `/ffmpeg-core/ffmpeg-core.js` لتجنب الاعتماد على شبكات CDN

---

## 📂 الصيغ المدعومة

### صيغ الإدخال (فيديو إلى صوت)

| الصيغة | الامتداد(ات) | المحرك | ملاحظات |
|---|---|---|---|
| MP4 | `.mp4`, `.m4v` | MediaBunny | أكثر صيغ الفيديو شيوعاً |
| MOV | `.mov`, `.qt` | MediaBunny | Apple QuickTime |
| MKV | `.mkv` | MediaBunny | حاوية Matroska |
| WebM | `.webm` | MediaBunny | أصلية للويب (VP8/VP9/AV1) |
| AVI | `.avi` | FFmpeg WASM | صيغة ويندوز القديمة |
| FLV | `.flv` | FFmpeg WASM | فيديو فلاش |
| WMV | `.wmv` | FFmpeg WASM | فيديو Windows Media |
| 3GP | `.3gp` | FFmpeg WASM | فيديو الجوال |
| MPEG | `.mpeg`, `.mpg` | FFmpeg WASM | صيغة البث القديمة |

### صيغ الإخراج (صوت)

| الصيغة | خيارات الجودة | حالة الاستخدام |
|---|---|---|
| **MP3** | 128 / 192 / 320 kbps | توافق شامل، بث، بودكاست |
| **WAV** | PCM بدون فقدان | صوت احترافي، استيراد إلى DAW |
| **AAC** | 128 / 192 / 320 kbps | أجهزة Apple، iTunes، ضغط أفضل من MP3 |
| **M4A** | 128 / 192 / 320 kbps | iTunes، Apple Music |
| **FLAC** | بدون فقدان | أرشفة احترافية للمتحمسين للجودة |
| **OGG** | 128 / 192 / 320 kbps | صيغة مفتوحة، ضغط ممتاز |
| **Opus** | 128 / 192 / 320 kbps | أفضل نسبة ضغط/جودة، VoIP |

---

## 🚀 البدء

### المتطلبات المسبقة

- **Node.js** الإصدار 20 أو أعلى
- **pnpm** الإصدار 9 أو أعلى (`npm install -g pnpm`)

### التثبيت

```bash
git clone https://github.com/rocnubie/video-to-audio-convertor.git
cd video-to-audio-convertor

pnpm install
# postinstall automatically copies @ffmpeg/core WASM into public/ffmpeg-core/
```

### خادم التطوير

```bash
pnpm dev
```

افتح [http://localhost:3000](http://localhost:3000) — يقوم التطبيق بإعادة التوجيه إلى `/en/` تلقائياً.

> **نصيحة:** عند تحميل FFmpeg WASM لأول مرة (~31 ميغابايت) سيكون بطيئاً. التحميلات اللاحقة فورية بفضل `Cache-Control: immutable`.

### متغيرات البيئة

انسخ `.env.example` إلى `.env.local`:

```bash
cp .env.example .env.local
```

| المتغير | الوصف | مثال |
|---|---|---|
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | نطاق موقعك في Plausible | `videotoaudioconverter.org` |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` | رابط نص Plausible | `https://plausible.io/js/script.tagged-events.outbound-links.js` |

اتركهما فارغين في وضع التطوير — سيتم ببساطة تخطي التحليلات.

---

## 🏗️ حزمة التقنيات

```
┌─────────────────────────────────────────────────────────────────┐
│                      Application Layer                          │
│  Next.js 16 (App Router)  ·  React 19  ·  TypeScript 5         │
├──────────────────────┬──────────────────────────────────────────┤
│    UI / Styling      │           Core Libraries                 │
│                      │                                          │
│  Tailwind CSS v4     │  MediaBunny 1.44 (WebCodecs engine)     │
│  shadcn/ui           │  @ffmpeg/ffmpeg 0.12 (WASM engine)      │
│  Radix UI            │  next-intl 4 (i18n)                     │
│  Lucide Icons        │  react-dropzone 15                      │
│  OKLCH color system  │  Sonner (toast notifications)           │
│                      │  Plausible Analytics (typed events)     │
├──────────────────────┴──────────────────────────────────────────┤
│                      Infrastructure                             │
│  Cloudflare Pages (static hosting)  ·  pnpm  ·  ESLint         │
└─────────────────────────────────────────────────────────────────┘
```

### لماذا هذه الاختيارات؟

**التصدير الثابت من Next.js** — يُولَّد الموقع بالكامل مسبقاً إلى ملفات HTML/JS/CSS مسطحة. لا يوجد خادم Node.js في الإنتاج. تقدم Cloudflare Pages كل شيء من الحافة (edge).

**MediaBunny قبل FFmpeg** — في ملفات MP4/MOV/MKV/WebM (وهي الغالبية العظمى من التحويلات)، تستخدم MediaBunny واجهة WebCodecs الأصلية للمتصفح وتكون أسرع بمقدار 5–10 أضعاف من FFmpeg WASM دون أي زمن إقلاع.

**FFmpeg WASM بخيط واحد** — يتطلب FFmpeg متعدد الخيوط `SharedArrayBuffer`، الذي يستلزم `Cross-Origin-Opener-Policy: same-origin` و`Cross-Origin-Embedder-Policy: require-corp`. هذه الرؤوس تكسر نصوص الطرف الثالث (التحليلات، الخطوط، الإعلانات). الإصدار وحيد الخيط يتجنب كل ذلك.

**Tailwind v4 + OKLCH** — يستخدم نظام التصميم فضاء الألوان OKLCH للحصول على لمسات تييل/سماوي موحدة إدراكياً تبدو صحيحة في الوضعين الفاتح والداكن دون الحاجة إلى تجاوزات يدوية للوضع الداكن لكل مكوّن.

---

## 📁 بنية الملفات

```
videotoaudioconverter.org/
│
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx              # Locale layout (Header, Footer, Plausible, JSON-LD)
│   │   ├── page.tsx                # Homepage (hero, converter, features, FAQ)
│   │   ├── mp4-to-mp3/page.tsx     # "MP4 to MP3 Converter" landing page
│   │   ├── mov-to-mp3/page.tsx     # "MOV to MP3 Converter" landing page
│   │   ├── mkv-to-mp3/page.tsx     # "MKV to MP3 Converter" landing page
│   │   ├── webm-to-mp3/page.tsx    # "WebM to MP3 Converter" landing page
│   │   ├── avi-to-mp3/page.tsx     # "AVI to MP3 Converter" landing page
│   │   ├── about/page.tsx
│   │   └── privacy/page.tsx
│   ├── layout.tsx                  # Root layout (viewport, theme)
│   ├── globals.css                 # Tailwind entry + utility classes
│   ├── theme.css                   # OKLCH design tokens, light/dark
│   ├── icon.svg                    # App icon
│   ├── robots.ts                   # robots.txt via Next.js Metadata API
│   └── sitemap.ts                  # XML sitemap (all locales × all routes)
│
├── components/
│   ├── converter/
│   │   ├── Converter.tsx           # Main converter widget (client component)
│   │   ├── DropZone.tsx            # Drag-and-drop file input
│   │   └── SegmentedPicker.tsx     # Format / quality selector
│   ├── layout/
│   │   ├── Header.tsx              # Nav bar with format links + language switcher
│   │   ├── Footer.tsx              # Footer with links
│   │   └── LanguageSwitcher.tsx    # en ↔ fr dropdown
│   ├── sections/                   # Homepage sections
│   │   ├── HeroProductStage.tsx
│   │   ├── BentoFeatures.tsx
│   │   ├── UseCases.tsx
│   │   ├── Comparison.tsx
│   │   ├── PrivacyStory.tsx
│   │   ├── Steps.tsx
│   │   ├── FAQ.tsx
│   │   └── TrustBar.tsx
│   ├── landing/
│   │   └── FormatLandingPage.tsx   # Reusable component for format pages
│   ├── seo/
│   │   └── JsonLd.tsx              # JSON-LD schema renderer
│   └── ui/                         # shadcn/ui primitives (button, card, dialog …)
│
├── lib/
│   ├── engines/
│   │   ├── types.ts                # OutputFormat, Quality, ConvertOptions, ConvertResult
│   │   ├── index.ts                # Dispatcher: tries MediaBunny, falls back to FFmpeg
│   │   ├── mediabunny.ts           # WebCodecs engine wrapper
│   │   └── ffmpeg.ts               # FFmpeg WASM engine wrapper
│   ├── seo/
│   │   ├── site.ts                 # SITE constants, NAV, absoluteUrl()
│   │   ├── metadata.ts             # buildMetadata() helper
│   │   └── schemas.ts              # Schema.org JSON-LD builders
│   ├── content/
│   │   ├── format-pages.ts         # FORMAT_PAGES config (slug, copy, use-cases)
│   │   └── use-cases.ts            # Shared use-case data
│   ├── analytics.ts                # Typed Plausible event emitter
│   ├── formats.ts                  # INPUT_FORMATS / OUTPUT_FORMATS metadata
│   └── utils.ts                    # cn() — clsx + twMerge
│
├── i18n/
│   ├── routing.ts                  # locales: ['en', 'fr'], defaultLocale: 'en'
│   ├── request.ts                  # Message loader (shared + per-page deep merge)
│   ├── navigation.ts               # next-intl Link, redirect, useRouter
│   ├── locale.ts                   # LOCALE_META table for language switcher
│   └── messages/
│       ├── en.json                 # Shared English strings
│       └── fr.json                 # Shared French strings
│       (+ per-page JSON files under i18n/pages/<slug>/)
│
├── public/
│   ├── ffmpeg-core/
│   │   └── ffmpeg-core.js          # Self-hosted FFmpeg JS shim (~1 MB)
│   │   (ffmpeg-core.wasm loaded from unpkg at runtime)
│   ├── _headers                    # Cloudflare Pages: cache + security headers
│   └── _redirects                  # Cloudflare Pages: / → /en/ etc.
│
├── scripts/
│   └── sync-ffmpeg-core.mjs        # Copies @ffmpeg/core dist into public/
│
├── .env.example
├── next.config.ts                  # output: 'export', trailingSlash: false, next-intl plugin
├── tsconfig.json
├── tailwind.config.ts
└── package.json
```

---

## 🌍 التعريب وتعدد اللغات

يستخدم الموقع [next-intl 4](https://next-intl-docs.vercel.app/) مع مسارات مسبوقة باللغة (`/en/`، `/fr/`).

### إضافة لغة جديدة

1. **سجّل اللغة** في `i18n/routing.ts`:

   ```ts
   export const routing = defineRouting({
     locales: ['en', 'fr', 'de'],  // add 'de'
     defaultLocale: 'en',
   });
   ```

2. **أنشئ الرسائل المشتركة** في `i18n/messages/de.json` (انسخ `en.json` وترجم).

3. **أنشئ رسائل لكل صفحة** لكل نطاق صفحة:

   ```
   i18n/pages/home/de.json
   i18n/pages/mp4-to-mp3/de.json
   … إلخ.
   ```

4. **أضف بيانات اللغة الوصفية** في `i18n/locale.ts`:

   ```ts
   de: { nativeName: 'Deutsch', englishName: 'German' },
   ```

5. يلتقط `sitemap.ts` و`generateStaticParams()` اللغة الجديدة تلقائياً — لا حاجة لتغييرات أخرى.

---

## 📊 التحليلات

يستخدم الموقع [Plausible Analytics](https://plausible.io/) — بدون ملفات تعريف ارتباط، متوافق مع GDPR، ولا تُجمع أي بيانات شخصية.

### الأحداث المخصصة

جميع الأحداث مُعرَّفة بأنواعها في [`lib/analytics.ts`](lib/analytics.ts):

| الحدث | الخصائص | متى يُطلَق |
|---|---|---|
| `file_selected` | `ext`, `size_mb`, `engine_hint` | عندما يُفلت المستخدم أو يختار ملف فيديو |
| `conversion_started` | `from_ext`, `to_format`, `quality` | عند الضغط على زر التحويل |
| `conversion_completed` | `from_ext`, `to_format`, `engine`, `duration_s` | عندما يصبح الصوت جاهزاً |
| `conversion_failed` | `from_ext`, `to_format`, `reason` | عندما يطرح المحرك خطأ |
| `conversion_cancelled` | `from_ext`, `to_format` | عند إلغاء المستخدم للتحويل أثناء العمل |
| `download_clicked` | `format` | عند الضغط على زر التنزيل |

تمنحك هذه الأحداث صورة كاملة عن أكثر مسارات تحويل الفيديو إلى صوت شيوعاً.

---

## 📦 البناء والنشر

### البناء المحلي

```bash
pnpm build       # static export → out/
npx serve out    # preview locally
```

ناتج البناء هو دليل يحوي ملفات مسطحة — لا حاجة لخادم.

### النشر على Cloudflare Pages

1. **اربط مستودعك** في لوحة تحكم Cloudflare Pages.

2. **إعدادات البناء:**

   | الإعداد | القيمة |
   |---|---|
   | أمر البناء | `pnpm build` |
   | دليل ناتج البناء | `out` |
   | إصدار Node.js | `20` |

3. **متغيرات البيئة** (الإنتاج + المعاينة):

   ```
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=videotoaudioconverter.org
   NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL=https://plausible.io/js/script.tagged-events.outbound-links.js
   ```

4. **النطاق المخصص:** أضف `videotoaudioconverter.org` ودع Cloudflare DNS يتولى التوجيه.

### استراتيجية التخزين المؤقت

| الأصل | Cache-Control | السبب |
|---|---|---|
| `/ffmpeg-core/*` | `immutable, max-age=31536000` | معنون بالمحتوى، لا يتغير أبداً |
| `/_next/static/*` | `immutable, max-age=31536000` | Next.js يستخدم أسماء ملفات مُعمَّاة بالمحتوى |
| `/og.png`, `/favicon.ico` | `max-age=604800` | تتحدث بشكل غير متكرر |
| صفحات HTML | بدون تخزين / رؤوس أمان | محتوى طازج دائماً، مع حماية المستخدمين |

---

## ➕ إضافة صفحة صيغة جديدة

لإضافة صفحة هبوط تحويل **فيديو إلى صوت** جديدة (مثل `flv-to-mp3`):

1. **أضف إلى `lib/content/format-pages.ts`:**

   ```ts
   {
     slug: 'flv-to-mp3',
     messageKey: 'flvToMp3',
     outputFormat: 'mp3',
     highlightedInputs: ['flv'],
     useCaseImages: ['https://images.unsplash.com/…'],
   }
   ```

2. **أنشئ ملف الصفحة:**

   ```ts
   // app/[locale]/flv-to-mp3/page.tsx
   import { FormatLandingPage } from '@/components/landing/FormatLandingPage'
   import { getFormatPage } from '@/lib/content/format-pages'

   const config = getFormatPage('flv-to-mp3')!

   export default function Page() {
     return <FormatLandingPage config={config} />
   }
   ```

3. **أضف الترجمات:**

   ```
   i18n/pages/flv-to-mp3/en.json
   i18n/pages/flv-to-mp3/fr.json
   ```

4. تُضمَّن الصفحة **تلقائياً** في `sitemap.ts` — لا حاجة لتغييرات أخرى.

> **ملاحظة SEO:** يجب أن يكون لكل صفحة صيغة محتوى نصي فريد. تعاقب جوجل الصفحات البوابية التي تحتوي محتوى شبه مكرر.

---

## 🛡️ الخصوصية والأمان

<p align="center">
  <a href="https://videotoaudioconverter.org/ar/privacy">
    <img src="https://videotoaudioconverter.org/screenshots/04-privacy-story.webp" alt="Privacy-first video to audio converter — DevTools-provable zero uploads, runs offline after first page load, no retention no logs, cookieless analytics, GDPR safe" width="900" />
  </a>
</p>


- **بدون رفع للملفات** — يجري التحويل بالكامل في المتصفح عبر WebCodecs / FFmpeg WASM
- **بدون ملفات تعريف ارتباط** — Plausible خالٍ من الكوكيز؛ لا حاجة لشريط موافقة
- **بدون localStorage** — لا يُحفظ أي شيء بين الجلسات
- **بدون اعتماد على CDN وقت التشغيل** — طبقة JS الخاصة بـ FFmpeg مستضافة ذاتياً؛ يُحمَّل ملف WASM الثنائي فقط من `unpkg` ويُخزَّن للأبد بعد التحميل الأول
- **رؤوس أمان على كل صفحة HTML:**
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`

---

## 🤝 المساهمة

المساهمات مرحَّب بها. أكثر المجالات تأثيراً هي:

- **ترجمات جديدة** — انسخ `i18n/messages/en.json`، ترجم، وافتح PR
- **صفحات هبوط لصيغ جديدة** — اتبع الدليل أعلاه؛ أحضر محتوى نصياً فريداً
- **تحسينات المحركات** — تقارير تقدم أفضل، ترميزات إخراج إضافية
- **الواجهة / إمكانية الوصول** — التوافق مع WCAG AA، التنقل عبر لوحة المفاتيح

يُرجى فتح قضية (issue) قبل البدء بتغييرات كبيرة لنناقش الاتجاه.

---

## 🔍 ما يحلّه هذا المشروع (مرجع الكلمات المفتاحية وحالات الاستخدام)

**[VideoToAudioConverter.org](https://videotoaudioconverter.org)** مبني ليكون الإجابة النهائية لكل من يبحث عن **محول فيديو إلى صوت مجاني عبر الإنترنت** يحترم الخصوصية. فيما يلي الخريطة الكاملة لمقاصد التحويل واستفسارات البحث التي نخدمها.

### كل ثنائية تحويل ندعمها

كل خلية هي مسار تحويل صريح وقابل للفهرسة. أفلِت ملفاً بصيغة الصف واختر صيغة العمود — هذا هو التحويل.

| الإدخال ↓ / الإخراج → | MP3 | WAV | M4A | AAC | FLAC | OGG | Opus |
|---|---|---|---|---|---|---|---|
| **MP4** | [mp4 to mp3](https://videotoaudioconverter.org/ar/mp4-to-mp3) | mp4 to wav | mp4 to m4a | mp4 to aac | mp4 to flac | mp4 to ogg | mp4 to opus |
| **MOV** | [mov to mp3](https://videotoaudioconverter.org/ar/mov-to-mp3) | mov to wav | mov to m4a | mov to aac | mov to flac | mov to ogg | mov to opus |
| **MKV** | [mkv to mp3](https://videotoaudioconverter.org/ar/mkv-to-mp3) | mkv to wav | mkv to m4a | mkv to aac | mkv to flac | mkv to ogg | mkv to opus |
| **WebM** | [webm to mp3](https://videotoaudioconverter.org/ar/webm-to-mp3) | webm to wav | webm to m4a | webm to aac | webm to flac | webm to ogg | webm to opus |
| **AVI** | [avi to mp3](https://videotoaudioconverter.org/ar/avi-to-mp3) | avi to wav | avi to m4a | avi to aac | avi to flac | avi to ogg | avi to opus |
| **FLV** | flv to mp3 | flv to wav | flv to m4a | flv to aac | flv to flac | flv to ogg | flv to opus |
| **WMV** | wmv to mp3 | wmv to wav | wmv to m4a | wmv to aac | wmv to flac | wmv to ogg | wmv to opus |
| **3GP** | 3gp to mp3 | 3gp to wav | 3gp to m4a | 3gp to aac | 3gp to flac | 3gp to ogg | 3gp to opus |
| **MPEG** | mpeg to mp3 | mpeg to wav | mpeg to m4a | mpeg to aac | mpeg to flac | mpeg to ogg | mpeg to opus |
| **M4V** | m4v to mp3 | m4v to wav | m4v to m4a | m4v to aac | m4v to flac | m4v to ogg | m4v to opus |

> **63 مسار تحويل مدعوم**، وكل منها متاح من نفس أداة التحويل على **[videotoaudioconverter.org](https://videotoaudioconverter.org)**. صفحات الهبوط المخصصة: [MP4 → MP3](https://videotoaudioconverter.org/ar/mp4-to-mp3) · [MOV → MP3](https://videotoaudioconverter.org/ar/mov-to-mp3) · [MKV → MP3](https://videotoaudioconverter.org/ar/mkv-to-mp3) · [WebM → MP3](https://videotoaudioconverter.org/ar/webm-to-mp3) · [AVI → MP3](https://videotoaudioconverter.org/ar/avi-to-mp3). جميع الأزواج الأخرى تُفتح عبر مُحدِّد صيغة الإخراج.

---

## 🎯 من يستخدم محول الفيديو إلى صوت؟ (حالات الاستخدام)

<p align="center">
  <a href="https://videotoaudioconverter.org/ar/">
    <img src="https://videotoaudioconverter.org/screenshots/02-use-cases.webp" alt="Video to audio converter use cases — podcast and interview recordings, online classes and lecture archives, iPhone and Android screen recordings, movie clips and archive footage" width="900" />
  </a>
</p>


يبحث الناس عن **محول فيديو إلى صوت** لأسباب مختلفة جداً. لقد قمنا بتحسين الواجهة والمحتوى وصفحات الهبوط حول هذه السيناريوهات. يمكنك تجربتها جميعاً على **[videotoaudioconverter.org](https://videotoaudioconverter.org)**.

### 🎙️ صانعو البودكاست ومنتجو الصوت

- **[تحويل تسجيلات الفيديو إلى MP3](https://videotoaudioconverter.org/ar/mp4-to-mp3)** لتوزيع البودكاست (Spotify، Apple Podcasts، RSS).
- استخراج الصوت من **تسجيل Zoom**، **تسجيل Google Meet**، **تسجيل Microsoft Teams**، **تسجيل Riverside**، أو **تسجيل شاشة OBS**.
- إزالة مسار الفيديو من **مقابلة بصيغة MP4** وشحن الصوت فقط.
- تحويل **الفيديو إلى WAV** أو **FLAC** للتحرير في Audacity، Adobe Audition، Logic Pro، GarageBand، Reaper، أو Pro Tools.

### 🎓 الطلاب والمعلمون

- تحويل **تسجيلات المحاضرات إلى MP3** ليمكن تشغيلها على أي هاتف أثناء التنقل — جرّب [videotoaudioconverter.org](https://videotoaudioconverter.org).
- استخراج الصوت من **تسجيلات دروس Zoom**، **فيديوهات Kahoot**، **تنزيلات Khan Academy**، أو **محاضرات المؤتمرات**.
- تحويل **[تسجيل MOV](https://videotoaudioconverter.org/ar/mov-to-mp3)** من QuickTime إلى **M4A** محمول للآيفون.
- الحصول على الصوت من **تنزيلات YouTube التي تمتلكها بالفعل** للمراجعة دون اتصال (يُرجى احترام حقوق النشر).

### 📱 مستخدمو الجوال ووسائل التواصل الاجتماعي

- **تحويل فيديو TikTok إلى MP3** — استخرج مقطعاً صوتياً من ملف TikTok مُصدَّر على [videotoaudioconverter.org](https://videotoaudioconverter.org).
- **تحويل فيديو Instagram Reel إلى صوت** — استخرج الصوت من تنزيل Reel.
- **تحويل فيديو WhatsApp إلى MP3** — حوّل رسالة فيديو معاد توجيهها إلى صوت.
- **تحويل فيديو الآيفون إلى MP3** — حوّل تسجيلات `.MOV` / `.M4V` من الصور إلى MP3؛ استخدم صفحة **[MOV إلى MP3](https://videotoaudioconverter.org/ar/mov-to-mp3)**.
- **تحويل فيديو أندرويد إلى MP3** — استخرج الصوت من تسجيلات MP4؛ استخدم صفحة **[MP4 إلى MP3](https://videotoaudioconverter.org/ar/mp4-to-mp3)**.

### 🎵 عشاق الموسيقى والوسائط

- **[تحويل الفيديو الموسيقي إلى MP3](https://videotoaudioconverter.org/ar/mp4-to-mp3)** للتشغيل دون اتصال (على الملفات التي تمتلكها / لديك حقوقها).
- استخراج الصوت من **تسجيل حفل** أو **فيديو بروفة**.
- سحب **الموسيقى التصويرية** من فيديو لإعادة المزج أو أخذ العيّنات أو جلسات DJ.
- أرشفة المسارات الصوتية من الفيديو بصيغة **FLAC بدون فقدان** عبر [videotoaudioconverter.org](https://videotoaudioconverter.org).

### 💼 رواد الأعمال وعمال المعرفة

- **[تحويل تسجيل اجتماع إلى MP3](https://videotoaudioconverter.org/ar/mp4-to-mp3)** للتفريغ النصي عبر Otter.ai، Rev، Descript، Whisper، أو أدوات التفريغ من جوجل.
- استخراج الصوت من **ندوة عبر الإنترنت** أو **اجتماع شامل للشركة** لأغراض إمكانية الوصول / الأرشفة.
- استخراج الصوت من **فيديو تدريبي** لإرساله إلى خدمة تفريغ نصي.
- توفير عرض النطاق الترددي بمشاركة **نسخ صوتية فقط** من الاجتماعات — كل ذلك على [videotoaudioconverter.org](https://videotoaudioconverter.org).

### 🎬 محررو الفيديو ومنشئو المحتوى

- فصل الصوت عن الفيديو من أجل **تحرير متعدد المسارات** في Premiere Pro، DaVinci Resolve، Final Cut، CapCut، أو VN Editor — استخدم [videotoaudioconverter.org](https://videotoaudioconverter.org) قبل الاستيراد.
- استبدال مسار الصوت في فيديو عبر **[استخراج الأصلي بمحوّل MKV الخاص بنا](https://videotoaudioconverter.org/ar/mkv-to-mp3)** أولاً.
- إنشاء **معاينات صوتية فقط** للعملاء قبل تسليم الفيديو النهائي.

### 🔒 المستخدمون المهتمون بالخصوصية

- تحويل الملفات **دون رفعها** إلى أي خادم طرف ثالث — **[جرّبها على videotoaudioconverter.org](https://videotoaudioconverter.org)**.
- معالجة **المقابلات السرية**، **الإفادات القانونية**، **التسجيلات الطبية**، **المواد المصدرية الصحفية** دون أن تغادر الجهاز.
- استخدام المحوّل **دون اتصال** بعد التحميل الأول للصفحة (يعمل في الطائرة أو داخل بيئة معزولة).
- تجنّب المحولات التي تتطلب **التسجيل بالبريد الإلكتروني**، **إنشاء حساب**، أو **اشتراكات مدفوعة**. راجع [سياسة الخصوصية](https://videotoaudioconverter.org/ar/privacy) لمزيد من التفاصيل.

---

## ❓ الأسئلة الشائعة (مع الإجابات)

<p align="center">
  <a href="https://videotoaudioconverter.org/ar/#faq">
    <img src="https://videotoaudioconverter.org/screenshots/05-faq.webp" alt="Video to audio converter FAQ — supported input formats MP4 MOV MKV WebM AVI, output codecs MP3 WAV AAC M4A FLAC OGG Opus, file size limits, iPhone iPad Android Mac Windows support" width="900" />
  </a>
</p>


هذه هي أسئلة الذيل الطويل التي يكتبها الناس في جوجل عند البحث عن محول فيديو إلى صوت. كل سؤال تتم الإجابة عنه في قسم الأسئلة الشائعة في [الصفحة الرئيسية](https://videotoaudioconverter.org) وفي صفحات الهبوط الخاصة بكل صيغة.

### كيف أحول MP4 إلى MP3 مجاناً عبر الإنترنت؟
اذهب إلى **[videotoaudioconverter.org/ar/mp4-to-mp3](https://videotoaudioconverter.org/ar/mp4-to-mp3)**، أفلِت ملف MP4، اختر "MP3" كصيغة الإخراج، اضغط على "تحويل"، ونزّل الملف. بدون رفع، بدون تسجيل، بدون علامة مائية، وبدون حد لحجم الملف.

### كيف أستخرج الصوت من فيديو دون رفعه؟
استخدم **محول فيديو إلى صوت يعمل من جانب العميل** مثل **[VideoToAudioConverter.org](https://videotoaudioconverter.org)**. يجري التحويل في متصفحك عبر WebCodecs وFFmpeg WASM — الملف لا يلامس أي خادم.

### ما هو أفضل محول فيديو إلى صوت مجاني لا يرفع الملفات؟
المحول العامل في المتصفح الذي يستخدم WebCodecs أو FFmpeg WASM هو الفئة الوحيدة التي لا ترفع الملفات بصدق. **[VideoToAudioConverter.org](https://videotoaudioconverter.org)** مفتوح المصدر لتتمكن من التحقق من هذا الادعاء.

### كيف أحوّل MOV إلى MP3 على ماك بدون iTunes؟
افتح **[videotoaudioconverter.org/ar/mov-to-mp3](https://videotoaudioconverter.org/ar/mov-to-mp3)** في Safari أو Chrome، اسحب ملف `.MOV` من Finder إلى منطقة الإفلات، اختر "MP3"، ونزّل. يعمل على أي إصدار من macOS، دون الحاجة إلى تطبيق iTunes / Music.

### كيف أحوّل MKV إلى MP3 دون تثبيت برامج؟
افتح **[videotoaudioconverter.org/ar/mkv-to-mp3](https://videotoaudioconverter.org/ar/mkv-to-mp3)**، أفلِت ملف MKV، اختر MP3، اضغط على "تحويل". لا حاجة لـ VLC، أو HandBrake، أو سطر الأوامر.

### كيف أستخرج الصوت من ملف WebM؟
اذهب إلى **[videotoaudioconverter.org/ar/webm-to-mp3](https://videotoaudioconverter.org/ar/webm-to-mp3)**. يستخدم WebM داخلياً صوت Opus أو Vorbis — اختر Opus (لجودة تمرير أصلية)، MP3 (للتوافق)، أو WAV (للتحرير).

### كيف أحوّل AVI إلى MP3 في عام 2026؟
AVI صيغة قديمة من ويندوز. افتح **[videotoaudioconverter.org/ar/avi-to-mp3](https://videotoaudioconverter.org/ar/avi-to-mp3)** — يتعامل محرك FFmpeg WASM الاحتياطي لدينا مع AVI بشكل أصلي. أفلِت الملف، اختر MP3، انتهيت. لا حاجة لتثبيت ترميز DivX.

### كيف أحوّل الفيديو إلى MP3 بجودة 320 kbps؟
على **[videotoaudioconverter.org](https://videotoaudioconverter.org)**، اختر إعداد الجودة "High" — يُرمِّز MP3 بجودة 320 kbps (الحد الأقصى لجودة MP3).

### كيف أستخرج الصوت من فيديو إلى WAV (بدون فقدان)؟
افتح **[videotoaudioconverter.org](https://videotoaudioconverter.org)** واختر "WAV" كصيغة إخراج. WAV هو PCM غير مضغوط — مثالي للتحرير في DAW.

### كيف أستخرج الصوت من فيديو الآيفون؟
عادة ما تكون فيديوهات الآيفون بصيغة `.MOV` (H.264 + AAC) أو `.MP4`. افتح **[videotoaudioconverter.org/ar/mov-to-mp3](https://videotoaudioconverter.org/ar/mov-to-mp3)**، أفلِت الملف من الصور / الملفات، اختر MP3 أو M4A، ونزّل.

### هل تحويل الفيديو إلى صوت قانوني؟
تحويل الملفات التي تمتلكها أو لديك حقوقها قانوني في معظم الولايات القضائية. لا تستخدم هذه الأداة لتجاوز DRM، أو سحب خدمات بث مدفوعة، أو انتهاك حقوق النشر. نحن لسنا أداة تنزيل من YouTube.

### هل يعمل المحول دون اتصال بالإنترنت؟
بعد التحميل الأول للصفحة على **[videotoaudioconverter.org](https://videotoaudioconverter.org)**، نعم. ملف FFmpeg WASM مخزَّن لمدة عام. يمكنك تفعيل وضع الطائرة وتحويل الملفات مع ذلك.

---

## 🏆 كيف يقارَن VideoToAudioConverter.org بغيره

<p align="center">
  <a href="https://videotoaudioconverter.org/ar/">
    <img src="https://videotoaudioconverter.org/screenshots/03-comparison.webp" alt="Free video to audio converter comparison table — VideoToAudioConverter.org versus CloudConvert, Zamzar, 123apps, Convertio. No upload, no file size cap, unlimited daily conversions, no signup, no ads, MIT open source" width="900" />
  </a>
</p>

| القدرة | [VideoToAudioConverter.org](https://videotoaudioconverter.org) | FreeConvert | Convertio | OnlineAudioConverter | CloudConvert |
|---|---|---|---|---|---|
| **مجاني** | ✅ للأبد | ✅ محدود | ✅ محدود | ✅ محدود | ✅ محدود |
| **بدون رفع (جانب العميل)** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **بدون حد لحجم الملف** | ✅ | ❌ 1 GB | ❌ 100 MB | ❌ 2 GB | ❌ 1 GB |
| **بدون تسجيل** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **بدون إعلانات** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **يعمل دون اتصال** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **مفتوح المصدر** | ✅ MIT | ❌ | ❌ | ❌ | ❌ |
| **تحويلات غير محدودة يومياً** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **آمن GDPR بالتصميم** | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |

> تعكس المقارنة طبقات التسعير المعلنة وقيود الميزات اعتباراً من عام 2026. تحقق من القيود الحالية على موقع كل مزود.

---

## 🗣️ التغطية متعددة اللغات

نفس المحول، معرَّب للجمهور العالمي. كل نسخة مترجَمة هي سطح SEO منفصل بالكامل:

| اللغة | بادئة الرابط | عبارة "محول فيديو إلى صوت" المترجمة |
|---|---|---|
| 🇬🇧 الإنجليزية | [`/en/`](https://videotoaudioconverter.org/en/) | video to audio converter |
| 🇫🇷 الفرنسية | [`/fr/`](https://videotoaudioconverter.org/fr/) | convertisseur vidéo en audio |
| 🇪🇸 الإسبانية | `/es/` *(مخطَّط)* | convertidor de video a audio |
| 🇩🇪 الألمانية | `/de/` *(مخطَّط)* | Video zu Audio Konverter |
| 🇮🇹 الإيطالية | `/it/` *(مخطَّط)* | convertitore da video ad audio |
| 🇵🇹 البرتغالية | `/pt/` *(مخطَّط)* | conversor de vídeo para áudio |
| 🇨🇳 الصينية (المبسطة) | `/zh/` *(مخطَّط)* | 视频转音频转换器 |
| 🇯🇵 اليابانية | `/ja/` *(مخطَّط)* | 動画から音声に変換 |
| 🇰🇷 الكورية | `/ko/` *(مخطَّط)* | 비디오를 오디오로 변환 |
| 🇷🇺 الروسية | `/ru/` *(مخطَّط)* | конвертер видео в аудио |
| 🇸🇦 العربية | `/ar/` *(مخطَّط)* | محول فيديو إلى صوت |
| 🇮🇳 الهندية | `/hi/` *(مخطَّط)* | वीडियो को ऑडियो में बदलें |
| 🇮🇩 الإندونيسية | `/id/` *(مخطَّط)* | konverter video ke audio |
| 🇹🇷 التركية | `/tr/` *(مخطَّط)* | video ses dönüştürücü |
| 🇻🇳 الفيتنامية | `/vi/` *(مخطَّط)* | chuyển video sang âm thanh |

تستغرق إضافة لغة حوالي 30 دقيقة بمجرد جاهزية الترجمات — راجع قسم [التعريب وتعدد اللغات](#-internationalisation) أعلاه. الصفحة الرئيسية الإنجليزية الحية على [videotoaudioconverter.org/en/](https://videotoaudioconverter.org/en/) والنسخة الفرنسية على [videotoaudioconverter.org/fr/](https://videotoaudioconverter.org/fr/).

---

## 📚 معجم — صيغ الصوت والفيديو موضَّحة

مرجع للمستخدمين الذين يبحثون عن أشياء مثل "ما الفرق بين MP3 و M4A" أو "ما أفضل صيغة صوت للبودكاست".

### صيغ الإخراج (صوت)

- **MP3** — صيغة الصوت العالمية. ضغط مع فقدان. 128 kbps = مقبول، 192 kbps = جيد، 320 kbps = ممتاز. يعمل حرفياً على كل جهاز صُنع منذ عام 1998. الاستخدام: البودكاست، البث، المشاركة.
- **WAV** — صوت PCM غير مضغوط. ملفات ضخمة (~10 ميغابايت لكل دقيقة) لكنها بدقة بت كاملة. الاستخدام: التحرير في DAW، الماستر، مصادر الأرشيف.
- **M4A** — حاوية صوت MPEG-4، تحوي عادةً AAC. جودة مماثلة لـ MP3 عند معدلات بت أقل. الاستخدام: نظام iTunes / Apple Music، نغمات الآيفون.
- **AAC** — Advanced Audio Coding. جودة أفضل من MP3 بنفس معدل البت. معيار YouTube وApple والبث الحديث. الاستخدام: أينما يعمل MP3، عندما تريد جودة أفضل.
- **FLAC** — Free Lossless Audio Codec. يضغط دون فقدان للجودة، بحجم 50% تقريباً من WAV. الاستخدام: أرشفة للمتحمسين للجودة، مجموعات موسيقى عالية الدقة.
- **OGG (Vorbis)** — صيغة مفتوحة المصدر بفقدان. جودة أفضل من MP3 بنفس معدل البت. الاستخدام: الأنظمة مفتوحة المصدر، الألعاب، الويب.
- **Opus** — أحدث ترميز مع فقدان. يتفوق على MP3 / AAC / Vorbis عند معدلات البت المنخفضة. الاستخدام: الصوت البشري (البودكاست، VoIP)، الصوت منخفض النطاق، WebRTC.

### صيغ الإدخال (فيديو)

- **MP4** — فيديو H.264 / H.265 + صوت AAC في حاوية MPEG-4. الصيغة الافتراضية لكل شيء تقريباً: تنزيلات YouTube، تسجيلات الهاتف، تسجيلات الشاشة.
- **MOV** — حاوية Apple QuickTime. شائعة من الآيفون والماك وScreenFlow وFinal Cut.
- **MKV** — Matroska. حاوية مفتوحة يمكنها احتواء أي ترميز. شائعة لتنزيلات الفيديو عالية الجودة، الأنمي، نسخ Blu-ray.
- **WebM** — حاوية مفتوحة بدعم جوجل. فيديو VP8 / VP9 / AV1 + صوت Opus / Vorbis. معيار الفيديو على الويب (تنزيلات YouTube بصيغة WebM، WhatsApp Web).
- **AVI** — Audio Video Interleave. صيغة مايكروسوفت القديمة من التسعينيات، لا تزال شائعة في الأرشيفات القديمة وعمليات التصدير من برامج ويندوز فقط.
- **FLV** — Flash Video. صيغة Adobe Flash القديمة. نادرة اليوم لكنها لا تزال موجودة في التنزيلات القديمة.
- **WMV** — Windows Media Video. ملكية مايكروسوفت، شائعة من تصدير Windows Movie Maker / PowerPoint القديم.
- **3GP** — حاوية جوال من عصر ما قبل الهواتف الذكية. لا تزال تُنتج من بعض الهواتف العادية والكاميرات القديمة.
- **MPEG (MPG)** — صيغة الفيديو الأصلية MPEG-1 / MPEG-2. تُستخدم لأقراص DVD القديمة والبث التلفزيوني.

---

## 🧭 مقاصد البحث التي نخدمها

قائمة غير شاملة باستعلامات البحث المصمَّم هذا الموقع للترتيب عليها. نُفهرس كل واحدة كمحتوى رئيسي في مكان ما من الموقع (الصفحة الرئيسية، صفحات الصيغ، الأسئلة الشائعة، أو هذا الـ README).

<details>
<summary><strong>🔹 المصطلحات الرئيسية (حجم عالٍ)</strong></summary>

محول فيديو إلى صوت · تحويل فيديو إلى mp3 · محول mp4 إلى mp3 · استخراج الصوت من الفيديو · محول مجاني · تحويل فيديو إلى صوت مجاناً · محول صوت أون لاين · تحويل بدون رفع · video to audio converter · video to mp3 · video to mp3 converter · convert video to mp3 · convert video to audio · extract audio from video · mp3 converter · online mp3 converter · free mp3 converter · audio extractor · video sound extractor · rip audio from video · video to audio · audio from video · get audio from video · video to mp3 online · convert video to mp3 free · free video to audio converter · video to mp3 free · online video to audio converter · محول فيديو في المتصفح · مستخرج الصوت · أداة تحويل فيديو

</details>

<details>
<summary><strong>🔹 تحويلات أزواج الصيغ (ذيل طويل، نية شراء عالية)</strong></summary>

تحويل mov إلى mp3 · تحويل mkv إلى mp3 · تحويل webm إلى mp3 · تحويل avi إلى mp3 · mp4 to mp3 · mp4 to wav · mp4 to m4a · mp4 to aac · mp4 to flac · mp4 to ogg · mp4 to opus · mov to mp3 · mov to wav · mov to m4a · mov to aac · mkv to mp3 · mkv to wav · mkv to flac · mkv to aac · webm to mp3 · webm to ogg · webm to opus · webm to wav · avi to mp3 · avi to wav · flv to mp3 · wmv to mp3 · 3gp to mp3 · mpeg to mp3 · m4v to mp3

</details>

<details>
<summary><strong>🔹 معدِّلات الجودة / معدل البت</strong></summary>

محول 320 kbps · جودة عالية mp3 · تحويل بدون فقدان · فيديو إلى wav · فيديو إلى flac · 320 kbps mp3 converter · high quality video to mp3 · lossless video to audio · video to flac · hd audio extractor · cd quality wav extractor · 192 kbps mp3 · 128 kbps mp3 · best quality video to mp3 · convert video to high quality audio

</details>

<details>
<summary><strong>🔹 معدِّلات الخصوصية والثقة</strong></summary>

تحويل فيديو إلى mp3 بدون برامج · بدون رفع · بدون تسجيل · بدون علامة مائية · بدون إعلانات · video to mp3 no upload · video converter no upload · client-side video to mp3 · browser-based video converter · offline video to audio · private video to mp3 · secure video converter · no signup video to mp3 · no registration audio extractor · no watermark video to mp3 · ad-free video converter · gdpr-safe video converter · video to mp3 without uploading file · open source video to audio converter

</details>

<details>
<summary><strong>🔹 معدِّلات الجهاز / المنصة</strong></summary>

تحويل فيديو الايفون إلى mp3 · تحويل فيديو الاندرويد إلى mp3 · تحويل فيديو ماك إلى mp3 · iphone video to mp3 · android video to mp3 · mac video to mp3 · windows video to mp3 · linux video to mp3 · chromebook video to mp3 · ipad video to audio · safari video to mp3 · chrome video to mp3 · firefox video to mp3 · edge video to mp3 · ios video to mp3 converter

</details>

<details>
<summary><strong>🔹 نوايا مخصَّصة بالمصدر (الملفات التي تمتلكها فقط — نحن لسنا أداة تنزيل YouTube)</strong></summary>

تحويل تسجيل زوم إلى mp3 · تحويل تيك توك إلى mp3 · تحويل تسجيل الشاشة إلى mp3 · zoom recording to mp3 · google meet recording to mp3 · teams recording to mp3 · screen recording to mp3 · obs recording to mp3 · tiktok video to mp3 · instagram reel to mp3 · whatsapp video to mp3 · iphone screen recording to mp3 · webinar recording to audio · interview video to mp3 · podcast video to mp3 · lecture recording to mp3

</details>

<details>
<summary><strong>🔹 كيفية الذيل الطويل (أهداف الأسئلة الشائعة / المقتطفات المميزة)</strong></summary>

كيف أحول mp4 إلى mp3 · كيف أستخرج الصوت من فيديو · كيف أحول mov إلى mp3 على الماك · how to convert mp4 to mp3 · how to extract audio from video · how to convert video to mp3 free · how to convert video to mp3 without software · how to get sound from a video · how to rip audio from a video file · how to convert mov to mp3 on mac · how to convert mkv to mp3 · how to extract audio from webm · how to convert avi to mp3 in 2026 · how to convert video to mp3 on iphone · how to convert video to mp3 on android · how to convert video to mp3 offline · how to convert video to 320 kbps mp3 · how to convert video to wav · how to extract audio from a video without uploading

</details>

<details>
<summary><strong>🔹 المقارنة / البدائل</strong></summary>

بديل freeconvert · بديل convertio · بديل cloudconvert · freeconvert alternative · convertio alternative · cloudconvert alternative · onlineaudioconverter alternative · ytmp3 alternative · zamzar alternative · best free video to audio converter · best browser video to mp3 converter · best private video converter · open source alternative to convertio

</details>

<details>
<summary><strong>🔹 متعدد اللغات</strong></summary>

محول فيديو إلى صوت · محول الفيديو إلى mp3 · استخراج الصوت من الفيديو · تحويل الفيديو إلى صوت · أداة تحويل فيديو · مستخرج الصوت · convertisseur vidéo en audio · convertidor de video a audio · video zu audio konverter · conversor de vídeo para áudio · convertitore video audio · 视频转音频 · 視頻轉音頻 · 動画 音声 変換 · 비디오 오디오 변환 · конвертер видео в аудио · वीडियो को ऑडियो में बदलें · konverter video ke audio · video ses dönüştürücü · chuyển video sang âm thanh

</details>

---

## 🌟 الخلاصة

إذا كنت تبحث عن **محول فيديو إلى صوت مجاني عبر الإنترنت** يقوم بالآتي:

- ✅ يحوّل **[MP4 إلى MP3](https://videotoaudioconverter.org/ar/mp4-to-mp3)**، **[MOV إلى MP3](https://videotoaudioconverter.org/ar/mov-to-mp3)**، **[MKV إلى MP3](https://videotoaudioconverter.org/ar/mkv-to-mp3)**، **[WebM إلى MP3](https://videotoaudioconverter.org/ar/webm-to-mp3)**، **[AVI إلى MP3](https://videotoaudioconverter.org/ar/avi-to-mp3)** وأكثر من 58 ثنائية تحويل أخرى
- ✅ يعمل **100% في متصفحك** مع **صفر رفع** و**صفر تتبع**
- ✅ بدون **حد لحجم الملف**، بدون **تسجيل**، بدون **إعلانات**، بدون **علامة مائية**
- ✅ يدعم إخراج **MP3, WAV, M4A, AAC, FLAC, OGG, Opus** حتى **320 kbps** أو **بدون فقدان**
- ✅ يعمل على **Mac, Windows, Linux, Chromebook, iPhone, iPad, Android**
- ✅ **مفتوح المصدر**، **آمن GDPR**، ويعمل **دون اتصال** بعد التحميل الأول

— فضع إشارة مرجعية على **[videotoaudioconverter.org](https://videotoaudioconverter.org)** وضع نجمة لهذا المستودع. ⭐

---

## 📄 الترخيص

- **الكود المصدري:** [MIT](LICENSE)
- **FFmpeg:** [LGPL 2.1](https://ffmpeg.org/legal.html) (مرتبط ديناميكياً عبر WASM)
- **MediaBunny:** MIT
- **shadcn/ui:** MIT

---

<p align="center">
  بُني بحب ❤️ · مستضاف على <a href="https://pages.cloudflare.com/">Cloudflare Pages</a> · تحليلات بواسطة <a href="https://plausible.io/">Plausible</a>
</p>

<p align="center">
  <sub>
    كلمات مفتاحية: محول فيديو إلى صوت · تحويل فيديو إلى mp3 · محول mp4 إلى mp3 · تحويل mov إلى mp3 · تحويل mkv إلى mp3 · تحويل webm إلى mp3 · تحويل avi إلى mp3 · استخراج الصوت من الفيديو · مستخرج الصوت · مجاني عبر الإنترنت · بدون رفع · من جانب العميل · مفتوح المصدر · WebCodecs · FFmpeg WASM
  </sub>
</p>
