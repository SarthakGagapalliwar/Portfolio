import React from "react";
import Stairs from "./Mainpage/Stairs";
import { NavBarDemo } from "./Mainpage/navbar";
import { HandWrittenTitleDemo } from "./Mainpage/Name";
import DemoOne from "./Mainpage/Sidename";

function Main() {
  return (
    <div>
      <NavBarDemo />
      <Stairs>
        {/* Main page content with Name and Sidename components */}
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full max-w-6xl px-4">
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
