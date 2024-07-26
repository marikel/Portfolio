import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">m@xria</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://x.com/m_x_ria"
            className="footer__social-icon"
            target={"_Blank"}
          >
            <i className="bx bxl-twitter"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/maria-kelouaze-7517801a6/"
            className="footer__social-icon"
            target={"_Blank"}
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/marikel"
            className="footer__social-icon"
            target={"_Blank"}
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; maria kelouaze. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
