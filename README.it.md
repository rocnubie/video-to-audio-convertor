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
  <strong>Italiano</strong> ·
  <a href="./README.ar.md">العربية</a> ·
  <a href="./README.hi.md">हिन्दी</a>
</p>

<p align="center">
  <strong>Il convertitore video audio gratuito più veloce — 100% nel tuo browser, zero caricamenti, zero tracciamento.</strong>
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
  <a href="https://videotoaudioconverter.org">🌐 Demo live</a> ·
  <a href="#-per-iniziare">Avvio rapido</a> ·
  <a href="#-come-funziona">Come funziona</a> ·
  <a href="#-formati-supportati">Formati</a> ·
  <a href="#-build--deploy">Deploy</a>
</p>

---

## Cos'è?

**[VideoToAudioConverter.org](https://videotoaudioconverter.org)** è un **convertitore video audio** open source di livello produttivo che funziona interamente nel browser dell'utente. Trascina un file video, scegli un formato audio, premi converti — l'audio viene scaricato all'istante. Nessun server, nessun account, nessun limite di dimensione del file imposto da un backend.

```
┌──────────────────────────────────────────────────────────────────┐
│                   Video to Audio Converter                       │
│                                                                  │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │  📂  Trascina MP4 / MOV / MKV / WebM / AVI  …o clicca  │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│   Formato output: [MP3] [WAV] [AAC] [M4A] [FLAC] [OGG] [Opus]  │
│   Qualità:        [Alta 320 kbps] [Media 192 kbps] [Bassa 128] │
│                                                                  │
│   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░  68 %   Estrazione audio …     │
│                                                                  │
│   ✅  output.mp3  (4.2 MB)   [ ⬇ Scarica ]                     │
│                                                                  │
│   🔒  Il tuo file non lascia mai il dispositivo.                │
└──────────────────────────────────────────────────────────────────┘
```

### Perché un altro convertitore video audio?

| Caratteristica | VideoToAudioConverter.org | Tipico convertitore online |
|---|---|---|
| Funziona 100% nel browser | ✅ WebCodecs + FFmpeg WASM | ❌ Carica sul server |
| Limite di dimensione file | ✅ Nessuno (limite è la RAM) | ❌ Cap di 50–500 MB |
| Privacy / nessun tracciamento | ✅ Zero cookie, zero upload | ❌ File memorizzati sul server |
| Funziona offline (dopo il primo caricamento) | ✅ WASM in cache per sempre | ❌ Richiede internet |
| Open source | ✅ MIT | ❌ Closed source |
| Senza pubblicità | ✅ | ❌ Pubblicità invasive |
| Veloce (formati moderni) | ✅ Velocità nativa WebCodecs | ❌ Coda sul server |

---

## ✨ Caratteristiche

### Convertitore principale

- **Drag-and-drop** o clicca per selezionare qualsiasi file video
- **9 formati di input** → MP4, MOV, MKV, WebM, AVI, FLV, WMV, 3GP, MPEG
- **7 formati di output** → MP3, WAV, M4A, AAC, FLAC, OGG, Opus
- **Preset di qualità** → Alta (320 kbps), Media (192 kbps), Bassa (128 kbps), Senza perdita
- **Barra di progresso in tempo reale** con etichette delle fasi (demux → decode → encode → mux)
- **Download immediato** — blob audio servito dalla memoria, non passa mai da un server

### Architettura privacy-first

```
Dispositivo dell'utente
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  File video  ──▶  Motore browser  ──▶  File audio      │
│  (disco locale)   (WASM / JS)         (disco locale)   │
│                                                         │
│  ✗  No upload    ✗  No chiamata server   ✗  No storage  │
└─────────────────────────────────────────────────────────┘
         │
         │ solo un evento di analytics anonimo viene inviato
         ▼
   Plausible (senza cookie)
```

### Pagine di destinazione per formato ottimizzate per la SEO

Pagine di destinazione dedicate, completamente tradotte per ogni coppia di conversione **video audio** popolare:

| Pagina | URL live |
|---|---|
| Convertitore MP4 in MP3 | [videotoaudioconverter.org/it/mp4-to-mp3](https://videotoaudioconverter.org/it/mp4-to-mp3) |
| Convertitore MOV in MP3 | [videotoaudioconverter.org/it/mov-to-mp3](https://videotoaudioconverter.org/it/mov-to-mp3) |
| Convertitore MKV in MP3 | [videotoaudioconverter.org/it/mkv-to-mp3](https://videotoaudioconverter.org/it/mkv-to-mp3) |
| Convertitore WebM in MP3 | [videotoaudioconverter.org/it/webm-to-mp3](https://videotoaudioconverter.org/it/webm-to-mp3) |
| Convertitore AVI in MP3 | [videotoaudioconverter.org/it/avi-to-mp3](https://videotoaudioconverter.org/it/avi-to-mp3) |

Ogni pagina ha testi unici, schemi JSON-LD (SoftwareApplication, HowTo, FAQPage) e tag Open Graph — nessun contenuto duplicato.

### Internazionalizzazione

- Inglese (`/en/`) e francese (`/fr/`) pronti all'uso
- Namespace di messaggi per pagina per i18n approfondita (non solo stringhe UI)
- Infrastruttura pronta per oltre 15 locali aggiuntivi (zh, ja, ko, es, de, pt, it, ru, ar, hi, id, tr, vi …)

---

## 🔧 Come funziona

Il convertitore è alimentato da un'**architettura a doppio motore** che seleziona automaticamente il motore più veloce disponibile per ciascun file di input:

```
              L'utente trascina un file video
                          │
                          ▼
              ┌───────────────────────┐
              │   pickEngineHint()    │
              │  (controlla est. file)│
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
  │  Pipeline codec   │         │  Bundle WASM 30 MB    │
  │  nativo browser   │         │  supporto completo    │
  │  ~10× più veloce  │         │  AVI/FLV/WMV/3GP ecc. │
  └────────┬──────────┘         └──────────┬────────────┘
           │                               │
           └───────────────┬───────────────┘
                           │
                           ▼
                   Blob audio (MP3/WAV/…)
                           │
                           ▼
                   Il browser scarica il file
```

### Dettagli sui motori

#### MediaBunny — Motore principale

[MediaBunny](https://github.com/nicktindall/mediabunny) racchiude l'**API WebCodecs** nativa del browser in una semplice pipeline di transcoding. Opera sul thread principale con zero overhead WASM per i formati supportati.

- **Input supportati:** MP4, M4V, MOV, QT, MKV, WebM
- **Velocità:** Quasi nativa — un MP4 da 1 ora può essere convertito in ~10 secondi su hardware moderno
- **Nessun header COOP/COEP richiesto** — funziona insieme a script di terze parti

#### FFmpeg WASM — Motore di fallback

[@ffmpeg/ffmpeg](https://github.com/ffmpegwasm/ffmpeg.wasm) compila il binario completo di FFmpeg in WebAssembly. Funziona a thread singolo (nessun SharedArrayBuffer / COOP richiesto).

- **Input supportati:** AVI, FLV, WMV, 3GP, MPEG e qualsiasi formato che MediaBunny non può gestire
- **Dimensione WASM:** ~31 MB (in cache tramite `Cache-Control: immutable, max-age=31536000`)
- **Shim JS self-hosted** in `/ffmpeg-core/ffmpeg-core.js` per evitare la dipendenza dalla CDN

---

## 📂 Formati supportati

### Formati di input (Video in Audio)

| Formato | Estensione/i | Motore | Note |
|---|---|---|---|
| MP4 | `.mp4`, `.m4v` | MediaBunny | Formato video più comune |
| MOV | `.mov`, `.qt` | MediaBunny | Apple QuickTime |
| MKV | `.mkv` | MediaBunny | Contenitore Matroska |
| WebM | `.webm` | MediaBunny | Nativo del web (VP8/VP9/AV1) |
| AVI | `.avi` | FFmpeg WASM | Formato Windows legacy |
| FLV | `.flv` | FFmpeg WASM | Flash Video |
| WMV | `.wmv` | FFmpeg WASM | Windows Media Video |
| 3GP | `.3gp` | FFmpeg WASM | Video mobile |
| MPEG | `.mpeg`, `.mpg` | FFmpeg WASM | Formato broadcast più vecchio |

### Formati di output (Audio)

| Formato | Opzioni di qualità | Caso d'uso |
|---|---|---|
| **MP3** | 128 / 192 / 320 kbps | Compatibilità universale, streaming, podcast |
| **WAV** | PCM senza perdita | Audio professionale, importazione DAW |
| **AAC** | 128 / 192 / 320 kbps | Dispositivi Apple, iTunes, compressione migliore di MP3 |
| **M4A** | 128 / 192 / 320 kbps | iTunes, Apple Music |
| **FLAC** | Senza perdita | Archiviazione audiophile |
| **OGG** | 128 / 192 / 320 kbps | Formato aperto, ottima compressione |
| **Opus** | 128 / 192 / 320 kbps | Miglior rapporto compressione/qualità, VoIP |

---

## 🚀 Per iniziare

### Prerequisiti

- **Node.js** 20+
- **pnpm** 9+ (`npm install -g pnpm`)

### Installazione

```bash
git clone https://github.com/rocnubie/video-to-audio-convertor.git
cd video-to-audio-convertor

pnpm install
# postinstall copia automaticamente il WASM di @ffmpeg/core in public/ffmpeg-core/
```

### Server di sviluppo

```bash
pnpm dev
```

Apri [http://localhost:3000](http://localhost:3000) — l'app reindirizza automaticamente a `/en/`.

> **Suggerimento:** La prima volta che FFmpeg WASM si carica (~31 MB), sarà lento. I caricamenti successivi sono istantanei grazie a `Cache-Control: immutable`.

### Variabili d'ambiente

Copia `.env.example` in `.env.local`:

```bash
cp .env.example .env.local
```

| Variabile | Descrizione | Esempio |
|---|---|---|
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Il dominio del tuo sito Plausible | `videotoaudioconverter.org` |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` | URL dello script Plausible | `https://plausible.io/js/script.tagged-events.outbound-links.js` |

Lascia questi vuoti in sviluppo — gli analytics verranno semplicemente saltati.

---

## 🏗️ Stack tecnologico

```
┌─────────────────────────────────────────────────────────────────┐
│                      Livello applicativo                        │
│  Next.js 16 (App Router)  ·  React 19  ·  TypeScript 5         │
├──────────────────────┬──────────────────────────────────────────┤
│    UI / Styling      │           Librerie principali            │
│                      │                                          │
│  Tailwind CSS v4     │  MediaBunny 1.44 (motore WebCodecs)     │
│  shadcn/ui           │  @ffmpeg/ffmpeg 0.12 (motore WASM)      │
│  Radix UI            │  next-intl 4 (i18n)                     │
│  Lucide Icons        │  react-dropzone 15                      │
│  Sistema colori OKLCH│  Sonner (notifiche toast)               │
│                      │  Plausible Analytics (eventi tipizzati) │
├──────────────────────┴──────────────────────────────────────────┤
│                      Infrastruttura                             │
│  Cloudflare Pages (hosting statico)  ·  pnpm  ·  ESLint        │
└─────────────────────────────────────────────────────────────────┘
```

### Perché queste scelte?

**Esportazione statica di Next.js** — L'intero sito viene pre-renderizzato in file HTML/JS/CSS piatti. Non c'è alcun server Node.js in produzione. Cloudflare Pages serve tutto dall'edge.

**MediaBunny invece di FFmpeg-first** — Per MP4/MOV/MKV/WebM (la stragrande maggioranza delle conversioni), MediaBunny usa WebCodecs nativi del browser ed è 5–10× più veloce di FFmpeg WASM con zero penalità di cold-start.

**FFmpeg WASM a thread singolo** — FFmpeg multi-thread richiede `SharedArrayBuffer`, che richiede `Cross-Origin-Opener-Policy: same-origin` e `Cross-Origin-Embedder-Policy: require-corp`. Questi header rompono gli script di terze parti (analytics, font, annunci). Il thread singolo evita tutto questo.

**Tailwind v4 + OKLCH** — Il design system usa lo spazio colore OKLCH per accenti teal/cyan percettivamente uniformi che appaiono corretti sia in modalità chiara che scura senza override manuali della dark mode per componente.

---

## 📁 Struttura dei file

```
videotoaudioconverter.org/
│
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx              # Layout del locale (Header, Footer, Plausible, JSON-LD)
│   │   ├── page.tsx                # Homepage (hero, convertitore, caratteristiche, FAQ)
│   │   ├── mp4-to-mp3/page.tsx     # Pagina "Convertitore MP4 in MP3"
│   │   ├── mov-to-mp3/page.tsx     # Pagina "Convertitore MOV in MP3"
│   │   ├── mkv-to-mp3/page.tsx     # Pagina "Convertitore MKV in MP3"
│   │   ├── webm-to-mp3/page.tsx    # Pagina "Convertitore WebM in MP3"
│   │   ├── avi-to-mp3/page.tsx     # Pagina "Convertitore AVI in MP3"
│   │   ├── about/page.tsx
│   │   └── privacy/page.tsx
│   ├── layout.tsx                  # Layout root (viewport, tema)
│   ├── globals.css                 # Entry Tailwind + classi utility
│   ├── theme.css                   # Design token OKLCH, chiaro/scuro
│   ├── icon.svg                    # Icona dell'app
│   ├── robots.ts                   # robots.txt tramite Next.js Metadata API
│   └── sitemap.ts                  # Sitemap XML (tutti i locali × tutte le route)
│
├── components/
│   ├── converter/
│   │   ├── Converter.tsx           # Widget principale del convertitore (componente client)
│   │   ├── DropZone.tsx            # Input file drag-and-drop
│   │   └── SegmentedPicker.tsx     # Selettore di formato / qualità
│   ├── layout/
│   │   ├── Header.tsx              # Barra di navigazione con link ai formati + switch lingua
│   │   ├── Footer.tsx              # Footer con link
│   │   └── LanguageSwitcher.tsx    # Dropdown en ↔ fr
│   ├── sections/                   # Sezioni della homepage
│   │   ├── HeroProductStage.tsx
│   │   ├── BentoFeatures.tsx
│   │   ├── UseCases.tsx
│   │   ├── Comparison.tsx
│   │   ├── PrivacyStory.tsx
│   │   ├── Steps.tsx
│   │   ├── FAQ.tsx
│   │   └── TrustBar.tsx
│   ├── landing/
│   │   └── FormatLandingPage.tsx   # Componente riutilizzabile per le pagine di formato
│   ├── seo/
│   │   └── JsonLd.tsx              # Renderer schema JSON-LD
│   └── ui/                         # Primitive shadcn/ui (button, card, dialog …)
│
├── lib/
│   ├── engines/
│   │   ├── types.ts                # OutputFormat, Quality, ConvertOptions, ConvertResult
│   │   ├── index.ts                # Dispatcher: prova MediaBunny, fallback a FFmpeg
│   │   ├── mediabunny.ts           # Wrapper del motore WebCodecs
│   │   └── ffmpeg.ts               # Wrapper del motore FFmpeg WASM
│   ├── seo/
│   │   ├── site.ts                 # Costanti SITE, NAV, absoluteUrl()
│   │   ├── metadata.ts             # Helper buildMetadata()
│   │   └── schemas.ts              # Builder JSON-LD Schema.org
│   ├── content/
│   │   ├── format-pages.ts         # Configurazione FORMAT_PAGES (slug, testi, casi d'uso)
│   │   └── use-cases.ts            # Dati condivisi sui casi d'uso
│   ├── analytics.ts                # Emettitore di eventi Plausible tipizzato
│   ├── formats.ts                  # Metadati INPUT_FORMATS / OUTPUT_FORMATS
│   └── utils.ts                    # cn() — clsx + twMerge
│
├── i18n/
│   ├── routing.ts                  # locali: ['en', 'fr'], defaultLocale: 'en'
│   ├── request.ts                  # Loader messaggi (merge profondo condiviso + per pagina)
│   ├── navigation.ts               # Link next-intl, redirect, useRouter
│   ├── locale.ts                   # Tabella LOCALE_META per lo switch lingua
│   └── messages/
│       ├── en.json                 # Stringhe inglesi condivise
│       └── fr.json                 # Stringhe francesi condivise
│       (+ file JSON per pagina sotto i18n/pages/<slug>/)
│
├── public/
│   ├── ffmpeg-core/
│   │   └── ffmpeg-core.js          # Shim JS FFmpeg self-hosted (~1 MB)
│   │   (ffmpeg-core.wasm caricato da unpkg a runtime)
│   ├── _headers                    # Cloudflare Pages: cache + header di sicurezza
│   └── _redirects                  # Cloudflare Pages: / → /en/ ecc.
│
├── scripts/
│   └── sync-ffmpeg-core.mjs        # Copia la dist di @ffmpeg/core in public/
│
├── .env.example
├── next.config.ts                  # output: 'export', trailingSlash: false, plugin next-intl
├── tsconfig.json
├── tailwind.config.ts
└── package.json
```

---

## 🌍 Internazionalizzazione

Il sito utilizza [next-intl 4](https://next-intl-docs.vercel.app/) con route prefissate dal locale (`/en/`, `/fr/`).

### Aggiungere una nuova lingua

1. **Registra il locale** in `i18n/routing.ts`:

   ```ts
   export const routing = defineRouting({
     locales: ['en', 'fr', 'de'],  // aggiungi 'de'
     defaultLocale: 'en',
   });
   ```

2. **Crea i messaggi condivisi** in `i18n/messages/de.json` (copia `en.json` e traduci).

3. **Crea i messaggi per pagina** per ogni namespace di pagina:

   ```
   i18n/pages/home/de.json
   i18n/pages/mp4-to-mp3/de.json
   … ecc.
   ```

4. **Aggiungi i metadati del locale** in `i18n/locale.ts`:

   ```ts
   de: { nativeName: 'Deutsch', englishName: 'German' },
   ```

5. `sitemap.ts` e `generateStaticParams()` raccolgono automaticamente il nuovo locale — non sono necessarie ulteriori modifiche.

---

## 📊 Analytics

Il sito utilizza [Plausible Analytics](https://plausible.io/) — senza cookie, conforme al GDPR, nessun dato personale raccolto.

### Eventi personalizzati

Tutti gli eventi sono tipizzati in [`lib/analytics.ts`](lib/analytics.ts):

| Evento | Proprietà | Quando viene attivato |
|---|---|---|
| `file_selected` | `ext`, `size_mb`, `engine_hint` | L'utente trascina o seleziona un file video |
| `conversion_started` | `from_ext`, `to_format`, `quality` | Pulsante Converti cliccato |
| `conversion_completed` | `from_ext`, `to_format`, `engine`, `duration_s` | Blob audio pronto |
| `conversion_failed` | `from_ext`, `to_format`, `reason` | Il motore lancia un errore |
| `conversion_cancelled` | `from_ext`, `to_format` | L'utente annulla a metà conversione |
| `download_clicked` | `format` | Pulsante di download cliccato |

Questi eventi ti danno un quadro completo di quali percorsi di conversione video-audio sono più popolari.

---

## 📦 Build & Deploy

### Build locale

```bash
pnpm build       # esportazione statica → out/
npx serve out    # anteprima locale
```

L'output della build è una directory di file piatti — non serve alcun server.

### Deploy su Cloudflare Pages

1. **Collega il tuo repository** nella dashboard di Cloudflare Pages.

2. **Impostazioni di build:**

   | Impostazione | Valore |
   |---|---|
   | Comando build | `pnpm build` |
   | Directory di output build | `out` |
   | Versione Node.js | `20` |

3. **Variabili d'ambiente** (Production + Preview):

   ```
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=videotoaudioconverter.org
   NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL=https://plausible.io/js/script.tagged-events.outbound-links.js
   ```

4. **Dominio personalizzato:** Aggiungi `videotoaudioconverter.org` e lascia che il DNS di Cloudflare gestisca il routing.

### Strategia di caching

| Risorsa | Cache-Control | Perché |
|---|---|---|
| `/ffmpeg-core/*` | `immutable, max-age=31536000` | Content-addressed; non cambia mai |
| `/_next/static/*` | `immutable, max-age=31536000` | Next.js usa hash di contenuto nei filename |
| `/og.png`, `/favicon.ico` | `max-age=604800` | Aggiornati raramente |
| Pagine HTML | Nessuna cache / header di sicurezza | Sempre fresche, protegge gli utenti |

---

## ➕ Aggiungere una nuova pagina di formato

Per aggiungere una nuova pagina di destinazione per conversione **video audio** (es. `flv-to-mp3`):

1. **Aggiungi a `lib/content/format-pages.ts`:**

   ```ts
   {
     slug: 'flv-to-mp3',
     messageKey: 'flvToMp3',
     outputFormat: 'mp3',
     highlightedInputs: ['flv'],
     useCaseImages: ['https://images.unsplash.com/…'],
   }
   ```

2. **Crea il file della pagina:**

   ```ts
   // app/[locale]/flv-to-mp3/page.tsx
   import { FormatLandingPage } from '@/components/landing/FormatLandingPage'
   import { getFormatPage } from '@/lib/content/format-pages'

   const config = getFormatPage('flv-to-mp3')!

   export default function Page() {
     return <FormatLandingPage config={config} />
   }
   ```

3. **Aggiungi le traduzioni:**

   ```
   i18n/pages/flv-to-mp3/en.json
   i18n/pages/flv-to-mp3/fr.json
   ```

4. La pagina viene **inclusa automaticamente** in `sitemap.ts` — nessuna ulteriore modifica necessaria.

> **Nota SEO:** Ogni pagina di formato deve avere testi unici. Google penalizza le pagine doorway con contenuti quasi-duplicati.

---

## 🛡️ Privacy e sicurezza

- **Nessun caricamento di file** — la conversione avviene interamente nel browser tramite WebCodecs / FFmpeg WASM
- **Nessun cookie** — Plausible è senza cookie; non serve alcun banner di consenso
- **Nessun localStorage** — nulla viene mantenuto tra le sessioni
- **Nessuna dipendenza da CDN a runtime** — lo shim JS di FFmpeg è self-hosted; solo il binario WASM si carica da `unpkg` e viene messo in cache per sempre dopo il primo caricamento
- **Header di sicurezza su ogni pagina HTML:**
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`

---

## 🤝 Contribuire

I contributi sono benvenuti. Le aree con maggiore impatto sono:

- **Nuove traduzioni** — Copia `i18n/messages/en.json`, traduci, apri una PR
- **Nuove pagine di destinazione per formato** — Segui la guida sopra; porta testi unici
- **Miglioramenti del motore** — Migliore reporting del progresso, codec di output aggiuntivi
- **UI / accessibilità** — Conformità WCAG AA, navigazione da tastiera

Apri una issue prima di iniziare modifiche grandi così possiamo discutere la direzione.

---

## 🔍 Cosa risolve questo progetto (riferimento parole chiave e casi d'uso)

**[VideoToAudioConverter.org](https://videotoaudioconverter.org)** è costruito per essere la risposta definitiva per chiunque cerchi un **convertitore video audio online gratuito** che rispetti la privacy. Di seguito la mappa completa degli intenti di conversione e delle query di ricerca che serviamo.

### Ogni coppia di conversione che supportiamo

Ogni cella è un percorso di conversione esplicito e indicizzabile. Trascina un file del formato della riga e seleziona il formato della colonna — quella è la conversione.

| Input ↓ / Output → | MP3 | WAV | M4A | AAC | FLAC | OGG | Opus |
|---|---|---|---|---|---|---|---|
| **MP4** | [mp4 to mp3](https://videotoaudioconverter.org/it/mp4-to-mp3) | mp4 to wav | mp4 to m4a | mp4 to aac | mp4 to flac | mp4 to ogg | mp4 to opus |
| **MOV** | [mov to mp3](https://videotoaudioconverter.org/it/mov-to-mp3) | mov to wav | mov to m4a | mov to aac | mov to flac | mov to ogg | mov to opus |
| **MKV** | [mkv to mp3](https://videotoaudioconverter.org/it/mkv-to-mp3) | mkv to wav | mkv to m4a | mkv to aac | mkv to flac | mkv to ogg | mkv to opus |
| **WebM** | [webm to mp3](https://videotoaudioconverter.org/it/webm-to-mp3) | webm to wav | webm to m4a | webm to aac | webm to flac | webm to ogg | webm to opus |
| **AVI** | [avi to mp3](https://videotoaudioconverter.org/it/avi-to-mp3) | avi to wav | avi to m4a | avi to aac | avi to flac | avi to ogg | avi to opus |
| **FLV** | flv to mp3 | flv to wav | flv to m4a | flv to aac | flv to flac | flv to ogg | flv to opus |
| **WMV** | wmv to mp3 | wmv to wav | wmv to m4a | wmv to aac | wmv to flac | wmv to ogg | wmv to opus |
| **3GP** | 3gp to mp3 | 3gp to wav | 3gp to m4a | 3gp to aac | 3gp to flac | 3gp to ogg | 3gp to opus |
| **MPEG** | mpeg to mp3 | mpeg to wav | mpeg to m4a | mpeg to aac | mpeg to flac | mpeg to ogg | mpeg to opus |
| **M4V** | m4v to mp3 | m4v to wav | m4v to m4a | m4v to aac | m4v to flac | m4v to ogg | m4v to opus |

> **63 percorsi di conversione supportati**, ciascuno accessibile dallo stesso widget di conversione su **[videotoaudioconverter.org](https://videotoaudioconverter.org)**. Pagine di destinazione dedicate: [MP4 → MP3](https://videotoaudioconverter.org/it/mp4-to-mp3) · [MOV → MP3](https://videotoaudioconverter.org/it/mov-to-mp3) · [MKV → MP3](https://videotoaudioconverter.org/it/mkv-to-mp3) · [WebM → MP3](https://videotoaudioconverter.org/it/webm-to-mp3) · [AVI → MP3](https://videotoaudioconverter.org/it/avi-to-mp3). Tutte le altre coppie sono sbloccate tramite il selettore del formato di output.

---

## 🎯 Chi usa un convertitore video audio? (Casi d'uso)

Le persone cercano un **convertitore video audio** per ragioni molto diverse. Abbiamo ottimizzato l'UI, i testi e le pagine di destinazione attorno a questi scenari. Puoi provarli tutti su **[videotoaudioconverter.org](https://videotoaudioconverter.org)**.

### 🎙️ Podcaster e produttori audio

- **[Converti registrazioni video in MP3](https://videotoaudioconverter.org/it/mp4-to-mp3)** per la distribuzione di podcast (Spotify, Apple Podcasts, RSS).
- Estrai l'audio da una **registrazione Zoom**, **registrazione Google Meet**, **registrazione Microsoft Teams**, **registrazione Riverside** o **registrazione schermo OBS**.
- Rimuovi la traccia visiva da un **MP4 di intervista** e spedisci solo l'audio.
- Converti **video in WAV** o **FLAC** per l'editing in Audacity, Adobe Audition, Logic Pro, GarageBand, Reaper o Pro Tools.

### 🎓 Studenti e docenti

- Converti **registrazioni di lezioni in MP3** così sono riproducibili su qualsiasi telefono durante il tragitto — prova [videotoaudioconverter.org](https://videotoaudioconverter.org).
- Estrai l'audio da **registrazioni di lezioni Zoom**, **video Kahoot**, **download di Khan Academy** o **interventi di conferenze**.
- Trasforma una **[registrazione MOV](https://videotoaudioconverter.org/it/mov-to-mp3)** da QuickTime in un **M4A** portatile per iPhone.
- Ottieni l'audio dai **download di YouTube che già possiedi** per la revisione offline (rispetta il copyright).

### 📱 Utenti mobile e dei social media

- **TikTok video in MP3** — estrai una clip audio da un'esportazione TikTok su [videotoaudioconverter.org](https://videotoaudioconverter.org).
- **Instagram Reel video in audio** — estrai l'audio da un download di Reel.
- **WhatsApp video in MP3** — converti un messaggio video inoltrato in audio.
- **iPhone video in MP3** — trasforma le registrazioni `.MOV` / `.M4V` da Foto in MP3; usa la nostra pagina **[MOV in MP3](https://videotoaudioconverter.org/it/mov-to-mp3)**.
- **Android video in MP3** — estrai l'audio dalle registrazioni MP4; usa la nostra pagina **[MP4 in MP3](https://videotoaudioconverter.org/it/mp4-to-mp3)**.

### 🎵 Appassionati di musica e media

- **[Converti video musicali in MP3](https://videotoaudioconverter.org/it/mp4-to-mp3)** per la riproduzione offline (su file di cui hai diritti / proprietà).
- Estrai l'audio da una **registrazione di concerto** o **video di prove**.
- Estrai una **colonna sonora** da un video per remix, sampling o set DJ.
- Archivia le tracce audio dei video in **FLAC senza perdita** tramite [videotoaudioconverter.org](https://videotoaudioconverter.org).

### 💼 Professionisti e knowledge worker

- **[Converti una registrazione di riunione in MP3](https://videotoaudioconverter.org/it/mp4-to-mp3)** per la trascrizione con Otter.ai, Rev, Descript, Whisper o gli strumenti di trascrizione di Google.
- Estrai l'audio da un **webinar** o **all-hands aziendale** per accessibilità / archiviazione.
- Estrai l'audio da un **video di formazione** per inviarlo a un servizio di trascrizione.
- Risparmia banda condividendo **versioni solo audio** delle riunioni — tutto su [videotoaudioconverter.org](https://videotoaudioconverter.org).

### 🎬 Video editor e creatori di contenuti

- Separa l'audio dal video per il **montaggio multi-traccia** in Premiere Pro, DaVinci Resolve, Final Cut, CapCut o VN Editor — usa [videotoaudioconverter.org](https://videotoaudioconverter.org) prima dell'importazione.
- Sostituisci la traccia audio di un video **[estraendo prima quella originale con il nostro convertitore MKV](https://videotoaudioconverter.org/it/mkv-to-mp3)**.
- Genera **anteprime solo audio** per i clienti prima di consegnare il video finale.

### 🔒 Utenti attenti alla privacy

- Converti file **senza caricarli** su alcun server di terze parti — **[provalo su videotoaudioconverter.org](https://videotoaudioconverter.org)**.
- Elabora **interviste riservate**, **deposizioni legali**, **registrazioni mediche**, **materiale giornalistico** senza che il file lasci mai il dispositivo.
- Usa il convertitore **offline** dopo il primo caricamento della pagina (funziona su un aereo o in una SCIF).
- Evita i convertitori che richiedono **iscrizione via email**, **creazione account** o **abbonamenti a pagamento**. Vedi la nostra [Privacy Policy](https://videotoaudioconverter.org/it/privacy) per i dettagli.

---

## ❓ Domande comuni (con risposta)

Queste sono le domande long-tail che le persone digitano su Google quando cercano un convertitore video audio. Ognuna ha risposta nella FAQ nella [homepage](https://videotoaudioconverter.org) e nelle pagine di destinazione per ogni formato.

### Come convertire MP4 in MP3 gratis online?
Vai su **[videotoaudioconverter.org/it/mp4-to-mp3](https://videotoaudioconverter.org/it/mp4-to-mp3)**, trascina il tuo file MP4, scegli "MP3" come formato di output, clicca Converti e scarica il file. Nessun caricamento, nessuna registrazione, nessuna filigrana, nessun limite di dimensione del file.

### Come estrarre l'audio da un video senza caricarlo?
Usa un **convertitore video audio lato client** come **[VideoToAudioConverter.org](https://videotoaudioconverter.org)**. La conversione avviene nel tuo browser tramite WebCodecs e FFmpeg WASM — il file non passa mai da un server.

### Qual è il miglior convertitore video audio gratuito che non carica i file?
Un convertitore basato su browser che utilizza WebCodecs o FFmpeg WASM è l'unica categoria che genuinamente non carica i file. **[VideoToAudioConverter.org](https://videotoaudioconverter.org)** è open source quindi puoi verificare l'affermazione.

### Come convertire MOV in MP3 su Mac senza iTunes?
Apri **[videotoaudioconverter.org/it/mov-to-mp3](https://videotoaudioconverter.org/it/mov-to-mp3)** in Safari o Chrome, trascina il file `.MOV` dal Finder sulla dropzone, scegli "MP3" e scarica. Funziona su qualsiasi versione di macOS, senza iTunes / app Musica.

### Come convertire MKV in MP3 senza installare software?
Apri **[videotoaudioconverter.org/it/mkv-to-mp3](https://videotoaudioconverter.org/it/mkv-to-mp3)**, trascina il MKV, scegli MP3, clicca Converti. Nessun VLC, nessun HandBrake, nessuna riga di comando richiesta.

### Come estrarre l'audio da un file WebM?
Vai su **[videotoaudioconverter.org/it/webm-to-mp3](https://videotoaudioconverter.org/it/webm-to-mp3)**. WebM usa internamente audio Opus o Vorbis — scegli Opus (per qualità passthrough nativa), MP3 (per compatibilità) o WAV (per il montaggio).

### Come convertire AVI in MP3 nel 2026?
AVI è un formato Windows legacy. Apri **[videotoaudioconverter.org/it/avi-to-mp3](https://videotoaudioconverter.org/it/avi-to-mp3)** — il nostro motore di fallback FFmpeg WASM gestisce AVI nativamente. Trascina il file, scegli MP3, fatto. Nessuna installazione di codec DivX richiesta.

### Come convertire video in MP3 a 320 kbps?
Su **[videotoaudioconverter.org](https://videotoaudioconverter.org)**, scegli il preset di qualità "Alta" — codifica MP3 a 320 kbps (la qualità massima per MP3).

### Come estrarre l'audio da un video in WAV (senza perdita)?
Apri **[videotoaudioconverter.org](https://videotoaudioconverter.org)** e scegli "WAV" come formato di output. WAV è PCM non compresso — ideale per il montaggio in una DAW.

### Come estrarre l'audio da un video iPhone?
I video iPhone sono solitamente `.MOV` (H.264 + AAC) o `.MP4`. Apri **[videotoaudioconverter.org/it/mov-to-mp3](https://videotoaudioconverter.org/it/mov-to-mp3)**, trascina il file da Foto / File, scegli MP3 o M4A, scarica.

### È legale convertire video in audio?
Convertire file di cui sei proprietario o per cui hai i diritti è legale nella maggior parte delle giurisdizioni. Non usare questo strumento per aggirare il DRM, fare scraping di servizi di streaming a pagamento o violare il copyright. Non siamo un downloader di YouTube.

### Il convertitore funziona offline?
Dopo il primo caricamento della pagina su **[videotoaudioconverter.org](https://videotoaudioconverter.org)**, sì. Il binario FFmpeg WASM viene messo in cache per un anno. Puoi attivare la modalità aereo e continuare a convertire file.

---

## 🏆 Come si confronta VideoToAudioConverter.org

| Capacità | [VideoToAudioConverter.org](https://videotoaudioconverter.org) | FreeConvert | Convertio | OnlineAudioConverter | CloudConvert |
|---|---|---|---|---|---|
| **Gratis** | ✅ Per sempre | ✅ Limitato | ✅ Limitato | ✅ Limitato | ✅ Limitato |
| **Nessun upload (client-side)** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Nessun limite di dimensione file** | ✅ | ❌ 1 GB | ❌ 100 MB | ❌ 2 GB | ❌ 1 GB |
| **Nessuna registrazione** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Nessuna pubblicità** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Funziona offline** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Open source** | ✅ MIT | ❌ | ❌ | ❌ | ❌ |
| **Conversioni illimitate al giorno** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Sicuro per il GDPR by design** | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |

> Il confronto riflette i piani tariffari pubblicamente elencati e i gate funzionali a partire dal 2026. Verifica i limiti attuali sul sito di ciascun fornitore.

---

## 🗣️ Copertura multilingue

Lo stesso convertitore, localizzato per il pubblico globale. Ogni versione tradotta è una superficie SEO completamente separata:

| Locale | Prefisso URL | Frase tradotta per "convertitore video audio" |
|---|---|---|
| 🇬🇧 Inglese | [`/en/`](https://videotoaudioconverter.org/en/) | video to audio converter |
| 🇫🇷 Francese | [`/fr/`](https://videotoaudioconverter.org/fr/) | convertisseur vidéo en audio |
| 🇪🇸 Spagnolo | `/es/` *(pianificato)* | convertidor de video a audio |
| 🇩🇪 Tedesco | `/de/` *(pianificato)* | Video zu Audio Konverter |
| 🇮🇹 Italiano | `/it/` *(pianificato)* | convertitore da video ad audio |
| 🇵🇹 Portoghese | `/pt/` *(pianificato)* | conversor de vídeo para áudio |
| 🇨🇳 Cinese (Semplificato) | `/zh/` *(pianificato)* | 视频转音频转换器 |
| 🇯🇵 Giapponese | `/ja/` *(pianificato)* | 動画から音声に変換 |
| 🇰🇷 Coreano | `/ko/` *(pianificato)* | 비디오를 오디오로 변환 |
| 🇷🇺 Russo | `/ru/` *(pianificato)* | конвертер видео в аудио |
| 🇸🇦 Arabo | `/ar/` *(pianificato)* | محول فيديو إلى صوت |
| 🇮🇳 Hindi | `/hi/` *(pianificato)* | वीडियो को ऑडियो में बदलें |
| 🇮🇩 Indonesiano | `/id/` *(pianificato)* | konverter video ke audio |
| 🇹🇷 Turco | `/tr/` *(pianificato)* | video ses dönüştürücü |
| 🇻🇳 Vietnamita | `/vi/` *(pianificato)* | chuyển video sang âm thanh |

Aggiungere un locale richiede ~30 minuti una volta pronte le traduzioni — vedi [Internazionalizzazione](#-internazionalizzazione) sopra. La homepage inglese live è su [videotoaudioconverter.org/en/](https://videotoaudioconverter.org/en/) e la versione francese su [videotoaudioconverter.org/fr/](https://videotoaudioconverter.org/fr/).

---

## 📚 Glossario — Formati audio e video spiegati

Un riferimento per gli utenti che cercano cose come "qual è la differenza tra MP3 e M4A" o "quale formato audio è il migliore per i podcast".

### Formati di output (Audio)

- **MP3** — Il formato audio universale. Compressione con perdita. 128 kbps = decente, 192 kbps = buono, 320 kbps = eccellente. Si riproduce praticamente su ogni dispositivo prodotto dal 1998. Usa per: podcast, streaming, condivisione.
- **WAV** — Audio PCM non compresso. File enormi (~10 MB al minuto) ma bit-perfect. Usa per: editing in una DAW, mastering, fonti d'archivio.
- **M4A** — Contenitore audio MPEG-4, tipicamente contiene AAC. Stessa qualità di MP3 a bitrate inferiori. Usa per: ecosistema iTunes / Apple Music, suonerie iPhone.
- **AAC** — Advanced Audio Coding. Qualità migliore di MP3 allo stesso bitrate. Standard per YouTube, Apple, broadcasting moderno. Usa per: ovunque funzioni MP3, quando vuoi qualità migliore.
- **FLAC** — Free Lossless Audio Codec. Comprime senza perdita di qualità, ~50% delle dimensioni di WAV. Usa per: archiviazione audiophile, collezioni musicali hi-res.
- **OGG (Vorbis)** — Formato lossy open source. Qualità migliore di MP3 allo stesso bitrate. Usa per: ecosistemi open source, giochi, web.
- **Opus** — Il codec lossy più moderno. Surclassa MP3 / AAC / Vorbis a bassi bitrate. Usa per: voce (podcast, VoIP), audio a bassa banda, WebRTC.

### Formati di input (Video)

- **MP4** — Video H.264 / H.265 + audio AAC in un contenitore MPEG-4. Il default per quasi tutto: download YouTube, registrazioni telefoniche, screen capture.
- **MOV** — Contenitore Apple QuickTime. Comune da iPhone, Mac, ScreenFlow, Final Cut.
- **MKV** — Matroska. Contenitore aperto che può contenere qualsiasi codec. Comune per download video di alta qualità, anime, rip blu-ray.
- **WebM** — Contenitore aperto supportato da Google. Video VP8 / VP9 / AV1 + audio Opus / Vorbis. Standard per il video sul web (download YouTube in WebM, WhatsApp Web).
- **AVI** — Audio Video Interleave. Formato Microsoft legacy degli anni '90, ancora comune in archivi più vecchi e esportazioni di software solo Windows.
- **FLV** — Flash Video. Formato Adobe Flash legacy. Raro oggi ma ancora presente in vecchi download.
- **WMV** — Windows Media Video. Proprietario Microsoft, comune da vecchie esportazioni di Windows Movie Maker / PowerPoint.
- **3GP** — Contenitore mobile dell'era pre-smartphone. Ancora prodotto da alcuni feature phone e videocamere vecchie.
- **MPEG (MPG)** — Il formato video MPEG-1 / MPEG-2 originale. Usato per vecchi DVD e trasmissioni TV.

---

## 🧭 Intento di ricerca che soddisfiamo

Un elenco non esaustivo delle query di ricerca per cui questo sito è progettato per posizionarsi. Indicizziamo ciascuna come contenuto principale da qualche parte sul sito (homepage, pagine di formato, FAQ o questo README).

<details>
<summary><strong>🔹 Termini principali (alto volume)</strong></summary>

convertitore video audio · convertitore video mp3 · video in mp3 · convertire video in mp3 · convertire video in audio · estrarre audio da video · convertitore mp3 · convertitore mp3 online · convertitore mp3 gratis · estrattore audio · estrattore audio video · estrarre audio da video · video in audio · audio da video · ottenere audio da video · video in mp3 online · convertire video in mp3 gratis · convertitore video audio gratis · video in mp3 gratis · convertitore video audio online · convertitore da video ad audio · estrarre la traccia audio · estrattore audio online · convertire mp4 in mp3 gratis

</details>

<details>
<summary><strong>🔹 Conversioni per coppia di formati (long tail, alto intento)</strong></summary>

mp4 in mp3 · mp4 in wav · mp4 in m4a · mp4 in aac · mp4 in flac · mp4 in ogg · mp4 in opus · mov in mp3 · mov in wav · mov in m4a · mov in aac · mkv in mp3 · mkv in wav · mkv in flac · mkv in aac · webm in mp3 · webm in ogg · webm in opus · webm in wav · avi in mp3 · avi in wav · flv in mp3 · wmv in mp3 · 3gp in mp3 · mpeg in mp3 · m4v in mp3

</details>

<details>
<summary><strong>🔹 Modificatori di qualità / bitrate</strong></summary>

convertitore mp3 320 kbps · video in mp3 alta qualità · video in audio senza perdita · video in flac · estrattore audio hd · estrattore wav qualità cd · 192 kbps mp3 · 128 kbps mp3 · migliore qualità video in mp3 · convertire video in audio di alta qualità · alta qualità mp3 · convertitore senza perdita · video in wav · video in flac

</details>

<details>
<summary><strong>🔹 Modificatori di privacy e fiducia</strong></summary>

video in mp3 senza caricamento · convertitore video senza caricamento · video in mp3 lato client · convertitore video nel browser · video in audio offline · video in mp3 privato · convertitore video sicuro · video in mp3 senza registrazione · estrattore audio senza registrazione · video in mp3 senza filigrana · convertitore video senza pubblicità · convertitore video conforme GDPR · video in mp3 senza caricare il file · convertitore video audio open source · convertitore offline · convertitore nel browser · senza registrazione · senza filigrana · senza pubblicità · convertitore video privato · conforme GDPR

</details>

<details>
<summary><strong>🔹 Modificatori di dispositivo / piattaforma</strong></summary>

iPhone video in mp3 · Android video in mp3 · Mac video in mp3 · Windows video in mp3 · Linux video in mp3 · Chromebook video in mp3 · iPad video in audio · Safari video in mp3 · Chrome video in mp3 · Firefox video in mp3 · Edge video in mp3 · iOS convertitore video in mp3

</details>

<details>
<summary><strong>🔹 Intento specifico per fonte (solo file propri — non siamo un downloader YouTube)</strong></summary>

registrazione Zoom in mp3 · registrazione Google Meet in mp3 · registrazione Teams in mp3 · registrazione schermo in mp3 · registrazione OBS in mp3 · TikTok in mp3 · Instagram Reel in mp3 · WhatsApp video in mp3 · registrazione schermo iPhone in mp3 · registrazione webinar in audio · video intervista in mp3 · podcast video in mp3 · lezione registrata in mp3 · riunione in mp3

</details>

<details>
<summary><strong>🔹 How-to long-tail (target FAQ / featured snippet)</strong></summary>

come convertire mp4 in mp3 · come estrarre audio da video · come convertire video in mp3 gratis · come convertire video in mp3 senza software · come ottenere il suono da un video · come estrarre audio da un file video · come convertire mov in mp3 su mac · come convertire mkv in mp3 · come estrarre audio da webm · come convertire avi in mp3 nel 2026 · come convertire video in mp3 su iPhone · come convertire video in mp3 su Android · come convertire video in mp3 offline · come convertire video in mp3 320 kbps · come convertire video in wav · come estrarre audio da un video senza caricarlo

</details>

<details>
<summary><strong>🔹 Confronto / alternative</strong></summary>

alternativa freeconvert · alternativa convertio · alternativa cloudconvert · alternativa onlineaudioconverter · alternativa ytmp3 · alternativa zamzar · miglior convertitore video audio gratis · miglior convertitore video mp3 nel browser · miglior convertitore video privato · alternativa open source a convertio

</details>

<details>
<summary><strong>🔹 Multilingue</strong></summary>

convertitore video audio · convertitore da video ad audio · convertitore video mp3 · estrarre l'audio da un video · estrarre la traccia audio · convertitore audio online · video to mp3 italiano · convertisseur vidéo en audio · convertidor de video a audio · video zu audio konverter · conversor de vídeo para áudio · 视频转音频 · 視頻轉音頻 · 動画 音声 変換 · 비디오 오디오 변환 · конвертер видео в аудио · محول فيديو إلى صوت · वीडियो को ऑडियो में बदलें · konverter video ke audio · video ses dönüştürücü · chuyển video sang âm thanh

</details>

---

## 🌟 In sintesi

Se stai cercando un **convertitore video audio online gratuito** che:

- ✅ Converte **[MP4 in MP3](https://videotoaudioconverter.org/it/mp4-to-mp3)**, **[MOV in MP3](https://videotoaudioconverter.org/it/mov-to-mp3)**, **[MKV in MP3](https://videotoaudioconverter.org/it/mkv-to-mp3)**, **[WebM in MP3](https://videotoaudioconverter.org/it/webm-to-mp3)**, **[AVI in MP3](https://videotoaudioconverter.org/it/avi-to-mp3)** e altre 58 coppie di conversione
- ✅ Funziona **al 100% nel tuo browser** con **zero caricamenti** e **zero tracciamento**
- ✅ Non ha **alcun limite di dimensione del file**, **nessuna registrazione**, **nessuna pubblicità**, **nessuna filigrana**
- ✅ Supporta output **MP3, WAV, M4A, AAC, FLAC, OGG, Opus** fino a **320 kbps** o **senza perdita**
- ✅ Funziona su **Mac, Windows, Linux, Chromebook, iPhone, iPad, Android**
- ✅ È **open source**, **sicuro per il GDPR** e funziona **offline** dopo il primo caricamento

— allora aggiungi ai preferiti **[videotoaudioconverter.org](https://videotoaudioconverter.org)** e metti una stella a questo repo. ⭐

---

## 📄 Licenza

- **Codice sorgente:** [MIT](LICENSE)
- **FFmpeg:** [LGPL 2.1](https://ffmpeg.org/legal.html) (collegato dinamicamente tramite WASM)
- **MediaBunny:** MIT
- **shadcn/ui:** MIT

---

<p align="center">
  Costruito con ❤️ · Ospitato su <a href="https://pages.cloudflare.com/">Cloudflare Pages</a> · Analytics di <a href="https://plausible.io/">Plausible</a>
</p>

<p align="center">
  <sub>
    Parole chiave: convertitore video audio · convertitore video mp3 · video in mp3 · mp4 in mp3 · mov in mp3 · mkv in mp3 · webm in mp3 · avi in mp3 · estrarre audio da video · estrattore audio · online gratis · senza upload · client-side · open source · WebCodecs · FFmpeg WASM
  </sub>
</p>
