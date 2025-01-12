import React from "react";
import Header from "./components/Header";

import Music from "./components/Music";
import Videos from "./components/Video"; // Corrected path
import Gallery from "./components/Gallery";
import Awards from "./components/Awards";
import Socials from "./components/Socials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />

      <Music />
      <Videos />
      <Gallery />
      <Awards />
      <Socials />
      <Footer />
    </div>
  );
};

export default App;
