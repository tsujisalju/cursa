"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["Home", "/"],
  ["Projects", "/projects"],
  ["Research", "/research"],
  ["Writing", "/writing"],
  ["About", "/about"],
];

export default function Navbar() {
  const path = usePathname();
  return (
    <div className="flex flex-row h-full space-x-4 uppercase py-2 lg:py-0 text-sm">
      {links.map(([label, href]) => {
        const active = href === "/" ? path === "/v3" : path.startsWith(href); // temporarily on /v3
        return (
          <Link
            key={href}
            href={href}
            className="relative block px-0.5 py-px rounded-sm uppercase tracking-widest hover:bg-mauve-950 border border-transparent hover:border-accent"
          >
            <span className={active ? "bg-accent px-1" : ""}>{label}</span>
          </Link>
        );
      })}
    </div>
  );
}
