import React from 'react';
import './styles.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__text_height"></div>
      <div className="hero__textbox">
        <div className="hero__textbox__title__container">
          <div className="hero__textbox__title">
            Hello! I'm Oniel Gutierrez.
          </div>
        </div>
        <p className="hero__textbox__body">
          I'm a Software Developer with a passion to learn and create. I am
          fascinated with building things that live on the internet.
          <br />
          Although I love front-end development, I also like to work with
          back-end technologies such as Node.Js, Express.js and MongoDB.
        </p>
      </div>
    </section>
  );
};

export default Hero;
