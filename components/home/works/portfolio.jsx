import { useEffect, useRef, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const images = [
  { url: "/img/neptuno/neptuno-1.jpg", thumbnail: "" },
  { url: "/img/PedidosYa/foto1.jpg", thumbnail: "" },
  { url: "/img/PedidosYa/foto2.jpg", thumbnail: "" },
  { url: "/img/PedidosYa/foto3.jpg", thumbnail: "" },
  { url: "/img/PedidosYa/foto4.jpg", thumbnail: "" },
  { url: "/img/PedidosYa/foto5.jpg", thumbnail: "" },
  { url: "/img/PedidosYa/foto6.jpg", thumbnail: "" },
  { url: "/img/FOTOS SHEETROCK/s1.jpg", thumbnail: "" },
  { url: "/img/FOTOS SHEETROCK/s2.jpg", thumbnail: "" },
  { url: "/img/FOTOS SHEETROCK/s3.jpg", thumbnail: "" },
  { url: "/img/FOTOS SHEETROCK/s4.jpg", thumbnail: "" },
  { url: "/img/FOTOS SHEETROCK/s5.jpg", thumbnail: "" },
  { url: "/img/FOTOS SHEETROCK/s6.jpg", thumbnail: "" },
  { url: "/img/FOTOS SHEETROCK/s7.jpeg", thumbnail: "" },
  { url: "/img/FOTOS SHEETROCK/s8.jpeg", thumbnail: "" },
  { url: "/img/FOTOS SHEETROCK/s9.jpeg", thumbnail: "" },
  { url: "/img/FOTOS SHEETROCK/s10.jpeg", thumbnail: "" },
  { url: "/img/FOTOS SHEETROCK/s11.jpeg", thumbnail: "" },
  { url: "/img/FOTOS SHEETROCK/s12.jpeg", thumbnail: "" },
  { url: "/img/FOTOS SHEETROCK/s13.jpeg", thumbnail: "" },
  { url: "/img/FOTOS SHEETROCK/s14.jpg", thumbnail: "" },
  { url: "/img/bcdc/bcdc3.jpg", thumbnail: "" },
  { url: "/img/bcdc/bcdc4.jpg", thumbnail: "" },
  { url: "/img/bcdc/bcdc5.jpg", thumbnail: "" },
  { url: "/img/bcdc/bcdc6.jpg", thumbnail: "" },
  { url: "/img/bcdc/bcdc7.jpg", thumbnail: "" },
  { url: "/img/Biocaribe/biocaribe2.jpg", thumbnail: "" },
  { url: "/img/Biocaribe/biocaribe1.jpg", thumbnail: "" },

  { url: "/img/alameda/ana1.jpg", thumbnail: "" },
  { url: "/img/alameda/ana2.jpg", thumbnail: "" },
  { url: "/img/alameda/ana3.jpg", thumbnail: "" },
  { url: "/img/aniomis/ani1.jpg", thumbnail: "" },

  { url: "/img/aniomis/ani3.jpg", thumbnail: "" },
  { url: "/img/aniomis/ani4.jpg", thumbnail: "" },
  { url: "/img/aniomis/ani5.jpg", thumbnail: "" },
  { url: "/img/aniomis/ani6.jpg", thumbnail: "" },
  { url: "/img/aniomis/ani7.jpg", thumbnail: "" },
  { url: "/img/aniomis/ani8.jpg", thumbnail: "" },
  { url: "/img/aniomis/ani9.jpg", thumbnail: "" },
  { url: "/img/aniomis/ani10.jpg", thumbnail: "" },
  { url: "/img/aniomis/ani11.jpg", thumbnail: "" },
  { url: "/img/aniomis/ani12.jpg", thumbnail: "" },
  { url: "/img/hangar/hangar1.jpg", thumbnail: "" },
  { url: "/img/hangar/hangar2.jpg", thumbnail: "" },
  { url: "/img/hangar/hangar3.jpg", thumbnail: "" },
  { url: "/img/hangar/hangar4.jpg", thumbnail: "" },
  { url: "/img/hangar/hangar5.jpg", thumbnail: "" },
  {
    url: "/img/2017 project/este1.jpg",
  },
  {
    url: "/img/2017 project/este2.jpg",
  },
  {
    url: "/img/2017 project/este8.jpg",
  },

  {
    url: "/img/2017 project/este6.jpg",
  },
  {
    url: "/img/2017 project/este7.jpg",
  },
];

const Portfolio = () => {
  const [src, setSrc] = useState("");
  const dialogRef = useRef(null);
  const [direction, setDirection] = useState(false);
  // State to manage dialog visibility
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const showNext = () => {
    if (direction == false) {
      setDirection(true);
    } else {
      setDirection(false);
    }
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;

      return index + 1;
    });
  };
  const showPrev = () => {
    if (direction == false) {
      setDirection(true);
    } else {
      setDirection(false);
    }

    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  };

  useEffect(() => {
    console.log(
      images[imageIndex].url,
      window.innerHeight,
      window.innerHeight * 0.2,
      "guan jondre tueni"
    );
  });

  return (
    <section
      id="portfolio"
      className="xl:h-[120vh] md:h-[140vh] max-sm:h-[190vh] flex flex-col items-center justify-evenly relative select-none"
      aria-label="Portfolio" // Describe the section for better context
    >
      <div className="absolute top-0 bottom-0 -right-[16vw] -z-10 -left-[16vw] md:hidden lg:hidden max-sm:hidden xl:flex"></div>

      <div className="text-center mt-[12vh] mb-20">
        <span className="bg-[#7f2627] text-zinc-200 p-1">Portafolio</span>
        <h1 className="text-5xl max-sm:text-4xl font-semibold mt-5">
          Algunos de los proyectos que hemos trabajado
        </h1>
      </div>

      <div
        className="gallery overflow-y-scroll p-4"
        aria-roledescription="gallery"
      >
        {images.map((item, index) => (
          <div
            key={item.url}
            className="gallery-item"
            onClick={() => {
              setIsDialogOpen(true);
              dialogRef.current.showModal();
              setImageIndex(index);
            }}
            aria-label={`View larger image ${index + 1}`} // Provide context for the action
            role="button" // Indicate that this div acts as a button
            tabIndex="0" // Make it focusable
          >
            <img
              src={item.url}
              alt={`Project ${index + 1}`}
              className="rounded-md shadow-sm"
            />
            {/* Provide meaningful alt text for each image */}
          </div>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialogTitle" // Ensures the dialog has a label
        className="modal bg-transparent"
      >
        <h2 id="dialogTitle" className="sr-only">
          Image Viewer
        </h2>
        {/* Screen-reader-only title for the dialog */}
        <div className="flex items-center justify-center w-[90vw] h-[90vh] bg-transparent">
          <div>
            <img
              src={images[imageIndex].url}
              alt={`Viewing image ${imageIndex + 1}`}
              className="max-h-[80vh] max-w-[80vw] select-none"
            />
            {/* Ensure alt text is descriptive */}
          </div>

          <button
            aria-label="Close image viewer"
            onClick={() => dialogRef.current.close()}
            className="absolute top-0 right-5 text-zinc-100 hover:text-rose-900 text-6xl hover:scale-105 transition-all"
          >
            <AiFillCloseCircle />
          </button>
          <button
            aria-label="Show previous image"
            className="absolute top-[50%] left-5 text-zinc-100 hover:text-rose-900 text-5xl hover:scale-105 transition-all"
            onClick={showPrev}
          >
            <FaArrowCircleLeft />
          </button>
          <button
            aria-label="Show next image"
            className="absolute top-[50%] right-5 text-zinc-100 hover:text-rose-900 text-5xl hover:scale-105 transition-all"
            onClick={showNext}
          >
            <FaArrowCircleRight />
          </button>
        </div>
      </dialog>
    </section>
  );
};

export default Portfolio;
