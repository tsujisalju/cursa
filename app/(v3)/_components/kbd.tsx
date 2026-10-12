import { cn } from "@/lib/utils";

export function Kbd({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <kbd
      className={cn(
        "border border-b-2 border-white/20 rounded-xs bg-black/25 px-1 font-mono text-[10px] leading-4 text-current/70 pointer-coarse:hidden",
        className,
      )}
    >
      {children}
    </kbd>
  );
}
