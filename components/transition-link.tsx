"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ComponentProps, MouseEvent, ReactNode } from "react";
import { usePageIndex } from "./page-index-context";
import { getPageIndex } from "@/data/nav-links";

interface TransitionLinkProps extends Omit<
  ComponentProps<typeof Link>,
  "href"
> {
  href: string;
  children: ReactNode;
}

export default function TransitionLink({
  href,
  children,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();
  const { setCurrentIndex, getTransitionDirection } = usePageIndex();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const direction = getTransitionDirection(href);

    // No transition if navigating to the same page
    if (direction === "none") {
      return;
    }

    // Check if we're on mobile (below lg breakpoint: 1024px)
    const isMobile = window.innerWidth < 1024;

    // Check if View Transitions API is supported and not on mobile
    if (!document.startViewTransition || isMobile) {
      // Fallback to normal navigation
      if (isMobile) {
        console.log("View transitions disabled on mobile");
      }
      const targetIndex = getPageIndex(href);
      setCurrentIndex(targetIndex);
      router.push(href);
      return;
    }

    // Set CSS custom properties for animation direction BEFORE starting transition
    // This must be set synchronously before startViewTransition is called
    const oldAnimation =
      direction === "down" ? "slide-down-out" : "slide-up-out";
    const newAnimation = direction === "down" ? "slide-down-in" : "slide-up-in";

    document.documentElement.style.setProperty(
      "--transition-old-animation",
      oldAnimation,
    );
    document.documentElement.style.setProperty(
      "--transition-new-animation",
      newAnimation,
    );

    // Use View Transitions API
    const transition = document.startViewTransition(() => {
      const targetIndex = getPageIndex(href);
      setCurrentIndex(targetIndex);
      router.push(href);
    });

    // Clean up CSS custom properties after transition completes
    transition.finished.finally(() => {
      document.documentElement.style.removeProperty(
        "--transition-old-animation",
      );
      document.documentElement.style.removeProperty(
        "--transition-new-animation",
      );
    });
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
