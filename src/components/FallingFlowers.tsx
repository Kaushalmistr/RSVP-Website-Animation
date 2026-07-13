import { useMemo, useState, useEffect } from "react";

/* Petal colors — soft pinks, whites, and sage greens to match the theme */
const PETAL_COLORS = [
  "#f5e6e8",  // blush
  "#e8d5d0",  // dusty rose
  "#d4c5b9",  // warm beige
  "#c9d4bf",  // sage green
  "#e0d6cb",  // cream
  "#f0e4e0",  // pale pink
  "#dce5d4",  // light sage
  "#ffffff",  // white
];

/* Leaf colors */
const LEAF_COLORS = [
  "#8a9a7a",  // sage
  "#7b8f6a",  // deep sage
  "#a3b595",  // light sage
  "#95a886",  // mid sage
];

type PetalType = "petal" | "leaf" | "dot";

function PetalSVG({ type, color, size }: { type: PetalType; color: string; size: number }) {
  if (type === "leaf") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="20" cy="20" rx="8" ry="16" fill={color} opacity="0.8" transform="rotate(15 20 20)" />
        <path d="M20 6 L20 34" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
      </svg>
    );
  }
  if (type === "dot") {
    return (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="6" fill={color} opacity="0.6" />
        <circle cx="10" cy="10" r="3" fill="rgba(255,255,255,0.4)" />
      </svg>
    );
  }
  // Default: petal
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="20" cy="18" rx="10" ry="14" fill={color} opacity="0.75" />
      <ellipse cx="20" cy="16" rx="6" ry="8" fill="rgba(255,255,255,0.25)" />
    </svg>
  );
}

export default function FallingFlowers({ count = 18, layer = "back" }: { count?: number; layer?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const flowers = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const size = 16 + Math.random() * 32;
        const types: PetalType[] = ["petal", "petal", "petal", "leaf", "leaf", "dot"];
        const type = types[Math.floor(Math.random() * types.length)];
        const color =
          type === "leaf"
            ? LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)]
            : PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];

        return {
          id: i,
          type,
          color,
          left: Math.random() * 100,
          size,
          duration: 8 + Math.random() * 10,
          delay: -Math.random() * 16,
          drift: (Math.random() - 0.5) * 140 + "px",
          spin:
            (Math.random() > 0.5 ? 1 : -1) * (180 + Math.random() * 360) + "deg",
          op: 0.45 + Math.random() * 0.4,
          blur: layer === "front" ? 0 : Math.random() * 1.8,
        };
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [count, layer, mounted]
  );

  if (!mounted) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 ${
        layer === "front" ? "z-[8]" : "z-[1]"
      }`}
    >
      {flowers.map((f) => (
        <div
          key={f.id}
          className="absolute top-0 select-none will-change-transform"
          style={
            {
              left: `${f.left}vw`,
              filter: `blur(${f.blur}px)`,
              animation: `fall ${f.duration}s linear ${f.delay}s infinite`,
              "--drift": f.drift,
              "--spin": f.spin,
              "--op": f.op,
            } as React.CSSProperties
          }
        >
          <PetalSVG type={f.type} color={f.color} size={f.size} />
        </div>
      ))}
    </div>
  );
}