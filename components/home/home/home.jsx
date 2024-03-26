import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="h-[100vh] flex justify-center items-center cursor-pointer  background"
    >
      <div className="absolute top-0 bottom-0 -right-[16vw] -z-10 -left-[16vw] background  lg:hidden max-sm:hidden md:hidden xl:flex"></div>

      <div className="w-full h-[100vh] background  grid place-content-center ">
        <div className="">
          <h1 className="text-5xl md:text-7xl xl:text-8xl   font-bold  text-center uppercase ">
            Solo hacemos excelente{" "}
            <div className="overflow-hidden h-[7vh] md:h-[9vh] lg:h-[13vh]  text-center text-[#7f2627]">
              <span className=" font-bold words-up">diseños</span>
              <span className=" font-bold words-up">construcción</span>
              <span className=" font-bold words-up">remodelación</span>
              <span className=" font-bold words-up">arquitectura</span>

              <span className=" font-bold words-up">supervisión</span>
            </div>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
