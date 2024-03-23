import React from "react";
import Image from "next/image";

// Assuming the other imports remain the same

// Import the InstagramPost component here
const images = [
  "/img/2017 project/este1.jpg",
  "/img/2017 project/este2.jpg",
  "/img/2017 project/este3.jpg",
  "/img/2017 project/este4.jpg",
  "/img/2017 project/este5.jpg",
  "/img/2017 project/este6.jpg",
  "/img/2017 project/este7.jpg",
  "/img/2017 project/este8.jpg",
  "/img/2017 project/este9.jpg",
  "/img/alameda/ana1.jpg",
  "/img/alameda/ana2.jpg",
  "/img/alameda/ana3.jpg",
  "/img/aniomis/ani1.jpg",
  "/img/aniomis/ani2.jpg",
  "/img/aniomis/ani3.jpg",
  "/img/aniomis/ani4.jpg",
  "/img/aniomis/ani5.jpg",
  "/img/aniomis/ani6.jpg",
  "/img/aniomis/ani7.jpg",
  "/img/aniomis/ani8.jpg",
  "/img/aniomis/ani9.jpg",
  "/img/aniomis/ani10.jpg",
  "/img/aniomis/ani11.jpg",
  "/img/aniomis/ani12.jpg",
  "/img/bcdc/bcdc3.jpg",
  "/img/bcdc/bcdc4.jpg",
  "/img/bcdc/bcdc5.jpg",
  "/img/bcdc/bcdc6.jpg",
  "/img/bcdc/bcdc7.jpg",
  "/img/Biocaribe/biocaribe2.jpg",
  "/img/Biocaribe/biocaribe1.jpg",
  "/img/Biocaribe/biocaribe.jpg",
  "/img/FOTOS SHEETROCK/s1.jpg",
  "/img/FOTOS SHEETROCK/s2.jpg",
  "/img/FOTOS SHEETROCK/s3.jpg",
  "/img/FOTOS SHEETROCK/s4.jpg",
  "/img/FOTOS SHEETROCK/s5.jpg",
  "/img/FOTOS SHEETROCK/s6.jpg",
  "/img/FOTOS SHEETROCK/s7.jpeg",
  "/img/FOTOS SHEETROCK/s8.jpeg",
  "/img/FOTOS SHEETROCK/s9.jpeg",
  "/img/FOTOS SHEETROCK/s10.jpeg",
  "/img/FOTOS SHEETROCK/s11.jpeg",
  "/img/FOTOS SHEETROCK/s12.jpeg",
  "/img/FOTOS SHEETROCK/s13.jpeg",
  "/img/FOTOS SHEETROCK/s14.jpg",
  "/img/hangar/hangar1.jpg",
  "/img/hangar/hangar2.jpg",
  "/img/hangar/hangar3.jpg",
  "/img/hangar/hangar4.jpg",
  "/img/hangar/hangar5.jpg",
  "/img/parque habitat/PHC.jpg",
  "/img/parque habitat/PHC 2.jpg",
  "/img/PedidosYa/foto1.jpg",
  "/img/PedidosYa/foto2.jpg",
  "/img/PedidosYa/foto3.jpg",
  "/img/PedidosYa/foto4.jpg",
  "/img/PedidosYa/foto5.jpg",
  "/img/PedidosYa/foto6.jpg",
  "/img/studio/ESTUDIO DE GRABACION 1.jpg",
  "/img/studio/ESTUDIO DE GRABACION 2.jpg",
  "/img/studio/ESTUDIO DE GRABACION 3.jpg",
  "/img/studio/ESTUDIO DE GRABACION 4.jpg",
  "/img/studio/ESTUDIO DE GRABACION 5.jpg",
  "/img/studio/ESTUDIO DE GRABACION 6.jpg",
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="xl:h-[150vh] md:h-[140vh] max-sm:h-[190vh] flex flex-col items-center justify-evenly relative "
    >
      <div className="absolute top-0 bottom-0 -right-[16vw] -z-10 -left-[16vw]  md:hidden lg:hidden max-sm:hidden xl:flex"></div>

      <div className="text-center mt-[12vh] mb-20">
        <span className="bg-[#7f2627] text-zinc-200 p-1">Portafolio</span>
        <h1 className="text-5xl max-sm:text-4xl font-semibold mt-5">
          Algunos de los proyectos que hemos trabajado
        </h1>
      </div>

      <div className="gallery overflow-y-scroll ">
        {images.map((item) => (
          <div key={item} className="gallery-item r">
            <Image
              width={100}
              height={100}
              src={item}
              alt=""
              className="rounded-md shadow-sm"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
