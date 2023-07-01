import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="container flex navbar-content">
        <div className="brand-and-toggler flex">
          {/* brand logo */}
          <a
            href="index.html"
            className="navbar-brand text-upper fw-7 fs-22 flex"
          >
            <span className="text-white">info</span>
            <span>tech</span>
          </a>
          <button
            type="button"
            className="navbar-show-btn text-white"
            onClick={handleClick}
          >
            <FaBars size={26} />
          </button>
        </div>
        {/* menu */}
        <div
          className={`navbar-collapse flex flex-center ${
            click ? "show-navbar" : ""
          }`}
        >
          <button
            type="button"
            className="navbar-hide-btn text-white"
            onClick={handleClick}
          >
            <FaTimes size={32} />
          </button>
          <ul className="navbar-nav text-upper text-white fw-6 ls-1 fs-20 text-center">
            <li className="nav-item">
              <a href="#header" className="nav-link">
                home
              </a>
            </li>
            <li className="nav-item">
              <a href="#whatWeDo" className="nav-link">
                what we do
              </a>
            </li>
            <li className="nav-item">
              <a href="#features" className="nav-link">
                features
              </a>
            </li>
            <li className="nav-item">
              <a href="#packages" className="nav-link">
                packages
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">
                projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#team" className="nav-link">
                teams
              </a>
            </li>
            <li className="nav-item">
              <a href="#header" className="nav-link">
                support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
