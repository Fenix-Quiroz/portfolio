import { socialNetworks } from "@/consts";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Avatar */}
        <div className="flex justify-center order-1 md:order-2">
          <div className="w-52 h-52 md:w-64 md:h-64 rounded-full bg-linear-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 border border-[#333333] flex items-center justify-center">
            <div className="w-48 h-48 md:w-60 md:h-60 rounded-full bg-[#252525] flex items-center justify-center">
              <Image
                src="/profile.png"
                alt="Avatar"
                width={400}
                height={400}
                priority
                className="w-48 h-48 md:w-60 md:h-60 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 md:space-y-8 order-2 md:order-1 text-center md:text-left">
          <div>
            <h1 className="text-gradient text-4xl md:text-6xl font-bold">
              Front-end Developer
            </h1>
            <p className="text-2xl md:text-4xl font-bold text-[#999999] mt-2 text-balance">
              especializado en React y Next.js, con experiencia en aplicaciones
              con IA y consumo de APIs
            </p>
          </div>
          <div className="flex gap-6 justify-center md:justify-start">
            {socialNetworks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#252525] border border-[#333333] flex items-center justify-center text-[#999999] hover:text-pink-500 hover:border-pink-500/50 transition-colors"
                title={social.name}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={25}
                  height={25}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
