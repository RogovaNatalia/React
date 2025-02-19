import React from "react";
import PropTypes from "prop-types";
import "./hero-section.scss";
import LogoBeans from "../resources/Beans_logo.svg";

const HeroSection = ({ title, marginTop }) => {
  return (
    <section className="hero-section">
      <div className="hero-section__content">
        <h1 className="hero-section__title" style={{ marginTop }}>
          {title || "Everything You Love About Coffee"}
        </h1>
        {!title && (
          <>
            <img
              className="hero-section__logo-img"
              src={LogoBeans}
              alt="LogoBeans"
            />
            <p className="hero-section__subtitle">
              We makes every day full of energy and taste
              <br /> Want to try our beans?
            </p>
            <a href="#our-coffee" className="hero-section__button">
              More
            </a>
          </>
        )}
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string,
};

export default HeroSection;
