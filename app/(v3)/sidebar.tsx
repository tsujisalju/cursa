"use client";

import TsujisaljuLogoV3Sideways from "@/components/logo/tsujisalju-logo-v3-sideways";
import Navbar from "./navbar";
import { socials } from "@/data/socials";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-full h-full bg-panel border-l border-line-strong flex flex-col">
      <div className="flex flex-col w-full h-full [writing-mode:vertical-lr] p-4">
        <div className="grow">
          <TsujisaljuLogoV3Sideways className="text-fg w-20 h-auto" />
        </div>
        <Navbar />
      </div>
      <div className="flex flex-row h-(--footer-h) border-t border-line-strong bg-line-strong gap-px">
        {socials.map((s) => (
          <Link
            key={s.label}
            className="flex items-center justify-center bg-panel grow hover:bg-white/5"
            href={s.href}
            target="_blank"
          >
            {s.logo}
          </Link>
        ))}
      </div>
    </div>
  );
}
