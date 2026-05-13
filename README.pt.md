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
  <strong>Português</strong> ·
  <a href="./README.it.md">Italiano</a> ·
  <a href="./README.ar.md">العربية</a> ·
  <a href="./README.hi.md">हिन्दी</a>
</p>

<p align="center">
  <strong>O conversor de vídeo para áudio grátis mais rápido — 100% no seu navegador, zero uploads, zero rastreamento.</strong>
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
  <a href="https://videotoaudioconverter.org">🌐 Demo ao vivo</a> ·
  <a href="#-começando">Início rápido</a> ·
  <a href="#-como-funciona">Como funciona</a> ·
  <a href="#-formatos-suportados">Formatos</a> ·
  <a href="#-build--deploy">Deploy</a>
</p>

---

## O que é isto?

**[VideoToAudioConverter.org](https://videotoaudioconverter.org)** é um **conversor de vídeo para áudio** open source, de nível de produção, que roda inteiramente dentro do navegador do usuário. Arraste um arquivo de vídeo, escolha um formato de áudio, clique em converter — o áudio é baixado na hora. Sem servidor, sem cadastro, sem limite de tamanho de arquivo imposto por um backend.

```
┌──────────────────────────────────────────────────────────────────┐
│                   Video to Audio Converter                       │
│                                                                  │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │  📂  Solte MP4 / MOV / MKV / WebM / AVI  …ou clique    │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│   Formato de saída: [MP3] [WAV] [AAC] [M4A] [FLAC] [OGG] [Opus]│
│   Qualidade:        [Alta 320 kbps] [Média 192 kbps] [Baixa 128]│
│                                                                  │
│   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░  68 %   Extraindo áudio …      │
│                                                                  │
│   ✅  output.mp3  (4,2 MB)   [ ⬇ Baixar ]                      │
│                                                                  │
│   🔒  Seu arquivo nunca sai do seu dispositivo.                │
└──────────────────────────────────────────────────────────────────┘
```

<p align="center">
  <a href="https://videotoaudioconverter.org/pt/">
    <img src="https://videotoaudioconverter.org/screenshots/01-hero.webp" alt="Video to audio converter — free online tool to convert MP4, MOV, MKV, WebM, AVI to MP3, WAV, AAC, M4A, FLAC, OGG, Opus directly in the browser with zero upload" width="900" />
  </a>
</p>

<p align="center">
  <a href="https://videotoaudioconverter.org/pt/">
    <img src="https://videotoaudioconverter.org/screenshots/07-mobile-hero.webp" alt="Video to audio converter mobile view — works on iPhone Safari and Android Chrome, no app install required" width="320" />
  </a>
</p>


### Por que mais um conversor de vídeo para áudio?

| Recurso | VideoToAudioConverter.org | Conversor online típico |
|---|---|---|
| Roda 100% no navegador | ✅ WebCodecs + FFmpeg WASM | ❌ Faz upload para servidor |
| Limite de tamanho | ✅ Nenhum (a RAM é o limite) | ❌ Limite de 50–500 MB |
| Privacidade / sem rastreamento | ✅ Zero cookies, zero uploads | ❌ Arquivos guardados no servidor |
| Funciona offline (após primeira carga) | ✅ WASM em cache para sempre | ❌ Precisa de internet |
| Open source | ✅ MIT | ❌ Código fechado |
| Sem anúncios | ✅ | ❌ Anúncios agressivos |
| Rápido (formatos modernos) | ✅ Velocidade nativa do WebCodecs | ❌ Fila no servidor |

---

## ✨ Recursos

### Conversor principal

- **Arrastar e soltar** ou clicar para selecionar qualquer arquivo de vídeo
- **9 formatos de entrada** → MP4, MOV, MKV, WebM, AVI, FLV, WMV, 3GP, MPEG
- **7 formatos de saída** → MP3, WAV, M4A, AAC, FLAC, OGG, Opus
- **Predefinições de qualidade** → Alta (320 kbps), Média (192 kbps), Baixa (128 kbps), Sem perdas
- **Barra de progresso em tempo real** com rótulos de etapas (demux → decode → encode → mux)
- **Download instantâneo** — o blob de áudio é servido a partir da memória, nunca toca em um servidor

### Arquitetura focada em privacidade

```
Dispositivo do usuário
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  Arquivo de vídeo ──▶ Motor do navegador ──▶ Arquivo  │
│  (disco local)        (WASM / JS)            de áudio  │
│                                              (local)   │
│                                                         │
│  ✗  Sem upload   ✗  Sem chamada ao servidor  ✗  Sem armazenamento │
└─────────────────────────────────────────────────────────┘
         │
         │ apenas evento anônimo de analytics enviado
         ▼
   Plausible (sem cookies)
```

### Páginas de destino por formato otimizadas para SEO

Páginas de destino dedicadas e totalmente traduzidas para cada par popular de conversão de **vídeo para áudio**:

| Página | URL ao vivo |
|---|---|
| Conversor MP4 para MP3 | [videotoaudioconverter.org/pt/mp4-to-mp3](https://videotoaudioconverter.org/pt/mp4-to-mp3) |
| Conversor MOV para MP3 | [videotoaudioconverter.org/pt/mov-to-mp3](https://videotoaudioconverter.org/pt/mov-to-mp3) |
| Conversor MKV para MP3 | [videotoaudioconverter.org/pt/mkv-to-mp3](https://videotoaudioconverter.org/pt/mkv-to-mp3) |
| Conversor WebM para MP3 | [videotoaudioconverter.org/pt/webm-to-mp3](https://videotoaudioconverter.org/pt/webm-to-mp3) |
| Conversor AVI para MP3 | [videotoaudioconverter.org/pt/avi-to-mp3](https://videotoaudioconverter.org/pt/avi-to-mp3) |

Cada página tem texto único, schemas JSON-LD (SoftwareApplication, HowTo, FAQPage) e tags Open Graph — sem conteúdo duplicado.

### Internacionalização

- Inglês (`/en/`) e francês (`/fr/`) prontos para uso
- Namespaces de mensagens por página para i18n profunda (não apenas strings de UI)
- Infraestrutura pronta para mais de 15 locais adicionais (zh, ja, ko, es, de, pt, it, ru, ar, hi, id, tr, vi …)

---

## 🔧 Como funciona

O conversor é movido por uma **arquitetura de dois motores** que escolhe automaticamente o motor mais rápido disponível para cada arquivo de entrada:

```
                 Usuário solta um arquivo de vídeo
                          │
                          ▼
              ┌───────────────────────┐
              │   pickEngineHint()    │
              │  (verifica extensão)  │
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
  │  de codecs do     │         │  suporte completo a   │
  │  navegador        │         │  formatos             │
  │  ~10× mais rápido │         │  AVI/FLV/WMV/3GP etc  │
  └────────┬──────────┘         └──────────┬────────────┘
           │                               │
           └───────────────┬───────────────┘
                           │
                           ▼
                   Blob de áudio (MP3/WAV/…)
                           │
                           ▼
                   Navegador baixa o arquivo
```

### Detalhes dos motores

#### MediaBunny — motor principal

[MediaBunny](https://github.com/nicktindall/mediabunny) encapsula a **WebCodecs API** nativa do navegador em um pipeline simples de transcodificação. Opera na thread principal sem sobrecarga de WASM para formatos suportados.

- **Entradas suportadas:** MP4, M4V, MOV, QT, MKV, WebM
- **Velocidade:** Próxima ao nativo — um MP4 de 1 hora pode ser convertido em ~10 segundos em hardware moderno
- **Não exige cabeçalhos COOP/COEP** — funciona junto com scripts de terceiros

#### FFmpeg WASM — motor de fallback

[@ffmpeg/ffmpeg](https://github.com/ffmpegwasm/ffmpeg.wasm) compila o binário completo do FFmpeg para WebAssembly. Roda em thread única (sem SharedArrayBuffer / COOP exigido).

- **Entradas suportadas:** AVI, FLV, WMV, 3GP, MPEG, e qualquer formato que o MediaBunny não consiga processar
- **Tamanho do WASM:** ~31 MB (em cache via `Cache-Control: immutable, max-age=31536000`)
- **Shim JS auto-hospedado** em `/ffmpeg-core/ffmpeg-core.js` para evitar dependência de CDN

---

## 📂 Formatos suportados

### Formatos de entrada (vídeo para áudio)

| Formato | Extensão(ões) | Motor | Observações |
|---|---|---|---|
| MP4 | `.mp4`, `.m4v` | MediaBunny | Formato de vídeo mais comum |
| MOV | `.mov`, `.qt` | MediaBunny | Apple QuickTime |
| MKV | `.mkv` | MediaBunny | Contêiner Matroska |
| WebM | `.webm` | MediaBunny | Nativo da web (VP8/VP9/AV1) |
| AVI | `.avi` | FFmpeg WASM | Formato Windows legado |
| FLV | `.flv` | FFmpeg WASM | Flash Video |
| WMV | `.wmv` | FFmpeg WASM | Windows Media Video |
| 3GP | `.3gp` | FFmpeg WASM | Vídeo móvel |
| MPEG | `.mpeg`, `.mpg` | FFmpeg WASM | Formato antigo de broadcast |

### Formatos de saída (áudio)

| Formato | Opções de qualidade | Caso de uso |
|---|---|---|
| **MP3** | 128 / 192 / 320 kbps | Compatibilidade universal, streaming, podcasts |
| **WAV** | PCM sem perdas | Áudio profissional, importação em DAW |
| **AAC** | 128 / 192 / 320 kbps | Dispositivos Apple, iTunes, melhor compressão que MP3 |
| **M4A** | 128 / 192 / 320 kbps | iTunes, Apple Music |
| **FLAC** | Sem perdas | Arquivamento audiófilo |
| **OGG** | 128 / 192 / 320 kbps | Formato aberto, ótima compressão |
| **Opus** | 128 / 192 / 320 kbps | Melhor relação compressão/qualidade, VoIP |

---

## 🚀 Começando

### Pré-requisitos

- **Node.js** 20+
- **pnpm** 9+ (`npm install -g pnpm`)

### Instalação

```bash
git clone https://github.com/rocnubie/video-to-audio-convertor.git
cd video-to-audio-convertor

pnpm install
# o postinstall copia automaticamente o WASM do @ffmpeg/core para public/ffmpeg-core/
```

### Servidor de desenvolvimento

```bash
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) — o app redireciona para `/en/` automaticamente.

> **Dica:** Na primeira vez em que o FFmpeg WASM carrega (~31 MB), será lento. As cargas seguintes são instantâneas graças a `Cache-Control: immutable`.

### Variáveis de ambiente

Copie `.env.example` para `.env.local`:

```bash
cp .env.example .env.local
```

| Variável | Descrição | Exemplo |
|---|---|---|
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Domínio do seu site no Plausible | `videotoaudioconverter.org` |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` | URL do script do Plausible | `https://plausible.io/js/script.tagged-events.outbound-links.js` |

Deixe em branco no desenvolvimento — o analytics será simplesmente ignorado.

---

## 🏗️ Stack técnica

```
┌─────────────────────────────────────────────────────────────────┐
│                   Camada da aplicação                           │
│  Next.js 16 (App Router)  ·  React 19  ·  TypeScript 5         │
├──────────────────────┬──────────────────────────────────────────┤
│   UI / Estilização   │       Bibliotecas principais             │
│                      │                                          │
│  Tailwind CSS v4     │  MediaBunny 1.44 (motor WebCodecs)       │
│  shadcn/ui           │  @ffmpeg/ffmpeg 0.12 (motor WASM)        │
│  Radix UI            │  next-intl 4 (i18n)                      │
│  Lucide Icons        │  react-dropzone 15                       │
│  Sistema cor OKLCH   │  Sonner (notificações toast)             │
│                      │  Plausible Analytics (eventos tipados)   │
├──────────────────────┴──────────────────────────────────────────┤
│                      Infraestrutura                             │
│  Cloudflare Pages (hospedagem estática)  ·  pnpm  ·  ESLint    │
└─────────────────────────────────────────────────────────────────┘
```

### Por que essas escolhas?

**Exportação estática do Next.js** — O site inteiro é pré-renderizado em arquivos HTML/JS/CSS planos. Não há servidor Node.js em produção. O Cloudflare Pages serve tudo a partir da edge.

**MediaBunny no lugar de FFmpeg-first** — Para MP4/MOV/MKV/WebM (a grande maioria das conversões), o MediaBunny usa WebCodecs nativos do navegador e é 5–10× mais rápido que o FFmpeg WASM, sem penalidade de cold start.

**FFmpeg WASM em thread única** — O FFmpeg multi-thread exige `SharedArrayBuffer`, que exige `Cross-Origin-Opener-Policy: same-origin` e `Cross-Origin-Embedder-Policy: require-corp`. Esses cabeçalhos quebram scripts de terceiros (analytics, fontes, anúncios). A thread única evita tudo isso.

**Tailwind v4 + OKLCH** — O design system usa o espaço de cor OKLCH para tons teal/ciano perceptualmente uniformes que ficam corretos tanto no modo claro quanto no escuro, sem overrides manuais por componente.

---

## 📁 Estrutura de arquivos

```
videotoaudioconverter.org/
│
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx              # Layout do locale (Header, Footer, Plausible, JSON-LD)
│   │   ├── page.tsx                # Página inicial (hero, conversor, recursos, FAQ)
│   │   ├── mp4-to-mp3/page.tsx     # Página "Conversor MP4 para MP3"
│   │   ├── mov-to-mp3/page.tsx     # Página "Conversor MOV para MP3"
│   │   ├── mkv-to-mp3/page.tsx     # Página "Conversor MKV para MP3"
│   │   ├── webm-to-mp3/page.tsx    # Página "Conversor WebM para MP3"
│   │   ├── avi-to-mp3/page.tsx     # Página "Conversor AVI para MP3"
│   │   ├── about/page.tsx
│   │   └── privacy/page.tsx
│   ├── layout.tsx                  # Layout raiz (viewport, tema)
│   ├── globals.css                 # Entrada do Tailwind + classes utilitárias
│   ├── theme.css                   # Tokens de design OKLCH, claro/escuro
│   ├── icon.svg                    # Ícone do app
│   ├── robots.ts                   # robots.txt via Metadata API do Next.js
│   └── sitemap.ts                  # Sitemap XML (todos os locales × todas as rotas)
│
├── components/
│   ├── converter/
│   │   ├── Converter.tsx           # Widget principal do conversor (client component)
│   │   ├── DropZone.tsx            # Input de arquivo arrastar-e-soltar
│   │   └── SegmentedPicker.tsx     # Seletor de formato / qualidade
│   ├── layout/
│   │   ├── Header.tsx              # Barra de navegação com links de formato + seletor de idioma
│   │   ├── Footer.tsx              # Rodapé com links
│   │   └── LanguageSwitcher.tsx    # Dropdown en ↔ fr
│   ├── sections/                   # Seções da página inicial
│   │   ├── HeroProductStage.tsx
│   │   ├── BentoFeatures.tsx
│   │   ├── UseCases.tsx
│   │   ├── Comparison.tsx
│   │   ├── PrivacyStory.tsx
│   │   ├── Steps.tsx
│   │   ├── FAQ.tsx
│   │   └── TrustBar.tsx
│   ├── landing/
│   │   └── FormatLandingPage.tsx   # Componente reutilizável para páginas de formato
│   ├── seo/
│   │   └── JsonLd.tsx              # Renderizador de schema JSON-LD
│   └── ui/                         # Primitivos shadcn/ui (button, card, dialog …)
│
├── lib/
│   ├── engines/
│   │   ├── types.ts                # OutputFormat, Quality, ConvertOptions, ConvertResult
│   │   ├── index.ts                # Dispatcher: tenta MediaBunny, faz fallback para FFmpeg
│   │   ├── mediabunny.ts           # Wrapper do motor WebCodecs
│   │   └── ffmpeg.ts               # Wrapper do motor FFmpeg WASM
│   ├── seo/
│   │   ├── site.ts                 # Constantes SITE, NAV, absoluteUrl()
│   │   ├── metadata.ts             # Helper buildMetadata()
│   │   └── schemas.ts              # Construtores de JSON-LD do Schema.org
│   ├── content/
│   │   ├── format-pages.ts         # Configuração FORMAT_PAGES (slug, texto, casos de uso)
│   │   └── use-cases.ts            # Dados de casos de uso compartilhados
│   ├── analytics.ts                # Emissor de eventos Plausible tipado
│   ├── formats.ts                  # Metadados INPUT_FORMATS / OUTPUT_FORMATS
│   └── utils.ts                    # cn() — clsx + twMerge
│
├── i18n/
│   ├── routing.ts                  # locales: ['en', 'fr'], defaultLocale: 'en'
│   ├── request.ts                  # Carregador de mensagens (merge compartilhado + por página)
│   ├── navigation.ts               # Link, redirect, useRouter do next-intl
│   ├── locale.ts                   # Tabela LOCALE_META para o seletor de idioma
│   └── messages/
│       ├── en.json                 # Strings compartilhadas em inglês
│       └── fr.json                 # Strings compartilhadas em francês
│       (+ arquivos JSON por página em i18n/pages/<slug>/)
│
├── public/
│   ├── ffmpeg-core/
│   │   └── ffmpeg-core.js          # Shim JS auto-hospedado do FFmpeg (~1 MB)
│   │   (ffmpeg-core.wasm carregado de unpkg em tempo de execução)
│   ├── _headers                    # Cloudflare Pages: cache + cabeçalhos de segurança
│   └── _redirects                  # Cloudflare Pages: / → /en/ etc.
│
├── scripts/
│   └── sync-ffmpeg-core.mjs        # Copia o dist do @ffmpeg/core para public/
│
├── .env.example
├── next.config.ts                  # output: 'export', trailingSlash: false, plugin next-intl
├── tsconfig.json
├── tailwind.config.ts
└── package.json
```

---

## 🌍 Internacionalização

O site usa [next-intl 4](https://next-intl-docs.vercel.app/) com rotas prefixadas por locale (`/en/`, `/fr/`).

### Adicionando um novo idioma

1. **Registre o locale** em `i18n/routing.ts`:

   ```ts
   export const routing = defineRouting({
     locales: ['en', 'fr', 'de'],  // adicione 'de'
     defaultLocale: 'en',
   });
   ```

2. **Crie as mensagens compartilhadas** em `i18n/messages/de.json` (copie `en.json` e traduza).

3. **Crie mensagens por página** para cada namespace de página:

   ```
   i18n/pages/home/de.json
   i18n/pages/mp4-to-mp3/de.json
   … etc.
   ```

4. **Adicione metadados do locale** em `i18n/locale.ts`:

   ```ts
   de: { nativeName: 'Deutsch', englishName: 'German' },
   ```

5. `sitemap.ts` e `generateStaticParams()` reconhecem o novo locale automaticamente — nenhuma outra alteração é necessária.

---

## 📊 Analytics

O site usa [Plausible Analytics](https://plausible.io/) — sem cookies, em conformidade com GDPR/LGPD, nenhum dado pessoal coletado.

### Eventos personalizados

Todos os eventos são tipados em [`lib/analytics.ts`](lib/analytics.ts):

| Evento | Propriedades | Quando dispara |
|---|---|---|
| `file_selected` | `ext`, `size_mb`, `engine_hint` | Usuário solta ou seleciona um arquivo de vídeo |
| `conversion_started` | `from_ext`, `to_format`, `quality` | Botão Converter clicado |
| `conversion_completed` | `from_ext`, `to_format`, `engine`, `duration_s` | Blob de áudio pronto |
| `conversion_failed` | `from_ext`, `to_format`, `reason` | Motor lança um erro |
| `conversion_cancelled` | `from_ext`, `to_format` | Usuário cancela no meio da conversão |
| `download_clicked` | `format` | Botão de download clicado |

Esses eventos te dão um quadro completo de quais caminhos de conversão de vídeo para áudio são mais populares.

---

## 📦 Build & Deploy

### Build local

```bash
pnpm build       # exportação estática → out/
npx serve out    # pré-visualização local
```

A saída do build é um diretório de arquivos planos — nenhum servidor é necessário.

### Deploy no Cloudflare Pages

1. **Conecte seu repositório** no painel do Cloudflare Pages.

2. **Configurações de build:**

   | Configuração | Valor |
   |---|---|
   | Comando de build | `pnpm build` |
   | Diretório de saída | `out` |
   | Versão do Node.js | `20` |

3. **Variáveis de ambiente** (Produção + Preview):

   ```
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=videotoaudioconverter.org
   NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL=https://plausible.io/js/script.tagged-events.outbound-links.js
   ```

4. **Domínio personalizado:** Adicione `videotoaudioconverter.org` e deixe o DNS da Cloudflare cuidar do roteamento.

### Estratégia de cache

| Asset | Cache-Control | Por quê |
|---|---|---|
| `/ffmpeg-core/*` | `immutable, max-age=31536000` | Endereçado por conteúdo; nunca muda |
| `/_next/static/*` | `immutable, max-age=31536000` | Next.js usa hash de conteúdo nos nomes |
| `/og.png`, `/favicon.ico` | `max-age=604800` | Atualizado com pouca frequência |
| Páginas HTML | Sem cache / cabeçalhos de segurança | Sempre frescas, proteger usuários |

---

## ➕ Adicionando uma nova página de formato

Para adicionar uma nova página de destino de conversão de **vídeo para áudio** (ex.: `flv-to-mp3`):

1. **Adicione em `lib/content/format-pages.ts`:**

   ```ts
   {
     slug: 'flv-to-mp3',
     messageKey: 'flvToMp3',
     outputFormat: 'mp3',
     highlightedInputs: ['flv'],
     useCaseImages: ['https://images.unsplash.com/…'],
   }
   ```

2. **Crie o arquivo da página:**

   ```ts
   // app/[locale]/flv-to-mp3/page.tsx
   import { FormatLandingPage } from '@/components/landing/FormatLandingPage'
   import { getFormatPage } from '@/lib/content/format-pages'

   const config = getFormatPage('flv-to-mp3')!

   export default function Page() {
     return <FormatLandingPage config={config} />
   }
   ```

3. **Adicione as traduções:**

   ```
   i18n/pages/flv-to-mp3/en.json
   i18n/pages/flv-to-mp3/fr.json
   ```

4. A página é **incluída automaticamente** em `sitemap.ts` — nenhuma outra alteração é necessária.

> **Nota de SEO:** Cada página de formato deve ter texto único. O Google penaliza páginas-portal com conteúdo quase duplicado.

---

## 🛡️ Privacidade e segurança

<p align="center">
  <a href="https://videotoaudioconverter.org/pt/privacy">
    <img src="https://videotoaudioconverter.org/screenshots/04-privacy-story.webp" alt="Privacy-first video to audio converter — DevTools-provable zero uploads, runs offline after first page load, no retention no logs, cookieless analytics, GDPR safe" width="900" />
  </a>
</p>


- **Sem uploads de arquivo** — a conversão roda inteiramente no navegador via WebCodecs / FFmpeg WASM
- **Sem cookies** — o Plausible não usa cookies; nenhum banner de consentimento necessário
- **Sem localStorage** — nada é persistido entre sessões
- **Sem dependência de CDN em runtime** — o shim JS do FFmpeg é auto-hospedado; apenas o binário WASM é carregado de `unpkg` e fica em cache para sempre após a primeira carga
- **Cabeçalhos de segurança em toda página HTML:**
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`

---

## 🤝 Contribuindo

Contribuições são bem-vindas. As áreas mais impactantes são:

- **Novas traduções** — Copie `i18n/messages/en.json`, traduza, abra um PR
- **Novas páginas de destino de formato** — Siga o guia acima; traga texto único
- **Melhorias de motor** — Melhor relatório de progresso, codecs de saída adicionais
- **UI / acessibilidade** — Conformidade com WCAG AA, navegação por teclado

Por favor, abra uma issue antes de iniciar mudanças grandes para que possamos discutir a direção.

---

## 🔍 O que este projeto resolve (referência de palavras-chave e casos de uso)

**[VideoToAudioConverter.org](https://videotoaudioconverter.org)** é construído para ser a resposta definitiva para qualquer pessoa que procure um **conversor de vídeo para áudio grátis online** que respeite a privacidade. Abaixo está o mapa completo de intenções de conversão e consultas de busca que atendemos.

### Todos os pares de conversão que suportamos

Cada célula é um caminho de conversão explícito e indexável. Solte um arquivo no formato da linha e escolha o formato da coluna — essa é a conversão.

| Entrada ↓ / Saída → | MP3 | WAV | M4A | AAC | FLAC | OGG | Opus |
|---|---|---|---|---|---|---|---|
| **MP4** | [mp4 para mp3](https://videotoaudioconverter.org/pt/mp4-to-mp3) | mp4 para wav | mp4 para m4a | mp4 para aac | mp4 para flac | mp4 para ogg | mp4 para opus |
| **MOV** | [mov para mp3](https://videotoaudioconverter.org/pt/mov-to-mp3) | mov para wav | mov para m4a | mov para aac | mov para flac | mov para ogg | mov para opus |
| **MKV** | [mkv para mp3](https://videotoaudioconverter.org/pt/mkv-to-mp3) | mkv para wav | mkv para m4a | mkv para aac | mkv para flac | mkv para ogg | mkv para opus |
| **WebM** | [webm para mp3](https://videotoaudioconverter.org/pt/webm-to-mp3) | webm para wav | webm para m4a | webm para aac | webm para flac | webm para ogg | webm para opus |
| **AVI** | [avi para mp3](https://videotoaudioconverter.org/pt/avi-to-mp3) | avi para wav | avi para m4a | avi para aac | avi para flac | avi para ogg | avi para opus |
| **FLV** | flv para mp3 | flv para wav | flv para m4a | flv para aac | flv para flac | flv para ogg | flv para opus |
| **WMV** | wmv para mp3 | wmv para wav | wmv para m4a | wmv para aac | wmv para flac | wmv para ogg | wmv para opus |
| **3GP** | 3gp para mp3 | 3gp para wav | 3gp para m4a | 3gp para aac | 3gp para flac | 3gp para ogg | 3gp para opus |
| **MPEG** | mpeg para mp3 | mpeg para wav | mpeg para m4a | mpeg para aac | mpeg para flac | mpeg para ogg | mpeg para opus |
| **M4V** | m4v para mp3 | m4v para wav | m4v para m4a | m4v para aac | m4v para flac | m4v para ogg | m4v para opus |

> **63 caminhos de conversão suportados**, todos acessíveis pelo mesmo widget de conversão em **[videotoaudioconverter.org](https://videotoaudioconverter.org)**. Páginas de destino dedicadas: [MP4 → MP3](https://videotoaudioconverter.org/pt/mp4-to-mp3) · [MOV → MP3](https://videotoaudioconverter.org/pt/mov-to-mp3) · [MKV → MP3](https://videotoaudioconverter.org/pt/mkv-to-mp3) · [WebM → MP3](https://videotoaudioconverter.org/pt/webm-to-mp3) · [AVI → MP3](https://videotoaudioconverter.org/pt/avi-to-mp3). Todos os demais pares são liberados pelo seletor de formato de saída.

---

## 🎯 Quem usa um conversor de vídeo para áudio? (casos de uso)

<p align="center">
  <a href="https://videotoaudioconverter.org/pt/">
    <img src="https://videotoaudioconverter.org/screenshots/02-use-cases.webp" alt="Video to audio converter use cases — podcast and interview recordings, online classes and lecture archives, iPhone and Android screen recordings, movie clips and archive footage" width="900" />
  </a>
</p>


As pessoas procuram um **conversor de vídeo para áudio** por motivos muito diferentes. Otimizamos a UI, o texto e as páginas de destino em torno desses cenários. Você pode testar todos eles em **[videotoaudioconverter.org](https://videotoaudioconverter.org)**.

### 🎙️ Podcasters e produtores de áudio

- **[Converter gravações de vídeo para MP3](https://videotoaudioconverter.org/pt/mp4-to-mp3)** para distribuição de podcast (Spotify, Apple Podcasts, RSS).
- Extrair áudio de uma **gravação do Zoom**, **gravação do Google Meet**, **gravação do Microsoft Teams**, **gravação do Riverside** ou **gravação de tela do OBS**.
- Remover a faixa visual de um **MP4 de entrevista** e entregar somente o áudio.
- Converter **vídeo para WAV** ou **FLAC** para edição em Audacity, Adobe Audition, Logic Pro, GarageBand, Reaper ou Pro Tools.

### 🎓 Estudantes e educadores

- Converter **gravações de aulas para MP3** para que possam ser ouvidas em qualquer celular durante o trajeto — experimente em [videotoaudioconverter.org](https://videotoaudioconverter.org).
- Extrair áudio de **gravações de aulas no Zoom**, **vídeos do Kahoot**, **downloads da Khan Academy** ou **palestras de conferências**.
- Transformar uma **[gravação MOV](https://videotoaudioconverter.org/pt/mov-to-mp3)** do QuickTime em **M4A** portátil para iPhone.
- Obter áudio de **downloads do YouTube que você já possui** para revisão offline (respeite os direitos autorais).

### 📱 Usuários de mobile e redes sociais

- **Vídeo do TikTok para MP3** — extrair um clipe de som de uma exportação do TikTok em [videotoaudioconverter.org](https://videotoaudioconverter.org).
- **Vídeo de Reel do Instagram para áudio** — extrair áudio de um download de Reel.
- **Vídeo do WhatsApp para MP3** — converter uma mensagem de vídeo encaminhada em áudio.
- **Vídeo do iPhone para MP3** — transformar gravações `.MOV` / `.M4V` do Fotos em MP3; use nossa página **[MOV para MP3](https://videotoaudioconverter.org/pt/mov-to-mp3)**.
- **Vídeo do Android para MP3** — extrair áudio de gravações MP4; use nossa página **[MP4 para MP3](https://videotoaudioconverter.org/pt/mp4-to-mp3)**.

### 🎵 Entusiastas de música e mídia

- **[Converter clipe musical para MP3](https://videotoaudioconverter.org/pt/mp4-to-mp3)** para reprodução offline (em arquivos seus / com direitos).
- Extrair áudio de uma **gravação de show** ou **vídeo de ensaio**.
- Tirar uma **trilha sonora** de um vídeo para remix, sampling ou sets de DJ.
- Arquivar faixas de áudio de vídeos em **FLAC sem perdas** via [videotoaudioconverter.org](https://videotoaudioconverter.org).

### 💼 Profissionais e trabalhadores do conhecimento

- **[Converter uma gravação de reunião para MP3](https://videotoaudioconverter.org/pt/mp4-to-mp3)** para transcrição com Otter.ai, Rev, Descript, Whisper ou ferramentas de transcrição do Google.
- Extrair áudio de um **webinar** ou **reunião geral da empresa** para acessibilidade / arquivamento.
- Tirar áudio de um **vídeo de treinamento** para enviar a um serviço de transcrição.
- Economizar banda compartilhando **versões somente áudio** de reuniões — tudo em [videotoaudioconverter.org](https://videotoaudioconverter.org).

### 🎬 Editores de vídeo e criadores de conteúdo

- Separar áudio do vídeo para **edição multipista** no Premiere Pro, DaVinci Resolve, Final Cut, CapCut ou VN Editor — use [videotoaudioconverter.org](https://videotoaudioconverter.org) antes de importar.
- Substituir a faixa de áudio de um vídeo primeiro **[extraindo o original com nosso conversor MKV](https://videotoaudioconverter.org/pt/mkv-to-mp3)**.
- Gerar **prévias somente áudio** para clientes antes de entregar o vídeo final.

### 🔒 Usuários preocupados com privacidade

- Converter arquivos **sem fazer upload** para qualquer servidor de terceiros — **[experimente em videotoaudioconverter.org](https://videotoaudioconverter.org)**.
- Processar **entrevistas confidenciais**, **depoimentos jurídicos**, **gravações médicas**, **material de fontes jornalísticas** sem nunca deixar o dispositivo.
- Use o conversor **offline** após a primeira carga da página (funciona em um avião ou em um SCIF).
- Evite conversores que exigem **cadastro de e-mail**, **criação de conta** ou **assinaturas pagas**. Veja nossa [Política de Privacidade](https://videotoaudioconverter.org/pt/privacy) para detalhes.

---

## ❓ Perguntas comuns (respondidas)

<p align="center">
  <a href="https://videotoaudioconverter.org/pt/#faq">
    <img src="https://videotoaudioconverter.org/screenshots/05-faq.webp" alt="Video to audio converter FAQ — supported input formats MP4 MOV MKV WebM AVI, output codecs MP3 WAV AAC M4A FLAC OGG Opus, file size limits, iPhone iPad Android Mac Windows support" width="900" />
  </a>
</p>


Estas são as perguntas long-tail que as pessoas digitam no Google ao procurar um conversor de vídeo para áudio. Cada uma é respondida no FAQ da [página inicial](https://videotoaudioconverter.org) e nas páginas de destino por formato.

### Como converter MP4 para MP3 grátis online?
Acesse **[videotoaudioconverter.org/pt/mp4-to-mp3](https://videotoaudioconverter.org/pt/mp4-to-mp3)**, solte seu arquivo MP4, escolha "MP3" como formato de saída, clique em Converter e baixe o arquivo. Sem upload, sem cadastro, sem marca d'água, sem limite de tamanho.

### Como extrair áudio de um vídeo sem fazer upload?
Use um **conversor de vídeo para áudio do lado do cliente** como o **[VideoToAudioConverter.org](https://videotoaudioconverter.org)**. A conversão roda no seu navegador via WebCodecs e FFmpeg WASM — o arquivo nunca toca um servidor.

### Qual é o melhor conversor grátis de vídeo para áudio que não faz upload?
Um conversor baseado em navegador usando WebCodecs ou FFmpeg WASM é a única categoria que genuinamente não faz upload. O **[VideoToAudioConverter.org](https://videotoaudioconverter.org)** é open source, então você pode verificar a afirmação.

### Como converter MOV para MP3 no Mac sem iTunes?
Abra **[videotoaudioconverter.org/pt/mov-to-mp3](https://videotoaudioconverter.org/pt/mov-to-mp3)** no Safari ou Chrome, arraste o arquivo `.MOV` do Finder para a dropzone, escolha "MP3" e baixe. Funciona em qualquer versão do macOS, sem precisar do iTunes / app Música.

### Como converter MKV para MP3 sem instalar software?
Abra **[videotoaudioconverter.org/pt/mkv-to-mp3](https://videotoaudioconverter.org/pt/mkv-to-mp3)**, solte o MKV, escolha MP3, clique em Converter. Sem VLC, sem HandBrake, sem linha de comando.

### Como extrair áudio de um arquivo WebM?
Acesse **[videotoaudioconverter.org/pt/webm-to-mp3](https://videotoaudioconverter.org/pt/webm-to-mp3)**. O WebM usa áudio Opus ou Vorbis internamente — escolha Opus (para qualidade de passthrough nativa), MP3 (para compatibilidade) ou WAV (para edição).

### Como converter AVI para MP3 em 2026?
AVI é um formato legado do Windows. Abra **[videotoaudioconverter.org/pt/avi-to-mp3](https://videotoaudioconverter.org/pt/avi-to-mp3)** — nosso motor de fallback FFmpeg WASM lida com AVI nativamente. Solte o arquivo, escolha MP3, pronto. Sem precisar instalar codec DivX.

### Como converter vídeo para MP3 320 kbps?
Em **[videotoaudioconverter.org](https://videotoaudioconverter.org)**, escolha a predefinição de qualidade "Alta" — ela codifica MP3 a 320 kbps (a qualidade máxima para MP3).

### Como extrair áudio de um vídeo para WAV (sem perdas)?
Abra **[videotoaudioconverter.org](https://videotoaudioconverter.org)** e escolha "WAV" como formato de saída. WAV é PCM não comprimido — ideal para edição em uma DAW.

### Como tirar áudio de um vídeo do iPhone?
Os vídeos do iPhone geralmente são `.MOV` (H.264 + AAC) ou `.MP4`. Abra **[videotoaudioconverter.org/pt/mov-to-mp3](https://videotoaudioconverter.org/pt/mov-to-mp3)**, solte o arquivo do Fotos / Arquivos, escolha MP3 ou M4A e baixe.

### É legal converter vídeo para áudio?
Converter arquivos que você possui ou tem direitos é legal na maioria das jurisdições. Não use esta ferramenta para burlar DRM, fazer scraping de serviços de streaming pagos ou violar direitos autorais. Não somos um downloader do YouTube.

### O conversor funciona offline?
Após a primeira carga da página em **[videotoaudioconverter.org](https://videotoaudioconverter.org)**, sim. O binário FFmpeg WASM fica em cache por um ano. Você pode ativar o modo avião e ainda converter arquivos.

---

## 🏆 Como o VideoToAudioConverter.org se compara

<p align="center">
  <a href="https://videotoaudioconverter.org/pt/">
    <img src="https://videotoaudioconverter.org/screenshots/03-comparison.webp" alt="Free video to audio converter comparison table — VideoToAudioConverter.org versus CloudConvert, Zamzar, 123apps, Convertio. No upload, no file size cap, unlimited daily conversions, no signup, no ads, MIT open source" width="900" />
  </a>
</p>

| Capacidade | [VideoToAudioConverter.org](https://videotoaudioconverter.org) | FreeConvert | Convertio | OnlineAudioConverter | CloudConvert |
|---|---|---|---|---|---|
| **Grátis** | ✅ Para sempre | ✅ Limitado | ✅ Limitado | ✅ Limitado | ✅ Limitado |
| **Sem upload (client-side)** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Sem limite de tamanho de arquivo** | ✅ | ❌ 1 GB | ❌ 100 MB | ❌ 2 GB | ❌ 1 GB |
| **Sem cadastro** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Sem anúncios** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Funciona offline** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Open source** | ✅ MIT | ❌ | ❌ | ❌ | ❌ |
| **Conversões ilimitadas / dia** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Seguro por design (GDPR/LGPD)** | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |

> A comparação reflete os planos de preços publicados e as restrições de recursos a partir de 2026. Verifique os limites atuais no site de cada fornecedor.

---

## 🗣️ Cobertura multilíngue

O mesmo conversor, localizado para públicos globais. Cada versão traduzida é uma superfície de SEO totalmente separada:

| Locale | Prefixo da URL | Frase traduzida para "video to audio converter" |
|---|---|---|
| 🇬🇧 Inglês | [`/en/`](https://videotoaudioconverter.org/en/) | video to audio converter |
| 🇫🇷 Francês | [`/fr/`](https://videotoaudioconverter.org/fr/) | convertisseur vidéo en audio |
| 🇪🇸 Espanhol | `/es/` *(planejado)* | convertidor de video a audio |
| 🇩🇪 Alemão | `/de/` *(planejado)* | Video zu Audio Konverter |
| 🇮🇹 Italiano | `/it/` *(planejado)* | convertitore da video ad audio |
| 🇵🇹 Português | `/pt/` *(planejado)* | conversor de vídeo para áudio |
| 🇨🇳 Chinês (simplificado) | `/zh/` *(planejado)* | 视频转音频转换器 |
| 🇯🇵 Japonês | `/ja/` *(planejado)* | 動画から音声に変換 |
| 🇰🇷 Coreano | `/ko/` *(planejado)* | 비디오를 오디오로 변환 |
| 🇷🇺 Russo | `/ru/` *(planejado)* | конвертер видео в аудио |
| 🇸🇦 Árabe | `/ar/` *(planejado)* | محول فيديو إلى صوت |
| 🇮🇳 Hindi | `/hi/` *(planejado)* | वीडियो को ऑडियो में बदलें |
| 🇮🇩 Indonésio | `/id/` *(planejado)* | konverter video ke audio |
| 🇹🇷 Turco | `/tr/` *(planejado)* | video ses dönüştürücü |
| 🇻🇳 Vietnamita | `/vi/` *(planejado)* | chuyển video sang âm thanh |

Adicionar um locale leva cerca de 30 minutos depois que as traduções ficam prontas — veja [Internacionalização](#-internacionalização) acima. A página inicial em inglês está em [videotoaudioconverter.org/en/](https://videotoaudioconverter.org/en/) e a versão em francês em [videotoaudioconverter.org/fr/](https://videotoaudioconverter.org/fr/).

---

## 📚 Glossário — formatos de áudio e vídeo explicados

Uma referência para usuários que pesquisam coisas como "qual a diferença entre MP3 e M4A" ou "qual formato de áudio é melhor para podcasts".

### Formatos de saída (áudio)

- **MP3** — O formato de áudio universal. Compressão com perdas. 128 kbps = razoável, 192 kbps = bom, 320 kbps = excelente. Toca em literalmente qualquer dispositivo feito desde 1998. Use para: podcasts, streaming, compartilhamento.
- **WAV** — Áudio PCM não comprimido. Arquivos enormes (~10 MB por minuto), mas bit-perfect. Use para: edição em DAW, masterização, fontes de arquivamento.
- **M4A** — Contêiner de áudio MPEG-4, geralmente contendo AAC. Mesma qualidade do MP3 com bitrates menores. Use para: ecossistema iTunes / Apple Music, toques para iPhone.
- **AAC** — Advanced Audio Coding. Melhor qualidade que MP3 no mesmo bitrate. Padrão para YouTube, Apple, broadcasting moderno. Use para: em qualquer lugar onde MP3 funcione, quando você quiser melhor qualidade.
- **FLAC** — Free Lossless Audio Codec. Comprime sem perda de qualidade, ~50% do tamanho do WAV. Use para: arquivamento audiófilo, coleções de música em alta resolução.
- **OGG (Vorbis)** — Formato lossy open source. Melhor qualidade que MP3 no mesmo bitrate. Use para: ecossistemas open source, jogos, web.
- **Opus** — O codec lossy mais moderno. Supera MP3 / AAC / Vorbis em bitrates baixos. Use para: voz (podcasts, VoIP), áudio de baixa largura de banda, WebRTC.

### Formatos de entrada (vídeo)

- **MP4** — Vídeo H.264 / H.265 + áudio AAC em um contêiner MPEG-4. Padrão para quase tudo: downloads do YouTube, gravações de celular, capturas de tela.
- **MOV** — Contêiner Apple QuickTime. Comum em iPhones, Macs, ScreenFlow, Final Cut.
- **MKV** — Matroska. Contêiner aberto que pode conter qualquer codec. Comum em downloads de vídeo de alta qualidade, anime, rips de blu-ray.
- **WebM** — Contêiner aberto apoiado pelo Google. Vídeo VP8 / VP9 / AV1 + áudio Opus / Vorbis. Padrão para vídeo na web (downloads do YouTube em WebM, WhatsApp Web).
- **AVI** — Audio Video Interleave. Formato legado da Microsoft dos anos 90, ainda comum em arquivos antigos e exportações de software só para Windows.
- **FLV** — Flash Video. Formato legado do Adobe Flash. Raro hoje, mas ainda encontrado em downloads antigos.
- **WMV** — Windows Media Video. Proprietário da Microsoft, comum em exportações antigas do Windows Movie Maker / PowerPoint.
- **3GP** — Contêiner móvel da era pré-smartphone. Ainda produzido por alguns feature phones e camcorders antigos.
- **MPEG (MPG)** — O formato de vídeo MPEG-1 / MPEG-2 original. Usado em DVDs antigos e transmissões de TV.

---

## 🧭 Intenções de busca que atendemos

Uma lista não exaustiva das consultas de busca para as quais este site foi projetado para rankear. Indexamos cada uma como conteúdo principal em algum lugar do site (página inicial, páginas de formato, FAQ ou este README).

<details>
<summary><strong>🔹 Termos principais (alto volume)</strong></summary>

conversor de vídeo para áudio · conversor de vídeo para mp3 · vídeo para mp3 · converter vídeo em mp3 · converter vídeo para áudio · extrair áudio de vídeo · conversor mp3 · conversor mp3 online · conversor mp3 grátis · extrator de áudio · extrator de som de vídeo · tirar áudio de vídeo · vídeo para áudio · áudio de vídeo · pegar áudio de vídeo · vídeo para mp3 online · converter vídeo para mp3 grátis · conversor de vídeo para áudio grátis · vídeo para mp3 grátis · conversor de vídeo para áudio online

</details>

<details>
<summary><strong>🔹 Conversões de par de formato (long tail, alta intenção)</strong></summary>

mp4 para mp3 · mp4 para wav · mp4 para m4a · mp4 para aac · mp4 para flac · mp4 para ogg · mp4 para opus · mov para mp3 · mov para wav · mov para m4a · mov para aac · mkv para mp3 · mkv para wav · mkv para flac · mkv para aac · webm para mp3 · webm para ogg · webm para opus · webm para wav · avi para mp3 · avi para wav · flv para mp3 · wmv para mp3 · 3gp para mp3 · mpeg para mp3 · m4v para mp3

</details>

<details>
<summary><strong>🔹 Modificadores de qualidade / bitrate</strong></summary>

conversor mp3 320 kbps · vídeo para mp3 alta qualidade · vídeo para áudio sem perdas · vídeo para flac · extrator de áudio HD · extrator wav qualidade CD · mp3 192 kbps · mp3 128 kbps · melhor qualidade vídeo para mp3 · converter vídeo para áudio de alta qualidade

</details>

<details>
<summary><strong>🔹 Modificadores de privacidade e confiança</strong></summary>

vídeo para mp3 sem upload · conversor de vídeo sem upload · vídeo para mp3 client-side · conversor de vídeo no navegador · vídeo para áudio offline · vídeo para mp3 privado · conversor de vídeo seguro · vídeo para mp3 sem cadastro · extrator de áudio sem registro · vídeo para mp3 sem marca d'água · conversor de vídeo sem anúncios · conversor de vídeo conforme LGPD · vídeo para mp3 sem upload do arquivo · conversor de vídeo para áudio open source

</details>

<details>
<summary><strong>🔹 Modificadores de dispositivo / plataforma</strong></summary>

iphone vídeo para mp3 · android vídeo para mp3 · mac vídeo para mp3 · windows vídeo para mp3 · linux vídeo para mp3 · chromebook vídeo para mp3 · ipad vídeo para áudio · safari vídeo para mp3 · chrome vídeo para mp3 · firefox vídeo para mp3 · edge vídeo para mp3 · ios conversor vídeo para mp3

</details>

<details>
<summary><strong>🔹 Intenção específica de fonte (somente arquivos próprios — não somos um downloader do YouTube)</strong></summary>

gravação do zoom para mp3 · gravação do google meet para mp3 · gravação do teams para mp3 · gravação de tela para mp3 · gravação do obs para mp3 · vídeo do tiktok para mp3 · reel do instagram para mp3 · vídeo do whatsapp para mp3 · gravação de tela do iphone para mp3 · gravação de webinar para áudio · vídeo de entrevista para mp3 · vídeo de podcast para mp3 · gravação de aula para mp3

</details>

<details>
<summary><strong>🔹 Long-tail de "como fazer" (alvos de FAQ / featured snippet)</strong></summary>

como converter mp4 para mp3 · como extrair áudio de vídeo · como converter vídeo para mp3 grátis · como converter vídeo para mp3 sem software · como tirar som de um vídeo · como extrair áudio de um arquivo de vídeo · como converter mov para mp3 no mac · como converter mkv para mp3 · como extrair áudio de webm · como converter avi para mp3 em 2026 · como converter vídeo para mp3 no iphone · como converter vídeo para mp3 no android · como converter vídeo para mp3 offline · como converter vídeo para mp3 320 kbps · como converter vídeo para wav · como extrair áudio de um vídeo sem fazer upload

</details>

<details>
<summary><strong>🔹 Comparação / alternativa</strong></summary>

alternativa ao freeconvert · alternativa ao convertio · alternativa ao cloudconvert · alternativa ao onlineaudioconverter · alternativa ao ytmp3 · alternativa ao zamzar · melhor conversor grátis de vídeo para áudio · melhor conversor de vídeo para mp3 no navegador · melhor conversor de vídeo privado · alternativa open source ao convertio

</details>

<details>
<summary><strong>🔹 Multilíngue</strong></summary>

conversor de vídeo para áudio · conversor de vídeo para mp3 · extrair áudio · extrair som de vídeo · vídeo em mp3 · converter vídeo para música · extrator de som · convertisseur vidéo en audio · convertidor de video a audio · video zu audio konverter · convertitore video audio · 视频转音频 · 視頻轉音頻 · 動画 音声 変換 · 비디오 오디오 변환 · конвертер видео в аудио · محول فيديو إلى صوت · वीडियो को ऑडियो में बदलें · konverter video ke audio · video ses dönüştürücü · chuyển video sang âm thanh

</details>

---

## 🌟 Em resumo

Se você procura um **conversor de vídeo para áudio grátis online** que:

- ✅ Converte **[MP4 para MP3](https://videotoaudioconverter.org/pt/mp4-to-mp3)**, **[MOV para MP3](https://videotoaudioconverter.org/pt/mov-to-mp3)**, **[MKV para MP3](https://videotoaudioconverter.org/pt/mkv-to-mp3)**, **[WebM para MP3](https://videotoaudioconverter.org/pt/webm-to-mp3)**, **[AVI para MP3](https://videotoaudioconverter.org/pt/avi-to-mp3)** e mais 58 pares de conversão
- ✅ Roda **100% no seu navegador** com **zero uploads** e **zero rastreamento**
- ✅ Tem **sem limite de tamanho de arquivo**, **sem cadastro**, **sem anúncios**, **sem marca d'água**
- ✅ Suporta saída em **MP3, WAV, M4A, AAC, FLAC, OGG, Opus** em até **320 kbps** ou **sem perdas**
- ✅ Funciona em **Mac, Windows, Linux, Chromebook, iPhone, iPad, Android**
- ✅ É **open source**, **conforme LGPD**, e funciona **offline** após a primeira carga

— então salve **[videotoaudioconverter.org](https://videotoaudioconverter.org)** nos favoritos e dê uma estrela neste repo. ⭐

---

## 📄 Licença

- **Código-fonte:** [MIT](LICENSE)
- **FFmpeg:** [LGPL 2.1](https://ffmpeg.org/legal.html) (vinculado dinamicamente via WASM)
- **MediaBunny:** MIT
- **shadcn/ui:** MIT

---

<p align="center">
  Feito com ❤️ · Hospedado em <a href="https://pages.cloudflare.com/">Cloudflare Pages</a> · Analytics por <a href="https://plausible.io/">Plausible</a>
</p>

<p align="center">
  <sub>
    Palavras-chave: conversor de vídeo para áudio · conversor de vídeo para mp3 · vídeo para mp3 · mp4 para mp3 · mov para mp3 · mkv para mp3 · webm para mp3 · avi para mp3 · extrair áudio de vídeo · extrator de áudio · grátis online · sem upload · client-side · open source · WebCodecs · FFmpeg WASM
  </sub>
</p>
