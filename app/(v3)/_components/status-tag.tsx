import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const tag = cva(
  "inline-flex items-center border rounded-xs px-1.5 py-0.5 text-[10px] uppercase leading-none tracking-widest",
  {
    variants: {
      tone: {
        neutral: "border-line-strong bg-white/5 text-muted",
        live: "border-accent bg-accent/25 text-accent-fg",
      },
    },
    defaultVariants: { tone: "neutral" },
  },
);

export function StatusTag({
  tone,
  className,
  children,
}: VariantProps<typeof tag> & { className?: string; children: string }) {
  return <span className={cn(tag({ tone }), className)}>{children}</span>;
}
