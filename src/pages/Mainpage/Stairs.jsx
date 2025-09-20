"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { createContext, useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export const NavbarContext = createContext();
export const NavbarColorContext = createContext();

const Stairs = (props) => {
  const currentPath = usePathname();

  // NavContext state
  const [navColor, setNavColor] = useState("white");
  const [navOpen, setNavOpen] = useState(false);

  const stairParentRef = useRef(null);
  const pageRef = useRef(null);

  // NavContext effect for color management
  useEffect(
    function () {
      if (currentPath == "/projects" || currentPath == "/agence") {
        setNavColor("black");
      } else {
        setNavColor("white");
      }
    },
    [currentPath]
  );

  useGSAP(
    function () {
      const tl = gsap.timeline();

      // Set stairs to be visible immediately
      gsap.set(stairParentRef.current, {
        display: "block",
      });

      // Start stairs animation immediately
      tl.from(".stair", {
        height: 0,
        duration: 0.5,
        stagger: {
          amount: -0.2,
        },
      });
      tl.to(".stair", {
        y: "100%",
        duration: 0.5,
        stagger: {
          amount: -0.25,
        },
      });
      tl.to(stairParentRef.current, {
        display: "none",
        duration: 0,
      });
      tl.to(".stair", {
        y: "0%",
        duration: 0,
      });

      // Remove delay from page content - make it appear right after stairs
      gsap.from(
        pageRef.current,
        {
          opacity: 0,
          scale: 1.2,
          duration: 0.5,
        },
        "-=0.1"
      );
    },
    [currentPath]
  );

  return (
    <NavbarContext.Provider value={[navOpen, setNavOpen]}>
      <NavbarColorContext.Provider value={[navColor, setNavColor]}>
        <div>
          <div
            ref={stairParentRef}
            className="h-screen w-full fixed z-20 top-0"
            style={{ display: "block" }}
          >
            <div className="h-full w-full flex">
              <div className="stair h-full w-1/5 bg-black"></div>
              <div className="stair h-full w-1/5 bg-black"></div>
              <div className="stair h-full w-1/5 bg-black"></div>
              <div className="stair h-full w-1/5 bg-black"></div>
              <div className="stair h-full w-1/5 bg-black"></div>
            </div>
          </div>
          <div ref={pageRef}>{props.children}</div>
        </div>
      </NavbarColorContext.Provider>
    </NavbarContext.Provider>
  );
};

export default Stairs;
