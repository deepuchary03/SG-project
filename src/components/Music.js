import React from "react";
import "./Music.css"; // Import the CSS file for styling
import "./common.css"; // Import the common CSS file

const Music = () => {
  return (
    <section id="music" className="common-background">
      <h2>Music</h2>
      <div className="music-container">
        <iframe
          className="music-iframe"
          src="https://open.spotify.com/embed/track/3RKywhObU25JLEypRY6HWx?utm_source=generator"
          title="Spotify Track 1"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          className="music-iframe"
          src="https://open.spotify.com/embed/track/6wJwkMo278iWVlWl1XQ4WA?utm_source=generator"
          title="Spotify Track 2"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          className="music-iframe"
          src="https://open.spotify.com/embed/track/4hQ6UGyWQIGJmHSo0J88JW?utm_source=generator"
          title="Spotify Track 2"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Music;
