"use client";
import "./Nav.css";

import {
  useEffect,
  useState,
  useCallback,
  useRef,
  useLayoutEffect,
} from "react";
import { useRouter } from "next/navigation";

import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import SplitText from "gsap/SplitText";
import { useLenis } from "lenis/react";

import MenuBtn from "../MenuBtn/MenuBtn";
import { useViewTransition } from "@/hooks/useViewTransition";

gsap.registerPlugin(SplitText);

const Nav: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isNavigating, setIsNavigating] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const isInitializedRef = useRef<boolean>(false);
  const splitTextRefs = useRef<any[]>([]);
  const router = useRouter();
  const lenis = useLenis();

  const { navigateWithTransition } = useViewTransition();

  useEffect(() => {
    if (lenis) {
      if (isOpen) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
  }, [lenis, isOpen]);

  useLayoutEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create(
      "hop",
      "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1"
    );
  }, []);

  useLayoutEffect(() => {
    if (menuRef.current) {
      const menu = menuRef.current;

      splitTextRefs.current.forEach((split) => {
        if (split.revert) split.revert();
      });
      splitTextRefs.current = [];

      gsap.set(menu, {
        clipPath: "circle(0% at 50% 50%)",
      });

      const h2Elements = menu.querySelectorAll("h2");
      const pElements = menu.querySelectorAll("p");
      // Specifically target social anchor links so we can animate their text too
      const anchorElements = menu.querySelectorAll(".socials .menu-meta a");

      h2Elements.forEach((h2, index) => {
        const split = SplitText.create(h2, {
          type: "lines",
          mask: "lines",
          linesClass: "split-line",
        });

        gsap.set(split.lines, { y: "120%", opacity: 0 });

        split.lines.forEach((line: Element) => {
          (line as HTMLElement).style.pointerEvents = "auto";
        });

        splitTextRefs.current.push(split);
      });

      pElements.forEach((p) => {
        // If this <p> contains an <a>, we'll split the <a> instead to avoid nested/duplicate splits
        if (p.querySelector("a")) return;

        const split = SplitText.create(p, {
          type: "lines",
          mask: "lines",
          linesClass: "split-line",
        });

        gsap.set(split.lines, { y: "120%", opacity: 0 });

        split.lines.forEach((line: Element) => {
          (line as HTMLElement).style.pointerEvents = "auto";
        });

        splitTextRefs.current.push(split);
      });

      // Split and prepare the social anchor text for animation (prevents flashing before animation)
      anchorElements.forEach((a) => {
        const split = SplitText.create(a as HTMLElement, {
          type: "lines",
          mask: "lines",
          linesClass: "split-line",
        });

        gsap.set(split.lines, { y: "120%", opacity: 0 });

        split.lines.forEach((line: Element) => {
          (line as HTMLElement).style.pointerEvents = "auto";
        });

        splitTextRefs.current.push(split);
      });

      isInitializedRef.current = true;
    }
  }, []);

  const animateMenu = useCallback((open: boolean) => {
    if (!menuRef.current) {
      return;
    }

    const menu = menuRef.current;

    setIsAnimating(true);

    if (open) {
      document.body.classList.add("menu-open");

      gsap.to(menu, {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power3.out",
        duration: 2,
        onStart: () => {
          menu.style.pointerEvents = "all";

          splitTextRefs.current.forEach((split, index) => {
            gsap.to(split.lines, {
              y: "0%",
              opacity: 1,
              stagger: 0.05,
              delay: 0.35 + index * 0.1,
              duration: 1,
              ease: "power4.out",
            });
          });
        },
        onComplete: () => {
          setIsAnimating(false);
        },
      });
    } else {
      const textTimeline = gsap.timeline({
        onStart: () => {
          gsap.to(menu, {
            clipPath: "circle(0% at 50% 50%)",
            ease: "power3.out",
            duration: 1,
            delay: 0.75,
            onComplete: () => {
              menu.style.pointerEvents = "none";

              splitTextRefs.current.forEach((split) => {
                gsap.set(split.lines, { y: "120%", opacity: 0 });
              });

              document.body.classList.remove("menu-open");

              setIsAnimating(false);
              setIsNavigating(false);
            },
          });
        },
      });

      splitTextRefs.current.forEach((split, index) => {
        textTimeline.to(
          split.lines,
          {
            y: "-120%",
            opacity: 0,
            stagger: 0.03,
            delay: index * 0.05,
            duration: 1,
            ease: "power3.out",
          },
          0
        );
      });
    }
  }, []);

  useEffect(() => {
    if (isInitializedRef.current) {
      animateMenu(isOpen);
    }
  }, [isOpen, animateMenu]);

  const toggleMenu = useCallback(() => {
    if (!isAnimating && isInitializedRef.current && !isNavigating) {
      setIsOpen((prevIsOpen) => {
        return !prevIsOpen;
      });
    }
  }, [isAnimating, isNavigating]);

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();

      const currentPath = window.location.pathname;
      if (currentPath === href) {
        if (isOpen) {
          setIsOpen(false);
        }
        return;
      }

      if (isNavigating) return;

      setIsNavigating(true);
      navigateWithTransition(href);
    },
    [isNavigating, router, isOpen, setIsOpen, navigateWithTransition]
  );

  const handleSkillsClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      if (isNavigating) return;

      // Close the menu first
      setIsOpen(false);

      // Wait for menu to close, then scroll to skills section
      setTimeout(() => {
        const skillsSection = document.getElementById("skills");
        if (skillsSection && lenis) {
          lenis.scrollTo(skillsSection, {
            duration: 2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        } else if (skillsSection) {
          // Fallback if lenis is not available
          skillsSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 1000); // Wait for menu close animation
    },
    [isNavigating, lenis]
  );

  const handleProjectsClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      if (isNavigating) return;

      // Close the menu first
      setIsOpen(false);

      // Wait for menu to close, then scroll to projects section
      setTimeout(() => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection && lenis) {
          lenis.scrollTo(projectsSection, {
            duration: 2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        } else if (projectsSection) {
          // Fallback if lenis is not available
          projectsSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 1000); // Wait for menu close animation
    },
    [isNavigating, lenis]
  );

  const handleSendMessageClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      if (isNavigating) return;

      // Close the menu first
      setIsOpen(false);

      // Wait for menu to close, then scroll to contact form section
      setTimeout(() => {
        const connectSection = document.getElementById("connect");
        if (connectSection && lenis) {
          lenis.scrollTo(connectSection, {
            duration: 2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        } else if (connectSection) {
          // Fallback if lenis is not available
          connectSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 1000); // Wait for menu close animation
    },
    [isNavigating, lenis]
  );

  const handleConnectClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      if (isNavigating) return;

      // Close the menu first
      setIsOpen(false);

      // Wait for menu to close, then scroll to footer section
      setTimeout(() => {
        // Scroll to bottom of page (footer)
        if (lenis) {
          lenis.scrollTo("bottom", {
            duration: 2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        } else {
          // Fallback if lenis is not available
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }
      }, 1000); // Wait for menu close animation
    },
    [isNavigating, lenis]
  );

  const splitTextIntoSpans = (text: string) => {
    return text
      .split("")
      .map((char, index) =>
        char === " " ? (
          <span key={index}>&nbsp;&nbsp;</span>
        ) : (
          <span key={index}>{char}</span>
        )
      );
  };

  return (
    <div>
      <MenuBtn isOpen={isOpen} toggleMenu={toggleMenu} />
      <div className="menu" ref={menuRef}>
        <div className="menu-wrapper">
          <div className="col col-1">
            <div className="links">
              <div className="link">
                <a href="/" onClick={(e) => handleLinkClick(e, "/")}>
                  <h2>Index</h2>
                </a>
              </div>
              <div className="link">
                <a href="#projects" onClick={(e) => handleProjectsClick(e)}>
                  <h2>Projects</h2>
                </a>
              </div>
              <div className="link">
                <a href="#skills" onClick={(e) => handleSkillsClick(e)}>
                  <h2>Skills</h2>
                </a>
              </div>
              {/* <div className="link">
                <a
                  href="/sample-space"
                  onClick={(e) => handleLinkClick(e, "/sample-space")}
                >
                  <h2>One Installation</h2>
                </a>
              </div> */}
              <div className="link">
                <a href="#connect" onClick={(e) => handleSendMessageClick(e)}>
                  <h2>Send Message</h2>
                </a>
              </div>
              <div className="link">
                <a href="#footer" onClick={(e) => handleConnectClick(e)}>
                  <h2>Connect</h2>
                </a>
              </div>
            </div>
          </div>
          <div className="col col-2">
            <div className="socials">
              <div className="sub-col">
                <div className="menu-meta menu-commissions">
                  <p>Commissions</p>
                  <p>sarthakgagapalliwar07@gmail.com</p>
                  <p>+91 7028934655</p>
                </div>
                {/* <div className="menu-meta">
                  <p>Current Address</p>
                  <p>Lovely Professional University</p>
                  <p>Punjab, pincode 144401</p>
                </div> */}
              </div>
              <div className="sub-col">
                <div className="menu-meta">
                  <p>Social</p>
                  <p>
                    <a
                      href="https://www.instagram.com/sarthak_5109?igsh=MWZ4OXlmbDFlcTJzZA=="
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      Instagram
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://github.com/SarthakGagapalliwar"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      GitHub
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.linkedin.com/in/sarthak-gagapalliwar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      LinkedIn
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
