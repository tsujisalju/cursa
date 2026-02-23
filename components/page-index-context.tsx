"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { getPageIndex } from "@/data/nav-links";

interface PageIndexContextType {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  getTransitionDirection: (targetHref: string) => "up" | "down" | "none";
}

const PageIndexContext = createContext<PageIndexContextType | undefined>(
  undefined
);

export function PageIndexProvider({
  children,
  initialPath = "/",
}: {
  children: ReactNode;
  initialPath?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState<number>(
    getPageIndex(initialPath)
  );

  const getTransitionDirection = (targetHref: string): "up" | "down" | "none" => {
    const targetIndex = getPageIndex(targetHref);

    if (targetIndex === currentIndex) {
      return "none";
    }

    return targetIndex > currentIndex ? "down" : "up";
  };

  return (
    <PageIndexContext.Provider
      value={{ currentIndex, setCurrentIndex, getTransitionDirection }}
    >
      {children}
    </PageIndexContext.Provider>
  );
}

export function usePageIndex() {
  const context = useContext(PageIndexContext);
  if (context === undefined) {
    throw new Error("usePageIndex must be used within a PageIndexProvider");
  }
  return context;
}
