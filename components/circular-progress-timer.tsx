"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  strokeWidth?: number;
  sqSize?: number;
  duration?: number;
}

export default function CircularProgressTimer({
  strokeWidth = 1,
  sqSize = 48,
  duration = 8,
}: {
  strokeWidth?: number;
  sqSize?: number;
  duration?: number;
}) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const circleRef = useRef<SVGCircleElement>(null);
  const startTimeRef = useRef<number>(0);
  const animationFrameRef = useRef<number>(0);

  const rad = (sqSize - strokeWidth) / 2;
  const circ = 2 * Math.PI * rad;

  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;
    circle.style.strokeDasharray = `${circ}`;
    circle.style.strokeDashoffset = "0";

    startTimeRef.current = performance.now();

    const update = (now: number) => {
      const elapsed = (now - startTimeRef.current) / 1000;
      const remaining = Math.max(duration - elapsed, 0);

      setTimeLeft(parseInt(remaining.toFixed(1)));

      const progress = remaining / duration;
      console.log(progress);
      const offset = circ * (1 - progress);
      circle.style.strokeDashoffset = offset.toString();

      if (remaining > 0) {
        animationFrameRef.current = requestAnimationFrame(update);
      }
    };
    animationFrameRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [duration, circ]);
  return (
    <div className="relative flex items-center justify-center">
      <svg width={sqSize} height={sqSize}>
        <circle
          ref={circleRef}
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={rad}
          stroke="white"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          className="origin-center -rotate-90"
          style={{
            transition: "stroke-dashoffset 0s",
          }}
        />
      </svg>
      <div className="absolute font-sans font-light text-xs">{timeLeft}</div>
    </div>
  );
}
