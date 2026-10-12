import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Kicker({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 pt-5 font-serif text-sm italic text-copy",
        className,
      )}
    >
      <span aria-hidden className="h-px w-6 lg:w-9 bg-line-strong" />
      <span>{children}</span>
      <span aria-hidden className="h-px grow bg-line-strong" />
    </div>
  );
}
