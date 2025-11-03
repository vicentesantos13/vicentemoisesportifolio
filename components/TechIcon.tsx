
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPrisma,
  SiPostgresql,
  SiRadixui,
  SiPython,
  SiDjango,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit,
  SiVercel,
  SiDigitalocean,
  SiReactquery,
  SiShadcnui,
} from "react-icons/si";
import { FiCpu } from "react-icons/fi"; 

export const techIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  React: SiReact,
  "React Native": SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  Prisma: SiPrisma,
  PostgreSQL: SiPostgresql,
  Radix: SiRadixui,
  Shadcn: SiShadcnui,         
  TanStack: SiReactquery,   
  Python: SiPython,
  Django: SiDjango,
  HTML: SiHtml5,
  CSS: SiCss3,
  JavaScript: SiJavascript,
  Git: SiGit,
  Vercel: SiVercel,
  DigitalOcean: SiDigitalocean,
};

// pequeno helper opcional
export function TechIcon({ name, className }: { name: string; className?: string }) {
  const Icon = techIconMap[name] ?? FiCpu;
  return <Icon className={className} />;
}
