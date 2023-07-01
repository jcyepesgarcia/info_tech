import React from "react";
import header_device_img from "../../assets/images/header_device_img.png";
import "./Header.css";
import { FaPaperPlane } from "react-icons/fa";
import Navbar from "../navbar/Navbar";

function Header() {
  return (
    <header className="header flex" id="header">
      <Navbar/>
      <div className="container">
        <div className="header-content grid text-center py-6 text-white">
          {/* left side */}
          <div className="header-content-left">
            <h1 className="text-upper header-title">
              info-tech app development
            </h1>
            <p className="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              accusamus, quas vitae illum dolorem quae! Aliquid labore sunt
              dignissimos aliquam, modi ipsum deleniti, iure, tempora quo id
              temporibus voluptate quas? Id fugiat magni officiis culpa.
            </p>
            <a href="#" className="btn btn-dark">
              <span>view more</span>
              <FaPaperPlane />
            </a>
          </div>
          {/* right side */}
          <div className="header-content-right">
            <img src={header_device_img} alt="devices_images" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
// 30:18mn