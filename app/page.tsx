"use client";

import { homeGallery } from "@/lib/home-gallery";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [wipePhase, setWipePhase] = useState<"idle" | "in" | "out">("idle");

    useEffect(() => {
        const interval = setInterval(() => {
            setWipePhase("in");
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
        if (e.propertyName !== "translate") return;
        if (wipePhase === "in") {
            setCurrentIndex((prev) => (prev + 1) % homeGallery.length);
            setTimeout(() => {
                setWipePhase("out");
            }, 500);
        }
        if (wipePhase === "out") {
            setWipePhase("idle");
        }
    };

    return (
        <div className="relative flex grow rounded-lg mx-1 lg:mx-2 overflow-hidden">
            <Image
                src={homeGallery[currentIndex].src}
                alt={homeGallery[currentIndex].title}
                fill
                className={`object-cover transition duration-400 ${homeGallery[currentIndex].className} ${wipePhase === "in" ? "blur-sm" : "blur-none"}`}
                loading={"eager"}
            />
            <h1 className="absolute top-4 lg:bottom-4 left-4 font-sans font-bold text-lg lg:text-2xl mix-blend-difference text-white">
                {homeGallery[currentIndex].title}
            </h1>
            <div
                className={`absolute top-0 left-0 w-full h-full ${homeGallery[currentIndex].wipeColor} transition ease-out
                  ${wipePhase === "idle" ? "duration-0 translate-x-[-100%]" : "duration-400"}
                  ${wipePhase === "in" ? "translate-x-[0%]" : ""}
                  ${wipePhase === "out" ? "translate-x-[100%]" : ""}
                  `}
                onTransitionEnd={handleTransitionEnd}
            ></div>
        </div>
    );
}
