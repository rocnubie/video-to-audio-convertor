<p align="center">
  <img src="app/icon.svg" alt="VideoToAudioConverter Logo" width="80" height="80" />
</p>

<h1 align="center">VideoToAudioConverter.org</h1>

<p align="center">
  <strong>The fastest free video to audio converter — 100% in your browser, zero uploads, zero tracking.</strong>
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
  <a href="https://videotoaudioconverter.org">🌐 Live Demo</a> ·
  <a href="#-getting-started">Quick Start</a> ·
  <a href="#-how-it-works">How It Works</a> ·
  <a href="#-supported-formats">Formats</a> ·
  <a href="#-deploy">Deploy</a>
</p>

---

## What Is This?

**VideoToAudioConverter.org** is a production-grade, open-source **video to audio converter** that runs entirely inside the user's browser. Drop a video file, pick an audio format, hit convert — the audio downloads instantly. No server, no account, no file size limit imposed by a backend.

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

### Why Another Video to Audio Converter?

| Feature | VideoToAudioConverter.org | Typical online converter |
|---|---|---|
| Runs 100% in the browser | ✅ WebCodecs + FFmpeg WASM | ❌ Uploads to server |
| File size limit | ✅ None (RAM is the limit) | ❌ 50–500 MB cap |
| Privacy / no tracking | ✅ Zero cookies, zero uploads | ❌ Files stored on server |
| Works offline (after first load) | ✅ WASM cached forever | ❌ Needs internet |
| Open source | ✅ MIT | ❌ Closed source |
| Ad-free | ✅ | ❌ Aggressive ads |
| Fast (modern formats) | ✅ WebCodecs native speed | ❌ Server queue |

---

## ✨ Features

### Core Converter

- **Drag-and-drop** or click to select any video file
- **9 input formats** → MP4, MOV, MKV, WebM, AVI, FLV, WMV, 3GP, MPEG
- **7 output formats** → MP3, WAV, M4A, AAC, FLAC, OGG, Opus
- **Quality presets** → High (320 kbps), Medium (192 kbps), Low (128 kbps), Lossless
- **Real-time progress bar** with stage labels (demux → decode → encode → mux)
- **Instant download** — audio blob served from memory, never touches a server

### Privacy-First Architecture

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

### SEO-Optimised Format Landing Pages

Dedicated, fully-translated landing pages for every popular **video to audio** conversion pair:

| Route | Title |
|---|---|
| `/mp4-to-mp3` | MP4 to MP3 Converter |
| `/mov-to-mp3` | MOV to MP3 Converter |
| `/mkv-to-mp3` | MKV to MP3 Converter |
| `/webm-to-mp3` | WebM to MP3 Converter |
| `/avi-to-mp3` | AVI to MP3 Converter |

Each page has unique copy, JSON-LD schemas (SoftwareApplication, HowTo, FAQPage), and Open Graph tags — no duplicate content.

### Internationalisation

- English (`/en/`) and French (`/fr/`) out of the box
- Per-page message namespaces for deep i18n (not just UI strings)
- Infrastructure ready for 15+ additional locales (zh, ja, ko, es, de, pt, it, ru, ar, hi, id, tr, vi …)

---

## 🔧 How It Works

The converter is powered by a **dual-engine architecture** that automatically picks the fastest available engine for each input file:

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

### Engine Details

#### MediaBunny — Primary Engine

[MediaBunny](https://github.com/nicktindall/mediabunny) wraps the browser-native **WebCodecs API** into a simple transcoding pipeline. It operates on the main thread with zero WASM overhead for supported formats.

- **Supported inputs:** MP4, M4V, MOV, QT, MKV, WebM
- **Speed:** Near-native — a 1-hour MP4 can convert in ~10 seconds on modern hardware
- **No COOP/COEP headers required** — works alongside third-party scripts

#### FFmpeg WASM — Fallback Engine

[@ffmpeg/ffmpeg](https://github.com/ffmpegwasm/ffmpeg.wasm) compiles the full FFmpeg binary to WebAssembly. Runs single-threaded (no SharedArrayBuffer / COOP required).

- **Supported inputs:** AVI, FLV, WMV, 3GP, MPEG, and any format MediaBunny can't handle
- **WASM size:** ~31 MB (cached via `Cache-Control: immutable, max-age=31536000`)
- **Self-hosted JS shim** at `/ffmpeg-core/ffmpeg-core.js` to avoid CDN dependency

---

## 📂 Supported Formats

### Input Formats (Video to Audio)

| Format | Extension(s) | Engine | Notes |
|---|---|---|---|
| MP4 | `.mp4`, `.m4v` | MediaBunny | Most common video format |
| MOV | `.mov`, `.qt` | MediaBunny | Apple QuickTime |
| MKV | `.mkv` | MediaBunny | Matroska container |
| WebM | `.webm` | MediaBunny | Web-native (VP8/VP9/AV1) |
| AVI | `.avi` | FFmpeg WASM | Legacy Windows format |
| FLV | `.flv` | FFmpeg WASM | Flash Video |
| WMV | `.wmv` | FFmpeg WASM | Windows Media Video |
| 3GP | `.3gp` | FFmpeg WASM | Mobile video |
| MPEG | `.mpeg`, `.mpg` | FFmpeg WASM | Older broadcast format |

### Output Formats (Audio)

| Format | Quality Options | Use Case |
|---|---|---|
| **MP3** | 128 / 192 / 320 kbps | Universal compatibility, streaming, podcasts |
| **WAV** | Lossless PCM | Professional audio, DAW import |
| **AAC** | 128 / 192 / 320 kbps | Apple devices, iTunes, better compression than MP3 |
| **M4A** | 128 / 192 / 320 kbps | iTunes, Apple Music |
| **FLAC** | Lossless | Audiophile archiving |
| **OGG** | 128 / 192 / 320 kbps | Open format, great compression |
| **Opus** | 128 / 192 / 320 kbps | Best compression/quality ratio, VoIP |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20+
- **pnpm** 9+ (`npm install -g pnpm`)

### Installation

```bash
git clone https://github.com/rocnubie/video-to-audio-convertor.git
cd video-to-audio-convertor

pnpm install
# postinstall automatically copies @ffmpeg/core WASM into public/ffmpeg-core/
```

### Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) — the app redirects to `/en/` automatically.

> **Tip:** The first time FFmpeg WASM loads (~31 MB), it will be slow. Subsequent loads are instant thanks to `Cache-Control: immutable`.

### Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Description | Example |
|---|---|---|
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Your Plausible site domain | `videotoaudioconverter.org` |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` | Plausible script URL | `https://plausible.io/js/script.tagged-events.outbound-links.js` |

Leave these blank in development — analytics will simply be skipped.

---

## 🏗️ Tech Stack

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

### Why These Choices?

**Next.js static export** — The entire site pre-renders to flat HTML/JS/CSS files. There is no Node.js server in production. Cloudflare Pages serves everything from the edge.

**MediaBunny over FFmpeg-first** — For MP4/MOV/MKV/WebM (the vast majority of conversions), MediaBunny uses native browser WebCodecs and is 5–10× faster than FFmpeg WASM with zero cold-start penalty.

**Single-threaded FFmpeg WASM** — Multi-threaded FFmpeg requires `SharedArrayBuffer`, which requires `Cross-Origin-Opener-Policy: same-origin` and `Cross-Origin-Embedder-Policy: require-corp`. Those headers break third-party scripts (analytics, fonts, ads). Single-threaded avoids all of that.

**Tailwind v4 + OKLCH** — The design system uses the OKLCH colour space for perceptually uniform teal/cyan accents that look correct in both light and dark mode without manual dark-mode overrides per component.

---

## 📁 File Structure

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

## 🌍 Internationalisation

The site uses [next-intl 4](https://next-intl-docs.vercel.app/) with locale-prefixed routes (`/en/`, `/fr/`).

### Adding a New Language

1. **Register the locale** in `i18n/routing.ts`:

   ```ts
   export const routing = defineRouting({
     locales: ['en', 'fr', 'de'],  // add 'de'
     defaultLocale: 'en',
   });
   ```

2. **Create shared messages** at `i18n/messages/de.json` (copy `en.json` and translate).

3. **Create per-page messages** for each page namespace:

   ```
   i18n/pages/home/de.json
   i18n/pages/mp4-to-mp3/de.json
   … etc.
   ```

4. **Add locale metadata** in `i18n/locale.ts`:

   ```ts
   de: { nativeName: 'Deutsch', englishName: 'German' },
   ```

5. `sitemap.ts` and `generateStaticParams()` automatically pick up the new locale — no further changes required.

---

## 📊 Analytics

The site uses [Plausible Analytics](https://plausible.io/) — cookieless, GDPR-compliant, no personal data collected.

### Custom Events

All events are typed in [`lib/analytics.ts`](lib/analytics.ts):

| Event | Properties | When Fired |
|---|---|---|
| `file_selected` | `ext`, `size_mb`, `engine_hint` | User drops or selects a video file |
| `conversion_started` | `from_ext`, `to_format`, `quality` | Convert button clicked |
| `conversion_completed` | `from_ext`, `to_format`, `engine`, `duration_s` | Audio blob ready |
| `conversion_failed` | `from_ext`, `to_format`, `reason` | Engine throws an error |
| `conversion_cancelled` | `from_ext`, `to_format` | User cancels mid-conversion |
| `download_clicked` | `format` | Download button clicked |

These events give you a complete picture of which video-to-audio conversion paths are most popular.

---

## 📦 Build & Deploy

### Local Build

```bash
pnpm build       # static export → out/
npx serve out    # preview locally
```

The build output is a directory of flat files — no server required.

### Deploy to Cloudflare Pages

1. **Connect your repository** in the Cloudflare Pages dashboard.

2. **Build settings:**

   | Setting | Value |
   |---|---|
   | Build command | `pnpm build` |
   | Build output directory | `out` |
   | Node.js version | `20` |

3. **Environment variables** (Production + Preview):

   ```
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=videotoaudioconverter.org
   NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL=https://plausible.io/js/script.tagged-events.outbound-links.js
   ```

4. **Custom domain:** Add `videotoaudioconverter.org` and let Cloudflare DNS handle routing.

### Caching Strategy

| Asset | Cache-Control | Why |
|---|---|---|
| `/ffmpeg-core/*` | `immutable, max-age=31536000` | Content-addressed; never changes |
| `/_next/static/*` | `immutable, max-age=31536000` | Next.js content-hashes filenames |
| `/og.png`, `/favicon.ico` | `max-age=604800` | Infrequently updated |
| HTML pages | No cache / security headers | Always fresh, protect users |

---

## ➕ Adding a New Format Page

To add a new **video to audio** conversion landing page (e.g., `flv-to-mp3`):

1. **Add to `lib/content/format-pages.ts`:**

   ```ts
   {
     slug: 'flv-to-mp3',
     messageKey: 'flvToMp3',
     outputFormat: 'mp3',
     highlightedInputs: ['flv'],
     useCaseImages: ['https://images.unsplash.com/…'],
   }
   ```

2. **Create the page file:**

   ```ts
   // app/[locale]/flv-to-mp3/page.tsx
   import { FormatLandingPage } from '@/components/landing/FormatLandingPage'
   import { getFormatPage } from '@/lib/content/format-pages'

   const config = getFormatPage('flv-to-mp3')!

   export default function Page() {
     return <FormatLandingPage config={config} />
   }
   ```

3. **Add translations:**

   ```
   i18n/pages/flv-to-mp3/en.json
   i18n/pages/flv-to-mp3/fr.json
   ```

4. The page is **automatically included** in `sitemap.ts` — no further changes needed.

> **SEO note:** Each format page must have unique copy. Google penalises doorway pages with near-duplicate content.

---

## 🛡️ Privacy & Security

- **No file uploads** — conversion runs entirely in the browser via WebCodecs / FFmpeg WASM
- **No cookies** — Plausible is cookieless; no consent banner needed
- **No localStorage** — nothing is persisted between sessions
- **No CDN dependency at runtime** — FFmpeg JS shim is self-hosted; only the WASM binary loads from `unpkg` and is cached forever after first load
- **Security headers on every HTML page:**
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`

---

## 🤝 Contributing

Contributions are welcome. The most impactful areas are:

- **New translations** — Copy `i18n/messages/en.json`, translate, open a PR
- **New format landing pages** — Follow the guide above; bring unique copy
- **Engine improvements** — Better progress reporting, additional output codecs
- **UI / accessibility** — WCAG AA compliance, keyboard navigation

Please open an issue before starting large changes so we can discuss direction.

---

## 📄 License

- **Source code:** [MIT](LICENSE)
- **FFmpeg:** [LGPL 2.1](https://ffmpeg.org/legal.html) (dynamically linked via WASM)
- **MediaBunny:** MIT
- **shadcn/ui:** MIT

---

<p align="center">
  Built with ❤️ · Hosted on <a href="https://pages.cloudflare.com/">Cloudflare Pages</a> · Analytics by <a href="https://plausible.io/">Plausible</a>
</p>
