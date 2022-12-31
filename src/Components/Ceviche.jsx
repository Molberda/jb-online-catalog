import React from "react";

const Ceviche = () => {
  return (
    <section id="ceviche">
      <div className="container ceviche__container">
        <div className="row ceviche__row column">
          <figure className="ceviche__img--wrapper">
            <img src="https://lacremerie.com.co/wp-content/uploads/2021/03/Ceviche-de-mango-x120gr.jpeg" alt="" className="ceviche__img" />
          </figure>
          <h1 className="title ceviche__title">CEVICHE</h1>
          <h2 className="subtitle ceviche__subtitle">Una entrada imperdible y para toda la familia</h2>
          <h2 className="text ceviche__text">La especialidad de la casa.<br /> Un ceviche de champiñiones bañado en salsa de tomate, limon & picante. <br /> ¡Sirvelo con tostadas o galletas! </h2>
        </div>
      </div>
    </section>
  );
};

export default Ceviche;
