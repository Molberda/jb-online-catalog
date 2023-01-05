import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.png";

const Nav = () => {
  return (
    <nav className="nav column">
      <Link to="/">
        <figure className="nav__logo--wrapper">
          <img src={Logo} alt="" className="nav__logo" />
        </figure>
      </Link>
      <ul>
        <li className="nav__list--item">
          <a href="#ceviche" className="nav__link">
            <FontAwesomeIcon icon="fa-solid fa-jar-wheat" />
            <span className="nav__name">Ceviche</span>
          </a>
        </li>
        <li className="nav__list--item">
          <a href="#antipasto" className="nav__link">
            <FontAwesomeIcon icon="fa-solid fa-leaf" />
            <span className="nav__name">Antipasto</span>
          </a>
        </li>
        <li className="nav__list--item">
          <a href="#paella" className="nav__link">
            <FontAwesomeIcon icon="fa-solid fa-utensils" />
            <span className="nav__name">Paella</span>
          </a>
        </li>
        <li className="nav__list--item">
          <a href="#postres" className="nav__link">
            <FontAwesomeIcon icon="fa-solid fa-cookie-bite" />
            <span className="nav__name">Postres</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
