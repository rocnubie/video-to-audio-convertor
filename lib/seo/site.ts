export const SITE = {
  name: "VideoToAudioConverter",
  domain: "videotoaudioconverter.org",
  url: "https://videotoaudioconverter.org",
  description:
    "Free video to audio converter. Extract MP3, WAV, AAC, M4A, FLAC, OGG from MP4, MOV, MKV, WebM, AVI directly in your browser — no upload, no signup, no file size limit.",
  ogImage: "/og.png",
  twitterHandle: "",
  githubUrl: "https://github.com/rocnubie/video-to-audio-convertor",
};

export const NAV = [
  { label: "MP4 to MP3", href: "/mp4-to-mp3" },
  { label: "MOV to MP3", href: "/mov-to-mp3" },
  { label: "MKV to MP3", href: "/mkv-to-mp3" },
  { label: "WebM to MP3", href: "/webm-to-mp3" },
  { label: "AVI to MP3", href: "/avi-to-mp3" },
];

export const FOOTER_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "About", href: "/about" },
];

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}
