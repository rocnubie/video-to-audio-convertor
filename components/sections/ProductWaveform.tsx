type Props = {
  bars?: number;
  className?: string;
};

// Deterministic heights so SSR + hydration match.
const HEIGHTS = [
  18, 32, 48, 26, 70, 54, 38, 22, 60, 44, 30, 80, 50, 36, 24, 58, 42, 28, 66, 38,
  20, 52, 74, 40, 30, 62, 46, 24, 56, 34, 78, 44, 28, 50, 38, 22, 64, 48, 32, 58,
];

export function ProductWaveform({ bars = 40, className }: Props) {
  return (
    <div className={`flex h-16 items-center gap-1 ${className ?? ""}`}>
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="wave-bar"
          style={{
            height: `${HEIGHTS[i % HEIGHTS.length]}%`,
            opacity:
              i < bars * 0.62 ? 1 : 0.22 + (HEIGHTS[i % HEIGHTS.length] / 100) * 0.3,
          }}
        />
      ))}
    </div>
  );
}
