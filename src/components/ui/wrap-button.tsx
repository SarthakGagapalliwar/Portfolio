import React from "react";
import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";

import { cn } from "@/lib/utils";

interface WrapButtonProps {
  className?: string;
  children: React.ReactNode;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

const WrapButton: React.FC<WrapButtonProps> = ({
  className,
  children,
  href,
  target = "_self",
}) => {
  return (
    <div className="flex items-center justify-center">
      {href ? (
        <Link href={href} target={target}>
          <div
            className={cn(
              "group cursor-pointer border border-[var(--border)] bg-[var(--base-450)] gap-3 min-h-[56px] flex items-center px-5 py-2 rounded-full",
              className
            )}
          >
            <div className="border border-[var(--border)] bg-transparent min-h-[44px] px-4 rounded-full flex items-center justify-center text-white">
              <Globe className="mx-2 animate-spin" />
              <p className="font-medium text-[0.95rem] tracking-tight mr-2">
                {children ? children : "CV"}
              </p>
            </div>
            <div className="text-[var(--base-350)] group-hover:ml-2 ease-in-out transition-all size-[30px] flex items-center justify-center rounded-full border-2 border-[var(--border)]  ">
              <ArrowRight
                size={18}
                className="group-hover:rotate-45 ease-in-out transition-all "
              />
            </div>
          </div>
        </Link>
      ) : (
        <div
          className={cn(
            "group cursor-pointer border border-[var(--border)] bg-[var(--base-450)] gap-3 min-h-[56px] flex items-center px-5 py-2 rounded-full",
            className
          )}
        >
          <div className="border border-[var(--border)] bg-transparent min-h-[44px] px-4 rounded-full flex items-center justify-center text-white">
            <Globe className="mx-2 animate-spin" />
            <p className="font-medium text-[0.95rem] tracking-tight mr-2">
              {children ? children : "CV"}
            </p>
          </div>
          <div className="text-[var(--base-350)] group-hover:ml-2 ease-in-out transition-all size-[30px] flex items-center justify-center rounded-full border-2 border-[var(--border)]  ">
            <ArrowRight
              size={18}
              className="group-hover:rotate-45 ease-in-out transition-all "
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WrapButton;
