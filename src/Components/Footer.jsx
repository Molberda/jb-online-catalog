import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="row footer__row column">
          <Link to='/'>
            <figure className="footer__img--wrapper">
              <img src={Logo} alt="" className="footer__img" />
            </figure>
          </Link>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="/">Contactanos</a>
              <div className="link__hover--effect"></div>
            </li>
            <li className="footer__item">
              <a href="#ceviche">Ceviche</a>
              <div className="link__hover--effect"></div>
            </li>
            <li className="footer__item">
              <a href="#antipasto">Antipasto</a>
              <div className="link__hover--effect"></div>
            </li>
            <li className="footer__item">
              <a href="#paella">Paella</a>
              <div className="link__hover--effect"></div>
            </li>
            <li className="footer__item">
              <a href="#postres">Postres</a>
              <div className="link__hover--effect"></div>
            </li>
          </ul>
          <span className="copy">Diseñado por David Möller &copy; 2022 para Delizziozo</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
