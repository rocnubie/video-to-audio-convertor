import { Check, X } from "lucide-react";

type Row = {
  feature: string;
  here: { value: string; positive?: boolean };
  cloud: { value: string; positive?: boolean };
};

const ROWS: Row[] = [
  {
    feature: "Files leave your device",
    here: { value: "Never", positive: true },
    cloud: { value: "Uploaded to a server", positive: false },
  },
  {
    feature: "File size limit",
    here: { value: "No cap (fast engine)", positive: true },
    cloud: { value: "1–4 GB per file on free tier", positive: false },
  },
  {
    feature: "Daily conversions",
    here: { value: "Unlimited", positive: true },
    cloud: { value: "10–25 / day on free tier", positive: false },
  },
  {
    feature: "Account / sign-up",
    here: { value: "Not required", positive: true },
    cloud: { value: "Required after a few uses", positive: false },
  },
  {
    feature: "Ads & upsell prompts",
    here: { value: "None", positive: true },
    cloud: { value: "Throughout the funnel", positive: false },
  },
  {
    feature: "Open source",
    here: { value: "MIT, public repo", positive: true },
    cloud: { value: "Proprietary", positive: false },
  },
];

export function Comparison() {
  return (
    <section>
      <div className="max-w-xl">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          The honest comparison
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Why a browser-only converter beats the upload-and-wait model.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          The default online converters — CloudConvert, Zamzar, 123apps,
          Convertio — all do the same thing: take your file, hold it on their
          servers, charge you (in time or money) for the privilege. Here is
          what changes when the work moves into your browser.
        </p>
      </div>

      <div className="mt-8 bento overflow-hidden p-0">
        <div className="grid grid-cols-[1.4fr_1fr_1fr] divide-x divide-border/60 bg-muted/40 px-2 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          <div className="px-4">Feature</div>
          <div className="px-4 text-foreground">VideoToAudioConverter.org</div>
          <div className="px-4">Typical upload converter</div>
        </div>
        {ROWS.map((row, i) => (
          <div
            key={row.feature}
            className={`grid grid-cols-[1.4fr_1fr_1fr] divide-x divide-border/60 ${
              i % 2 === 1 ? "bg-muted/20" : ""
            }`}
          >
            <div className="px-4 py-4 text-sm font-medium text-foreground">
              {row.feature}
            </div>
            <div className="flex items-center gap-2 px-4 py-4 text-sm">
              {row.here.positive ? (
                <Check className="h-4 w-4 shrink-0 text-success" />
              ) : (
                <X className="h-4 w-4 shrink-0 text-destructive" />
              )}
              <span className="text-foreground">{row.here.value}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-4 text-sm">
              {row.cloud.positive ? (
                <Check className="h-4 w-4 shrink-0 text-success" />
              ) : (
                <X className="h-4 w-4 shrink-0 text-destructive" />
              )}
              <span className="text-muted-foreground">{row.cloud.value}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
