"use client";

import WrapButton from "@/components/ui/wrap-button";
import { Camera } from "lucide-react";
import { CustomCrowd, DemoSkiper39 } from "@/pages/bottomPage";
import React from "react";

const page = () => {
  return (
    <div>
      <WrapButton>CV</WrapButton>
      <div className="">
        <CustomCrowd />
      </div>
      {/* <DemoSkiper39 /> */}
    </div>
  );
};

export default page;
