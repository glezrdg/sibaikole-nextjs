import HomePrincipal, { Header } from "./home";
import Home from "@/components/home/home/home";
import About from "@/components/home/about/about-me";
import Skills from "@/components/home/services/skills";

import Portfolio from "@/components/home/works/portfolio";
import Contact from "@/components/home/contact/contact";
import Head from "next/head";

function App() {
  return (
    <HomePrincipal>
      <Head>
        <title>Sibaikole</title>
        <link rel="icon" href=".././public/favicon.ico" />
        <meta charset="UTF-8" />
        <meta name="description" content="Construccion y mas" />
        <meta
          name="keywords"
          content="construcción, diseños, remodelación, arquitectura, supervisión"
        />
        <meta name="author" content="Germán González Sibaikole" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Home />
      <Skills />
      <Portfolio />
      <About />
      <Contact />
    </HomePrincipal>
  );
}

export default App;
