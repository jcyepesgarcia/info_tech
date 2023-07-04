import React from "react";
import laptop_img from "../../assets/images/laptop_img.jpg";
import "./Support.css";

function Support() {
  return (
    <section className="support py-6" id="support">
      <div className="container">
        <div className="section-title bg-dark">
          <h2 className="text-upper text-white text-center">
            updates & support
          </h2>
        </div>
        <div className="support-content grid py-6 text-center">
          <div className="support-content-left">
            <p className="text mx-auto">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              officia officiis, hic repudiandae ipsa natus assumenda non
              blanditiis debitis. Autem iure vel exercitationem quibusdam
              asperiores velit itaque nisi magnam necessitatibus!
            </p>
            <p className="text mx-auto">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore ipsam eius nobis! Qui, repudiandae iure.
            </p>
            <a href="#support" className="btn btn-red">
              support center
            </a>
          </div>
          <div className="support-content-right">
            <img src={laptop_img} alt="laptop screen" className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;
// 1:02:30
