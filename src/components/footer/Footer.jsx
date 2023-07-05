import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-6" id="footer">
      <div className="container">
        <div className="footer-content text-center" data-aos="fade-up" data-aos-duration="800">
          <div className="footer-item-group grid">
            {/* footer item */}
            <div className="footer-item">
              <h3 className="footer-item-title text-upper">porfolio</h3>
              <ul className="footer-item-links">
                <li className="text-cap">
                  <a href="#footer">web design</a>
                </li>
                <li className="text-cap">
                  <a href="#footer">branding & identity</a>
                </li>
                <li className="text-cap">
                  <a href="#footer">mobile design</a>
                </li>
                <li className="text-cap">
                  <a href="#footer">print</a>
                </li>
                <li className="text-cap">
                  <a href="#footer">user interface</a>
                </li>
              </ul>
            </div>
            {/* footer item */}
            <div className="footer-item">
              <h3 className="footer-item-title text-upper">about</h3>
              <ul className="footer-item-links">
                <li className="text-cap">
                  <a href="#footer">the company</a>
                </li>
                <li className="text-cap">
                  <a href="#footer">history</a>
                </li>
                <li className="text-cap">
                  <a href="#footer">vision</a>
                </li>
              </ul>
            </div>
            {/* footer item */}
            <div className="footer-item">
              <h3 className="footer-item-title text-upper">gallery</h3>
              <ul className="footer-item-links">
                <li className="text-cap">
                  <a href="#footer">flickr</a>
                </li>
                <li className="text-cap">
                  <a href="#footer">picasa</a>
                </li>
                <li>
                  <a href="#footer">iStockPhoto</a>
                </li>
                <li>
                  <a href="#footer">PhotoDune</a>
                </li>
              </ul>
            </div>
            {/* footer item */}
            <div className="footer-item">
              <h3 className="footer-item-title text-upper">contact</h3>
              <ul className="footer-item-links">
                <li className="text-cap">
                  <a href="#footer">basic info</a>
                </li>
                <li className="text-cap">
                  <a href="#footer">map</a>
                </li>
                <li className="text-cap">
                  <a href="#footer">contact form</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-social-icons flex flex-center">
            <a
              href="https://es-la.facebook.com/"
              className="bg-red flex flex-center"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Des"
              className="bg-red flex flex-center"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/"
              className="bg-red flex flex-center"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              className="bg-red flex flex-center"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="footer-bottom-text">
            <p className="text fs-16">
              © 2023 JCYepesGarcia. Design inspired by GeekProbin. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
