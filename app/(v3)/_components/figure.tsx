import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const corners = [
  "left-0 top-0 border-l border-t",
  "right-0 top-0 border-r border-t",
  "bottom-8 left-0 border-b border-l",
  "bottom-8 right-0 border-b border-r",
];

export function Figure({
  label,
  caption,
  children,
  className,
}: {
  label: string;
  caption: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "relative aspect-square overflow-hidden border border-line-strong bg-bg",
        className,
      )}
    >
      {children}
      {corners.map((c) => (
        <span
          key={c}
          aria-hidden
          className={cn("absolute size-2.5 border-fg/40", c)}
        />
      ))}
      <figcaption className="absolute inset-x-0 bottom-0 flex h-8 items-center justify-between border-t border-line-strong bg-bg px-3 text-[10px] uppercase tracking-widest text-dim">
        <span>{label}</span>
        <span>{caption}</span>
      </figcaption>
    </figure>
  );
}
