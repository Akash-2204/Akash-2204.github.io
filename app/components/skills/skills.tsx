"use client";

import React from "react";
import uniqid from "uniqid";
import { skills } from "../../portfolio";
import "./skills.css";

const Skills: React.FC = () => {
    return (
      <section className="section skills" id="skills">
        <h2 className="section__title">Skills</h2>
        {Object.entries(skills).map(([category, skillList]) => (
          <React.Fragment key={category}>
            <h3>{category}</h3>
            <ul className="skills__list">
              {skillList.map((skill, index) => (
                <li key={index} className="skills__list-item btn btn--plain">
                  {skill}
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </section>
    );
  };
  
  export default Skills;
