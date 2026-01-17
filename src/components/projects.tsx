import { projects } from "@/consts";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 md:py-32 bg-[#222222]/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#eaeaea] mb-6">
            MIS PROYECTOS
          </h2>
          <div className="w-16 h-1 gradient-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#252525] rounded-lg overflow-hidden border border-[#333333]  transition-colors group"
            >
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-[#1c1c1c] border-b border-[#333333] overflow-hidden">
                <Image
                  width={1200}
                  height={675}
                  src={project.screenshot}
                  alt={project.title}
                  className="w-full h-full object-fit group-hover:scale-105 transition-transform"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-[#eaeaea]">
                  {project.title}
                </h3>
                <p className="text-[#999999]">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#333333] text-[#eaeaea] text-xs rounded-full border border-[#555555]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-[#333333]">
                  <a
                    href={project.demo}
                    target="_blanck"
                    className="text-gradient-accent bg-[#333333] p-2 px-3 rounded-full hover:text-pink-400 transition-colors text-sm font-medium"
                  >
                    Ver Demo →
                  </a>
                  <a href={project.github} target="_blanck">
                    <Image
                      src="/github.svg"
                      alt="GitHub"
                      width={25}
                      height={25}
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
