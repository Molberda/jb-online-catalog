import React from "react";
import { Link } from "react-router-dom";

const Burger = () => {
    function closeMenu(){

    }
  return (
    <div className="bars">
      <ul className="bars__list">
        <li className="bars__item">
          <Link to="/home" onClick={closeMenu}>
            <h3 className="bars__link">Pagina Principal</h3>
          </Link>
        </li>
        <li className="bars__item">
          <Link to="/contact" onClick={closeMenu()}>
            <h3 className="bars__link">Contactanos</h3>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Burger;
