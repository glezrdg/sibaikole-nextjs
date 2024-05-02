import Slider from "./components/slider";

const items = [
  {
    title: "Proyectos Arquitectónicos",
    description:
      " ¡Transforma tus sueños en realidad con nuestro servicio de Diseño Arquitectónico! Con una combinación de creatividad y experiencia, creamos espacios que cautivan, inspiran y funcionan a la perfección.Desde renovaciones elegantes hasta proyectos comerciales impresionantes, estamos aquí para dar vida a tu visión. ",
    lastSentence: "¡Déjanos diseñar un futuro extraordinario para ti!",
    url: "/img/ruler.webp",
  },
  {
    title: "Construcción",
    description:
      "Construyendo Sueños, Bloque a Bloque. En cada fase de la construcción, desde la excavación fundacional hasta el broche final de los detalles, nuestro compromiso es dar vida a tu visión. Calidad suprema y precisión son los pilares que garantizan estructuras que no solo son robustas sino que también cuentan la historia de tus aspiraciones.",
    lastSentence: "Forjamos realidad con integridad y arte.",
    url: "/img/construction.webp",
  },
  {
    title: "Remodelaciones",
    description:
      "Espacios Renovados, Vidas Transformadas. Revitalizamos tu entorno con una fusión de habilidad y creatividad sin igual. Hogares y negocios se transforman bajo nuestro toque, emergiendo como espacios optimizados y estilizados que reflejan tus necesidades y personalidad.",
    lastSentence: "Cada renovación es un renacer.",
    url: "/img/remodelation.webp",
  },
  {
    title: "Supervisión",
    description:
      "Tu Paz Mental es Nuestro Compromiso. Nuestro equipo de supervisión asegura que cada fase de tu proyecto se ejecuta a la altura de tus expectativas. Profesionalismo y eficiencia son las constantes que nos permiten entregar resultados que superan la definición de impecable.",
    lastSentence: "Vigilamos cada detalle; tú solo disfruta el resultado.",
    url: "/img/supervision.webp",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative xl:h-[100vh] lg:h-[100vh] w-full flex flex-col items-center justify-evenly background2"
      aria-label="Skills" // General description of the section
    >
      <div className="absolute top-0 bottom-0 -right-[16vw] -z-10 -left-[16vw] background2 lg:hidden max-sm:hidden md:hidden xl:flex"></div>

      <div className="text-center h-1/3 flex flex-col items-center justify-center max-lg:h-[25vh]">
        <span className="bg-[#7f2627] text-zinc-200 p-2 text-sm">
          ¿Qué sabemos hacer?
        </span>
        <h1 className="font-semibold mt-2 text-5xl max-md:text-4xl">
          Servicios que brindamos
        </h1>
      </div>

      <div
        className="h-[70vh] xl:h-[50vh] w-full  lg:w-[70vw] xl:w-[70vw] 2xl:w-[50vw]"
        aria-roledescription="carousel" // Indicates the role of this component as a carousel
      >
        <Slider items={items} aria-label="Our Skills Slider" />
        {/* Ensure Slider component supports aria-label and is keyboard navigable */}
      </div>
    </section>
  );
};

export default Skills;
