import React from "react";
import { whatWeDo } from "../../utils/data";
import "./WhatWeDo.css";

function WhatWeDo() {
  return (
    <section className="what-we-do py-6" id="what-we-do">
      <div className="container">
        {/* title */}
        <div className="section-title bg-dark">
          <h2 className="text-upper text-white text-center">what we do</h2>
        </div>
        {/* what we do content */}
        <div className="what-we-do-content">
          {whatWeDo.map((item, index) => (
            <div className="what-we-do-item grid text-center" key={index}>
              <div className="what-we-do-item-left">
                <img src={item.image} alt="laptop image" className="mx-auto" />
              </div>
              <div className="what-we-do-right">
                <h4 className="text-upper fs-20 section-title">{item.title}</h4>
                <p className="text mx-auto">{item.paragraph}</p>
                <a href="#" className="btn btn-red">
                  view more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
