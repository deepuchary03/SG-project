import React from "react";
import "./common.css"; //
import g1 from "./images/g1.jpg";

const Gallery = () => {
  return (
    <section id="gallery">
      <h2>Gallery</h2>
      <div>
        <img src={g1} alt="Gallery Image 1" />
        <img src="image2.jpg" alt="Gallery Image 2" />
        <img src="image3.jpg" alt="Gallery Image 3" />
      </div>
    </section>
  );
};

export default Gallery;
