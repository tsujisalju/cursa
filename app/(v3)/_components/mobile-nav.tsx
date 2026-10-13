"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { isActiveV3, navLinksV3 } from "@/data/nav-links";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <Drawer open={open} onOpenChange={setOpen} direction="bottom">
      <DrawerTrigger asChild>
        <Button
          className="rounded-xs transition-none"
          variant="outline"
          size={"icon-sm"}
          aria-label="Open menu"
        >
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="border-line-strong bg-panel">
        <DrawerTitle className="sr-only">Navigation</DrawerTitle>
        <nav aria-label="Primary" className="flex flex-col p-4 space-y-1">
          {navLinksV3.map(([label, href]) => (
            <Link
              className={cn(
                "text-lg uppercase hover:bg-white/5 px-2 py-1 tracking-wider rounded-xs",
                isActiveV3(path, href) && "bg-brand hover:bg-brand",
              )}
              key={label}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </DrawerContent>
    </Drawer>
  );
}
