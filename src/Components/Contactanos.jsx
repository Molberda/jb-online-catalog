import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Contactanos = () => {
  return (
    <Link to="/contact">
      <button className="contact__btn">
        <FontAwesomeIcon icon="fa-regular fa-envelope" />
      </button>
    </Link>
  );
};

export default Contactanos;
