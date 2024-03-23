import HomePrincipal, { Header } from "./home";
import Home from "@/components/home/home/home";
import About from "@/components/home/about/about-me";
import Skills from "@/components/home/services/skills";

import Portfolio from "@/components/home/works/portfolio";
import Contact from "@/components/home/contact/contact";

function App() {
  return (
    <HomePrincipal>
      <Home />
      <Skills />
      <Portfolio />
      <About />
      <Contact />
    </HomePrincipal>
  );
}

export default App;
