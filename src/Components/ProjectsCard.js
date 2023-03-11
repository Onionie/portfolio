import React from 'react';
import styles from './ProjectsCard.module.css';

const ProjectsCard = ({
  imgSrc,
  imgAlt,
  title,
  desc,
  tools,
  liveLink,
  codeLink,
}) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.container__image}
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className={styles.container__body}>
        <h2
          className={styles.container__body__title}
          data-aos="fade-left"
          data-aos-delay="800"
        >
          {title}
        </h2>
        <p
          className={styles.container__body__desc}
          data-aos="fade-left"
          data-aos-delay="1200"
        >
          {desc}
        </p>
        <p data-aos="fade-left" data-aos-delay="1500">
          <span className={styles.tools}>Tools Used:</span>
          <br />
          {tools}
        </p>
        <div
          className={styles.btn__box}
          data-aos="fade-left"
          data-aos-delay="1800"
        >
          <a className={`${styles.btn} ${styles.btn__full}`} href={liveLink}>
            Live
          </a>
          <a className={`${styles.btn} ${styles.btn__outline}`} href={codeLink}>
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
