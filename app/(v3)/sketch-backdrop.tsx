"use client";

import { Sketch } from "@/data/sketches";
import { useEffect, useState } from "react";

type Props = { sketches: Sketch[]; interval?: number; fade?: number };

export function SketchBackdrop({
  sketches,
  interval = 6000,
  fade = 2000,
}: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (sketches.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % sketches.length),
      interval,
    );
    return () => clearInterval(id);
  }, [sketches.length, interval]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {sketches.map((s, i) => (
        <div
          key={s.src}
          data-active={i === active}
          className="absolute inset-0 mask-cover mask-no-repeat bg-fg opacity-0 transition-opacity ease-in-out data-[active=true]:opacity-(--sketch-opacity)"
          style={{
            transitionDuration: `${fade}ms`,
            maskImage: `url(${s.src})`,
            WebkitMaskImage: `url(${s.src})`,
            maskPosition: s.position ?? "center",
            WebkitMaskPosition: s.position ?? "center",
          }}
        />
      ))}
    </div>
  );
}
