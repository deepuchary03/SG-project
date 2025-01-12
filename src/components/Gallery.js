import React from "react";
import "./common.css"; //
import g1 from "./images/g1.jpg";

const Gallery = () => {
  return (
    <section id="gallery">
      <h2>Gallery</h2>
      <div>
        <img src={g1} alt="Gallery 1" height="400px" width="500px" />
        <img src="image2.jpg" alt="Gallery 2" />
        <img src="image3.jpg" alt="Gallery 3" />
      </div>
    </section>
  );
};

export default Gallery;
