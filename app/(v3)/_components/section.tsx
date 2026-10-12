import { cn } from "@/lib/utils";
import { ElementType, ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  panelClassName?: string;
};

export function Section({
  children,
  as: Tag = "section",
  className,
  panelClassName,
}: SectionProps) {
  return (
    <Tag className={cn("border-b border-line-strong px-(--strip)", className)}>
      <div
        className={cn("border-x border-line-strong bg-panel", panelClassName)}
      >
        {children}
      </div>
    </Tag>
  );
}

export function Spacer({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "h-(--strip) border-b border-line-strong flex flex-row",
        className,
      )}
    >
      <div className="h-full w-(--strip)"></div>
      <div className="h-full grow border-x border-line-strong"></div>
      <div className="h-full w-(--strip)"></div>
    </div>
  );
}
