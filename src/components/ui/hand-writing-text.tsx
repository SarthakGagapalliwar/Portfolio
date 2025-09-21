"use client";

import { motion } from "framer-motion";
interface HandWrittenTitleProps {
  title?: string;
  subtitle?: string;
}

function HandWrittenTitle({
  title = "Hand Written",
  subtitle = "Optional subtitle",
}: HandWrittenTitleProps) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: 3.5,
          ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
        },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto py-4 sm:py-8 md:py-12 lg:py-16 px-2 sm:px-4  md:px-6">
      {/* SVG Container with better mobile sizing */}
      <div className="relative w-full" style={{ aspectRatio: "2/1" }}>
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 600"
          initial="hidden"
          animate="visible"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          <title>Sarthak</title>
          <motion.path
            d="M 950 90 
                           C 1250 300, 1050 480, 600 520
                           C 250 520, 150 480, 150 300
                           C 150 120, 350 80, 600 80
                           C 850 80, 950 180, 950 180"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
            className="text-black opacity-80"
            strokeWidth="8"
            style={{
              strokeWidth: "clamp(3px, 0.8vw, 8px)",
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
            }}
          />
        </motion.svg>

        {/* Text positioned absolutely over the SVG */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <motion.h1
            className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-bold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ textShadow: "0 1px 2px rgba(255,255,255,0.8)" }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              className="text-xs sm:text-sm md:text-base lg:text-lg text-black/70 mt-1 sm:mt-2 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              style={{ textShadow: "0 1px 2px rgba(255,255,255,0.8)" }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
}

export { HandWrittenTitle };
