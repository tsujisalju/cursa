import { Slogan } from "@/components/slogan";
import TsujisaljuLogo from "@/components/tsujisalju-logo";
import TsujisaljuLogoOutline from "@/components/tsujisalju-logo-outline";
import { navLinks } from "@/lib/nav-links";
import Link from "next/link";

export default function Header() {
    return (
        <div className="relative grid place-items-center py-2 gap-4 overflow-hidden">
            <Slogan />
            <TsujisaljuLogoOutline className="absolute w-full min-w-[800px] h-auto opacity-50" />
            <div className="relative flex flex-col grow space-y-4">
                <TsujisaljuLogo className="h-8 lg:h-16" />
            </div>
            <div className="flex flex-row space-x-2 lg:space-x-8 font-display font-bold uppercase text-md lg:text-xl ">
                {navLinks.map((link) => (
                    <Link key={link.label} href={link.href}>
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}
