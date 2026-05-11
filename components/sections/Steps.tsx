import { FilePlus, Settings2, Download } from "lucide-react";

type Step = { title: string; body: string };

type Props = {
  steps?: Step[];
  heading?: string;
};

const DEFAULT_STEPS: Step[] = [
  {
    title: "Pick your video",
    body: "Drag and drop, or click to choose. Your file stays on your device.",
  },
  {
    title: "Choose output format",
    body: "MP3, WAV, AAC, M4A, FLAC, OGG, or Opus. Set bitrate if you care.",
  },
  {
    title: "Download the audio",
    body: "Extraction runs in your browser. Save the file when done.",
  },
];

const ICONS = [FilePlus, Settings2, Download];

export function Steps({ heading = "Three steps, nothing else", steps = DEFAULT_STEPS }: Props) {
  return (
    <section>
      <div className="max-w-xl">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          How it works
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {heading}
        </h2>
      </div>
      <ol className="mt-8 grid gap-4 md:grid-cols-3">
        {steps.map((step, i) => {
          const Icon = ICONS[i] ?? FilePlus;
          return (
            <li key={step.title} className="bento p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-background">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Step {i + 1}
                </span>
              </div>
              <p className="mt-4 text-base font-semibold tracking-tight text-foreground">
                {step.title}
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">{step.body}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
