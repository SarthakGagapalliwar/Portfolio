import React from "react";
import Spline from "@splinetool/react-spline";
import "./home.css";
import LiveClockUpdate from "./LiveClockUpdate";
import AnimatedButton from "@/components/ui/AnimatedButton/AnimatedButton";

const Home = () => {
  return (
    < >
      <div id="index"
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          background: "var(--base-500)",
        }}
      >
        <Spline
          scene="https://prod.spline.design/BNaurVSeS57NeyWI/scene.splinecode"
          style={{ background: "transparent" }}
          onLoad={(spline) => {
            try {
              const root = document.documentElement;
              const color = getComputedStyle(root)
                .getPropertyValue("--base-500")
                .trim();
              if (color && typeof spline?.setBackgroundColor === "function") {
                spline.setBackgroundColor(color);
              }
            } catch (_) {
              // no-op
            }
          }}
        />
      </div>

      <div className="hero-header" >
        <h1>Where design meets engineering.</h1>
        {/* <h1>By Soren</h1> */}
      </div>

      <div className="home-logo">
        {/* <FaSquareFull size="16px" style={{ color: "#fff" }} /> */}
        <AnimatedButton label="Get CV" route="/resume.pdf" animate={false} />
      </div>

      <div className="live-clock">
        <LiveClockUpdate />
      </div>
    </>
  );
};

export default Home;
