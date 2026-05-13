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
  <strong>Deutsch</strong> ·
  <a href="./README.fr.md">Français</a> ·
  <a href="./README.pt.md">Português</a> ·
  <a href="./README.it.md">Italiano</a> ·
  <a href="./README.ar.md">العربية</a> ·
  <a href="./README.hi.md">हिन्दी</a>
</p>

<p align="center">
  <strong>Der schnellste kostenlose Video-zu-Audio-Konverter — zu 100 % im Browser, ohne Uploads, ohne Tracking.</strong>
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
  <a href="https://videotoaudioconverter.org">🌐 Live-Demo</a> ·
  <a href="#-erste-schritte">Schnellstart</a> ·
  <a href="#-funktionsweise">Funktionsweise</a> ·
  <a href="#-unterstützte-formate">Formate</a> ·
  <a href="#-build--deployment">Deployment</a>
</p>

---

## Was ist das?

**[VideoToAudioConverter.org](https://videotoaudioconverter.org)** ist ein produktionsreifer, quelloffener **Video-zu-Audio-Konverter**, der vollständig im Browser des Nutzers läuft. Eine Videodatei ablegen, ein Audioformat wählen, auf Konvertieren klicken — und die Audiodatei steht sofort zum Download bereit. Kein Server, kein Konto, keine vom Backend auferlegte Dateigrößenbeschränkung.

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

### Warum noch ein Video-zu-Audio-Konverter?

| Funktion | VideoToAudioConverter.org | Typischer Online-Konverter |
|---|---|---|
| Läuft zu 100 % im Browser | ✅ WebCodecs + FFmpeg WASM | ❌ Lädt zum Server hoch |
| Dateigrößenbeschränkung | ✅ Keine (nur durch RAM begrenzt) | ❌ 50–500 MB Limit |
| Datenschutz / kein Tracking | ✅ Null Cookies, null Uploads | ❌ Dateien auf Server gespeichert |
| Funktioniert offline (nach erstem Laden) | ✅ WASM dauerhaft im Cache | ❌ Benötigt Internet |
| Open Source | ✅ MIT | ❌ Geschlossener Quellcode |
| Werbefrei | ✅ | ❌ Aggressive Werbung |
| Schnell (moderne Formate) | ✅ WebCodecs in nativer Geschwindigkeit | ❌ Server-Warteschlange |

---

## ✨ Funktionen

### Kern-Konverter

- **Drag-and-Drop** oder Klick zur Auswahl einer beliebigen Videodatei
- **9 Eingabeformate** → MP4, MOV, MKV, WebM, AVI, FLV, WMV, 3GP, MPEG
- **7 Ausgabeformate** → MP3, WAV, M4A, AAC, FLAC, OGG, Opus
- **Qualitätsvoreinstellungen** → Hoch (320 kbps), Mittel (192 kbps), Niedrig (128 kbps), Verlustfrei
- **Echtzeit-Fortschrittsanzeige** mit Phasenbezeichnungen (Demux → Decode → Encode → Mux)
- **Sofortiger Download** — der Audio-Blob wird aus dem Speicher ausgeliefert und berührt niemals einen Server

### Datenschutzorientierte Architektur

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

### SEO-optimierte Format-Landingpages

Eigene, vollständig übersetzte Landingpages für jede beliebte **Video-zu-Audio**-Konvertierung:

| Seite | Live-URL |
|---|---|
| MP4-zu-MP3-Konverter | [videotoaudioconverter.org/de/mp4-to-mp3](https://videotoaudioconverter.org/de/mp4-to-mp3) |
| MOV-zu-MP3-Konverter | [videotoaudioconverter.org/de/mov-to-mp3](https://videotoaudioconverter.org/de/mov-to-mp3) |
| MKV-zu-MP3-Konverter | [videotoaudioconverter.org/de/mkv-to-mp3](https://videotoaudioconverter.org/de/mkv-to-mp3) |
| WebM-zu-MP3-Konverter | [videotoaudioconverter.org/de/webm-to-mp3](https://videotoaudioconverter.org/de/webm-to-mp3) |
| AVI-zu-MP3-Konverter | [videotoaudioconverter.org/de/avi-to-mp3](https://videotoaudioconverter.org/de/avi-to-mp3) |

Jede Seite hat einzigartige Texte, JSON-LD-Schemas (SoftwareApplication, HowTo, FAQPage) und Open-Graph-Tags — keine doppelten Inhalte.

### Internationalisierung

- Englisch (`/en/`) und Französisch (`/fr/`) standardmäßig verfügbar
- Nachrichten-Namespaces pro Seite für tiefgehende i18n (nicht nur UI-Strings)
- Infrastruktur für mehr als 15 zusätzliche Sprachen vorbereitet (zh, ja, ko, es, de, pt, it, ru, ar, hi, id, tr, vi …)

---

## 🔧 Funktionsweise

Der Konverter basiert auf einer **Dual-Engine-Architektur**, die für jede Eingabedatei automatisch die schnellste verfügbare Engine auswählt:

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

### Engine-Details

#### MediaBunny — Primäre Engine

[MediaBunny](https://github.com/nicktindall/mediabunny) kapselt die browser-native **WebCodecs API** in eine einfache Transcoding-Pipeline. Es läuft im Haupt-Thread ohne WASM-Overhead für unterstützte Formate.

- **Unterstützte Eingaben:** MP4, M4V, MOV, QT, MKV, WebM
- **Geschwindigkeit:** Nahezu nativ — ein einstündiges MP4 kann auf moderner Hardware in etwa 10 Sekunden konvertiert werden
- **Keine COOP/COEP-Header erforderlich** — funktioniert problemlos mit Drittanbieter-Skripten

#### FFmpeg WASM — Fallback-Engine

[@ffmpeg/ffmpeg](https://github.com/ffmpegwasm/ffmpeg.wasm) kompiliert die vollständige FFmpeg-Binary zu WebAssembly. Läuft single-threaded (kein SharedArrayBuffer / COOP erforderlich).

- **Unterstützte Eingaben:** AVI, FLV, WMV, 3GP, MPEG und jedes Format, das MediaBunny nicht verarbeiten kann
- **WASM-Größe:** ~31 MB (zwischengespeichert über `Cache-Control: immutable, max-age=31536000`)
- **Selbst gehostetes JS-Shim** unter `/ffmpeg-core/ffmpeg-core.js` zur Vermeidung von CDN-Abhängigkeiten

---

## 📂 Unterstützte Formate

### Eingabeformate (Video zu Audio)

| Format | Erweiterung(en) | Engine | Hinweise |
|---|---|---|---|
| MP4 | `.mp4`, `.m4v` | MediaBunny | Verbreitetstes Videoformat |
| MOV | `.mov`, `.qt` | MediaBunny | Apple QuickTime |
| MKV | `.mkv` | MediaBunny | Matroska-Container |
| WebM | `.webm` | MediaBunny | Web-nativ (VP8/VP9/AV1) |
| AVI | `.avi` | FFmpeg WASM | Legacy-Windows-Format |
| FLV | `.flv` | FFmpeg WASM | Flash Video |
| WMV | `.wmv` | FFmpeg WASM | Windows Media Video |
| 3GP | `.3gp` | FFmpeg WASM | Mobile-Videoformat |
| MPEG | `.mpeg`, `.mpg` | FFmpeg WASM | Älteres Rundfunkformat |

### Ausgabeformate (Audio)

| Format | Qualitätsoptionen | Anwendungsfall |
|---|---|---|
| **MP3** | 128 / 192 / 320 kbps | Universelle Kompatibilität, Streaming, Podcasts |
| **WAV** | Verlustfreies PCM | Professionelles Audio, DAW-Import |
| **AAC** | 128 / 192 / 320 kbps | Apple-Geräte, iTunes, bessere Kompression als MP3 |
| **M4A** | 128 / 192 / 320 kbps | iTunes, Apple Music |
| **FLAC** | Verlustfrei | Audiophile Archivierung |
| **OGG** | 128 / 192 / 320 kbps | Offenes Format, hervorragende Kompression |
| **Opus** | 128 / 192 / 320 kbps | Bestes Verhältnis Kompression/Qualität, VoIP |

---

## 🚀 Erste Schritte

### Voraussetzungen

- **Node.js** 20+
- **pnpm** 9+ (`npm install -g pnpm`)

### Installation

```bash
git clone https://github.com/rocnubie/video-to-audio-convertor.git
cd video-to-audio-convertor

pnpm install
# postinstall automatically copies @ffmpeg/core WASM into public/ffmpeg-core/
```

### Entwicklungsserver

```bash
pnpm dev
```

Öffne [http://localhost:3000](http://localhost:3000) — die App leitet automatisch auf `/en/` weiter.

> **Tipp:** Beim ersten Laden von FFmpeg WASM (~31 MB) ist es langsam. Spätere Ladevorgänge sind dank `Cache-Control: immutable` sofort.

### Umgebungsvariablen

Kopiere `.env.example` nach `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Beschreibung | Beispiel |
|---|---|---|
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Deine Plausible-Site-Domain | `videotoaudioconverter.org` |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` | Plausible-Skript-URL | `https://plausible.io/js/script.tagged-events.outbound-links.js` |

In der Entwicklung können diese leer bleiben — die Analytics werden dann einfach übersprungen.

---

## 🏗️ Tech-Stack

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

### Warum diese Entscheidungen?

**Next.js Static Export** — Die gesamte Website wird als statische HTML/JS/CSS-Dateien vorgerendert. In der Produktion gibt es keinen Node.js-Server. Cloudflare Pages liefert alles vom Edge aus.

**MediaBunny statt FFmpeg-first** — Für MP4/MOV/MKV/WebM (die überwiegende Mehrheit der Konvertierungen) nutzt MediaBunny die native Browser-API WebCodecs und ist 5–10× schneller als FFmpeg WASM, ohne Kaltstart-Verzögerung.

**Single-Threaded FFmpeg WASM** — Multi-Threaded FFmpeg benötigt `SharedArrayBuffer`, was wiederum `Cross-Origin-Opener-Policy: same-origin` und `Cross-Origin-Embedder-Policy: require-corp` erfordert. Diese Header brechen Drittanbieter-Skripte (Analytics, Schriftarten, Werbung). Single-Threaded vermeidet all das.

**Tailwind v4 + OKLCH** — Das Designsystem nutzt den OKLCH-Farbraum für wahrnehmungsmäßig einheitliche Türkis-/Cyan-Akzente, die sowohl im Hell- als auch im Dunkelmodus korrekt aussehen — ohne komponentenspezifische Dark-Mode-Overrides.

---

## 📁 Dateistruktur

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

## 🌍 Internationalisierung

Die Website nutzt [next-intl 4](https://next-intl-docs.vercel.app/) mit sprachpräfixierten Routen (`/en/`, `/fr/`).

### Eine neue Sprache hinzufügen

1. **Locale registrieren** in `i18n/routing.ts`:

   ```ts
   export const routing = defineRouting({
     locales: ['en', 'fr', 'de'],  // add 'de'
     defaultLocale: 'en',
   });
   ```

2. **Gemeinsame Übersetzungen** unter `i18n/messages/de.json` anlegen (`en.json` kopieren und übersetzen).

3. **Seiten-spezifische Übersetzungen** für jede Seite anlegen:

   ```
   i18n/pages/home/de.json
   i18n/pages/mp4-to-mp3/de.json
   … etc.
   ```

4. **Locale-Metadaten** in `i18n/locale.ts` ergänzen:

   ```ts
   de: { nativeName: 'Deutsch', englishName: 'German' },
   ```

5. `sitemap.ts` und `generateStaticParams()` erkennen die neue Locale automatisch — keine weiteren Änderungen nötig.

---

## 📊 Analytics

Die Website verwendet [Plausible Analytics](https://plausible.io/) — cookielos, DSGVO-konform, keine personenbezogenen Daten werden erfasst.

### Benutzerdefinierte Events

Alle Events sind typisiert in [`lib/analytics.ts`](lib/analytics.ts):

| Event | Eigenschaften | Wann ausgelöst |
|---|---|---|
| `file_selected` | `ext`, `size_mb`, `engine_hint` | Nutzer legt Videodatei ab oder wählt sie aus |
| `conversion_started` | `from_ext`, `to_format`, `quality` | Konvertieren-Button geklickt |
| `conversion_completed` | `from_ext`, `to_format`, `engine`, `duration_s` | Audio-Blob fertig |
| `conversion_failed` | `from_ext`, `to_format`, `reason` | Engine wirft Fehler |
| `conversion_cancelled` | `from_ext`, `to_format` | Nutzer bricht Konvertierung ab |
| `download_clicked` | `format` | Download-Button geklickt |

Diese Events liefern dir ein vollständiges Bild davon, welche Video-zu-Audio-Konvertierungspfade am beliebtesten sind.

---

## 📦 Build & Deployment

### Lokaler Build

```bash
pnpm build       # static export → out/
npx serve out    # preview locally
```

Die Build-Ausgabe ist ein Verzeichnis statischer Dateien — kein Server erforderlich.

### Deployment auf Cloudflare Pages

1. **Repository verbinden** im Cloudflare Pages Dashboard.

2. **Build-Einstellungen:**

   | Einstellung | Wert |
   |---|---|
   | Build-Befehl | `pnpm build` |
   | Build-Ausgabeverzeichnis | `out` |
   | Node.js-Version | `20` |

3. **Umgebungsvariablen** (Production + Preview):

   ```
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=videotoaudioconverter.org
   NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL=https://plausible.io/js/script.tagged-events.outbound-links.js
   ```

4. **Eigene Domain:** Füge `videotoaudioconverter.org` hinzu und lasse Cloudflare DNS das Routing übernehmen.

### Caching-Strategie

| Asset | Cache-Control | Begründung |
|---|---|---|
| `/ffmpeg-core/*` | `immutable, max-age=31536000` | Inhaltsadressiert; ändert sich nie |
| `/_next/static/*` | `immutable, max-age=31536000` | Next.js verwendet Content-Hash-Dateinamen |
| `/og.png`, `/favicon.ico` | `max-age=604800` | Selten aktualisiert |
| HTML-Seiten | Kein Cache / Security-Header | Immer aktuell, Nutzer schützen |

---

## ➕ Eine neue Format-Seite hinzufügen

Um eine neue **Video-zu-Audio**-Konvertierungs-Landingpage hinzuzufügen (z. B. `flv-to-mp3`):

1. **In `lib/content/format-pages.ts` ergänzen:**

   ```ts
   {
     slug: 'flv-to-mp3',
     messageKey: 'flvToMp3',
     outputFormat: 'mp3',
     highlightedInputs: ['flv'],
     useCaseImages: ['https://images.unsplash.com/…'],
   }
   ```

2. **Seitendatei anlegen:**

   ```ts
   // app/[locale]/flv-to-mp3/page.tsx
   import { FormatLandingPage } from '@/components/landing/FormatLandingPage'
   import { getFormatPage } from '@/lib/content/format-pages'

   const config = getFormatPage('flv-to-mp3')!

   export default function Page() {
     return <FormatLandingPage config={config} />
   }
   ```

3. **Übersetzungen hinzufügen:**

   ```
   i18n/pages/flv-to-mp3/en.json
   i18n/pages/flv-to-mp3/fr.json
   ```

4. Die Seite wird **automatisch** in `sitemap.ts` aufgenommen — keine weiteren Änderungen nötig.

> **SEO-Hinweis:** Jede Format-Seite muss einzigartige Texte enthalten. Google bestraft Doorway-Pages mit fast identischem Inhalt.

---

## 🛡️ Datenschutz & Sicherheit

- **Keine Datei-Uploads** — Die Konvertierung läuft vollständig im Browser über WebCodecs / FFmpeg WASM
- **Keine Cookies** — Plausible ist cookielos; kein Consent-Banner nötig
- **Kein localStorage** — Zwischen Sitzungen wird nichts gespeichert
- **Keine CDN-Abhängigkeit zur Laufzeit** — Das FFmpeg-JS-Shim ist selbst gehostet; nur die WASM-Binary wird einmalig von `unpkg` geladen und dann dauerhaft im Cache gehalten
- **Sicherheits-Header auf jeder HTML-Seite:**
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`

---

## 🤝 Mitwirken

Beiträge sind willkommen. Die wirkungsvollsten Bereiche sind:

- **Neue Übersetzungen** — `i18n/messages/en.json` kopieren, übersetzen, PR öffnen
- **Neue Format-Landingpages** — Folge dem Leitfaden oben; bringe einzigartige Texte ein
- **Engine-Verbesserungen** — Bessere Fortschrittsberichterstattung, zusätzliche Ausgabe-Codecs
- **UI / Barrierefreiheit** — WCAG-AA-Konformität, Tastaturnavigation

Bitte eröffne ein Issue, bevor du größere Änderungen beginnst, damit wir die Richtung besprechen können.

---

## 🔍 Welches Problem dieses Projekt löst (Keyword- und Anwendungsreferenz)

**[VideoToAudioConverter.org](https://videotoaudioconverter.org)** wurde gebaut, um die endgültige Antwort für alle zu sein, die nach einem **kostenlosen Online-Video-zu-Audio-Konverter** suchen, der den Datenschutz respektiert. Unten findest du die komplette Übersicht der Konvertierungsabsichten und Suchanfragen, die wir bedienen.

### Alle unterstützten Konvertierungspaare

Jede Zelle ist ein expliziter, indexierbarer Konvertierungspfad. Lege eine Datei im Format der Zeile ab und wähle das Spaltenformat — das ist die Konvertierung.

| Eingabe ↓ / Ausgabe → | MP3 | WAV | M4A | AAC | FLAC | OGG | Opus |
|---|---|---|---|---|---|---|---|
| **MP4** | [mp4 to mp3](https://videotoaudioconverter.org/de/mp4-to-mp3) | mp4 to wav | mp4 to m4a | mp4 to aac | mp4 to flac | mp4 to ogg | mp4 to opus |
| **MOV** | [mov to mp3](https://videotoaudioconverter.org/de/mov-to-mp3) | mov to wav | mov to m4a | mov to aac | mov to flac | mov to ogg | mov to opus |
| **MKV** | [mkv to mp3](https://videotoaudioconverter.org/de/mkv-to-mp3) | mkv to wav | mkv to m4a | mkv to aac | mkv to flac | mkv to ogg | mkv to opus |
| **WebM** | [webm to mp3](https://videotoaudioconverter.org/de/webm-to-mp3) | webm to wav | webm to m4a | webm to aac | webm to flac | webm to ogg | webm to opus |
| **AVI** | [avi to mp3](https://videotoaudioconverter.org/de/avi-to-mp3) | avi to wav | avi to m4a | avi to aac | avi to flac | avi to ogg | avi to opus |
| **FLV** | flv to mp3 | flv to wav | flv to m4a | flv to aac | flv to flac | flv to ogg | flv to opus |
| **WMV** | wmv to mp3 | wmv to wav | wmv to m4a | wmv to aac | wmv to flac | wmv to ogg | wmv to opus |
| **3GP** | 3gp to mp3 | 3gp to wav | 3gp to m4a | 3gp to aac | 3gp to flac | 3gp to ogg | 3gp to opus |
| **MPEG** | mpeg to mp3 | mpeg to wav | mpeg to m4a | mpeg to aac | mpeg to flac | mpeg to ogg | mpeg to opus |
| **M4V** | m4v to mp3 | m4v to wav | m4v to m4a | m4v to aac | m4v to flac | m4v to ogg | m4v to opus |

> **63 unterstützte Konvertierungspfade**, alle über dasselbe Konverter-Widget auf **[videotoaudioconverter.org](https://videotoaudioconverter.org)** erreichbar. Eigene Landingpages: [MP4 → MP3](https://videotoaudioconverter.org/de/mp4-to-mp3) · [MOV → MP3](https://videotoaudioconverter.org/de/mov-to-mp3) · [MKV → MP3](https://videotoaudioconverter.org/de/mkv-to-mp3) · [WebM → MP3](https://videotoaudioconverter.org/de/webm-to-mp3) · [AVI → MP3](https://videotoaudioconverter.org/de/avi-to-mp3). Alle übrigen Paare werden über den Ausgabeformat-Selektor freigeschaltet.

---

## 🎯 Wer nutzt einen Video-zu-Audio-Konverter? (Anwendungsfälle)

Menschen suchen aus sehr unterschiedlichen Gründen nach einem **Video-zu-Audio-Konverter**. Wir haben UI, Texte und Landingpages auf diese Szenarien hin optimiert. Du kannst sie alle auf **[videotoaudioconverter.org](https://videotoaudioconverter.org)** ausprobieren.

### 🎙️ Podcaster & Audioproduzenten

- **[Videoaufnahmen in MP3 umwandeln](https://videotoaudioconverter.org/de/mp4-to-mp3)** zur Podcast-Distribution (Spotify, Apple Podcasts, RSS).
- Audio aus einer **Zoom-Aufnahme**, **Google-Meet-Aufnahme**, **Microsoft-Teams-Aufnahme**, **Riverside-Aufnahme** oder **OBS-Bildschirmaufnahme** extrahieren.
- Die Bildspur aus einem **Interview-MP4** entfernen und nur die Tonspur veröffentlichen.
- **Video zu WAV** oder **FLAC** konvertieren für die Bearbeitung in Audacity, Adobe Audition, Logic Pro, GarageBand, Reaper oder Pro Tools.

### 🎓 Studierende & Lehrende

- **Vorlesungsaufnahmen in MP3 umwandeln**, sodass sie unterwegs auf jedem Smartphone abspielbar sind — probiere [videotoaudioconverter.org](https://videotoaudioconverter.org).
- Audio aus **Zoom-Unterrichtsaufnahmen**, **Kahoot-Videos**, **Khan-Academy-Downloads** oder **Konferenzvorträgen** extrahieren.
- Eine **[MOV-Aufnahme](https://videotoaudioconverter.org/de/mov-to-mp3)** aus QuickTime in ein portables **M4A** für das iPhone umwandeln.
- Audio aus **YouTube-Downloads, die du bereits besitzt** für die Offline-Wiederholung gewinnen (bitte das Urheberrecht respektieren).

### 📱 Mobile- & Social-Media-Nutzer

- **TikTok-Video zu MP3** — extrahiere einen Soundclip aus einem TikTok-Export auf [videotoaudioconverter.org](https://videotoaudioconverter.org).
- **Instagram-Reel-Video zu Audio** — Audio aus einem Reel-Download holen.
- **WhatsApp-Video zu MP3** — eine weitergeleitete Videonachricht in Audio umwandeln.
- **iPhone-Video zu MP3** — `.MOV`/`.M4V`-Aufnahmen aus Fotos in MP3 verwandeln; nutze unsere **[MOV-zu-MP3](https://videotoaudioconverter.org/de/mov-to-mp3)**-Seite.
- **Android-Video zu MP3** — Audio aus MP4-Aufnahmen extrahieren; nutze unsere **[MP4-zu-MP3](https://videotoaudioconverter.org/de/mp4-to-mp3)**-Seite.

### 🎵 Musik- & Medien-Enthusiasten

- **[Musikvideo zu MP3 konvertieren](https://videotoaudioconverter.org/de/mp4-to-mp3)** für die Offline-Wiedergabe (bei Dateien, die dir gehören oder an denen du Rechte hast).
- Audio aus einer **Konzertaufnahme** oder einem **Probenvideo** extrahieren.
- Eine **Tonspur** aus einem Video für Remixe, Sampling oder DJ-Sets herausziehen.
- Tonspuren von Videos in **verlustfreiem FLAC** über [videotoaudioconverter.org](https://videotoaudioconverter.org) archivieren.

### 💼 Business- & Wissensarbeiter

- **[Meeting-Aufzeichnung in MP3 umwandeln](https://videotoaudioconverter.org/de/mp4-to-mp3)** für die Transkription mit Otter.ai, Rev, Descript, Whisper oder Googles Transkriptionswerkzeugen.
- Audio aus einem **Webinar** oder einem **Firmen-All-Hands** extrahieren — für Barrierefreiheit / Archivierung.
- Tonspur aus einem **Trainingsvideo** rippen und an einen Transkriptionsdienst senden.
- Bandbreite sparen, indem **reine Audioversionen** von Meetings geteilt werden — alles auf [videotoaudioconverter.org](https://videotoaudioconverter.org).

### 🎬 Video-Editoren & Content-Creator

- Audio vom Video für **Mehrspur-Bearbeitung** in Premiere Pro, DaVinci Resolve, Final Cut, CapCut oder VN Editor trennen — nutze [videotoaudioconverter.org](https://videotoaudioconverter.org) vor dem Import.
- Die Tonspur eines Videos ersetzen, indem du zuerst **[das Original mit unserem MKV-Konverter extrahierst](https://videotoaudioconverter.org/de/mkv-to-mp3)**.
- **Reine Audio-Vorschauen** für Kunden erzeugen, bevor das fertige Video geliefert wird.

### 🔒 Datenschutzbewusste Nutzer

- Dateien **ohne Upload** auf einen Drittanbieter-Server konvertieren — **[probiere es auf videotoaudioconverter.org](https://videotoaudioconverter.org)**.
- **Vertrauliche Interviews**, **juristische Vernehmungen**, **medizinische Aufnahmen** und **journalistisches Quellmaterial** verarbeiten, ohne dass das Material das Gerät verlässt.
- Den Konverter **offline** nach dem ersten Seitenaufruf nutzen (funktioniert im Flugzeug oder in einer SCIF).
- Konverter vermeiden, die **E-Mail-Anmeldung**, **Kontoerstellung** oder **kostenpflichtige Abonnements** verlangen. Details in unserer [Datenschutzerklärung](https://videotoaudioconverter.org/de/privacy).

---

## ❓ Häufige Fragen (beantwortet)

Dies sind die Long-Tail-Fragen, die Menschen in Google eingeben, wenn sie einen Video-zu-Audio-Konverter suchen. Jede ist in den FAQ auf der [Startseite](https://videotoaudioconverter.org) sowie auf den jeweiligen Format-Landingpages beantwortet.

### Wie konvertiere ich MP4 kostenlos online zu MP3?
Gehe auf **[videotoaudioconverter.org/de/mp4-to-mp3](https://videotoaudioconverter.org/de/mp4-to-mp3)**, lege deine MP4-Datei ab, wähle „MP3" als Ausgabeformat, klicke auf Konvertieren und lade die Datei herunter. Kein Upload, keine Anmeldung, kein Wasserzeichen, keine Dateigrößenbeschränkung.

### Wie extrahiere ich Audio aus einem Video, ohne es hochzuladen?
Verwende einen **clientseitigen Video-zu-Audio-Konverter** wie **[VideoToAudioConverter.org](https://videotoaudioconverter.org)**. Die Konvertierung läuft im Browser über WebCodecs und FFmpeg WASM — die Datei berührt niemals einen Server.

### Was ist der beste kostenlose Video-zu-Audio-Konverter, der nichts hochlädt?
Ein browserbasierter Konverter mit WebCodecs oder FFmpeg WASM ist die einzige Kategorie, die wirklich keine Uploads vornimmt. **[VideoToAudioConverter.org](https://videotoaudioconverter.org)** ist quelloffen, sodass du die Behauptung selbst überprüfen kannst.

### Wie konvertiere ich MOV ohne iTunes zu MP3 auf dem Mac?
Öffne **[videotoaudioconverter.org/de/mov-to-mp3](https://videotoaudioconverter.org/de/mov-to-mp3)** in Safari oder Chrome, ziehe die `.MOV`-Datei aus dem Finder auf die Drop-Zone, wähle „MP3" und lade die Datei herunter. Funktioniert in jeder macOS-Version, ohne iTunes oder Musik-App.

### Wie konvertiere ich MKV ohne Softwareinstallation zu MP3?
Öffne **[videotoaudioconverter.org/de/mkv-to-mp3](https://videotoaudioconverter.org/de/mkv-to-mp3)**, lege die MKV-Datei ab, wähle MP3 und klicke auf Konvertieren. Kein VLC, kein HandBrake, keine Kommandozeile nötig.

### Wie extrahiere ich Audio aus einer WebM-Datei?
Gehe auf **[videotoaudioconverter.org/de/webm-to-mp3](https://videotoaudioconverter.org/de/webm-to-mp3)**. WebM nutzt intern Opus oder Vorbis als Audio — wähle Opus (für Native-Passthrough-Qualität), MP3 (für Kompatibilität) oder WAV (für die Bearbeitung).

### Wie konvertiere ich AVI im Jahr 2026 zu MP3?
AVI ist ein Legacy-Windows-Format. Öffne **[videotoaudioconverter.org/de/avi-to-mp3](https://videotoaudioconverter.org/de/avi-to-mp3)** — unsere FFmpeg-WASM-Fallback-Engine verarbeitet AVI nativ. Datei ablegen, MP3 wählen, fertig. Keine DivX-Codec-Installation erforderlich.

### Wie konvertiere ich ein Video in MP3 mit 320 kbps?
Wähle auf **[videotoaudioconverter.org](https://videotoaudioconverter.org)** die Qualitätsvoreinstellung „Hoch" — sie codiert MP3 mit 320 kbps (das Maximum für MP3).

### Wie extrahiere ich Audio aus einem Video als WAV (verlustfrei)?
Öffne **[videotoaudioconverter.org](https://videotoaudioconverter.org)** und wähle „WAV" als Ausgabeformat. WAV ist unkomprimiertes PCM — ideal für die Bearbeitung in einer DAW.

### Wie rippe ich die Tonspur aus einem iPhone-Video?
iPhone-Videos sind meist `.MOV` (H.264 + AAC) oder `.MP4`. Öffne **[videotoaudioconverter.org/de/mov-to-mp3](https://videotoaudioconverter.org/de/mov-to-mp3)**, lege die Datei aus Fotos/Dateien ab, wähle MP3 oder M4A und lade sie herunter.

### Ist es legal, Video zu Audio zu konvertieren?
Das Konvertieren von Dateien, die dir gehören oder an denen du Rechte hast, ist in den meisten Rechtsordnungen legal. Verwende dieses Tool nicht, um DRM zu umgehen, kostenpflichtige Streamingdienste zu scrapen oder Urheberrechte zu verletzen. Wir sind kein YouTube-Downloader.

### Funktioniert der Konverter offline?
Nach dem ersten Seitenaufruf auf **[videotoaudioconverter.org](https://videotoaudioconverter.org)** — ja. Die FFmpeg-WASM-Binary wird für ein Jahr zwischengespeichert. Du kannst in den Flugzeugmodus wechseln und trotzdem Dateien konvertieren.

---

## 🏆 Wie VideoToAudioConverter.org im Vergleich abschneidet

| Fähigkeit | [VideoToAudioConverter.org](https://videotoaudioconverter.org) | FreeConvert | Convertio | OnlineAudioConverter | CloudConvert |
|---|---|---|---|---|---|
| **Kostenlos** | ✅ Für immer | ✅ Begrenzt | ✅ Begrenzt | ✅ Begrenzt | ✅ Begrenzt |
| **Kein Upload (clientseitig)** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Keine Dateigrößenbegrenzung** | ✅ | ❌ 1 GB | ❌ 100 MB | ❌ 2 GB | ❌ 1 GB |
| **Keine Anmeldung** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Keine Werbung** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Funktioniert offline** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Open Source** | ✅ MIT | ❌ | ❌ | ❌ | ❌ |
| **Unbegrenzte Konvertierungen / Tag** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **DSGVO-sicher per Design** | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |

> Der Vergleich gibt die öffentlich gelisteten Preisstufen und Funktionsbeschränkungen mit Stand 2026 wieder. Aktuelle Limits bitte auf der jeweiligen Anbieter-Website prüfen.

---

## 🗣️ Mehrsprachige Abdeckung

Derselbe Konverter, für ein globales Publikum lokalisiert. Jede übersetzte Version ist eine eigenständige SEO-Oberfläche:

| Sprache | URL-Präfix | Übersetzung für „video to audio converter" |
|---|---|---|
| 🇬🇧 Englisch | [`/en/`](https://videotoaudioconverter.org/en/) | video to audio converter |
| 🇫🇷 Französisch | [`/fr/`](https://videotoaudioconverter.org/fr/) | convertisseur vidéo en audio |
| 🇪🇸 Spanisch | `/es/` *(geplant)* | convertidor de video a audio |
| 🇩🇪 Deutsch | `/de/` *(geplant)* | Video zu Audio Konverter |
| 🇮🇹 Italienisch | `/it/` *(geplant)* | convertitore da video ad audio |
| 🇵🇹 Portugiesisch | `/pt/` *(geplant)* | conversor de vídeo para áudio |
| 🇨🇳 Chinesisch (vereinfacht) | `/zh/` *(geplant)* | 视频转音频转换器 |
| 🇯🇵 Japanisch | `/ja/` *(geplant)* | 動画から音声に変換 |
| 🇰🇷 Koreanisch | `/ko/` *(geplant)* | 비디오를 오디오로 변환 |
| 🇷🇺 Russisch | `/ru/` *(geplant)* | конвертер видео в аудио |
| 🇸🇦 Arabisch | `/ar/` *(geplant)* | محول فيديو إلى صوت |
| 🇮🇳 Hindi | `/hi/` *(geplant)* | वीडियो को ऑडियो में बदलें |
| 🇮🇩 Indonesisch | `/id/` *(geplant)* | konverter video ke audio |
| 🇹🇷 Türkisch | `/tr/` *(geplant)* | video ses dönüştürücü |
| 🇻🇳 Vietnamesisch | `/vi/` *(geplant)* | chuyển video sang âm thanh |

Eine neue Sprache hinzuzufügen dauert etwa 30 Minuten, sobald die Übersetzungen vorliegen — siehe [Internationalisierung](#-internationalisierung) oben. Die englische Live-Startseite findet sich auf [videotoaudioconverter.org/en/](https://videotoaudioconverter.org/en/), die französische auf [videotoaudioconverter.org/fr/](https://videotoaudioconverter.org/fr/).

---

## 📚 Glossar — Audio- und Videoformate erklärt

Eine Referenz für Nutzer, die nach Dingen wie „Was ist der Unterschied zwischen MP3 und M4A" oder „Welches Audioformat ist das beste für Podcasts" suchen.

### Ausgabeformate (Audio)

- **MP3** — Das universelle Audioformat. Verlustbehaftete Kompression. 128 kbps = annehmbar, 192 kbps = gut, 320 kbps = exzellent. Läuft buchstäblich auf jedem Gerät seit 1998. Verwendung: Podcasts, Streaming, Weitergabe.
- **WAV** — Unkomprimiertes PCM-Audio. Riesige Dateien (~10 MB pro Minute), aber bit-genau. Verwendung: Bearbeitung in einer DAW, Mastering, Archivquellen.
- **M4A** — MPEG-4-Audio-Container, typischerweise mit AAC. Gleiche Qualität wie MP3 bei niedrigerer Bitrate. Verwendung: iTunes/Apple-Music-Ökosystem, iPhone-Klingeltöne.
- **AAC** — Advanced Audio Coding. Bessere Qualität als MP3 bei gleicher Bitrate. Standard für YouTube, Apple und modernen Rundfunk. Verwendung: überall dort, wo MP3 funktioniert, wenn bessere Qualität gewünscht ist.
- **FLAC** — Free Lossless Audio Codec. Komprimiert ohne Qualitätsverlust, etwa 50 % der Größe von WAV. Verwendung: audiophile Archivierung, hochauflösende Musiksammlungen.
- **OGG (Vorbis)** — Open-Source-Format mit verlustbehafteter Kompression. Bessere Qualität als MP3 bei gleicher Bitrate. Verwendung: Open-Source-Ökosysteme, Spiele, Web.
- **Opus** — Der modernste verlustbehaftete Codec. Schlägt MP3 / AAC / Vorbis bei niedrigen Bitraten deutlich. Verwendung: Sprache (Podcasts, VoIP), bandbreitenarmes Audio, WebRTC.

### Eingabeformate (Video)

- **MP4** — H.264/H.265-Video + AAC-Audio in einem MPEG-4-Container. Der Standard für fast alles: YouTube-Downloads, Smartphone-Aufnahmen, Bildschirmaufnahmen.
- **MOV** — Apple-QuickTime-Container. Häufig von iPhones, Macs, ScreenFlow und Final Cut.
- **MKV** — Matroska. Offener Container, der jeden Codec aufnehmen kann. Häufig bei hochwertigen Video-Downloads, Anime und Blu-ray-Rips.
- **WebM** — Von Google geförderter offener Container. VP8/VP9/AV1-Video + Opus-/Vorbis-Audio. Standard für Web-Video (YouTube-Downloads im WebM-Format, WhatsApp Web).
- **AVI** — Audio Video Interleave. Legacy-Microsoft-Format aus den 90ern, noch häufig in älteren Archiven und Exporten Windows-spezifischer Software.
- **FLV** — Flash Video. Legacy-Adobe-Flash-Format. Heute selten, aber noch in alten Downloads zu finden.
- **WMV** — Windows Media Video. Microsoft-proprietär, häufig aus älteren Windows-Movie-Maker-/PowerPoint-Exporten.
- **3GP** — Mobile-Container aus der Vor-Smartphone-Ära. Wird noch von einigen Feature-Phones und alten Camcordern erzeugt.
- **MPEG (MPG)** — Das originale MPEG-1-/MPEG-2-Videoformat. Verwendet für alte DVDs und TV-Sendungen.

---

## 🧭 Suchabsichten, die wir bedienen

Eine nicht erschöpfende Liste der Suchanfragen, für die diese Site ranken soll. Jede wird irgendwo auf der Site als primärer Inhalt indexiert (Startseite, Format-Seiten, FAQ oder dieses README).

<details>
<summary><strong>🔹 Head-Terms (hohes Volumen)</strong></summary>

video to audio converter · video to mp3 · video to mp3 converter · convert video to mp3 · convert video to audio · extract audio from video · mp3 converter · online mp3 converter · free mp3 converter · audio extractor · video sound extractor · rip audio from video · video to audio · audio from video · get audio from video · video to mp3 online · convert video to mp3 free · free video to audio converter · video to mp3 free · online video to audio converter · Video zu Audio Konverter · Video zu MP3 · Video in MP3 umwandeln · Video MP3 Konverter online · Audio aus Video extrahieren · Online Audio Extraktor · Video Sound Extraktor · MP3 Konverter kostenlos · kostenlos Video zu MP3 · Video Audio Umwandler · Tonspur aus Video extrahieren

</details>

<details>
<summary><strong>🔹 Formatpaar-Konvertierungen (Long Tail, hohe Intention)</strong></summary>

mp4 to mp3 · mp4 to wav · mp4 to m4a · mp4 to aac · mp4 to flac · mp4 to ogg · mp4 to opus · mov to mp3 · mov to wav · mov to m4a · mov to aac · mkv to mp3 · mkv to wav · mkv to flac · mkv to aac · webm to mp3 · webm to ogg · webm to opus · webm to wav · avi to mp3 · avi to wav · flv to mp3 · wmv to mp3 · 3gp to mp3 · mpeg to mp3 · m4v to mp3 · MP4 zu MP3 · MOV zu MP3 · MKV zu MP3 · WebM zu MP3 · AVI zu MP3 · Video zu WAV · Video zu FLAC

</details>

<details>
<summary><strong>🔹 Qualitäts-/Bitraten-Modifikatoren</strong></summary>

320 kbps mp3 converter · high quality video to mp3 · lossless video to audio · video to flac · hd audio extractor · cd quality wav extractor · 192 kbps mp3 · 128 kbps mp3 · best quality video to mp3 · convert video to high quality audio · 320 kbps MP3 Konverter · verlustfreie Konvertierung · hohe Qualität Video zu MP3

</details>

<details>
<summary><strong>🔹 Datenschutz- & Vertrauens-Modifikatoren</strong></summary>

video to mp3 no upload · video converter no upload · client-side video to mp3 · browser-based video converter · offline video to audio · private video to mp3 · secure video converter · no signup video to mp3 · no registration audio extractor · no watermark video to mp3 · ad-free video converter · gdpr-safe video converter · video to mp3 without uploading file · open source video to audio converter · ohne Upload Video Konverter · Browser Video Konverter · ohne Anmeldung · ohne Wasserzeichen · ohne Werbung · datenschutzfreundlicher Konverter · DSGVO konform

</details>

<details>
<summary><strong>🔹 Geräte-/Plattform-Modifikatoren</strong></summary>

iphone video to mp3 · android video to mp3 · mac video to mp3 · windows video to mp3 · linux video to mp3 · chromebook video to mp3 · ipad video to audio · safari video to mp3 · chrome video to mp3 · firefox video to mp3 · edge video to mp3 · ios video to mp3 converter · iPhone Video zu MP3 · Android Video zu MP3 · Mac Video zu MP3 · Windows Video zu MP3

</details>

<details>
<summary><strong>🔹 Quellen-spezifische Intention (nur eigene Dateien — wir sind kein YouTube-Downloader)</strong></summary>

zoom recording to mp3 · google meet recording to mp3 · teams recording to mp3 · screen recording to mp3 · obs recording to mp3 · tiktok video to mp3 · instagram reel to mp3 · whatsapp video to mp3 · iphone screen recording to mp3 · webinar recording to audio · interview video to mp3 · podcast video to mp3 · lecture recording to mp3 · Zoom Aufzeichnung zu MP3 · TikTok zu MP3 · Bildschirmaufnahme zu MP3 · Meeting Aufzeichnung zu MP3 · Vorlesung Aufzeichnung MP3

</details>

<details>
<summary><strong>🔹 How-to Long-Tail (FAQ-/Featured-Snippet-Ziele)</strong></summary>

how to convert mp4 to mp3 · how to extract audio from video · how to convert video to mp3 free · how to convert video to mp3 without software · how to get sound from a video · how to rip audio from a video file · how to convert mov to mp3 on mac · how to convert mkv to mp3 · how to extract audio from webm · how to convert avi to mp3 in 2026 · how to convert video to mp3 on iphone · how to convert video to mp3 on android · how to convert video to mp3 offline · how to convert video to 320 kbps mp3 · how to convert video to wav · how to extract audio from a video without uploading · wie konvertiere ich MP4 zu MP3 · wie extrahiere ich Audio aus einem Video · Video in MP3 umwandeln Anleitung

</details>

<details>
<summary><strong>🔹 Vergleich / Alternativen</strong></summary>

freeconvert alternative · convertio alternative · cloudconvert alternative · onlineaudioconverter alternative · ytmp3 alternative · zamzar alternative · best free video to audio converter · best browser video to mp3 converter · best private video converter · open source alternative to convertio · bester kostenloser Video zu Audio Konverter · beste Alternative zu Convertio

</details>

<details>
<summary><strong>🔹 Mehrsprachig</strong></summary>

convertisseur vidéo en audio · convertidor de video a audio · video zu audio konverter · conversor de vídeo para áudio · convertitore video audio · 视频转音频 · 視頻轉音頻 · 動画 音声 変換 · 비디오 오디오 변환 · конвертер видео в аудио · محول فيديو إلى صوت · वीडियो को ऑडियो में बदलें · konverter video ke audio · video ses dönüştürücü · chuyển video sang âm thanh · Video zu Audio Konverter · Video in MP3 · Audio aus Video gewinnen · Tonspur aus Video extrahieren · Video Konverter kostenlos · Video Audio Umwandler

</details>

---

## 🌟 Zusammenfassung

Wenn du einen **kostenlosen Online-Video-zu-Audio-Konverter** suchst, der:

- ✅ **[MP4 zu MP3](https://videotoaudioconverter.org/de/mp4-to-mp3)**, **[MOV zu MP3](https://videotoaudioconverter.org/de/mov-to-mp3)**, **[MKV zu MP3](https://videotoaudioconverter.org/de/mkv-to-mp3)**, **[WebM zu MP3](https://videotoaudioconverter.org/de/webm-to-mp3)**, **[AVI zu MP3](https://videotoaudioconverter.org/de/avi-to-mp3)** und 58 weitere Konvertierungspaare unterstützt
- ✅ **zu 100 % im Browser** läuft, **ohne Uploads** und **ohne Tracking**
- ✅ **keine Dateigrößenbegrenzung**, **keine Anmeldung**, **keine Werbung**, **kein Wasserzeichen** hat
- ✅ **MP3, WAV, M4A, AAC, FLAC, OGG, Opus** als Ausgabe mit bis zu **320 kbps** oder **verlustfrei** unterstützt
- ✅ auf **Mac, Windows, Linux, Chromebook, iPhone, iPad, Android** funktioniert
- ✅ **Open Source**, **DSGVO-konform** ist und nach dem ersten Laden **offline** funktioniert

— dann setze ein Lesezeichen auf **[videotoaudioconverter.org](https://videotoaudioconverter.org)** und vergib einen Stern für dieses Repo. ⭐

---

## 📄 Lizenz

- **Quellcode:** [MIT](LICENSE)
- **FFmpeg:** [LGPL 2.1](https://ffmpeg.org/legal.html) (dynamisch über WASM eingebunden)
- **MediaBunny:** MIT
- **shadcn/ui:** MIT

---

<p align="center">
  Mit ❤️ gebaut · gehostet auf <a href="https://pages.cloudflare.com/">Cloudflare Pages</a> · Analytics von <a href="https://plausible.io/">Plausible</a>
</p>

<p align="center">
  <sub>
    Keywords: Video zu Audio Konverter · Video zu MP3 · MP4 zu MP3 · MOV zu MP3 · MKV zu MP3 · WebM zu MP3 · AVI zu MP3 · Audio aus Video extrahieren · Online Audio Extraktor · kostenlos online · ohne Upload · clientseitig · Open Source · WebCodecs · FFmpeg WASM · DSGVO konform
  </sub>
</p>
