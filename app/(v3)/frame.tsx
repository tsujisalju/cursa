import type { ReactNode } from "react";

export function Frame({ rail }: { rail?: ReactNode }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-20 grid h-dvh grid-cols-[1fr_minmax(0,var(--shell-w))_1fr] grid-rows-[var(--band-t)_minmax(0,1fr)_var(--band-b)]">
      <div className="pointer-events-auto col-span-full row-start-1 border-b border-line-strong bg-bg" />
      <div className="col-start-2 row-start-2 flex min-h-0 lg:shadow-[inset_1px_0_0_var(--color-line-strong),inset_-1px_0_0_var(--color-line-strong)]">
        <aside className="pointer-events-auto hidden min-h-0 w-(--rail-w) shrink-0 overflow-y-auto border-r border-line-strong lg:block">
          {rail}
        </aside>
      </div>
      <div className="pointer-events-auto col-span-full row-start-3 border-t border-line-strong bg-bg" />
    </div>
  );
}
