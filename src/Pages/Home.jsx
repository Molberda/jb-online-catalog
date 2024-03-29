import React, { useEffect } from "react";
import Nav from "../Components/Nav";
import Antipasto from "../Components/Antipasto";
import Ceviche from "../Components/Ceviche";
import Contactanos from "../Components/Contactanos";
import Landing from "../Components/Landing";
import Paella from "../Components/Paella";
// import Postres from "../Components/Postres";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../Assets/logo.png";
import Tortlla from "../Components/Tortlla";
import { Button } from "@mui/material";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Nav
        navLogo={
          <figure className="nav__logo--wrapper">
            <img src={Logo} alt="" className="nav__logo" />
          </figure>
        }
        name1="Ceviche"
        icon1={<FontAwesomeIcon icon="fa-solid fa-jar-wheat" />}
        name2="Antipasto"
        icon2={<FontAwesomeIcon icon="fa-solid fa-leaf" />}
        name3="Paella"
        icon3={<FontAwesomeIcon icon="fa-solid fa-utensils" />}
        name4='Tortilla'
        icon4={<FontAwesomeIcon icon="fa-solid fa-stroopwafel" />}
        // name5="Postres"
        // icon5={<FontAwesomeIcon icon="fa-solid fa-cookie-bite" />}
      />
      <Landing />
      <Ceviche />
      <Antipasto />
      <Paella />
      <Tortlla/>
      {/* <Postres/> */}
      <Contactanos />
    </div>
  );
};

export default Home;
