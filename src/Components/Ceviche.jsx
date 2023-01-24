import React from "react";
import { Link } from "react-router-dom";
import CevicheImg from '../Assets/ceviche.jpg'

const Ceviche = () => {
  return (
    <section id="ceviche">
      <div className="container ceviche__container">
        <div className="row ceviche__row column">
          <figure className="ceviche__img--wrapper img__wrapper">
            <img src={CevicheImg} alt="" className="ceviche__img" />
          </figure>
          <h1 className="title ceviche__title">CEVICHE</h1>
          <h2 className="subtitle ceviche__subtitle">Una entrada imperdible y para toda la familia</h2>
          <h2 className="text ceviche__text">La especialidad de la casa.<br /> Un ceviche de champiñiones bañado en salsa de tomate, limon & picante. <br /> ¡Sirvelo con tostadas o galletas! </h2>
          <h2 className="price ceviche__price text">$22.500</h2>
          <Link to='/contact'>
          <button className="buy__btn">Pídelo Ya</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Ceviche;
