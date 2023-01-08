import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import Pedidos from "../Assets/pedidos.png";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  
  return (
    <section id="contact">
      <div className="container contact__container">
        <div className="row contact__row">
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
              </h2>
              <h2 className="subtitle contact__subtitle">
                O escribenos directamente a{" "}
              <a
                href="https://wa.link/xtt3z3"
                target='_blank'
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
