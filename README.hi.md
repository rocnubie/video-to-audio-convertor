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
  <a href="./README.ar.md">العربية</a> ·
  <strong>हिन्दी</strong>
</p>

<p align="center">
  <strong>सबसे तेज़ मुफ्त वीडियो टू ऑडियो कन्वर्टर — 100% आपके ब्राउज़र में, कोई अपलोड नहीं, कोई ट्रैकिंग नहीं।</strong>
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
  <a href="https://videotoaudioconverter.org">🌐 लाइव डेमो</a> ·
  <a href="#-शुरुआत-कैसे-करें">क्विक स्टार्ट</a> ·
  <a href="#-यह-कैसे-काम-करता-है">यह कैसे काम करता है</a> ·
  <a href="#-समर्थित-फॉर्मेट">फॉर्मेट</a> ·
  <a href="#-बिल्ड--डिप्लॉय">डिप्लॉय</a>
</p>

---

## यह क्या है?

**[VideoToAudioConverter.org](https://videotoaudioconverter.org)** एक प्रोडक्शन-ग्रेड, ओपन-सोर्स **वीडियो टू ऑडियो कन्वर्टर** है जो पूरी तरह से यूज़र के ब्राउज़र के अंदर चलता है। एक वीडियो फ़ाइल ड्रॉप करें, एक ऑडियो फॉर्मेट चुनें, कन्वर्ट पर क्लिक करें — ऑडियो तुरंत डाउनलोड हो जाता है। कोई सर्वर नहीं, कोई अकाउंट नहीं, बैकएंड द्वारा थोपी गई कोई फ़ाइल साइज़ लिमिट नहीं।

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
  <a href="https://videotoaudioconverter.org/hi/">
    <img src="https://videotoaudioconverter.org/screenshots/01-hero.webp" alt="Video to audio converter — free online tool to convert MP4, MOV, MKV, WebM, AVI to MP3, WAV, AAC, M4A, FLAC, OGG, Opus directly in the browser with zero upload" width="900" />
  </a>
</p>

<p align="center">
  <a href="https://videotoaudioconverter.org/hi/">
    <img src="https://videotoaudioconverter.org/screenshots/07-mobile-hero.webp" alt="Video to audio converter mobile view — works on iPhone Safari and Android Chrome, no app install required" width="320" />
  </a>
</p>


### एक और वीडियो टू ऑडियो कन्वर्टर क्यों?

| फ़ीचर | VideoToAudioConverter.org | सामान्य ऑनलाइन कन्वर्टर |
|---|---|---|
| 100% ब्राउज़र में चलता है | ✅ WebCodecs + FFmpeg WASM | ❌ सर्वर पर अपलोड करता है |
| फ़ाइल साइज़ लिमिट | ✅ कोई नहीं (RAM ही लिमिट है) | ❌ 50–500 MB तक |
| प्राइवेसी / कोई ट्रैकिंग नहीं | ✅ ज़ीरो कुकीज़, ज़ीरो अपलोड | ❌ फ़ाइलें सर्वर पर स्टोर |
| ऑफ़लाइन काम करता है (पहले लोड के बाद) | ✅ WASM हमेशा के लिए कैश | ❌ इंटरनेट चाहिए |
| ओपन सोर्स | ✅ MIT | ❌ क्लोज़्ड सोर्स |
| बिना विज्ञापन | ✅ | ❌ आक्रामक विज्ञापन |
| तेज़ (आधुनिक फॉर्मेट) | ✅ WebCodecs नेटिव स्पीड | ❌ सर्वर क्यू |

---

## ✨ फ़ीचर्स

### कोर कन्वर्टर

- कोई भी वीडियो फ़ाइल चुनने के लिए **ड्रैग-एंड-ड्रॉप** या क्लिक करें
- **9 इनपुट फॉर्मेट** → MP4, MOV, MKV, WebM, AVI, FLV, WMV, 3GP, MPEG
- **7 आउटपुट फॉर्मेट** → MP3, WAV, M4A, AAC, FLAC, OGG, Opus
- **क्वालिटी प्रीसेट** → हाई (320 kbps), मीडियम (192 kbps), लो (128 kbps), लॉसलेस
- स्टेज लेबल के साथ **रियल-टाइम प्रोग्रेस बार** (demux → decode → encode → mux)
- **तुरंत डाउनलोड** — ऑडियो ब्लॉब मेमोरी से सर्व होता है, कभी सर्वर को नहीं छूता

### प्राइवेसी-फ़र्स्ट आर्किटेक्चर

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

### SEO-ऑप्टिमाइज़्ड फॉर्मेट लैंडिंग पेज

हर लोकप्रिय **वीडियो टू ऑडियो** कन्वर्ज़न जोड़ी के लिए डेडिकेटेड, पूरी तरह अनुवादित लैंडिंग पेज:

| पेज | लाइव URL |
|---|---|
| MP4 to MP3 कन्वर्टर | [videotoaudioconverter.org/hi/mp4-to-mp3](https://videotoaudioconverter.org/hi/mp4-to-mp3) |
| MOV to MP3 कन्वर्टर | [videotoaudioconverter.org/hi/mov-to-mp3](https://videotoaudioconverter.org/hi/mov-to-mp3) |
| MKV to MP3 कन्वर्टर | [videotoaudioconverter.org/hi/mkv-to-mp3](https://videotoaudioconverter.org/hi/mkv-to-mp3) |
| WebM to MP3 कन्वर्टर | [videotoaudioconverter.org/hi/webm-to-mp3](https://videotoaudioconverter.org/hi/webm-to-mp3) |
| AVI to MP3 कन्वर्टर | [videotoaudioconverter.org/hi/avi-to-mp3](https://videotoaudioconverter.org/hi/avi-to-mp3) |

हर पेज में यूनिक कॉपी, JSON-LD स्कीमा (SoftwareApplication, HowTo, FAQPage), और Open Graph टैग हैं — कोई डुप्लिकेट कंटेंट नहीं।

### इंटरनैशनलाइज़ेशन

- अंग्रेज़ी (`/en/`) और फ़्रेंच (`/fr/`) बॉक्स से बाहर
- डीप i18n के लिए प्रति-पेज मैसेज नेमस्पेस (सिर्फ UI स्ट्रिंग्स नहीं)
- 15+ अतिरिक्त लोकेल्स के लिए इंफ्रास्ट्रक्चर तैयार (zh, ja, ko, es, de, pt, it, ru, ar, hi, id, tr, vi …)

---

## 🔧 यह कैसे काम करता है

कन्वर्टर एक **डुअल-इंजन आर्किटेक्चर** द्वारा संचालित है जो हर इनपुट फ़ाइल के लिए स्वचालित रूप से सबसे तेज़ उपलब्ध इंजन चुनता है:

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

### इंजन डिटेल्स

#### MediaBunny — प्राइमरी इंजन

[MediaBunny](https://github.com/nicktindall/mediabunny) ब्राउज़र-नेटिव **WebCodecs API** को एक सरल ट्रांसकोडिंग पाइपलाइन में लपेटता है। यह समर्थित फॉर्मेट के लिए ज़ीरो WASM ओवरहेड के साथ मेन थ्रेड पर काम करता है।

- **समर्थित इनपुट:** MP4, M4V, MOV, QT, MKV, WebM
- **स्पीड:** लगभग नेटिव — 1 घंटे का MP4 आधुनिक हार्डवेयर पर ~10 सेकंड में कन्वर्ट हो सकता है
- **COOP/COEP हेडर की आवश्यकता नहीं** — थर्ड-पार्टी स्क्रिप्ट के साथ काम करता है

#### FFmpeg WASM — फ़ॉलबैक इंजन

[@ffmpeg/ffmpeg](https://github.com/ffmpegwasm/ffmpeg.wasm) पूरी FFmpeg बाइनरी को WebAssembly में कंपाइल करता है। सिंगल-थ्रेडेड चलता है (कोई SharedArrayBuffer / COOP की आवश्यकता नहीं)।

- **समर्थित इनपुट:** AVI, FLV, WMV, 3GP, MPEG, और कोई भी फॉर्मेट जिसे MediaBunny हैंडल नहीं कर सकता
- **WASM साइज़:** ~31 MB (`Cache-Control: immutable, max-age=31536000` के माध्यम से कैश्ड)
- CDN निर्भरता से बचने के लिए `/ffmpeg-core/ffmpeg-core.js` पर **सेल्फ-होस्टेड JS शिम**

---

## 📂 समर्थित फॉर्मेट

### इनपुट फॉर्मेट (वीडियो टू ऑडियो)

| फॉर्मेट | एक्सटेंशन | इंजन | नोट्स |
|---|---|---|---|
| MP4 | `.mp4`, `.m4v` | MediaBunny | सबसे आम वीडियो फॉर्मेट |
| MOV | `.mov`, `.qt` | MediaBunny | Apple QuickTime |
| MKV | `.mkv` | MediaBunny | Matroska कंटेनर |
| WebM | `.webm` | MediaBunny | वेब-नेटिव (VP8/VP9/AV1) |
| AVI | `.avi` | FFmpeg WASM | लीगेसी Windows फॉर्मेट |
| FLV | `.flv` | FFmpeg WASM | Flash वीडियो |
| WMV | `.wmv` | FFmpeg WASM | Windows Media Video |
| 3GP | `.3gp` | FFmpeg WASM | मोबाइल वीडियो |
| MPEG | `.mpeg`, `.mpg` | FFmpeg WASM | पुराना ब्रॉडकास्ट फॉर्मेट |

### आउटपुट फॉर्मेट (ऑडियो)

| फॉर्मेट | क्वालिटी विकल्प | उपयोग |
|---|---|---|
| **MP3** | 128 / 192 / 320 kbps | यूनिवर्सल कम्पेटिबिलिटी, स्ट्रीमिंग, पॉडकास्ट |
| **WAV** | लॉसलेस PCM | प्रोफेशनल ऑडियो, DAW इम्पोर्ट |
| **AAC** | 128 / 192 / 320 kbps | Apple डिवाइसेज़, iTunes, MP3 से बेहतर कम्प्रेशन |
| **M4A** | 128 / 192 / 320 kbps | iTunes, Apple Music |
| **FLAC** | लॉसलेस | ऑडियोफाइल आर्काइविंग |
| **OGG** | 128 / 192 / 320 kbps | ओपन फॉर्मेट, शानदार कम्प्रेशन |
| **Opus** | 128 / 192 / 320 kbps | सबसे अच्छा कम्प्रेशन/क्वालिटी अनुपात, VoIP |

---

## 🚀 शुरुआत कैसे करें

### पूर्व-आवश्यकताएं

- **Node.js** 20+
- **pnpm** 9+ (`npm install -g pnpm`)

### इंस्टॉलेशन

```bash
git clone https://github.com/rocnubie/video-to-audio-convertor.git
cd video-to-audio-convertor

pnpm install
# postinstall automatically copies @ffmpeg/core WASM into public/ffmpeg-core/
```

### डेवलपमेंट सर्वर

```bash
pnpm dev
```

[http://localhost:3000](http://localhost:3000) खोलें — ऐप अपने आप `/en/` पर रीडायरेक्ट कर देता है।

> **टिप:** पहली बार जब FFmpeg WASM लोड होता है (~31 MB), तो यह धीमा होगा। `Cache-Control: immutable` की वजह से बाद के लोड तुरंत होंगे।

### एनवायरनमेंट वेरिएबल्स

`.env.example` को `.env.local` में कॉपी करें:

```bash
cp .env.example .env.local
```

| वेरिएबल | विवरण | उदाहरण |
|---|---|---|
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | आपका Plausible साइट डोमेन | `videotoaudioconverter.org` |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` | Plausible स्क्रिप्ट URL | `https://plausible.io/js/script.tagged-events.outbound-links.js` |

डेवलपमेंट में इन्हें खाली छोड़ दें — एनालिटिक्स बस स्किप हो जाएगा।

---

## 🏗️ टेक स्टैक

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

### ये विकल्प क्यों?

**Next.js स्टैटिक एक्सपोर्ट** — पूरी साइट फ्लैट HTML/JS/CSS फ़ाइलों में प्री-रेंडर होती है। प्रोडक्शन में कोई Node.js सर्वर नहीं है। Cloudflare Pages एज से सब कुछ सर्व करता है।

**FFmpeg-फर्स्ट के बजाय MediaBunny** — MP4/MOV/MKV/WebM (अधिकांश कन्वर्ज़न) के लिए, MediaBunny नेटिव ब्राउज़र WebCodecs का उपयोग करता है और FFmpeg WASM से 5–10× तेज़ है, बिना किसी कोल्ड-स्टार्ट पेनल्टी के।

**सिंगल-थ्रेडेड FFmpeg WASM** — मल्टी-थ्रेडेड FFmpeg को `SharedArrayBuffer` चाहिए, जिसे `Cross-Origin-Opener-Policy: same-origin` और `Cross-Origin-Embedder-Policy: require-corp` चाहिए। ये हेडर थर्ड-पार्टी स्क्रिप्ट (एनालिटिक्स, फ़ॉन्ट्स, विज्ञापन) को तोड़ देते हैं। सिंगल-थ्रेडेड इन सब से बचता है।

**Tailwind v4 + OKLCH** — डिज़ाइन सिस्टम OKLCH कलर स्पेस का उपयोग करता है, जो प्रति कंपोनेंट मैन्युअल डार्क-मोड ओवरराइड के बिना लाइट और डार्क दोनों मोड में सही दिखने वाले परसेप्चुअली यूनिफ़ॉर्म टील/सायन एक्सेंट के लिए है।

---

## 📁 फ़ाइल स्ट्रक्चर

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

## 🌍 इंटरनैशनलाइज़ेशन

साइट लोकेल-प्रीफिक्स्ड रूट्स (`/en/`, `/fr/`) के साथ [next-intl 4](https://next-intl-docs.vercel.app/) का उपयोग करती है।

### एक नई भाषा जोड़ना

1. `i18n/routing.ts` में **लोकेल रजिस्टर करें**:

   ```ts
   export const routing = defineRouting({
     locales: ['en', 'fr', 'de'],  // add 'de'
     defaultLocale: 'en',
   });
   ```

2. `i18n/messages/de.json` पर **साझा मैसेज बनाएं** (`en.json` को कॉपी करें और अनुवाद करें)।

3. हर पेज नेमस्पेस के लिए **प्रति-पेज मैसेज बनाएं**:

   ```
   i18n/pages/home/de.json
   i18n/pages/mp4-to-mp3/de.json
   … etc.
   ```

4. `i18n/locale.ts` में **लोकेल मेटाडेटा जोड़ें**:

   ```ts
   de: { nativeName: 'Deutsch', englishName: 'German' },
   ```

5. `sitemap.ts` और `generateStaticParams()` स्वचालित रूप से नए लोकेल को उठा लेते हैं — किसी और बदलाव की ज़रूरत नहीं।

---

## 📊 एनालिटिक्स

साइट [Plausible Analytics](https://plausible.io/) का उपयोग करती है — कुकीलेस, GDPR-कम्प्लायंट, कोई व्यक्तिगत डेटा एकत्र नहीं।

### कस्टम इवेंट्स

सभी इवेंट [`lib/analytics.ts`](lib/analytics.ts) में टाइप्ड हैं:

| इवेंट | प्रॉपर्टीज़ | कब फायर होता है |
|---|---|---|
| `file_selected` | `ext`, `size_mb`, `engine_hint` | यूज़र वीडियो फ़ाइल ड्रॉप करता है या चुनता है |
| `conversion_started` | `from_ext`, `to_format`, `quality` | कन्वर्ट बटन क्लिक किया |
| `conversion_completed` | `from_ext`, `to_format`, `engine`, `duration_s` | ऑडियो ब्लॉब तैयार |
| `conversion_failed` | `from_ext`, `to_format`, `reason` | इंजन में एरर |
| `conversion_cancelled` | `from_ext`, `to_format` | यूज़र ने बीच में कैंसिल किया |
| `download_clicked` | `format` | डाउनलोड बटन क्लिक किया |

ये इवेंट आपको एक पूरी तस्वीर देते हैं कि कौन से वीडियो-टू-ऑडियो कन्वर्ज़न पाथ सबसे लोकप्रिय हैं।

---

## 📦 बिल्ड & डिप्लॉय

### लोकल बिल्ड

```bash
pnpm build       # static export → out/
npx serve out    # preview locally
```

बिल्ड आउटपुट फ्लैट फ़ाइलों की एक डायरेक्ट्री है — किसी सर्वर की ज़रूरत नहीं।

### Cloudflare Pages पर डिप्लॉय करें

1. Cloudflare Pages डैशबोर्ड में **अपनी रिपॉज़िटरी कनेक्ट करें**।

2. **बिल्ड सेटिंग्स:**

   | सेटिंग | वैल्यू |
   |---|---|
   | Build command | `pnpm build` |
   | Build output directory | `out` |
   | Node.js version | `20` |

3. **एनवायरनमेंट वेरिएबल्स** (Production + Preview):

   ```
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=videotoaudioconverter.org
   NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL=https://plausible.io/js/script.tagged-events.outbound-links.js
   ```

4. **कस्टम डोमेन:** `videotoaudioconverter.org` जोड़ें और Cloudflare DNS को रूटिंग संभालने दें।

### कैशिंग स्ट्रैटेजी

| असेट | Cache-Control | क्यों |
|---|---|---|
| `/ffmpeg-core/*` | `immutable, max-age=31536000` | कंटेंट-एड्रेस्ड; कभी नहीं बदलता |
| `/_next/static/*` | `immutable, max-age=31536000` | Next.js कंटेंट-हैश फ़ाइलनेम |
| `/og.png`, `/favicon.ico` | `max-age=604800` | कम बार अपडेट होते हैं |
| HTML पेज | कोई कैश नहीं / सिक्योरिटी हेडर्स | हमेशा ताज़ा, यूज़र की सुरक्षा |

---

## ➕ नया फॉर्मेट पेज जोड़ना

एक नया **वीडियो टू ऑडियो** कन्वर्ज़न लैंडिंग पेज जोड़ने के लिए (जैसे, `flv-to-mp3`):

1. **`lib/content/format-pages.ts` में जोड़ें:**

   ```ts
   {
     slug: 'flv-to-mp3',
     messageKey: 'flvToMp3',
     outputFormat: 'mp3',
     highlightedInputs: ['flv'],
     useCaseImages: ['https://images.unsplash.com/…'],
   }
   ```

2. **पेज फ़ाइल बनाएं:**

   ```ts
   // app/[locale]/flv-to-mp3/page.tsx
   import { FormatLandingPage } from '@/components/landing/FormatLandingPage'
   import { getFormatPage } from '@/lib/content/format-pages'

   const config = getFormatPage('flv-to-mp3')!

   export default function Page() {
     return <FormatLandingPage config={config} />
   }
   ```

3. **अनुवाद जोड़ें:**

   ```
   i18n/pages/flv-to-mp3/en.json
   i18n/pages/flv-to-mp3/fr.json
   ```

4. पेज **स्वचालित रूप से** `sitemap.ts` में शामिल हो जाता है — कोई और बदलाव की ज़रूरत नहीं।

> **SEO नोट:** हर फॉर्मेट पेज में यूनिक कॉपी होनी चाहिए। Google उन डोरवे पेजों पर पेनल्टी लगाता है जिनमें लगभग डुप्लिकेट कंटेंट होता है।

---

## 🛡️ प्राइवेसी & सिक्योरिटी

<p align="center">
  <a href="https://videotoaudioconverter.org/hi/privacy">
    <img src="https://videotoaudioconverter.org/screenshots/04-privacy-story.webp" alt="Privacy-first video to audio converter — DevTools-provable zero uploads, runs offline after first page load, no retention no logs, cookieless analytics, GDPR safe" width="900" />
  </a>
</p>


- **कोई फ़ाइल अपलोड नहीं** — कन्वर्ज़न पूरी तरह WebCodecs / FFmpeg WASM के ज़रिए ब्राउज़र में चलता है
- **कोई कुकीज़ नहीं** — Plausible कुकीलेस है; कोई कंसेंट बैनर नहीं चाहिए
- **कोई localStorage नहीं** — सेशन के बीच कुछ भी पर्सिस्ट नहीं होता
- **रनटाइम पर कोई CDN निर्भरता नहीं** — FFmpeg JS शिम सेल्फ-होस्टेड है; केवल WASM बाइनरी `unpkg` से लोड होती है और पहले लोड के बाद हमेशा के लिए कैश हो जाती है
- **हर HTML पेज पर सिक्योरिटी हेडर्स:**
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`

---

## 🤝 योगदान

योगदान का स्वागत है। सबसे प्रभावशाली क्षेत्र हैं:

- **नए अनुवाद** — `i18n/messages/en.json` कॉपी करें, अनुवाद करें, PR खोलें
- **नए फॉर्मेट लैंडिंग पेज** — ऊपर दी गई गाइड का पालन करें; यूनिक कॉपी लाएं
- **इंजन सुधार** — बेहतर प्रोग्रेस रिपोर्टिंग, अतिरिक्त आउटपुट कोडेक्स
- **UI / एक्सेसिबिलिटी** — WCAG AA अनुपालन, कीबोर्ड नेविगेशन

बड़े बदलाव शुरू करने से पहले कृपया एक इश्यू खोलें ताकि हम दिशा पर चर्चा कर सकें।

---

## 🔍 यह प्रोजेक्ट क्या हल करता है (कीवर्ड & उपयोग-केस रेफरेंस)

**[VideoToAudioConverter.org](https://videotoaudioconverter.org)** उन सभी के लिए निश्चित उत्तर बनने के लिए बनाया गया है जो एक **मुफ्त ऑनलाइन वीडियो टू ऑडियो कन्वर्टर** खोज रहे हैं जो प्राइवेसी का सम्मान करता है। नीचे हम जो कन्वर्ज़न इंटेंट और सर्च क्वेरीज़ सर्व करते हैं उनका पूरा मैप है।

### हर कन्वर्ज़न जोड़ी जो हम समर्थन करते हैं

हर सेल एक स्पष्ट, इंडेक्सेबल कन्वर्ज़न पाथ है। पंक्ति फॉर्मेट की फ़ाइल ड्रॉप करें और कॉलम फॉर्मेट चुनें — यही कन्वर्ज़न है।

| इनपुट ↓ / आउटपुट → | MP3 | WAV | M4A | AAC | FLAC | OGG | Opus |
|---|---|---|---|---|---|---|---|
| **MP4** | [mp4 to mp3](https://videotoaudioconverter.org/hi/mp4-to-mp3) | mp4 to wav | mp4 to m4a | mp4 to aac | mp4 to flac | mp4 to ogg | mp4 to opus |
| **MOV** | [mov to mp3](https://videotoaudioconverter.org/hi/mov-to-mp3) | mov to wav | mov to m4a | mov to aac | mov to flac | mov to ogg | mov to opus |
| **MKV** | [mkv to mp3](https://videotoaudioconverter.org/hi/mkv-to-mp3) | mkv to wav | mkv to m4a | mkv to aac | mkv to flac | mkv to ogg | mkv to opus |
| **WebM** | [webm to mp3](https://videotoaudioconverter.org/hi/webm-to-mp3) | webm to wav | webm to m4a | webm to aac | webm to flac | webm to ogg | webm to opus |
| **AVI** | [avi to mp3](https://videotoaudioconverter.org/hi/avi-to-mp3) | avi to wav | avi to m4a | avi to aac | avi to flac | avi to ogg | avi to opus |
| **FLV** | flv to mp3 | flv to wav | flv to m4a | flv to aac | flv to flac | flv to ogg | flv to opus |
| **WMV** | wmv to mp3 | wmv to wav | wmv to m4a | wmv to aac | wmv to flac | wmv to ogg | wmv to opus |
| **3GP** | 3gp to mp3 | 3gp to wav | 3gp to m4a | 3gp to aac | 3gp to flac | 3gp to ogg | 3gp to opus |
| **MPEG** | mpeg to mp3 | mpeg to wav | mpeg to m4a | mpeg to aac | mpeg to flac | mpeg to ogg | mpeg to opus |
| **M4V** | m4v to mp3 | m4v to wav | m4v to m4a | m4v to aac | m4v to flac | m4v to ogg | m4v to opus |

> **63 समर्थित कन्वर्ज़न पाथ**, हर एक उसी कन्वर्टर विजेट से **[videotoaudioconverter.org](https://videotoaudioconverter.org)** पर एक्सेस किया जा सकता है। डेडिकेटेड लैंडिंग पेज: [MP4 → MP3](https://videotoaudioconverter.org/hi/mp4-to-mp3) · [MOV → MP3](https://videotoaudioconverter.org/hi/mov-to-mp3) · [MKV → MP3](https://videotoaudioconverter.org/hi/mkv-to-mp3) · [WebM → MP3](https://videotoaudioconverter.org/hi/webm-to-mp3) · [AVI → MP3](https://videotoaudioconverter.org/hi/avi-to-mp3)। अन्य सभी जोड़े आउटपुट-फॉर्मेट सेलेक्टर के माध्यम से अनलॉक होते हैं।

---

## 🎯 वीडियो टू ऑडियो कन्वर्टर का उपयोग कौन करता है? (उपयोग केस)

<p align="center">
  <a href="https://videotoaudioconverter.org/hi/">
    <img src="https://videotoaudioconverter.org/screenshots/02-use-cases.webp" alt="Video to audio converter use cases — podcast and interview recordings, online classes and lecture archives, iPhone and Android screen recordings, movie clips and archive footage" width="900" />
  </a>
</p>


लोग बहुत अलग-अलग कारणों से **वीडियो टू ऑडियो कन्वर्टर** खोजते हैं। हमने UI, कॉपी, और लैंडिंग पेज इन परिदृश्यों के आसपास ऑप्टिमाइज़ किए हैं। आप उन सभी को **[videotoaudioconverter.org](https://videotoaudioconverter.org)** पर आज़मा सकते हैं।

### 🎙️ पॉडकास्टर और ऑडियो प्रोड्यूसर

- पॉडकास्ट डिस्ट्रिब्यूशन (Spotify, Apple Podcasts, RSS) के लिए **[वीडियो रिकॉर्डिंग को MP3 में कन्वर्ट करें](https://videotoaudioconverter.org/hi/mp4-to-mp3)**।
- **Zoom रिकॉर्डिंग**, **Google Meet रिकॉर्डिंग**, **Microsoft Teams रिकॉर्डिंग**, **Riverside रिकॉर्डिंग**, या **OBS स्क्रीन रिकॉर्डिंग** से ऑडियो निकालें।
- **इंटरव्यू MP4** से विज़ुअल ट्रैक हटाएं और सिर्फ ऑडियो शिप करें।
- Audacity, Adobe Audition, Logic Pro, GarageBand, Reaper, या Pro Tools में एडिटिंग के लिए **वीडियो को WAV** या **FLAC** में कन्वर्ट करें।

### 🎓 स्टूडेंट्स और शिक्षक

- **लेक्चर रिकॉर्डिंग को MP3** में कन्वर्ट करें ताकि वे सफर के दौरान किसी भी फोन पर बजाई जा सकें — [videotoaudioconverter.org](https://videotoaudioconverter.org) आज़माएं।
- **Zoom क्लास रिकॉर्डिंग**, **Kahoot वीडियो**, **Khan Academy डाउनलोड**, या **कॉन्फ्रेंस टॉक्स** से ऑडियो निकालें।
- QuickTime से एक **[MOV रिकॉर्डिंग](https://videotoaudioconverter.org/hi/mov-to-mp3)** को iPhone के लिए पोर्टेबल **M4A** में बदलें।
- ऑफ़लाइन रिव्यू के लिए **YouTube डाउनलोड जो आपके पास पहले से हैं** उनसे ऑडियो प्राप्त करें (कृपया कॉपीराइट का सम्मान करें)।

### 📱 मोबाइल और सोशल मीडिया यूज़र्स

- **TikTok वीडियो को MP3** — [videotoaudioconverter.org](https://videotoaudioconverter.org) पर TikTok एक्सपोर्ट से साउंड क्लिप निकालें।
- **Instagram Reel वीडियो टू ऑडियो** — एक Reel डाउनलोड से ऑडियो निकालें।
- **WhatsApp वीडियो को MP3** — फॉरवर्ड किए गए वीडियो मैसेज को ऑडियो में बदलें।
- **iPhone वीडियो को MP3** — Photos से `.MOV` / `.M4V` रिकॉर्डिंग को MP3 में बदलें; हमारा **[MOV to MP3](https://videotoaudioconverter.org/hi/mov-to-mp3)** पेज इस्तेमाल करें।
- **Android वीडियो को MP3** — MP4 रिकॉर्डिंग से ऑडियो निकालें; हमारा **[MP4 to MP3](https://videotoaudioconverter.org/hi/mp4-to-mp3)** पेज इस्तेमाल करें।

### 🎵 म्यूज़िक & मीडिया एंथुज़ियास्ट

- ऑफ़लाइन प्लेबैक (अपनी / अधिकार वाली फ़ाइलों पर) के लिए **[म्यूज़िक वीडियो को MP3 में कन्वर्ट करें](https://videotoaudioconverter.org/hi/mp4-to-mp3)**।
- **कॉन्सर्ट रिकॉर्डिंग** या **रिहर्सल वीडियो** से ऑडियो निकालें।
- रीमिक्सिंग, सैंपलिंग, या DJ सेट के लिए वीडियो से एक **साउंडट्रैक** निकालें।
- [videotoaudioconverter.org](https://videotoaudioconverter.org) के माध्यम से **लॉसलेस FLAC** में वीडियो ऑडियो ट्रैक्स आर्काइव करें।

### 💼 बिज़नेस & नॉलेज वर्कर

- Otter.ai, Rev, Descript, Whisper, या Google के ट्रांसक्रिप्शन टूल के साथ ट्रांसक्रिप्शन के लिए **[मीटिंग रिकॉर्डिंग को MP3 में कन्वर्ट करें](https://videotoaudioconverter.org/hi/mp4-to-mp3)**।
- एक्सेसिबिलिटी / आर्काइविंग के लिए **वेबिनार** या **कंपनी ऑल-हैंड्स** से ऑडियो निकालें।
- ट्रांसक्रिप्शन सर्विस को भेजने के लिए **ट्रेनिंग वीडियो** से ऑडियो रिप करें।
- मीटिंग्स के **ऑडियो-ओनली वर्ज़न** साझा करके बैंडविड्थ बचाएं — सब [videotoaudioconverter.org](https://videotoaudioconverter.org) पर।

### 🎬 वीडियो एडिटर्स & कंटेंट क्रिएटर्स

- Premiere Pro, DaVinci Resolve, Final Cut, CapCut, या VN Editor में **मल्टी-ट्रैक एडिटिंग** के लिए ऑडियो को वीडियो से अलग करें — इम्पोर्ट से पहले [videotoaudioconverter.org](https://videotoaudioconverter.org) इस्तेमाल करें।
- पहले **[हमारे MKV कन्वर्टर के साथ ओरिजिनल निकालकर](https://videotoaudioconverter.org/hi/mkv-to-mp3)** वीडियो पर ऑडियो ट्रैक रिप्लेस करें।
- फाइनल वीडियो डिलीवर करने से पहले क्लाइंट्स के लिए **ऑडियो-ओनली प्रीव्यू** बनाएं।

### 🔒 प्राइवेसी-कॉन्शस यूज़र्स

- किसी थर्ड-पार्टी सर्वर पर **अपलोड किए बिना** फ़ाइलें कन्वर्ट करें — **[videotoaudioconverter.org पर आज़माएं](https://videotoaudioconverter.org)**।
- **गोपनीय इंटरव्यू**, **कानूनी डिपोज़िशन**, **मेडिकल रिकॉर्डिंग**, **पत्रकारिता स्रोत सामग्री** को बिना डिवाइस छोड़े प्रोसेस करें।
- पहले पेज लोड के बाद कन्वर्टर का **ऑफ़लाइन** उपयोग करें (हवाई जहाज़ या SCIF में काम करता है)।
- ऐसे कन्वर्टर से बचें जिन्हें **ईमेल साइनअप**, **अकाउंट क्रिएशन**, या **पेड सब्सक्रिप्शन** चाहिए। विवरण के लिए हमारी [प्राइवेसी पॉलिसी](https://videotoaudioconverter.org/hi/privacy) देखें।

---

## ❓ सामान्य प्रश्न (उत्तर सहित)

<p align="center">
  <a href="https://videotoaudioconverter.org/hi/#faq">
    <img src="https://videotoaudioconverter.org/screenshots/05-faq.webp" alt="Video to audio converter FAQ — supported input formats MP4 MOV MKV WebM AVI, output codecs MP3 WAV AAC M4A FLAC OGG Opus, file size limits, iPhone iPad Android Mac Windows support" width="900" />
  </a>
</p>


ये वे लॉन्ग-टेल प्रश्न हैं जो लोग वीडियो टू ऑडियो कन्वर्टर खोजते समय Google में टाइप करते हैं। हर एक का उत्तर [होमपेज](https://videotoaudioconverter.org) के FAQ में और प्रति-फॉर्मेट लैंडिंग पेजों में दिया गया है।

### मुफ्त में ऑनलाइन MP4 को MP3 में कैसे बदलें?
**[videotoaudioconverter.org/hi/mp4-to-mp3](https://videotoaudioconverter.org/hi/mp4-to-mp3)** पर जाएं, अपनी MP4 फ़ाइल ड्रॉप करें, आउटपुट फॉर्मेट के रूप में "MP3" चुनें, Convert क्लिक करें, और फ़ाइल डाउनलोड करें। कोई अपलोड नहीं, कोई साइनअप नहीं, कोई वॉटरमार्क नहीं, कोई फ़ाइल-साइज़ लिमिट नहीं।

### बिना अपलोड किए वीडियो से ऑडियो कैसे निकालें?
**[VideoToAudioConverter.org](https://videotoaudioconverter.org)** जैसे **क्लाइंट-साइड वीडियो टू ऑडियो कन्वर्टर** का उपयोग करें। कन्वर्ज़न आपके ब्राउज़र में WebCodecs और FFmpeg WASM के माध्यम से चलता है — फ़ाइल कभी सर्वर को नहीं छूती।

### सबसे अच्छा मुफ्त वीडियो टू ऑडियो कन्वर्टर कौन सा है जो अपलोड नहीं करता?
WebCodecs या FFmpeg WASM का उपयोग करने वाला ब्राउज़र-आधारित कन्वर्टर एकमात्र श्रेणी है जो वास्तव में अपलोड नहीं करती। **[VideoToAudioConverter.org](https://videotoaudioconverter.org)** ओपन सोर्स है ताकि आप दावे को सत्यापित कर सकें।

### बिना iTunes के Mac पर MOV को MP3 में कैसे बदलें?
Safari या Chrome में **[videotoaudioconverter.org/hi/mov-to-mp3](https://videotoaudioconverter.org/hi/mov-to-mp3)** खोलें, Finder से `.MOV` फ़ाइल को ड्रॉपज़ोन पर खींचें, "MP3" चुनें, डाउनलोड करें। किसी भी macOS वर्ज़न पर काम करता है, कोई iTunes / Music ऐप ज़रूरी नहीं।

### बिना सॉफ़्टवेयर इंस्टॉल किए MKV को MP3 में कैसे बदलें?
**[videotoaudioconverter.org/hi/mkv-to-mp3](https://videotoaudioconverter.org/hi/mkv-to-mp3)** खोलें, MKV ड्रॉप करें, MP3 चुनें, Convert क्लिक करें। कोई VLC नहीं, कोई HandBrake नहीं, कोई कमांड लाइन नहीं चाहिए।

### WebM फ़ाइल से ऑडियो कैसे निकालें?
**[videotoaudioconverter.org/hi/webm-to-mp3](https://videotoaudioconverter.org/hi/webm-to-mp3)** पर जाएं। WebM अंदरूनी रूप से Opus या Vorbis ऑडियो का उपयोग करता है — Opus (नेटिव पासथ्रू क्वालिटी के लिए), MP3 (कम्पेटिबिलिटी के लिए), या WAV (एडिटिंग के लिए) चुनें।

### 2026 में AVI को MP3 में कैसे बदलें?
AVI एक लीगेसी Windows फॉर्मेट है। **[videotoaudioconverter.org/hi/avi-to-mp3](https://videotoaudioconverter.org/hi/avi-to-mp3)** खोलें — हमारा FFmpeg WASM फ़ॉलबैक इंजन AVI को नेटिवली हैंडल करता है। फ़ाइल ड्रॉप करें, MP3 चुनें, हो गया। कोई DivX कोडेक इंस्टॉलेशन ज़रूरी नहीं।

### वीडियो को 320 kbps MP3 में कैसे बदलें?
**[videotoaudioconverter.org](https://videotoaudioconverter.org)** पर "High" क्वालिटी प्रीसेट चुनें — यह MP3 को 320 kbps पर एनकोड करता है (MP3 की अधिकतम क्वालिटी)।

### वीडियो से ऑडियो को WAV (लॉसलेस) में कैसे निकालें?
**[videotoaudioconverter.org](https://videotoaudioconverter.org)** खोलें और आउटपुट फॉर्मेट के रूप में "WAV" चुनें। WAV अनकम्प्रेस्ड PCM है — DAW में एडिटिंग के लिए आदर्श।

### iPhone वीडियो से ऑडियो कैसे रिप करें?
iPhone वीडियो आमतौर पर `.MOV` (H.264 + AAC) या `.MP4` होते हैं। **[videotoaudioconverter.org/hi/mov-to-mp3](https://videotoaudioconverter.org/hi/mov-to-mp3)** खोलें, Photos / Files से फ़ाइल ड्रॉप करें, MP3 या M4A चुनें, डाउनलोड करें।

### क्या वीडियो को ऑडियो में बदलना कानूनी है?
ऐसी फ़ाइलें बदलना जिनके आप मालिक हैं या जिन पर आपके अधिकार हैं, अधिकांश क्षेत्राधिकारों में कानूनी है। DRM को बायपास करने, पेड स्ट्रीमिंग सर्विसेज़ को स्क्रेप करने, या कॉपीराइट का उल्लंघन करने के लिए इस टूल का उपयोग न करें। हम YouTube डाउनलोडर नहीं हैं।

### क्या कन्वर्टर ऑफ़लाइन काम करता है?
**[videotoaudioconverter.org](https://videotoaudioconverter.org)** पर पहले पेज लोड के बाद, हाँ। FFmpeg WASM बाइनरी एक साल के लिए कैश हो जाती है। आप एयरप्लेन मोड में जाकर भी फ़ाइलें कन्वर्ट कर सकते हैं।

---

## 🏆 VideoToAudioConverter.org की तुलना कैसी है

<p align="center">
  <a href="https://videotoaudioconverter.org/hi/">
    <img src="https://videotoaudioconverter.org/screenshots/03-comparison.webp" alt="Free video to audio converter comparison table — VideoToAudioConverter.org versus CloudConvert, Zamzar, 123apps, Convertio. No upload, no file size cap, unlimited daily conversions, no signup, no ads, MIT open source" width="900" />
  </a>
</p>

| क्षमता | [VideoToAudioConverter.org](https://videotoaudioconverter.org) | FreeConvert | Convertio | OnlineAudioConverter | CloudConvert |
|---|---|---|---|---|---|
| **मुफ्त** | ✅ हमेशा | ✅ सीमित | ✅ सीमित | ✅ सीमित | ✅ सीमित |
| **कोई अपलोड नहीं (क्लाइंट-साइड)** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **कोई फ़ाइल साइज़ लिमिट नहीं** | ✅ | ❌ 1 GB | ❌ 100 MB | ❌ 2 GB | ❌ 1 GB |
| **कोई साइनअप नहीं** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **कोई विज्ञापन नहीं** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **ऑफ़लाइन काम करता है** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **ओपन सोर्स** | ✅ MIT | ❌ | ❌ | ❌ | ❌ |
| **असीमित कन्वर्ज़न / दिन** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **डिज़ाइन से GDPR-सेफ** | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |

> तुलना 2026 तक सार्वजनिक रूप से सूचीबद्ध प्राइसिंग टियर और फ़ीचर गेट्स को दर्शाती है। हर वेंडर की साइट पर वर्तमान लिमिट्स सत्यापित करें।

---

## 🗣️ बहुभाषी कवरेज

वही कन्वर्टर, वैश्विक ऑडियंस के लिए लोकलाइज़्ड। हर अनुवादित वर्ज़न पूरी तरह से एक अलग SEO सरफेस है:

| लोकेल | URL प्रीफिक्स | "वीडियो टू ऑडियो कन्वर्टर" के लिए अनुवादित वाक्यांश |
|---|---|---|
| 🇬🇧 अंग्रेज़ी | [`/en/`](https://videotoaudioconverter.org/en/) | video to audio converter |
| 🇫🇷 फ्रेंच | [`/fr/`](https://videotoaudioconverter.org/fr/) | convertisseur vidéo en audio |
| 🇪🇸 स्पैनिश | `/es/` *(योजना में)* | convertidor de video a audio |
| 🇩🇪 जर्मन | `/de/` *(योजना में)* | Video zu Audio Konverter |
| 🇮🇹 इतालवी | `/it/` *(योजना में)* | convertitore da video ad audio |
| 🇵🇹 पुर्तगाली | `/pt/` *(योजना में)* | conversor de vídeo para áudio |
| 🇨🇳 चीनी (सरलीकृत) | `/zh/` *(योजना में)* | 视频转音频转换器 |
| 🇯🇵 जापानी | `/ja/` *(योजना में)* | 動画から音声に変換 |
| 🇰🇷 कोरियाई | `/ko/` *(योजना में)* | 비디오를 오디오로 변환 |
| 🇷🇺 रूसी | `/ru/` *(योजना में)* | конвертер видео в аудио |
| 🇸🇦 अरबी | `/ar/` *(योजना में)* | محول فيديو إلى صوت |
| 🇮🇳 हिन्दी | `/hi/` *(योजना में)* | वीडियो को ऑडियो में बदलें |
| 🇮🇩 इंडोनेशियाई | `/id/` *(योजना में)* | konverter video ke audio |
| 🇹🇷 तुर्की | `/tr/` *(योजना में)* | video ses dönüştürücü |
| 🇻🇳 वियतनामी | `/vi/` *(योजना में)* | chuyển video sang âm thanh |

अनुवाद तैयार होने के बाद एक लोकेल जोड़ने में ~30 मिनट लगते हैं — ऊपर [इंटरनैशनलाइज़ेशन](#-इंटरनैशनलाइज़ेशन) देखें। लाइव अंग्रेज़ी होमपेज [videotoaudioconverter.org/en/](https://videotoaudioconverter.org/en/) पर है और फ़्रेंच वर्ज़न [videotoaudioconverter.org/fr/](https://videotoaudioconverter.org/fr/) पर।

---

## 📚 शब्दावली — ऑडियो & वीडियो फॉर्मेट समझाए गए

उन यूज़र्स के लिए एक रेफरेंस जो "MP3 और M4A में क्या अंतर है" या "पॉडकास्ट के लिए कौन सा ऑडियो फॉर्मेट सबसे अच्छा है" जैसी चीज़ें खोजते हैं।

### आउटपुट फॉर्मेट (ऑडियो)

- **MP3** — यूनिवर्सल ऑडियो फॉर्मेट। लॉसी कम्प्रेशन। 128 kbps = ठीक-ठाक, 192 kbps = अच्छा, 320 kbps = बेहतरीन। 1998 से बने हर डिवाइस पर बजता है। उपयोग: पॉडकास्ट, स्ट्रीमिंग, शेयरिंग।
- **WAV** — अनकम्प्रेस्ड PCM ऑडियो। बड़ी फ़ाइलें (~10 MB प्रति मिनट) लेकिन बिट-परफेक्ट। उपयोग: DAW में एडिटिंग, मास्टरिंग, आर्काइवल सोर्स।
- **M4A** — MPEG-4 ऑडियो कंटेनर, आमतौर पर AAC रखता है। कम बिटरेट पर MP3 जैसी क्वालिटी। उपयोग: iTunes / Apple Music इकोसिस्टम, iPhone रिंगटोन।
- **AAC** — Advanced Audio Coding। समान बिटरेट पर MP3 से बेहतर क्वालिटी। YouTube, Apple, आधुनिक ब्रॉडकास्टिंग के लिए स्टैंडर्ड। उपयोग: जहाँ MP3 काम करता है, जब आप बेहतर क्वालिटी चाहते हैं।
- **FLAC** — Free Lossless Audio Codec। बिना क्वालिटी खोए कम्प्रेस करता है, WAV का ~50% साइज़। उपयोग: ऑडियोफाइल आर्काइविंग, हाई-रेज़ म्यूज़िक कलेक्शन।
- **OGG (Vorbis)** — ओपन-सोर्स लॉसी फॉर्मेट। समान बिटरेट पर MP3 से बेहतर क्वालिटी। उपयोग: ओपन-सोर्स इकोसिस्टम, गेम्स, वेब।
- **Opus** — सबसे आधुनिक लॉसी कोडेक। कम बिटरेट पर MP3 / AAC / Vorbis को कुचलता है। उपयोग: वॉइस (पॉडकास्ट, VoIP), कम बैंडविड्थ ऑडियो, WebRTC।

### इनपुट फॉर्मेट (वीडियो)

- **MP4** — MPEG-4 कंटेनर में H.264 / H.265 वीडियो + AAC ऑडियो। लगभग हर चीज़ के लिए डिफ़ॉल्ट: YouTube डाउनलोड, फोन रिकॉर्डिंग, स्क्रीन कैप्चर।
- **MOV** — Apple QuickTime कंटेनर। iPhones, Macs, ScreenFlow, Final Cut से सामान्य।
- **MKV** — Matroska। ओपन कंटेनर जो किसी भी कोडेक को रख सकता है। हाई-क्वालिटी वीडियो डाउनलोड, ऐनिमे, ब्लू-रे रिप्स के लिए सामान्य।
- **WebM** — Google-समर्थित ओपन कंटेनर। VP8 / VP9 / AV1 वीडियो + Opus / Vorbis ऑडियो। वेब वीडियो के लिए स्टैंडर्ड (WebM में YouTube डाउनलोड, WhatsApp Web)।
- **AVI** — Audio Video Interleave। '90 के दशक का लीगेसी Microsoft फॉर्मेट, अभी भी पुराने आर्काइव्स और Windows-only सॉफ़्टवेयर एक्सपोर्ट में सामान्य।
- **FLV** — Flash Video। लीगेसी Adobe Flash फॉर्मेट। आज दुर्लभ लेकिन पुराने डाउनलोड में अभी भी मिलता है।
- **WMV** — Windows Media Video। Microsoft प्रोप्राइटरी, पुराने Windows Movie Maker / PowerPoint एक्सपोर्ट से सामान्य।
- **3GP** — प्री-स्मार्टफोन युग का मोबाइल कंटेनर। अभी भी कुछ फीचर फोन और पुराने कैमकॉर्डर द्वारा उत्पादित।
- **MPEG (MPG)** — मूल MPEG-1 / MPEG-2 वीडियो फॉर्मेट। पुराने DVDs और TV ब्रॉडकास्ट के लिए उपयोग किया जाता है।

---

## 🧭 हम जिस सर्च इंटेंट से मैच करते हैं

यह सर्च क्वेरी की एक गैर-संपूर्ण सूची है जिसके लिए यह साइट रैंक करने के लिए डिज़ाइन की गई है। हम प्रत्येक को साइट पर कहीं (होमपेज, फॉर्मेट पेज, FAQ, या इस README) पर प्राइमरी कंटेंट के रूप में इंडेक्स करते हैं।

<details>
<summary><strong>🔹 हेड टर्म्स (हाई वॉल्यूम)</strong></summary>

video to audio converter · video to mp3 · video to mp3 converter · convert video to mp3 · convert video to audio · extract audio from video · mp3 converter · online mp3 converter · free mp3 converter · audio extractor · video sound extractor · rip audio from video · video to audio · audio from video · get audio from video · video to mp3 online · convert video to mp3 free · free video to audio converter · video to mp3 free · online video to audio converter · वीडियो को ऑडियो में बदलें · वीडियो mp3 कन्वर्टर · वीडियो से ऑडियो निकालें · मुफ्त वीडियो कन्वर्टर · ऑनलाइन वीडियो mp3 · वीडियो को mp3 में बदलें · वीडियो से आवाज निकालें · video to audio converter hindi · video to mp3 converter free · वीडियो ऑडियो कन्वर्टर ऑनलाइन · video se audio nikalne wala · mp4 ko mp3 banao · वीडियो का ऑडियो कैसे निकाले

</details>

<details>
<summary><strong>🔹 फॉर्मेट-पेयर कन्वर्ज़न (लॉन्ग टेल, हाई इंटेंट)</strong></summary>

mp4 to mp3 · mp4 to wav · mp4 to m4a · mp4 to aac · mp4 to flac · mp4 to ogg · mp4 to opus · mov to mp3 · mov to wav · mov to m4a · mov to aac · mkv to mp3 · mkv to wav · mkv to flac · mkv to aac · webm to mp3 · webm to ogg · webm to opus · webm to wav · avi to mp3 · avi to wav · flv to mp3 · wmv to mp3 · 3gp to mp3 · mpeg to mp3 · m4v to mp3 · mp4 to mp3 हिंदी · mp4 to mp3 converter hindi · mp4 ko mp3 me badle

</details>

<details>
<summary><strong>🔹 क्वालिटी / बिटरेट मॉडिफायर</strong></summary>

320 kbps mp3 converter · high quality video to mp3 · lossless video to audio · video to flac · hd audio extractor · cd quality wav extractor · 192 kbps mp3 · 128 kbps mp3 · best quality video to mp3 · convert video to high quality audio · 320 kbps mp3 कन्वर्टर · हाई क्वालिटी mp3 · लॉसलेस ऑडियो

</details>

<details>
<summary><strong>🔹 प्राइवेसी & ट्रस्ट मॉडिफायर</strong></summary>

video to mp3 no upload · video converter no upload · client-side video to mp3 · browser-based video converter · offline video to audio · private video to mp3 · secure video converter · no signup video to mp3 · no registration audio extractor · no watermark video to mp3 · ad-free video converter · gdpr-safe video converter · video to mp3 without uploading file · open source video to audio converter · बिना अपलोड वीडियो कन्वर्ट · बिना साइनअप · बिना वॉटरमार्क · सुरक्षित वीडियो कन्वर्टर

</details>

<details>
<summary><strong>🔹 डिवाइस / प्लेटफ़ॉर्म मॉडिफायर</strong></summary>

iphone video to mp3 · android video to mp3 · mac video to mp3 · windows video to mp3 · linux video to mp3 · chromebook video to mp3 · ipad video to audio · safari video to mp3 · chrome video to mp3 · firefox video to mp3 · edge video to mp3 · ios video to mp3 converter · iphone वीडियो mp3 · android वीडियो mp3

</details>

<details>
<summary><strong>🔹 स्रोत-विशिष्ट इंटेंट (केवल अपनी फ़ाइलें — हम YouTube डाउनलोडर नहीं हैं)</strong></summary>

zoom recording to mp3 · google meet recording to mp3 · teams recording to mp3 · screen recording to mp3 · obs recording to mp3 · tiktok video to mp3 · instagram reel to mp3 · whatsapp video to mp3 · iphone screen recording to mp3 · webinar recording to audio · interview video to mp3 · podcast video to mp3 · lecture recording to mp3 · zoom रिकॉर्डिंग mp3 · tiktok mp3 बनाएं · व्हाट्सएप वीडियो mp3 · स्क्रीन रिकॉर्डिंग mp3

</details>

<details>
<summary><strong>🔹 हाउ-टू लॉन्ग-टेल (FAQ / फ़ीचर्ड स्निपेट टारगेट)</strong></summary>

how to convert mp4 to mp3 · how to extract audio from video · how to convert video to mp3 free · how to convert video to mp3 without software · how to get sound from a video · how to rip audio from a video file · how to convert mov to mp3 on mac · how to convert mkv to mp3 · how to extract audio from webm · how to convert avi to mp3 in 2026 · how to convert video to mp3 on iphone · how to convert video to mp3 on android · how to convert video to mp3 offline · how to convert video to 320 kbps mp3 · how to convert video to wav · how to extract audio from a video without uploading · वीडियो को mp3 में कैसे बदले · वीडियो से ऑडियो कैसे निकाले · mp4 को mp3 में कैसे बदले

</details>

<details>
<summary><strong>🔹 तुलना / विकल्प</strong></summary>

freeconvert alternative · convertio alternative · cloudconvert alternative · onlineaudioconverter alternative · ytmp3 alternative · zamzar alternative · best free video to audio converter · best browser video to mp3 converter · best private video converter · open source alternative to convertio

</details>

<details>
<summary><strong>🔹 बहुभाषी</strong></summary>

convertisseur vidéo en audio · convertidor de video a audio · video zu audio konverter · conversor de vídeo para áudio · convertitore video audio · 视频转音频 · 視頻轉音頻 · 動画 音声 変換 · 비디오 오디오 변환 · конвертер видео в аудио · محول فيديو إلى صوت · वीडियो को ऑडियो में बदलें · वीडियो mp3 कन्वर्टर · वीडियो से ऑडियो निकालने वाला · वीडियो को mp3 बनाओ · video se audio nikalne wala · mp4 ko mp3 banao · konverter video ke audio · video ses dönüştürücü · chuyển video sang âm thanh

</details>

---

## 🌟 संक्षेप में

अगर आप एक **मुफ्त ऑनलाइन वीडियो टू ऑडियो कन्वर्टर** ढूंढ रहे हैं जो:

- ✅ **[MP4 to MP3](https://videotoaudioconverter.org/hi/mp4-to-mp3)**, **[MOV to MP3](https://videotoaudioconverter.org/hi/mov-to-mp3)**, **[MKV to MP3](https://videotoaudioconverter.org/hi/mkv-to-mp3)**, **[WebM to MP3](https://videotoaudioconverter.org/hi/webm-to-mp3)**, **[AVI to MP3](https://videotoaudioconverter.org/hi/avi-to-mp3)** और 58 अन्य कन्वर्ज़न जोड़े कन्वर्ट करता है
- ✅ **100% आपके ब्राउज़र में** **ज़ीरो अपलोड** और **ज़ीरो ट्रैकिंग** के साथ चलता है
- ✅ **कोई फ़ाइल साइज़ लिमिट नहीं**, **कोई साइनअप नहीं**, **कोई विज्ञापन नहीं**, **कोई वॉटरमार्क नहीं**
- ✅ **MP3, WAV, M4A, AAC, FLAC, OGG, Opus** आउटपुट को **320 kbps** तक या **लॉसलेस** पर सपोर्ट करता है
- ✅ **Mac, Windows, Linux, Chromebook, iPhone, iPad, Android** पर काम करता है
- ✅ **ओपन सोर्स**, **GDPR-सेफ** है, और पहले लोड के बाद **ऑफ़लाइन** काम करता है

— तो **[videotoaudioconverter.org](https://videotoaudioconverter.org)** बुकमार्क करें और इस रिपो को स्टार करें। ⭐

---

## 📄 लाइसेंस

- **सोर्स कोड:** [MIT](LICENSE)
- **FFmpeg:** [LGPL 2.1](https://ffmpeg.org/legal.html) (WASM के माध्यम से डायनामिकली लिंक्ड)
- **MediaBunny:** MIT
- **shadcn/ui:** MIT

---

<p align="center">
  ❤️ के साथ बनाया गया · <a href="https://pages.cloudflare.com/">Cloudflare Pages</a> पर होस्टेड · <a href="https://plausible.io/">Plausible</a> द्वारा एनालिटिक्स
</p>

<p align="center">
  <sub>
    कीवर्ड: वीडियो को ऑडियो में बदलें · वीडियो mp3 कन्वर्टर · mp4 to mp3 हिंदी · वीडियो से ऑडियो निकालें · मुफ्त वीडियो कन्वर्टर · ऑनलाइन वीडियो mp3 · बिना अपलोड वीडियो कन्वर्ट · video to audio converter hindi · video to mp3 converter free · mp4 to mp3 converter hindi · iphone वीडियो mp3 · android वीडियो mp3 · zoom रिकॉर्डिंग mp3 · tiktok mp3 बनाएं · व्हाट्सएप वीडियो mp3 · 320 kbps mp3 कन्वर्टर · बिना साइनअप · बिना वॉटरमार्क · ओपन सोर्स · WebCodecs · FFmpeg WASM
  </sub>
</p>
