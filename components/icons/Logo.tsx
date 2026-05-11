type Props = { className?: string };

// Rounded-square mark with white V outline + dot.
// Same artwork as /icon.svg favicon. Auto-inverts in dark mode via Tailwind
// theme tokens (fill-foreground / stroke-background / fill-background).
export function LogoMark({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={className}
    >
      <rect width="64" height="64" rx="14" className="fill-foreground" />
      <path
        d="M14 14 L32 46 L50 14"
        strokeWidth="9"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-background"
      />
      <circle cx="32" cy="54" r="4" className="fill-background" />
    </svg>
  );
}
