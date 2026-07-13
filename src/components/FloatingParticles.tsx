import { useMemo, useState, useEffect } from "react";

export default function FloatingParticles({ count = 16 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const dots = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 6 + Math.random() * 18,
        dur: 5 + Math.random() * 6,
        delay: -Math.random() * 8,
        op: 0.2 + Math.random() * 0.3,
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [count, mounted]
  );

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[2]">
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute rounded-full will-change-transform"
          style={
            {
              left: `${d.left}%`,
              top: `${d.top}%`,
              width: d.size,
              height: d.size,
              background:
                "radial-gradient(circle, rgba(255,255,255,.85) 0%, rgba(200,215,190,.4) 45%, rgba(200,215,190,0) 70%)",
              filter: "blur(2px)",
              animation: `floatY ${d.dur}s ease-in-out ${d.delay}s infinite`,
              "--pop": d.op,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}