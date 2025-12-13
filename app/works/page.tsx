import Image from "next/image";
import { worksData } from "./works";

export default function Works() {
    return (
        <div className="flex flex-col grow p-16 pt-0 space-y-2">
            <h1 className="font-bold text-3xl">Works</h1>
            <div className="flex flex-row grow space-x-4">
                {worksData.map((work, index) => (
                    <div
                        key={index}
                        className="flex flex-col p-16 justify-end relative"
                    >
                        <Image
                            src={work.thumbUrl}
                            alt={work.thumbAlt}
                            fill
                            className="object-cover rounded-lg"
                        />
                        {work.logo}
                    </div>
                ))}
            </div>
        </div>
    );
}
