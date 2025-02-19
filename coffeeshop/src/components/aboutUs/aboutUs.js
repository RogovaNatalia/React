import React from "react";
import "./aboutUs.scss";
import LogoBeans from "../resources/Beans_logo_black.svg";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <h1 className="aboutUs__title">About Us</h1>
      <img className="aboutUs__logo-img" src={LogoBeans} alt="LogoBeans" />
      <p className="aboutUs__subtitle">
        Extremity sweetness difficult behaviour he of. On disposal of as
        landlord horrible. Afraid at highly months do things on at. Situation
        recommend objection do intention so questions. As greatly removed
        calling pleased improve an. Last ask him cold feel met spot shy want.
        Children me laughing we prospect answered followed. At it went is song
        that held help face.
      </p>
      <p className="aboutUs__subtitle">
        Now residence dashwoods she excellent you. Shade being under his bed
        her, Much read on as draw. Blessing for ignorant exercise any yourself
        unpacked. Pleasant horrible but confined day end marriage. Eagerness
        furniture set preserved far recommend. Did even but nor are most gave
        hope. Secure active living depend son repair day ladies now.
      </p>
    </div>
  );
};

export default AboutUs;
