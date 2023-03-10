import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h1 className={styles.projects__title}>Projects</h1>
      <ul className={styles.projects__tabs}>
        <li className={styles.tab__active}>eFitness</li>
        <li>Palawan</li>
        <li>Weather App</li>
      </ul>
    </section>
  );
};

export default Projects;
