import React from "react";
import "./common.css"; // Import the common CSS file

const Videos = () => {
  return (
    <section id="videos" className="common-background">
      <h2>Videos</h2>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/VY1eFxgRR-k?si=mZUw_-GynvODdwik"
          title="YouTube video player"
          className="video-iframe"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/ij_0p_6qTss?si=ntB4Ac2ooWy8nBtL"
          title="YouTube video player"
          className="video-iframe"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/cH4E_t3m3xM?si=1HVKUBdj5cX8ebvb"
          title="YouTube video player"
          className="video-iframe"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/STO4-8vkG0U?si=8MR_A5ZbSCGaGFcn"
          title="YouTube video player"
          className="video-iframe"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Videos;
