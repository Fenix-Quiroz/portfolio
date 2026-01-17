import { skills } from "@/consts";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#eaeaea] mb-6">
            MIS HABILIDADES
          </h2>
          <div className="w-16 h-1 gradient-accent mx-auto rounded-full" />
        </div>

        {/* Container con fondo (mobile + desktop) */}
        <div
          className="relative w-full bg-[#222222]/30 rounded-lg border border-[#333333] overflow-hidden flex items-center justify-center"
          style={{
            backgroundImage: "url('/lines.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Mobile: grid de círculos */}
          <div className="w-full p-6 grid grid-cols-2 sm:grid-cols-3 gap-4 md:hidden">
            {skills.map((skill) => (
              <div key={skill.name} className="w-full flex justify-center">
                <div
                  className="w-20 h-20 rounded-full bg-[#252525] border-2 flex items-center justify-center"
                  style={{ borderColor: skill.borderColor }}
                >
                  <span className="text-xs font-mono text-[#ebe8e8] text-center px-2">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/*  Desktop: órbitas con posiciones absolutas */}
          <div className="relative hidden md:block w-full h-105">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: skill.x, top: skill.y }}
              >
                <div
                  className="w-22 h-22 rounded-full bg-[#252525] border-2 flex items-center justify-center hover:opacity-95 transition"
                  style={{ borderColor: skill.borderColor }}
                >
                  <span className="text-xs font-mono text-[#ebe8e8] text-center px-2">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
