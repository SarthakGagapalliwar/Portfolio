"use client";

import React, { useEffect, useRef, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import Project from "@/pages/Project";
import Preloader from "@/pages/Mainpage/Preloader";
import Work from "@/pages/Work";
import Nav from "@/pages/Nav/Nav";
import { TelescopeScroll } from "@/pages/skills";

const HomePage = () => {
  // Initialize Lenis for smooth scrolling
  const lenis = useLenis();

  useEffect(() => {
    // Optional: Add any custom Lenis configuration here
    if (lenis) {
      // You can add custom scroll behaviors here
      console.log("Lenis initialized");
    }
  }, [lenis]);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    >
      <Nav />
      <div>
        {/* <Preloader /> */}
        <Project />
        <TelescopeScroll/>
      </div>
    </ReactLenis>
  );
};

export default HomePage;
