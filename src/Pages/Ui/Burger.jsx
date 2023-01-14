import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Burger = () => {
  function closeMenu() {
    document.body.classList.remove("open__menu");
    console.log("log");
  }
  return (
    <section id="bars">
      <div className="container bars__container">
        <div className="row bars__row column">
            <button className="close__btn" onClick={closeMenu}>
            Cerrar Menú <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />
            </button>
          <ul className="bars__list">
            <li className="bars__item">
              <Link to="/" onClick={closeMenu}>
                <h3 className="bars__link">Pagina Principal</h3>
              </Link>
            </li>
            <li className="bars__item">
              <Link to="/contact" onClick={closeMenu}>
                <h3 className="bars__link">Contactanos</h3>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Burger;
