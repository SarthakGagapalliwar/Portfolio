import React from "react";
import Stairs from "./Mainpage/Stairs";

function Main() {
  return (
    <div>
      <Stairs>
        {/* Your main page content goes here */}
        <div className="min-h-screen bg-gray-50">
          <h1 className="text-4xl font-bold text-center pt-20">
            Welcome to My Portfolio
          </h1>
        </div>
      </Stairs>
    </div>
  );
}

export default Main;
