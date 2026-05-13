<p align="center">
  <img src="app/icon.svg" alt="Logo VideoToAudioConverter" width="80" height="80" />
</p>

<h1 align="center">VideoToAudioConverter.org</h1>

<p align="center">
  <a href="./README.md">English</a> ·
  <a href="./README.zh.md">简体中文</a> ·
  <a href="./README.es.md">Español</a> ·
  <a href="./README.ja.md">日本語</a> ·
  <a href="./README.ko.md">한국어</a> ·
  <a href="./README.de.md">Deutsch</a> ·
  <strong>Français</strong> ·
  <a href="./README.pt.md">Português</a> ·
  <a href="./README.it.md">Italiano</a> ·
  <a href="./README.ar.md">العربية</a> ·
  <a href="./README.hi.md">हिन्दी</a>
</p>

<p align="center">
  <strong>Le convertisseur vidéo en audio gratuit le plus rapide — 100 % dans votre navigateur, zéro téléversement, zéro suivi.</strong>
</p>

<p align="center">
  <a href="https://videotoaudioconverter.org"><img src="https://img.shields.io/badge/live-videotoaudioconverter.org-0ea5e9?style=flat-square&logo=cloudflare&logoColor=white" alt="Site en ligne" /></a>
  <img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/Tailwind-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind v4" />
  <img src="https://img.shields.io/badge/FFmpeg-WASM-007808?style=flat-square&logo=ffmpeg&logoColor=white" alt="FFmpeg WASM" />
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="Licence MIT" />
</p>

<p align="center">
  <a href="https://videotoaudioconverter.org">🌐 Démo en ligne</a> ·
  <a href="#-démarrage-rapide">Démarrage rapide</a> ·
  <a href="#-comment-ça-marche">Comment ça marche</a> ·
  <a href="#-formats-pris-en-charge">Formats</a> ·
  <a href="#-déploiement">Déploiement</a>
</p>

---

## Qu'est-ce que c'est ?

**[VideoToAudioConverter.org](https://videotoaudioconverter.org)** est un **convertisseur vidéo en audio** open source, de qualité production, qui s'exécute entièrement dans le navigateur de l'utilisateur. Déposez un fichier vidéo, choisissez un format audio, cliquez sur convertir — l'audio se télécharge instantanément. Aucun serveur, aucun compte, aucune limite de taille de fichier imposée par un backend.

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
  <a href="https://videotoaudioconverter.org/fr/">
    <img src="https://videotoaudioconverter.org/screenshots/01-hero.webp" alt="Video to audio converter — free online tool to convert MP4, MOV, MKV, WebM, AVI to MP3, WAV, AAC, M4A, FLAC, OGG, Opus directly in the browser with zero upload" width="900" />
  </a>
</p>

<p align="center">
  <a href="https://videotoaudioconverter.org/fr/">
    <img src="https://videotoaudioconverter.org/screenshots/07-mobile-hero.webp" alt="Video to audio converter mobile view — works on iPhone Safari and Android Chrome, no app install required" width="320" />
  </a>
</p>


### Pourquoi un autre convertisseur vidéo en audio ?

| Fonctionnalité | VideoToAudioConverter.org | Convertisseur en ligne typique |
|---|---|---|
| S'exécute à 100 % dans le navigateur | ✅ WebCodecs + FFmpeg WASM | ❌ Téléverse sur un serveur |
| Limite de taille de fichier | ✅ Aucune (la RAM est la limite) | ❌ Plafond 50–500 Mo |
| Vie privée / aucun suivi | ✅ Zéro cookie, zéro téléversement | ❌ Fichiers stockés sur le serveur |
| Fonctionne hors ligne (après premier chargement) | ✅ WASM mis en cache à vie | ❌ Internet requis |
| Open source | ✅ MIT | ❌ Code propriétaire |
| Sans publicité | ✅ | ❌ Publicités agressives |
| Rapide (formats modernes) | ✅ Vitesse native WebCodecs | ❌ File d'attente serveur |

---

## ✨ Fonctionnalités

### Convertisseur principal

- **Glisser-déposer** ou clic pour sélectionner n'importe quel fichier vidéo
- **9 formats d'entrée** → MP4, MOV, MKV, WebM, AVI, FLV, WMV, 3GP, MPEG
- **7 formats de sortie** → MP3, WAV, M4A, AAC, FLAC, OGG, Opus
- **Préréglages de qualité** → Haute (320 kbps), Moyenne (192 kbps), Basse (128 kbps), Sans perte
- **Barre de progression en temps réel** avec étiquettes d'étape (démultiplexage → décodage → encodage → multiplexage)
- **Téléchargement instantané** — le blob audio est servi depuis la mémoire et ne touche jamais un serveur

### Architecture axée sur la confidentialité

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

### Pages d'atterrissage optimisées SEO par format

Des pages d'atterrissage dédiées et entièrement traduites pour chaque paire de conversion **vidéo en audio** populaire :

| Page | URL en ligne |
|---|---|
| Convertisseur MP4 en MP3 | [videotoaudioconverter.org/fr/mp4-to-mp3](https://videotoaudioconverter.org/fr/mp4-to-mp3) |
| Convertisseur MOV en MP3 | [videotoaudioconverter.org/fr/mov-to-mp3](https://videotoaudioconverter.org/fr/mov-to-mp3) |
| Convertisseur MKV en MP3 | [videotoaudioconverter.org/fr/mkv-to-mp3](https://videotoaudioconverter.org/fr/mkv-to-mp3) |
| Convertisseur WebM en MP3 | [videotoaudioconverter.org/fr/webm-to-mp3](https://videotoaudioconverter.org/fr/webm-to-mp3) |
| Convertisseur AVI en MP3 | [videotoaudioconverter.org/fr/avi-to-mp3](https://videotoaudioconverter.org/fr/avi-to-mp3) |

Chaque page possède son propre contenu, des schémas JSON-LD (SoftwareApplication, HowTo, FAQPage) et des balises Open Graph — aucun contenu dupliqué.

### Internationalisation

- Anglais (`/en/`) et français (`/fr/`) prêts à l'emploi
- Espaces de noms de messages par page pour une i18n approfondie (pas seulement les chaînes d'interface)
- Infrastructure prête pour 15+ langues supplémentaires (zh, ja, ko, es, de, pt, it, ru, ar, hi, id, tr, vi …)

---

## 🔧 Comment ça marche

Le convertisseur s'appuie sur une **architecture à double moteur** qui choisit automatiquement le moteur le plus rapide disponible pour chaque fichier d'entrée :

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

### Détails des moteurs

#### MediaBunny — Moteur principal

[MediaBunny](https://github.com/nicktindall/mediabunny) encapsule l'**API WebCodecs** native du navigateur dans un pipeline de transcodage simple. Il fonctionne sur le thread principal sans surcoût WASM pour les formats pris en charge.

- **Entrées prises en charge :** MP4, M4V, MOV, QT, MKV, WebM
- **Vitesse :** Quasi-native — un MP4 d'une heure peut être converti en environ 10 secondes sur du matériel moderne
- **Aucun en-tête COOP/COEP requis** — fonctionne avec les scripts tiers

#### FFmpeg WASM — Moteur de secours

[@ffmpeg/ffmpeg](https://github.com/ffmpegwasm/ffmpeg.wasm) compile l'intégralité du binaire FFmpeg en WebAssembly. S'exécute en mono-thread (pas de SharedArrayBuffer / COOP requis).

- **Entrées prises en charge :** AVI, FLV, WMV, 3GP, MPEG, et tout format que MediaBunny ne peut pas traiter
- **Taille du WASM :** ~31 Mo (mis en cache via `Cache-Control: immutable, max-age=31536000`)
- **Shim JS auto-hébergé** à `/ffmpeg-core/ffmpeg-core.js` pour éviter toute dépendance CDN

---

## 📂 Formats pris en charge

### Formats d'entrée (Vidéo vers Audio)

| Format | Extension(s) | Moteur | Notes |
|---|---|---|---|
| MP4 | `.mp4`, `.m4v` | MediaBunny | Format vidéo le plus courant |
| MOV | `.mov`, `.qt` | MediaBunny | Apple QuickTime |
| MKV | `.mkv` | MediaBunny | Conteneur Matroska |
| WebM | `.webm` | MediaBunny | Natif web (VP8/VP9/AV1) |
| AVI | `.avi` | FFmpeg WASM | Format Windows hérité |
| FLV | `.flv` | FFmpeg WASM | Flash Video |
| WMV | `.wmv` | FFmpeg WASM | Windows Media Video |
| 3GP | `.3gp` | FFmpeg WASM | Vidéo mobile |
| MPEG | `.mpeg`, `.mpg` | FFmpeg WASM | Ancien format de diffusion |

### Formats de sortie (Audio)

| Format | Options de qualité | Cas d'usage |
|---|---|---|
| **MP3** | 128 / 192 / 320 kbps | Compatibilité universelle, streaming, podcasts |
| **WAV** | PCM sans perte | Audio professionnel, importation DAW |
| **AAC** | 128 / 192 / 320 kbps | Appareils Apple, iTunes, meilleure compression que MP3 |
| **M4A** | 128 / 192 / 320 kbps | iTunes, Apple Music |
| **FLAC** | Sans perte | Archivage audiophile |
| **OGG** | 128 / 192 / 320 kbps | Format ouvert, excellente compression |
| **Opus** | 128 / 192 / 320 kbps | Meilleur ratio compression/qualité, VoIP |

---

## 🚀 Démarrage rapide

### Prérequis

- **Node.js** 20+
- **pnpm** 9+ (`npm install -g pnpm`)

### Installation

```bash
git clone https://github.com/rocnubie/video-to-audio-convertor.git
cd video-to-audio-convertor

pnpm install
# postinstall automatically copies @ffmpeg/core WASM into public/ffmpeg-core/
```

### Serveur de développement

```bash
pnpm dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) — l'application redirige automatiquement vers `/en/`.

> **Astuce :** Le premier chargement de FFmpeg WASM (~31 Mo) est lent. Les chargements suivants sont instantanés grâce à `Cache-Control: immutable`.

### Variables d'environnement

Copiez `.env.example` vers `.env.local` :

```bash
cp .env.example .env.local
```

| Variable | Description | Exemple |
|---|---|---|
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Le domaine de votre site Plausible | `videotoaudioconverter.org` |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` | URL du script Plausible | `https://plausible.io/js/script.tagged-events.outbound-links.js` |

Laissez ces variables vides en développement — l'analytique sera simplement ignorée.

---

## 🏗️ Stack technique

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

### Pourquoi ces choix ?

**Export statique Next.js** — Le site complet est pré-rendu en fichiers HTML/JS/CSS plats. Aucun serveur Node.js en production. Cloudflare Pages sert tout depuis l'edge.

**MediaBunny plutôt que FFmpeg en premier** — Pour MP4/MOV/MKV/WebM (la grande majorité des conversions), MediaBunny utilise les WebCodecs natifs du navigateur et est 5 à 10× plus rapide que FFmpeg WASM, sans pénalité de démarrage à froid.

**FFmpeg WASM mono-thread** — Le FFmpeg multi-thread requiert `SharedArrayBuffer`, qui requiert `Cross-Origin-Opener-Policy: same-origin` et `Cross-Origin-Embedder-Policy: require-corp`. Ces en-têtes cassent les scripts tiers (analytique, polices, publicités). Le mono-thread évite tout cela.

**Tailwind v4 + OKLCH** — Le design system utilise l'espace colorimétrique OKLCH pour des accents teal/cyan perceptuellement uniformes, qui s'affichent correctement en mode clair comme en mode sombre, sans surcharge manuelle du mode sombre par composant.

---

## 📁 Structure des fichiers

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

Le site utilise [next-intl 4](https://next-intl-docs.vercel.app/) avec des routes préfixées par locale (`/en/`, `/fr/`).

### Ajouter une nouvelle langue

1. **Enregistrez la locale** dans `i18n/routing.ts` :

   ```ts
   export const routing = defineRouting({
     locales: ['en', 'fr', 'de'],  // add 'de'
     defaultLocale: 'en',
   });
   ```

2. **Créez les messages partagés** à `i18n/messages/de.json` (copiez `en.json` et traduisez).

3. **Créez les messages par page** pour chaque espace de noms :

   ```
   i18n/pages/home/de.json
   i18n/pages/mp4-to-mp3/de.json
   … etc.
   ```

4. **Ajoutez les métadonnées de la locale** dans `i18n/locale.ts` :

   ```ts
   de: { nativeName: 'Deutsch', englishName: 'German' },
   ```

5. `sitemap.ts` et `generateStaticParams()` détectent automatiquement la nouvelle locale — aucune autre modification requise.

---

## 📊 Analytique

Le site utilise [Plausible Analytics](https://plausible.io/) — sans cookie, conforme RGPD, aucune donnée personnelle collectée.

### Événements personnalisés

Tous les événements sont typés dans [`lib/analytics.ts`](lib/analytics.ts) :

| Événement | Propriétés | Déclenchement |
|---|---|---|
| `file_selected` | `ext`, `size_mb`, `engine_hint` | L'utilisateur dépose ou sélectionne un fichier vidéo |
| `conversion_started` | `from_ext`, `to_format`, `quality` | Le bouton Convertir est cliqué |
| `conversion_completed` | `from_ext`, `to_format`, `engine`, `duration_s` | Le blob audio est prêt |
| `conversion_failed` | `from_ext`, `to_format`, `reason` | Le moteur lève une erreur |
| `conversion_cancelled` | `from_ext`, `to_format` | L'utilisateur annule en cours de conversion |
| `download_clicked` | `format` | Le bouton de téléchargement est cliqué |

Ces événements vous donnent une vue d'ensemble complète des chemins de conversion vidéo en audio les plus populaires.

---

## 📦 Build & Déploiement

### Build local

```bash
pnpm build       # static export → out/
npx serve out    # preview locally
```

La sortie de build est un répertoire de fichiers plats — aucun serveur requis.

### Déploiement sur Cloudflare Pages

1. **Connectez votre dépôt** dans le tableau de bord Cloudflare Pages.

2. **Paramètres de build :**

   | Paramètre | Valeur |
   |---|---|
   | Commande de build | `pnpm build` |
   | Répertoire de sortie | `out` |
   | Version de Node.js | `20` |

3. **Variables d'environnement** (Production + Preview) :

   ```
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=videotoaudioconverter.org
   NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL=https://plausible.io/js/script.tagged-events.outbound-links.js
   ```

4. **Domaine personnalisé :** Ajoutez `videotoaudioconverter.org` et laissez le DNS de Cloudflare gérer le routage.

### Stratégie de mise en cache

| Ressource | Cache-Control | Pourquoi |
|---|---|---|
| `/ffmpeg-core/*` | `immutable, max-age=31536000` | Adressé par contenu ; ne change jamais |
| `/_next/static/*` | `immutable, max-age=31536000` | Next.js hache le nom des fichiers selon le contenu |
| `/og.png`, `/favicon.ico` | `max-age=604800` | Rarement mis à jour |
| Pages HTML | Pas de cache / en-têtes de sécurité | Toujours fraîches, protègent les utilisateurs |

---

## ➕ Ajouter une nouvelle page de format

Pour ajouter une nouvelle page d'atterrissage de conversion **vidéo en audio** (par exemple, `flv-to-mp3`) :

1. **Ajoutez dans `lib/content/format-pages.ts` :**

   ```ts
   {
     slug: 'flv-to-mp3',
     messageKey: 'flvToMp3',
     outputFormat: 'mp3',
     highlightedInputs: ['flv'],
     useCaseImages: ['https://images.unsplash.com/…'],
   }
   ```

2. **Créez le fichier de la page :**

   ```ts
   // app/[locale]/flv-to-mp3/page.tsx
   import { FormatLandingPage } from '@/components/landing/FormatLandingPage'
   import { getFormatPage } from '@/lib/content/format-pages'

   const config = getFormatPage('flv-to-mp3')!

   export default function Page() {
     return <FormatLandingPage config={config} />
   }
   ```

3. **Ajoutez les traductions :**

   ```
   i18n/pages/flv-to-mp3/en.json
   i18n/pages/flv-to-mp3/fr.json
   ```

4. La page est **automatiquement incluse** dans `sitemap.ts` — aucune autre modification nécessaire.

> **Note SEO :** Chaque page de format doit avoir un contenu unique. Google pénalise les pages satellites au contenu quasi dupliqué.

---

## 🛡️ Confidentialité et sécurité

<p align="center">
  <a href="https://videotoaudioconverter.org/fr/privacy">
    <img src="https://videotoaudioconverter.org/screenshots/04-privacy-story.webp" alt="Privacy-first video to audio converter — DevTools-provable zero uploads, runs offline after first page load, no retention no logs, cookieless analytics, GDPR safe" width="900" />
  </a>
</p>


- **Aucun téléversement de fichiers** — la conversion s'exécute entièrement dans le navigateur via WebCodecs / FFmpeg WASM
- **Aucun cookie** — Plausible est sans cookie ; aucune bannière de consentement nécessaire
- **Aucun localStorage** — rien n'est persisté entre les sessions
- **Aucune dépendance CDN à l'exécution** — le shim JS FFmpeg est auto-hébergé ; seul le binaire WASM est chargé depuis `unpkg` et mis en cache à vie après le premier chargement
- **En-têtes de sécurité sur chaque page HTML :**
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`

---

## 🤝 Contribuer

Les contributions sont les bienvenues. Les axes les plus impactants sont :

- **Nouvelles traductions** — Copiez `i18n/messages/en.json`, traduisez, ouvrez une PR
- **Nouvelles pages d'atterrissage de format** — Suivez le guide ci-dessus ; apportez un contenu unique
- **Améliorations du moteur** — Meilleur reporting de progression, codecs de sortie supplémentaires
- **UI / accessibilité** — Conformité WCAG AA, navigation au clavier

Veuillez ouvrir une issue avant de commencer de gros changements afin que nous puissions discuter de la direction.

---

## 🔍 Ce que ce projet résout (référence mots-clés et cas d'usage)

**[VideoToAudioConverter.org](https://videotoaudioconverter.org)** est conçu pour être la réponse définitive à toute personne cherchant un **convertisseur vidéo en audio en ligne gratuit** respectueux de la vie privée. Vous trouverez ci-dessous la carte complète des intentions de conversion et des requêtes de recherche que nous servons.

### Toutes les paires de conversion prises en charge

Chaque cellule est un chemin de conversion explicite et indexable. Déposez un fichier du format de la ligne et choisissez le format de la colonne — voilà la conversion.

| Entrée ↓ / Sortie → | MP3 | WAV | M4A | AAC | FLAC | OGG | Opus |
|---|---|---|---|---|---|---|---|
| **MP4** | [mp4 to mp3](https://videotoaudioconverter.org/fr/mp4-to-mp3) | mp4 to wav | mp4 to m4a | mp4 to aac | mp4 to flac | mp4 to ogg | mp4 to opus |
| **MOV** | [mov to mp3](https://videotoaudioconverter.org/fr/mov-to-mp3) | mov to wav | mov to m4a | mov to aac | mov to flac | mov to ogg | mov to opus |
| **MKV** | [mkv to mp3](https://videotoaudioconverter.org/fr/mkv-to-mp3) | mkv to wav | mkv to m4a | mkv to aac | mkv to flac | mkv to ogg | mkv to opus |
| **WebM** | [webm to mp3](https://videotoaudioconverter.org/fr/webm-to-mp3) | webm to wav | webm to m4a | webm to aac | webm to flac | webm to ogg | webm to opus |
| **AVI** | [avi to mp3](https://videotoaudioconverter.org/fr/avi-to-mp3) | avi to wav | avi to m4a | avi to aac | avi to flac | avi to ogg | avi to opus |
| **FLV** | flv to mp3 | flv to wav | flv to m4a | flv to aac | flv to flac | flv to ogg | flv to opus |
| **WMV** | wmv to mp3 | wmv to wav | wmv to m4a | wmv to aac | wmv to flac | wmv to ogg | wmv to opus |
| **3GP** | 3gp to mp3 | 3gp to wav | 3gp to m4a | 3gp to aac | 3gp to flac | 3gp to ogg | 3gp to opus |
| **MPEG** | mpeg to mp3 | mpeg to wav | mpeg to m4a | mpeg to aac | mpeg to flac | mpeg to ogg | mpeg to opus |
| **M4V** | m4v to mp3 | m4v to wav | m4v to m4a | m4v to aac | m4v to flac | m4v to ogg | m4v to opus |

> **63 chemins de conversion pris en charge**, chacun accessible depuis le même widget convertisseur sur **[videotoaudioconverter.org](https://videotoaudioconverter.org)**. Pages d'atterrissage dédiées : [MP4 → MP3](https://videotoaudioconverter.org/fr/mp4-to-mp3) · [MOV → MP3](https://videotoaudioconverter.org/fr/mov-to-mp3) · [MKV → MP3](https://videotoaudioconverter.org/fr/mkv-to-mp3) · [WebM → MP3](https://videotoaudioconverter.org/fr/webm-to-mp3) · [AVI → MP3](https://videotoaudioconverter.org/fr/avi-to-mp3). Toutes les autres paires sont débloquées via le sélecteur de format de sortie.

---

## 🎯 Qui utilise un convertisseur vidéo en audio ? (Cas d'usage)

<p align="center">
  <a href="https://videotoaudioconverter.org/fr/">
    <img src="https://videotoaudioconverter.org/screenshots/02-use-cases.webp" alt="Video to audio converter use cases — podcast and interview recordings, online classes and lecture archives, iPhone and Android screen recordings, movie clips and archive footage" width="900" />
  </a>
</p>


Les gens cherchent un **convertisseur vidéo en audio** pour des raisons très différentes. Nous avons optimisé l'interface, les textes et les pages d'atterrissage autour de ces scénarios. Vous pouvez tous les essayer sur **[videotoaudioconverter.org](https://videotoaudioconverter.org)**.

### 🎙️ Podcasteurs et producteurs audio

- **[Convertissez des enregistrements vidéo en MP3](https://videotoaudioconverter.org/fr/mp4-to-mp3)** pour la distribution de podcasts (Spotify, Apple Podcasts, RSS).
- Extrayez l'audio d'un **enregistrement Zoom**, d'un **enregistrement Google Meet**, d'un **enregistrement Microsoft Teams**, d'un **enregistrement Riverside** ou d'un **enregistrement d'écran OBS**.
- Supprimez la piste visuelle d'un **MP4 d'interview** et livrez uniquement l'audio.
- Convertissez **vidéo en WAV** ou en **FLAC** pour l'édition dans Audacity, Adobe Audition, Logic Pro, GarageBand, Reaper ou Pro Tools.

### 🎓 Étudiants et enseignants

- Convertissez des **enregistrements de cours en MP3** pour les écouter sur n'importe quel téléphone pendant les trajets — essayez [videotoaudioconverter.org](https://videotoaudioconverter.org).
- Extrayez l'audio des **enregistrements de cours Zoom**, des **vidéos Kahoot**, des **téléchargements Khan Academy** ou des **conférences**.
- Transformez un **[enregistrement MOV](https://videotoaudioconverter.org/fr/mov-to-mp3)** de QuickTime en un **M4A** portable pour iPhone.
- Obtenez l'audio des **téléchargements YouTube que vous possédez déjà** pour révision hors ligne (veuillez respecter le droit d'auteur).

### 📱 Utilisateurs mobiles et de réseaux sociaux

- **TikTok en MP3** — extrayez un clip sonore d'un export TikTok sur [videotoaudioconverter.org](https://videotoaudioconverter.org).
- **Reel Instagram en audio** — extrayez l'audio d'un Reel téléchargé.
- **Vidéo WhatsApp en MP3** — convertissez un message vidéo transféré en audio.
- **Vidéo iPhone en MP3** — transformez les enregistrements `.MOV` / `.M4V` de Photos en MP3 ; utilisez notre page **[MOV en MP3](https://videotoaudioconverter.org/fr/mov-to-mp3)**.
- **Vidéo Android en MP3** — extrayez l'audio des enregistrements MP4 ; utilisez notre page **[MP4 en MP3](https://videotoaudioconverter.org/fr/mp4-to-mp3)**.

### 🎵 Passionnés de musique et de médias

- **[Convertissez un clip musical en MP3](https://videotoaudioconverter.org/fr/mp4-to-mp3)** pour l'écoute hors ligne (sur des fichiers que vous possédez ou pour lesquels vous avez les droits).
- Extrayez l'audio d'un **enregistrement de concert** ou d'une **vidéo de répétition**.
- Tirez une **bande son** d'une vidéo pour le remixage, l'échantillonnage ou les sets DJ.
- Archivez les pistes audio de vos vidéos en **FLAC sans perte** via [videotoaudioconverter.org](https://videotoaudioconverter.org).

### 💼 Professionnels et travailleurs du savoir

- **[Convertissez un enregistrement de réunion en MP3](https://videotoaudioconverter.org/fr/mp4-to-mp3)** pour la transcription avec Otter.ai, Rev, Descript, Whisper ou les outils de transcription de Google.
- Extrayez l'audio d'un **webinaire** ou d'une **réunion d'entreprise** pour l'accessibilité ou l'archivage.
- Tirez l'audio d'une **vidéo de formation** pour l'envoyer à un service de transcription.
- Économisez la bande passante en partageant des **versions audio seules** des réunions — le tout sur [videotoaudioconverter.org](https://videotoaudioconverter.org).

### 🎬 Monteurs vidéo et créateurs de contenu

- Séparez l'audio de la vidéo pour un **montage multi-pistes** dans Premiere Pro, DaVinci Resolve, Final Cut, CapCut ou VN Editor — utilisez [videotoaudioconverter.org](https://videotoaudioconverter.org) avant l'import.
- Remplacez la piste audio d'une vidéo en **[extrayant d'abord l'original avec notre convertisseur MKV](https://videotoaudioconverter.org/fr/mkv-to-mp3)**.
- Générez des **aperçus audio seulement** pour les clients avant de livrer la vidéo finale.

### 🔒 Utilisateurs soucieux de la confidentialité

- Convertissez des fichiers **sans téléverser** vers un serveur tiers — **[essayez sur videotoaudioconverter.org](https://videotoaudioconverter.org)**.
- Traitez des **interviews confidentielles**, des **dépositions juridiques**, des **enregistrements médicaux**, des **sources journalistiques** sans jamais quitter l'appareil.
- Utilisez le convertisseur **hors ligne** après le premier chargement de page (fonctionne dans un avion ou dans un SCIF).
- Évitez les convertisseurs qui exigent une **inscription par e-mail**, la **création d'un compte** ou des **abonnements payants**. Consultez notre [Politique de confidentialité](https://videotoaudioconverter.org/fr/privacy) pour plus de détails.

---

## ❓ Questions fréquentes (réponses)

<p align="center">
  <a href="https://videotoaudioconverter.org/fr/#faq">
    <img src="https://videotoaudioconverter.org/screenshots/05-faq.webp" alt="Video to audio converter FAQ — supported input formats MP4 MOV MKV WebM AVI, output codecs MP3 WAV AAC M4A FLAC OGG Opus, file size limits, iPhone iPad Android Mac Windows support" width="900" />
  </a>
</p>


Voici les questions de longue traîne que les gens tapent sur Google lorsqu'ils cherchent un convertisseur vidéo en audio. Chacune trouve sa réponse dans la FAQ de la [page d'accueil](https://videotoaudioconverter.org) et dans les pages d'atterrissage par format.

### Comment convertir MP4 en MP3 gratuitement en ligne ?
Rendez-vous sur **[videotoaudioconverter.org/fr/mp4-to-mp3](https://videotoaudioconverter.org/fr/mp4-to-mp3)**, déposez votre fichier MP4, choisissez « MP3 » comme format de sortie, cliquez sur Convertir et téléchargez le fichier. Pas de téléversement, pas d'inscription, pas de filigrane, pas de limite de taille de fichier.

### Comment extraire l'audio d'une vidéo sans la téléverser ?
Utilisez un **convertisseur vidéo en audio côté client** comme **[VideoToAudioConverter.org](https://videotoaudioconverter.org)**. La conversion s'exécute dans votre navigateur via WebCodecs et FFmpeg WASM — le fichier ne touche jamais un serveur.

### Quel est le meilleur convertisseur vidéo en audio gratuit qui ne téléverse rien ?
Un convertisseur dans le navigateur utilisant WebCodecs ou FFmpeg WASM est la seule catégorie qui ne téléverse vraiment rien. **[VideoToAudioConverter.org](https://videotoaudioconverter.org)** est open source pour que vous puissiez vérifier cette affirmation.

### Comment convertir MOV en MP3 sur un Mac sans iTunes ?
Ouvrez **[videotoaudioconverter.org/fr/mov-to-mp3](https://videotoaudioconverter.org/fr/mov-to-mp3)** dans Safari ou Chrome, glissez le fichier `.MOV` depuis le Finder vers la zone de dépôt, choisissez « MP3 », téléchargez. Fonctionne sur n'importe quelle version de macOS, sans iTunes ni l'app Musique.

### Comment convertir MKV en MP3 sans installer de logiciel ?
Ouvrez **[videotoaudioconverter.org/fr/mkv-to-mp3](https://videotoaudioconverter.org/fr/mkv-to-mp3)**, déposez le MKV, choisissez MP3, cliquez sur Convertir. Pas de VLC, pas de HandBrake, pas de ligne de commande nécessaire.

### Comment extraire l'audio d'un fichier WebM ?
Rendez-vous sur **[videotoaudioconverter.org/fr/webm-to-mp3](https://videotoaudioconverter.org/fr/webm-to-mp3)**. WebM utilise Opus ou Vorbis en interne pour l'audio — choisissez Opus (pour la qualité native passthrough), MP3 (pour la compatibilité) ou WAV (pour l'édition).

### Comment convertir AVI en MP3 en 2026 ?
AVI est un format Windows hérité. Ouvrez **[videotoaudioconverter.org/fr/avi-to-mp3](https://videotoaudioconverter.org/fr/avi-to-mp3)** — notre moteur de secours FFmpeg WASM gère AVI nativement. Déposez le fichier, choisissez MP3, c'est fait. Aucune installation du codec DivX requise.

### Comment convertir une vidéo en MP3 320 kbps ?
Sur **[videotoaudioconverter.org](https://videotoaudioconverter.org)**, choisissez le préréglage de qualité « Haute » — il encode le MP3 à 320 kbps (la qualité maximale pour MP3).

### Comment extraire l'audio d'une vidéo en WAV (sans perte) ?
Ouvrez **[videotoaudioconverter.org](https://videotoaudioconverter.org)** et choisissez « WAV » comme format de sortie. Le WAV est du PCM non compressé — idéal pour l'édition dans une DAW.

### Comment extraire l'audio d'une vidéo iPhone ?
Les vidéos iPhone sont généralement en `.MOV` (H.264 + AAC) ou `.MP4`. Ouvrez **[videotoaudioconverter.org/fr/mov-to-mp3](https://videotoaudioconverter.org/fr/mov-to-mp3)**, déposez le fichier depuis Photos / Fichiers, choisissez MP3 ou M4A, téléchargez.

### Est-il légal de convertir une vidéo en audio ?
Convertir des fichiers que vous possédez ou pour lesquels vous avez les droits est légal dans la plupart des juridictions. N'utilisez pas cet outil pour contourner les DRM, scraper des services de streaming payants ou violer les droits d'auteur. Nous ne sommes pas un téléchargeur YouTube.

### Le convertisseur fonctionne-t-il hors ligne ?
Après le premier chargement de page sur **[videotoaudioconverter.org](https://videotoaudioconverter.org)**, oui. Le binaire FFmpeg WASM est mis en cache pendant un an. Vous pouvez passer en mode avion et continuer à convertir des fichiers.

---

## 🏆 Comment VideoToAudioConverter.org se compare

<p align="center">
  <a href="https://videotoaudioconverter.org/fr/">
    <img src="https://videotoaudioconverter.org/screenshots/03-comparison.webp" alt="Free video to audio converter comparison table — VideoToAudioConverter.org versus CloudConvert, Zamzar, 123apps, Convertio. No upload, no file size cap, unlimited daily conversions, no signup, no ads, MIT open source" width="900" />
  </a>
</p>

| Capacité | [VideoToAudioConverter.org](https://videotoaudioconverter.org) | FreeConvert | Convertio | OnlineAudioConverter | CloudConvert |
|---|---|---|---|---|---|
| **Gratuit** | ✅ Pour toujours | ✅ Limité | ✅ Limité | ✅ Limité | ✅ Limité |
| **Pas de téléversement (côté client)** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Pas de limite de taille** | ✅ | ❌ 1 Go | ❌ 100 Mo | ❌ 2 Go | ❌ 1 Go |
| **Sans inscription** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Sans publicité** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Fonctionne hors ligne** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Open source** | ✅ MIT | ❌ | ❌ | ❌ | ❌ |
| **Conversions illimitées / jour** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Conforme RGPD par conception** | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |

> La comparaison reflète les tarifs et restrictions de fonctionnalités annoncés publiquement en 2026. Vérifiez les limites actuelles sur le site de chaque fournisseur.

---

## 🗣️ Couverture multilingue

Le même convertisseur, localisé pour les audiences mondiales. Chaque version traduite est une surface SEO entièrement séparée :

| Locale | Préfixe URL | Phrase traduite pour « video to audio converter » |
|---|---|---|
| 🇬🇧 Anglais | [`/en/`](https://videotoaudioconverter.org/en/) | video to audio converter |
| 🇫🇷 Français | [`/fr/`](https://videotoaudioconverter.org/fr/) | convertisseur vidéo en audio |
| 🇪🇸 Espagnol | `/es/` *(prévu)* | convertidor de video a audio |
| 🇩🇪 Allemand | `/de/` *(prévu)* | Video zu Audio Konverter |
| 🇮🇹 Italien | `/it/` *(prévu)* | convertitore da video ad audio |
| 🇵🇹 Portugais | `/pt/` *(prévu)* | conversor de vídeo para áudio |
| 🇨🇳 Chinois (simplifié) | `/zh/` *(prévu)* | 视频转音频转换器 |
| 🇯🇵 Japonais | `/ja/` *(prévu)* | 動画から音声に変換 |
| 🇰🇷 Coréen | `/ko/` *(prévu)* | 비디오를 오디오로 변환 |
| 🇷🇺 Russe | `/ru/` *(prévu)* | конвертер видео в аудио |
| 🇸🇦 Arabe | `/ar/` *(prévu)* | محول فيديو إلى صوت |
| 🇮🇳 Hindi | `/hi/` *(prévu)* | वीडियो को ऑडियो में बदलें |
| 🇮🇩 Indonésien | `/id/` *(prévu)* | konverter video ke audio |
| 🇹🇷 Turc | `/tr/` *(prévu)* | video ses dönüştürücü |
| 🇻🇳 Vietnamien | `/vi/` *(prévu)* | chuyển video sang âm thanh |

Ajouter une locale prend environ 30 minutes une fois les traductions prêtes — voir [Internationalisation](#-internationalisation) ci-dessus. La page d'accueil anglaise en ligne se trouve à [videotoaudioconverter.org/en/](https://videotoaudioconverter.org/en/) et la version française à [videotoaudioconverter.org/fr/](https://videotoaudioconverter.org/fr/).

---

## 📚 Glossaire — Formats audio et vidéo expliqués

Une référence pour les utilisateurs qui cherchent par exemple « quelle est la différence entre MP3 et M4A » ou « quel format audio est le meilleur pour les podcasts ».

### Formats de sortie (Audio)

- **MP3** — Le format audio universel. Compression avec perte. 128 kbps = correct, 192 kbps = bon, 320 kbps = excellent. Se lit littéralement sur tous les appareils fabriqués depuis 1998. À utiliser pour : podcasts, streaming, partage.
- **WAV** — Audio PCM non compressé. Fichiers énormes (~10 Mo par minute) mais parfaits au bit près. À utiliser pour : édition en DAW, mastering, sources d'archivage.
- **M4A** — Conteneur audio MPEG-4, contenant généralement de l'AAC. Même qualité que MP3 à des débits inférieurs. À utiliser pour : écosystème iTunes / Apple Music, sonneries iPhone.
- **AAC** — Advanced Audio Coding. Meilleure qualité que MP3 au même débit. Standard pour YouTube, Apple, la diffusion moderne. À utiliser pour : partout où le MP3 fonctionne, quand vous voulez une meilleure qualité.
- **FLAC** — Free Lossless Audio Codec. Compresse sans perte de qualité, ~50 % de la taille du WAV. À utiliser pour : archivage audiophile, collections de musique haute résolution.
- **OGG (Vorbis)** — Format avec perte open source. Meilleure qualité que MP3 au même débit. À utiliser pour : écosystèmes open source, jeux, web.
- **Opus** — Le codec avec perte le plus moderne. Écrase MP3 / AAC / Vorbis à bas débit. À utiliser pour : voix (podcasts, VoIP), audio à faible bande passante, WebRTC.

### Formats d'entrée (Vidéo)

- **MP4** — Vidéo H.264 / H.265 + audio AAC dans un conteneur MPEG-4. Le format par défaut pour presque tout : téléchargements YouTube, enregistrements de téléphone, captures d'écran.
- **MOV** — Conteneur Apple QuickTime. Courant depuis iPhone, Mac, ScreenFlow, Final Cut.
- **MKV** — Matroska. Conteneur ouvert pouvant contenir n'importe quel codec. Courant pour les téléchargements vidéo haute qualité, l'animation, les rips Blu-ray.
- **WebM** — Conteneur ouvert soutenu par Google. Vidéo VP8 / VP9 / AV1 + audio Opus / Vorbis. Standard pour la vidéo web (téléchargements YouTube en WebM, WhatsApp Web).
- **AVI** — Audio Video Interleave. Format Microsoft hérité des années 90, encore courant dans les anciennes archives et les exports de logiciels Windows uniquement.
- **FLV** — Flash Video. Format Adobe Flash hérité. Rare aujourd'hui mais encore présent dans d'anciens téléchargements.
- **WMV** — Windows Media Video. Format propriétaire Microsoft, courant depuis les anciens exports Windows Movie Maker / PowerPoint.
- **3GP** — Conteneur mobile de l'ère pré-smartphone. Encore produit par certains téléphones basiques et anciens caméscopes.
- **MPEG (MPG)** — Le format vidéo MPEG-1 / MPEG-2 original. Utilisé pour les vieux DVD et les diffusions TV.

---

## 🧭 Intentions de recherche que nous couvrons

Liste non exhaustive des requêtes de recherche pour lesquelles ce site est conçu pour se positionner. Nous indexons chacune comme contenu principal quelque part sur le site (page d'accueil, pages de format, FAQ, ou ce README).

<details>
<summary><strong>🔹 Termes principaux (gros volume)</strong></summary>

convertisseur vidéo en audio · convertisseur vidéo mp3 · vidéo en mp3 · convertir vidéo en mp3 · mp4 en mp3 · mov en mp3 · mkv en mp3 · webm en mp3 · avi en mp3 · extraire audio d'une vidéo · convertisseur gratuit · convertisseur vidéo en ligne · vidéo en mp3 sans téléversement · extracteur audio en ligne · convertir vidéo mp3 gratuit · convertisseur vidéo navigateur · convertisseur côté client · 320 kbps mp3 · qualité haute mp3 · convertisseur sans perte · vidéo en wav · vidéo en flac · iPhone vidéo en mp3 · Android vidéo en mp3 · Mac vidéo en mp3 · enregistrement Zoom en mp3 · TikTok en mp3 · enregistrement écran en mp3 · réunion en mp3 · cours enregistré en mp3 · sans inscription · sans filigrane · sans publicité · convertisseur respectueux de la vie privée · conforme RGPD

</details>

<details>
<summary><strong>🔹 Conversions par paire de formats (longue traîne, forte intention)</strong></summary>

mp4 to mp3 · mp4 to wav · mp4 to m4a · mp4 to aac · mp4 to flac · mp4 to ogg · mp4 to opus · mov to mp3 · mov to wav · mov to m4a · mov to aac · mkv to mp3 · mkv to wav · mkv to flac · mkv to aac · webm to mp3 · webm to ogg · webm to opus · webm to wav · avi to mp3 · avi to wav · flv to mp3 · wmv to mp3 · 3gp to mp3 · mpeg to mp3 · m4v to mp3

</details>

<details>
<summary><strong>🔹 Modificateurs qualité / débit binaire</strong></summary>

convertisseur mp3 320 kbps · vidéo en mp3 haute qualité · vidéo en audio sans perte · vidéo en flac · extracteur audio HD · extracteur wav qualité CD · mp3 192 kbps · mp3 128 kbps · meilleure qualité vidéo en mp3 · convertir vidéo en audio haute qualité

</details>

<details>
<summary><strong>🔹 Modificateurs confidentialité et confiance</strong></summary>

vidéo en mp3 sans téléversement · convertisseur vidéo sans téléversement · vidéo en mp3 côté client · convertisseur vidéo basé navigateur · vidéo en audio hors ligne · vidéo en mp3 privé · convertisseur vidéo sécurisé · vidéo en mp3 sans inscription · extracteur audio sans inscription · vidéo en mp3 sans filigrane · convertisseur vidéo sans publicité · convertisseur vidéo conforme RGPD · vidéo en mp3 sans téléverser le fichier · convertisseur vidéo en audio open source

</details>

<details>
<summary><strong>🔹 Modificateurs appareil / plateforme</strong></summary>

iphone vidéo en mp3 · android vidéo en mp3 · mac vidéo en mp3 · windows vidéo en mp3 · linux vidéo en mp3 · chromebook vidéo en mp3 · ipad vidéo en audio · safari vidéo en mp3 · chrome vidéo en mp3 · firefox vidéo en mp3 · edge vidéo en mp3 · ios convertisseur vidéo en mp3

</details>

<details>
<summary><strong>🔹 Intention par source (fichiers personnels uniquement — nous ne sommes pas un téléchargeur YouTube)</strong></summary>

enregistrement zoom en mp3 · enregistrement google meet en mp3 · enregistrement teams en mp3 · enregistrement d'écran en mp3 · enregistrement obs en mp3 · vidéo tiktok en mp3 · reel instagram en mp3 · vidéo whatsapp en mp3 · enregistrement écran iphone en mp3 · enregistrement webinaire en audio · vidéo d'interview en mp3 · vidéo podcast en mp3 · enregistrement de cours en mp3

</details>

<details>
<summary><strong>🔹 Comment faire — longue traîne (FAQ / extraits enrichis)</strong></summary>

comment convertir mp4 en mp3 · comment extraire l'audio d'une vidéo · comment convertir une vidéo en mp3 gratuitement · comment convertir une vidéo en mp3 sans logiciel · comment obtenir le son d'une vidéo · comment extraire l'audio d'un fichier vidéo · comment convertir mov en mp3 sur mac · comment convertir mkv en mp3 · comment extraire l'audio d'un webm · comment convertir avi en mp3 en 2026 · comment convertir une vidéo en mp3 sur iphone · comment convertir une vidéo en mp3 sur android · comment convertir une vidéo en mp3 hors ligne · comment convertir une vidéo en mp3 320 kbps · comment convertir une vidéo en wav · comment extraire l'audio d'une vidéo sans téléverser

</details>

<details>
<summary><strong>🔹 Comparaison / alternative</strong></summary>

alternative freeconvert · alternative convertio · alternative cloudconvert · alternative onlineaudioconverter · alternative ytmp3 · alternative zamzar · meilleur convertisseur vidéo en audio gratuit · meilleur convertisseur vidéo en mp3 navigateur · meilleur convertisseur vidéo privé · alternative open source à convertio

</details>

<details>
<summary><strong>🔹 Multilingue</strong></summary>

convertisseur vidéo en audio · convertisseur vidéo en mp3 · extraire le son d'une vidéo · extraire la bande audio · convertisseur audio en ligne · vidéo vers mp3 · transformer vidéo en mp3 · convertidor de video a audio · video zu audio konverter · conversor de vídeo para áudio · convertitore video audio · 视频转音频 · 視頻轉音頻 · 動画 音声 変換 · 비디오 오디오 변환 · конвертер видео в аудио · محول فيديو إلى صوت · वीडियो को ऑडियो में बदलें · konverter video ke audio · video ses dönüştürücü · chuyển video sang âm thanh

</details>

---

## 🌟 En résumé

Si vous cherchez un **convertisseur vidéo en audio en ligne gratuit** qui :

- ✅ Convertit **[MP4 en MP3](https://videotoaudioconverter.org/fr/mp4-to-mp3)**, **[MOV en MP3](https://videotoaudioconverter.org/fr/mov-to-mp3)**, **[MKV en MP3](https://videotoaudioconverter.org/fr/mkv-to-mp3)**, **[WebM en MP3](https://videotoaudioconverter.org/fr/webm-to-mp3)**, **[AVI en MP3](https://videotoaudioconverter.org/fr/avi-to-mp3)** et 58 autres paires de conversion
- ✅ Fonctionne **à 100 % dans votre navigateur** avec **zéro téléversement** et **zéro suivi**
- ✅ N'a **aucune limite de taille de fichier**, **aucune inscription**, **aucune publicité**, **aucun filigrane**
- ✅ Prend en charge la sortie **MP3, WAV, M4A, AAC, FLAC, OGG, Opus** jusqu'à **320 kbps** ou en **sans perte**
- ✅ Fonctionne sur **Mac, Windows, Linux, Chromebook, iPhone, iPad, Android**
- ✅ Est **open source**, **conforme RGPD** et fonctionne **hors ligne** après le premier chargement

— alors mettez **[videotoaudioconverter.org](https://videotoaudioconverter.org)** en favoris et donnez une étoile à ce dépôt. ⭐

---

## 📄 Licence

- **Code source :** [MIT](LICENSE)
- **FFmpeg :** [LGPL 2.1](https://ffmpeg.org/legal.html) (lié dynamiquement via WASM)
- **MediaBunny :** MIT
- **shadcn/ui :** MIT

---

<p align="center">
  Construit avec ❤️ · Hébergé sur <a href="https://pages.cloudflare.com/">Cloudflare Pages</a> · Analytique par <a href="https://plausible.io/">Plausible</a>
</p>

<p align="center">
  <sub>
    Mots-clés : convertisseur vidéo en audio · convertisseur vidéo mp3 · mp4 en mp3 · mov en mp3 · mkv en mp3 · webm en mp3 · avi en mp3 · extraire audio d'une vidéo · extracteur audio · gratuit en ligne · sans téléversement · côté client · open source · WebCodecs · FFmpeg WASM
  </sub>
</p>
