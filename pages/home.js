`client`;

import React, { useEffect, useState, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsWhatsapp } from "react-icons/bs";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function HomePrincipal({ children }) {
  // navigate menu

  const menu = useRef(null);

  const openNav = () => {
    const element = menu.current;
    element.style.height = "100%";
    element.style.opacity = "1";
  };
  const closeNav = () => {
    const element = menu.current;
    element.style.height = "0";
    element.style.opacity = "0";
  };

  // scroll change color

  const [scrollNav, setScrollNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const changeNav = () => {
    if (window.scrollY >= 70) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  // scroll navigate

  const positions = [
    {
      position: 0,
      path: "#home",
    },
    {
      position: 973,
      path: "#skills",
    },
    {
      position: 1946,
      path: "#portfolio",
    },
    {
      position: 3110,
      path: "#about",
    },
    {
      position: 4378.5,
      path: "#contact",
    },
  ];

  const ScrollToScreen = (type) => {
    let position = window.scrollY + 80;
    let answer = positions[1];
    // console.log(current, "curr");
    positions.forEach((item, i) => {
      if (type === "down") {
        if (position > item.position && position < positions[i + 1].position) {
          answer = positions[i + 1];
          return;
        }
      } else {
        if (position < item.position && position > positions[i - 1].position) {
          if (i === 0) answer = positions[0];
          answer = positions[i - 2];
          return;
        } else {
          if (position > item.position) {
            answer = positions[i - 1];
          }
        }
      }
    });

    answer === undefined
      ? console.log("")
      : window.scrollTo(80, answer.position);

    // console.log(answer.position);
  };

  return (
    <div aria-label="container">
      <header
        className={`flex items-center transition-all fixed z-10 xl:h-[7vh] lg:h-[10vh] md:h-[10vh] max-sm:h-[10vh] left-0 right-0 top-0 cursor-pointer    ${
          scrollNav ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div
          className="overlay-menu flex items-center justify-center text-2xl font-bold text-white"
          ref={menu}
          role="dialog" // Assuming this is a modal-type overlay
          aria-modal="true" // Marks this as a modal dialog, blocking the main content
          aria-labelledby="overlayTitle" // Provides an accessible name for the dialog
        >
          <h2 id="overlayTitle" className="sr-only">
            Menu
          </h2>{" "}
          {/* Hidden title for screen readers */}
          <button // Changed from <a> to <button> for semantic correctness
            className="closebtn"
            onClick={closeNav}
            aria-label="Close menu" // Provides a clear label for the action
          >
            &times;{" "}
            {/* Visually indicates close, but the aria-label explains it */}
          </button>
          <div className="flex flex-col justify-evenly items-center h-1/2">
            <a
              href="#home"
              className="hover:text-[#7f2627] transition-all"
              onClick={closeNav}
            >
              Inicio
            </a>
            <a
              href="#skills"
              onClick={closeNav}
              className="hover:text-[#7f2627] transition-all"
            >
              Servicios
            </a>
            <a
              href="#portfolio"
              className="hover:text-[#7f2627] transition-all"
              onClick={closeNav}
            >
              Trabajos
            </a>
            <a
              href="#about"
              onClick={closeNav}
              className="hover:text-[#7f2627] transition-all"
            >
              Historia
            </a>
            <a
              href="#contact"
              className="hover:text-[#7f2627] transition-all"
              onClick={closeNav}
            >
              Contacto
            </a>
          </div>
        </div>

        <nav
          className={`w-[100vw] xl:w-[68vw] xl:m-auto md:mx-10 lg:mx-10 flex items-center justify-between web-font max-sm:px-2`}
        >
          <button onClick={openNav} className="lg:hidden">
            <RxHamburgerMenu
              className="text-4xl ml-3 max-sm:text-3xl hover:scale-110 transition-all"
              aria-label="Open navigation menu"
            />
          </button>
          <a
            href="#home"
            className="text-3xl font-bold hover:text-[#7f2627] hover:scale-105 transition-all"
          >
            SIBAIKOLE
          </a>
          <div className="hidden xl:flex w-1/3 lg:w-1/2  justify-evenly items-center font-bold text-lg mt-1">
            <a
              className="hover:text-[#7f2627] hover:scale-105 transition-all"
              href="#home"
            >
              Inicio
            </a>
            <a
              className="hover:text-[#7f2627] hover:scale-105 transition-all"
              href="#skills"
            >
              Servicios
            </a>
            <a
              className="hover:text-[#7f2627] hover:scale-105 transition-all"
              href="#portfolio"
            >
              Trabajos
            </a>
            <a
              className="hover:text-[#7f2627] hover:scale-105 transition-all"
              href="#about"
            >
              Historia
            </a>
          </div>
          <a
            href="#contact"
            className="bg-[#7f2627] rounded-sm shadow-md text-zinc-200 hover:text-[#7f2627] hover:bg-zinc-200 hover:scale-105 transition-all font-semibold text-md lg:text-lg px-2 lg:px-8 py-1 "
          >
            Contacto
          </a>
        </nav>

        <div className="fixed sm:hidden w-[5vw] h-[15vh] 2xl:flex flex-col justify-between items-center top-[50%] right-0 z-50 cursor-pointer max-sm:hidden">
          <button
            onClick={() => ScrollToScreen("up")}
            className="bg-transparent border-none p-0 m-0 cursor-pointer"
          >
            <BsFillArrowUpCircleFill
              className="text-6xl text-zinc-800 hover:scale-110 hover:bg-red-500 rounded-full transition-all"
              aria-label="Scroll Up"
            />
          </button>
          <button
            onClick={() => ScrollToScreen("down")}
            className="bg-transparent border-none p-0 m-0 cursor-pointer"
          >
            <BsFillArrowDownCircleFill
              className="text-6xl text-zinc-800 hover:scale-110 hover:bg-red-500 rounded-full transition-all"
              aria-label="Scroll Down"
            />
          </button>
        </div>
      </header>
      <main className="xl:w-[68vw] lg:w-[100vw] md:w-[100vw] max-sm:w-[100vw] h-[100vh] m-auto max-sm:m-0 text-zinc-800 relative">
        <div className="absolute top-0 bottom-0 -right-[16vw] xl:flex lg:hidden md:hidden -z-10 -left-[16vw] max-sm:hidden"></div>

        {children}
      </main>
    </div>
  );
}

export default HomePrincipal;
