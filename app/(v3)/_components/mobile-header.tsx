import TsujisaljuLogoV3 from "@/components/logo/tsujisalju-logo-v3";
import { navLinksV3 } from "@/data/nav-links";
import Link from "next/link";
import MobileNav from "./mobile-nav";

export function MobileHeader() {
  return (
    <div className="h-full p-(--strip) lg:hidden">
      <div className="flex h-full items-center justify-between border border-line-strong bg-panel pl-4 pr-2">
        <Link href={navLinksV3[0][1]} aria-label="Home">
          <TsujisaljuLogoV3 className="h-6 w-auto text-fg" />
        </Link>
        <MobileNav />
      </div>
    </div>
  );
}
