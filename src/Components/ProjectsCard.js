import React from 'react';
import styles from './ProjectsCard.module.css';

const ProjectsCard = ({ imgSrc, imgAlt, title, desc, tools }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__image}>
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className={styles.container__body}>
        <h2 className={styles.container__body__title}>{title}</h2>
        <p className={styles.container__body__desc}>{desc}</p>
        <p>
          <span className={styles.tools}>Tools Used:</span>
          <br />
          {tools}
        </p>
        <div className={styles.btn__box}>
          <a className={`${styles.btn} ${styles.btn__full}`} href="#">
            Live
          </a>
          <a
            className={`${styles.btn} ${styles.btn__outline}`}
            href="https://github.com/Onionie?tab=repositories"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
