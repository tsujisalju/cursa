"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ComponentProps, MouseEvent, ReactNode } from "react";

interface TransitionLinkProps extends Omit<
  ComponentProps<typeof Link>,
  "href"
> {
  href: string;
  children: ReactNode;
  variant: "fade" | "zoom-out" | "zoom-in";
}

export default function TransitionLink({
  href,
  children,
  variant,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Check if we're on mobile (below lg breakpoint: 1024px)
    const isMobile = window.innerWidth < 1024;

    // Check if View Transitions API is supported and not on mobile
    if (!document.startViewTransition || isMobile) {
      // Fallback to normal navigation
      if (isMobile) {
        console.log("View transitions disabled on mobile");
      }
      router.push(href);
      return;
    }

    const oldAnimation =
      variant === "fade"
        ? "fade-out"
        : variant === "zoom-out"
          ? "zoom-out-out"
          : "zoom-in-out";
    const newAnimation =
      variant === "fade"
        ? "fade-in"
        : variant === "zoom-out"
          ? "zoom-out-in"
          : "zoom-in-in";

    // Set CSS custom properties for fade animation
    document.documentElement.style.setProperty(
      "--transition-old-animation",
      oldAnimation,
    );
    document.documentElement.style.setProperty(
      "--transition-new-animation",
      newAnimation,
    );

    // Use View Transitions API with fade animation
    const transition = document.startViewTransition(() => {
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

  return href ? (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  ) : (
    <div className={props.className}>{children}</div>
  );
}
