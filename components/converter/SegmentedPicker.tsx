"use client";

import { cn } from "@/lib/utils";

export type SegmentedOption<T extends string> = {
  value: T;
  label: string;
  hint?: string;
};

type Props<T extends string> = {
  label: string;
  options: SegmentedOption<T>[];
  value: T;
  onChange: (next: T) => void;
  disabled?: boolean;
  ariaLabel?: string;
  layout?: "wrap" | "equal";
};

export function SegmentedPicker<T extends string>({
  label,
  options,
  value,
  onChange,
  disabled,
  ariaLabel,
  layout = "wrap",
}: Props<T>) {
  return (
    <div>
      <p
        className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
        id={`${label}-label`}
      >
        {label}
      </p>
      <div
        role="radiogroup"
        aria-labelledby={`${label}-label`}
        aria-label={ariaLabel ?? label}
        className={cn(
          "mt-2 flex gap-1.5 rounded-xl border border-border bg-muted/40 p-1",
          layout === "wrap" ? "flex-wrap" : "",
        )}
      >
        {options.map((opt) => {
          const selected = opt.value === value;
          return (
            <button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={selected}
              disabled={disabled}
              onClick={() => onChange(opt.value)}
              className={cn(
                "group relative inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-all",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
                "disabled:cursor-not-allowed disabled:opacity-50",
                layout === "equal" ? "flex-1" : "",
                selected
                  ? "bg-foreground text-background shadow-sm"
                  : "text-foreground/70 hover:bg-background hover:text-foreground",
              )}
            >
              <span>{opt.label}</span>
              {opt.hint && (
                <span
                  className={cn(
                    "text-[11px] font-normal tabular-nums transition-opacity",
                    selected
                      ? "text-background/70"
                      : "text-muted-foreground/80",
                  )}
                >
                  {opt.hint}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
