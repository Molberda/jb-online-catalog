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
      <Nav />
      <section id="contact">
        <div className="container contact__container">
          <div className="row contact__row column">
            <figure className="contact__img--wrapper">
              <img src={Profile} alt="" className="contact__img" />
            </figure>
            <div className="textbox contact__textbox">
              <h2 className="title contact__title">¡Contáctanos!</h2>
              <span className="contact__link">
                <h2 className="subtitle contact__subtitle">
                  Síguenos en instagram
                </h2>
                <span className="contact__subtitle contact__hover ">
                  <a
                    href="https://www.instagram.com/jbdelizioso/"
                    target="_blank"
                    rel="noreferrer"
                    className="subtitle contact__subtitle igLink link"
                  >
                    @Deliziozo
                    <FontAwesomeIcon icon="fa-brands fa-instagram" />
                  </a>
                  <div className="link__hover--effect igLink"></div>
                </span>
              </span>
              <span className="contact__link">
                <h2 className="subtitle contact__subtitle">
                  Escríbenos directamente a
                </h2>{" "}
                <span className="contact__subtitle contact__hover ">
                  <a
                    href="https://wa.link/xtt3z3"
                    target="_blank"
                    rel="noreferrer"
                    className="subtitle contact__subtitle waLink link"
                  >
                    Whatsapp
                    <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                  </a>
                  <div className="link__hover--effect waLink"></div>
                </span>
              </span>
              <span className="contact__link">
                <h2 className="subtitle contact__subtitle">Envíanos un</h2>
                <span className="contact__subtitle contact__hover ">
                  <a
                    href="mailto:jbdelizioso@gmail.com"
                    className="subtitle contact__subtitle mail link"
                  >
                    Correo <FontAwesomeIcon icon="fa-regular fa-envelope" />
                  </a>
                  <div className="link__hover--effect mail"></div>
                </span>
              </span>
              <h2 className="subtitle pagos">
                Porfavor ten en cuenta que cobramos el 50% a la hora de
                confirmar el pedido y el otro 50% a la hora de la entrega.
                <br />
                Además requerimos minimo 3 dias de antelación para preparar tu
                pedido
              </h2>
            </div>
          </div>
        </div>
        <HomeBtn />
      </section>
    </div>
  );
};

export default Contact;
