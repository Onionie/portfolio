import React, { useState } from 'react';
import ProjectsCard from './ProjectsCard';
import styles from './Projects.module.css';

// images
import eFitImg from '../Assets/images/1.jpg';
import palawanImg from '../Assets/images/2.jpg';
import weatherImg from '../Assets/images/3.jpg';

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

  const renderProject = () => {
    if (eFit) {
      return (
        <ProjectsCard
          imgSrc={eFitImg}
          imgAlt="A screenshot of eFitness website"
          title="eFitness"
          desc="A single-page (SPA) e-Commerce website about Fitness products that lets user access different pages, such as Accessories, Equipments and Supplements. This web application gives the users the ability to add items to their cart. And also use PayPal API for the transaction. This application is built with MongoDB, Express, React, and Node (MERN stack)."
          tools="HTML, CSS, Javascript, MongoDB, Express, React, React-Redux, React-Bootstrap, Node.js, and PayPal API"
          liveLink="https://efitness.onrender.com/"
          codeLink="https://github.com/Onionie/eFitness"
        />
      );
    }
    if (palawan) {
      return (
        <ProjectsCard
          imgSrc={palawanImg}
          imgAlt="A screenshot of palawan website"
          title="Palawan"
          desc="A landing Web page for people that are interested in traveling to Palawan Island in The Philippines. This web page shows users high quality images that highlight the beauty of Palawan."
          tools="HTML, Vanilla CSS, Javascript"
          liveLink="https://onielg-palawan.netlify.app/"
          codeLink="https://github.com/Onionie/Palawan"
        />
      );
    }
    if (weatherApp) {
      return (
        <ProjectsCard
          imgSrc={weatherImg}
          imgAlt="A screenshot of weather app website"
          title="WeatherApp"
          desc="A simple weather application that can retrieve data from OpenWeatherMap API using Node.js. Users can look up a city or a zip code and this Weather Application will fetch data from the back-end and translate it to front-end."
          tools="HTML, CSS, Javascript, Node.js, Express.js, EJS, OpenWeatherMap API"
          liveLink="https://onielg-weather-app.onrender.com/"
          codeLink="https://github.com/Onionie/WeatherApp"
        />
      );
    }
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
      {renderProject()}
    </section>
  );
};

export default Projects;
