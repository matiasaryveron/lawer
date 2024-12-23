import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import HeroImg from "./assets/hero.jpg";
import Who from "./components/Who/Who";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import FloatingButtons from "./components/FloatingButtons/FloatingButtons";

const bgImage = {
  backgroundImage: `url(${HeroImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  backgroundSize: "cover",
  position: "relative",
};
const App = () => {
  return (
    <div className="overflow-x-hidden bg-brandDark text-white">
      <div style={bgImage} id="inicio">
        <Navbar />
        <Main />
      </div>
      <section id="nosotros">
        <Who />
      </section>
      <section id="contactos">
        <Contact />
      </section>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default App;
