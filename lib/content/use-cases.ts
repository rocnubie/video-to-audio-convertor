export interface UseCase {
  title: string;
  body: string;
  imageUrl: string;
  imageAlt: string;
  formatHint: string;
  href: string;
}

const UNSPLASH = (slug: string) =>
  `https://images.unsplash.com/photo-${slug}?auto=format&fit=crop&w=900&q=80`;

export const USE_CASES: UseCase[] = [
  {
    title: "Podcast and interview recordings",
    body: "Riverside, Zencastr, Descript, and Zoom all export video MP4 even when you only need the audio. Strip the video track, ship the MP3 to your feed.",
    imageUrl: UNSPLASH("1590602847861-f357a9332bbc"),
    imageAlt: "Studio microphone and audio gear ready for recording",
    formatHint: "Usually MP4 or MOV",
    href: "/mp4-to-mp3",
  },
  {
    title: "Online classes and lecture archives",
    body: "Recorded Zoom, Teams, Webex, and Google Meet sessions become long voice-only MP3s perfect for commutes. Webinars and MOOC downloads handled the same way.",
    imageUrl: UNSPLASH("1517694712202-14dd9538aa97"),
    imageAlt: "Student taking notes next to a laptop showing a recorded class",
    formatHint: "MP4 / WebM / MKV",
    href: "/webm-to-mp3",
  },
  {
    title: "iPhone and Android screen recordings",
    body: "Capture a tutorial, voice memo, or product walkthrough on your phone, AirDrop or share it here, and download an audio-only version you can paste into a podcast feed.",
    imageUrl: UNSPLASH("1611532736597-de2d4265fba3"),
    imageAlt: "Hand recording a video on an iPhone",
    formatHint: "MOV (iOS) · MP4 (Android)",
    href: "/mov-to-mp3",
  },
  {
    title: "Movie clips, music videos, archive footage",
    body: "Old camcorder AVIs, Blu-ray rip MKVs, music videos from your own collection — extract the soundtrack without dragging the whole file into a video editor.",
    imageUrl: UNSPLASH("1551434678-e076c223a692"),
    imageAlt: "Audio mixing console with channel strips",
    formatHint: "MKV · AVI · WMV",
    href: "/mkv-to-mp3",
  },
];
