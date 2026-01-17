import { socialsNetworks } from "@/consts";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="px-6 py-20 md:py-25">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Avatar */}
        <div className="flex justify-start md:justify-center">
          <div className="w-64 h-64 rounded-full bg-linear-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 border border-[#333333] flex items-center justify-center">
            <div className="w-60 h-60 rounded-full bg-[#252525] flex items-center justify-center">
              <Image
                src="/profile.png"
                alt="Avatar"
                width={400}
                height={400}
                className="w-62 h-62 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#eaeaea] mb-4 text-balance">
              Hola, soy un desarrollador
            </h1>
            <span className="text-gradient text-5xl md:text-6xl font-bold ">
              Front-end Developer
            </span>
          </div>
          <p className="text-lg text-[#999999] leading-relaxed max-w-xl">
            Soy un aficionado por la programación y por la astronomía.
          </p>
          <div>
            <div className="flex gap-6">
              {socialsNetworks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blanck"
                  className="w-10 h-10 rounded-full bg-[#252525] border border-[#333333] flex items-center justify-center text-[#999999] hover:text-pink-500 hover:border-pink-500/50 transition-colors"
                  title={social.name}
                >
                  <span className="text-xs font-bold">
                    <Image
                      className="text-slate-500"
                      src={social.icon}
                      alt={social.name}
                      width={25}
                      height={25}
                    />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
