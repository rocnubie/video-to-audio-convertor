<p align="center">
  <img src="app/icon.svg" alt="VideoToAudioConverter Logo" width="80" height="80" />
</p>

<h1 align="center">VideoToAudioConverter.org</h1>

<p align="center">
  <a href="./README.md">English</a> ·
  <a href="./README.zh.md">简体中文</a> ·
  <strong>Español</strong> ·
  <a href="./README.ja.md">日本語</a> ·
  <a href="./README.ko.md">한국어</a> ·
  <a href="./README.de.md">Deutsch</a> ·
  <a href="./README.fr.md">Français</a> ·
  <a href="./README.pt.md">Português</a> ·
  <a href="./README.it.md">Italiano</a> ·
  <a href="./README.ar.md">العربية</a> ·
  <a href="./README.hi.md">हिन्दी</a>
</p>

<p align="center">
  <strong>El convertidor de vídeo a audio gratuito más rápido — 100% en tu navegador, sin subidas y sin rastreo.</strong>
</p>

<p align="center">
  <a href="https://videotoaudioconverter.org/es/"><img src="https://img.shields.io/badge/live-videotoaudioconverter.org-0ea5e9?style=flat-square&logo=cloudflare&logoColor=white" alt="Sitio en vivo" /></a>
  <img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/Tailwind-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind v4" />
  <img src="https://img.shields.io/badge/FFmpeg-WASM-007808?style=flat-square&logo=ffmpeg&logoColor=white" alt="FFmpeg WASM" />
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="Licencia MIT" />
</p>

<p align="center">
  <a href="https://videotoaudioconverter.org/es/">🌐 Demo en vivo</a> ·
  <a href="#-primeros-pasos">Inicio rápido</a> ·
  <a href="#-cómo-funciona">Cómo funciona</a> ·
  <a href="#-formatos-compatibles">Formatos</a> ·
  <a href="#-compilación-y-despliegue">Despliegue</a>
</p>

---

## ¿Qué es esto?

**[VideoToAudioConverter.org](https://videotoaudioconverter.org/es/)** es un **convertidor de vídeo a audio** de nivel producción y código abierto que funciona íntegramente dentro del navegador del usuario. Suelta un archivo de vídeo, elige un formato de audio, pulsa convertir — el audio se descarga al instante. Sin servidor, sin cuenta, sin límite de tamaño de archivo impuesto por un backend.

```
┌──────────────────────────────────────────────────────────────────┐
│                   Video to Audio Converter                       │
│                                                                  │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │  📂  Suelta MP4 / MOV / MKV / WebM / AVI …o haz clic   │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│   Formato de salida:  [MP3] [WAV] [AAC] [M4A] [FLAC] [OGG] [Opus]│
│   Calidad:        [Alta 320 kbps]  [Media 192 kbps]  [Baja 128] │
│                                                                  │
│   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░  68 %   Extrayendo audio …     │
│                                                                  │
│   ✅  output.mp3  (4.2 MB)   [ ⬇ Descargar ]                    │
│                                                                  │
│   🔒  Tu archivo nunca sale de tu dispositivo.                  │
└──────────────────────────────────────────────────────────────────┘
```

### ¿Por qué otro convertidor de vídeo a audio?

| Característica | VideoToAudioConverter.org | Convertidor online típico |
|---|---|---|
| Funciona 100% en el navegador | ✅ WebCodecs + FFmpeg WASM | ❌ Sube al servidor |
| Límite de tamaño de archivo | ✅ Ninguno (la RAM es el límite) | ❌ Tope de 50–500 MB |
| Privacidad / sin rastreo | ✅ Cero cookies, cero subidas | ❌ Archivos guardados en servidor |
| Funciona sin conexión (tras la primera carga) | ✅ WASM en caché permanente | ❌ Requiere Internet |
| Código abierto | ✅ MIT | ❌ Código cerrado |
| Sin anuncios | ✅ | ❌ Anuncios agresivos |
| Rápido (formatos modernos) | ✅ Velocidad nativa de WebCodecs | ❌ Cola de servidor |

---

## ✨ Características

### Convertidor principal

- **Arrastra y suelta** o haz clic para seleccionar cualquier archivo de vídeo
- **9 formatos de entrada** → MP4, MOV, MKV, WebM, AVI, FLV, WMV, 3GP, MPEG
- **7 formatos de salida** → MP3, WAV, M4A, AAC, FLAC, OGG, Opus
- **Preajustes de calidad** → Alta (320 kbps), Media (192 kbps), Baja (128 kbps), Sin pérdida
- **Barra de progreso en tiempo real** con etiquetas de fase (demux → decodificación → codificación → mux)
- **Descarga instantánea** — el blob de audio se sirve desde memoria, nunca toca un servidor

### Arquitectura centrada en la privacidad

```
Dispositivo del usuario
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  Archivo de vídeo ──▶ Motor del navegador ──▶ Audio    │
│  (disco local)        (WASM / JS)          (disco local)│
│                                                         │
│  ✗  Sin subida   ✗  Sin llamada al servidor  ✗  Sin almacenamiento │
└─────────────────────────────────────────────────────────┘
         │
         │ solo se envía un evento de analítica anónima
         ▼
   Plausible (sin cookies)
```

### Páginas de aterrizaje optimizadas para SEO por formato

Páginas de aterrizaje dedicadas y totalmente traducidas para cada par popular de conversión **vídeo a audio**:

| Página | URL en vivo |
|---|---|
| Convertidor MP4 a MP3 | [videotoaudioconverter.org/es/mp4-to-mp3](https://videotoaudioconverter.org/es/mp4-to-mp3) |
| Convertidor MOV a MP3 | [videotoaudioconverter.org/es/mov-to-mp3](https://videotoaudioconverter.org/es/mov-to-mp3) |
| Convertidor MKV a MP3 | [videotoaudioconverter.org/es/mkv-to-mp3](https://videotoaudioconverter.org/es/mkv-to-mp3) |
| Convertidor WebM a MP3 | [videotoaudioconverter.org/es/webm-to-mp3](https://videotoaudioconverter.org/es/webm-to-mp3) |
| Convertidor AVI a MP3 | [videotoaudioconverter.org/es/avi-to-mp3](https://videotoaudioconverter.org/es/avi-to-mp3) |

Cada página tiene textos únicos, esquemas JSON-LD (SoftwareApplication, HowTo, FAQPage) y etiquetas Open Graph — sin contenido duplicado.

### Internacionalización

- Inglés (`/en/`) y francés (`/fr/`) listos para usar
- Espacios de nombres de mensajes por página para una i18n profunda (no solo cadenas de UI)
- Infraestructura preparada para 15+ idiomas adicionales (zh, ja, ko, es, de, pt, it, ru, ar, hi, id, tr, vi …)

---

## 🔧 Cómo funciona

El convertidor está impulsado por una **arquitectura de motor dual** que selecciona automáticamente el motor más rápido disponible para cada archivo de entrada:

```
                 El usuario suelta un archivo de vídeo
                          │
                          ▼
              ┌───────────────────────┐
              │   pickEngineHint()    │
              │ (revisa la extensión) │
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
  │  Pipeline nativo  │         │  Bundle WASM de 30 MB │
  │  de códecs del    │         │  soporte completo de  │
  │  navegador        │         │  formatos             │
  │  ~10× más rápido  │         │  AVI/FLV/WMV/3GP etc  │
  └────────┬──────────┘         └──────────┬────────────┘
           │                               │
           └───────────────┬───────────────┘
                           │
                           ▼
                   Blob de audio (MP3/WAV/…)
                           │
                           ▼
                   El navegador descarga el archivo
```

### Detalles del motor

#### MediaBunny — Motor principal

[MediaBunny](https://github.com/nicktindall/mediabunny) envuelve la **API WebCodecs** nativa del navegador en un sencillo pipeline de transcodificación. Funciona en el hilo principal sin sobrecarga de WASM para los formatos compatibles.

- **Entradas compatibles:** MP4, M4V, MOV, QT, MKV, WebM
- **Velocidad:** Casi nativa — un MP4 de 1 hora puede convertirse en ~10 segundos en hardware moderno
- **Sin necesidad de cabeceras COOP/COEP** — funciona junto con scripts de terceros

#### FFmpeg WASM — Motor de respaldo

[@ffmpeg/ffmpeg](https://github.com/ffmpegwasm/ffmpeg.wasm) compila el binario completo de FFmpeg a WebAssembly. Se ejecuta en un solo hilo (sin requerir SharedArrayBuffer / COOP).

- **Entradas compatibles:** AVI, FLV, WMV, 3GP, MPEG y cualquier formato que MediaBunny no pueda manejar
- **Tamaño WASM:** ~31 MB (en caché mediante `Cache-Control: immutable, max-age=31536000`)
- **Shim JS auto-alojado** en `/ffmpeg-core/ffmpeg-core.js` para evitar dependencia de CDN

---

## 📂 Formatos compatibles

### Formatos de entrada (vídeo a audio)

| Formato | Extensión(es) | Motor | Notas |
|---|---|---|---|
| MP4 | `.mp4`, `.m4v` | MediaBunny | El formato de vídeo más común |
| MOV | `.mov`, `.qt` | MediaBunny | Apple QuickTime |
| MKV | `.mkv` | MediaBunny | Contenedor Matroska |
| WebM | `.webm` | MediaBunny | Nativo de la web (VP8/VP9/AV1) |
| AVI | `.avi` | FFmpeg WASM | Formato heredado de Windows |
| FLV | `.flv` | FFmpeg WASM | Flash Video |
| WMV | `.wmv` | FFmpeg WASM | Windows Media Video |
| 3GP | `.3gp` | FFmpeg WASM | Vídeo móvil |
| MPEG | `.mpeg`, `.mpg` | FFmpeg WASM | Formato antiguo de difusión |

### Formatos de salida (audio)

| Formato | Opciones de calidad | Caso de uso |
|---|---|---|
| **MP3** | 128 / 192 / 320 kbps | Compatibilidad universal, streaming, podcasts |
| **WAV** | PCM sin pérdida | Audio profesional, importación a DAW |
| **AAC** | 128 / 192 / 320 kbps | Dispositivos Apple, iTunes, mejor compresión que MP3 |
| **M4A** | 128 / 192 / 320 kbps | iTunes, Apple Music |
| **FLAC** | Sin pérdida | Archivo audiófilo |
| **OGG** | 128 / 192 / 320 kbps | Formato abierto, gran compresión |
| **Opus** | 128 / 192 / 320 kbps | Mejor relación compresión/calidad, VoIP |

---

## 🚀 Primeros pasos

### Requisitos previos

- **Node.js** 20+
- **pnpm** 9+ (`npm install -g pnpm`)

### Instalación

```bash
git clone https://github.com/rocnubie/video-to-audio-convertor.git
cd video-to-audio-convertor

pnpm install
# postinstall copia automáticamente @ffmpeg/core WASM en public/ffmpeg-core/
```

### Servidor de desarrollo

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) — la aplicación redirige a `/en/` automáticamente.

> **Consejo:** La primera vez que FFmpeg WASM se carga (~31 MB) será lento. Las cargas posteriores son instantáneas gracias a `Cache-Control: immutable`.

### Variables de entorno

Copia `.env.example` a `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Descripción | Ejemplo |
|---|---|---|
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Tu dominio de Plausible | `videotoaudioconverter.org` |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` | URL del script de Plausible | `https://plausible.io/js/script.tagged-events.outbound-links.js` |

Déjalas vacías en desarrollo — la analítica simplemente se omitirá.

---

## 🏗️ Stack tecnológico

```
┌─────────────────────────────────────────────────────────────────┐
│                      Capa de aplicación                         │
│  Next.js 16 (App Router)  ·  React 19  ·  TypeScript 5         │
├──────────────────────┬──────────────────────────────────────────┤
│    UI / Estilos      │           Librerías principales          │
│                      │                                          │
│  Tailwind CSS v4     │  MediaBunny 1.44 (motor WebCodecs)      │
│  shadcn/ui           │  @ffmpeg/ffmpeg 0.12 (motor WASM)       │
│  Radix UI            │  next-intl 4 (i18n)                     │
│  Lucide Icons        │  react-dropzone 15                      │
│  Sistema OKLCH       │  Sonner (notificaciones toast)          │
│                      │  Plausible Analytics (eventos tipados)  │
├──────────────────────┴──────────────────────────────────────────┤
│                      Infraestructura                            │
│  Cloudflare Pages (hosting estático)  ·  pnpm  ·  ESLint       │
└─────────────────────────────────────────────────────────────────┘
```

### ¿Por qué estas decisiones?

**Exportación estática de Next.js** — Todo el sitio se prerenderiza a archivos planos HTML/JS/CSS. No hay servidor Node.js en producción. Cloudflare Pages sirve todo desde el edge.

**MediaBunny por encima de FFmpeg-first** — Para MP4/MOV/MKV/WebM (la gran mayoría de conversiones), MediaBunny utiliza los WebCodecs nativos del navegador y es 5–10× más rápido que FFmpeg WASM sin penalización de arranque en frío.

**FFmpeg WASM en un solo hilo** — El FFmpeg multihilo requiere `SharedArrayBuffer`, lo que exige `Cross-Origin-Opener-Policy: same-origin` y `Cross-Origin-Embedder-Policy: require-corp`. Esas cabeceras rompen scripts de terceros (analíticas, fuentes, anuncios). El modo monohilo evita todo eso.

**Tailwind v4 + OKLCH** — El sistema de diseño usa el espacio de color OKLCH para acentos teal/cyan perceptualmente uniformes que se ven correctos tanto en modo claro como oscuro sin sobreescribir el modo oscuro manualmente en cada componente.

---

## 📁 Estructura de archivos

```
videotoaudioconverter.org/
│
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx              # Layout por locale (Header, Footer, Plausible, JSON-LD)
│   │   ├── page.tsx                # Home (hero, conversor, características, FAQ)
│   │   ├── mp4-to-mp3/page.tsx     # Landing "MP4 a MP3"
│   │   ├── mov-to-mp3/page.tsx     # Landing "MOV a MP3"
│   │   ├── mkv-to-mp3/page.tsx     # Landing "MKV a MP3"
│   │   ├── webm-to-mp3/page.tsx    # Landing "WebM a MP3"
│   │   ├── avi-to-mp3/page.tsx     # Landing "AVI a MP3"
│   │   ├── about/page.tsx
│   │   └── privacy/page.tsx
│   ├── layout.tsx                  # Layout raíz (viewport, tema)
│   ├── globals.css                 # Entrada de Tailwind + clases utilitarias
│   ├── theme.css                   # Tokens de diseño OKLCH, claro/oscuro
│   ├── icon.svg                    # Icono de la app
│   ├── robots.ts                   # robots.txt vía la Metadata API de Next.js
│   └── sitemap.ts                  # sitemap XML (todos los locales × todas las rutas)
│
├── components/
│   ├── converter/
│   │   ├── Converter.tsx           # Widget principal del conversor (componente cliente)
│   │   ├── DropZone.tsx            # Entrada de archivos drag-and-drop
│   │   └── SegmentedPicker.tsx     # Selector de formato / calidad
│   ├── layout/
│   │   ├── Header.tsx              # Barra de navegación con enlaces de formato + selector de idioma
│   │   ├── Footer.tsx              # Pie con enlaces
│   │   └── LanguageSwitcher.tsx    # Desplegable en ↔ fr
│   ├── sections/                   # Secciones de la home
│   │   ├── HeroProductStage.tsx
│   │   ├── BentoFeatures.tsx
│   │   ├── UseCases.tsx
│   │   ├── Comparison.tsx
│   │   ├── PrivacyStory.tsx
│   │   ├── Steps.tsx
│   │   ├── FAQ.tsx
│   │   └── TrustBar.tsx
│   ├── landing/
│   │   └── FormatLandingPage.tsx   # Componente reutilizable para páginas de formato
│   ├── seo/
│   │   └── JsonLd.tsx              # Renderizador de esquemas JSON-LD
│   └── ui/                         # Primitivas shadcn/ui (button, card, dialog …)
│
├── lib/
│   ├── engines/
│   │   ├── types.ts                # OutputFormat, Quality, ConvertOptions, ConvertResult
│   │   ├── index.ts                # Despachador: prueba MediaBunny, recae en FFmpeg
│   │   ├── mediabunny.ts           # Wrapper del motor WebCodecs
│   │   └── ffmpeg.ts               # Wrapper del motor FFmpeg WASM
│   ├── seo/
│   │   ├── site.ts                 # Constantes SITE, NAV, absoluteUrl()
│   │   ├── metadata.ts             # Helper buildMetadata()
│   │   └── schemas.ts              # Generadores de JSON-LD Schema.org
│   ├── content/
│   │   ├── format-pages.ts         # Config FORMAT_PAGES (slug, copy, casos de uso)
│   │   └── use-cases.ts            # Datos de casos de uso compartidos
│   ├── analytics.ts                # Emisor tipado de eventos Plausible
│   ├── formats.ts                  # Metadatos INPUT_FORMATS / OUTPUT_FORMATS
│   └── utils.ts                    # cn() — clsx + twMerge
│
├── i18n/
│   ├── routing.ts                  # locales: ['en', 'fr'], defaultLocale: 'en'
│   ├── request.ts                  # Cargador de mensajes (deep merge por página)
│   ├── navigation.ts               # Link, redirect, useRouter de next-intl
│   ├── locale.ts                   # Tabla LOCALE_META para el selector de idioma
│   └── messages/
│       ├── en.json                 # Cadenas compartidas en inglés
│       └── fr.json                 # Cadenas compartidas en francés
│       (+ archivos JSON por página en i18n/pages/<slug>/)
│
├── public/
│   ├── ffmpeg-core/
│   │   └── ffmpeg-core.js          # Shim JS auto-alojado de FFmpeg (~1 MB)
│   │   (ffmpeg-core.wasm se carga desde unpkg en tiempo de ejecución)
│   ├── _headers                    # Cloudflare Pages: cabeceras de caché + seguridad
│   └── _redirects                  # Cloudflare Pages: / → /en/ etc.
│
├── scripts/
│   └── sync-ffmpeg-core.mjs        # Copia el dist de @ffmpeg/core a public/
│
├── .env.example
├── next.config.ts                  # output: 'export', trailingSlash: false, plugin next-intl
├── tsconfig.json
├── tailwind.config.ts
└── package.json
```

---

## 🌍 Internacionalización

El sitio utiliza [next-intl 4](https://next-intl-docs.vercel.app/) con rutas prefijadas por locale (`/en/`, `/fr/`).

### Añadir un nuevo idioma

1. **Registra el locale** en `i18n/routing.ts`:

   ```ts
   export const routing = defineRouting({
     locales: ['en', 'fr', 'de'],  // añade 'de'
     defaultLocale: 'en',
   });
   ```

2. **Crea los mensajes compartidos** en `i18n/messages/de.json` (copia `en.json` y traduce).

3. **Crea los mensajes por página** para cada namespace:

   ```
   i18n/pages/home/de.json
   i18n/pages/mp4-to-mp3/de.json
   … etc.
   ```

4. **Añade los metadatos del locale** en `i18n/locale.ts`:

   ```ts
   de: { nativeName: 'Deutsch', englishName: 'German' },
   ```

5. `sitemap.ts` y `generateStaticParams()` recogen automáticamente el nuevo locale — no se requieren cambios adicionales.

---

## 📊 Analítica

El sitio usa [Plausible Analytics](https://plausible.io/) — sin cookies, conforme con GDPR, sin recopilar datos personales.

### Eventos personalizados

Todos los eventos están tipados en [`lib/analytics.ts`](lib/analytics.ts):

| Evento | Propiedades | Cuándo se dispara |
|---|---|---|
| `file_selected` | `ext`, `size_mb`, `engine_hint` | El usuario suelta o selecciona un archivo de vídeo |
| `conversion_started` | `from_ext`, `to_format`, `quality` | Se pulsa el botón Convertir |
| `conversion_completed` | `from_ext`, `to_format`, `engine`, `duration_s` | Blob de audio listo |
| `conversion_failed` | `from_ext`, `to_format`, `reason` | El motor lanza un error |
| `conversion_cancelled` | `from_ext`, `to_format` | El usuario cancela a mitad de la conversión |
| `download_clicked` | `format` | Se pulsa el botón de descarga |

Estos eventos ofrecen una imagen completa de qué rutas de conversión vídeo-a-audio son más populares.

---

## 📦 Compilación y despliegue

### Build local

```bash
pnpm build       # exportación estática → out/
npx serve out    # vista previa local
```

La salida del build es un directorio de archivos planos — no se requiere servidor.

### Despliegue en Cloudflare Pages

1. **Conecta tu repositorio** en el panel de Cloudflare Pages.

2. **Ajustes del build:**

   | Ajuste | Valor |
   |---|---|
   | Comando de build | `pnpm build` |
   | Directorio de salida | `out` |
   | Versión de Node.js | `20` |

3. **Variables de entorno** (Producción + Vista previa):

   ```
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=videotoaudioconverter.org
   NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL=https://plausible.io/js/script.tagged-events.outbound-links.js
   ```

4. **Dominio personalizado:** Añade `videotoaudioconverter.org` y deja que el DNS de Cloudflare gestione el enrutado.

### Estrategia de caché

| Recurso | Cache-Control | Motivo |
|---|---|---|
| `/ffmpeg-core/*` | `immutable, max-age=31536000` | Direccionado por contenido; nunca cambia |
| `/_next/static/*` | `immutable, max-age=31536000` | Next.js hashea los nombres por contenido |
| `/og.png`, `/favicon.ico` | `max-age=604800` | Actualizados con poca frecuencia |
| Páginas HTML | Sin caché / cabeceras de seguridad | Siempre frescas, protegen al usuario |

---

## ➕ Añadir una nueva página de formato

Para añadir una nueva landing de conversión **vídeo a audio** (p. ej., `flv-to-mp3`):

1. **Añádelo a `lib/content/format-pages.ts`:**

   ```ts
   {
     slug: 'flv-to-mp3',
     messageKey: 'flvToMp3',
     outputFormat: 'mp3',
     highlightedInputs: ['flv'],
     useCaseImages: ['https://images.unsplash.com/…'],
   }
   ```

2. **Crea el archivo de la página:**

   ```ts
   // app/[locale]/flv-to-mp3/page.tsx
   import { FormatLandingPage } from '@/components/landing/FormatLandingPage'
   import { getFormatPage } from '@/lib/content/format-pages'

   const config = getFormatPage('flv-to-mp3')!

   export default function Page() {
     return <FormatLandingPage config={config} />
   }
   ```

3. **Añade las traducciones:**

   ```
   i18n/pages/flv-to-mp3/en.json
   i18n/pages/flv-to-mp3/fr.json
   ```

4. La página queda **incluida automáticamente** en `sitemap.ts` — no se necesitan más cambios.

> **Nota SEO:** Cada página de formato debe tener textos únicos. Google penaliza las páginas puerta con contenido casi duplicado.

---

## 🛡️ Privacidad y seguridad

- **Sin subidas de archivos** — la conversión se ejecuta enteramente en el navegador mediante WebCodecs / FFmpeg WASM
- **Sin cookies** — Plausible no usa cookies; no se necesita banner de consentimiento
- **Sin localStorage** — nada se persiste entre sesiones
- **Sin dependencia de CDN en tiempo de ejecución** — el shim JS de FFmpeg está auto-alojado; solo el binario WASM se carga desde `unpkg` y queda en caché para siempre tras la primera carga
- **Cabeceras de seguridad en cada página HTML:**
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Las áreas de mayor impacto son:

- **Nuevas traducciones** — Copia `i18n/messages/en.json`, traduce, abre un PR
- **Nuevas landings de formato** — Sigue la guía anterior; aporta textos únicos
- **Mejoras en los motores** — Mejor reporte de progreso, códecs de salida adicionales
- **UI / accesibilidad** — Cumplimiento WCAG AA, navegación con teclado

Por favor, abre una issue antes de comenzar cambios grandes para que podamos discutir la dirección.

---

## 🔍 Qué resuelve este proyecto (referencia de palabras clave y casos de uso)

**[VideoToAudioConverter.org](https://videotoaudioconverter.org/es/)** está construido para ser la respuesta definitiva para cualquiera que busque un **convertidor de vídeo a audio online y gratuito** que respete la privacidad. A continuación se muestra el mapa completo de intenciones de conversión y consultas de búsqueda que cubrimos.

### Todos los pares de conversión que admitimos

Cada celda es una ruta de conversión explícita e indexable. Suelta un archivo del formato de la fila y elige el formato de la columna — esa es la conversión.

| Entrada ↓ / Salida → | MP3 | WAV | M4A | AAC | FLAC | OGG | Opus |
|---|---|---|---|---|---|---|---|
| **MP4** | [mp4 a mp3](https://videotoaudioconverter.org/es/mp4-to-mp3) | mp4 a wav | mp4 a m4a | mp4 a aac | mp4 a flac | mp4 a ogg | mp4 a opus |
| **MOV** | [mov a mp3](https://videotoaudioconverter.org/es/mov-to-mp3) | mov a wav | mov a m4a | mov a aac | mov a flac | mov a ogg | mov a opus |
| **MKV** | [mkv a mp3](https://videotoaudioconverter.org/es/mkv-to-mp3) | mkv a wav | mkv a m4a | mkv a aac | mkv a flac | mkv a ogg | mkv a opus |
| **WebM** | [webm a mp3](https://videotoaudioconverter.org/es/webm-to-mp3) | webm a wav | webm a m4a | webm a aac | webm a flac | webm a ogg | webm a opus |
| **AVI** | [avi a mp3](https://videotoaudioconverter.org/es/avi-to-mp3) | avi a wav | avi a m4a | avi a aac | avi a flac | avi a ogg | avi a opus |
| **FLV** | flv a mp3 | flv a wav | flv a m4a | flv a aac | flv a flac | flv a ogg | flv a opus |
| **WMV** | wmv a mp3 | wmv a wav | wmv a m4a | wmv a aac | wmv a flac | wmv a ogg | wmv a opus |
| **3GP** | 3gp a mp3 | 3gp a wav | 3gp a m4a | 3gp a aac | 3gp a flac | 3gp a ogg | 3gp a opus |
| **MPEG** | mpeg a mp3 | mpeg a wav | mpeg a m4a | mpeg a aac | mpeg a flac | mpeg a ogg | mpeg a opus |
| **M4V** | m4v a mp3 | m4v a wav | m4v a m4a | m4v a aac | m4v a flac | m4v a ogg | m4v a opus |

> **63 rutas de conversión compatibles**, todas accesibles desde el mismo widget conversor en **[videotoaudioconverter.org](https://videotoaudioconverter.org/es/)**. Páginas de aterrizaje dedicadas: [MP4 → MP3](https://videotoaudioconverter.org/es/mp4-to-mp3) · [MOV → MP3](https://videotoaudioconverter.org/es/mov-to-mp3) · [MKV → MP3](https://videotoaudioconverter.org/es/mkv-to-mp3) · [WebM → MP3](https://videotoaudioconverter.org/es/webm-to-mp3) · [AVI → MP3](https://videotoaudioconverter.org/es/avi-to-mp3). Los demás pares se desbloquean mediante el selector de formato de salida.

---

## 🎯 ¿Quién usa un convertidor de vídeo a audio? (Casos de uso)

La gente busca un **convertidor de vídeo a audio** por razones muy distintas. Optimizamos la UI, los textos y las landings alrededor de estos escenarios. Puedes probarlos todos en **[videotoaudioconverter.org](https://videotoaudioconverter.org/es/)**.

### 🎙️ Podcasters y productores de audio

- **[Convierte grabaciones de vídeo a MP3](https://videotoaudioconverter.org/es/mp4-to-mp3)** para distribución de podcasts (Spotify, Apple Podcasts, RSS).
- Extrae audio de una **grabación de Zoom**, **grabación de Google Meet**, **grabación de Microsoft Teams**, **grabación de Riverside** o **grabación de pantalla de OBS**.
- Elimina la pista visual de una **entrevista en MP4** y entrega solo audio.
- Convierte **vídeo a WAV** o **FLAC** para editar en Audacity, Adobe Audition, Logic Pro, GarageBand, Reaper o Pro Tools.

### 🎓 Estudiantes y educadores

- Convierte **grabaciones de clase a MP3** para escucharlas en cualquier teléfono durante el trayecto — prueba [videotoaudioconverter.org](https://videotoaudioconverter.org/es/).
- Extrae audio de **grabaciones de clase en Zoom**, **vídeos de Kahoot**, **descargas de Khan Academy** o **charlas de congreso**.
- Convierte una **[grabación MOV](https://videotoaudioconverter.org/es/mov-to-mp3)** de QuickTime en un **M4A** portable para iPhone.
- Obtén audio de **descargas de YouTube que ya posees** para repaso offline (respeta los derechos de autor).

### 📱 Usuarios de móviles y redes sociales

- **Vídeo de TikTok a MP3** — extrae un fragmento de sonido de un export de TikTok en [videotoaudioconverter.org](https://videotoaudioconverter.org/es/).
- **Vídeo de Reel de Instagram a audio** — saca el audio de la descarga de un Reel.
- **Vídeo de WhatsApp a MP3** — convierte un mensaje de vídeo reenviado en audio.
- **Vídeo de iPhone a MP3** — convierte grabaciones `.MOV` / `.M4V` de Fotos a MP3; usa nuestra página **[MOV a MP3](https://videotoaudioconverter.org/es/mov-to-mp3)**.
- **Vídeo de Android a MP3** — extrae audio de grabaciones MP4; usa nuestra página **[MP4 a MP3](https://videotoaudioconverter.org/es/mp4-to-mp3)**.

### 🎵 Aficionados a la música y los medios

- **[Convierte un vídeo musical a MP3](https://videotoaudioconverter.org/es/mp4-to-mp3)** para reproducción offline (sobre archivos que poseas o sobre los que tengas derechos).
- Extrae audio de una **grabación de un concierto** o **vídeo de ensayo**.
- Saca una **banda sonora** de un vídeo para remezclas, sampleo o sets de DJ.
- Archiva pistas de audio de vídeo en **FLAC sin pérdida** mediante [videotoaudioconverter.org](https://videotoaudioconverter.org/es/).

### 💼 Profesionales y trabajadores del conocimiento

- **[Convierte una grabación de reunión a MP3](https://videotoaudioconverter.org/es/mp4-to-mp3)** para transcripción con Otter.ai, Rev, Descript, Whisper o las herramientas de transcripción de Google.
- Extrae audio de un **webinar** o **reunión general de empresa** para accesibilidad / archivo.
- Extrae audio de un **vídeo de formación** para enviarlo a un servicio de transcripción.
- Ahorra ancho de banda compartiendo **versiones solo en audio** de las reuniones — todo en [videotoaudioconverter.org](https://videotoaudioconverter.org/es/).

### 🎬 Editores de vídeo y creadores de contenido

- Separa el audio del vídeo para **edición multipista** en Premiere Pro, DaVinci Resolve, Final Cut, CapCut o VN Editor — usa [videotoaudioconverter.org](https://videotoaudioconverter.org/es/) antes de importar.
- Sustituye la pista de audio de un vídeo **[extrayendo primero el original con nuestro conversor MKV](https://videotoaudioconverter.org/es/mkv-to-mp3)**.
- Genera **previsualizaciones solo en audio** para clientes antes de entregar el vídeo final.

### 🔒 Usuarios concienciados con la privacidad

- Convierte archivos **sin subirlos** a ningún servidor de terceros — **[pruébalo en videotoaudioconverter.org](https://videotoaudioconverter.org/es/)**.
- Procesa **entrevistas confidenciales**, **declaraciones legales**, **grabaciones médicas** y **material periodístico** sin que salga del dispositivo.
- Usa el convertidor **sin conexión** tras la primera carga (funciona en un avión o en un SCIF).
- Evita convertidores que exigen **registro por email**, **creación de cuenta** o **suscripciones de pago**. Consulta nuestra [Política de privacidad](https://videotoaudioconverter.org/es/privacy) para más detalles.

---

## ❓ Preguntas frecuentes (respondidas)

Estas son las preguntas long-tail que la gente teclea en Google al buscar un convertidor de vídeo a audio. Cada una se responde en la FAQ de la [home](https://videotoaudioconverter.org/es/) y en las landings por formato.

### ¿Cómo convierto MP4 a MP3 gratis en línea?
Ve a **[videotoaudioconverter.org/es/mp4-to-mp3](https://videotoaudioconverter.org/es/mp4-to-mp3)**, suelta tu archivo MP4, elige "MP3" como formato de salida, pulsa Convertir y descarga el archivo. Sin subida, sin registro, sin marca de agua y sin límite de tamaño.

### ¿Cómo extraigo audio de un vídeo sin subirlo?
Usa un **convertidor de vídeo a audio del lado del cliente** como **[VideoToAudioConverter.org](https://videotoaudioconverter.org/es/)**. La conversión se ejecuta en tu navegador mediante WebCodecs y FFmpeg WASM — el archivo nunca toca un servidor.

### ¿Cuál es el mejor convertidor de vídeo a audio gratuito que no sube archivos?
Un convertidor basado en navegador con WebCodecs o FFmpeg WASM es la única categoría que genuinamente no sube nada. **[VideoToAudioConverter.org](https://videotoaudioconverter.org/es/)** es de código abierto, así que puedes verificarlo.

### ¿Cómo convierto MOV a MP3 en un Mac sin iTunes?
Abre **[videotoaudioconverter.org/es/mov-to-mp3](https://videotoaudioconverter.org/es/mov-to-mp3)** en Safari o Chrome, arrastra el archivo `.MOV` desde Finder a la zona de drop, elige "MP3" y descarga. Funciona en cualquier versión de macOS, sin necesidad de iTunes / app Música.

### ¿Cómo convierto MKV a MP3 sin instalar software?
Abre **[videotoaudioconverter.org/es/mkv-to-mp3](https://videotoaudioconverter.org/es/mkv-to-mp3)**, suelta el MKV, elige MP3 y pulsa Convertir. Sin VLC, sin HandBrake, sin línea de comandos.

### ¿Cómo extraigo audio de un archivo WebM?
Ve a **[videotoaudioconverter.org/es/webm-to-mp3](https://videotoaudioconverter.org/es/webm-to-mp3)**. WebM utiliza audio Opus o Vorbis internamente — elige Opus (para calidad nativa por passthrough), MP3 (para compatibilidad) o WAV (para edición).

### ¿Cómo convierto AVI a MP3 en 2026?
AVI es un formato heredado de Windows. Abre **[videotoaudioconverter.org/es/avi-to-mp3](https://videotoaudioconverter.org/es/avi-to-mp3)** — nuestro motor de respaldo FFmpeg WASM maneja AVI de forma nativa. Suelta el archivo, elige MP3, listo. No requiere instalar el códec DivX.

### ¿Cómo convierto vídeo a MP3 a 320 kbps?
En **[videotoaudioconverter.org](https://videotoaudioconverter.org/es/)**, elige el preajuste de calidad "Alta" — codifica MP3 a 320 kbps (la calidad máxima para MP3).

### ¿Cómo extraigo audio de un vídeo a WAV (sin pérdida)?
Abre **[videotoaudioconverter.org](https://videotoaudioconverter.org/es/)** y elige "WAV" como formato de salida. WAV es PCM sin comprimir — ideal para editar en una DAW.

### ¿Cómo extraigo audio de un vídeo de iPhone?
Los vídeos de iPhone suelen ser `.MOV` (H.264 + AAC) o `.MP4`. Abre **[videotoaudioconverter.org/es/mov-to-mp3](https://videotoaudioconverter.org/es/mov-to-mp3)**, suelta el archivo desde Fotos / Archivos, elige MP3 o M4A y descarga.

### ¿Es legal convertir vídeo a audio?
Convertir archivos que posees o sobre los que tienes derechos es legal en la mayoría de jurisdicciones. No uses esta herramienta para eludir DRM, raspar servicios de streaming de pago ni violar derechos de autor. No somos un descargador de YouTube.

### ¿Funciona el convertidor sin conexión?
Tras la primera carga de página en **[videotoaudioconverter.org](https://videotoaudioconverter.org/es/)**, sí. El binario FFmpeg WASM queda en caché un año. Puedes activar el modo avión y seguir convirtiendo archivos.

---

## 🏆 Cómo se compara VideoToAudioConverter.org

| Capacidad | [VideoToAudioConverter.org](https://videotoaudioconverter.org/es/) | FreeConvert | Convertio | OnlineAudioConverter | CloudConvert |
|---|---|---|---|---|---|
| **Gratis** | ✅ Para siempre | ✅ Limitado | ✅ Limitado | ✅ Limitado | ✅ Limitado |
| **Sin subida (lado cliente)** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Sin límite de tamaño** | ✅ | ❌ 1 GB | ❌ 100 MB | ❌ 2 GB | ❌ 1 GB |
| **Sin registro** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Sin anuncios** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Funciona offline** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Código abierto** | ✅ MIT | ❌ | ❌ | ❌ | ❌ |
| **Conversiones ilimitadas / día** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Seguro frente al GDPR por diseño** | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |

> La comparativa refleja los planes y restricciones publicados a fecha de 2026. Verifica los límites actuales en el sitio de cada proveedor.

---

## 🗣️ Cobertura multilingüe

El mismo convertidor, localizado para audiencias globales. Cada versión traducida es una superficie SEO completamente separada:

| Locale | Prefijo URL | Frase traducida para "convertidor de vídeo a audio" |
|---|---|---|
| 🇬🇧 Inglés | [`/en/`](https://videotoaudioconverter.org/en/) | video to audio converter |
| 🇫🇷 Francés | [`/fr/`](https://videotoaudioconverter.org/fr/) | convertisseur vidéo en audio |
| 🇪🇸 Español | [`/es/`](https://videotoaudioconverter.org/es/) | convertidor de vídeo a audio |
| 🇩🇪 Alemán | `/de/` *(planificado)* | Video zu Audio Konverter |
| 🇮🇹 Italiano | `/it/` *(planificado)* | convertitore da video ad audio |
| 🇵🇹 Portugués | `/pt/` *(planificado)* | conversor de vídeo para áudio |
| 🇨🇳 Chino (simplificado) | `/zh/` *(planificado)* | 视频转音频转换器 |
| 🇯🇵 Japonés | `/ja/` *(planificado)* | 動画から音声に変換 |
| 🇰🇷 Coreano | `/ko/` *(planificado)* | 비디오를 오디오로 변환 |
| 🇷🇺 Ruso | `/ru/` *(planificado)* | конвертер видео в аудио |
| 🇸🇦 Árabe | `/ar/` *(planificado)* | محول فيديو إلى صوت |
| 🇮🇳 Hindi | `/hi/` *(planificado)* | वीडियो को ऑडियो में बदलें |
| 🇮🇩 Indonesio | `/id/` *(planificado)* | konverter video ke audio |
| 🇹🇷 Turco | `/tr/` *(planificado)* | video ses dönüştürücü |
| 🇻🇳 Vietnamita | `/vi/` *(planificado)* | chuyển video sang âm thanh |

Añadir un locale toma ~30 minutos una vez listas las traducciones — consulta [Internacionalización](#-internacionalización) arriba. La home en inglés está en [videotoaudioconverter.org/en/](https://videotoaudioconverter.org/en/) y la versión francesa en [videotoaudioconverter.org/fr/](https://videotoaudioconverter.org/fr/).

---

## 📚 Glosario — Formatos de audio y vídeo explicados

Una referencia para usuarios que buscan cosas como "cuál es la diferencia entre MP3 y M4A" o "qué formato de audio es mejor para podcasts".

### Formatos de salida (audio)

- **MP3** — El formato de audio universal. Compresión con pérdida. 128 kbps = decente, 192 kbps = bueno, 320 kbps = excelente. Se reproduce literalmente en todos los dispositivos fabricados desde 1998. Úsalo para: podcasts, streaming, compartir.
- **WAV** — Audio PCM sin comprimir. Archivos enormes (~10 MB por minuto) pero bit-perfect. Úsalo para: edición en DAW, masterización, fuentes de archivo.
- **M4A** — Contenedor de audio MPEG-4, típicamente con AAC dentro. Misma calidad que MP3 a menor bitrate. Úsalo para: ecosistema iTunes / Apple Music, tonos de llamada de iPhone.
- **AAC** — Advanced Audio Coding. Mejor calidad que MP3 al mismo bitrate. Estándar para YouTube, Apple y la radiodifusión moderna. Úsalo para: donde funcione MP3, cuando quieras más calidad.
- **FLAC** — Free Lossless Audio Codec. Comprime sin pérdida de calidad, ~50% del tamaño de WAV. Úsalo para: archivado audiófilo, colecciones de música hi-res.
- **OGG (Vorbis)** — Formato con pérdida de código abierto. Mejor calidad que MP3 al mismo bitrate. Úsalo para: ecosistemas open source, videojuegos, web.
- **Opus** — El códec con pérdida más moderno. Aplasta a MP3 / AAC / Vorbis a bitrates bajos. Úsalo para: voz (podcasts, VoIP), audio de bajo ancho de banda, WebRTC.

### Formatos de entrada (vídeo)

- **MP4** — Vídeo H.264 / H.265 + audio AAC en un contenedor MPEG-4. El estándar para casi todo: descargas de YouTube, grabaciones de móvil, capturas de pantalla.
- **MOV** — Contenedor Apple QuickTime. Común en iPhones, Macs, ScreenFlow y Final Cut.
- **MKV** — Matroska. Contenedor abierto que puede alojar cualquier códec. Común para descargas de vídeo de alta calidad, anime y rips de blu-ray.
- **WebM** — Contenedor abierto respaldado por Google. Vídeo VP8 / VP9 / AV1 + audio Opus / Vorbis. Estándar para vídeo web (descargas de YouTube en WebM, WhatsApp Web).
- **AVI** — Audio Video Interleave. Formato heredado de Microsoft de los 90, aún común en archivos antiguos y exportaciones de software solo Windows.
- **FLV** — Flash Video. Formato heredado de Adobe Flash. Hoy raro pero aún presente en descargas antiguas.
- **WMV** — Windows Media Video. Propiedad de Microsoft, común en exportaciones antiguas de Windows Movie Maker / PowerPoint.
- **3GP** — Contenedor móvil de la era pre-smartphone. Aún producido por algunos teléfonos básicos y videocámaras antiguas.
- **MPEG (MPG)** — El formato de vídeo MPEG-1 / MPEG-2 original. Usado para DVDs antiguos y emisiones de TV.

---

## 🧭 Intenciones de búsqueda que cubrimos

Una lista no exhaustiva de las consultas para las que este sitio está diseñado para posicionarse. Indexamos cada una como contenido principal en algún punto del sitio (home, páginas de formato, FAQ o este README).

<details>
<summary><strong>🔹 Términos head (alto volumen)</strong></summary>

video to audio converter · video to mp3 · video to mp3 converter · convert video to mp3 · convert video to audio · extract audio from video · mp3 converter · online mp3 converter · free mp3 converter · audio extractor · video sound extractor · rip audio from video · video to audio · audio from video · get audio from video · video to mp3 online · convert video to mp3 free · free video to audio converter · video to mp3 free · online video to audio converter · convertidor de video a audio · convertidor de video a mp3 · video a mp3 · convertir video a mp3 · extraer audio de video · convertidor de audio gratis · video a mp3 online · extractor de audio · convertidor online gratis · pasar video a mp3 · sacar audio de video

</details>

<details>
<summary><strong>🔹 Conversiones por par de formatos (long tail, alta intención)</strong></summary>

mp4 to mp3 · mp4 to wav · mp4 to m4a · mp4 to aac · mp4 to flac · mp4 to ogg · mp4 to opus · mov to mp3 · mov to wav · mov to m4a · mov to aac · mkv to mp3 · mkv to wav · mkv to flac · mkv to aac · webm to mp3 · webm to ogg · webm to opus · webm to wav · avi to mp3 · avi to wav · flv to mp3 · wmv to mp3 · 3gp to mp3 · mpeg to mp3 · m4v to mp3 · mp4 a mp3 · mov a mp3 · mkv a mp3 · webm a mp3 · avi a mp3 · convertir mp4 a mp3 gratis · convertir mov a mp3 · convertir mkv a mp3

</details>

<details>
<summary><strong>🔹 Modificadores de calidad / bitrate</strong></summary>

320 kbps mp3 converter · high quality video to mp3 · lossless video to audio · video to flac · hd audio extractor · cd quality wav extractor · 192 kbps mp3 · 128 kbps mp3 · best quality video to mp3 · convert video to high quality audio · alta calidad 320 kbps · convertidor lossless · video a wav · convertidor de video a mp3 sin marca de agua · video a mp3 alta calidad

</details>

<details>
<summary><strong>🔹 Modificadores de privacidad y confianza</strong></summary>

video to mp3 no upload · video converter no upload · client-side video to mp3 · browser-based video converter · offline video to audio · private video to mp3 · secure video converter · no signup video to mp3 · no registration audio extractor · no watermark video to mp3 · ad-free video converter · gdpr-safe video converter · video to mp3 without uploading file · open source video to audio converter · video a mp3 sin subir · convertir audio sin instalar · convertidor en el navegador · convertidor de video a mp3 sin marca de agua · convertidor sin registro

</details>

<details>
<summary><strong>🔹 Modificadores de dispositivo / plataforma</strong></summary>

iphone video to mp3 · android video to mp3 · mac video to mp3 · windows video to mp3 · linux video to mp3 · chromebook video to mp3 · ipad video to audio · safari video to mp3 · chrome video to mp3 · firefox video to mp3 · edge video to mp3 · ios video to mp3 converter · iphone video a mp3 · android video a mp3 · convertir video a mp3 en mac · convertir video a mp3 en windows

</details>

<details>
<summary><strong>🔹 Intención por fuente (solo archivos propios — no somos un descargador de YouTube)</strong></summary>

zoom recording to mp3 · google meet recording to mp3 · teams recording to mp3 · screen recording to mp3 · obs recording to mp3 · tiktok video to mp3 · instagram reel to mp3 · whatsapp video to mp3 · iphone screen recording to mp3 · webinar recording to audio · interview video to mp3 · podcast video to mp3 · lecture recording to mp3 · tiktok a mp3 · grabación de zoom a mp3 · reunión a mp3 · extraer música de video · sacar audio de grabación

</details>

<details>
<summary><strong>🔹 How-to long-tail (FAQ / objetivos de featured snippet)</strong></summary>

how to convert mp4 to mp3 · how to extract audio from video · how to convert video to mp3 free · how to convert video to mp3 without software · how to get sound from a video · how to rip audio from a video file · how to convert mov to mp3 on mac · how to convert mkv to mp3 · how to extract audio from webm · how to convert avi to mp3 in 2026 · how to convert video to mp3 on iphone · how to convert video to mp3 on android · how to convert video to mp3 offline · how to convert video to 320 kbps mp3 · how to convert video to wav · how to extract audio from a video without uploading · cómo convertir mp4 a mp3 · cómo extraer audio de un video · cómo pasar video a mp3 gratis · cómo sacar el audio de un video · cómo convertir video a mp3 sin programas

</details>

<details>
<summary><strong>🔹 Comparativas / alternativas</strong></summary>

freeconvert alternative · convertio alternative · cloudconvert alternative · onlineaudioconverter alternative · ytmp3 alternative · zamzar alternative · best free video to audio converter · best browser video to mp3 converter · best private video converter · open source alternative to convertio · alternativa a convertio · alternativa a freeconvert · mejor convertidor de video a mp3 gratis

</details>

<details>
<summary><strong>🔹 Multilingüe</strong></summary>

convertisseur vidéo en audio · convertidor de video a audio · convertidor de vídeo a mp3 · extraer audio · sacar audio · pasar video a audio · convertir video a música · mp4 audio extractor · video zu audio konverter · conversor de vídeo para áudio · convertitore video audio · 视频转音频 · 視頻轉音頻 · 動画 音声 変換 · 비디오 오디오 변환 · конвертер видео в аудио · محول فيديو إلى صوت · वीडियो को ऑडियो में बदलें · konverter video ke audio · video ses dönüştürücü · chuyển video sang âm thanh

</details>

---

## 🌟 En resumen

Si buscas un **convertidor de vídeo a audio online y gratuito** que:

- ✅ Convierta **[MP4 a MP3](https://videotoaudioconverter.org/es/mp4-to-mp3)**, **[MOV a MP3](https://videotoaudioconverter.org/es/mov-to-mp3)**, **[MKV a MP3](https://videotoaudioconverter.org/es/mkv-to-mp3)**, **[WebM a MP3](https://videotoaudioconverter.org/es/webm-to-mp3)**, **[AVI a MP3](https://videotoaudioconverter.org/es/avi-to-mp3)** y 58 pares de conversión más
- ✅ Funcione **100% en tu navegador** con **cero subidas** y **cero rastreo**
- ✅ No tenga **límite de tamaño**, ni **registro**, ni **anuncios**, ni **marca de agua**
- ✅ Soporte salida en **MP3, WAV, M4A, AAC, FLAC, OGG, Opus** hasta **320 kbps** o **sin pérdida**
- ✅ Funcione en **Mac, Windows, Linux, Chromebook, iPhone, iPad, Android**
- ✅ Sea **de código abierto**, **seguro frente al GDPR** y funcione **sin conexión** tras la primera carga

— entonces guarda en favoritos **[videotoaudioconverter.org](https://videotoaudioconverter.org/es/)** y dale una estrella al repo. ⭐

---

## 📄 Licencia

- **Código fuente:** [MIT](LICENSE)
- **FFmpeg:** [LGPL 2.1](https://ffmpeg.org/legal.html) (enlazado dinámicamente vía WASM)
- **MediaBunny:** MIT
- **shadcn/ui:** MIT

---

<p align="center">
  Hecho con ❤️ · Alojado en <a href="https://pages.cloudflare.com/">Cloudflare Pages</a> · Analítica por <a href="https://plausible.io/">Plausible</a>
</p>

<p align="center">
  <sub>
    Palabras clave: convertidor de vídeo a audio · convertidor de video a mp3 · mp4 a mp3 · mov a mp3 · mkv a mp3 · webm a mp3 · avi a mp3 · extraer audio de video · extractor de audio · gratis en línea · sin subida · lado cliente · código abierto · WebCodecs · FFmpeg WASM
  </sub>
</p>
