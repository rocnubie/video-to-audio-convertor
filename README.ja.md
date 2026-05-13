<p align="center">
  <img src="app/icon.svg" alt="VideoToAudioConverter Logo" width="80" height="80" />
</p>

<h1 align="center">VideoToAudioConverter.org</h1>

<p align="center">
  <a href="./README.md">English</a> ·
  <a href="./README.zh.md">简体中文</a> ·
  <a href="./README.es.md">Español</a> ·
  <strong>日本語</strong> ·
  <a href="./README.ko.md">한국어</a> ·
  <a href="./README.de.md">Deutsch</a> ·
  <a href="./README.fr.md">Français</a> ·
  <a href="./README.pt.md">Português</a> ·
  <a href="./README.it.md">Italiano</a> ·
  <a href="./README.ar.md">العربية</a> ·
  <a href="./README.hi.md">हिन्दी</a>
</p>

<p align="center">
  <strong>最速の無料動画から音声への変換ツール — 100% ブラウザ内で完結、アップロード不要、トラッキングなし。</strong>
</p>

<p align="center">
  <a href="https://videotoaudioconverter.org/ja/"><img src="https://img.shields.io/badge/live-videotoaudioconverter.org-0ea5e9?style=flat-square&logo=cloudflare&logoColor=white" alt="Live site" /></a>
  <img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/Tailwind-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind v4" />
  <img src="https://img.shields.io/badge/FFmpeg-WASM-007808?style=flat-square&logo=ffmpeg&logoColor=white" alt="FFmpeg WASM" />
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="MIT License" />
</p>

<p align="center">
  <a href="https://videotoaudioconverter.org/ja/">🌐 ライブデモ</a> ·
  <a href="#-はじめに">クイックスタート</a> ·
  <a href="#-仕組み">仕組み</a> ·
  <a href="#-対応フォーマット">対応フォーマット</a> ·
  <a href="#-ビルドとデプロイ">デプロイ</a>
</p>

---

## これは何ですか？

**[VideoToAudioConverter.org](https://videotoaudioconverter.org/ja/)** は、ユーザーのブラウザ内で完全に動作する、本番稼働品質のオープンソース**動画から音声への変換ツール**です。動画ファイルをドロップし、音声フォーマットを選び、変換ボタンを押すだけ — 音声ファイルが即座にダウンロードされます。サーバーなし、アカウント不要、バックエンドによるファイルサイズ制限なし。

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

### なぜもうひとつの動画から音声への変換ツールが必要なのか？

| 機能 | VideoToAudioConverter.org | 一般的なオンライン変換ツール |
|---|---|---|
| 100% ブラウザで動作 | ✅ WebCodecs + FFmpeg WASM | ❌ サーバーへアップロード |
| ファイルサイズ制限 | ✅ なし（RAM が上限） | ❌ 50〜500 MB の制限 |
| プライバシー / トラッキングなし | ✅ Cookie ゼロ、アップロードゼロ | ❌ ファイルがサーバーに保存される |
| オフライン動作（初回読み込み後） | ✅ WASM が永久キャッシュ | ❌ インターネット必須 |
| オープンソース | ✅ MIT | ❌ クローズドソース |
| 広告なし | ✅ | ❌ 大量の広告 |
| 高速（モダンフォーマット） | ✅ WebCodecs ネイティブ速度 | ❌ サーバー処理待ち |

---

## ✨ 機能

### コアコンバーター

- **ドラッグ＆ドロップ**またはクリックで任意の動画ファイルを選択
- **9 種類の入力フォーマット** → MP4、MOV、MKV、WebM、AVI、FLV、WMV、3GP、MPEG
- **7 種類の出力フォーマット** → MP3、WAV、M4A、AAC、FLAC、OGG、Opus
- **品質プリセット** → 高音質（320 kbps）、標準（192 kbps）、低音質（128 kbps）、ロスレス
- **リアルタイム進捗バー**とステージラベル（demux → decode → encode → mux）
- **即時ダウンロード** — 音声 Blob はメモリから配信、サーバーには触れない

### プライバシー第一のアーキテクチャ

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

### SEO 最適化されたフォーマット別ランディングページ

人気のある**動画から音声**変換ペアごとに、専用かつ完全翻訳済みのランディングページを用意しています。

| ページ | ライブ URL |
|---|---|
| MP4 から MP3 への変換 | [videotoaudioconverter.org/ja/mp4-to-mp3](https://videotoaudioconverter.org/ja/mp4-to-mp3) |
| MOV から MP3 への変換 | [videotoaudioconverter.org/ja/mov-to-mp3](https://videotoaudioconverter.org/ja/mov-to-mp3) |
| MKV から MP3 への変換 | [videotoaudioconverter.org/ja/mkv-to-mp3](https://videotoaudioconverter.org/ja/mkv-to-mp3) |
| WebM から MP3 への変換 | [videotoaudioconverter.org/ja/webm-to-mp3](https://videotoaudioconverter.org/ja/webm-to-mp3) |
| AVI から MP3 への変換 | [videotoaudioconverter.org/ja/avi-to-mp3](https://videotoaudioconverter.org/ja/avi-to-mp3) |

各ページにはユニークな本文、JSON-LD スキーマ（SoftwareApplication、HowTo、FAQPage）、Open Graph タグが含まれます — 重複コンテンツはありません。

### 国際化対応

- 英語（`/en/`）とフランス語（`/fr/`）を標準サポート
- ページごとのメッセージ名前空間で詳細な i18n に対応（UI 文字列だけではありません）
- 15 以上の追加ロケール（zh、ja、ko、es、de、pt、it、ru、ar、hi、id、tr、vi …）にも対応可能なインフラ

---

## 🔧 仕組み

このコンバーターは、各入力ファイルに対して利用可能な最速のエンジンを自動的に選択する**デュアルエンジンアーキテクチャ**で動作します。

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

### エンジン詳細

#### MediaBunny — プライマリエンジン

[MediaBunny](https://github.com/nicktindall/mediabunny) は、ブラウザネイティブの **WebCodecs API** をシンプルなトランスコードパイプラインにラップしたものです。対応フォーマットでは WASM のオーバーヘッドなしにメインスレッドで動作します。

- **対応入力:** MP4、M4V、MOV、QT、MKV、WebM
- **速度:** ほぼネイティブ — 1 時間の MP4 を最新ハードウェアで約 10 秒で変換可能
- **COOP/COEP ヘッダー不要** — サードパーティスクリプトと共存可能

#### FFmpeg WASM — フォールバックエンジン

[@ffmpeg/ffmpeg](https://github.com/ffmpegwasm/ffmpeg.wasm) は、FFmpeg バイナリ全体を WebAssembly にコンパイルしたものです。シングルスレッドで動作（SharedArrayBuffer / COOP は不要）。

- **対応入力:** AVI、FLV、WMV、3GP、MPEG、および MediaBunny が処理できないあらゆるフォーマット
- **WASM サイズ:** 約 31 MB（`Cache-Control: immutable, max-age=31536000` でキャッシュ）
- **セルフホストされた JS シム** を `/ffmpeg-core/ffmpeg-core.js` に配置し、CDN 依存を回避

---

## 📂 対応フォーマット

### 入力フォーマット（動画から音声）

| フォーマット | 拡張子 | エンジン | 備考 |
|---|---|---|---|
| MP4 | `.mp4`、`.m4v` | MediaBunny | 最も一般的な動画フォーマット |
| MOV | `.mov`、`.qt` | MediaBunny | Apple QuickTime |
| MKV | `.mkv` | MediaBunny | Matroska コンテナ |
| WebM | `.webm` | MediaBunny | Web ネイティブ（VP8/VP9/AV1） |
| AVI | `.avi` | FFmpeg WASM | レガシー Windows フォーマット |
| FLV | `.flv` | FFmpeg WASM | Flash Video |
| WMV | `.wmv` | FFmpeg WASM | Windows Media Video |
| 3GP | `.3gp` | FFmpeg WASM | モバイル動画 |
| MPEG | `.mpeg`、`.mpg` | FFmpeg WASM | 古い放送フォーマット |

### 出力フォーマット（音声）

| フォーマット | 品質オプション | 用途 |
|---|---|---|
| **MP3** | 128 / 192 / 320 kbps | 汎用的な互換性、ストリーミング、ポッドキャスト |
| **WAV** | ロスレス PCM | プロフェッショナル音声、DAW へのインポート |
| **AAC** | 128 / 192 / 320 kbps | Apple デバイス、iTunes、MP3 より高い圧縮率 |
| **M4A** | 128 / 192 / 320 kbps | iTunes、Apple Music |
| **FLAC** | ロスレス | オーディオファイル向けアーカイブ |
| **OGG** | 128 / 192 / 320 kbps | オープンフォーマット、高い圧縮率 |
| **Opus** | 128 / 192 / 320 kbps | 圧縮率と品質のバランス最高、VoIP |

---

## 🚀 はじめに

### 前提条件

- **Node.js** 20 以上
- **pnpm** 9 以上（`npm install -g pnpm`）

### インストール

```bash
git clone https://github.com/rocnubie/video-to-audio-convertor.git
cd video-to-audio-convertor

pnpm install
# postinstall automatically copies @ffmpeg/core WASM into public/ffmpeg-core/
```

### 開発サーバー

```bash
pnpm dev
```

[http://localhost:3000](http://localhost:3000) を開いてください — アプリは自動的に `/en/` にリダイレクトされます。

> **ヒント:** FFmpeg WASM の初回読み込み（約 31 MB）は時間がかかります。その後の読み込みは `Cache-Control: immutable` により瞬時に行われます。

### 環境変数

`.env.example` を `.env.local` にコピーします。

```bash
cp .env.example .env.local
```

| 変数 | 説明 | 例 |
|---|---|---|
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible サイトドメイン | `videotoaudioconverter.org` |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` | Plausible スクリプト URL | `https://plausible.io/js/script.tagged-events.outbound-links.js` |

開発環境ではこれらを空のままにしてください — アナリティクスは単にスキップされます。

---

## 🏗️ 技術スタック

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

### なぜこれらを選んだのか？

**Next.js の静的エクスポート** — サイト全体がフラットな HTML/JS/CSS ファイルとして事前レンダリングされます。本番環境に Node.js サーバーは存在しません。Cloudflare Pages がエッジから全てを配信します。

**FFmpeg ではなく MediaBunny を優先** — MP4/MOV/MKV/WebM（変換の大部分）では、MediaBunny はネイティブのブラウザ WebCodecs を使用し、FFmpeg WASM よりも 5〜10 倍高速で、コールドスタートのペナルティもありません。

**シングルスレッドの FFmpeg WASM** — マルチスレッド FFmpeg は `SharedArrayBuffer` を必要とし、これには `Cross-Origin-Opener-Policy: same-origin` と `Cross-Origin-Embedder-Policy: require-corp` が必要です。これらのヘッダーはサードパーティスクリプト（アナリティクス、フォント、広告）を壊します。シングルスレッドならそれを完全に回避できます。

**Tailwind v4 + OKLCH** — デザインシステムは OKLCH 色空間を使用し、ライトモードとダークモードの両方で正しく見える、知覚的に均一なティール/シアンのアクセントカラーを実現しています。コンポーネント毎の手動ダークモード上書きは不要です。

---

## 📁 ファイル構造

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

## 🌍 国際化対応

サイトはロケールプレフィックス付きルート（`/en/`、`/fr/`）で [next-intl 4](https://next-intl-docs.vercel.app/) を使用しています。

### 新しい言語の追加方法

1. **`i18n/routing.ts` にロケールを登録します。**

   ```ts
   export const routing = defineRouting({
     locales: ['en', 'fr', 'de'],  // 'de' を追加
     defaultLocale: 'en',
   });
   ```

2. `i18n/messages/de.json` に**共有メッセージを作成**します（`en.json` をコピーして翻訳）。

3. 各ページ名前空間ごとに**ページ別メッセージを作成**します。

   ```
   i18n/pages/home/de.json
   i18n/pages/mp4-to-mp3/de.json
   … など
   ```

4. `i18n/locale.ts` に**ロケールメタデータを追加**します。

   ```ts
   de: { nativeName: 'Deutsch', englishName: 'German' },
   ```

5. `sitemap.ts` と `generateStaticParams()` は新しいロケールを自動的に検知します — 追加の変更は不要です。

---

## 📊 アナリティクス

サイトは [Plausible Analytics](https://plausible.io/) を使用しています — Cookie なし、GDPR 準拠、個人データを一切収集しません。

### カスタムイベント

すべてのイベントは [`lib/analytics.ts`](lib/analytics.ts) で型付けされています。

| イベント | プロパティ | 発火タイミング |
|---|---|---|
| `file_selected` | `ext`、`size_mb`、`engine_hint` | ユーザーが動画ファイルをドロップまたは選択したとき |
| `conversion_started` | `from_ext`、`to_format`、`quality` | 変換ボタンがクリックされたとき |
| `conversion_completed` | `from_ext`、`to_format`、`engine`、`duration_s` | 音声 Blob が準備完了したとき |
| `conversion_failed` | `from_ext`、`to_format`、`reason` | エンジンがエラーをスローしたとき |
| `conversion_cancelled` | `from_ext`、`to_format` | ユーザーが変換中にキャンセルしたとき |
| `download_clicked` | `format` | ダウンロードボタンがクリックされたとき |

これらのイベントにより、どの動画から音声への変換パスが最も人気なのかを完全に把握できます。

---

## 📦 ビルドとデプロイ

### ローカルビルド

```bash
pnpm build       # static export → out/
npx serve out    # preview locally
```

ビルド出力はフラットなファイルのディレクトリです — サーバーは不要です。

### Cloudflare Pages へのデプロイ

1. Cloudflare Pages ダッシュボードで**リポジトリを接続**します。

2. **ビルド設定:**

   | 設定項目 | 値 |
   |---|---|
   | ビルドコマンド | `pnpm build` |
   | ビルド出力ディレクトリ | `out` |
   | Node.js バージョン | `20` |

3. **環境変数**（本番環境 + プレビュー）:

   ```
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=videotoaudioconverter.org
   NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL=https://plausible.io/js/script.tagged-events.outbound-links.js
   ```

4. **カスタムドメイン:** `videotoaudioconverter.org` を追加し、Cloudflare DNS にルーティングを任せます。

### キャッシュ戦略

| アセット | Cache-Control | 理由 |
|---|---|---|
| `/ffmpeg-core/*` | `immutable, max-age=31536000` | コンテンツアドレス指定。決して変わらない |
| `/_next/static/*` | `immutable, max-age=31536000` | Next.js がファイル名にコンテンツハッシュを付与 |
| `/og.png`、`/favicon.ico` | `max-age=604800` | 頻繁には更新されない |
| HTML ページ | キャッシュなし / セキュリティヘッダー | 常に最新を提供、ユーザー保護 |

---

## ➕ 新しいフォーマットページの追加

新しい**動画から音声**変換ランディングページ（例: `flv-to-mp3`）を追加するには:

1. **`lib/content/format-pages.ts` に追加します:**

   ```ts
   {
     slug: 'flv-to-mp3',
     messageKey: 'flvToMp3',
     outputFormat: 'mp3',
     highlightedInputs: ['flv'],
     useCaseImages: ['https://images.unsplash.com/…'],
   }
   ```

2. **ページファイルを作成します:**

   ```ts
   // app/[locale]/flv-to-mp3/page.tsx
   import { FormatLandingPage } from '@/components/landing/FormatLandingPage'
   import { getFormatPage } from '@/lib/content/format-pages'

   const config = getFormatPage('flv-to-mp3')!

   export default function Page() {
     return <FormatLandingPage config={config} />
   }
   ```

3. **翻訳を追加します:**

   ```
   i18n/pages/flv-to-mp3/en.json
   i18n/pages/flv-to-mp3/fr.json
   ```

4. ページは `sitemap.ts` に**自動的に含まれます** — それ以上の変更は不要です。

> **SEO 注意:** 各フォーマットページにはユニークなコンテンツが必要です。Google はほぼ重複したコンテンツを持つドアウェイページにペナルティを科します。

---

## 🛡️ プライバシーとセキュリティ

- **ファイルのアップロードなし** — 変換は WebCodecs / FFmpeg WASM を介してブラウザ内で完結
- **Cookie なし** — Plausible は Cookie レス。同意バナー不要
- **localStorage なし** — セッション間で何も永続化されない
- **実行時の CDN 依存なし** — FFmpeg JS シムはセルフホスト。WASM バイナリのみ初回読み込み時に `unpkg` から読み込み、その後は永久キャッシュ
- **全 HTML ページに以下のセキュリティヘッダー:**
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`

---

## 🤝 コントリビューション

コントリビューションを歓迎します。特に影響の大きい領域は次のとおりです。

- **新規翻訳** — `i18n/messages/en.json` をコピーし、翻訳して PR を作成
- **新規フォーマットランディングページ** — 上記のガイドに従い、ユニークな本文を用意
- **エンジン改善** — より良い進捗レポート、追加の出力コーデック
- **UI / アクセシビリティ** — WCAG AA 準拠、キーボードナビゲーション

大きな変更を始める前に、方向性を議論できるよう Issue を立ててください。

---

## 🔍 このプロジェクトが解決すること（キーワード & ユースケース参照）

**[VideoToAudioConverter.org](https://videotoaudioconverter.org/ja/)** は、プライバシーを尊重する**無料オンライン動画から音声への変換ツール**を求めるすべての人にとって決定的な答えとなることを目指して構築されています。以下は、対応する変換意図と検索クエリの完全なマップです。

### サポートするすべての変換ペア

各セルは明示的でインデックス可能な変換パスです。行のフォーマットのファイルをドロップし、列のフォーマットを選択するだけ — それが変換です。

| 入力 ↓ / 出力 → | MP3 | WAV | M4A | AAC | FLAC | OGG | Opus |
|---|---|---|---|---|---|---|---|
| **MP4** | [mp4 to mp3](https://videotoaudioconverter.org/ja/mp4-to-mp3) | mp4 to wav | mp4 to m4a | mp4 to aac | mp4 to flac | mp4 to ogg | mp4 to opus |
| **MOV** | [mov to mp3](https://videotoaudioconverter.org/ja/mov-to-mp3) | mov to wav | mov to m4a | mov to aac | mov to flac | mov to ogg | mov to opus |
| **MKV** | [mkv to mp3](https://videotoaudioconverter.org/ja/mkv-to-mp3) | mkv to wav | mkv to m4a | mkv to aac | mkv to flac | mkv to ogg | mkv to opus |
| **WebM** | [webm to mp3](https://videotoaudioconverter.org/ja/webm-to-mp3) | webm to wav | webm to m4a | webm to aac | webm to flac | webm to ogg | webm to opus |
| **AVI** | [avi to mp3](https://videotoaudioconverter.org/ja/avi-to-mp3) | avi to wav | avi to m4a | avi to aac | avi to flac | avi to ogg | avi to opus |
| **FLV** | flv to mp3 | flv to wav | flv to m4a | flv to aac | flv to flac | flv to ogg | flv to opus |
| **WMV** | wmv to mp3 | wmv to wav | wmv to m4a | wmv to aac | wmv to flac | wmv to ogg | wmv to opus |
| **3GP** | 3gp to mp3 | 3gp to wav | 3gp to m4a | 3gp to aac | 3gp to flac | 3gp to ogg | 3gp to opus |
| **MPEG** | mpeg to mp3 | mpeg to wav | mpeg to m4a | mpeg to aac | mpeg to flac | mpeg to ogg | mpeg to opus |
| **M4V** | m4v to mp3 | m4v to wav | m4v to m4a | m4v to aac | m4v to flac | m4v to ogg | m4v to opus |

> **63 種類の変換パスに対応**し、すべて **[videotoaudioconverter.org](https://videotoaudioconverter.org/ja/)** の同じコンバーターウィジェットからアクセスできます。専用ランディングページ: [MP4 → MP3](https://videotoaudioconverter.org/ja/mp4-to-mp3) · [MOV → MP3](https://videotoaudioconverter.org/ja/mov-to-mp3) · [MKV → MP3](https://videotoaudioconverter.org/ja/mkv-to-mp3) · [WebM → MP3](https://videotoaudioconverter.org/ja/webm-to-mp3) · [AVI → MP3](https://videotoaudioconverter.org/ja/avi-to-mp3)。その他のすべてのペアは出力フォーマットセレクターで利用できます。

---

## 🎯 動画から音声への変換ツールは誰が使う？（ユースケース）

人々は様々な理由で**動画から音声への変換ツール**を検索します。UI、コピー、ランディングページはこれらのシナリオに最適化されています。これらすべてを **[videotoaudioconverter.org](https://videotoaudioconverter.org/ja/)** で試すことができます。

### 🎙️ ポッドキャスター & 音声プロデューサー

- **[動画録画を MP3 に変換](https://videotoaudioconverter.org/ja/mp4-to-mp3)** して、ポッドキャスト配信（Spotify、Apple Podcasts、RSS）に使用。
- **Zoom 録画**、**Google Meet 録画**、**Microsoft Teams 録画**、**Riverside 録画**、**OBS 画面録画**から音声を抽出。
- **インタビュー MP4** から映像トラックを取り除き、音声のみで配信。
- Audacity、Adobe Audition、Logic Pro、GarageBand、Reaper、Pro Tools で編集するために**動画を WAV** や **FLAC** に変換。

### 🎓 学生 & 教育者

- **講義録音を MP3 に変換**して、通勤中に任意のスマホで再生可能に — [videotoaudioconverter.org](https://videotoaudioconverter.org/ja/) で試してみましょう。
- **Zoom クラス録画**、**Kahoot 動画**、**Khan Academy ダウンロード**、**学会講演**から音声を抽出。
- QuickTime からの **[MOV 録画](https://videotoaudioconverter.org/ja/mov-to-mp3)** を iPhone 向けに持ち運べる **M4A** に変換。
- すでに所有している **YouTube ダウンロード**からオフライン復習用の音声を取得（著作権を尊重してください）。

### 📱 モバイル & ソーシャルメディアユーザー

- **TikTok 動画を MP3 に** — [videotoaudioconverter.org](https://videotoaudioconverter.org/ja/) で TikTok エクスポートから音声クリップを抽出。
- **Instagram Reel 動画から音声へ** — Reel ダウンロードから音声を取り出し。
- **WhatsApp 動画を MP3 に** — 転送された動画メッセージを音声に変換。
- **iPhone 動画を MP3 に** — Photos から `.MOV` / `.M4V` 録画を MP3 に変換、**[MOV から MP3](https://videotoaudioconverter.org/ja/mov-to-mp3)** ページを利用。
- **Android 動画を MP3 に** — MP4 録画から音声を抽出、**[MP4 から MP3](https://videotoaudioconverter.org/ja/mp4-to-mp3)** ページを利用。

### 🎵 音楽 & メディア愛好家

- **[ミュージックビデオを MP3 に変換](https://videotoaudioconverter.org/ja/mp4-to-mp3)** してオフライン再生（所有または権利のあるファイル）。
- **コンサート録画**や**リハーサル動画**から音声を抽出。
- リミックス、サンプリング、DJ セット用に動画から**サウンドトラック**を抜き出す。
- [videotoaudioconverter.org](https://videotoaudioconverter.org/ja/) を介して動画の音声トラックを**ロスレス FLAC** でアーカイブ。

### 💼 ビジネス & ナレッジワーカー

- **[会議録画を MP3 に変換](https://videotoaudioconverter.org/ja/mp4-to-mp3)** して、Otter.ai、Rev、Descript、Whisper、または Google の文字起こしツールで書き起こし。
- アクセシビリティ / アーカイブのために**ウェビナー**や**全社会議**から音声を抽出。
- 文字起こしサービスに送るために**トレーニング動画**から音声を抽出。
- 会議の**音声のみ版**を共有して帯域を節約 — すべて [videotoaudioconverter.org](https://videotoaudioconverter.org/ja/) で。

### 🎬 動画編集者 & コンテンツクリエーター

- Premiere Pro、DaVinci Resolve、Final Cut、CapCut、VN Editor での**マルチトラック編集**のために音声を動画から分離 — インポート前に [videotoaudioconverter.org](https://videotoaudioconverter.org/ja/) を使用。
- **[MKV コンバーターでオリジナル音声を抽出](https://videotoaudioconverter.org/ja/mkv-to-mp3)** することで、動画の音声トラックを置き換え。
- 最終動画を納品する前にクライアントに**音声のみのプレビュー**を生成。

### 🔒 プライバシー意識の高いユーザー

- サードパーティサーバーに**アップロードせずに**ファイルを変換 — **[videotoaudioconverter.org で試す](https://videotoaudioconverter.org/ja/)**。
- **機密インタビュー**、**法的証言**、**医療録音**、**ジャーナリスト取材素材**をデバイスから出すことなく処理。
- 初回ページ読み込み後は**オフライン**でコンバーターを使用（飛行機の中や SCIF でも動作）。
- **メール登録**、**アカウント作成**、**有料サブスクリプション**を必要とするコンバーターを避ける。詳細は[プライバシーポリシー](https://videotoaudioconverter.org/ja/privacy)をご覧ください。

---

## ❓ よくある質問（回答付き）

これらは動画から音声への変換ツールを探すときに人々が Google に入力するロングテールの質問です。各質問は[ホームページ](https://videotoaudioconverter.org/ja/)の FAQ と各フォーマットランディングページで回答されています。

### MP4 を MP3 に無料でオンライン変換するには？
**[videotoaudioconverter.org/ja/mp4-to-mp3](https://videotoaudioconverter.org/ja/mp4-to-mp3)** にアクセスし、MP4 ファイルをドロップし、出力フォーマットとして「MP3」を選択し、変換をクリックしてファイルをダウンロードします。アップロードなし、サインアップなし、透かしなし、ファイルサイズ制限なし。

### 動画から音声をアップロードせずに抽出するには？
**[VideoToAudioConverter.org](https://videotoaudioconverter.org/ja/)** のような**クライアントサイド動画から音声への変換ツール**を使用してください。変換は WebCodecs と FFmpeg WASM を介してブラウザ内で実行されます — ファイルはサーバーには触れません。

### アップロードしない最高の無料動画から音声への変換ツールは？
WebCodecs または FFmpeg WASM を使用するブラウザベースのコンバーターのみが、真にアップロードしないカテゴリです。**[VideoToAudioConverter.org](https://videotoaudioconverter.org/ja/)** はオープンソースなので、その主張を検証できます。

### Mac で iTunes なしで MOV を MP3 に変換するには？
Safari または Chrome で **[videotoaudioconverter.org/ja/mov-to-mp3](https://videotoaudioconverter.org/ja/mov-to-mp3)** を開き、Finder から `.MOV` ファイルをドロップゾーンにドラッグし、「MP3」を選択してダウンロードします。任意の macOS バージョンで動作し、iTunes / Music アプリは不要です。

### ソフトウェアをインストールせずに MKV を MP3 に変換するには？
**[videotoaudioconverter.org/ja/mkv-to-mp3](https://videotoaudioconverter.org/ja/mkv-to-mp3)** を開き、MKV をドロップし、MP3 を選択して変換をクリックします。VLC、HandBrake、コマンドラインは不要です。

### WebM ファイルから音声を抽出するには？
**[videotoaudioconverter.org/ja/webm-to-mp3](https://videotoaudioconverter.org/ja/webm-to-mp3)** にアクセスしてください。WebM は内部的に Opus または Vorbis 音声を使用します — Opus（ネイティブパススルー品質）、MP3（互換性）、または WAV（編集用）を選択してください。

### 2026 年に AVI を MP3 に変換するには？
AVI はレガシー Windows フォーマットです。**[videotoaudioconverter.org/ja/avi-to-mp3](https://videotoaudioconverter.org/ja/avi-to-mp3)** を開いてください — FFmpeg WASM フォールバックエンジンが AVI をネイティブに処理します。ファイルをドロップし、MP3 を選択するだけです。DivX コーデックのインストールは不要です。

### 動画を 320 kbps の MP3 に変換するには？
**[videotoaudioconverter.org](https://videotoaudioconverter.org/ja/)** で「高音質」プリセットを選択してください — MP3 を 320 kbps（MP3 の最大品質）でエンコードします。

### 動画から音声を WAV（ロスレス）で抽出するには？
**[videotoaudioconverter.org](https://videotoaudioconverter.org/ja/)** を開き、出力フォーマットとして「WAV」を選択します。WAV は非圧縮 PCM です — DAW での編集に最適です。

### iPhone 動画から音声を抽出するには？
iPhone 動画は通常 `.MOV`（H.264 + AAC）または `.MP4` です。**[videotoaudioconverter.org/ja/mov-to-mp3](https://videotoaudioconverter.org/ja/mov-to-mp3)** を開き、Photos / Files からファイルをドロップし、MP3 または M4A を選択してダウンロードします。

### 動画を音声に変換するのは合法ですか？
所有または権利のあるファイルを変換することは、ほとんどの法域で合法です。DRM の回避、有料ストリーミングサービスのスクレイピング、著作権侵害にはこのツールを使用しないでください。当サイトは YouTube ダウンローダーではありません。

### コンバーターはオフラインで動作しますか？
**[videotoaudioconverter.org](https://videotoaudioconverter.org/ja/)** での初回ページ読み込み後、はい。FFmpeg WASM バイナリは 1 年間キャッシュされます。機内モードでもファイルを変換できます。

---

## 🏆 VideoToAudioConverter.org の比較

| 機能 | [VideoToAudioConverter.org](https://videotoaudioconverter.org/ja/) | FreeConvert | Convertio | OnlineAudioConverter | CloudConvert |
|---|---|---|---|---|---|
| **無料** | ✅ 永久 | ✅ 制限あり | ✅ 制限あり | ✅ 制限あり | ✅ 制限あり |
| **アップロードなし（クライアントサイド）** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **ファイルサイズ制限なし** | ✅ | ❌ 1 GB | ❌ 100 MB | ❌ 2 GB | ❌ 1 GB |
| **サインアップなし** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **広告なし** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **オフライン動作** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **オープンソース** | ✅ MIT | ❌ | ❌ | ❌ | ❌ |
| **1 日あたりの変換無制限** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **設計時点で GDPR セーフ** | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |

> 比較は 2026 年時点で公開されている料金プランと機能ゲートを反映しています。各ベンダーのサイトで現在の制限を確認してください。

---

## 🗣️ 多言語対応

同じコンバーターをグローバルなオーディエンス向けにローカライズ。各翻訳版は完全に独立した SEO サーフェスです。

| ロケール | URL プレフィックス | 「video to audio converter」の翻訳 |
|---|---|---|
| 🇬🇧 英語 | [`/en/`](https://videotoaudioconverter.org/en/) | video to audio converter |
| 🇫🇷 フランス語 | [`/fr/`](https://videotoaudioconverter.org/fr/) | convertisseur vidéo en audio |
| 🇪🇸 スペイン語 | `/es/` *(予定)* | convertidor de video a audio |
| 🇩🇪 ドイツ語 | `/de/` *(予定)* | Video zu Audio Konverter |
| 🇮🇹 イタリア語 | `/it/` *(予定)* | convertitore da video ad audio |
| 🇵🇹 ポルトガル語 | `/pt/` *(予定)* | conversor de vídeo para áudio |
| 🇨🇳 中国語（簡体字） | `/zh/` *(予定)* | 视频转音频转换器 |
| 🇯🇵 日本語 | [`/ja/`](https://videotoaudioconverter.org/ja/) | 動画から音声に変換 |
| 🇰🇷 韓国語 | `/ko/` *(予定)* | 비디오를 오디오로 변환 |
| 🇷🇺 ロシア語 | `/ru/` *(予定)* | конвертер видео в аудио |
| 🇸🇦 アラビア語 | `/ar/` *(予定)* | محول فيديو إلى صوت |
| 🇮🇳 ヒンディー語 | `/hi/` *(予定)* | वीडियो को ऑडियो में बदलें |
| 🇮🇩 インドネシア語 | `/id/` *(予定)* | konverter video ke audio |
| 🇹🇷 トルコ語 | `/tr/` *(予定)* | video ses dönüştürücü |
| 🇻🇳 ベトナム語 | `/vi/` *(予定)* | chuyển video sang âm thanh |

ロケールの追加は、翻訳の準備ができてから約 30 分で完了します — 上記の[国際化対応](#-国際化対応)を参照してください。ライブの英語ホームページは [videotoaudioconverter.org/en/](https://videotoaudioconverter.org/en/) に、フランス語版は [videotoaudioconverter.org/fr/](https://videotoaudioconverter.org/fr/) にあります。

---

## 📚 用語集 — 音声・動画フォーマット解説

「MP3 と M4A の違いは？」や「ポッドキャストに最適な音声フォーマットは？」などを検索するユーザー向けのリファレンスです。

### 出力フォーマット（音声）

- **MP3** — 汎用的な音声フォーマット。ロッシー圧縮。128 kbps = 普通、192 kbps = 良い、320 kbps = 優れている。1998 年以降に作られたほぼ全てのデバイスで再生可能。用途: ポッドキャスト、ストリーミング、共有。
- **WAV** — 非圧縮 PCM 音声。巨大なファイル（1 分あたり約 10 MB）だがビット完全。用途: DAW での編集、マスタリング、アーカイブソース。
- **M4A** — MPEG-4 音声コンテナで、通常 AAC を含む。MP3 と同等の品質をより低いビットレートで実現。用途: iTunes / Apple Music エコシステム、iPhone 着信音。
- **AAC** — Advanced Audio Coding。同じビットレートで MP3 より高品質。YouTube、Apple、現代の放送の標準。用途: MP3 が使える場所すべて、より高品質を求める場合。
- **FLAC** — Free Lossless Audio Codec。品質損失なしで圧縮し、WAV の約 50% のサイズに。用途: オーディオファイル向けアーカイブ、ハイレゾ音楽コレクション。
- **OGG（Vorbis）** — オープンソースのロッシーフォーマット。同じビットレートで MP3 より高品質。用途: オープンソースエコシステム、ゲーム、Web。
- **Opus** — 最も現代的なロッシーコーデック。低ビットレートで MP3 / AAC / Vorbis を圧倒。用途: 音声（ポッドキャスト、VoIP）、低帯域音声、WebRTC。

### 入力フォーマット（動画）

- **MP4** — MPEG-4 コンテナ内の H.264 / H.265 動画 + AAC 音声。ほぼすべてのデフォルト: YouTube ダウンロード、スマホ録画、画面キャプチャ。
- **MOV** — Apple QuickTime コンテナ。iPhone、Mac、ScreenFlow、Final Cut からよく見られる。
- **MKV** — Matroska。任意のコーデックを格納できるオープンコンテナ。高品質動画ダウンロード、アニメ、Blu-ray リップに一般的。
- **WebM** — Google が支援するオープンコンテナ。VP8 / VP9 / AV1 動画 + Opus / Vorbis 音声。Web 動画の標準（YouTube ダウンロードの WebM、WhatsApp Web）。
- **AVI** — Audio Video Interleave。90 年代のレガシー Microsoft フォーマットで、古いアーカイブや Windows 専用ソフトウェアのエクスポートでは依然として一般的。
- **FLV** — Flash Video。レガシー Adobe Flash フォーマット。今日では稀だが古いダウンロードには見られる。
- **WMV** — Windows Media Video。Microsoft 独自フォーマットで、古い Windows Movie Maker / PowerPoint エクスポートに一般的。
- **3GP** — スマートフォン以前の時代のモバイルコンテナ。一部のフィーチャーフォンや古いカムコーダーで依然として生成される。
- **MPEG（MPG）** — オリジナルの MPEG-1 / MPEG-2 動画フォーマット。古い DVD や TV 放送に使用された。

---

## 🧭 マッチする検索意図

このサイトがランクインを狙う検索クエリの非網羅的リストです。各クエリはサイトのどこか（ホームページ、フォーマットページ、FAQ、またはこの README）でプライマリコンテンツとしてインデックス化されています。

<details>
<summary><strong>🔹 ヘッドターム（高ボリューム）</strong></summary>

video to audio converter · video to mp3 · video to mp3 converter · convert video to mp3 · convert video to audio · extract audio from video · mp3 converter · online mp3 converter · free mp3 converter · audio extractor · video sound extractor · rip audio from video · video to audio · audio from video · get audio from video · video to mp3 online · convert video to mp3 free · free video to audio converter · video to mp3 free · online video to audio converter · 動画から音声 変換 · 動画 mp3 変換 · 動画音声抽出 · 動画から音声を抽出 · 無料 動画 mp3 変換 · オンライン 動画変換 · 動画から音だけ · 動画の音だけ抽出 · 動画コンバーター 無料 · 動画変換ソフト不要

</details>

<details>
<summary><strong>🔹 フォーマットペア変換（ロングテール、高インテント）</strong></summary>

mp4 to mp3 · mp4 to wav · mp4 to m4a · mp4 to aac · mp4 to flac · mp4 to ogg · mp4 to opus · mov to mp3 · mov to wav · mov to m4a · mov to aac · mkv to mp3 · mkv to wav · mkv to flac · mkv to aac · webm to mp3 · webm to ogg · webm to opus · webm to wav · avi to mp3 · avi to wav · flv to mp3 · wmv to mp3 · 3gp to mp3 · mpeg to mp3 · m4v to mp3 · mp4 mp3 変換 · mov mp3 変換 · mkv mp3 変換 · webm mp3 変換

</details>

<details>
<summary><strong>🔹 品質 / ビットレート修飾子</strong></summary>

320 kbps mp3 converter · high quality video to mp3 · lossless video to audio · video to flac · hd audio extractor · cd quality wav extractor · 192 kbps mp3 · 128 kbps mp3 · best quality video to mp3 · convert video to high quality audio · 高音質 mp3 変換 · 320kbps mp3 変換 · ロスレス変換 · wav 変換

</details>

<details>
<summary><strong>🔹 プライバシー & 信頼修飾子</strong></summary>

video to mp3 no upload · video converter no upload · client-side video to mp3 · browser-based video converter · offline video to audio · private video to mp3 · secure video converter · no signup video to mp3 · no registration audio extractor · no watermark video to mp3 · ad-free video converter · gdpr-safe video converter · video to mp3 without uploading file · open source video to audio converter · 動画から音声 アップロードなし · ブラウザ 動画変換

</details>

<details>
<summary><strong>🔹 デバイス / プラットフォーム修飾子</strong></summary>

iphone video to mp3 · android video to mp3 · mac video to mp3 · windows video to mp3 · linux video to mp3 · chromebook video to mp3 · ipad video to audio · safari video to mp3 · chrome video to mp3 · firefox video to mp3 · edge video to mp3 · ios video to mp3 converter · iPhone 動画 mp3 · Android 動画 mp3 · Mac 動画 mp3

</details>

<details>
<summary><strong>🔹 ソース固有のインテント（自分のファイルのみ — YouTube ダウンローダーではありません）</strong></summary>

zoom recording to mp3 · google meet recording to mp3 · teams recording to mp3 · screen recording to mp3 · obs recording to mp3 · tiktok video to mp3 · instagram reel to mp3 · whatsapp video to mp3 · iphone screen recording to mp3 · webinar recording to audio · interview video to mp3 · podcast video to mp3 · lecture recording to mp3 · TikTok mp3 変換 · YouTube mp3 (own files) · 会議録画 mp3 · Zoom 録画 mp3 · 講義 mp3 · 動画 音楽 抽出 · 動画 bgm 抽出

</details>

<details>
<summary><strong>🔹 ハウツーロングテール（FAQ / フィーチャースニペットターゲット）</strong></summary>

how to convert mp4 to mp3 · how to extract audio from video · how to convert video to mp3 free · how to convert video to mp3 without software · how to get sound from a video · how to rip audio from a video file · how to convert mov to mp3 on mac · how to convert mkv to mp3 · how to extract audio from webm · how to convert avi to mp3 in 2026 · how to convert video to mp3 on iphone · how to convert video to mp3 on android · how to convert video to mp3 offline · how to convert video to 320 kbps mp3 · how to convert video to wav · how to extract audio from a video without uploading

</details>

<details>
<summary><strong>🔹 比較 / 代替手段</strong></summary>

freeconvert alternative · convertio alternative · cloudconvert alternative · onlineaudioconverter alternative · ytmp3 alternative · zamzar alternative · best free video to audio converter · best browser video to mp3 converter · best private video converter · open source alternative to convertio

</details>

<details>
<summary><strong>🔹 多言語</strong></summary>

convertisseur vidéo en audio · convertidor de video a audio · video zu audio konverter · conversor de vídeo para áudio · convertitore video audio · 视频转音频 · 視頻轉音頻 · 動画 音声 変換 · 動画 mp3 化 · 動画から音声を取り出す · 動画から音だけ抽出 · 動画 音源 抽出 · 動画 オーディオ変換 · 비디오 오디오 변환 · конвертер видео в аудио · محول فيديو إلى صوت · वीडियो को ऑडियो में बदलें · konverter video ke audio · video ses dönüştürücü · chuyển video sang âm thanh

</details>

---

## 🌟 まとめ

もしあなたが**無料オンライン動画から音声への変換ツール**を探していて、次の条件を満たしてほしいなら:

- ✅ **[MP4 から MP3](https://videotoaudioconverter.org/ja/mp4-to-mp3)**、**[MOV から MP3](https://videotoaudioconverter.org/ja/mov-to-mp3)**、**[MKV から MP3](https://videotoaudioconverter.org/ja/mkv-to-mp3)**、**[WebM から MP3](https://videotoaudioconverter.org/ja/webm-to-mp3)**、**[AVI から MP3](https://videotoaudioconverter.org/ja/avi-to-mp3)** など、合計 63 種類の変換ペアに対応
- ✅ **100% ブラウザ内で動作**し、**アップロードゼロ**、**トラッキングゼロ**
- ✅ **ファイルサイズ制限なし**、**サインアップなし**、**広告なし**、**透かしなし**
- ✅ **MP3、WAV、M4A、AAC、FLAC、OGG、Opus** の出力に対応し、**320 kbps** または**ロスレス**まで
- ✅ **Mac、Windows、Linux、Chromebook、iPhone、iPad、Android** で動作
- ✅ **オープンソース**、**GDPR セーフ**、初回読み込み後は**オフライン**でも動作

— なら **[videotoaudioconverter.org](https://videotoaudioconverter.org/ja/)** をブックマークし、このリポジトリにスターを付けてください。 ⭐

---

## 📄 ライセンス

- **ソースコード:** [MIT](LICENSE)
- **FFmpeg:** [LGPL 2.1](https://ffmpeg.org/legal.html)（WASM 経由で動的リンク）
- **MediaBunny:** MIT
- **shadcn/ui:** MIT

---

<p align="center">
  ❤️ で構築 · <a href="https://pages.cloudflare.com/">Cloudflare Pages</a> でホスティング · アナリティクスは <a href="https://plausible.io/">Plausible</a>
</p>

<p align="center">
  <sub>
    キーワード: 動画から音声 変換 · 動画 mp3 変換 · mp4 mp3 変換 · mov mp3 変換 · mkv mp3 変換 · webm mp3 変換 · avi mp3 変換 · 動画から音声を抽出 · 動画音声抽出 · 無料オンライン · アップロードなし · クライアントサイド · オープンソース · WebCodecs · FFmpeg WASM
  </sub>
</p>
