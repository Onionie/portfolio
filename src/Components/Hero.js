import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Remove this after creating skills comp*/}
      <div className={styles.hero__text_height}></div>
      <div className={styles.hero__textbox}>
        <div className={styles.hero__textbox__title__container}>
          <div className={styles.hero__textbox__title}>
            Hello! I'm Oniel Gutierrez.
          </div>
        </div>
        <p className={styles.hero__textbox__body}>
          I'm a Software Developer with a passion to learn and create. I am
          fascinated with building things that live on the internet.
          <br />
          Although I love front-end development, I also like to work with
          back-end technologies such as Node.Js, Express.js and MongoDB.
        </p>
        {/* Needs to fix href */}
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
    </section>
  );
};

export default Hero;
