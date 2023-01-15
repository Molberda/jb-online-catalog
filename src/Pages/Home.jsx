import React, { useEffect } from "react";
import Nav from "../Components/Nav";
import Antipasto from "../Components/Antipasto";
import Ceviche from "../Components/Ceviche";
import Contactanos from "../Components/Contactanos";
import Landing from "../Components/Landing";
import Paella from "../Components/Paella";
import Postres from "../Components/Postres";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Nav name1='Ceviche' icon1={ <FontAwesomeIcon icon="fa-solid fa-leaf" />} name2='Antipasto' icon2={ <FontAwesomeIcon icon="fa-solid fa-leaf" />} />
      <Landing />
      <Ceviche />
      <Antipasto />
      <Paella />
      <Postres />
      <Contactanos />
    </div>
  );
};

export default Home;
