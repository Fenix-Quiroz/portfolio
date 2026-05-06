export const navItems = [
  { label: "Inicio", href: "#hero" },
  { label: "Proyectos", href: "#projects" },
  { label: "Habilidades", href: "#skills" },
  { label: "Sobre mí", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "DevGenius",
    description: "Utilidades inteligentes para desarrolladores modernos.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Google AI Studio"],
    demo: "https://dev-genius-mdoo.vercel.app/",
    github: "https://github.com/Fenix-Quiroz/dev-genius",
    screenshot: "/screenshots-projects/dev-genius.png",
  },
  {
    id: 2,
    title: "Manga Creator AI",
    description:
      "Aplicación que genera historias dinámicas usando IA en base a inputs del usuario, simulando narrativa interactiva.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Google AI Studio"],
    demo: "https://manga-creator-zeta.vercel.app/",
    github: "https://github.com/Fenix-Quiroz/manga-creator",
    screenshot: "/screenshots-projects/manga-creator.png",
  },
];

export const skills = [
  // Sol (centro)
  { name: "React", x: "50%", y: "50%", borderColor: "#61DAFB" },

  // Órbita interna
  { name: "Figma", x: "24%", y: "30%", borderColor: "#A259FF" },
  { name: "Git", x: "20%", y: "56%", borderColor: "#F05032" },
  { name: "CSS", x: "27%", y: "78%", borderColor: "#1572B6" },
  { name: "JavaScript", x: "40%", y: "70%", borderColor: "#F7DF1E" },
  { name: "TypeScript", x: "38%", y: "40%", borderColor: "#3178C6" },

  // Órbita externa (reflejo horizontal de la interna)
  { name: "Next.js", x: "76%", y: "30%", borderColor: "#ffffff" },
  { name: "Tailwind", x: "80%", y: "56%", borderColor: "#38BDF8" },
  { name: "Node.js", x: "73%", y: "78%", borderColor: "#3C873A" },
  { name: "GitHub", x: "60%", y: "70%", borderColor: "#eaeaea" },
  { name: "HTML", x: "62%", y: "40%", borderColor: "#E34F26" },
];

export const socialNetworks = [
  {
    name: "GitHub",
    icon: "/github.svg",
    href: "https://github.com/Fenix-Quiroz",
  },
  {
    name: "LinkedIn",
    icon: "/linkedin.svg",
    href: "https://www.linkedin.com/in/fenix-quiroz-b7b960240/",
  },
];
