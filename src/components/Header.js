import React from "react";
import "./Header.css"; // Import the CSS file for styling
import img from "./images/sel.jpg"; // Import the image file for the header image

const Header = () => {
  return (
    <header className="header">
      <img
        src={img} // Use the imported image
        alt="Selena Gomez"
        className="header-image"
      />
      <div className="header-content">
        <h1 className="header-title">Selena Gomez</h1>
        <p className="header-description">
          Selena Gomez is an American singer, actress, and producer. She has
          been recognized for her work in music, film, and television, and has a
          large following on social media.
        </p>
      </div>
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#music" className="nav-link">
              Music
            </a>{" "}
          </li>
          <li className="nav-item">
            <a href="#videos" className="nav-link">
              Videos
            </a>
          </li>
          <li className="nav-item">
            <a href="#gallery" className="nav-link">
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a href="#awards" className="nav-link">
              Awards
            </a>
          </li>
          <li className="nav-item">
            <a href="#socials" className="nav-link">
              Socials
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
