import React, { useState } from 'react';
import ProjectsCard from './ProjectsCard';
import styles from './Projects.module.css';

// images
import efit from '../Assets/images/1.PNG';

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
      <ProjectsCard
        imgSrc={efit}
        imgAlt="A screenshot of eFitness website"
        title="eFitness"
        desc="A single-page (SPA) e-Commerce website about Fitness products that lets user access different pages, such as Accessories, Equipments and Supplements. This web application gives the users the ability to add items to their cart. And also use PayPal API for the transaction. This application is built with MongoDB, Express, React, and Node (MERN stack)."
        tools="HTML, CSS, Javascript, MongoDB, Express, React, React-Redux, React-Bootstrap, Node.js, and PayPal API"
      />
    </section>
  );
};

export default Projects;
