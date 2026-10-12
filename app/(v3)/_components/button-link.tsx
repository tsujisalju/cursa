"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { Kbd } from "./kbd";

const button = cva(
  "inline-flex items-center gap-3 text-xs rounded-xs border px-3 py-1.5 uppercase tracking-widest shadow-[inset_0_-2px_0_var(--color-line-strong)] hover:shadow-none",
  {
    variants: {
      variant: {
        solid:
          "border-teal-800 bg-brand text-fg hover:border-teal-700 hover:bg-teal-700",
        outline: "border-line-strong bg-panel text-fg hover:bg-white/5",
      },
    },
    defaultVariants: { variant: "outline" },
  },
);

type Props = VariantProps<typeof button> & {
  href: string;
  hotkey?: string;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({
  href,
  hotkey,
  variant,
  className,
  children,
}: Props) {
  const router = useRouter();

  useEffect(() => {
    if (!hotkey) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey || e.repeat) return;
      const t = e.target as HTMLElement | null;
      if (
        t &&
        (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))
      )
        return;
      if (e.key.toLowerCase() !== hotkey.toLowerCase()) return;
      e.preventDefault();
      if (/^https?:/.test(href)) window.open(href, "_blank", "noopener");
      else router.push(href);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hotkey, href, router]);

  return (
    <Link href={href} className={cn(button({ variant }), className)}>
      {children}
      {hotkey && <Kbd>{hotkey.toUpperCase()}</Kbd>}
    </Link>
  );
}
