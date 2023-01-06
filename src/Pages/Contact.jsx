import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Pedidos from "../Assets/pedidos.png";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container contact__container">
        <div className="row container__row">
          <figure className="contact__img--wrapper">
            <img src={Pedidos} alt="" className="contact__img" />
          </figure>
          <div className="textbox contact__textbox">
            <h2 className="title contact__title">¡Contactanos!</h2>
            <h2 className="subtitle contact__subtitle">
              Siguenos en instagram{" "}
              <a
                href="/"
                target="_blank"
                className="subtitle contact__subtitle igLink link"
              >
                @Deliziozo
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
              </a>{" "}
              <br /> O escribenos directamente a{" "}
              <a
                href="https://wa.link/xtt3z3"
                className="subtitle contact__subtitle waLink link"
              >
                Whatsapp
                <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
              </a>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
