import React from "react";
import TelescopeScroll, { SpotlightItem } from "./TelescopeScroll";

// Example usage with custom items
const customItems: SpotlightItem[] = [
  { name: "React", img: "/images/Icon/rrr.png" },
  { name: "Next.js", img: "/images/Icon/nextjs.png" },
  { name: "TypeScript", img: "/images/Icon/TypeScript.png" },
  { name: "Node.js", img: "/images/Icon/nodejs.png" },
  { name: "MongoDB", img: "/images/Icon/mongodb.png" },
  { name: "Tailwind", img: "/images/Icon/tailwind.png" },
  { name: "Git", img: "/images/Icon/giticon.png" },
  { name: "VS Code", img: "/images/Icon/vscode.png" },
  { name: "Postman", img: "/images/Icon/Postman.png" },
  { name: "C++", img: "/images/Icon/c-.png" },
];

const SkillsPage: React.FC = () => {
  return (
    <div>
      {/* Using the telescope component with custom items */}
      <TelescopeScroll
        items={customItems}
        config={{
          gap: 0.08,
          speed: 0.3,
          arcRadius: 500,
        }}
      />

      {/* Or use with default items */}
      {/* <TelescopeScroll /> */}
    </div>
  );
};

export default SkillsPage;
