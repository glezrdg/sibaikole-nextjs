import React, { useEffect, useState } from "react";

import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaCircle,
} from "react-icons/fa";
import { TbCircleDot } from "react-icons/tb";

function Slider({ items }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [direction, setDirection] = useState(false);

  const showNext = () => {
    if (direction == false) {
      setDirection(true);
    } else {
      setDirection(false);
    }
    console.log(direction);
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
    <div className="w-full h-auto max-w-[1000px]  flex items-center justify-center p-0 m-0 relative ">
      <div className="flex w-full h-full overflow-hidden">
        {items.map((item, index) => (
          <div
            key={item.url}
            className={`flex-shrink-0 flex-grow-0 flex flex-col lg:flex-row  ${
              direction ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center justify-center w-full h-full transition-duration`}
            style={{ transform: `translateX(${-100 * imageIndex}%)` }}
          >
            <img
              src={item.url}
              alt=""
              className=" h-[20vh] md:h-[25vh] lg:h-[30vh] xl:h-[35vh]  rounded-md"
            />
            <div className="w-full xl:w-1/2 px-5 text-center lg:text-start mt-4 lg:mt-0">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold">
                {item.title}
              </h2>
              <p className="mt-5 text-sm md:text-md lg:text-lg text-balance  md:font-semibold">
                {item.description}
                <br />
                <br />
                <span className="font-semibold md:font-bold pt-5 md:text-lg xl:text-xl">
                  {item.lastSentence}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-[50%] left-2 lg:-left-14 text-4xl hover:scale-105 transition-all"
        onClick={showPrev}
      >
        <FaArrowCircleLeft />
      </button>
      <button
        className="absolute top-[50%] right-2 lg:-right-14 text-4xl hover:scale-105 transition-all"
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
