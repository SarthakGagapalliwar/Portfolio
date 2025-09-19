"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

interface ProjectSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  gradientFrom: string;
  gradientTo: string;
}

function ProjectSection({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  gradientFrom,
  gradientTo,
}: ProjectSectionProps) {
  return (
    <section className="flex flex-col overflow-hidden min-h-screen snap-start">
      <ContainerScroll
        titleComponent={
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white">
              {title} <br />
              <span
                className={`text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`}
              >
                {subtitle}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              {description}
            </p>
          </div>
        }
      >
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-center"
            draggable={false}
            priority
          />
        </div>
      </ContainerScroll>
    </section>
  );
}

export function HeroSection() {
  return (
    <div className="w-full">
      {/* Project 1 - Web Development */}
      {/* Project 1 - Coal Logistics */}
      <ProjectSection
        title="Full Stack"
        subtitle="Coal Logistics"
        description="A logistics management system built with React, TypeScript, Supabase, and Tailwind CSS. Features shipment tracking, transporter management, and an analytics dashboard tailored for the coal transportation industry."
        imageSrc="/images/projects/Project1.png"
        imageAlt="Coal Logistics Management System"
        gradientFrom="from-purple-600"
        gradientTo="to-blue-600"
      />

      {/* Project 2 - Swap Spot */}
      <ProjectSection
        title="Web"
        subtitle="Swap Spot"
        description="A student-exclusive marketplace built with Next.js, Prisma, MongoDB, and Cloudinary. Features include product listings with images, secure Google authentication, and a smooth, responsive user experience."
        imageSrc="/images/projects/Project22.png"
        imageAlt="Swap Spot Marketplace Platform"
        gradientFrom="from-blue-600"
        gradientTo="to-cyan-600"
      />

      {/* Project 3 - AI/ML Project */}
      <ProjectSection
  title="AI-Powered"
  subtitle="Solution"
  description="An AI-powered web application built with React, Tailwind CSS, and JavaScript, integrating the Gemini API to generate accurate text-based solutions. Designed for fast, reliable, and user-friendly AI interactions."
  imageSrc="/images/projects/Project33.png"
  imageAlt="AI-Powered Solution with Gemini API"
  gradientFrom="from-cyan-600"
  gradientTo="to-purple-600"
/>

    </div>
  );
}
