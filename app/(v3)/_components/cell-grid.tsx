import { ReactNode } from "react";
import { StatusTag } from "./status-tag";
import { cn } from "@/lib/utils";

export function CellGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-px border-t border-line-strong bg-line-strong md:grid-cols-2",
        className,
      )}
    >
      {children}
    </div>
  );
}

type CellProps = {
  title: string;
  tag?: string;
  tagTone?: "neutral" | "live";
  children: ReactNode;
};

export function Cell({ title, tag, tagTone, children }: CellProps) {
  return (
    <article className="flex flex-col gap-3 bg-panel px-6 py-7 lg:px-9">
      <header className="flex items-start justify-between gap-4">
        <h3 className="font-serif text-xl leading-snug">{title}</h3>
        {tag && <StatusTag tone={tagTone}>{tag}</StatusTag>}
      </header>
      <p className="max-w-lg text-sm leading-6 tracking-wide text-copy">
        {children}
      </p>
    </article>
  );
}
