"use client";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { navLinksV3 } from "@/data/nav-links";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <Drawer open={open} onOpenChange={setOpen} direction="bottom">
      <DrawerTrigger>
        <Button className="rounded-xs" variant="outline" size={"icon-lg"}>
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="drawer-float">
        <div className="flex flex-col p-4 space-y-1">
          {navLinksV3.map(([label, href]) => (
            <Link
              className="text-lg uppercase hover:bg-white/5 px-2 py-1 tracking-wider rounded-xs"
              key={label}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
