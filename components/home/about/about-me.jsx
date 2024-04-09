import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const About = () => {
  return (
    <section
      id="about"
      className="h-[150vh] md:h-[120vh] max-sm:h-full flex flex-col justify-evenly"
      aria-label="About Us" // Labeling the section for better context
    >
      <div className="text-center mt-10">
        <span className="bg-[#7f2627] text-zinc-100 p-1">Historia</span>
        <h2 className="text-5xl max-md:text-4xl max-sm:mt-2 font-semibold xl:mt-5 lg:mt-2 md:mt-0">
          Te contamos de donde venimos
        </h2>
      </div>
      <div className="flex flex-col items-center px-5 mt-5 md:m-0 overflow-y-scroll h-[60vh]">
        <div className="text-xs md:text-lg lg:text-lg text-justify font-semibold text-balance grid md:grid-cols-1 lg:grid-cols-2 gap-5">
          <p className="el-p">
            Desde las vibrantes calles de Manzanillo, Cuba, hasta el corazón
            cultural de la República Dominicana, la historia de SibaIkole y su
            fundador, el Arq. Germán González González, es una odisea
            arquitectónica que atraviesa continentes, culturas y décadas de
            innovación. Nacido en 1961 y graduado de la Universidad del Oriente
            en Santiago de Cuba, el Arq. González ha llevado su pasión por el
            diseño y la arquitectura a través de fronteras y océanos, dejando
            una marca indeleble en cada proyecto que toca.
          </p>
          <p>
            El origen de SibaIkole se nutrió del ingenio y la imaginación del
            Arq. González entre 1989 y 2001 en Cuba. Durante estos años en
            Bayamo, se dedicó a redefinir el paisaje urbano, diseñando viviendas
            accesibles que rompían con el diseño convencional y transformando
            espacios para usos variados, desde residenciales hasta comerciales.
            Cada uno de sus proyectos, desde amplios esquemas urbanísticos hasta
            el minucioso diseño de una cafetería, era una expresión de su visión
            por enriquecer la vida cotidiana a través de espacios que combinan
            funcionalidad y estética.
          </p>
          <p className="">
            Pero el viaje apenas comenzaba. En 1992, el destino llevó al Arq.
            González a Angola, donde su habilidad para transformar y reimaginar
            espacios se manifestó en la remodelación de las oficinas y talleres
            de la radio y televisión de Luanda, la residencia del Gobernador, y
            un hospital de 100 camas. Estos proyectos no solo fueron retos
            arquitectónicos; fueron también encuentros con culturas y
            comunidades, aprendiendo y adaptando su enfoque para cumplir con las
            necesidades locales sin perder su distintivo toque de innovación.
          </p>

          <p>
            Al regresar al Caribe, esta vez a la República Dominicana, el Arq.
            González continuó expandiendo su visión a través de Orbitarq y luego
            como contratista independiente, colaborando en proyectos de alto
            perfil como Las Terrazas en Piantini y villas de lujo en Cap Cana
            Juanillo Bay. Su obra en la República Dominicana es un testimonio de
            su capacidad para liderar y ejecutar proyectos complejos, desde
            torres empresariales en la emblemática esquina Churchill hasta la
            creación de espacios residenciales que combinan lujo y
            funcionalidad.
          </p>
          <p>
            La creación de SibaIkole SRL marcó el comienzo de un nuevo capítulo,
            uniendo bajo una sola firma la rica herencia de experiencia, la
            visión arquitectónica innovadora y un compromiso con la excelencia
            en diseño, construcción y remodelación. Cada proyecto, ya sea un
            salón spa, una farmacia o viviendas residenciales, es una narrativa
            de transformación y belleza, un equilibrio entre funcionalidad y
            estética.
          </p>
          <p>
            SibaIkole, bajo la guía visionaria del Arq. Germán González
            González, es más que una firma de arquitectura; es una historia de
            pasión por la arquitectura, un legado de innovación y un puente
            entre culturas y comunidades. A través de cada línea, plano y
            espacio creado, SibaIkole invita a experimentar la arquitectura no
            solo como estructuras, sino como escenarios de vida, sueños y
            futuros posibles. Bienvenidos al mundo de SibaIkole, donde cada
            proyecto es una página en nuestra historia colectiva, escrita con el
            lenguaje universal de la belleza y la innovación.
          </p>
        </div>
      </div>
      <div className="grid xl:grid-cols-4 xl:place-items-start lg:gap-3 lg:place-items-center md:grid-cols-4 md:place-items-center w-full font-bold max-sm:grid-cols-2 max-sm:px-5">
        <a
          className="text-2xl lg:text-3xl max-sm:text-lg font-bold flex items-center hover:text-[#4267B2] hover:scale-105 transition-all"
          href="https://www.facebook.com/profile.php?id=100083310222111"
          aria-label="Follow us on Facebook" // Adding an aria-label for screen readers
        >
          <FaFacebook aria-hidden="true" />
          <span className="ml-3">Facebook</span>
        </a>

        <a
          className="text-2xl lg:text-3xl max-sm:text-lg font-bold flex items-center hover:text-[#E1306C] hover:scale-105 transition-all"
          href="https://www.instagram.com/sibaikole/"
          aria-label="Follow us on Instagram" // Adding an aria-label for screen readers
        >
          <AiFillInstagram aria-hidden="true" />
          <span className="ml-3">Instagram</span>
        </a>

        <a
          className="text-2xl lg:text-3xl max-sm:text-lg font-bold flex items-center hover:text-[#25D366] hover:scale-105 transition-all"
          href="https://wa.me/18494909772"
          aria-label="Contact us on Whatsapp" // Adding an aria-label for screen readers
        >
          <IoLogoWhatsapp aria-hidden="true" />
          <span className="ml-2">Whatsapp</span>
        </a>

        <div>
          <h2 className="text-3xl max-sm:text-lg font-bold">
            Santo Domingo, R.D.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default About;
