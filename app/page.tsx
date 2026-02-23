"use client";

import { Badge } from "@/components/ui/badge";
import { homeGallery } from "@/data/home-gallery";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [wipePhase, setWipePhase] = useState<"idle" | "in" | "out">("in");

  const duration = 6000;

  useEffect(() => {
    const interval = setInterval(() => {
      setWipePhase("in");
    }, duration);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.propertyName !== "translate") return;
    if (wipePhase === "in") {
      setCurrentIndex((prev) => (prev + 1) % homeGallery.length);
    }
    if (wipePhase === "out") {
      setWipePhase("idle");
    }
  };

  const handleImageLoad = () => {
    if (wipePhase === "in") {
      setWipePhase("out");
    }
  };

  return (
    <div className="relative flex grow rounded-lg mx-1 lg:mx-0 lg:my-1 overflow-hidden">
      <Image
        src={homeGallery[currentIndex].src}
        alt={homeGallery[currentIndex].title}
        fill
        className={`object-cover transition duration-400 ${homeGallery[currentIndex].className} ${wipePhase === "in" ? "blur-sm" : "blur-none"}`}
        loading={"eager"}
        onLoad={handleImageLoad}
      />
      <h1 className="absolute top-4 lg:bottom-4 left-4 font-sans font-bold text-lg lg:text-2xl mix-blend-difference text-white">
        {homeGallery[currentIndex].title}
      </h1>
      <div className="absolute top-4 right-4 flex flex-row space-x-2">
        {homeGallery[currentIndex].tags.map((tag) => (
          <Badge key={tag} className="font-sans uppercase mix-blend-difference">
            {tag}
          </Badge>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 mix-blend-difference">
        <div
          key={currentIndex}
          className="h-full bg-white animate-[progress]"
          style={{ animation: `progress ${duration}ms linear forwards` }}
        ></div>
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full ${homeGallery[currentIndex].wipeColor} transition ease-out
                  ${wipePhase === "idle" ? "duration-0 -translate-x-full" : "duration-400"}
                  ${wipePhase === "in" ? "translate-x-[0%]" : ""}
                  ${wipePhase === "out" ? "translate-x-full" : ""}
                  `}
        onTransitionEnd={handleTransitionEnd}
      ></div>
    </div>
  );
}
