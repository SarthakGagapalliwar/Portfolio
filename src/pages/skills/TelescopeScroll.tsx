"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import styles from "./TelescopeScroll.module.css";
import Image from "next/image";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface SpotlightItem {
  name: string;
  img: string;
}

export interface Config {
  gap: number;
  speed: number;
  arcRadius: number;
}

export interface TelescopeScrollProps {
  items?: SpotlightItem[];
  config?: Partial<Config>;
}

const defaultItems: SpotlightItem[] = [
  { name: "React", img: "/images/Icon/rrr.png" },
  { name: "Next.js", img: "/images/Icon/nextjs.png" },
  { name: "TypeScript", img: "/images/Icon/TypeScript.png" },
  { name: "Node.js", img: "/images/Icon/nodejs.png" },
  { name: "MongoDB", img: "/images/Icon/mongodb-svgrepo-com.svg" },
  { name: "Tailwind", img: "/images/Icon/tailwind.png" },
  { name: "Git", img: "/images/Icon/giticon.png" },
  { name: "C++", img: "/images/Icon/c-.png" },
  { name: "JavaScript", img: "/images/Icon/javascript.png" },
  { name: "Postman", img: "/images/Icon/postmanClear.png" },
];

const defaultConfig: Config = {
  gap: 0.08,
  speed: 0.3,
  arcRadius: 500,
};

const TelescopeScroll: React.FC<TelescopeScrollProps> = ({
  items = defaultItems,
  config: userConfig = {},
}) => {
  const mergedConfig = useMemo(
    () => ({ ...defaultConfig, ...userConfig }),
    [userConfig]
  );

  const lenisRef = useRef<Lenis | null>(null);
  const titlesContainerRef = useRef<HTMLDivElement>(null);
  const imagesContainerRef = useRef<HTMLDivElement>(null);
  const spotlightHeaderRef = useRef<HTMLParagraphElement>(null);
  const titlesContainerElementRef = useRef<HTMLDivElement>(null);
  const introTextElementsRef = useRef<HTMLDivElement[]>([]);
  const imageElementsRef = useRef<HTMLDivElement[]>([]);
  const titleElementsRef = useRef<HTMLHeadingElement[]>([]);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const bgImageImgRef = useRef<HTMLImageElement>(null);
  const currentActiveIndexRef = useRef(0);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    if (typeof window === "undefined") return;

    lenisRef.current = new Lenis();

    const handleScroll = () => {
      ScrollTrigger.update();
    };

    lenisRef.current.on("scroll", handleScroll);

    const ticker = (time: number) => {
      if (lenisRef.current) {
        lenisRef.current.raf(time * 1000);
      }
    };

    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      gsap.ticker.remove(ticker);
    };
  }, []);

  // Bezier curve calculations
  const getBezierPosition = (t: number) => {
    const containerWidth = window.innerWidth * 0.3;
    const containerHeight = window.innerHeight;
    const arcStartX = containerWidth - 220;
    const arcStartY = -200;
    const arcEndY = containerHeight + 200;
    const arcControlPointX = arcStartX + mergedConfig.arcRadius;
    const arcControlPointY = containerHeight / 2;

    const x =
      (1 - t) * (1 - t) * arcStartX +
      2 * (1 - t) * t * arcControlPointX +
      t * t * arcStartX;
    const y =
      (1 - t) * (1 - t) * arcStartY +
      2 * (1 - t) * t * arcControlPointY +
      t * t * arcEndY;
    return { x, y };
  };

  const getImgProgressState = (index: number, overallProgress: number) => {
    const startTime = index * mergedConfig.gap;
    const endTime = startTime + mergedConfig.speed;

    if (overallProgress < startTime) return -1;
    if (overallProgress > endTime) return 2;

    return (overallProgress - startTime) / mergedConfig.speed;
  };

  // Initialize scroll trigger
  useEffect(() => {
    if (typeof window === "undefined" || !isInitialized) return;

    const imageElements = imageElementsRef.current;
    const titleElements = titleElementsRef.current;
    const introTextElements = introTextElementsRef.current;
    const spotlightHeader = spotlightHeaderRef.current;
    const titlesContainerElement = titlesContainerElementRef.current;
    const bgImage = bgImageRef.current;
    const bgImageImg = bgImageImgRef.current;
    const titlesContainer = titlesContainerRef.current;

    if (!imageElements.length || !titleElements.length) return;

    // Set initial states
    imageElements.forEach((img) => gsap.set(img, { opacity: 0 }));

    const HEADER_SHOW_START = 0.011;
    const SWITCH_START = 0.03; // start items shortly after header appears
    const SWITCH_END = 0.95;
    const switchSpan = SWITCH_END - SWITCH_START;

    const scrollTrigger = ScrollTrigger.create({
      trigger: ".spotlight",
      start: "top top",
      end: `+=${window.innerHeight * 10}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        if (progress <= HEADER_SHOW_START) {
          // const animationProgress = progress / 0.2;
          // const moveDistance = window.innerWidth * 0.6;

          // if (introTextElements[0]) {
          //   gsap.set(introTextElements[0], {
          //     x: -animationProgress * moveDistance,
          //   });
          // }
          // if (introTextElements[1]) {
          //   gsap.set(introTextElements[1], {
          //     x: animationProgress * moveDistance,
          //   });
          // }

          // introTextElements.forEach((el) => {
          //   if (el) gsap.set(el, { opacity: 1 });
          // });

          // if (bgImage) {
          //   gsap.set(bgImage, {
          //     transform: `scale(${animationProgress})`,
          //   });
          // }
          // if (bgImageImg) {
          //   gsap.set(bgImageImg, {
          //     transform: `scale(${1.5 - animationProgress * 0.5})`,
          //   });
          // }

          // imageElements.forEach((img) => gsap.set(img, { opacity: 0 }));
          if (spotlightHeader) spotlightHeader.style.opacity = "0";
          if (titlesContainerElement) {
            gsap.set(titlesContainerElement, {
              "--before-opacity": "0",
              "--after-opacity": "0",
            });
          }
        } else if (progress > HEADER_SHOW_START && progress <= SWITCH_START) {
          if (bgImage) gsap.set(bgImage, { transform: "scale(1)" });
          if (bgImageImg) gsap.set(bgImageImg, { transform: "scale(1)" });

          introTextElements.forEach((el) => {
            if (el) gsap.set(el, { opacity: 0 });
          });

          imageElements.forEach((img) => gsap.set(img, { opacity: 0 }));
          if (spotlightHeader) spotlightHeader.style.opacity = "1";
          if (titlesContainerElement) {
            gsap.set(titlesContainerElement, {
              "--before-opacity": "1",
              "--after-opacity": "1",
            });
          }
        } else if (progress > SWITCH_START && progress <= SWITCH_END) {
          if (bgImage) gsap.set(bgImage, { transform: "scale(1)" });
          if (bgImageImg) gsap.set(bgImageImg, { transform: "scale(1)" });

          introTextElements.forEach((el) => {
            if (el) gsap.set(el, { opacity: 0 });
          });

          if (spotlightHeader) spotlightHeader.style.opacity = "1";
          if (titlesContainerElement) {
            gsap.set(titlesContainerElement, {
              "--before-opacity": "1",
              "--after-opacity": "1",
            });
          }

          const switchProgress = (progress - SWITCH_START) / switchSpan;
          const viewportHeight = window.innerHeight;
          const titlesContainerHeight = titlesContainer?.scrollHeight || 0;
          const startPosition = viewportHeight;
          const targetPosition = -titlesContainerHeight;
          const totalDistance = startPosition - targetPosition;
          const currentY = startPosition - switchProgress * totalDistance;

          if (titlesContainer) {
            gsap.set(titlesContainer, {
              transform: `translateY(${currentY}px)`,
            });
          }

          imageElements.forEach((img, index) => {
            const imageProgress = getImgProgressState(index, switchProgress);

            if (imageProgress < 0 || imageProgress > 1) {
              gsap.set(img, { opacity: 0 });
            } else {
              const pos = getBezierPosition(imageProgress);
              gsap.set(img, {
                x: pos.x - 100,
                y: pos.y - 75,
                opacity: 1,
              });
            }
          });

          const viewportMiddle = viewportHeight / 2;
          let closestIndex = 0;
          let closestDistance = Infinity;

          titleElements.forEach((title, index) => {
            const titleRect = title.getBoundingClientRect();
            const titleCenter = titleRect.top + titleRect.height / 2;
            const distanceFromCenter = Math.abs(titleCenter - viewportMiddle);

            if (distanceFromCenter < closestDistance) {
              closestDistance = distanceFromCenter;
              closestIndex = index;
            }
          });

          const HYSTERESIS_PX = 4; // require a small improvement to switch
          const currentActive = currentActiveIndexRef.current;
          const currentActiveEl = titleElements[currentActive];
          let currentActiveDistance = Infinity;
          if (currentActiveEl) {
            const rect = currentActiveEl.getBoundingClientRect();
            currentActiveDistance = Math.abs(
              rect.top + rect.height / 2 - viewportMiddle
            );
          }

          const shouldSwitch =
            closestIndex !== currentActive &&
            closestDistance + HYSTERESIS_PX < currentActiveDistance;

          if (shouldSwitch) {
            if (currentActiveEl) {
              currentActiveEl.style.opacity = "0.25";
            }
            const nextEl = titleElements[closestIndex];
            if (nextEl) {
              nextEl.style.opacity = "1";
            }
            if (bgImageImg && items[closestIndex]) {
              bgImageImg.src = items[closestIndex].img;
            }
            currentActiveIndexRef.current = closestIndex;
          }
        } else if (progress > 0.95) {
          if (spotlightHeader) spotlightHeader.style.opacity = "0";
          if (titlesContainerElement) {
            gsap.set(titlesContainerElement, {
              "--before-opacity": "0",
              "--after-opacity": "0",
            });
          }
        }
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [isInitialized, items, mergedConfig]);

  // Initialize refs after component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsInitialized(true);
    }
  }, []);

  return (
    <div className={styles.telescopeContainer}>
      <section id="skills" className={styles.intro}>
        <h1>A snapshot of what I do best ↓</h1>
      </section>

      <section className={`${styles.spotlight} spotlight`}>
        <div className={styles.spotlightIntroTextWrapper}>
          {/* <div
            className={styles.spotlightIntroText}
            ref={(el) => {
              if (el) introTextElementsRef.current[0] = el;
            }}
          >
            <p>Beneath</p>
          </div>
          <div
            className={styles.spotlightIntroText}
            ref={(el) => {
              if (el) introTextElementsRef.current[1] = el;
            }}
          >
            <p>Beyond</p>
          </div> */}
        </div>

        {/* <div className={styles.spotlightBgImg} ref={bgImageRef}>
          <img
            src={items[0]?.img || "/images/projects/Project1.png"}
            alt=""
            ref={bgImageImgRef}
          />
        </div> */}

        <div
          className={styles.spotlightTitlesContainer}
          ref={titlesContainerElementRef}
        >
          <div className={styles.spotlightTitles} ref={titlesContainerRef}>
            {items.map((item, index) => (
              <h1
                key={index}
                ref={(el) => {
                  if (el) titleElementsRef.current[index] = el;
                }}
                style={{ opacity: index === 0 ? "1" : "0.25" }}
              >
                {item.name}
              </h1>
            ))}
          </div>
        </div>

        <div className={styles.spotlightImages} ref={imagesContainerRef}>
          {items.map((item, index) => (
            <div
              key={index}
              className={styles.spotlightImg}
              ref={(el) => {
                if (el) imageElementsRef.current[index] = el;
              }}
            >
              <Image
                src={item.img}
                alt={item.name}
                width={200}
                height={150}
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        <div className={styles.spotlightHeader} ref={spotlightHeaderRef}>
          <p>Specialties</p>
        </div>
      </section>
    </div>
  );
};

export default TelescopeScroll;
