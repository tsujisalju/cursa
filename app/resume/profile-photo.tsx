"use client";

import { resume } from "@/data/resume";
import Image from "next/image";
import { useState } from "react";

export default function ProfilePhoto() {
  const [isFlipProfile, setIsFlipProfile] = useState<boolean>(false);
  return (
    <div
      className={
        "relative rounded w-80 h-80 aspect-square perspective-midrange"
      }
      onMouseEnter={() => setIsFlipProfile(true)}
      onMouseLeave={() => setIsFlipProfile(false)}
    >
      <Image
        className={
          "object-cover rounded transition-transform duration-700 transform-3d backface-hidden shadow-lg " +
          (isFlipProfile ? "rotate-y-0" : "rotate-y-180")
        }
        fill
        src={resume.profilePhoto}
        alt="profile photo"
      />
      <Image
        className={
          "object-cover rounded transition-transform duration-700 transform-3d backface-hidden " +
          (isFlipProfile ? "-rotate-y-180" : "rotate-y-0")
        }
        fill
        src={resume.fakeProfilePhoto}
        alt="fake profile photo"
      />
    </div>
  );
}
