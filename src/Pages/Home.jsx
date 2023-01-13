import React, { useEffect } from "react";
import Nav from "../Components/Nav";
import Antipasto from "../Components/Antipasto";
import Ceviche from "../Components/Ceviche";
import Contactanos from "../Components/Contactanos";
import Landing from "../Components/Landing";
import Paella from "../Components/Paella";
import Postres from "../Components/Postres";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Nav />
      <Landing />
      <Ceviche />
      <Antipasto />
      <Paella />
      <Postres />
      <Contactanos />
      <div className="bars">
        <ul className="bars__list">
          <li className="bars__item">
            <Link to="/home">
              <h3 className="bars__link">Pagina Principal</h3>
            </Link>
          </li>
          <li className="bars__item">
            <Link to="/contact">
              <h3 className="bars__link">Contactanos</h3>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
