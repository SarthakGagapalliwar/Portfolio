"use client";
import React, { CSSProperties } from "react";
import { useViewTransition } from "@/hooks/useViewTransition";
// @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

const FooterNew: React.FC = () => {
  const { navigateWithTransition } = useViewTransition();
  const styles: Record<string, CSSProperties> = {
    footer: {
      width: "100vw",
      height: "100%",
      minHeight: "100svh",
      padding: "4em 2em 2em 2em",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      overflow: "hidden",
      backgroundColor: "var(--base-500)",
      color: "var(--base-100)",
      gap: "0",
    },
    footerRowFirst: {
      display: "flex",
      justifyContent: "space-between",
      gap: "4em",
      flexDirection: "row",
    },
    footerContact: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "1.5em",
    },
    contactTitle: {
      fontFamily: '"Rader", sans-serif',
      fontSize: "2.5rem",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      lineHeight: 1.2,
      color: "var(--base-100)",
      margin: 0,
    },
    contactSpan: {
      color: "var(--base-250)",
    },
    contactDescription: {
      fontFamily: '"Manrope", sans-serif',
      fontSize: "1rem",
      fontWeight: 600,
      color: "var(--base-250)",
      lineHeight: 1.6,
      marginBottom: "0.5em",
      WebkitFontSmoothing: "antialiased",
    },
    footerNav: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
    },
    footerNavItem: {
      width: "50%",
      padding: "1em 0",
      display: "flex",
      justifyContent: "space-between",
      borderTop: "1px dashed var(--base-300)",
      textDecoration: "none",
      color: "var(--base-100)",
      fontFamily: '"Manrope", sans-serif',
      fontSize: "1rem",
      fontWeight: 600,
      transition: "color 0.3s ease",
      cursor: "pointer",
    },
    footerNavItemLast: {
      width: "50%",
      padding: "1em 0",
      display: "flex",
      justifyContent: "space-between",
      borderTop: "1px dashed var(--base-300)",
      borderBottom: "1px dashed var(--base-300)",
      textDecoration: "none",
      color: "var(--base-100)",
      fontFamily: '"Manrope", sans-serif',
      fontSize: "1rem",
      fontWeight: 600,
      transition: "color 0.3s ease",
      cursor: "pointer",
    },
    footerRowSecond: {
      display: "flex",
      flexDirection: "column",
      gap: "2em",
    },
    footerHeader: {
      width: "100%",
      padding: "4em 0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
    },
    footerHeaderTitle: {
      position: "relative",
      left: "-0.5vw",
      fontSize: "15vw",
      fontFamily: '"Rader", sans-serif',
      fontWeight: 600,
      letterSpacing: "-0.02em",
      color: "var(--base-100)",
      margin: 0,
    },
    footerCopyrightLine: {
      width: "100%",
      padding: "0.5em 0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      borderTop: "1px dashed var(--base-300)",
    },
    copyrightText: {
  fontFamily: 'var(--font-dm-mono), "DM Mono", "JetBrains Mono", monospace',
      fontSize: "0.8rem",
      fontWeight: 600,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "var(--base-300)",
      WebkitFontSmoothing: "antialiased",
      margin: 0,
    },
    copyrightTextRight: {
  fontFamily: 'var(--font-dm-mono), "DM Mono", "JetBrains Mono", monospace',
      fontSize: "0.8rem",
      fontWeight: 600,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "var(--base-300)",
      WebkitFontSmoothing: "antialiased",
      textAlign: "right",
      margin: 0,
    },
    btn: {
      backgroundColor: "var(--base-100)",
      color: "var(--base-500)",
      border: "none",
      padding: "1em 2em",
      borderRadius: "0.4em",
  fontFamily: 'var(--font-dm-mono), "DM Mono", "JetBrains Mono", monospace',
      fontSize: "0.8rem",
      fontWeight: 600,
      cursor: "pointer",
      transition: "all 0.3s ease",
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      textDecoration: "none",
      display: "inline-block",
      WebkitFontSmoothing: "antialiased",
    },
  };

  // Media query styles for mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 1000;

  if (isMobile) {
    styles.footerRowFirst.flexDirection = "column";
    styles.footerNav.alignItems = "flex-start";
    styles.footerNavItem.width = "100%";
    styles.footerNavItemLast.width = "100%";
    styles.footerHeader.padding = "1em 0";
    styles.footer.padding = "4em 1.25em 1.25em 1.25em";
    styles.footer.gap = "2em";
  }

  return (
    <div style={styles.footer}>
      <div style={styles.footerRowFirst}>
        <div style={styles.footerContact}>
          <h3 style={styles.contactTitle}>
            Let's Collaborate <br />
            sarthakgagapalliwar07<span style={styles.contactSpan}>@</span>gmail.com
          </h3>

          <p style={styles.contactDescription}>
            From short films to full productions — I'm always open to creative
            collaborations. Feel free to reach out anytime.
          </p>

          <a
            href="#connect"
            style={styles.btn}
            onClick={(e) => {
              e.preventDefault();
              const connectSection = document.getElementById("connect");
              if (connectSection) {
                connectSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
          >
            Get in Touch
          </a>
        </div>

        <div style={styles.footerNav}>
          <a
            href={
              process.env.NEXT_PUBLIC_LINKEDIN_URL ||
              "https://www.linkedin.com/in/sarthak-gagapalliwar/"
            }
            style={styles.footerNavItem}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LinkedIn</span>
            <span>→</span>
          </a>

          <a
            href={
              process.env.NEXT_PUBLIC_GITHUB_URL ||
              "https://github.com/SarthakGagapalliwar"
            }
            style={styles.footerNavItem}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GitHub</span>
            <span>→</span>
          </a>

          <a
            href={
              process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
              "https://www.instagram.com/sarthak_5109?igsh=MWZ4OXlmbDFlcTJzZA=="
            }
            style={styles.footerNavItem}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Instagram</span>
            <span>→</span>
          </a>

          <a
            href={
              process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
              "https://open.spotify.com/playlist/0rRn2ioPSPZDhKuILxDrS8?si=2daCB8FuSEuhrgD8Tq25ag&pt=6751338d9112dc24a91254516b908ff3&pi=abVvUbxMS4uiv"
            }
            style={styles.footerNavItemLast}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Spotify</span>
            <span>→</span>
          </a>

          {/* <a href="/faq" style={styles.footerNavItemLast}>
            <span>FAQ</span>
            <span>→</span>
          </a> */}
        </div>
      </div>

      <div style={styles.footerRowSecond} id="Footer">
        <div style={styles.footerHeader}>
          <h1 style={styles.footerHeaderTitle}>SARTHAK</h1>
          <h1 style={styles.footerHeaderTitle}>UI</h1>
        </div>

        <div style={styles.footerCopyrightLine}>
          <p style={styles.copyrightText}>&copy; Sarthak Gagapalliwar 2025</p>
        </div>
      </div>
    </div>
  );
};

export default FooterNew;
