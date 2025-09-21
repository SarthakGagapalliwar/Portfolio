import React from "react";
import Stairs from "./Mainpage/Stairs";
import { NavBarDemo } from "./Mainpage/navbar";
import { HandWrittenTitleDemo } from "./Mainpage/Name";
import DemoOne from "./Mainpage/Sidename";
// import { Demo } from "./Mainpage/Uppertext";

function Main() {
  return (
    <div>
      <NavBarDemo />
      <Stairs>
        {/* Main page content with Uppertext, Name and Sidename components */}
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
          {/* Uppertext Component - Top */}
          <div className="w-full max-w-6xl px-4 mb-8">
            {/* <Demo /> */}
          </div>

          {/* Name and Sidename Components - Below */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 w-full max-w-6xl px-4">
            {/* Name Component - Left Side */}
            <div className="flex-1 flex justify-center">
              <HandWrittenTitleDemo />
            </div>

            {/* Sidename Component - Right Side */}
            <div className="flex-1 flex justify-center">
              <DemoOne />
            </div>
          </div>
        </div>
      </Stairs>
    </div>
  );
}

export default Main;
