"use client";

import { navLinksV3 } from "@/data/nav-links";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();
  return (
    <div className="flex flex-row h-full space-x-4 uppercase py-2 lg:py-0 text-sm">
      {navLinksV3.map(([label, href]) => {
        const active = href === "/" ? path === "/v3" : path.startsWith(href); // temporarily on /v3
        return (
          <Link
            key={href}
            href={href}
            className="relative block px-0.5 py-px rounded-sm uppercase tracking-widest hover:bg-mauve-950 border border-transparent hover:border-brand"
          >
            <span className={active ? "bg-brand px-1" : ""}>{label}</span>
          </Link>
        );
      })}
    </div>
  );
}
