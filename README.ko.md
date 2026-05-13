<p align="center">
  <img src="app/icon.svg" alt="VideoToAudioConverter 로고" width="80" height="80" />
</p>

<h1 align="center">VideoToAudioConverter.org</h1>

<p align="center">
  <a href="./README.md">English</a> ·
  <a href="./README.zh.md">简体中文</a> ·
  <a href="./README.es.md">Español</a> ·
  <a href="./README.ja.md">日本語</a> ·
  <strong>한국어</strong> ·
  <a href="./README.de.md">Deutsch</a> ·
  <a href="./README.fr.md">Français</a> ·
  <a href="./README.pt.md">Português</a> ·
  <a href="./README.it.md">Italiano</a> ·
  <a href="./README.ar.md">العربية</a> ·
  <a href="./README.hi.md">हिन्दी</a>
</p>

<p align="center">
  <strong>가장 빠른 무료 동영상 오디오 변환기 — 100% 브라우저에서 처리, 업로드 없음, 추적 없음.</strong>
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
  <a href="https://videotoaudioconverter.org">🌐 라이브 데모</a> ·
  <a href="#-시작하기">빠른 시작</a> ·
  <a href="#-작동-방식">작동 방식</a> ·
  <a href="#-지원-포맷">포맷</a> ·
  <a href="#-빌드-및-배포">배포</a>
</p>

---

## 이 프로젝트는 무엇인가요?

**[VideoToAudioConverter.org](https://videotoaudioconverter.org)** 는 사용자의 브라우저 내에서 완전히 실행되는 프로덕션 수준의 오픈소스 **동영상 오디오 변환기**입니다. 동영상 파일을 끌어다 놓고, 오디오 포맷을 선택한 뒤 변환 버튼을 누르면 오디오가 즉시 다운로드됩니다. 서버도, 계정도, 백엔드가 강제하는 파일 크기 제한도 없습니다.

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

### 왜 또 다른 동영상 오디오 변환기인가요?

| 기능 | VideoToAudioConverter.org | 일반적인 온라인 변환기 |
|---|---|---|
| 100% 브라우저에서 실행 | ✅ WebCodecs + FFmpeg WASM | ❌ 서버로 업로드 |
| 파일 크기 제한 | ✅ 없음 (RAM이 한계) | ❌ 50~500 MB 제한 |
| 개인정보 보호 / 추적 없음 | ✅ 쿠키 없음, 업로드 없음 | ❌ 파일이 서버에 저장됨 |
| 오프라인 동작 (최초 로드 이후) | ✅ WASM 영구 캐시 | ❌ 인터넷 필요 |
| 오픈소스 | ✅ MIT | ❌ 클로즈드 소스 |
| 광고 없음 | ✅ | ❌ 공격적인 광고 |
| 빠른 속도 (현대 포맷) | ✅ WebCodecs 네이티브 속도 | ❌ 서버 대기열 |

---

## ✨ 주요 기능

### 핵심 변환기

- **드래그 앤 드롭** 또는 클릭으로 모든 동영상 파일 선택
- **9개 입력 포맷** → MP4, MOV, MKV, WebM, AVI, FLV, WMV, 3GP, MPEG
- **7개 출력 포맷** → MP3, WAV, M4A, AAC, FLAC, OGG, Opus
- **품질 프리셋** → 고음질(320 kbps), 중간(192 kbps), 저음질(128 kbps), 무손실
- **실시간 진행 표시줄** 및 단계 라벨(demux → decode → encode → mux)
- **즉시 다운로드** — 오디오 blob은 메모리에서 제공되며 서버를 거치지 않습니다

### 프라이버시 우선 아키텍처

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

### SEO 최적화 포맷별 랜딩 페이지

인기 있는 **동영상 오디오** 변환 쌍마다 완전히 번역된 전용 랜딩 페이지를 제공합니다.

| 페이지 | 라이브 URL |
|---|---|
| MP4 to MP3 Converter | [videotoaudioconverter.org/ko/mp4-to-mp3](https://videotoaudioconverter.org/ko/mp4-to-mp3) |
| MOV to MP3 Converter | [videotoaudioconverter.org/ko/mov-to-mp3](https://videotoaudioconverter.org/ko/mov-to-mp3) |
| MKV to MP3 Converter | [videotoaudioconverter.org/ko/mkv-to-mp3](https://videotoaudioconverter.org/ko/mkv-to-mp3) |
| WebM to MP3 Converter | [videotoaudioconverter.org/ko/webm-to-mp3](https://videotoaudioconverter.org/ko/webm-to-mp3) |
| AVI to MP3 Converter | [videotoaudioconverter.org/ko/avi-to-mp3](https://videotoaudioconverter.org/ko/avi-to-mp3) |

각 페이지는 고유한 본문, JSON-LD 스키마(SoftwareApplication, HowTo, FAQPage), Open Graph 태그를 포함합니다 — 중복 콘텐츠 없음.

### 국제화

- 기본 제공 영어(`/en/`) 및 프랑스어(`/fr/`)
- 페이지별 메시지 네임스페이스로 깊이 있는 i18n 지원(UI 문자열뿐 아니라)
- 15개 이상의 추가 로케일(zh, ja, ko, es, de, pt, it, ru, ar, hi, id, tr, vi …)을 위한 인프라 준비 완료

---

## 🔧 작동 방식

이 변환기는 입력 파일마다 가장 빠른 엔진을 자동으로 선택하는 **듀얼 엔진 아키텍처**로 구동됩니다.

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

### 엔진 세부 정보

#### MediaBunny — 기본 엔진

[MediaBunny](https://github.com/nicktindall/mediabunny)는 브라우저 네이티브 **WebCodecs API**를 간단한 트랜스코딩 파이프라인으로 래핑합니다. 지원되는 포맷의 경우 WASM 오버헤드 없이 메인 스레드에서 동작합니다.

- **지원 입력:** MP4, M4V, MOV, QT, MKV, WebM
- **속도:** 거의 네이티브 — 1시간 길이의 MP4를 최신 하드웨어에서 약 10초 내에 변환
- **COOP/COEP 헤더 불필요** — 서드파티 스크립트와 함께 동작

#### FFmpeg WASM — 폴백 엔진

[@ffmpeg/ffmpeg](https://github.com/ffmpegwasm/ffmpeg.wasm)은 FFmpeg 바이너리 전체를 WebAssembly로 컴파일합니다. 단일 스레드로 실행됩니다(SharedArrayBuffer / COOP 불필요).

- **지원 입력:** AVI, FLV, WMV, 3GP, MPEG, 그리고 MediaBunny가 처리할 수 없는 모든 포맷
- **WASM 크기:** 약 31 MB (`Cache-Control: immutable, max-age=31536000`로 캐시)
- **자체 호스팅 JS shim** — `/ffmpeg-core/ffmpeg-core.js`에 위치하여 CDN 의존성 제거

---

## 📂 지원 포맷

### 입력 포맷 (동영상 → 오디오)

| 포맷 | 확장자 | 엔진 | 비고 |
|---|---|---|---|
| MP4 | `.mp4`, `.m4v` | MediaBunny | 가장 일반적인 동영상 포맷 |
| MOV | `.mov`, `.qt` | MediaBunny | Apple QuickTime |
| MKV | `.mkv` | MediaBunny | Matroska 컨테이너 |
| WebM | `.webm` | MediaBunny | 웹 네이티브 (VP8/VP9/AV1) |
| AVI | `.avi` | FFmpeg WASM | 레거시 Windows 포맷 |
| FLV | `.flv` | FFmpeg WASM | Flash Video |
| WMV | `.wmv` | FFmpeg WASM | Windows Media Video |
| 3GP | `.3gp` | FFmpeg WASM | 모바일 동영상 |
| MPEG | `.mpeg`, `.mpg` | FFmpeg WASM | 구형 방송 포맷 |

### 출력 포맷 (오디오)

| 포맷 | 품질 옵션 | 용도 |
|---|---|---|
| **MP3** | 128 / 192 / 320 kbps | 범용 호환성, 스트리밍, 팟캐스트 |
| **WAV** | 무손실 PCM | 전문가용 오디오, DAW 임포트 |
| **AAC** | 128 / 192 / 320 kbps | Apple 기기, iTunes, MP3보다 우수한 압축 |
| **M4A** | 128 / 192 / 320 kbps | iTunes, Apple Music |
| **FLAC** | 무손실 | 오디오파일 아카이빙 |
| **OGG** | 128 / 192 / 320 kbps | 오픈 포맷, 뛰어난 압축 |
| **Opus** | 128 / 192 / 320 kbps | 최고의 압축/품질 비율, VoIP |

---

## 🚀 시작하기

### 사전 요구 사항

- **Node.js** 20+
- **pnpm** 9+ (`npm install -g pnpm`)

### 설치

```bash
git clone https://github.com/rocnubie/video-to-audio-convertor.git
cd video-to-audio-convertor

pnpm install
# postinstall이 @ffmpeg/core WASM을 public/ffmpeg-core/로 자동 복사합니다
```

### 개발 서버

```bash
pnpm dev
```

[http://localhost:3000](http://localhost:3000)에서 열면 자동으로 `/en/`으로 리다이렉트됩니다.

> **팁:** FFmpeg WASM(약 31 MB)이 처음 로드될 때는 느립니다. `Cache-Control: immutable` 덕분에 이후 로드는 즉시 이루어집니다.

### 환경 변수

`.env.example`을 `.env.local`로 복사합니다.

```bash
cp .env.example .env.local
```

| 변수 | 설명 | 예시 |
|---|---|---|
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible 사이트 도메인 | `videotoaudioconverter.org` |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` | Plausible 스크립트 URL | `https://plausible.io/js/script.tagged-events.outbound-links.js` |

개발 환경에서는 비워두면 됩니다 — 분석은 단순히 건너뜁니다.

---

## 🏗️ 기술 스택

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

### 이러한 선택의 이유

**Next.js 정적 내보내기** — 사이트 전체가 평면 HTML/JS/CSS 파일로 사전 렌더링됩니다. 프로덕션에는 Node.js 서버가 없습니다. Cloudflare Pages가 엣지에서 모든 것을 서비스합니다.

**FFmpeg 우선이 아닌 MediaBunny** — MP4/MOV/MKV/WebM(대다수 변환)의 경우 MediaBunny는 브라우저 네이티브 WebCodecs를 사용하며, 콜드 스타트 페널티 없이 FFmpeg WASM보다 5~10배 빠릅니다.

**단일 스레드 FFmpeg WASM** — 멀티스레드 FFmpeg에는 `SharedArrayBuffer`가 필요하며, 이는 `Cross-Origin-Opener-Policy: same-origin`과 `Cross-Origin-Embedder-Policy: require-corp` 헤더를 요구합니다. 이 헤더들은 서드파티 스크립트(분석, 폰트, 광고)를 망가뜨립니다. 단일 스레드는 이런 문제를 모두 회피합니다.

**Tailwind v4 + OKLCH** — 디자인 시스템은 OKLCH 색 공간을 사용해 지각적으로 균일한 청록/시안 강조색을 구현하며, 컴포넌트마다 다크 모드 오버라이드 없이도 라이트/다크 모드에서 모두 올바르게 보입니다.

---

## 📁 파일 구조

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

## 🌍 국제화

이 사이트는 로케일 접두사 경로(`/en/`, `/fr/`)와 함께 [next-intl 4](https://next-intl-docs.vercel.app/)를 사용합니다.

### 새 언어 추가하기

1. **`i18n/routing.ts`에 로케일 등록:**

   ```ts
   export const routing = defineRouting({
     locales: ['en', 'fr', 'de'],  // 'de' 추가
     defaultLocale: 'en',
   });
   ```

2. **공유 메시지 생성** — `i18n/messages/de.json` (`en.json`을 복사하여 번역).

3. **페이지별 메시지 생성** — 각 페이지 네임스페이스에 대해:

   ```
   i18n/pages/home/de.json
   i18n/pages/mp4-to-mp3/de.json
   … 등
   ```

4. **`i18n/locale.ts`에 로케일 메타데이터 추가:**

   ```ts
   de: { nativeName: 'Deutsch', englishName: 'German' },
   ```

5. `sitemap.ts`와 `generateStaticParams()`가 새 로케일을 자동으로 인식합니다 — 추가 변경 사항 없음.

---

## 📊 분석

이 사이트는 [Plausible Analytics](https://plausible.io/)를 사용합니다 — 쿠키 없음, GDPR 준수, 개인 데이터 수집 없음.

### 커스텀 이벤트

모든 이벤트는 [`lib/analytics.ts`](lib/analytics.ts)에 타입이 정의되어 있습니다.

| 이벤트 | 속성 | 발생 시점 |
|---|---|---|
| `file_selected` | `ext`, `size_mb`, `engine_hint` | 사용자가 동영상 파일을 끌어다 놓거나 선택할 때 |
| `conversion_started` | `from_ext`, `to_format`, `quality` | 변환 버튼 클릭 |
| `conversion_completed` | `from_ext`, `to_format`, `engine`, `duration_s` | 오디오 blob이 준비됨 |
| `conversion_failed` | `from_ext`, `to_format`, `reason` | 엔진이 오류를 던짐 |
| `conversion_cancelled` | `from_ext`, `to_format` | 사용자가 변환 중간에 취소 |
| `download_clicked` | `format` | 다운로드 버튼 클릭 |

이러한 이벤트는 어떤 동영상-오디오 변환 경로가 가장 인기 있는지에 대한 전체적인 그림을 제공합니다.

---

## 📦 빌드 및 배포

### 로컬 빌드

```bash
pnpm build       # 정적 내보내기 → out/
npx serve out    # 로컬 미리보기
```

빌드 결과물은 평면 파일 디렉터리입니다 — 서버 불필요.

### Cloudflare Pages에 배포

1. **Cloudflare Pages 대시보드에서 저장소 연결**

2. **빌드 설정:**

   | 설정 | 값 |
   |---|---|
   | 빌드 명령 | `pnpm build` |
   | 빌드 출력 디렉터리 | `out` |
   | Node.js 버전 | `20` |

3. **환경 변수** (Production + Preview):

   ```
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=videotoaudioconverter.org
   NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL=https://plausible.io/js/script.tagged-events.outbound-links.js
   ```

4. **커스텀 도메인:** `videotoaudioconverter.org`를 추가하고 Cloudflare DNS가 라우팅을 처리하도록 합니다.

### 캐싱 전략

| 자산 | Cache-Control | 이유 |
|---|---|---|
| `/ffmpeg-core/*` | `immutable, max-age=31536000` | 콘텐츠 주소 지정; 변경되지 않음 |
| `/_next/static/*` | `immutable, max-age=31536000` | Next.js가 파일명에 콘텐츠 해시 사용 |
| `/og.png`, `/favicon.ico` | `max-age=604800` | 가끔 업데이트됨 |
| HTML 페이지 | 캐시 없음 / 보안 헤더 | 항상 최신, 사용자 보호 |

---

## ➕ 새 포맷 페이지 추가하기

새 **동영상 오디오** 변환 랜딩 페이지(예: `flv-to-mp3`)를 추가하려면:

1. **`lib/content/format-pages.ts`에 추가:**

   ```ts
   {
     slug: 'flv-to-mp3',
     messageKey: 'flvToMp3',
     outputFormat: 'mp3',
     highlightedInputs: ['flv'],
     useCaseImages: ['https://images.unsplash.com/…'],
   }
   ```

2. **페이지 파일 생성:**

   ```ts
   // app/[locale]/flv-to-mp3/page.tsx
   import { FormatLandingPage } from '@/components/landing/FormatLandingPage'
   import { getFormatPage } from '@/lib/content/format-pages'

   const config = getFormatPage('flv-to-mp3')!

   export default function Page() {
     return <FormatLandingPage config={config} />
   }
   ```

3. **번역 추가:**

   ```
   i18n/pages/flv-to-mp3/en.json
   i18n/pages/flv-to-mp3/fr.json
   ```

4. 이 페이지는 `sitemap.ts`에 **자동으로 포함됩니다** — 추가 변경 사항 없음.

> **SEO 참고:** 각 포맷 페이지는 고유한 본문을 가져야 합니다. Google은 거의 중복된 콘텐츠를 가진 도어웨이 페이지를 처벌합니다.

---

## 🛡️ 개인정보 및 보안

- **파일 업로드 없음** — 변환은 WebCodecs / FFmpeg WASM을 통해 브라우저 내에서 완전히 실행됩니다
- **쿠키 없음** — Plausible은 쿠키리스; 동의 배너 불필요
- **localStorage 없음** — 세션 간에 아무것도 저장되지 않습니다
- **런타임 CDN 의존성 없음** — FFmpeg JS shim은 자체 호스팅되며, WASM 바이너리만 `unpkg`에서 로드된 후 영구적으로 캐시됩니다
- **모든 HTML 페이지에 적용되는 보안 헤더:**
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`

---

## 🤝 기여하기

기여를 환영합니다. 가장 영향력 있는 영역은 다음과 같습니다.

- **새 번역** — `i18n/messages/en.json`을 복사하고 번역한 후 PR을 여세요
- **새 포맷 랜딩 페이지** — 위 가이드를 따라 고유한 본문을 작성하세요
- **엔진 개선** — 더 나은 진행 보고, 추가 출력 코덱
- **UI / 접근성** — WCAG AA 준수, 키보드 내비게이션

큰 변경을 시작하기 전에 방향에 대해 논의할 수 있도록 이슈를 먼저 열어주세요.

---

## 🔍 이 프로젝트가 해결하는 문제 (키워드 및 사용 사례 참고)

**[VideoToAudioConverter.org](https://videotoaudioconverter.org)** 는 개인정보를 존중하는 **무료 온라인 동영상 오디오 변환기**를 찾는 모든 사람을 위한 결정적인 답변이 되도록 설계되었습니다. 아래는 저희가 다루는 변환 의도와 검색 쿼리의 전체 지도입니다.

### 지원되는 모든 변환 쌍

각 셀은 명시적이고 인덱싱 가능한 변환 경로입니다. 행 포맷의 파일을 끌어다 놓고 열 포맷을 선택하세요 — 그것이 변환입니다.

| 입력 ↓ / 출력 → | MP3 | WAV | M4A | AAC | FLAC | OGG | Opus |
|---|---|---|---|---|---|---|---|
| **MP4** | [mp4 to mp3](https://videotoaudioconverter.org/ko/mp4-to-mp3) | mp4 to wav | mp4 to m4a | mp4 to aac | mp4 to flac | mp4 to ogg | mp4 to opus |
| **MOV** | [mov to mp3](https://videotoaudioconverter.org/ko/mov-to-mp3) | mov to wav | mov to m4a | mov to aac | mov to flac | mov to ogg | mov to opus |
| **MKV** | [mkv to mp3](https://videotoaudioconverter.org/ko/mkv-to-mp3) | mkv to wav | mkv to m4a | mkv to aac | mkv to flac | mkv to ogg | mkv to opus |
| **WebM** | [webm to mp3](https://videotoaudioconverter.org/ko/webm-to-mp3) | webm to wav | webm to m4a | webm to aac | webm to flac | webm to ogg | webm to opus |
| **AVI** | [avi to mp3](https://videotoaudioconverter.org/ko/avi-to-mp3) | avi to wav | avi to m4a | avi to aac | avi to flac | avi to ogg | avi to opus |
| **FLV** | flv to mp3 | flv to wav | flv to m4a | flv to aac | flv to flac | flv to ogg | flv to opus |
| **WMV** | wmv to mp3 | wmv to wav | wmv to m4a | wmv to aac | wmv to flac | wmv to ogg | wmv to opus |
| **3GP** | 3gp to mp3 | 3gp to wav | 3gp to m4a | 3gp to aac | 3gp to flac | 3gp to ogg | 3gp to opus |
| **MPEG** | mpeg to mp3 | mpeg to wav | mpeg to m4a | mpeg to aac | mpeg to flac | mpeg to ogg | mpeg to opus |
| **M4V** | m4v to mp3 | m4v to wav | m4v to m4a | m4v to aac | m4v to flac | m4v to ogg | m4v to opus |

> **63개의 지원 변환 경로**, 모두 **[videotoaudioconverter.org](https://videotoaudioconverter.org)**의 동일한 변환기 위젯에서 접근 가능합니다. 전용 랜딩 페이지: [MP4 → MP3](https://videotoaudioconverter.org/ko/mp4-to-mp3) · [MOV → MP3](https://videotoaudioconverter.org/ko/mov-to-mp3) · [MKV → MP3](https://videotoaudioconverter.org/ko/mkv-to-mp3) · [WebM → MP3](https://videotoaudioconverter.org/ko/webm-to-mp3) · [AVI → MP3](https://videotoaudioconverter.org/ko/avi-to-mp3). 다른 모든 쌍은 출력 포맷 선택기를 통해 잠금 해제됩니다.

---

## 🎯 누가 동영상 오디오 변환기를 사용하나요? (사용 사례)

사람들은 매우 다양한 이유로 **동영상 오디오 변환기**를 검색합니다. 저희는 이러한 시나리오를 중심으로 UI, 본문, 랜딩 페이지를 최적화했습니다. 모두 **[videotoaudioconverter.org](https://videotoaudioconverter.org)** 에서 사용해 보실 수 있습니다.

### 🎙️ 팟캐스터 및 오디오 프로듀서

- **[동영상 녹화를 MP3로 변환](https://videotoaudioconverter.org/ko/mp4-to-mp3)** 하여 팟캐스트 배포(Spotify, Apple Podcasts, RSS).
- **Zoom 녹화**, **Google Meet 녹화**, **Microsoft Teams 녹화**, **Riverside 녹화**, **OBS 화면 녹화**에서 오디오 추출.
- **인터뷰 MP4**에서 영상 트랙을 제거하고 오디오만 배포.
- **동영상을 WAV** 또는 **FLAC**으로 변환하여 Audacity, Adobe Audition, Logic Pro, GarageBand, Reaper, Pro Tools에서 편집.

### 🎓 학생 및 교육자

- **강의 녹화를 MP3로 변환**하여 통근 중 어떤 휴대폰에서도 재생 가능 — [videotoaudioconverter.org](https://videotoaudioconverter.org)에서 사용해 보세요.
- **Zoom 수업 녹화**, **Kahoot 동영상**, **Khan Academy 다운로드**, **컨퍼런스 강연**에서 오디오 추출.
- QuickTime의 **[MOV 녹화](https://videotoaudioconverter.org/ko/mov-to-mp3)** 를 iPhone용 휴대용 **M4A**로 변환.
- 오프라인 복습을 위해 **이미 소유한 YouTube 다운로드**에서 오디오 추출(저작권을 존중하세요).

### 📱 모바일 및 소셜 미디어 사용자

- **TikTok 동영상을 MP3로** — TikTok 내보내기에서 사운드 클립 추출 — [videotoaudioconverter.org](https://videotoaudioconverter.org).
- **인스타그램 릴 동영상을 오디오로** — 릴 다운로드에서 오디오 추출.
- **WhatsApp 동영상을 MP3로** — 전달된 동영상 메시지를 오디오로 변환.
- **iPhone 동영상을 MP3로** — 사진의 `.MOV` / `.M4V` 녹화를 MP3로 변환; **[MOV to MP3](https://videotoaudioconverter.org/ko/mov-to-mp3)** 페이지를 사용하세요.
- **Android 동영상을 MP3로** — MP4 녹화에서 오디오 추출; **[MP4 to MP3](https://videotoaudioconverter.org/ko/mp4-to-mp3)** 페이지를 사용하세요.

### 🎵 음악 및 미디어 애호가

- **[뮤직비디오를 MP3로 변환](https://videotoaudioconverter.org/ko/mp4-to-mp3)** 하여 오프라인 재생(소유하거나 권리가 있는 파일에 한함).
- **콘서트 녹화** 또는 **리허설 동영상**에서 오디오 추출.
- 리믹스, 샘플링, DJ 셋용으로 동영상에서 **사운드트랙** 추출.
- [videotoaudioconverter.org](https://videotoaudioconverter.org)를 통해 **무손실 FLAC**으로 동영상 오디오 트랙 아카이브.

### 💼 비즈니스 및 지식 근로자

- **[회의 녹화를 MP3로 변환](https://videotoaudioconverter.org/ko/mp4-to-mp3)** 하여 Otter.ai, Rev, Descript, Whisper, Google 전사 도구로 전사.
- 접근성/아카이브용으로 **웨비나** 또는 **회사 전체 회의**에서 오디오 추출.
- **교육 동영상**에서 오디오를 추출하여 전사 서비스로 전송.
- **오디오 전용 버전**의 회의를 공유하여 대역폭 절약 — 모두 [videotoaudioconverter.org](https://videotoaudioconverter.org)에서.

### 🎬 비디오 편집자 및 콘텐츠 크리에이터

- Premiere Pro, DaVinci Resolve, Final Cut, CapCut, VN Editor에서 **멀티트랙 편집**을 위해 동영상에서 오디오 분리 — 임포트 전에 [videotoaudioconverter.org](https://videotoaudioconverter.org) 사용.
- **[MKV 변환기로 원본을 추출](https://videotoaudioconverter.org/ko/mkv-to-mp3)** 하여 먼저 동영상의 오디오 트랙 교체.
- 최종 동영상 전달 전에 클라이언트를 위한 **오디오 전용 미리보기** 생성.

### 🔒 개인정보를 중시하는 사용자

- 제3자 서버에 **업로드 없이** 파일 변환 — **[videotoaudioconverter.org에서 사용해 보세요](https://videotoaudioconverter.org)**.
- 기기를 떠나지 않고 **기밀 인터뷰**, **법정 진술**, **의료 녹음**, **저널리즘 출처 자료** 처리.
- 첫 페이지 로드 후 변환기를 **오프라인**으로 사용 (비행기나 SCIF에서도 작동).
- **이메일 가입**, **계정 생성**, **유료 구독**을 요구하는 변환기 회피. 자세한 내용은 [개인정보 정책](https://videotoaudioconverter.org/ko/privacy)을 참조하세요.

---

## ❓ 자주 묻는 질문

이러한 질문은 동영상 오디오 변환기를 찾을 때 사람들이 Google에 입력하는 롱테일 질문입니다. 각 질문은 [홈페이지](https://videotoaudioconverter.org)의 FAQ와 포맷별 랜딩 페이지에서 답변됩니다.

### MP4를 MP3로 온라인에서 무료로 변환하는 방법은?
**[videotoaudioconverter.org/ko/mp4-to-mp3](https://videotoaudioconverter.org/ko/mp4-to-mp3)** 에 접속하여 MP4 파일을 끌어다 놓고, 출력 포맷으로 "MP3"를 선택한 다음 변환을 클릭하고 파일을 다운로드하세요. 업로드 없음, 가입 없음, 워터마크 없음, 파일 크기 제한 없음.

### 업로드하지 않고 동영상에서 오디오를 추출하는 방법은?
**[VideoToAudioConverter.org](https://videotoaudioconverter.org)** 와 같은 **클라이언트 사이드 동영상 오디오 변환기**를 사용하세요. 변환은 WebCodecs와 FFmpeg WASM을 통해 브라우저에서 실행되며 — 파일은 서버에 절대 접촉하지 않습니다.

### 업로드하지 않는 최고의 무료 동영상 오디오 변환기는?
WebCodecs 또는 FFmpeg WASM을 사용하는 브라우저 기반 변환기만이 실제로 업로드하지 않는 유일한 카테고리입니다. **[VideoToAudioConverter.org](https://videotoaudioconverter.org)** 는 오픈소스이므로 이 주장을 직접 검증할 수 있습니다.

### Mac에서 iTunes 없이 MOV를 MP3로 변환하는 방법은?
Safari 또는 Chrome에서 **[videotoaudioconverter.org/ko/mov-to-mp3](https://videotoaudioconverter.org/ko/mov-to-mp3)** 를 열고, Finder에서 `.MOV` 파일을 드롭존으로 끌어다 놓고 "MP3"를 선택한 후 다운로드하세요. 모든 macOS 버전에서 작동하며 iTunes / Music 앱이 필요 없습니다.

### 소프트웨어 설치 없이 MKV를 MP3로 변환하는 방법은?
**[videotoaudioconverter.org/ko/mkv-to-mp3](https://videotoaudioconverter.org/ko/mkv-to-mp3)** 를 열고 MKV를 끌어다 놓고 MP3를 선택한 후 변환을 클릭하세요. VLC, HandBrake, 명령줄이 필요 없습니다.

### WebM 파일에서 오디오를 추출하는 방법은?
**[videotoaudioconverter.org/ko/webm-to-mp3](https://videotoaudioconverter.org/ko/webm-to-mp3)** 로 이동하세요. WebM은 내부적으로 Opus 또는 Vorbis 오디오를 사용합니다 — 네이티브 패스스루 품질을 위해 Opus를, 호환성을 위해 MP3를, 편집을 위해 WAV를 선택하세요.

### 2026년에 AVI를 MP3로 변환하는 방법은?
AVI는 레거시 Windows 포맷입니다. **[videotoaudioconverter.org/ko/avi-to-mp3](https://videotoaudioconverter.org/ko/avi-to-mp3)** 를 여세요 — FFmpeg WASM 폴백 엔진이 AVI를 기본적으로 처리합니다. 파일을 끌어다 놓고 MP3를 선택하면 완료입니다. DivX 코덱 설치가 필요 없습니다.

### 동영상을 320 kbps MP3로 변환하는 방법은?
**[videotoaudioconverter.org](https://videotoaudioconverter.org)** 에서 "고음질" 품질 프리셋을 선택하세요 — MP3를 320 kbps(MP3 최대 품질)로 인코딩합니다.

### 동영상에서 오디오를 WAV(무손실)로 추출하는 방법은?
**[videotoaudioconverter.org](https://videotoaudioconverter.org)** 를 열고 출력 포맷으로 "WAV"를 선택하세요. WAV는 압축되지 않은 PCM이며 — DAW에서 편집하기에 이상적입니다.

### iPhone 동영상에서 오디오를 추출하는 방법은?
iPhone 동영상은 보통 `.MOV` (H.264 + AAC) 또는 `.MP4`입니다. **[videotoaudioconverter.org/ko/mov-to-mp3](https://videotoaudioconverter.org/ko/mov-to-mp3)** 를 열고 사진/파일에서 파일을 끌어다 놓고 MP3 또는 M4A를 선택한 후 다운로드하세요.

### 동영상을 오디오로 변환하는 것이 합법인가요?
소유하거나 권리가 있는 파일을 변환하는 것은 대부분의 관할 구역에서 합법입니다. DRM을 우회하거나, 유료 스트리밍 서비스를 스크래핑하거나, 저작권을 침해하기 위해 이 도구를 사용하지 마세요. 저희는 YouTube 다운로더가 아닙니다.

### 변환기가 오프라인에서 작동하나요?
**[videotoaudioconverter.org](https://videotoaudioconverter.org)** 의 첫 페이지 로드 이후 예. FFmpeg WASM 바이너리는 1년 동안 캐시됩니다. 비행기 모드로 전환해도 여전히 파일을 변환할 수 있습니다.

---

## 🏆 VideoToAudioConverter.org 비교

| 기능 | [VideoToAudioConverter.org](https://videotoaudioconverter.org) | FreeConvert | Convertio | OnlineAudioConverter | CloudConvert |
|---|---|---|---|---|---|
| **무료** | ✅ 영구 | ✅ 제한적 | ✅ 제한적 | ✅ 제한적 | ✅ 제한적 |
| **업로드 없음 (클라이언트 사이드)** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **파일 크기 제한 없음** | ✅ | ❌ 1 GB | ❌ 100 MB | ❌ 2 GB | ❌ 1 GB |
| **가입 없음** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **광고 없음** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **오프라인 작동** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **오픈소스** | ✅ MIT | ❌ | ❌ | ❌ | ❌ |
| **일일 무제한 변환** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **설계상 GDPR 안전** | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |

> 비교는 2026년 기준 공개된 가격 등급과 기능 게이트를 반영합니다. 각 공급업체의 사이트에서 현재 제한을 확인하세요.

---

## 🗣️ 다국어 지원

동일한 변환기를 글로벌 청중을 위해 현지화했습니다. 각 번역 버전은 완전히 별도의 SEO 영역입니다.

| 로케일 | URL 접두사 | "동영상 오디오 변환기" 번역 문구 |
|---|---|---|
| 🇬🇧 영어 | [`/en/`](https://videotoaudioconverter.org/en/) | video to audio converter |
| 🇫🇷 프랑스어 | [`/fr/`](https://videotoaudioconverter.org/fr/) | convertisseur vidéo en audio |
| 🇪🇸 스페인어 | `/es/` *(예정)* | convertidor de video a audio |
| 🇩🇪 독일어 | `/de/` *(예정)* | Video zu Audio Konverter |
| 🇮🇹 이탈리아어 | `/it/` *(예정)* | convertitore da video ad audio |
| 🇵🇹 포르투갈어 | `/pt/` *(예정)* | conversor de vídeo para áudio |
| 🇨🇳 중국어(간체) | `/zh/` *(예정)* | 视频转音频转换器 |
| 🇯🇵 일본어 | `/ja/` *(예정)* | 動画から音声に変換 |
| 🇰🇷 한국어 | `/ko/` *(예정)* | 비디오를 오디오로 변환 |
| 🇷🇺 러시아어 | `/ru/` *(예정)* | конвертер видео в аудио |
| 🇸🇦 아랍어 | `/ar/` *(예정)* | محول فيديو إلى صوت |
| 🇮🇳 힌디어 | `/hi/` *(예정)* | वीडियो को ऑडियो में बदलें |
| 🇮🇩 인도네시아어 | `/id/` *(예정)* | konverter video ke audio |
| 🇹🇷 터키어 | `/tr/` *(예정)* | video ses dönüştürücü |
| 🇻🇳 베트남어 | `/vi/` *(예정)* | chuyển video sang âm thanh |

로케일 추가는 번역이 준비되면 약 30분이 소요됩니다 — 위 [국제화](#-국제화) 섹션을 참조하세요. 라이브 영어 홈페이지는 [videotoaudioconverter.org/en/](https://videotoaudioconverter.org/en/)에 있으며, 프랑스어 버전은 [videotoaudioconverter.org/fr/](https://videotoaudioconverter.org/fr/)에 있습니다.

---

## 📚 용어집 — 오디오 및 동영상 포맷 설명

"MP3와 M4A의 차이점은 무엇인가" 또는 "팟캐스트에 가장 좋은 오디오 포맷은 무엇인가"와 같은 검색을 위한 참고 자료입니다.

### 출력 포맷 (오디오)

- **MP3** — 범용 오디오 포맷. 손실 압축. 128 kbps = 괜찮음, 192 kbps = 좋음, 320 kbps = 우수함. 1998년 이후 만들어진 모든 기기에서 재생됩니다. 용도: 팟캐스트, 스트리밍, 공유.
- **WAV** — 압축되지 않은 PCM 오디오. 큰 파일(분당 약 10 MB)이지만 비트 단위로 완벽함. 용도: DAW에서 편집, 마스터링, 아카이브 소스.
- **M4A** — 일반적으로 AAC를 포함하는 MPEG-4 오디오 컨테이너. 더 낮은 비트레이트에서 MP3와 동일한 품질. 용도: iTunes / Apple Music 생태계, iPhone 벨소리.
- **AAC** — Advanced Audio Coding. 동일한 비트레이트에서 MP3보다 더 나은 품질. YouTube, Apple, 현대 방송의 표준. 용도: MP3가 작동하는 모든 곳에서 더 나은 품질을 원할 때.
- **FLAC** — Free Lossless Audio Codec. 품질 손실 없이 압축하며 WAV의 약 50% 크기. 용도: 오디오파일 아카이빙, 고해상도 음악 컬렉션.
- **OGG (Vorbis)** — 오픈소스 손실 포맷. 동일한 비트레이트에서 MP3보다 더 나은 품질. 용도: 오픈소스 생태계, 게임, 웹.
- **Opus** — 가장 현대적인 손실 코덱. 낮은 비트레이트에서 MP3 / AAC / Vorbis를 압도합니다. 용도: 음성(팟캐스트, VoIP), 저대역폭 오디오, WebRTC.

### 입력 포맷 (동영상)

- **MP4** — MPEG-4 컨테이너의 H.264 / H.265 동영상 + AAC 오디오. 거의 모든 것에 대한 기본값: YouTube 다운로드, 휴대폰 녹화, 화면 캡처.
- **MOV** — Apple QuickTime 컨테이너. iPhone, Mac, ScreenFlow, Final Cut에서 흔히 사용됩니다.
- **MKV** — Matroska. 모든 코덱을 담을 수 있는 오픈 컨테이너. 고품질 동영상 다운로드, 애니메이션, 블루레이 립에서 흔합니다.
- **WebM** — Google이 후원하는 오픈 컨테이너. VP8 / VP9 / AV1 동영상 + Opus / Vorbis 오디오. 웹 동영상의 표준(WebM의 YouTube 다운로드, WhatsApp Web).
- **AVI** — Audio Video Interleave. 90년대의 레거시 Microsoft 포맷, 여전히 구형 아카이브와 Windows 전용 소프트웨어 내보내기에서 흔합니다.
- **FLV** — Flash Video. 레거시 Adobe Flash 포맷. 오늘날에는 드물지만 구형 다운로드에서 여전히 발견됩니다.
- **WMV** — Windows Media Video. Microsoft 독점, 구형 Windows Movie Maker / PowerPoint 내보내기에서 흔합니다.
- **3GP** — 스마트폰 이전 시대의 모바일 컨테이너. 일부 피처폰과 구형 캠코더에서 여전히 생성됩니다.
- **MPEG (MPG)** — 원본 MPEG-1 / MPEG-2 동영상 포맷. 구형 DVD와 TV 방송에 사용됩니다.

---

## 🧭 매칭하는 검색 의도

이 사이트가 순위를 차지하도록 설계된 검색 쿼리의 비망라적 목록입니다. 각 쿼리는 사이트의 어딘가(홈페이지, 포맷 페이지, FAQ 또는 이 README)에서 주요 콘텐츠로 인덱싱됩니다.

<details>
<summary><strong>🔹 헤드 용어 (검색량 높음)</strong></summary>

video to audio converter · video to mp3 · video to mp3 converter · convert video to mp3 · convert video to audio · extract audio from video · mp3 converter · online mp3 converter · free mp3 converter · audio extractor · video sound extractor · rip audio from video · video to audio · audio from video · get audio from video · video to mp3 online · convert video to mp3 free · free video to audio converter · video to mp3 free · online video to audio converter · 비디오를 오디오로 변환 · 비디오 mp3 변환 · 동영상 mp3 변환 · 동영상에서 오디오 추출 · 무료 동영상 변환기 · 온라인 동영상 변환 · 비디오 오디오 추출기 · 동영상 음성 추출 · 영상 음성 추출 · 영상 mp3 변환

</details>

<details>
<summary><strong>🔹 포맷 쌍 변환 (롱테일, 높은 의도)</strong></summary>

mp4 to mp3 · mp4 to wav · mp4 to m4a · mp4 to aac · mp4 to flac · mp4 to ogg · mp4 to opus · mov to mp3 · mov to wav · mov to m4a · mov to aac · mkv to mp3 · mkv to wav · mkv to flac · mkv to aac · webm to mp3 · webm to ogg · webm to opus · webm to wav · avi to mp3 · avi to wav · flv to mp3 · wmv to mp3 · 3gp to mp3 · mpeg to mp3 · m4v to mp3 · mp4 mp3 변환 · mov mp3 변환 · mkv mp3 변환 · webm mp3 변환 · 비디오 wav 변환

</details>

<details>
<summary><strong>🔹 품질 / 비트레이트 수식어</strong></summary>

320 kbps mp3 converter · high quality video to mp3 · lossless video to audio · video to flac · hd audio extractor · cd quality wav extractor · 192 kbps mp3 · 128 kbps mp3 · best quality video to mp3 · convert video to high quality audio · 320kbps mp3 변환 · 고음질 mp3 변환 · 무손실 오디오 변환

</details>

<details>
<summary><strong>🔹 개인정보 및 신뢰 수식어</strong></summary>

video to mp3 no upload · video converter no upload · client-side video to mp3 · browser-based video converter · offline video to audio · private video to mp3 · secure video converter · no signup video to mp3 · no registration audio extractor · no watermark video to mp3 · ad-free video converter · gdpr-safe video converter · video to mp3 without uploading file · open source video to audio converter · 업로드 없이 비디오 변환 · 브라우저 비디오 변환 · 클라이언트 사이드 변환 · 광고 없는 변환기 · 회원가입 없는 변환기

</details>

<details>
<summary><strong>🔹 기기 / 플랫폼 수식어</strong></summary>

iphone video to mp3 · android video to mp3 · mac video to mp3 · windows video to mp3 · linux video to mp3 · chromebook video to mp3 · ipad video to audio · safari video to mp3 · chrome video to mp3 · firefox video to mp3 · edge video to mp3 · ios video to mp3 converter · 아이폰 동영상 mp3 · 안드로이드 동영상 mp3 · 맥 동영상 mp3 · 윈도우 동영상 mp3

</details>

<details>
<summary><strong>🔹 소스별 의도 (소유 파일만 — 저희는 YouTube 다운로더가 아닙니다)</strong></summary>

zoom recording to mp3 · google meet recording to mp3 · teams recording to mp3 · screen recording to mp3 · obs recording to mp3 · tiktok video to mp3 · instagram reel to mp3 · whatsapp video to mp3 · iphone screen recording to mp3 · webinar recording to audio · interview video to mp3 · podcast video to mp3 · lecture recording to mp3 · 줌 녹화 mp3 · 회의 녹화 mp3 · 강의 녹화 mp3 · 틱톡 mp3 추출 · 화면 녹화 mp3

</details>

<details>
<summary><strong>🔹 사용 방법 롱테일 (FAQ / 추천 스니펫 타깃)</strong></summary>

how to convert mp4 to mp3 · how to extract audio from video · how to convert video to mp3 free · how to convert video to mp3 without software · how to get sound from a video · how to rip audio from a video file · how to convert mov to mp3 on mac · how to convert mkv to mp3 · how to extract audio from webm · how to convert avi to mp3 in 2026 · how to convert video to mp3 on iphone · how to convert video to mp3 on android · how to convert video to mp3 offline · how to convert video to 320 kbps mp3 · how to convert video to wav · how to extract audio from a video without uploading · 동영상에서 음성만 추출 · 동영상 음성 변환

</details>

<details>
<summary><strong>🔹 비교 / 대안</strong></summary>

freeconvert alternative · convertio alternative · cloudconvert alternative · onlineaudioconverter alternative · ytmp3 alternative · zamzar alternative · best free video to audio converter · best browser video to mp3 converter · best private video converter · open source alternative to convertio

</details>

<details>
<summary><strong>🔹 다국어</strong></summary>

convertisseur vidéo en audio · convertidor de video a audio · video zu audio konverter · conversor de vídeo para áudio · convertitore video audio · 视频转音频 · 視頻轉音頻 · 動画 音声 変換 · 비디오 오디오 변환 · 동영상 음성 변환 · 비디오 mp3 변환기 · конвертер видео в аудио · محول فيديو إلى صوت · वीडियो को ऑडियो में बदलें · konverter video ke audio · video ses dönüştürücü · chuyển video sang âm thanh

</details>

---

## 🌟 요약

다음을 갖춘 **무료 온라인 동영상 오디오 변환기**를 찾고 계신다면:

- ✅ **[MP4를 MP3로](https://videotoaudioconverter.org/ko/mp4-to-mp3)**, **[MOV를 MP3로](https://videotoaudioconverter.org/ko/mov-to-mp3)**, **[MKV를 MP3로](https://videotoaudioconverter.org/ko/mkv-to-mp3)**, **[WebM을 MP3로](https://videotoaudioconverter.org/ko/webm-to-mp3)**, **[AVI를 MP3로](https://videotoaudioconverter.org/ko/avi-to-mp3)** 그리고 58개의 추가 변환 쌍을 변환합니다
- ✅ **브라우저에서 100%** 실행되며 **업로드 없음**, **추적 없음**
- ✅ **파일 크기 제한 없음**, **가입 없음**, **광고 없음**, **워터마크 없음**
- ✅ 최대 **320 kbps** 또는 **무손실**의 **MP3, WAV, M4A, AAC, FLAC, OGG, Opus** 출력 지원
- ✅ **Mac, Windows, Linux, Chromebook, iPhone, iPad, Android**에서 작동
- ✅ **오픈소스**, **GDPR 안전**, 첫 로드 후 **오프라인** 작동

— 그렇다면 **[videotoaudioconverter.org](https://videotoaudioconverter.org)** 를 북마크하고 이 저장소에 별을 눌러주세요. ⭐

---

## 📄 라이선스

- **소스 코드:** [MIT](LICENSE)
- **FFmpeg:** [LGPL 2.1](https://ffmpeg.org/legal.html) (WASM을 통해 동적으로 링크됨)
- **MediaBunny:** MIT
- **shadcn/ui:** MIT

---

<p align="center">
  ❤️로 제작 · <a href="https://pages.cloudflare.com/">Cloudflare Pages</a>에서 호스팅 · <a href="https://plausible.io/">Plausible</a>로 분석
</p>

<p align="center">
  <sub>
    키워드: 비디오를 오디오로 변환 · 비디오 mp3 변환 · 동영상 mp3 변환 · mp4 mp3 변환 · mov mp3 변환 · mkv mp3 변환 · webm mp3 변환 · avi mp3 변환 · 동영상에서 오디오 추출 · 비디오 오디오 추출기 · 무료 온라인 · 업로드 없음 · 클라이언트 사이드 · 오픈소스 · WebCodecs · FFmpeg WASM
  </sub>
</p>
