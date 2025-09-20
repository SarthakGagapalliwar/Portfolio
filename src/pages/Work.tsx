import React from "react";
import PlatformShowcase from "./Work/platfrom";
import { NavBarDemo } from "./Mainpage/navbar";

function Work() {
  return (
    <>
      <NavBarDemo />
      <div className="min-h-screen">
        <PlatformShowcase />
      </div>
      <div>
        
      </div>
    </>
  );
}

export default Work;
