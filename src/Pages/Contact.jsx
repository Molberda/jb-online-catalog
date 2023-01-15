import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import Pedidos from "../Assets/pedidos.png";
import HomeBtn from "../Components/HomeBtn";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <section id="contact">
        <div className="container contact__container">
          <div className="row contact__row column">
            <figure className="contact__img--wrapper">
              <img src={Pedidos} alt="" className="contact__img" />
            </figure>
            <div className="textbox contact__textbox">
              <h2 className="title contact__title">¡Contactanos!</h2>
              <span className="contact__link">
                <h2 className="subtitle contact__subtitle">
                  Siguenos en instagram
                </h2>
                <a
                  href="https://www.instagram.com/jbdelizioso/"
                  target="_blank"
                  className="subtitle contact__subtitle igLink link"
                >
                  @Deliziozo
                  <FontAwesomeIcon icon="fa-brands fa-instagram" />
                </a>
              </span>
              <span className="contact__link">
                <h2 className="subtitle contact__subtitle">
                  Escribenos directamente a
                </h2>
                <a
                  href="https://wa.link/xtt3z3"
                  target="_blank"
                  className="subtitle contact__subtitle waLink link"
                >
                  Whatsapp
                  <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                </a>
              </span>
              <span className="contact__link">
                <h2 className="subtitle contact__subtitle">Envianos un</h2>
                <a
                  href="mailto:jbdelizioso@gmail.com"
                  className="subtitle contact__subtitle mail link"
                >
                  Correo <FontAwesomeIcon icon="fa-regular fa-envelope" />
                </a>
              </span>
            </div>
          </div>
        </div>
        <HomeBtn />
      </section>
    </div>
  );
};

export default Contact;
