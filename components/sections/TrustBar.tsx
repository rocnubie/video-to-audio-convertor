import { Lock, Zap, HardDrive } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";

const ITEMS = [
  { icon: Lock, title: "100% local", body: "Files never uploaded." },
  { icon: Zap, title: "Seconds, not minutes", body: "WebCodecs streaming engine." },
  { icon: HardDrive, title: "No size cap", body: "Multi-GB inputs supported." },
  { icon: GithubIcon, title: "Open source", body: "Every line on GitHub." },
];

export function TrustBar() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {ITEMS.map(({ icon: Icon, title, body }) => (
        <div
          key={title}
          className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card px-4 py-3"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
            <Icon className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">{title}</p>
            <p className="text-xs text-muted-foreground">{body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
