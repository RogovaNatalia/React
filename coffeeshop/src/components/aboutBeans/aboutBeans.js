import React from "react";
import "./aboutBeans.scss";
import LogoBeans from "../resources/Beans_logo_black.svg";
import Drinking from "../resources/drinking_coffee.jpg";

const AboutBeans = () => {
  return (
    <div className="aboutBeans">
      <img
        className="aboutBeans__img"
        src={Drinking}
        alt="Girl drinking coffee"
      />
      <div className="aboutBeans__container">
        <h1 className="aboutBeans__title">About our beans</h1>
        <img className="about__logo-img" src={LogoBeans} alt="LogoBeans" />
        <p className="aboutBeans__subtitle">
          Extremity sweetness difficult behaviour he of. On disposal of as
          landlord horrible.
        </p>
        <p className="aboutBeans__subtitle">
          Afraid at highly months do things on at. Situation recommend objection
          do intention<br></br> so questions.<br></br> As greatly removed
          calling pleased improve an. Last ask him cold feel<br></br> met spot
          shy want. Children me laughing we prospect answered followed. At it
          went is song that held help face.
        </p>
      </div>
    </div>
  );
};

export default AboutBeans;
