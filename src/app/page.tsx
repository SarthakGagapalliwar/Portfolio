"use client";

import WrapButton from "@/components/ui/wrap-button";
import { Camera } from "lucide-react";
import { CustomCrowd, DemoSkiper39 } from "@/pages/footer/footertBottm";
import React from "react";
import DemoOne from "@/pages/footer/footerUperr";

const page = () => {
  return (
    <div>
      {/* <WrapButton>CV</WrapButton> */}
      <div className="">
        <DemoOne/>
        <CustomCrowd />
      </div>
      {/* <DemoSkiper39 /> */}
    </div>
  );
};

export default page;
