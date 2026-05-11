# videotoaudioconverter.org

Free, 100% local video → audio converter. Static Next.js site. All conversion runs in the user's browser via MediaBunny (WebCodecs) for MP4/MOV/MKV/WebM, with FFmpeg-wasm as fallback for older formats.

## Stack

- Next.js 16 (App Router) → static export to `out/`
- Tailwind v4 + shadcn/ui (OKLCH cyan/teal palette)
- next-intl 4 (single locale `en`, `localePrefix: 'never'` — ready to extend)
- MediaBunny (primary engine)
- @ffmpeg/ffmpeg + @ffmpeg/core single-threaded (fallback for AVI/FLV/WMV)
- Plausible Analytics (typed events)
- Cloudflare Pages (static hosting)

## Develop

```bash
pnpm install
pnpm dev
```

`postinstall` copies `node_modules/@ffmpeg/core/dist/umd/*` into `public/ffmpeg-core/`. Run `pnpm sync:ffmpeg-core` manually if you ever need to refresh.

## Build

```bash
pnpm build      # writes static site to out/
```

The build emits `out/` with all routes pre-rendered, plus `out/ffmpeg-core/ffmpeg-core.{js,wasm}` (~31 MB). Verify locally with any static server:

```bash
npx serve out
```

## Deploy to Cloudflare Pages

### One-time setup

1. Cloudflare dashboard → Pages → Create a project → Connect to Git → pick this repo.
2. Build settings:
   - Build command: `pnpm build`
   - Build output directory: `out`
   - Node version: 20+
3. Environment variables (Production):
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` = `videotoaudioconverter.org`
   - `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` = `https://plausible.io/js/script.tagged-events.outbound-links.js`
4. Custom domain: bind `videotoaudioconverter.org` (Cloudflare DNS auto-routes).

### Headers

`public/_headers` is copied to `out/_headers` during build and Cloudflare Pages applies it. Notable rules:

- `/ffmpeg-core/*` gets `Cache-Control: immutable, max-age=1y` so the 31 MB wasm caches forever.
- `/_next/static/*` immutable cache (Next.js content-hashes these).
- HTML pages: standard security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`).

**No COOP/COEP** is needed because we use single-threaded ffmpeg + MediaBunny (WebCodecs). This keeps third-party scripts (Plausible) and fonts working without cross-origin gymnastics.

### Plausible

Create the site in Plausible dashboard with domain `videotoaudioconverter.org`. The script URL in `.env.example` uses the `tagged-events.outbound-links.js` build, which enables the custom events emitted from `lib/analytics.ts`:

- `file_selected` (ext, size_mb, engine_hint)
- `conversion_started` (from_ext, to_format, quality)
- `conversion_completed` (engine, duration_s, …)
- `conversion_failed` (reason)
- `conversion_cancelled`
- `download_clicked` (format)

## Adding a new language later

The site is wired for next-intl from day 1:

1. Add the locale to `i18n/routing.ts` (`locales: ['en', 'zh']`).
2. Create `i18n/messages/zh.json` mirroring `en.json`.
3. Update `localePrefix` to `'as-needed'` or `'always'` and introduce a `[locale]` segment in `app/`, then run `generateStaticParams()` on each route to keep the static export.

The conversion engines, SEO helpers, and analytics layer are locale-agnostic — only `i18n/` and the content data in `lib/content/format-pages.ts` need translation.

## Adding a new format landing page

1. Add an entry to `FORMAT_PAGES` in `lib/content/format-pages.ts` with unique intro/use-cases/FAQs. Avoid copy-pasting between pages — Google penalises doorway pages with duplicated content.
2. Create `app/<slug>/page.tsx` mirroring an existing format page (just changes the `SLUG` constant).
3. The page is automatically picked up by `sitemap.ts`.

## File structure

```
app/
  page.tsx              # homepage
  layout.tsx            # global layout + Plausible + JSON-LD
  {mp4,mov,mkv,webm,avi}-to-mp3/page.tsx
  privacy/page.tsx
  about/page.tsx
  sitemap.ts
  robots.ts
components/
  converter/            # Converter + DropZone (client)
  layout/               # Header, Footer
  sections/             # TrustBar, Steps, FAQ
  seo/JsonLd.tsx
  landing/FormatLandingPage.tsx
  ui/                   # shadcn primitives
lib/
  engines/              # MediaBunny + ffmpeg + dispatcher
  seo/                  # site constants, metadata helper, Schema.org builders
  content/format-pages.ts
  analytics.ts          # typed Plausible event emitter
  formats.ts            # input/output format metadata
  utils.ts              # cn()
i18n/
  routing.ts
  request.ts
  messages/en.json
public/
  ffmpeg-core/          # self-hosted ffmpeg-core.{js,wasm}
  _headers              # Cloudflare Pages cache + security headers
```

## License

Source code: MIT (see LICENSE if present). FFmpeg is LGPL. MediaBunny is MIT.
