import React from "react";

import "./smartHome.scss";
import smartHome from "../../assets/smart-home.png";

const SmartHome = () => {
  return (
    <section className="smart-home container">
      <h2 className="secondary-heading smart-home__heading">Smart Home</h2>
      <div className="smart-home__content">
        <div className="smart-home__text">
          <p>
            H&H aims to ﬁll the void of smart automation in their customer
            lives. We offer smart retroﬁt solutions which bring efﬁciency,
            security, accessibility and affordability.{" "}
          </p>
          <p>
            In combination with those beneﬁts, we bring comfort, convenience and
            luxury to every home, corporate ofﬁce or hospitality, be it a new or
            pre-constructed building.{" "}
          </p>
        </div>
        <div className="smart-home__image">
          <img src={smartHome} alt="smart-home" />
        </div>
      </div>
    </section>
  );
};

export default SmartHome;
