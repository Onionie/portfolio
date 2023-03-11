import React from 'react';
import styles from './ProjectsCard.module.css';

import eFit from '../Assets/images/1.PNG';

const ProjectsCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__image}>
        <img src={eFit} alt="Screenshot of eFitness website" />
      </div>
      <div className={styles.container__body}>
        <h2 className={styles.container__body__title}>eFitness</h2>
        <p className={styles.container__body__desc}>
          A single-page (SPA) e-Commerce website about Fitness products that
          lets user access different pages, such as Accessories, Equipments and
          Supplements. This web application gives the users the ability to add
          items to their cart. And also use PayPal API for the transaction. This
          application is built with MongoDB, Express, React, and Node (MERN
          stack).
        </p>
        <p>
          <span className={styles.tools}>Tools Used:</span>
          <br />
          HTML, CSS, Javascript, MongoDB, Express, React, React-Redux,
          React-Bootstrap, Node.js, and PayPal API
        </p>
        <div className={styles.btn__box}>
          <a className={`${styles.btn} ${styles.btn__full}`} href="#">
            My Resume
          </a>
          <a
            className={`${styles.btn} ${styles.btn__outline}`}
            href="https://github.com/Onionie?tab=repositories"
          >
            My Repositories
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
