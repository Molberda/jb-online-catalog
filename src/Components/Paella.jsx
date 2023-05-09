import React from "react";
import { Link } from "react-router-dom";
import paellaImg from "../Assets/paella.jpg";

const Paella = () => {
  return (
    <section id="paella">
      <div className="container paella__container">
        <div className="row paella__row column">
          <figure className="paella__img--wrapper img__wrapper">
            <img src={paellaImg} alt="" className="paella__img" />
          </figure>
          <h2 className="title paella__title">PAELLA</h2>
          <h2 className="subtitle paella__subtitle">
            Nuestro plato fuerte insignia
          </h2>
          <h2 className="text paella__text">
            Una paella que te transportara directamente a España <br /> Hecha
            con los ingredientes que más te gustan, frescos y preparados a la
            perfección
          </h2>
          <h2 className="price paella__price text"> Desde $45.000 la porción <br /> (mínimo 8 porciones)</h2>
          <Link to="/contact">
            <button className="buy__btn">Pídelo Ya</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Paella;
