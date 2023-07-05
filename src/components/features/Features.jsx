import React from "react";
import { features } from "../../utils/data";
import "./Features.css";

function Features() {
  return (
    <section className="features py-6" id="features">
      <div className="container">
        <div className="section-title bg-dark">
          <h2 className="text-upper text-white text-center">our features</h2>
        </div>
        <div className="features-content grid py-6">
          {features.map((feature, index) => (
            <div
              className="features-item text-center"
              key={index}
              data-aos="zoom-in"
            >
              <div className="features-item-icon">
                <img
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  className="mx-auto"
                />
              </div>
              <div className="features-item-text">
                <h2>{feature.title}</h2>
                <p className="text mx-auto">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
