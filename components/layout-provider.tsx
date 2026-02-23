"use client";

import { PageIndexProvider, usePageIndex } from "./page-index-context";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useRef } from "react";
import { getPageIndex } from "@/data/nav-links";

function LayoutProviderInner({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { setCurrentIndex } = usePageIndex();
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Skip on initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // Update index when pathname changes (e.g., browser back/forward)
    const newIndex = getPageIndex(pathname);
    setCurrentIndex(newIndex);
  }, [pathname, setCurrentIndex]);

  return <>{children}</>;
}

export default function LayoutProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <PageIndexProvider initialPath={pathname}>
      <LayoutProviderInner>{children}</LayoutProviderInner>
    </PageIndexProvider>
  );
}
