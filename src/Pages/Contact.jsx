import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import Profile from "../Assets/Profile.jpg";
import HomeBtn from "../Components/HomeBtn";
import Nav from "../Components/Nav";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Nav/>
      <section id="contact">
        <div className="container contact__container">
          <div className="row contact__row column">
            <figure className="contact__img--wrapper">
              <img src={Profile} alt="" className="contact__img" />
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
              <h2 className="subtitle pagos">Porfavor ten en cuenta que cobramos el 50% a la hora de confirmar el pedido y el otro 50% a la hora de la entrega.</h2>
            </div>
          </div>
        </div>
        <HomeBtn />
      </section>
    </div>
  );
};

export default Contact;
