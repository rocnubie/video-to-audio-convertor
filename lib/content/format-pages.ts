import type { FAQ } from "@/lib/seo/schemas";
import type { OutputFormat } from "@/lib/engines/types";

export interface FormatUseCase {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
}

export interface FormatPageContent {
  slug: string;
  from: { id: string; label: string; ext: string };
  to: { id: string; label: string; ext: string };
  outputFormat: OutputFormat;
  highlightedInputs: string[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  intro: string[];
  useCases: FormatUseCase[];
  technicalNotes: { heading: string; body: string }[];
  steps: { title: string; body: string }[];
  faqs: FAQ[];
  related: { label: string; href: string }[];
}

const UNSPLASH = (slug: string, w = 900) =>
  `https://images.unsplash.com/photo-${slug}?auto=format&fit=crop&w=${w}&q=80`;

// Image pool — each photo tied to a recurring scenario so reuse across pages
// stays contextually honest, not just "stock photo above text".
const IMG = {
  mic: UNSPLASH("1590602847861-f357a9332bbc"), // studio mic
  podcastLaptop: UNSPLASH("1764664035154-379971f0e936"), // mic + laptop
  laptopNotes: UNSPLASH("1517694712202-14dd9538aa97"), // person taking notes near laptop
  homeLaptop: UNSPLASH("1481277542470-605612bd2d61"), // woman on laptop at home
  headphones: UNSPLASH("1505740420928-5e560c06d30e"), // studio headphones
  mixingConsole: UNSPLASH("1551434678-e076c223a692"), // mixing board
  phoneRecording: UNSPLASH("1611532736597-de2d4265fba3"), // iPhone in hand
  phoneScene: UNSPLASH("1744039571330-e0fac554b554"), // hand recording on phone
  darkKeyboard: UNSPLASH("1487058792275-0ad4aaf24ca7"), // code/keyboard low light
  desk: UNSPLASH("1488972685288-c3fd157d7c7a"), // tidy workspace
};

export const FORMAT_PAGES: FormatPageContent[] = [
  {
    slug: "mp4-to-mp3",
    from: { id: "mp4", label: "MP4", ext: ".mp4" },
    to: { id: "mp3", label: "MP3", ext: ".mp3" },
    outputFormat: "mp3",
    highlightedInputs: ["mp4", "m4v"],
    metaTitle: "MP4 to MP3 Converter — Free, In Your Browser, No Upload",
    metaDescription:
      "Convert MP4 to MP3 free in your browser. No upload, no signup, no watermark, no file size limit. Pick a bitrate, click extract, download. 100% local with WebCodecs.",
    h1: "MP4 to MP3 Converter",
    subtitle:
      "Pull the audio out of any MP4 and save it as MP3. Runs entirely in your browser — your video is never uploaded.",
    intro: [
      "MP4 is a container, not a codec. Most of the MP4 files people want to convert are really just \"audio with a video track attached\" — podcast recordings exported from Riverside or Descript, lecture captures from Zoom or Google Meet, music videos, screen recordings of YouTube playlists, family videos where you want the voices but not the picture. The MP3 you walk away with is what was always inside the MP4; we just throw away the video stream.",
      "Because this site uses MediaBunny on top of the browser's native WebCodecs API, MP4 conversion is fast — a 1-hour 4K MP4 takes well under a minute on a modern laptop, and the file is read as a stream so a 5 GB video doesn't have to fit in RAM all at once. There is no upload step, no queue, no daily limit, and no watermark. The audio you get is the same bitrate as the source unless you pick re-encoding (the default 192 kbps is a sensible mid-point; switch to 320 kbps if the source is high quality and you care).",
    ],
    useCases: [
      {
        title: "Podcasts and interviews",
        body: "Riverside, Zencastr, Descript, and Zoom all export video MP4. If you only need the audio for a podcast feed, this strips it without re-encoding the visual.",
        image: IMG.mic,
        imageAlt: "Studio microphone and gear on a wooden desk",
      },
      {
        title: "Lectures and webinars",
        body: "Convert recorded Zoom, Teams, Webex, or Google Meet sessions to MP3 so you can listen on commutes. The voice track survives compression cleanly.",
        image: IMG.laptopNotes,
        imageAlt: "Person taking notes next to a laptop showing a video",
      },
      {
        title: "Music videos",
        body: "Got a music video you legitimately own as MP4 and want the song on your phone? MP3 at 320 kbps is the right call here.",
        image: IMG.mixingConsole,
        imageAlt: "Audio mixing console with channel strips",
      },
      {
        title: "Screen recordings",
        body: "OBS, QuickTime Player, ShareX, and Loom all save MP4 with audio. Pull just the narration when you want a voice-only artifact.",
        image: IMG.podcastLaptop,
        imageAlt: "Laptop next to a podcast microphone setup",
      },
    ],
    technicalNotes: [
      {
        heading: "What's inside an MP4",
        body: "MP4 (ISO/IEC 14496-14) is an ISO base media container. The audio track is usually AAC, sometimes MP3 or AC-3. The video is typically H.264 (AVC) or H.265 (HEVC). To make an MP3 we demux the AAC audio and re-encode it with LAME (libmp3lame) at your chosen bitrate.",
      },
      {
        heading: "Why MP3 instead of M4A?",
        body: "MP3 plays absolutely everywhere — every car, every Bluetooth speaker, every Windows machine since 1998. M4A (AAC in an MP4 container) sounds better at the same bitrate but isn't always handled by old hardware. If you have any doubt about the playback device, pick MP3.",
      },
    ],
    steps: [
      {
        title: "Drop your MP4",
        body: "Drag the .mp4 file onto the page. Nothing gets uploaded — the file path stays in your browser tab.",
      },
      {
        title: "Set bitrate (optional)",
        body: "192 kbps is the default and the right choice for spoken-word content. Pick 320 kbps for music; 128 kbps if size matters more than fidelity.",
      },
      {
        title: "Click Extract audio",
        body: "Progress bar fills in real time. When it hits 100%, click Download and the .mp3 saves to your computer.",
      },
    ],
    faqs: [
      {
        q: "Does this work for very long MP4 files, like 3-hour recordings?",
        a: "Yes. MP4 uses the fast streaming engine, which doesn't load the whole file into memory at once. Three-hour recordings have been tested and complete in a few minutes on a typical laptop.",
      },
      {
        q: "Will the MP3 sound worse than the audio inside the MP4?",
        a: "MP3 is a lossy format, and any re-encode loses a small amount of quality compared to the source AAC. For voice content the difference is inaudible. For music, pick the 320 kbps preset to minimize the loss.",
      },
      {
        q: "Can I keep the original audio quality with no re-encoding?",
        a: "If you want bit-perfect, pick WAV or FLAC instead of MP3. WAV is uncompressed; FLAC is compressed but lossless. The downside is bigger files.",
      },
      {
        q: "What if my MP4 actually contains H.265/HEVC or an unusual audio codec?",
        a: "The fast engine handles H.264 and H.265 with AAC, MP3, AC-3, or Opus audio inside MP4. On the rare file with something exotic, we automatically fall back to FFmpeg compiled to WebAssembly, which understands almost everything.",
      },
      {
        q: "Does this convert MP4 from iPhone screen recordings too?",
        a: "Yes — iOS screen recordings save as MP4 with AAC audio, which is exactly what the fast engine is best at. Many iPhone .mov files also work the same way; see the MOV to MP3 page if you have those instead.",
      },
    ],
    related: [
      { label: "MOV to MP3", href: "/mov-to-mp3" },
      { label: "MKV to MP3", href: "/mkv-to-mp3" },
      { label: "WebM to MP3", href: "/webm-to-mp3" },
    ],
  },

  {
    slug: "mov-to-mp3",
    from: { id: "mov", label: "MOV", ext: ".mov" },
    to: { id: "mp3", label: "MP3", ext: ".mp3" },
    outputFormat: "mp3",
    highlightedInputs: ["mov", "qt"],
    metaTitle: "MOV to MP3 Converter — Free, In Your Browser, iPhone Friendly",
    metaDescription:
      "Convert MOV (QuickTime / iPhone) videos to MP3 free in your browser. No upload, no signup. AirDrop a .mov from your iPhone, extract the audio in seconds, download as MP3.",
    h1: "MOV to MP3 Converter",
    subtitle:
      "QuickTime and iPhone videos to MP3 — runs locally, files stay on your device.",
    intro: [
      "MOV is Apple's QuickTime container, and most of the .mov files in the wild come from one of three places: iPhones, screen recordings on macOS, or video edits exported from Final Cut Pro and iMovie. Inside a .mov you'll almost always find AAC audio paired with H.264 or HEVC video — the same building blocks as MP4, just wrapped in Apple's older container format. Converting MOV to MP3 means demuxing that AAC track and re-encoding it as MP3 so it plays back on devices outside the Apple ecosystem.",
      "AirDrop a video from your iPhone, drop it onto this page, and the conversion runs entirely in your browser. Nothing uploads, no Apple ID required, no iCloud sync. The same goes for QuickTime Player screen recordings — they save as MOV with AAC audio, and the audio comes out cleanly. iPhones and iPads can also write HEVC video in MOV; the fast engine handles that, and falls back to FFmpeg-wasm if your browser somehow can't decode it.",
    ],
    useCases: [
      {
        title: "iPhone videos to MP3 ringtones",
        body: "Record a vocal snippet on your iPhone, AirDrop the .mov to your Mac, convert to MP3 and trim — instant ringtone material without a paid app.",
        image: IMG.phoneRecording,
        imageAlt: "Hand holding an iPhone, recording video",
      },
      {
        title: "QuickTime screen recordings",
        body: "Built-in macOS screen recording saves as .mov. If you only need the narration (tutorial voiceovers, gameplay commentary), strip the video out.",
        image: IMG.homeLaptop,
        imageAlt: "Woman working on a laptop in a bright home office",
      },
      {
        title: "Final Cut / iMovie exports",
        body: "Edits exported as MOV ProRes or H.264 — pull a clean audio mix for podcast distribution.",
        image: IMG.mixingConsole,
        imageAlt: "Close-up of an audio mixing console",
      },
      {
        title: "Voice memo and field recordings",
        body: "Old Voice Memos saved as MOV (pre-iOS 12) or video voice memos can be converted into standard MP3 for easier sharing.",
        image: IMG.phoneScene,
        imageAlt: "Hand recording a scene on a smartphone",
      },
    ],
    technicalNotes: [
      {
        heading: "MOV vs MP4 — what's actually different?",
        body: "MOV is the older Apple QuickTime container; MP4 (ISO/IEC 14496-14) was derived from it. They share most of the structure, which is why the same codecs (H.264, HEVC, AAC) appear in both. The fast engine treats QuickTime as a first-class input — there is no slow path for normal .mov files.",
      },
      {
        heading: "HEVC and iPhone Pro footage",
        body: "iPhones since the iPhone X often record in HEVC (H.265) inside a MOV container. Modern browsers (Safari 17+, Chrome 107+) can decode HEVC via WebCodecs. If yours can't, the FFmpeg-wasm fallback takes over automatically.",
      },
    ],
    steps: [
      {
        title: "AirDrop or drag your .mov",
        body: "AirDrop from iPhone, or drag a file from Finder. The page processes everything locally.",
      },
      {
        title: "Pick MP3 + bitrate",
        body: "320 kbps for music or vocal performances; 192 kbps for voice memos and interviews.",
      },
      {
        title: "Download the MP3",
        body: "When the bar fills, click download. The .mp3 file lands in your Downloads folder.",
      },
    ],
    faqs: [
      {
        q: "Do I need a Mac for this to work?",
        a: "No. The page runs in any modern browser — Windows, Linux, ChromeOS, even on iPad. MOV is a container, not an Apple-only file format.",
      },
      {
        q: "I AirDropped from iPhone and got a HEIC-like file, not MOV. Why?",
        a: "Photos AirDrop as HEIC (image) by default; videos AirDrop as MOV or MP4. If you received an image file by accident, re-share the video from the Photos app's share sheet to get a video container.",
      },
      {
        q: "My iPhone video is 4K HEVC. Will it work?",
        a: "Yes. The fast engine decodes HEVC on supported browsers, and FFmpeg-wasm covers the rest. The audio track is AAC either way, so the MP3 output is unaffected by which video codec was inside.",
      },
      {
        q: "What about voice memos? Aren't those .m4a, not .mov?",
        a: "Modern voice memos are saved as .m4a. Drop them onto this page anyway — M4A is supported, and the MP3 conversion works the same way.",
      },
      {
        q: "Will this strip metadata like GPS or recording date?",
        a: "MP3 doesn't carry the location and timestamp metadata that MOV does, so that information doesn't transfer. Title and artist ID3 tags are not set automatically — you can edit them in any tag editor after the fact.",
      },
    ],
    related: [
      { label: "MP4 to MP3", href: "/mp4-to-mp3" },
      { label: "MKV to MP3", href: "/mkv-to-mp3" },
      { label: "WebM to MP3", href: "/webm-to-mp3" },
    ],
  },

  {
    slug: "mkv-to-mp3",
    from: { id: "mkv", label: "MKV", ext: ".mkv" },
    to: { id: "mp3", label: "MP3", ext: ".mp3" },
    outputFormat: "mp3",
    highlightedInputs: ["mkv"],
    metaTitle: "MKV to MP3 Converter — Free, Browser-Based, Multi-Track Aware",
    metaDescription:
      "Convert MKV (Matroska) to MP3 in your browser. Free, no upload, no install. Handles multi-track audio, large HD files, and the exotic codecs MKV is famous for.",
    h1: "MKV to MP3 Converter",
    subtitle:
      "Extract MP3 from any Matroska file — anime, HD rips, multi-language audio. All processed locally.",
    intro: [
      "MKV (Matroska) is the container of choice when somebody wants flexibility — multiple audio tracks, multiple subtitle tracks, chapters, exotic codecs, all in one file. It's everywhere in fansubbed anime, Blu-ray rips, foreign-language films with both original and dubbed audio, and live music recordings. Where MP4 wants you to commit to one of a few well-supported codec combinations, MKV will hold almost anything: FLAC, Opus, Vorbis, AC-3, DTS, even uncompressed PCM — alongside H.264, HEVC, VP9, AV1, you name it.",
      "Converting MKV to MP3 means picking the right audio track (we use the primary one by default) and re-encoding it as MP3. The fast engine handles this directly for most MKV files; on a file with an exotic codec like DTS or TrueHD, the FFmpeg-wasm fallback kicks in, which understands essentially every audio codec FFmpeg supports. Large files are fine — MKVs are often 5-20 GB, and the streaming reader doesn't load them into RAM all at once.",
    ],
    useCases: [
      {
        title: "Anime soundtracks",
        body: "Fansubbed releases ship as MKV with FLAC or AAC audio. Pull the OST out of a particular episode without a video editor.",
        image: IMG.headphones,
        imageAlt: "Black studio headphones",
      },
      {
        title: "Movie dialogue and dubs",
        body: "MKV often carries multiple language tracks. The primary track is used by default — for now, the alternate-track UI is on the roadmap.",
        image: IMG.mixingConsole,
        imageAlt: "Audio mixing console with channel strips",
      },
      {
        title: "Concert and live recordings",
        body: "High-fidelity live recordings are often distributed as MKV with FLAC audio. Convert to MP3 for the phone, keep the FLAC for the archive.",
        image: IMG.mic,
        imageAlt: "Studio microphone in a recording setup",
      },
      {
        title: "Lecture and course archives",
        body: "Many MOOC sites and YouTube downloaders save courseware as MKV. Get audio-only versions for listening on a commute.",
        image: IMG.laptopNotes,
        imageAlt: "Person taking notes next to a laptop",
      },
    ],
    technicalNotes: [
      {
        heading: "Why MKV holds so many codecs",
        body: "Matroska is a container designed to be codec-agnostic. The format describes how to multiplex any combination of audio, video, and subtitle streams; it doesn't dictate what those streams contain. That's why a single .mkv might have AV1 video with Opus audio next to a FLAC track and three subtitle tracks.",
      },
      {
        heading: "Multi-track audio handling",
        body: "When an MKV has multiple audio tracks (e.g. English, Japanese, commentary), the conversion uses the primary track — the one your media player picks by default. A track-picker UI is planned; in the meantime, if you need a specific non-default track, a desktop tool like ffmpeg or MKVToolNix is currently the easiest workaround.",
      },
    ],
    steps: [
      {
        title: "Drop the .mkv",
        body: "Drag the file in. Even 10 GB releases work — the file isn't loaded into memory all at once.",
      },
      {
        title: "Pick output format and bitrate",
        body: "MP3 at 320 kbps is the music-quality default. If the source audio is FLAC, consider exporting to FLAC instead to preserve lossless quality.",
      },
      {
        title: "Wait, then download",
        body: "Conversion is faster than you might expect — the bottleneck is your CPU's audio encoder, not your network.",
      },
    ],
    faqs: [
      {
        q: "Can I pick a specific audio track, like the Japanese one instead of English?",
        a: "Not yet via the web UI — currently the primary (default) track is used. For non-default tracks, ffmpeg on a desktop is the workaround. Track selection is on the public roadmap.",
      },
      {
        q: "My MKV has DTS or TrueHD audio. Will that work?",
        a: "Yes, via the FFmpeg-wasm fallback. The fast engine doesn't decode DTS/TrueHD directly, so loading time will be a few seconds longer the first time. After that the engine is cached.",
      },
      {
        q: "The file is 15 GB. Is that a problem?",
        a: "Not for MKV. The streaming reader handles large files efficiently — what matters is how long your CPU takes to re-encode, not how much RAM the file has. Plan on a couple of minutes per hour of audio.",
      },
      {
        q: "Will subtitles or chapters come out?",
        a: "No. The output is audio-only. Subtitles are a separate stream and don't make sense in an audio file; chapter markers aren't transferred to MP3.",
      },
      {
        q: "Why is MKV more common in pirate releases than legal downloads?",
        a: "MKV is open source and royalty-free, which is great for community tooling but a non-starter for big-platform distribution that prefers tightly-controlled MP4 variants. The format itself is perfectly legitimate — Matroska is used by plenty of legal video archives too.",
      },
    ],
    related: [
      { label: "MP4 to MP3", href: "/mp4-to-mp3" },
      { label: "WebM to MP3", href: "/webm-to-mp3" },
      { label: "AVI to MP3", href: "/avi-to-mp3" },
    ],
  },

  {
    slug: "webm-to-mp3",
    from: { id: "webm", label: "WebM", ext: ".webm" },
    to: { id: "mp3", label: "MP3", ext: ".mp3" },
    outputFormat: "mp3",
    highlightedInputs: ["webm"],
    metaTitle: "WebM to MP3 Converter — Free, Local, No Server Upload",
    metaDescription:
      "Convert WebM video to MP3 instantly in your browser. Perfect for downloaded clips, screen recordings, and web-meeting exports. No upload, no signup, no limit.",
    h1: "WebM to MP3 Converter",
    subtitle:
      "WebM is what the open web records — convert it to MP3 in seconds, without ever uploading.",
    intro: [
      "WebM is the web's native video container, and most of the WebMs you'll have to deal with come from one of three places: video clips downloaded from sites that serve WebM natively, browser-based screen recorders (Loom, Vidyard, the macOS Chrome screen-recording extension), and Google Meet or Microsoft Teams when they save a recording. Inside a WebM you'll find VP8 or VP9 video — sometimes AV1 — paired with Vorbis or Opus audio. The video codec doesn't matter for our purposes; the audio is what we extract.",
      "Browsers decode WebM natively, which means the fast engine has a particularly easy time with it. A 30-minute web meeting recording converts in well under a minute. The audio inside is usually Opus, which we re-encode to MP3 so the result plays in legacy hardware that doesn't speak Opus directly. You can also pick OGG output to keep things in the open-format world, or Opus output if you specifically want the small, modern-codec result.",
    ],
    useCases: [
      {
        title: "Google Meet and Teams exports",
        body: "Meet recordings often arrive as WebM with Opus audio. Pull just the conversation track to share with a teammate who couldn't attend.",
        image: IMG.homeLaptop,
        imageAlt: "Woman working on a laptop at home",
      },
      {
        title: "Loom and Vidyard recordings",
        body: "Browser-based recorders save WebM. Get an audio-only version of a product walkthrough for transcription or commentary.",
        image: IMG.laptopNotes,
        imageAlt: "Person taking notes next to a laptop",
      },
      {
        title: "Downloaded clips",
        body: "Many websites serve VP9 in WebM. If you have a WebM clip you own the rights to, this converts to a sharable MP3.",
        image: IMG.darkKeyboard,
        imageAlt: "Code on a screen in a low-light workspace",
      },
      {
        title: "Open-format pipelines",
        body: "Some open-source video tooling prefers WebM. Convert to MP3 for compatibility, or OGG/Opus to stay in the open-format world.",
        image: IMG.desk,
        imageAlt: "Tidy workspace with laptop and notebooks",
      },
    ],
    technicalNotes: [
      {
        heading: "Why WebM exists",
        body: "WebM was built around royalty-free codecs (VP8/VP9/AV1 video, Vorbis/Opus audio) so it could be used freely by browser vendors without paying patent fees. It's a stripped-down subset of Matroska, designed specifically for streaming on the open web.",
      },
      {
        heading: "Opus is the audio codec you usually find inside",
        body: "Opus is unusually good at low bitrates — it can sound transparent at 96 kbps where MP3 needs 192 kbps to match. When you go WebM → MP3 you're trading away that efficiency for compatibility. If your destination supports Opus directly, pick Opus output instead.",
      },
    ],
    steps: [
      {
        title: "Drop the .webm",
        body: "Drag and drop the file onto the page. Local processing only.",
      },
      {
        title: "Choose MP3 (or Opus if you can use it)",
        body: "MP3 for ubiquitous playback; Opus to keep the file small with the original codec efficiency.",
      },
      {
        title: "Download the audio",
        body: "Conversion completes in a fraction of real-time on a modern machine.",
      },
    ],
    faqs: [
      {
        q: "Can I convert downloaded YouTube videos with this?",
        a: "Technically yes — if you have a WebM file you obtained legally (e.g. via YouTube's own download for offline viewing, or from your own uploads via YouTube Studio), this site will convert it. We don't download from YouTube; you'd need a separate tool for that step.",
      },
      {
        q: "Why does my Meet recording sound so good even at low MP3 bitrates?",
        a: "The source is usually Opus, which captures speech with very high efficiency. Even after the lossy MP3 re-encode, voice quality holds up well at 128 kbps — the underlying audio was clean to begin with.",
      },
      {
        q: "What's the difference between WebM with Opus and OGG with Opus?",
        a: "Both are open containers carrying Opus audio. WebM is geared toward video + audio; OGG is the historical audio-and-everything-else container from Xiph. For audio-only output we use OGG; that's what the OGG export option produces.",
      },
      {
        q: "Will VP9 or AV1 video give the converter trouble?",
        a: "No. We discard the video track and only process the audio. Whether the video was VP8, VP9, AV1 or something else makes no difference to the audio output.",
      },
      {
        q: "My WebM file came from screen recording with no audio. What will happen?",
        a: "The conversion will fail with a clear error saying no audio track was found. Pick a video file that actually has sound, or use a tool that synthesizes silent audio if you need a silent MP3 for some reason.",
      },
    ],
    related: [
      { label: "MP4 to MP3", href: "/mp4-to-mp3" },
      { label: "MOV to MP3", href: "/mov-to-mp3" },
      { label: "MKV to MP3", href: "/mkv-to-mp3" },
    ],
  },

  {
    slug: "avi-to-mp3",
    from: { id: "avi", label: "AVI", ext: ".avi" },
    to: { id: "mp3", label: "MP3", ext: ".mp3" },
    outputFormat: "mp3",
    highlightedInputs: ["avi"],
    metaTitle: "AVI to MP3 Converter — Free, Browser-Based, Legacy Codecs",
    metaDescription:
      "Convert AVI to MP3 in your browser. Free, no upload. Handles ancient AVI files with DivX, XviD, MP3, AC-3, or PCM audio — built on FFmpeg compiled to WebAssembly.",
    h1: "AVI to MP3 Converter",
    subtitle:
      "Pull MP3 audio out of legacy AVI videos — old camcorder footage, DivX/XviD rips, archive files. All in your browser.",
    intro: [
      "AVI (Audio Video Interleave) is Microsoft's container from 1992, and the .avi files that survive today are usually decades old: home videos from early digital camcorders, DivX or XviD movie rips from the file-sharing era, screen captures from a long-defunct Camtasia version, or scientific recordings from lab cameras with proprietary codecs. AVI predates streaming; it was designed for spinning hard disks and CDs, and its structure makes random-access into long files awkward. None of that matters for converting to MP3 — we read the audio track sequentially and re-encode it.",
      "Because AVI is well outside the WebCodecs sweet spot, this conversion runs on the FFmpeg-wasm fallback engine. That means a one-time ~30 MB download the first time you convert (cached after that), then conversion proceeds. The file is processed in memory, which the browser caps around 2 GB — so a single multi-gigabyte AVI rip may need to be cut on the desktop first. Most surviving AVIs are well under that limit.",
    ],
    useCases: [
      {
        title: "Old camcorder footage",
        body: "Mini DV and early digital camcorders often dumped to AVI with MP3 or PCM audio. Extract the audio for memorial montages or family archives.",
        image: IMG.darkKeyboard,
        imageAlt: "Vintage workspace atmosphere",
      },
      {
        title: "DivX / XviD movie rips",
        body: "If you legally ripped DVDs in the 2000s to AVI, the audio is usually MP3 or AC-3. Pulling an MP3 out for car listening is straightforward.",
        image: IMG.mixingConsole,
        imageAlt: "Audio mixing console with channel strips",
      },
      {
        title: "Lab and scientific recordings",
        body: "Microscope cameras and instrumentation software often save AVI with PCM or uncompressed audio. Convert to MP3 for easier review and sharing.",
        image: IMG.desk,
        imageAlt: "Workspace with notebooks and hardware",
      },
      {
        title: "Archive digitization",
        body: "Older tutorial CDs and educational discs used AVI extensively. Pulling MP3 audio for long-form listening is a common digitization step.",
        image: IMG.laptopNotes,
        imageAlt: "Person reviewing notes next to a laptop",
      },
    ],
    technicalNotes: [
      {
        heading: "Why AVI needs the compatibility engine",
        body: "AVI's container quirks (chunk-based, no global index in many older files) and the long tail of obscure audio codecs (DivX Audio, GoToMeeting G2M, Xperts variants) mean the WebCodecs fast path doesn't handle it. FFmpeg-wasm carries decoders for essentially everything AVI has ever wrapped, which is why we route AVI through it.",
      },
      {
        heading: "The 2 GB ceiling",
        body: "FFmpeg-wasm allocates linear WebAssembly memory inside a single browser tab, capped at roughly 2 GB by the 32-bit memory model that current FFmpeg builds use. Most archival AVIs are well under that. For genuine multi-gigabyte AVIs, use a desktop tool to split the file first (or convert directly with command-line FFmpeg).",
      },
    ],
    steps: [
      {
        title: "Drop your .avi",
        body: "Drag the file in. The first time, the FFmpeg engine loads (~30 MB, cached after).",
      },
      {
        title: "Confirm MP3 + bitrate",
        body: "For old camcorder audio, 192 kbps is usually plenty — these sources weren't high-fidelity to start with.",
      },
      {
        title: "Wait and download",
        body: "Conversion is slower than WebCodecs-based formats but still typically minutes, not hours.",
      },
    ],
    faqs: [
      {
        q: "Why is the first AVI conversion slower than the same MP4?",
        a: "AVI uses the FFmpeg-wasm fallback, which has to load ~30 MB of WebAssembly the first time. After that the engine is cached and subsequent conversions start instantly. MP4/MOV/MKV/WebM use a lighter native-WebCodecs engine that's already shipped.",
      },
      {
        q: "Can I convert a 3 GB AVI rip?",
        a: "The browser's WebAssembly memory ceiling is around 2 GB. For files over that, split the AVI on the desktop (with VirtualDub or command-line FFmpeg) and convert pieces. We're investigating Memory64 for a future build that would lift this limit.",
      },
      {
        q: "My AVI has DivX or XviD audio — wait, audio? Those are video codecs.",
        a: "Correct — DivX and XviD are video codecs, paired inside AVI with separate audio codecs, usually MP3 or AC-3. Don't worry about the video; we discard it and process only the audio track.",
      },
      {
        q: "Does the AVI need to be on the same drive as the browser?",
        a: "Yes — for the drag-and-drop step. The browser reads the file from disk into a memory buffer; that file needs to be reachable from the file picker.",
      },
      {
        q: "What if the audio in the AVI is some obscure codec I've never heard of?",
        a: "FFmpeg-wasm includes decoders for essentially every audio codec ever shipped in an AVI. If you hit a file that genuinely won't decode, please open a GitHub issue with the codec name from a tool like MediaInfo — we can usually expand support.",
      },
    ],
    related: [
      { label: "MP4 to MP3", href: "/mp4-to-mp3" },
      { label: "MKV to MP3", href: "/mkv-to-mp3" },
      { label: "WebM to MP3", href: "/webm-to-mp3" },
    ],
  },
];

export function getFormatPage(slug: string): FormatPageContent | undefined {
  return FORMAT_PAGES.find((p) => p.slug === slug);
}
