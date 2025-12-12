import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen justify-center bg-zinc-50 dark:bg-zinc-900">
            <div className="flex flex-row w-full h-max p-16">
                <div className="flex flex-col grow space-y-4">
                    <Image
                        src="textlogo-metallic.svg"
                        alt="tsujisalju logo"
                        width={500}
                        height={100}
                    />
                    <div className="flex flex-col">
                        <h1 className="font-sans font-light text-5xl">
                            Have faith in the creator, and our ability to
                            create.
                        </h1>
                        <p className="font-serif text-lg mt-2">
                            I’m Qayyum, a freelance developer and designer based
                            in Johore, Malaysia.
                        </p>
                        <p className="font-serif text-lg">
                            Telling my story through mythical creatures from a
                            world not so different than ours.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-between text-end">
                    <Link href="#" className="font-sans font-bold text-2xl">
                        Works
                    </Link>
                    <Link href="#" className="font-sans font-bold text-2xl">
                        Personal
                    </Link>
                    <Link href="#" className="font-sans font-bold text-2xl">
                        Almanac
                    </Link>
                    <Link href="#" className="font-sans font-bold text-2xl">
                        Logs
                    </Link>
                </div>
            </div>
            <div className="flex flex-col grow px-16">
                <h1 className="font-bold text-3xl">Works</h1>
            </div>
        </div>
    );
}
