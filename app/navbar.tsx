"use client";

import { navLinks } from "@/lib/nav-links";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-center space-x-2 lg:space-x-8 font-display font-bold uppercase text-md lg:text-xl">
      {navLinks.map((link) => (
        <Link key={link.label} href={link.href}>
          {link.label}
        </Link>
      ))}
    </div>
  );
}
