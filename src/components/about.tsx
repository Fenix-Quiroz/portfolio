export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-20md:py-32 relative overflow-hidden min-h-screen flex items-center"
    >
      <div
        className="absolute inset-0  bg-contain bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url(/bg-stars.png)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#eaeaea] mb-6 text-center">
            SOBRE MÍ
          </h2>
          <div className="w-16 h-1 gradient-accent mx-auto rounded-full"></div>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="max-w-3xl">
            <p className="text-lg text-[#999999] leading-relaxed mb-6">
              Soy un chico que al inicio no sabía qué estudiar. Todo cambió
              gracias a mi hermano menor, quien se interesó por la programación
              y con el tiempo logró conseguir trabajo en ese ámbito. Como yo aún
              no tenía claro qué camino seguir, decidí investigar más sobre este
              mundo de la programación. Comencé por mi cuenta y luego realicé
              cursos en CoderHouse, los cuales me ayudaron a dar mis primeros
              pasos. Aun así, sentía que necesitaba más práctica, por lo que
              continué aprendiendo de forma autodidacta. Más adelante ingresé a
              un bootcamp de LemonCode, recomendado por Midudev, donde pude
              reforzar mis conocimientos y mi forma de pensar como
              desarrollador.
            </p>
            <p className="text-lg text-[#999999] leading-relaxed mb-6">
              Al principio me costó bastante entender muchos conceptos, pero me
              llamaba mucho la atención poder crear cosas que antes solo usaba,
              como un login, un formulario y otras funcionalidades. Más
              adelante, cuando empecé con JavaScript, se me complicó bastante,
              pero con práctica fui agarrando el ritmo.
            </p>
            <p className="text-lg text-[#999999] leading-relaxed">
              Hoy en día estoy en busca de mi primer trabajo como desarrollador.
              Estoy emocionado y, al mismo tiempo, con un poco de miedo, pero sé
              que solo tengo que seguir esforzándome y continuar aprendiendo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
