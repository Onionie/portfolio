import React, { useEffect } from 'react';
import styles from './Hero.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true }, []);
  });
  return (
    <section className={styles.hero}>
      <div className={styles.hero__textbox}>
        <div className={styles.hero__textbox__title__container}>
          <div className={styles.hero__textbox__title}>
            Hello! I'm Oniel Gutierrez.
          </div>
        </div>
        <p
          className={styles.hero__textbox__body}
          data-aos="fade-right"
          data-aos-delay="1900"
        >
          I'm a Software Developer with a passion to learn and create. I am
          fascinated with building things that live on the internet.
          <br />
          Although I love front-end development, I also like to work with
          back-end technologies such as Node.Js, Express.js and MongoDB.
        </p>
        <div data-aos="fade-right" data-aos-delay="2100">
          <a
            className={`${styles.btn} ${styles.btn__full}`}
            href="https://drive.google.com/file/d/1VmbQ67KnbyMJx9_7zMzrJFzy360DHM9j/view"
            target="_blank"
          >
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
    </section>
  );
};

export default Hero;
