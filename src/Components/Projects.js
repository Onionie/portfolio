import React, { useState } from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  const [eFit, setEFit] = useState(true);
  const [palawan, setPalawan] = useState(false);
  const [weatherApp, setWeatherApp] = useState(false);

  const eFitHandler = () => {
    setEFit(true);
    setPalawan(false);
    setWeatherApp(false);
  };

  const palawanHandler = () => {
    setEFit(false);
    setPalawan(true);
    setWeatherApp(false);
  };

  const weatherHandler = () => {
    setEFit(false);
    setPalawan(false);
    setWeatherApp(true);
  };

  return (
    <section id="projects" className={styles.projects}>
      <h1 className={styles.projects__title}>Projects</h1>
      <ul className={styles.projects__tabs}>
        <li onClick={eFitHandler} className={eFit ? styles.tab__active : ''}>
          eFitness
        </li>
        <li
          onClick={palawanHandler}
          className={palawan ? styles.tab__active : ''}
        >
          Palawan
        </li>
        <li
          onClick={weatherHandler}
          className={weatherApp ? styles.tab__active : ''}
        >
          Weather App
        </li>
      </ul>
    </section>
  );
};

export default Projects;
