import React from "react";
import { team } from "../../utils/data";
import "./Team.css";

function Team() {
  return (
    <section className="team py-6 bg-red" id="team">
      <div className="container">
        <div className="section-title bg-dark">
          <h2 className="text-upper text-white text-center">our team</h2>
        </div>
        <div className="team-content grid py-6">
          {team.map((team, index) => (
            <div className="team-item text-center text-white" key={index}>
              <img
                src={team.img}
                alt={`${team.name}`}
                className="mx-auto"
              />
              <p className="text-upper fw-7">{team.name}</p>
              <span className="text-upper">{team.post}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
