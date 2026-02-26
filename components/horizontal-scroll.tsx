"use client";

import { useRef, useEffect, ReactNode } from "react";

/**
 * Custom hook that enables horizontal scrolling with the mouse wheel
 * @returns A ref to attach to the scrollable container
 */
export function useHorizontalScroll<T extends HTMLElement>() {
  const scrollContainerRef = useRef<T>(null);
  const targetScrollLeft = useRef(0);
  const currentScrollLeft = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // Initialize refs with current scroll position
    targetScrollLeft.current = scrollContainer.scrollLeft;
    currentScrollLeft.current = scrollContainer.scrollLeft;

    const smoothScroll = () => {
      if (!scrollContainer) return;

      const diff = targetScrollLeft.current - currentScrollLeft.current;

      // Use easing for smooth interpolation
      if (Math.abs(diff) > 0.5) {
        currentScrollLeft.current += diff * 0.15; // Adjust smoothness factor (0.1-0.2 works well)
        scrollContainer.scrollLeft = currentScrollLeft.current;
        animationFrameId.current = requestAnimationFrame(smoothScroll);
      } else {
        // Snap to final position when very close
        currentScrollLeft.current = targetScrollLeft.current;
        scrollContainer.scrollLeft = targetScrollLeft.current;
        animationFrameId.current = null;
      }
    };

    const handleScroll = () => {
      // Update refs when user manually scrolls (scrollbar, shift+wheel, etc.)
      // Only sync if we're not currently animating
      if (animationFrameId.current === null && scrollContainer) {
        targetScrollLeft.current = scrollContainer.scrollLeft;
        currentScrollLeft.current = scrollContainer.scrollLeft;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // Only intercept vertical scrolling (when shift is not pressed)
      if (e.deltaY !== 0 && !e.shiftKey) {
        e.preventDefault();

        // Accumulate scroll delta
        targetScrollLeft.current += e.deltaY;

        // Clamp to valid scroll range
        const maxScroll =
          scrollContainer.scrollWidth - scrollContainer.clientWidth;
        targetScrollLeft.current = Math.max(
          0,
          Math.min(targetScrollLeft.current, maxScroll),
        );

        // Start animation if not already running
        if (animationFrameId.current === null) {
          animationFrameId.current = requestAnimationFrame(smoothScroll);
        }
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    scrollContainer.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      scrollContainer.removeEventListener("wheel", handleWheel);
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return scrollContainerRef;
}

interface HorizontalScrollContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wrapper component that enables horizontal scrolling with the mouse wheel
 * @param children - The content to render inside the scrollable container
 * @param className - Additional CSS classes to apply to the container
 */
export function HorizontalScrollContainer({
  children,
  className = "",
}: HorizontalScrollContainerProps) {
  const scrollRef = useHorizontalScroll<HTMLDivElement>();

  return (
    <div ref={scrollRef} className={className}>
      {children}
    </div>
  );
}
