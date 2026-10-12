"use client";

import TsujisaljuLogoV3Sideways from "@/components/logo/tsujisalju-logo-v3-sideways";
import Navbar from "./navbar";

export default function Sidebar() {
  return (
    <aside className="w-full h-full bg-panel border-l border-line-strong flex flex-col">
      <div className="flex flex-col w-full h-full [writing-mode:vertical-lr] p-4">
        <div className="grow">
          <TsujisaljuLogoV3Sideways className="text-fg w-24 h-auto" />
        </div>
        <Navbar />
      </div>
      <div className="flex flex-row h-16 border-t border-line-strong"></div>
    </aside>
  );
}
