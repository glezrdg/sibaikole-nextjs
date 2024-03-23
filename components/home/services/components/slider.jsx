import React, { useEffect, useState } from "react";

import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaCircle,
} from "react-icons/fa";
import { TbCircleDot } from "react-icons/tb";

function Slider({ items }) {
  //   const [imageIndex, setImageIndex] = useState(0);

  //   const items = [
  //     {
  //       title: "Proyectos Arquitectonicos",
  //       description:
  //         " ¡Transforma tus sueños en realidad con nuestro servicio de Diseño Arquitectónico! Con una combinación de creatividad y experiencia, creamos espacios que cautivan, inspiran y funcionan a la perfección.Desde renovaciones elegantes hasta proyectos comerciales impresionantes, estamos aquí para dar vida a tu visión. ",
  //       lastSentence: "¡Déjanos diseñar un futuro extraordinario para ti!",
  //     },
  //     {
  //       title: "Construccion",
  //       description: "lorem imsupm",
  //       lastSentence: "¡Déjanos diseñar un futuro extraordinario para ti!",
  //     },
  //     {
  //       title: "Remodelaciones",
  //       description: "lorem imsupm",
  //       lastSentence: "¡Déjanos diseñar un futuro extraordinario para ti!",
  //     },
  //     {
  //       title: "Supervision",
  //       description: "lorem imsupm",
  //       lastSentence: "¡Déjanos diseñar un futuro extraordinario para ti!",
  //     },
  //   ];
  const [imageIndex, setImageIndex] = useState(0);
  const [direction, setDirection] = useState(false);

  useEffect(() => {
    console.log(imageIndex, items);
  }, [imageIndex]);

  const showNext = () => {
    if (direction == false) {
      setDirection(true);
    } else {
      setDirection(false);
    }
    setImageIndex((index) => {
      if (index === items.length - 1) return 0;
      console.log(index + 1);
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
      if (index === 0) return items.length - 1;
      return index - 1;
    });
  };

  return (
    <div className="w-full h-[40vh] max-w-[1000px] items-center flex justify-center p-2 relative">
      <div className="flex w-full h-full overflow-hidden">
        {items.map((item, index) => (
          <div
            key={item.url}
            className={`flex-shrink-0 flex-grow-0 flex ${
              direction ? "flex-row-reverse" : "flex-row"
            } items-center justify-center w-full h-full transition-duration`}
            style={{ transform: `translateX(${-100 * imageIndex}%)` }}
          >
            <img src={item.url} alt="" className="h-[35vh]   rounded-md" />
            <div className="w-1/2 pl-5">
              <h2 className="text-3xl font-semibold">{item.title}</h2>
              <p className="mt-5 text-lg text-balance w-[80%]">
                {item.description}
                <br />
                <br />
                <span className="font-semibold pt-5">{item.lastSentence}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-[50%] -left-20 text-4xl hover:scale-105 transition-all"
        onClick={showPrev}
      >
        <FaArrowCircleLeft />
      </button>
      <button
        className="absolute top-[50%] -right-20 text-4xl hover:scale-105 transition-all"
        onClick={showNext}
      >
        <FaArrowCircleRight />
      </button>
      <div className="absolute flex -bottom-10  ">
        {items.map((_, index) => (
          <button
            key={index}
            className=" mx-2 rounded-full text-2xl"
            onClick={() => {
              setImageIndex(index);
            }}
          >
            {index === imageIndex ? <TbCircleDot /> : <FaCircle />}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Slider;
