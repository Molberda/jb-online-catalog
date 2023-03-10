import React from "react";
import { Link } from "react-router-dom";

const Postres = () => {
  return (
    <section id="postres">
      <div className="container postres__container">
        <div className="row postres__row column">
          <figure className="postres__img--wrapper img__wrapper">
            <img
              src="https://t2.uc.ltmcdn.com/es/posts/4/4/2/como_hacer_postre_de_milo_51244_orig.jpg"
              alt=""
              className="postres__img"
            />
          </figure>
          <h2 className="title postres__title">POSTRE DE MILO</h2>
          <h2 className="subtitle postres__subtitle">
            Nuestra opción que calmará todos tus antojos de azúcar
          </h2>
          <h2 className="text postres__text">
            Un delicioso postre con leche condensada, crema de leche, galletas
            Ducales y Milo
          </h2>
          <h2 className="price postres__price text">$15.000</h2>
          <Link to="/contact">
            <button className="buy__btn">Pídelo Ya</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Postres;
