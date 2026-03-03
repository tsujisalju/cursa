"use client";

import { navLinks } from "@/data/nav-links";
import NavLink from "@/components/nav-link";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-center space-x-2 lg:space-x-8 font-display font-bold uppercase text-md lg:text-xl">
      {navLinks
        .filter((link) => link.href !== "/")
        .map((link) => (
          <NavLink key={link.label} href={link.href}>
            {link.label}
          </NavLink>
        ))}
    </div>
  );
}
