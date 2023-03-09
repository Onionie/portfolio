import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.skills__box}>
        <h1>Skills</h1>
        <div className={styles.skills_logo_box}>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
          </ul>
          <ul>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Git</li>
          </ul>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
