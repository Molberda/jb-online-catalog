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
            <h1 className="landing__title">DELIZZIOZO</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
