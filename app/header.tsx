import Navbar from "@/app/navbar";
import { Slogan } from "@/app/slogan";
import TsujisaljuLogo from "@/app/tsujisalju-logo";
import TsujisaljuLogoOutline from "@/app/tsujisalju-logo-outline";
import Link from "next/link";

export default function Header() {
  return (
    <div className="relative flex flex-col justify-center items-center py-2 gap-4 overflow-hidden lg:[writing-mode:vertical-lr]">
      <Slogan />
      <TsujisaljuLogoOutline className="absolute w-full min-w-200 h-auto opacity-60 lg:rotate-90 -z-10" />
      <Link href="/">
        <div className="flex flex-col justify-center items-center space-y-4 ">
          <TsujisaljuLogo className="h-8 lg:h-auto lg:w-16 lg:rotate-90 lg:scale-[7]" />
        </div>
      </Link>
      <Navbar />
    </div>
  );
}
