import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const HomeBtn = () => {
  return (
    <Link to="/">
      <button className="contact__btn">
        <FontAwesomeIcon icon="fa-solid fa-house" />
      </button>
    </Link>
  );
};

export default HomeBtn;
