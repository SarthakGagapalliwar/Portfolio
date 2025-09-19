"use client";

import React from "react";
import { HeroSection } from "@/pages/Hero/fontpart";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-black snap-y snap-mandatory overflow-y-scroll">
      <HeroSection />
    </main>
  );
};

export default HomePage;
