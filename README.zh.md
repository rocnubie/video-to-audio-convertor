<p align="center">
  <img src="app/icon.svg" alt="VideoToAudioConverter Logo" width="80" height="80" />
</p>

<h1 align="center">VideoToAudioConverter.org</h1>

<p align="center">
  <a href="./README.md">English</a> ·
  <strong>简体中文</strong> ·
  <a href="./README.es.md">Español</a> ·
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
  <strong>最快的免费视频转音频转换器 —— 100% 在你的浏览器中运行，零上传、零跟踪。</strong>
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
  <a href="https://videotoaudioconverter.org/zh/">🌐 在线演示</a> ·
  <a href="#-快速开始">快速开始</a> ·
  <a href="#-工作原理">工作原理</a> ·
  <a href="#-支持的格式">格式</a> ·
  <a href="#-构建与部署">部署</a>
</p>

---

## 这是什么？

**[VideoToAudioConverter.org](https://videotoaudioconverter.org/zh/)** 是一款生产级、开源的**视频转音频转换器**，完全在用户的浏览器内运行。拖入一个视频文件，选择音频格式，点击转换 —— 音频会立即下载。没有服务器，没有账号，也没有后端施加的文件大小限制。

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
  <a href="https://videotoaudioconverter.org/zh/">
    <img src="https://videotoaudioconverter.org/screenshots/01-hero.webp" alt="Video to audio converter — free online tool to convert MP4, MOV, MKV, WebM, AVI to MP3, WAV, AAC, M4A, FLAC, OGG, Opus directly in the browser with zero upload" width="900" />
  </a>
</p>

<p align="center">
  <a href="https://videotoaudioconverter.org/zh/">
    <img src="https://videotoaudioconverter.org/screenshots/07-mobile-hero.webp" alt="Video to audio converter mobile view — works on iPhone Safari and Android Chrome, no app install required" width="320" />
  </a>
</p>


### 为什么还需要一款视频转音频转换器？

| 特性 | VideoToAudioConverter.org | 典型的在线转换器 |
|---|---|---|
| 100% 浏览器内运行 | ✅ WebCodecs + FFmpeg WASM | ❌ 上传到服务器 |
| 文件大小限制 | ✅ 无（内存即上限） | ❌ 50–500 MB 上限 |
| 隐私 / 无跟踪 | ✅ 零 Cookie、零上传 | ❌ 文件存储于服务器 |
| 离线可用（首次加载后） | ✅ WASM 永久缓存 | ❌ 需要联网 |
| 开源 | ✅ MIT | ❌ 闭源 |
| 无广告 | ✅ | ❌ 大量广告 |
| 速度快（现代格式） | ✅ WebCodecs 原生速度 | ❌ 服务器排队 |

---

## ✨ 功能特性

### 核心转换器

- **拖放上传**或点击选择任意视频文件
- **9 种输入格式** → MP4、MOV、MKV、WebM、AVI、FLV、WMV、3GP、MPEG
- **7 种输出格式** → MP3、WAV、M4A、AAC、FLAC、OGG、Opus
- **质量预设** → 高（320 kbps）、中（192 kbps）、低（128 kbps）、无损
- **实时进度条**，带阶段标签（解复用 → 解码 → 编码 → 复用）
- **即时下载** —— 音频 Blob 直接来自内存，从不经过服务器

### 隐私优先的架构

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

### SEO 优化的格式落地页

为每个热门的**视频转音频**组合提供了独立的、完全翻译的落地页：

| 页面 | 在线地址 |
|---|---|
| MP4 转 MP3 转换器 | [videotoaudioconverter.org/zh/mp4-to-mp3](https://videotoaudioconverter.org/zh/mp4-to-mp3) |
| MOV 转 MP3 转换器 | [videotoaudioconverter.org/zh/mov-to-mp3](https://videotoaudioconverter.org/zh/mov-to-mp3) |
| MKV 转 MP3 转换器 | [videotoaudioconverter.org/zh/mkv-to-mp3](https://videotoaudioconverter.org/zh/mkv-to-mp3) |
| WebM 转 MP3 转换器 | [videotoaudioconverter.org/zh/webm-to-mp3](https://videotoaudioconverter.org/zh/webm-to-mp3) |
| AVI 转 MP3 转换器 | [videotoaudioconverter.org/zh/avi-to-mp3](https://videotoaudioconverter.org/zh/avi-to-mp3) |

每个页面都有独特的文案、JSON-LD 结构化数据（SoftwareApplication、HowTo、FAQPage）以及 Open Graph 标签 —— 不存在重复内容。

### 国际化

- 开箱即用支持英语（`/en/`）和法语（`/fr/`）
- 按页面划分的消息命名空间，支持深度国际化（不只是 UI 字符串）
- 基础设施已为 15+ 种语言做好准备（zh、ja、ko、es、de、pt、it、ru、ar、hi、id、tr、vi 等）

---

## 🔧 工作原理

转换器采用**双引擎架构**，会自动为每个输入文件选择可用的最快引擎：

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

### 引擎细节

#### MediaBunny —— 主引擎

[MediaBunny](https://github.com/nicktindall/mediabunny) 将浏览器原生的 **WebCodecs API** 封装为简洁的转码流水线。它在主线程运行，对支持的格式没有任何 WASM 开销。

- **支持的输入：** MP4、M4V、MOV、QT、MKV、WebM
- **速度：** 接近原生 —— 在现代硬件上，一小时长的 MP4 大约 10 秒即可转换完成
- **无需 COOP/COEP 响应头** —— 可与第三方脚本共存

#### FFmpeg WASM —— 兜底引擎

[@ffmpeg/ffmpeg](https://github.com/ffmpegwasm/ffmpeg.wasm) 把完整的 FFmpeg 二进制编译为 WebAssembly。它以单线程模式运行（无需 SharedArrayBuffer / COOP）。

- **支持的输入：** AVI、FLV、WMV、3GP、MPEG，以及任何 MediaBunny 处理不了的格式
- **WASM 大小：** 约 31 MB（通过 `Cache-Control: immutable, max-age=31536000` 缓存）
- **自托管的 JS 垫片**位于 `/ffmpeg-core/ffmpeg-core.js`，避免依赖 CDN

---

## 📂 支持的格式

### 输入格式（视频转音频）

| 格式 | 扩展名 | 引擎 | 备注 |
|---|---|---|---|
| MP4 | `.mp4`、`.m4v` | MediaBunny | 最常见的视频格式 |
| MOV | `.mov`、`.qt` | MediaBunny | 苹果 QuickTime |
| MKV | `.mkv` | MediaBunny | Matroska 容器 |
| WebM | `.webm` | MediaBunny | Web 原生（VP8/VP9/AV1） |
| AVI | `.avi` | FFmpeg WASM | 老旧的 Windows 格式 |
| FLV | `.flv` | FFmpeg WASM | Flash 视频 |
| WMV | `.wmv` | FFmpeg WASM | Windows Media Video |
| 3GP | `.3gp` | FFmpeg WASM | 移动端视频 |
| MPEG | `.mpeg`、`.mpg` | FFmpeg WASM | 早期广播格式 |

### 输出格式（音频）

| 格式 | 质量选项 | 适用场景 |
|---|---|---|
| **MP3** | 128 / 192 / 320 kbps | 全平台兼容、流媒体、播客 |
| **WAV** | 无损 PCM | 专业音频、DAW 导入 |
| **AAC** | 128 / 192 / 320 kbps | 苹果设备、iTunes，压缩率优于 MP3 |
| **M4A** | 128 / 192 / 320 kbps | iTunes、Apple Music |
| **FLAC** | 无损 | 发烧友存档 |
| **OGG** | 128 / 192 / 320 kbps | 开放格式，压缩出色 |
| **Opus** | 128 / 192 / 320 kbps | 最佳压缩/质量比，VoIP 首选 |

---

## 🚀 快速开始

### 前置条件

- **Node.js** 20+
- **pnpm** 9+（`npm install -g pnpm`）

### 安装

```bash
git clone https://github.com/rocnubie/video-to-audio-convertor.git
cd video-to-audio-convertor

pnpm install
# postinstall 会自动把 @ffmpeg/core 的 WASM 拷贝到 public/ffmpeg-core/
```

### 开发服务器

```bash
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) —— 应用会自动重定向到 `/en/`。

> **提示：** FFmpeg WASM 首次加载（约 31 MB）会比较慢。得益于 `Cache-Control: immutable`，后续加载会瞬间完成。

### 环境变量

将 `.env.example` 复制为 `.env.local`：

```bash
cp .env.example .env.local
```

| 变量 | 说明 | 示例 |
|---|---|---|
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | 你的 Plausible 站点域名 | `videotoaudioconverter.org` |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` | Plausible 脚本地址 | `https://plausible.io/js/script.tagged-events.outbound-links.js` |

开发环境留空即可 —— 分析功能会自动跳过。

---

## 🏗️ 技术栈

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

### 为什么选择这些方案？

**Next.js 静态导出** —— 整个站点预渲染为扁平的 HTML/JS/CSS 文件。生产环境完全不需要 Node.js 服务器。Cloudflare Pages 直接从边缘节点服务所有内容。

**MediaBunny 优先于 FFmpeg** —— 对于 MP4/MOV/MKV/WebM（绝大多数转换需求），MediaBunny 使用浏览器原生 WebCodecs，比 FFmpeg WASM 快 5–10 倍，且没有冷启动成本。

**单线程 FFmpeg WASM** —— 多线程 FFmpeg 需要 `SharedArrayBuffer`，进而需要 `Cross-Origin-Opener-Policy: same-origin` 和 `Cross-Origin-Embedder-Policy: require-corp`。这些响应头会破坏第三方脚本（统计、字体、广告）。单线程方案就完全规避了这些问题。

**Tailwind v4 + OKLCH** —— 设计系统采用 OKLCH 颜色空间，让青色/蓝绿色强调色在感知上保持一致；浅色与深色模式下都正常显示，无需为每个组件手写暗色覆盖。

---

## 📁 文件结构

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

## 🌍 国际化

站点使用 [next-intl 4](https://next-intl-docs.vercel.app/)，路由带有语言前缀（`/en/`、`/fr/`）。

### 添加新语言

1. **在 `i18n/routing.ts` 中注册 locale**：

   ```ts
   export const routing = defineRouting({
     locales: ['en', 'fr', 'de'],  // 新增 'de'
     defaultLocale: 'en',
   });
   ```

2. **创建共享消息文件** `i18n/messages/de.json`（复制 `en.json` 并翻译）。

3. **为每个页面命名空间创建消息文件**：

   ```
   i18n/pages/home/de.json
   i18n/pages/mp4-to-mp3/de.json
   … 等等。
   ```

4. **在 `i18n/locale.ts` 中添加 locale 元数据**：

   ```ts
   de: { nativeName: 'Deutsch', englishName: 'German' },
   ```

5. `sitemap.ts` 和 `generateStaticParams()` 会自动识别新 locale —— 无需其他改动。

---

## 📊 数据分析

站点使用 [Plausible Analytics](https://plausible.io/) —— 无 Cookie、符合 GDPR，且不收集任何个人数据。

### 自定义事件

所有事件都在 [`lib/analytics.ts`](lib/analytics.ts) 中有类型定义：

| 事件 | 属性 | 触发时机 |
|---|---|---|
| `file_selected` | `ext`、`size_mb`、`engine_hint` | 用户拖入或选择视频文件 |
| `conversion_started` | `from_ext`、`to_format`、`quality` | 点击"转换"按钮 |
| `conversion_completed` | `from_ext`、`to_format`、`engine`、`duration_s` | 音频 Blob 准备就绪 |
| `conversion_failed` | `from_ext`、`to_format`、`reason` | 引擎抛出错误 |
| `conversion_cancelled` | `from_ext`、`to_format` | 用户在转换中途取消 |
| `download_clicked` | `format` | 点击下载按钮 |

通过这些事件，你能完整掌握哪些视频转音频的路径最受欢迎。

---

## 📦 构建与部署

### 本地构建

```bash
pnpm build       # 静态导出 → out/
npx serve out    # 本地预览
```

构建产物是一个由扁平文件组成的目录 —— 不需要服务器。

### 部署到 Cloudflare Pages

1. **在 Cloudflare Pages 控制台连接你的仓库**。

2. **构建设置：**

   | 设置项 | 值 |
   |---|---|
   | 构建命令 | `pnpm build` |
   | 构建输出目录 | `out` |
   | Node.js 版本 | `20` |

3. **环境变量**（生产环境 + 预览环境）：

   ```
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=videotoaudioconverter.org
   NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL=https://plausible.io/js/script.tagged-events.outbound-links.js
   ```

4. **自定义域名：** 添加 `videotoaudioconverter.org`，并交给 Cloudflare DNS 处理路由。

### 缓存策略

| 资源 | Cache-Control | 原因 |
|---|---|---|
| `/ffmpeg-core/*` | `immutable, max-age=31536000` | 内容寻址；永不变更 |
| `/_next/static/*` | `immutable, max-age=31536000` | Next.js 对文件名做了内容哈希 |
| `/og.png`、`/favicon.ico` | `max-age=604800` | 更新不频繁 |
| HTML 页面 | 不缓存 / 安全响应头 | 始终最新，保护用户 |

---

## ➕ 新增一个格式页面

要新增一个**视频转音频**的转换落地页（例如 `flv-to-mp3`）：

1. **在 `lib/content/format-pages.ts` 中添加配置：**

   ```ts
   {
     slug: 'flv-to-mp3',
     messageKey: 'flvToMp3',
     outputFormat: 'mp3',
     highlightedInputs: ['flv'],
     useCaseImages: ['https://images.unsplash.com/…'],
   }
   ```

2. **创建页面文件：**

   ```ts
   // app/[locale]/flv-to-mp3/page.tsx
   import { FormatLandingPage } from '@/components/landing/FormatLandingPage'
   import { getFormatPage } from '@/lib/content/format-pages'

   const config = getFormatPage('flv-to-mp3')!

   export default function Page() {
     return <FormatLandingPage config={config} />
   }
   ```

3. **添加翻译文件：**

   ```
   i18n/pages/flv-to-mp3/en.json
   i18n/pages/flv-to-mp3/fr.json
   ```

4. 页面会**自动出现在** `sitemap.ts` 中 —— 无需额外改动。

> **SEO 提示：** 每个格式页面必须拥有独特的文案。Google 会惩罚内容高度雷同的过渡页。

---

## 🛡️ 隐私与安全

<p align="center">
  <a href="https://videotoaudioconverter.org/zh/privacy">
    <img src="https://videotoaudioconverter.org/screenshots/04-privacy-story.webp" alt="Privacy-first video to audio converter — DevTools-provable zero uploads, runs offline after first page load, no retention no logs, cookieless analytics, GDPR safe" width="900" />
  </a>
</p>


- **不上传文件** —— 转换完全在浏览器中通过 WebCodecs / FFmpeg WASM 完成
- **无 Cookie** —— Plausible 不使用 Cookie；无需弹出同意横幅
- **无 localStorage** —— 会话之间不持久化任何内容
- **运行时不依赖 CDN** —— FFmpeg 的 JS 垫片自托管；只有 WASM 二进制首次从 `unpkg` 加载，之后永久缓存
- **每个 HTML 页面都带有安全响应头：**
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`

---

## 🤝 贡献

欢迎贡献。影响最大的方向有：

- **新增翻译** —— 复制 `i18n/messages/en.json`，翻译后提 PR
- **新增格式落地页** —— 按上文指南操作，撰写独特文案
- **引擎改进** —— 更好的进度上报、更多输出编码
- **UI / 无障碍** —— WCAG AA 合规、键盘导航

在动手做大的改动前，请先开 issue 讨论方向。

---

## 🔍 本项目解决的问题（关键词与场景速查）

**[VideoToAudioConverter.org](https://videotoaudioconverter.org/zh/)** 的目标是成为所有寻找**免费在线视频转音频转换器**且重视隐私的用户的最终答案。下面是我们覆盖的转换意图与搜索查询的完整地图。

### 我们支持的全部转换组合

每一格都是一个明确、可被索引的转换路径。把行格式的文件拖进来，再挑选列格式作为输出 —— 就是这个转换。

| 输入 ↓ / 输出 → | MP3 | WAV | M4A | AAC | FLAC | OGG | Opus |
|---|---|---|---|---|---|---|---|
| **MP4** | [mp4 转 mp3](https://videotoaudioconverter.org/zh/mp4-to-mp3) | mp4 转 wav | mp4 转 m4a | mp4 转 aac | mp4 转 flac | mp4 转 ogg | mp4 转 opus |
| **MOV** | [mov 转 mp3](https://videotoaudioconverter.org/zh/mov-to-mp3) | mov 转 wav | mov 转 m4a | mov 转 aac | mov 转 flac | mov 转 ogg | mov 转 opus |
| **MKV** | [mkv 转 mp3](https://videotoaudioconverter.org/zh/mkv-to-mp3) | mkv 转 wav | mkv 转 m4a | mkv 转 aac | mkv 转 flac | mkv 转 ogg | mkv 转 opus |
| **WebM** | [webm 转 mp3](https://videotoaudioconverter.org/zh/webm-to-mp3) | webm 转 wav | webm 转 m4a | webm 转 aac | webm 转 flac | webm 转 ogg | webm 转 opus |
| **AVI** | [avi 转 mp3](https://videotoaudioconverter.org/zh/avi-to-mp3) | avi 转 wav | avi 转 m4a | avi 转 aac | avi 转 flac | avi 转 ogg | avi 转 opus |
| **FLV** | flv 转 mp3 | flv 转 wav | flv 转 m4a | flv 转 aac | flv 转 flac | flv 转 ogg | flv 转 opus |
| **WMV** | wmv 转 mp3 | wmv 转 wav | wmv 转 m4a | wmv 转 aac | wmv 转 flac | wmv 转 ogg | wmv 转 opus |
| **3GP** | 3gp 转 mp3 | 3gp 转 wav | 3gp 转 m4a | 3gp 转 aac | 3gp 转 flac | 3gp 转 ogg | 3gp 转 opus |
| **MPEG** | mpeg 转 mp3 | mpeg 转 wav | mpeg 转 m4a | mpeg 转 aac | mpeg 转 flac | mpeg 转 ogg | mpeg 转 opus |
| **M4V** | m4v 转 mp3 | m4v 转 wav | m4v 转 m4a | m4v 转 aac | m4v 转 flac | m4v 转 ogg | m4v 转 opus |

> **63 条受支持的转换路径**，全部可以从 **[videotoaudioconverter.org](https://videotoaudioconverter.org/zh/)** 上同一个转换控件访问。专属落地页：[MP4 → MP3](https://videotoaudioconverter.org/zh/mp4-to-mp3) · [MOV → MP3](https://videotoaudioconverter.org/zh/mov-to-mp3) · [MKV → MP3](https://videotoaudioconverter.org/zh/mkv-to-mp3) · [WebM → MP3](https://videotoaudioconverter.org/zh/webm-to-mp3) · [AVI → MP3](https://videotoaudioconverter.org/zh/avi-to-mp3)。其余组合可在输出格式选择器中解锁。

---

## 🎯 谁会用视频转音频转换器？（典型场景）

<p align="center">
  <a href="https://videotoaudioconverter.org/zh/">
    <img src="https://videotoaudioconverter.org/screenshots/02-use-cases.webp" alt="Video to audio converter use cases — podcast and interview recordings, online classes and lecture archives, iPhone and Android screen recordings, movie clips and archive footage" width="900" />
  </a>
</p>


人们搜索**视频转音频转换器**的原因千差万别。我们围绕以下场景优化了 UI、文案和落地页。所有这些场景都可以在 **[videotoaudioconverter.org](https://videotoaudioconverter.org/zh/)** 上亲身体验。

### 🎙️ 播客主与音频制作者

- **[把视频录像转换成 MP3](https://videotoaudioconverter.org/zh/mp4-to-mp3)** 用于播客分发（Spotify、Apple Podcasts、RSS）。
- 从 **Zoom 录像**、**Google Meet 录像**、**Microsoft Teams 录像**、**Riverside 录像** 或 **OBS 录屏**中提取音频。
- 把**采访 MP4**中的视觉轨剥离，只发布纯音频版本。
- 将**视频转为 WAV** 或 **FLAC**，导入 Audacity、Adobe Audition、Logic Pro、GarageBand、Reaper 或 Pro Tools 进行编辑。

### 🎓 学生与教师

- 把**课程录像转成 MP3**，方便在通勤路上用任意手机播放 —— 试试 [videotoaudioconverter.org](https://videotoaudioconverter.org/zh/)。
- 从 **Zoom 课堂录像**、**Kahoot 视频**、**可汗学院下载**或**会议演讲**中提取音频。
- 把 QuickTime 录制的 **[MOV 视频](https://videotoaudioconverter.org/zh/mov-to-mp3)** 转换为便携的 **M4A**，在 iPhone 上播放。
- 从**你已经拥有的 YouTube 下载**中获取音频，便于离线复习（请尊重版权）。

### 📱 移动端与社交媒体用户

- **TikTok 视频转 MP3** —— 在 [videotoaudioconverter.org](https://videotoaudioconverter.org/zh/) 上从 TikTok 导出文件里截取声音片段。
- **Instagram Reel 视频转音频** —— 从 Reel 下载文件里抽取音频。
- **WhatsApp 视频转 MP3** —— 把转发来的视频消息转成音频。
- **iPhone 视频转 MP3** —— 把"照片"中的 `.MOV` / `.M4V` 录像转为 MP3；使用我们的 **[MOV 转 MP3](https://videotoaudioconverter.org/zh/mov-to-mp3)** 页面。
- **安卓视频转 MP3** —— 从 MP4 录像中提取音频；使用我们的 **[MP4 转 MP3](https://videotoaudioconverter.org/zh/mp4-to-mp3)** 页面。

### 🎵 音乐与多媒体爱好者

- **[把音乐视频转换为 MP3](https://videotoaudioconverter.org/zh/mp4-to-mp3)** 离线播放（仅限你拥有版权的文件）。
- 从**演唱会录像**或**排练视频**中提取音频。
- 从视频中扒出**原声音轨**，用于混音、采样或 DJ 编辑。
- 在 [videotoaudioconverter.org](https://videotoaudioconverter.org/zh/) 上以**无损 FLAC** 形式归档视频音轨。

### 💼 商务与知识工作者

- **[把会议录像转为 MP3](https://videotoaudioconverter.org/zh/mp4-to-mp3)** 用 Otter.ai、Rev、Descript、Whisper 或 Google 的转录工具做语音转写。
- 从**网络研讨会**或**公司全员大会**中提取音频，用于无障碍或归档。
- 从**培训视频**中扒出音轨，发送给转录服务。
- 通过分享会议的**纯音频版本**节省带宽 —— 都可以在 [videotoaudioconverter.org](https://videotoaudioconverter.org/zh/) 完成。

### 🎬 视频剪辑师与内容创作者

- 在 Premiere Pro、DaVinci Resolve、Final Cut、CapCut 或 VN Editor 中进行**多轨剪辑**前，先分离视频和音频 —— 导入前先用 [videotoaudioconverter.org](https://videotoaudioconverter.org/zh/)。
- 在替换视频音轨前，先**[用我们的 MKV 转换器提取原始音频](https://videotoaudioconverter.org/zh/mkv-to-mp3)**。
- 在交付最终视频之前，为客户生成**纯音频预览**。

### 🔒 注重隐私的用户

- 转换文件时**不上传**到任何第三方服务器 —— **[在 videotoaudioconverter.org 上试一试](https://videotoaudioconverter.org/zh/)**。
- 处理**机密访谈**、**法律证词**、**医疗录音**、**新闻线索素材**，数据始终不离开本地设备。
- 首次加载页面后，转换器**可离线使用**（在飞机上或保密机房中也能用）。
- 远离那些要求**邮箱注册**、**创建账号**或**付费订阅**的转换器。详情请见我们的[隐私政策](https://videotoaudioconverter.org/zh/privacy)。

---

## ❓ 常见问题（已解答）

<p align="center">
  <a href="https://videotoaudioconverter.org/zh/#faq">
    <img src="https://videotoaudioconverter.org/screenshots/05-faq.webp" alt="Video to audio converter FAQ — supported input formats MP4 MOV MKV WebM AVI, output codecs MP3 WAV AAC M4A FLAC OGG Opus, file size limits, iPhone iPad Android Mac Windows support" width="900" />
  </a>
</p>


下面是人们在 Google 上搜索视频转音频转换器时常输入的长尾问题。每个问题都能在[首页](https://videotoaudioconverter.org/zh/) FAQ 与各格式落地页中找到答案。

### 如何在线免费将 MP4 转换为 MP3？
前往 **[videotoaudioconverter.org/zh/mp4-to-mp3](https://videotoaudioconverter.org/zh/mp4-to-mp3)**，拖入你的 MP4 文件，选择"MP3"作为输出格式，点击"转换"，下载文件即可。无需上传、无需注册、无水印、无文件大小限制。

### 如何在不上传文件的情况下从视频中提取音频？
使用类似 **[VideoToAudioConverter.org](https://videotoaudioconverter.org/zh/)** 这样的**客户端视频转音频转换器**。转换通过 WebCodecs 和 FFmpeg WASM 在浏览器内完成 —— 文件不会经过任何服务器。

### 不上传文件的最佳免费视频转音频转换器是哪个？
基于浏览器、使用 WebCodecs 或 FFmpeg WASM 的转换器是唯一真正不上传文件的类别。**[VideoToAudioConverter.org](https://videotoaudioconverter.org/zh/)** 开源，方便你亲自验证这一点。

### 如何在 Mac 上不用 iTunes 就把 MOV 转成 MP3？
在 Safari 或 Chrome 中打开 **[videotoaudioconverter.org/zh/mov-to-mp3](https://videotoaudioconverter.org/zh/mov-to-mp3)**，把 `.MOV` 文件从 Finder 拖到放置区，选择"MP3"，下载即可。任意 macOS 版本均可，无需 iTunes / Music 应用。

### 如何在不安装软件的情况下把 MKV 转成 MP3？
打开 **[videotoaudioconverter.org/zh/mkv-to-mp3](https://videotoaudioconverter.org/zh/mkv-to-mp3)**，拖入 MKV，选择 MP3，点击转换。无需 VLC、HandBrake 或命令行。

### 如何从 WebM 文件中提取音频？
前往 **[videotoaudioconverter.org/zh/webm-to-mp3](https://videotoaudioconverter.org/zh/webm-to-mp3)**。WebM 内部使用 Opus 或 Vorbis 编码 —— 选择 Opus（原生直通质量最佳）、MP3（兼容性最好）或 WAV（便于编辑）。

### 2026 年怎么把 AVI 转成 MP3？
AVI 是一种老旧的 Windows 格式。打开 **[videotoaudioconverter.org/zh/avi-to-mp3](https://videotoaudioconverter.org/zh/avi-to-mp3)** —— 我们的 FFmpeg WASM 兜底引擎原生支持 AVI。拖入文件、选择 MP3、完成。无需安装 DivX 编码器。

### 如何把视频转成 320 kbps MP3？
在 **[videotoaudioconverter.org](https://videotoaudioconverter.org/zh/)** 上选择"高"质量预设 —— 它会以 320 kbps（MP3 的最高质量）编码。

### 如何把视频提取为 WAV（无损）？
打开 **[videotoaudioconverter.org](https://videotoaudioconverter.org/zh/)**，选择"WAV"作为输出格式。WAV 是未压缩的 PCM —— 非常适合在 DAW 中编辑。

### 如何从 iPhone 视频中扒取音频？
iPhone 视频通常是 `.MOV`（H.264 + AAC）或 `.MP4`。打开 **[videotoaudioconverter.org/zh/mov-to-mp3](https://videotoaudioconverter.org/zh/mov-to-mp3)**，从"照片"或"文件"中拖入视频，选择 MP3 或 M4A，下载即可。

### 把视频转为音频合法吗？
在多数司法管辖区内，转换你拥有或获得授权的文件是合法的。请勿用本工具绕过 DRM、抓取付费流媒体或侵犯版权。我们不是 YouTube 下载器。

### 转换器能离线工作吗？
在 **[videotoaudioconverter.org](https://videotoaudioconverter.org/zh/)** 首次加载页面后，可以。FFmpeg 的 WASM 二进制会缓存一年。即使开启飞行模式，你也能继续转换文件。

---

## 🏆 VideoToAudioConverter.org 与同类对比

<p align="center">
  <a href="https://videotoaudioconverter.org/zh/">
    <img src="https://videotoaudioconverter.org/screenshots/03-comparison.webp" alt="Free video to audio converter comparison table — VideoToAudioConverter.org versus CloudConvert, Zamzar, 123apps, Convertio. No upload, no file size cap, unlimited daily conversions, no signup, no ads, MIT open source" width="900" />
  </a>
</p>

| 能力 | [VideoToAudioConverter.org](https://videotoaudioconverter.org/zh/) | FreeConvert | Convertio | OnlineAudioConverter | CloudConvert |
|---|---|---|---|---|---|
| **免费** | ✅ 永久免费 | ✅ 受限 | ✅ 受限 | ✅ 受限 | ✅ 受限 |
| **不上传（客户端处理）** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **无文件大小限制** | ✅ | ❌ 1 GB | ❌ 100 MB | ❌ 2 GB | ❌ 1 GB |
| **无需注册** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **无广告** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **可离线使用** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **开源** | ✅ MIT | ❌ | ❌ | ❌ | ❌ |
| **每日无限次转换** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **GDPR 安全（设计层面）** | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |

> 对比依据各厂商截至 2026 年公开列出的价格档与功能限制。请在各厂商网站上核实当前限额。

---

## 🗣️ 多语言覆盖

同一款转换器，面向全球受众做了本地化。每个翻译版本都是一个完全独立的 SEO 入口：

| 语言 | URL 前缀 | "视频转音频转换器"对应译文 |
|---|---|---|
| 🇬🇧 英语 | [`/en/`](https://videotoaudioconverter.org/en/) | video to audio converter |
| 🇫🇷 法语 | [`/fr/`](https://videotoaudioconverter.org/fr/) | convertisseur vidéo en audio |
| 🇪🇸 西班牙语 | `/es/` *（规划中）* | convertidor de video a audio |
| 🇩🇪 德语 | `/de/` *（规划中）* | Video zu Audio Konverter |
| 🇮🇹 意大利语 | `/it/` *（规划中）* | convertitore da video ad audio |
| 🇵🇹 葡萄牙语 | `/pt/` *（规划中）* | conversor de vídeo para áudio |
| 🇨🇳 简体中文 | `/zh/` *（规划中）* | 视频转音频转换器 |
| 🇯🇵 日语 | `/ja/` *（规划中）* | 動画から音声に変換 |
| 🇰🇷 韩语 | `/ko/` *（规划中）* | 비디오를 오디오로 변환 |
| 🇷🇺 俄语 | `/ru/` *（规划中）* | конвертер видео в аудио |
| 🇸🇦 阿拉伯语 | `/ar/` *（规划中）* | محول فيديو إلى صوت |
| 🇮🇳 印地语 | `/hi/` *（规划中）* | वीडियो को ऑडियो में बदलें |
| 🇮🇩 印尼语 | `/id/` *（规划中）* | konverter video ke audio |
| 🇹🇷 土耳其语 | `/tr/` *（规划中）* | video ses dönüştürücü |
| 🇻🇳 越南语 | `/vi/` *（规划中）* | chuyển video sang âm thanh |

只要翻译就绪，新增一种语言约 30 分钟即可完成 —— 参见上文[国际化](#-国际化)。在线英语首页位于 [videotoaudioconverter.org/en/](https://videotoaudioconverter.org/en/)，法语版位于 [videotoaudioconverter.org/fr/](https://videotoaudioconverter.org/fr/)。

---

## 📚 术语表 —— 音频与视频格式说明

为那些搜索"MP3 和 M4A 有什么区别"或"哪种音频格式最适合播客"的用户准备的参考资料。

### 输出格式（音频）

- **MP3** —— 通用音频格式。有损压缩。128 kbps = 还可以，192 kbps = 不错，320 kbps = 极佳。1998 年以来生产的几乎所有设备都能播放。适用于：播客、流媒体、分享。
- **WAV** —— 未压缩的 PCM 音频。文件巨大（每分钟约 10 MB）但比特完美。适用于：DAW 编辑、母带处理、归档源。
- **M4A** —— MPEG-4 音频容器，通常封装 AAC。同等比特率下与 MP3 同质，但码率更低。适用于：iTunes / Apple Music 生态、iPhone 铃声。
- **AAC** —— 高级音频编码（Advanced Audio Coding）。相同比特率下质量优于 MP3。是 YouTube、苹果、现代广播的标准。适用于：所有支持 MP3 的场景，需要更好音质时使用。
- **FLAC** —— 自由无损音频编码（Free Lossless Audio Codec）。压缩无质量损失，大小约为 WAV 的 50%。适用于：发烧友存档、高解析度音乐收藏。
- **OGG（Vorbis）** —— 开源的有损格式。相同比特率下质量优于 MP3。适用于：开源生态、游戏、网页。
- **Opus** —— 最现代的有损编解码器。在低比特率下完胜 MP3 / AAC / Vorbis。适用于：语音（播客、VoIP）、低带宽音频、WebRTC。

### 输入格式（视频）

- **MP4** —— H.264 / H.265 视频 + AAC 音频，封装在 MPEG-4 容器中。几乎所有场景的默认格式：YouTube 下载、手机录像、屏幕录制。
- **MOV** —— 苹果 QuickTime 容器。常见于 iPhone、Mac、ScreenFlow、Final Cut。
- **MKV** —— Matroska。开放容器，可容纳任何编码。常见于高质量视频下载、动漫、蓝光抓取。
- **WebM** —— Google 力推的开放容器。VP8 / VP9 / AV1 视频 + Opus / Vorbis 音频。是 Web 视频的标准（YouTube 的 WebM 下载、WhatsApp Web）。
- **AVI** —— Audio Video Interleave。来自 90 年代的传统 Microsoft 格式，在老归档和仅 Windows 的软件导出中仍然常见。
- **FLV** —— Flash 视频。Adobe Flash 的传统格式。如今罕见，但仍可在旧下载中遇到。
- **WMV** —— Windows Media Video。微软专有格式，常见于早期 Windows Movie Maker / PowerPoint 导出。
- **3GP** —— 智能手机普及前的移动端容器。仍由部分功能机和老式摄像机产出。
- **MPEG（MPG）** —— 最初的 MPEG-1 / MPEG-2 视频格式。用于老 DVD 与电视广播。

---

## 🧭 我们匹配的搜索意图

下面是本站设计目标排名的搜索查询的非穷举列表。每一条都作为主要内容出现在本站某处（首页、格式页面、FAQ 或本 README）。

<details>
<summary><strong>🔹 核心词（搜索量高）</strong></summary>

video to audio converter · video to mp3 · video to mp3 converter · convert video to mp3 · convert video to audio · extract audio from video · mp3 converter · online mp3 converter · free mp3 converter · audio extractor · video sound extractor · rip audio from video · video to audio · audio from video · get audio from video · video to mp3 online · convert video to mp3 free · free video to audio converter · video to mp3 free · online video to audio converter · 视频转音频 · 视频转mp3 · 视频转mp3转换器 · 视频提取音频 · 视频转音频在线 · 免费视频转音频 · 在线视频转mp3 · 视频音频分离 · 视频提取声音 · 视频转音乐

</details>

<details>
<summary><strong>🔹 格式对转换（长尾、高意图）</strong></summary>

mp4 to mp3 · mp4 to wav · mp4 to m4a · mp4 to aac · mp4 to flac · mp4 to ogg · mp4 to opus · mov to mp3 · mov to wav · mov to m4a · mov to aac · mkv to mp3 · mkv to wav · mkv to flac · mkv to aac · webm to mp3 · webm to ogg · webm to opus · webm to wav · avi to mp3 · avi to wav · flv to mp3 · wmv to mp3 · 3gp to mp3 · mpeg to mp3 · m4v to mp3 · mp4转mp3 · mov转mp3 · mkv转mp3 · webm转mp3 · avi转mp3 · mp4音频提取 · mp4转音频 · 视频提取背景音乐 · 视频音乐提取

</details>

<details>
<summary><strong>🔹 质量 / 比特率修饰词</strong></summary>

320 kbps mp3 converter · high quality video to mp3 · lossless video to audio · video to flac · hd audio extractor · cd quality wav extractor · 192 kbps mp3 · 128 kbps mp3 · best quality video to mp3 · convert video to high quality audio · 高质量视频转mp3 · 320kbps mp3 · 无损音频转换 · 视频转wav · 视频转flac

</details>

<details>
<summary><strong>🔹 隐私 / 信任修饰词</strong></summary>

video to mp3 no upload · video converter no upload · client-side video to mp3 · browser-based video converter · offline video to audio · private video to mp3 · secure video converter · no signup video to mp3 · no registration audio extractor · no watermark video to mp3 · ad-free video converter · gdpr-safe video converter · video to mp3 without uploading file · open source video to audio converter · 无需上传视频转mp3 · 浏览器视频转换 · 客户端视频转换 · 免费在线mp3转换器 · 视频转mp3不限大小 · 视频转mp3无水印

</details>

<details>
<summary><strong>🔹 设备 / 平台修饰词</strong></summary>

iphone video to mp3 · android video to mp3 · mac video to mp3 · windows video to mp3 · linux video to mp3 · chromebook video to mp3 · ipad video to audio · safari video to mp3 · chrome video to mp3 · firefox video to mp3 · edge video to mp3 · ios video to mp3 converter · iPhone视频转mp3 · 安卓视频转mp3 · Mac视频转mp3

</details>

<details>
<summary><strong>🔹 来源特定意图（仅限自有文件 —— 我们不是 YouTube 下载器）</strong></summary>

zoom recording to mp3 · google meet recording to mp3 · teams recording to mp3 · screen recording to mp3 · obs recording to mp3 · tiktok video to mp3 · instagram reel to mp3 · whatsapp video to mp3 · iphone screen recording to mp3 · webinar recording to audio · interview video to mp3 · podcast video to mp3 · lecture recording to mp3 · 抖音视频转mp3 · 微信视频转mp3 · 录屏转mp3 · 会议录像转mp3 · 课程录像转mp3

</details>

<details>
<summary><strong>🔹 How-to 长尾（FAQ / 精选片段目标）</strong></summary>

how to convert mp4 to mp3 · how to extract audio from video · how to convert video to mp3 free · how to convert video to mp3 without software · how to get sound from a video · how to rip audio from a video file · how to convert mov to mp3 on mac · how to convert mkv to mp3 · how to extract audio from webm · how to convert avi to mp3 in 2026 · how to convert video to mp3 on iphone · how to convert video to mp3 on android · how to convert video to mp3 offline · how to convert video to 320 kbps mp3 · how to convert video to wav · how to extract audio from a video without uploading · 如何把视频转成mp3 · 如何从视频提取音频 · 如何在线把视频转音频

</details>

<details>
<summary><strong>🔹 对比 / 替代</strong></summary>

freeconvert alternative · convertio alternative · cloudconvert alternative · onlineaudioconverter alternative · ytmp3 alternative · zamzar alternative · best free video to audio converter · best browser video to mp3 converter · best private video converter · open source alternative to convertio

</details>

<details>
<summary><strong>🔹 多语言</strong></summary>

convertisseur vidéo en audio · convertidor de video a audio · video zu audio konverter · conversor de vídeo para áudio · convertitore video audio · 视频转音频 · 视频转mp3转换器 · 视频提取音频 · 视频音频提取 · 视频转mp3在线免费 · 视频转音乐 · mp4音频提取 · mp4转音频 · 视频音乐提取 · 视频背景音乐提取 · 視頻轉音頻 · 動画 音声 変換 · 비디오 오디오 변환 · конвертер видео в аудио · محول فيديو إلى صوت · वीडियो को ऑडियो में बदलें · konverter video ke audio · video ses dönüştürücü · chuyển video sang âm thanh

</details>

---

## 🌟 总结

如果你正在寻找一款**免费的在线视频转音频转换器**，并且要求它：

- ✅ 能转换 **[MP4 转 MP3](https://videotoaudioconverter.org/zh/mp4-to-mp3)**、**[MOV 转 MP3](https://videotoaudioconverter.org/zh/mov-to-mp3)**、**[MKV 转 MP3](https://videotoaudioconverter.org/zh/mkv-to-mp3)**、**[WebM 转 MP3](https://videotoaudioconverter.org/zh/webm-to-mp3)**、**[AVI 转 MP3](https://videotoaudioconverter.org/zh/avi-to-mp3)** 以及另外 58 种转换组合
- ✅ **100% 在浏览器中运行**，**零上传**、**零跟踪**
- ✅ **无文件大小限制**、**无需注册**、**无广告**、**无水印**
- ✅ 支持 **MP3、WAV、M4A、AAC、FLAC、OGG、Opus** 输出，最高 **320 kbps** 或 **无损**
- ✅ 可在 **Mac、Windows、Linux、Chromebook、iPhone、iPad、Android** 上使用
- ✅ **开源**、**GDPR 安全**，首次加载后可**离线使用**

—— 那就把 **[videotoaudioconverter.org](https://videotoaudioconverter.org/zh/)** 加入书签，并给本仓库点个 Star 吧。⭐

---

## 📄 许可证

- **源代码：** [MIT](LICENSE)
- **FFmpeg：** [LGPL 2.1](https://ffmpeg.org/legal.html)（通过 WASM 动态链接）
- **MediaBunny：** MIT
- **shadcn/ui：** MIT

---

<p align="center">
  用 ❤️ 打造 · 托管于 <a href="https://pages.cloudflare.com/">Cloudflare Pages</a> · 数据分析由 <a href="https://plausible.io/">Plausible</a> 提供
</p>

<p align="center">
  <sub>
    关键词：视频转音频转换器 · 视频转mp3 · mp4转mp3 · mov转mp3 · mkv转mp3 · webm转mp3 · avi转mp3 · 视频提取音频 · 音频提取器 · 免费在线 · 无需上传 · 客户端 · 开源 · WebCodecs · FFmpeg WASM
  </sub>
</p>
