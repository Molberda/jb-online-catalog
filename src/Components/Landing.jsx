import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Logo from "../Assets/logo.png";

const Landing = () => {
  return (
    <section id="landing">
      <div className="container landing__container">
        <div className="row landing__row column">
          <figure className="landing__img--wrapper">
            <img src={Logo} alt="" className="landing__img" />
          </figure>
          <div className="landing__textbox">
            <h1 className="title landing__title">DELIZZIOZO</h1>
            <h2 className="subtitle landing__subtitle">Todos tus antojitos en un solo lugar</h2>
            <h2 className="text landing__text">Las Entradas & Postres <br /> Que dejan a todos queriendo mas </h2>
          </div>
          <FontAwesomeIcon icon="fa-solid fa-angles-down" />
        </div>
      </div>
    </section>
  );
};

export default Landing;
