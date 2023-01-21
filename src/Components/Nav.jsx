import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


const Nav = ({ navLogo, name1, icon1, name2, icon2, name3, icon3, name4, icon4, name5, icon5 }) => {
  function openMenu() {
    document.body.classList += " open__menu";
    console.log("open");
  }
  return (
    <nav className="nav column">
      <a href="#landing">
        {navLogo}
        {/* <figure className="nav__logo--wrapper">
          <img src={Logo} alt="" className="nav__logo" />
        </figure> */}
      </a>
      <button className="bars__btn" onClick={openMenu}>
        <FontAwesomeIcon icon="fa-solid fa-bars" />
      </button>
      <ul>
        <li className="nav__list--item">
          <a href="#ceviche" className="nav__link">
            {icon1}
            <span className="nav__name">{name1}</span>
          </a>
        </li>
        <li className="nav__list--item">
          <a href="#antipasto" className="nav__link">
            {icon2}
            <span className="nav__name">{name2}</span>
          </a>
        </li>
        <li className="nav__list--item">
          <a href="#paella" className="nav__link">
            {icon3}
            <span className="nav__name">{name3}</span>
          </a>
        </li>
        <li className="nav__list--item">
          <a href="#tortilla" className="nav__link">
            {icon4}
            <span className="nav__name">{name4}</span>
          </a>
        </li>
        <li className="nav__list--item">
          <a href="#postres" className="nav__link">
            {icon5}
            <span className="nav__name">{name5}</span>
          </a>
        </li>
      </ul>
    </nav>
    // <nav className="nav column">
    //   <a href="#landing">
    //     <figure className="nav__logo--wrapper">
    //       <img src={Logo} alt="" className="nav__logo" />
    //     </figure>
    //   </a>
    //   <button className="bars__btn" onClick={openMenu}>
    //     <FontAwesomeIcon icon="fa-solid fa-bars" />
    //   </button>
    //   <ul>
    //     <li className="nav__list--item">
    //       <a href="#ceviche" className="nav__link">
    //         <FontAwesomeIcon icon="fa-solid fa-jar-wheat" />
    //         <span className="nav__name">Ceviche</span>
    //       </a>
    //     </li>
    //     <li className="nav__list--item">
    //       <a href="#antipasto" className="nav__link">
    //         <FontAwesomeIcon icon="fa-solid fa-leaf" />
    //         <span className="nav__name">Antipasto</span>
    //       </a>
    //     </li>
    //     <li className="nav__list--item">
    //       <a href="#paella" className="nav__link">
    //         <FontAwesomeIcon icon="fa-solid fa-utensils" />
    //         <span className="nav__name">Paella</span>
    //       </a>
    //     </li>
    //     <li className="nav__list--item">
    //       <a href="#postres" className="nav__link">
    //         <FontAwesomeIcon icon="fa-solid fa-cookie-bite" />
    //         <span className="nav__name">Postres</span>
    //       </a>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default Nav;
