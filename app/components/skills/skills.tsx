"use client";

import React from "react";
import { skills } from "../../portfolio";
import styles from './skills.module.css'; // Updated to use CSS modules

const Skills: React.FC = () => {
  return (
    <section className={styles.section} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.container}>
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className={styles.skillCategory}>
            <h3 className={styles.subTopic}>{category}</h3>
            <ul className={styles.list}>
              {skillList.map((skill, index) => (
                <li key={index} className={`${styles.listItem} btn btn--plain`}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
