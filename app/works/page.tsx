"use client";

import Image from "next/image";
import { useState } from "react";
import { worksData } from "./works";
import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function Works() {
    const [selected, setSelected] = useState<number>(-1);

    const handleOnClick = (index: number) => {
        console.log("set selected", index);
        setSelected(index);
    };

    return (
        <>
            <div className="flex flex-col grow p-16 pt-0 space-y-2">
                <h1 className="font-bold text-3xl">Works</h1>
                <div className="flex flex-row grow space-x-4">
                    {worksData.map((work, index) => (
                        <div
                            className="flex flex-col p-16 justify-end relative hover:cursor-pointer transition ease-out shadow-md hover:shadow-lg hover:scale-[1.02]"
                            key={index}
                            onClick={() => handleOnClick(index)}
                        >
                            <Image
                                src={work.thumbUrl}
                                alt={work.thumbAlt}
                                fill
                                className="object-cover rounded-lg"
                            />
                            <div className="relative">{work.logo}</div>
                        </div>
                    ))}
                </div>
            </div>
            {selected >= 0 && (
                <div
                    className="absolute left-0 h-full w-full bg-black/50 backdrop-blur grid place-content-center"
                    onClick={() => setSelected(-1)}
                ></div>
            )}
        </>
    );
}
