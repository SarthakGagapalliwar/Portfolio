"use client";

import React, { useState } from "react";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ShareLink {
  icon: LucideIcon;
  href?: string;
  onClick?: () => void;
  label?: string;
}

interface ShareButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  links: ShareLink[];
  children: React.ReactNode;
}

const ShareButton = ({
  className,
  links,
  children,
  ...props
}: ShareButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button
        className={cn(
          "relative min-w-40 rounded-3xl z-10",
          "bg-white dark:bg-black",
          "hover:bg-gray-50 dark:hover:bg-gray-950",
          "text-black dark:text-white",
          "border border-black/10 dark:border-white/10",
          "transition-all duration-300 ease-in-out",
          isHovered ? "opacity-0 pointer-events-none" : "opacity-100",
          className
        )}
        {...props}
      >
        <span className="flex items-center gap-2">{children}</span>
      </Button>

      <div className="absolute left-0 top-0 flex h-10 z-20">
        {links.map((link, index) => {
          const Icon = link.icon;
          return (
            <button
              type="button"
              key={index}
              onClick={link.onClick}
              title={link.label}
              className={cn(
                "h-10 w-10",
                "flex items-center justify-center",
                "bg-black dark:bg-white",
                "text-white dark:text-black",
                "transition-all duration-300 ease-out",
                index === 0 && "rounded-l-3xl",
                index === links.length - 1 && "rounded-r-3xl",
                "border-r border-white/20 last:border-r-0 dark:border-black/20",
                "hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-110",
                isHovered
                  ? "translate-x-0 opacity-100 pointer-events-auto"
                  : "-translate-x-full opacity-0 pointer-events-none",
                // Staggered animation delays
                index === 0 && "transition-all duration-200",
                index === 1 && "transition-all duration-200 delay-[50ms]",
                index === 2 && "transition-all duration-200 delay-[100ms]",
                index === 3 && "transition-all duration-200 delay-[150ms]"
              )}
            >
              <Icon className="size-4" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ShareButton;
