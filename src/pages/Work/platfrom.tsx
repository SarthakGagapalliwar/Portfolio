"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import {
  CharacterV1,
  CharacterV2,
  CharacterV3,
} from "@/components/ui/skiper-ui/skiper31";

const Bracket = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 27 78"
      className={className}
    >
      <path
        fill="#000"
        d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
      ></path>
    </svg>
  );
};

// Custom platform icon component with proper sizing
const PlatformIcon = ({
  src,
  index,
  centerIndex,
  scrollYProgress,
}: {
  src: string;
  index: number;
  centerIndex: number;
  scrollYProgress: any;
}) => {
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 60, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);

  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [Math.abs(distanceFromCenter) * 40, 0]
  );

  return (
    <motion.img
      src={src}
      className="inline-block w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-2 object-contain"
      style={{
        x,
        scale,
        y,
        transformOrigin: "center",
      }}
      alt="platform icon"
    />
  );
};

// Custom platform icon component with V3 animation (rotation)
const PlatformIconV3 = ({
  src,
  index,
  centerIndex,
  scrollYProgress,
  link,
}: {
  src: string;
  index: number;
  centerIndex: number;
  scrollYProgress: any;
  link?: string;
}) => {
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 90, 0]
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [-Math.abs(distanceFromCenter) * 20, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);

  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <motion.img
      src={src}
      className="inline-block w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-2 object-contain cursor-pointer hover:opacity-80 transition-opacity"
      style={{
        x,
        rotate,
        y,
        scale,
        transformOrigin: "center",
      }}
      alt="platform icon"
      onClick={handleClick}
    />
  );
};

const Skiper31Demo = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const text = "MY PLATFORMS & TECHSTACK";
  const characters = text.split("");
  const centerIndex = Math.floor(characters.length / 2);

  return (
    <div
      ref={targetRef}
      className="relative box-border flex h-[210vh] items-center justify-center gap-[2vw] overflow-hidden bg-[#f5f4f3] p-[2vw]"
    >
      <div
        className="font-geist w-full max-w-4xl text-center text-6xl font-bold uppercase tracking-tighter text-black"
        style={{
          perspective: "500px",
        }}
      >
        {characters.map((char, index) => (
          <CharacterV1
            key={index}
            char={char}
            index={index}
            centerIndex={centerIndex}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
};

const Skiper31Demo2 = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const platformIcons = [
    "/images/Icon/giticon.png",
    "/images/Icon/mongodb.png",
    "/images/Icon/nextjs.png",
    "/images/Icon/nodejs.png",
    "/images/Icon/Postman.png",
    "/images/Icon/rrr.png",
    "/images/Icon/TypeScript.png",
    "/images/Icon/vscode.png",
  ];
  const iconCenterIndex = Math.floor(platformIcons.length / 2);

  return (
    <div
      ref={targetRef}
      className="relative box-border flex h-[210vh] flex-col items-center justify-center gap-[2vw] overflow-hidden bg-[#f5f4f3] p-[2vw]"
    >
      <p className="font-geist flex items-center justify-center gap-3 text-2xl font-medium tracking-tight text-black">
        <Bracket className="h-12 text-black" />
        <span className="font-geist font-medium">My fav tech stack</span>
        <Bracket className="h-12 scale-x-[-1] text-black" />
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-6xl">
        {platformIcons.map((icon, index) => (
          <PlatformIcon
            key={index}
            src={icon}
            index={index}
            centerIndex={iconCenterIndex}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
};

const Skiper31Demo3 = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const platformData = [
    {
      icon: "/images/Icon/onlinePlatform/canva.png",
      link: "https://www.canva.com/",
    },
    {
      icon: "/images/Icon/onlinePlatform/giticon.png",
      link: "https://github.com/SarthakGagapalliwar", // Replace with your GitHub profile
    },
    {
      icon: "/images/Icon/onlinePlatform/instragram.png",
      link: "https://www.instagram.com/sarthak_5109?igsh=MWZ4OXlmbDFlcTJzZA==", // Replace with your Instagram profile
    },
    {
      icon: "/images/Icon/onlinePlatform/leadcodeincon.png",
      link: "https://leetcode.com/u/SarthakSpg/", // Replace with your LeetCode profile
    },
    {
      icon: "/images/Icon/onlinePlatform/linkdinicon.png",
      link: "https://www.linkedin.com/in/sarthak-gagapalliwar/", // Replace with your LinkedIn profile
    },
    {
      icon: "/images/Icon/onlinePlatform/spotyfi.png",
      link: "https://open.spotify.com/playlist/0rRn2ioPSPZDhKuILxDrS8?si=2daCB8FuSEuhrgD8Tq25ag&pt=6751338d9112dc24a91254516b908ff3&pi=abVvUbxMS4uiv", // Replace with your Spotify profile
    },
  ];

  const iconCenterIndex = Math.floor(platformData.length / 2);

  return (
    <div
      ref={targetRef}
      className="relative box-border flex h-[210vh] flex-col items-center justify-center gap-[2vw] overflow-hidden bg-[#f5f4f3] p-[2vw]"
    >
      <p className="font-geist flex items-center justify-center gap-3 text-2xl font-medium tracking-tight text-black">
        <Bracket className="h-12 text-black" />
        <span className="font-geist font-medium">My Online Platform</span>
        <Bracket className="h-12 scale-x-[-1] text-black" />
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-6xl">
        {platformData.map((platform, index) => (
          <PlatformIconV3
            key={index}
            src={platform.icon}
            index={index}
            centerIndex={iconCenterIndex}
            scrollYProgress={scrollYProgress}
            link={platform.link}
          />
        ))}
      </div>
    </div>
  );
};

const PlatformShowcase = () => {
  return (
    <div className="w-full bg-white">
      <Skiper31Demo />

      <div className="relative -mt-[100vh]">
        <Skiper31Demo2 />
      </div>

      <div className="relative -mt-[95vh]">
        <Skiper31Demo3 />
      </div>
    </div>
  );
};

export default PlatformShowcase;

/*
PropsTable for CharacterV1, CharacterV2, CharacterV3:
- char: The character/icon to display (string)
- index: The index of the character/icon (number)
- centerIndex: The center index of the character/icon array (number)
- scrollYProgress: The scrollYProgress of the component (MotionValue)
*/
