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

## 🔍 What This Project Solves (Keyword & Use-Case Reference)

VideoToAudioConverter.org is built to be the definitive answer for anyone searching for a **free online video to audio converter** that respects privacy. Below is the complete map of conversion intents and search queries we serve.

### Every Conversion Pair We Support

Each cell is an explicit, indexable conversion path. Drop a file of the row format and pick the column format — that's the conversion.

| Input ↓ / Output → | MP3 | WAV | M4A | AAC | FLAC | OGG | Opus |
|---|---|---|---|---|---|---|---|
| **MP4** | mp4 to mp3 | mp4 to wav | mp4 to m4a | mp4 to aac | mp4 to flac | mp4 to ogg | mp4 to opus |
| **MOV** | mov to mp3 | mov to wav | mov to m4a | mov to aac | mov to flac | mov to ogg | mov to opus |
| **MKV** | mkv to mp3 | mkv to wav | mkv to m4a | mkv to aac | mkv to flac | mkv to ogg | mkv to opus |
| **WebM** | webm to mp3 | webm to wav | webm to m4a | webm to aac | webm to flac | webm to ogg | webm to opus |
| **AVI** | avi to mp3 | avi to wav | avi to m4a | avi to aac | avi to flac | avi to ogg | avi to opus |
| **FLV** | flv to mp3 | flv to wav | flv to m4a | flv to aac | flv to flac | flv to ogg | flv to opus |
| **WMV** | wmv to mp3 | wmv to wav | wmv to m4a | wmv to aac | wmv to flac | wmv to ogg | wmv to opus |
| **3GP** | 3gp to mp3 | 3gp to wav | 3gp to m4a | 3gp to aac | 3gp to flac | 3gp to ogg | 3gp to opus |
| **MPEG** | mpeg to mp3 | mpeg to wav | mpeg to m4a | mpeg to aac | mpeg to flac | mpeg to ogg | mpeg to opus |
| **M4V** | m4v to mp3 | m4v to wav | m4v to m4a | m4v to aac | m4v to flac | m4v to ogg | m4v to opus |

> **63 supported conversion paths**, each accessible from the same converter widget. The most popular landing pages (MP4 → MP3, MOV → MP3, MKV → MP3, WebM → MP3, AVI → MP3) ship today; the rest are unlocked via the output-format selector.

---

## 🎯 Who Uses a Video to Audio Converter? (Use Cases)

People search for a **video to audio converter** for very different reasons. We optimised the UI, copy, and landing pages around these scenarios:

### 🎙️ Podcasters & Audio Producers

- **Convert video recordings to MP3** for podcast distribution (Spotify, Apple Podcasts, RSS).
- Extract audio from a **Zoom recording**, **Google Meet recording**, **Microsoft Teams recording**, **Riverside recording**, or **OBS screen recording**.
- Strip the visual track from an **interview MP4** and ship audio-only.
- Convert **video to WAV** or **FLAC** for editing in Audacity, Adobe Audition, Logic Pro, GarageBand, Reaper, or Pro Tools.

### 🎓 Students & Educators

- Convert **lecture recordings to MP3** so they're playable on any phone during commute.
- Extract audio from **Zoom class recordings**, **Kahoot videos**, **Khan Academy downloads**, or **conference talks**.
- Turn a **MOV recording** from QuickTime into a portable **M4A** for iPhone.
- Get audio from **YouTube downloads you already own** for offline review (please respect copyright).

### 📱 Mobile & Social Media Users

- **TikTok video to MP3** — extract a sound clip from a TikTok export.
- **Instagram Reel video to audio** — pull audio out of a Reel download.
- **WhatsApp video to MP3** — convert a forwarded video message into audio.
- **iPhone video to MP3** — turn `.MOV` / `.M4V` recordings from Photos into MP3 for ringtones, voice memos, or audio sharing.
- **Android video to MP3** — extract audio from MP4 recordings captured on Android cameras.

### 🎵 Music & Media Enthusiasts

- **Convert music video to MP3** for offline playback (on files you own / have rights to).
- Extract audio from a **concert recording** or **rehearsal video**.
- Pull a **soundtrack** out of a video for remixing, sampling, or DJ sets.
- Archive video audio tracks in **lossless FLAC**.

### 💼 Business & Knowledge Workers

- Convert a **meeting recording** to MP3 for transcription with Otter.ai, Rev, Descript, Whisper, or Google's transcription tools.
- Extract audio from a **webinar** or **company all-hands** for accessibility / archival.
- Rip audio from a **training video** to send to a transcription service.
- Save bandwidth by sharing **audio-only versions** of meetings.

### 🎬 Video Editors & Content Creators

- Separate audio from video for **multi-track editing** in Premiere Pro, DaVinci Resolve, Final Cut, CapCut, or VN Editor.
- Replace the audio track on a video by first **extracting the original**.
- Generate **audio-only previews** for clients before delivering the final video.

### 🔒 Privacy-Conscious Users

- Convert files **without uploading** to any third-party server.
- Process **confidential interviews**, **legal depositions**, **medical recordings**, **journalistic source material** without ever leaving the device.
- Use the converter **offline** after the first page load (works on a plane or in a SCIF).
- Avoid converters that require **email signup**, **account creation**, or **paid subscriptions**.

---

## ❓ Common Questions (Answered)

These are the long-tail questions people type into Google when looking for a video to audio converter. Each is answered in the FAQ on the homepage and in the per-format landing pages.

### How do I convert MP4 to MP3 for free online?
Drop your MP4 file onto VideoToAudioConverter.org, pick "MP3" as the output format, click Convert, and download the file. No upload, no signup, no watermark, no file-size limit.

### How do I extract audio from a video without uploading it?
Use a **client-side video to audio converter** like VideoToAudioConverter.org. The conversion runs in your browser via WebCodecs and FFmpeg WASM — the file never touches a server.

### What is the best free video to audio converter that doesn't upload?
A browser-based converter using WebCodecs or FFmpeg WASM is the only category that genuinely doesn't upload. VideoToAudioConverter.org is open source so you can verify the claim.

### How do I convert MOV to MP3 on a Mac without iTunes?
Open VideoToAudioConverter.org in Safari or Chrome, drag the `.MOV` file from Finder onto the dropzone, pick "MP3", download. Works on any macOS version, no iTunes / Music app required.

### How do I convert MKV to MP3 without installing software?
MKV files are fully supported by the browser engine. Drop the MKV, pick MP3, click Convert. No VLC, no HandBrake, no command line required.

### How do I extract audio from a WebM file?
WebM uses Opus or Vorbis audio internally. Drop the WebM and choose Opus (for native passthrough quality), MP3 (for compatibility), or WAV (for editing).

### How do I convert AVI to MP3 in 2026?
AVI is a legacy Windows format. Our FFmpeg WASM fallback engine handles AVI natively — drop the file, pick MP3, done. No old DivX codec installation required.

### How do I convert video to 320 kbps MP3?
Pick the "High" quality preset — it encodes MP3 at 320 kbps (the maximum quality for MP3).

### How do I extract audio from a video to WAV (lossless)?
Pick "WAV" as the output format. WAV is uncompressed PCM — ideal for editing in a DAW.

### How do I rip audio from an iPhone video?
iPhone videos are usually `.MOV` (H.264 + AAC) or `.MP4`. Drop the file from Photos / Files, pick MP3 or M4A, download.

### Is it legal to convert video to audio?
Converting files you own or have rights to is legal in most jurisdictions. Do not use this tool to circumvent DRM, scrape paid streaming services, or violate copyright. We are not a YouTube downloader.

### Does the converter work offline?
After the first page load, yes. The FFmpeg WASM binary is cached for a year. You can airplane-mode and still convert files.

---

## 🏆 How VideoToAudioConverter.org Compares

| Capability | VideoToAudioConverter.org | FreeConvert | Convertio | OnlineAudioConverter | CloudConvert |
|---|---|---|---|---|---|
| **Free** | ✅ Forever | ✅ Limited | ✅ Limited | ✅ Limited | ✅ Limited |
| **No upload (client-side)** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **No file size limit** | ✅ | ❌ 1 GB | ❌ 100 MB | ❌ 2 GB | ❌ 1 GB |
| **No signup** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **No ads** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Works offline** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Open source** | ✅ MIT | ❌ | ❌ | ❌ | ❌ |
| **Unlimited conversions / day** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **GDPR-safe by design** | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |

> Comparison reflects publicly-listed pricing tiers and feature gates as of 2026. Verify current limits on each vendor's site.

---

## 🗣️ Multilingual Coverage

The same converter, localised for global audiences. Each translated version is a fully separate SEO surface:

| Locale | URL prefix | Translated phrase for "video to audio converter" |
|---|---|---|
| 🇬🇧 English | `/en/` | video to audio converter |
| 🇫🇷 French | `/fr/` | convertisseur vidéo en audio |
| 🇪🇸 Spanish | `/es/` *(planned)* | convertidor de video a audio |
| 🇩🇪 German | `/de/` *(planned)* | Video zu Audio Konverter |
| 🇮🇹 Italian | `/it/` *(planned)* | convertitore da video ad audio |
| 🇵🇹 Portuguese | `/pt/` *(planned)* | conversor de vídeo para áudio |
| 🇨🇳 Chinese (Simplified) | `/zh/` *(planned)* | 视频转音频转换器 |
| 🇯🇵 Japanese | `/ja/` *(planned)* | 動画から音声に変換 |
| 🇰🇷 Korean | `/ko/` *(planned)* | 비디오를 오디오로 변환 |
| 🇷🇺 Russian | `/ru/` *(planned)* | конвертер видео в аудио |
| 🇸🇦 Arabic | `/ar/` *(planned)* | محول فيديو إلى صوت |
| 🇮🇳 Hindi | `/hi/` *(planned)* | वीडियो को ऑडियो में बदलें |
| 🇮🇩 Indonesian | `/id/` *(planned)* | konverter video ke audio |
| 🇹🇷 Turkish | `/tr/` *(planned)* | video ses dönüştürücü |
| 🇻🇳 Vietnamese | `/vi/` *(planned)* | chuyển video sang âm thanh |

Adding a locale takes ~30 minutes once translations are ready — see [Internationalisation](#-internationalisation) above.

---

## 📚 Glossary — Audio & Video Formats Explained

A reference for users searching things like "what is the difference between MP3 and M4A" or "which audio format is best for podcasts".

### Output Formats (Audio)

- **MP3** — The universal audio format. Lossy compression. 128 kbps = decent, 192 kbps = good, 320 kbps = excellent. Plays on literally every device made since 1998. Use for: podcasts, streaming, sharing.
- **WAV** — Uncompressed PCM audio. Huge files (~10 MB per minute) but bit-perfect. Use for: editing in a DAW, mastering, archival sources.
- **M4A** — MPEG-4 audio container, typically holding AAC. Same quality as MP3 at lower bitrates. Use for: iTunes / Apple Music ecosystem, iPhone ringtones.
- **AAC** — Advanced Audio Coding. Better quality than MP3 at the same bitrate. Standard for YouTube, Apple, modern broadcasting. Use for: anywhere MP3 works, when you want better quality.
- **FLAC** — Free Lossless Audio Codec. Compresses without quality loss, ~50% the size of WAV. Use for: audiophile archiving, hi-res music collections.
- **OGG (Vorbis)** — Open-source lossy format. Better quality than MP3 at the same bitrate. Use for: open-source ecosystems, games, web.
- **Opus** — The most modern lossy codec. Crushes MP3 / AAC / Vorbis at low bitrates. Use for: voice (podcasts, VoIP), low-bandwidth audio, WebRTC.

### Input Formats (Video)

- **MP4** — H.264 / H.265 video + AAC audio in an MPEG-4 container. The default for almost everything: YouTube downloads, phone recordings, screen captures.
- **MOV** — Apple QuickTime container. Common from iPhones, Macs, ScreenFlow, Final Cut.
- **MKV** — Matroska. Open container that can hold any codec. Common for high-quality video downloads, anime, blu-ray rips.
- **WebM** — Google-backed open container. VP8 / VP9 / AV1 video + Opus / Vorbis audio. Standard for web video (YouTube downloads in WebM, WhatsApp Web).
- **AVI** — Audio Video Interleave. Legacy Microsoft format from the '90s, still common in older archives and Windows-only software exports.
- **FLV** — Flash Video. Legacy Adobe Flash format. Rare today but still found in old downloads.
- **WMV** — Windows Media Video. Microsoft proprietary, common from older Windows Movie Maker / PowerPoint exports.
- **3GP** — Mobile container from the pre-smartphone era. Still produced by some feature phones and old camcorders.
- **MPEG (MPG)** — The original MPEG-1 / MPEG-2 video format. Used for old DVDs and TV broadcasts.

---

## 🧭 Search Intent We Match

A non-exhaustive list of the search queries this site is designed to rank for. We index each as primary content somewhere on the site (homepage, format pages, FAQ, or this README).

<details>
<summary><strong>🔹 Head terms (high volume)</strong></summary>

video to audio converter · video to mp3 · video to mp3 converter · convert video to mp3 · convert video to audio · extract audio from video · mp3 converter · online mp3 converter · free mp3 converter · audio extractor · video sound extractor · rip audio from video · video to audio · audio from video · get audio from video · video to mp3 online · convert video to mp3 free · free video to audio converter · video to mp3 free · online video to audio converter

</details>

<details>
<summary><strong>🔹 Format-pair conversions (long tail, high intent)</strong></summary>

mp4 to mp3 · mp4 to wav · mp4 to m4a · mp4 to aac · mp4 to flac · mp4 to ogg · mp4 to opus · mov to mp3 · mov to wav · mov to m4a · mov to aac · mkv to mp3 · mkv to wav · mkv to flac · mkv to aac · webm to mp3 · webm to ogg · webm to opus · webm to wav · avi to mp3 · avi to wav · flv to mp3 · wmv to mp3 · 3gp to mp3 · mpeg to mp3 · m4v to mp3

</details>

<details>
<summary><strong>🔹 Quality / bitrate modifiers</strong></summary>

320 kbps mp3 converter · high quality video to mp3 · lossless video to audio · video to flac · hd audio extractor · cd quality wav extractor · 192 kbps mp3 · 128 kbps mp3 · best quality video to mp3 · convert video to high quality audio

</details>

<details>
<summary><strong>🔹 Privacy & trust modifiers</strong></summary>

video to mp3 no upload · video converter no upload · client-side video to mp3 · browser-based video converter · offline video to audio · private video to mp3 · secure video converter · no signup video to mp3 · no registration audio extractor · no watermark video to mp3 · ad-free video converter · gdpr-safe video converter · video to mp3 without uploading file · open source video to audio converter

</details>

<details>
<summary><strong>🔹 Device / platform modifiers</strong></summary>

iphone video to mp3 · android video to mp3 · mac video to mp3 · windows video to mp3 · linux video to mp3 · chromebook video to mp3 · ipad video to audio · safari video to mp3 · chrome video to mp3 · firefox video to mp3 · edge video to mp3 · ios video to mp3 converter

</details>

<details>
<summary><strong>🔹 Source-specific intent (own files only — we are not a YouTube downloader)</strong></summary>

zoom recording to mp3 · google meet recording to mp3 · teams recording to mp3 · screen recording to mp3 · obs recording to mp3 · tiktok video to mp3 · instagram reel to mp3 · whatsapp video to mp3 · iphone screen recording to mp3 · webinar recording to audio · interview video to mp3 · podcast video to mp3 · lecture recording to mp3

</details>

<details>
<summary><strong>🔹 How-to long-tail (FAQ / featured snippet targets)</strong></summary>

how to convert mp4 to mp3 · how to extract audio from video · how to convert video to mp3 free · how to convert video to mp3 without software · how to get sound from a video · how to rip audio from a video file · how to convert mov to mp3 on mac · how to convert mkv to mp3 · how to extract audio from webm · how to convert avi to mp3 in 2026 · how to convert video to mp3 on iphone · how to convert video to mp3 on android · how to convert video to mp3 offline · how to convert video to 320 kbps mp3 · how to convert video to wav · how to extract audio from a video without uploading

</details>

<details>
<summary><strong>🔹 Comparison / alternative</strong></summary>

freeconvert alternative · convertio alternative · cloudconvert alternative · onlineaudioconverter alternative · ytmp3 alternative · zamzar alternative · best free video to audio converter · best browser video to mp3 converter · best private video converter · open source alternative to convertio

</details>

<details>
<summary><strong>🔹 Multilingual</strong></summary>

convertisseur vidéo en audio · convertidor de video a audio · video zu audio konverter · conversor de vídeo para áudio · convertitore video audio · 视频转音频 · 視頻轉音頻 · 動画 音声 変換 · 비디오 오디오 변환 · конвертер видео в аудио · محول فيديو إلى صوت · वीडियो को ऑडियो में बदलें · konverter video ke audio · video ses dönüştürücü · chuyển video sang âm thanh

</details>

---

## 🌟 In Summary

If you are looking for a **free online video to audio converter** that:

- ✅ Converts **MP4 to MP3**, **MOV to MP3**, **MKV to MP3**, **WebM to MP3**, **AVI to MP3** and 58 more conversion pairs
- ✅ Runs **100% in your browser** with **zero uploads** and **zero tracking**
- ✅ Has **no file size limit**, **no signup**, **no ads**, **no watermark**
- ✅ Supports **MP3, WAV, M4A, AAC, FLAC, OGG, Opus** output at up to **320 kbps** or **lossless**
- ✅ Works on **Mac, Windows, Linux, Chromebook, iPhone, iPad, Android**
- ✅ Is **open source**, **GDPR-safe**, and works **offline** after first load

— then bookmark **[videotoaudioconverter.org](https://videotoaudioconverter.org)** and star this repo. ⭐

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

<p align="center">
  <sub>
    Keywords: video to audio converter · video to mp3 · mp4 to mp3 · mov to mp3 · mkv to mp3 · webm to mp3 · avi to mp3 · extract audio from video · audio extractor · free online · no upload · client-side · open source · WebCodecs · FFmpeg WASM
  </sub>
</p>
