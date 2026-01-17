import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1c1c1c]">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
