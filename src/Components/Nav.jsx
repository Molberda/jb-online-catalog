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
          </a>
        </li>
        <li className="nav__link--item">
          <a href="#home" className="nav__link">
            <FontAwesomeIcon icon="fa-solid fa-leaf" />
          </a>
        </li>
        <li className="nav__link--item">
          <a href="#home" className="nav__link">
            <FontAwesomeIcon icon="fa-solid fa-cookie-bite" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
