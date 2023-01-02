import React from "react";
import Logo from "../Assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="row footer__row column">
          <a href="#">
            <figure className="footer__img--wrapper">
              <img src={Logo} alt="" className="footer__img" />
            </figure>
          </a>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#">Contactanos</a>
            </li>
            <li className="footer__item">
              <a href="#ceviche">Ceviche</a>
            </li>
            <li className="footer__item">
              <a href="#antipasto">Antipasto</a>
            </li>
            <li className="footer__item">
              <a href="#postres">Postres</a>
            </li>
          </ul>
          <span className="copy">Diseñado por David Möller &copy; 2022 para Delizziozo</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
