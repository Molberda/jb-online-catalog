import React from "react";
import { Link } from "react-router-dom";
import AntipastoImg from '../Assets/antipasto.jpg'

const Antipasto = () => {
  return (
    <section id="antipasto">
      <div className="container antipasto__container">
        <div className="row antipasto__row column">
          <figure className="antipasto__img--wrapper img__wrapper">
            <img
              src={AntipastoImg}
              alt=""
              className="antipasto__img"
            />
          </figure>
          <h2 className="title antipasto__title">ANTIPASTO</h2>
          <h2 className="subtitle antipasto__subtitle">
            Un acompañante exquisito y único
          </h2>
          <h2 className="text antipasto__text">
            Antipasto de atún, con zanahorias, habichuelas, coliflor, apio y mucho mas que te dejaran deseando otro bocado. <br />
            ¡Sirvelo con tostadas o galletas!
          </h2>
          <h2 className="price antipasto__price text">$20.000</h2>
          <Link to="/contact">
            <button className="buy__btn">Pídelo Ya</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Antipasto;
