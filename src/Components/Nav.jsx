import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Logo from "../Assets/logo.png";

const Nav = () => {
  return (
    <nav className="nav column">
      <figure className="nav__logo--wrapper">
        <img src={Logo} alt="" className="nav__logo" />
      </figure>
      <ul>
        <li className="nav__link--item">
          <a href="#home" className="nav__link">
            <FontAwesomeIcon icon="fa-solid fa-jar-wheat" />
            <span className="nav__name">Ceviche</span>
          </a>
        </li>
        <li className="nav__link--item">
          <a href="#home" className="nav__link">
            <FontAwesomeIcon icon="fa-solid fa-leaf" />
            <span className="nav__name">Antipasto</span>
          </a>
        </li>
        <li className="nav__link--item">
          <a href="#home" className="nav__link">
            <FontAwesomeIcon icon="fa-solid fa-cookie-bite" />
            <span className="nav__name">Postres</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
