export interface FeaturedProject {
  info: string;
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

const featuredProjectsContent: FeaturedProject[] = [
  {
    info: "Full Stack | Coal Logistics",
    title: "Coal Logistics",
    description:
      "A logistics management system built with React, TypeScript, Supabase, and Tailwind CSS. Features shipment tracking, transporter management, and an analytics dashboard tailored for the coal transportation industry.",
    image: "/images/projects/Project1.png",
    githubUrl: "https://github.com/SarthakGagapalliwar",
    liveUrl: "https://transport.clickbook.in/transporters",
  },
  {
    info: "Web | Swap Spot",
    title: "Swap Spot",
    description:
      "A student-exclusive marketplace built with Next.js, Prisma, MongoDB, and Cloudinary. Features include product listings with images, secure Google authentication, and a smooth, responsive user experience.",
    image: "/images/projects/Project22.png",
    githubUrl: "https://github.com/SarthakGagapalliwar/swap-spot",
    liveUrl: "https://sarthak-swapspot.vercel.app/",
  },
  {
    info: "AI-Powered | Solution",
    title: "AI Solution",
    description:
      "An AI-powered web application built with React, Tailwind CSS, and JavaScript, integrating the Gemini API to generate accurate text-based solutions. Designed for fast, reliable, and user-friendly AI interactions.",
    image: "/images/projects/Project33.png",
    githubUrl: "https://github.com/SarthakGagapalliwar/React-Ai-Tool",
    liveUrl: "https://react-ai-tool-plum-eight.vercel.app/",
  },
];

export default featuredProjectsContent;
