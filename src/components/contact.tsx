import { socialsNetworks } from "@/consts";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#eaeaea] mb-6">
            Contacto
          </h2>
          <div className="w-16 h-1 gradient-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-[#eaeaea] mb-4 flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-pink-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                Email
              </h3>
              <a
                href="mailto:fenixquiroz10@gmail.com"
                className="text-pink-500 hover:text-pink-400 transition-colors"
              >
                fenixquiroz10@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#eaeaea] mb-4">
                Redes Sociales
              </h3>
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

          {/* Decorative Circle */}
          <div className="relative hidden md:flex items-center justify-center">
            <div className="absolute w-64 h-64 rounded-full bg-linear-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 blur-3xl opacity-50"></div>
            <div className="relative text-center">
              <div className="flex justify-center mb-6">
                <div className="relative w-20 h-20 antenna-waves flex items-center justify-center">
                  <Image
                    src="/antenna-icon.png"
                    alt="antenna"
                    width={80}
                    height={70}
                    className="w-16 h-16 filter brightness-0 invert opacity-90"
                  />
                </div>
              </div>
              <p className="text-[#999999] text-sm">
                ¿Listo para trabajar juntos?
              </p>
              <p className="text-[#eaeaea] text-lg font-semibold mt-2">
                Ponte en contacto conmigo
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 text-center text-[#666666] text-sm">
          <p>© 2026 Mi Portafolio. Todos los derechos reservados.</p>
        </div>
      </div>
    </section>
  );
}
