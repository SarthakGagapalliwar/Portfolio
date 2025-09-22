import { Home, User, Briefcase, FileText } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

export function NavBarDemo() {
  const navItems = [
    { name: "Main", url: "#", icon: Home },
    { name: "Projects", url: "#", icon: Briefcase },
    { name: "Skills", url: "#", icon: User },
    { name: "Footer", url: "#", icon: FileText },
  ];

  return <NavBar items={navItems} />;
}

export default NavBarDemo;
