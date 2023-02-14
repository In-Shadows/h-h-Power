import React from "react";

import "./design.scss";
import HighRise from "../../assets/high-rise.png";
import BIM from "../../assets/bim.png";
import Corporate from "../../assets/corporate.png";

const Design = () => {
  return (
    <section className="container design">
      <h2 className="secondary-heading design__heading">Design Services</h2>
      <p className="design__text">
        2D and 3D Services MEP Design Services with PMC and Estimation
      </p>

      <div className="design__cards">
        <figure className="design__card">
          <div className="design__card__img">
            <img src={HighRise} alt="High rise building design" />
          </div>
          <div className="design__card__content">
            <figcaption className="design__card__caption">
              High Rise Building Design
            </figcaption>
            <p className="design__card__text">
              To Provide Design, PMC and BMC service where our BIM team
              coordinated with PMC tam to achieve the required quality and saved
              construction cost and time through clash detection, accurate
              construction drawing.
            </p>
            <button className="design__card__btn">Learn More</button>
          </div>
        </figure>
        <figure className="design__card">
          <div className="design__card__img">
            <img src={Corporate} alt="Coporate design" />
          </div>
          <div className="design__card__content">
            <figcaption className="design__card__caption">
              Corporate Design
            </figcaption>
            <p className="design__card__text">
              BIM services where our BIM team coordinated with PMC team to
              achieve the required quality and saved construction cost and time
              through clash detection, accurate construction drawing.
            </p>
            <button className="design__card__btn">Learn More</button>
          </div>
        </figure>
        <figure className="design__card">
          <div className="design__card__img">
            <img src={BIM} alt="BIM design" />
          </div>
          <div className="design__card__content">
            <figcaption className="design__card__caption">
              BIM To Scan Design
            </figcaption>
            <p className="design__card__text">
              Project team develops a 3D model of the existing condition for a
              site, or a specific area within a facility. Model is constructed,
              it can be queried for information, whether it is for new
              construction or a modernization project.
            </p>
            <button className="design__card__btn">Learn More</button>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Design;
