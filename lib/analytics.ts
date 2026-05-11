type PlausibleProps = Record<string, string | number | boolean | undefined>;

type EventMap = {
  file_selected: {
    ext: string;
    size_mb: number;
    engine_hint: "mediabunny" | "ffmpeg";
  };
  conversion_started: {
    from_ext: string;
    to_format: string;
    quality: string;
  };
  conversion_completed: {
    from_ext: string;
    to_format: string;
    engine: "mediabunny" | "ffmpeg";
    duration_s: number;
  };
  conversion_failed: {
    from_ext: string;
    to_format: string;
    reason: string;
  };
  conversion_cancelled: {
    from_ext: string;
    to_format: string;
  };
  download_clicked: {
    format: string;
  };
};

type EventName = keyof EventMap;

declare global {
  interface Window {
    plausible?: (event: string, opts?: { props?: PlausibleProps }) => void;
  }
}

export function track<E extends EventName>(name: E, props: EventMap[E]): void {
  if (typeof window === "undefined") return;
  try {
    window.plausible?.(name, { props: props as PlausibleProps });
  } catch {
    /* analytics failures must never break UX */
  }
}
