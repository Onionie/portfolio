import React, { useState } from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { IoMenu, IoClose } from 'react-icons/io5';
import styles from './Header.module.css';

const Nav = () => {
  const [hamburger, setHamburger] = useState(true);

  const hamburgerHandler = () => {
    setHamburger(!hamburger);
  };

  const scrollToHandler = () => {
    setHamburger(true);
  };

  return (
    <header className={hamburger ? '' : styles.mobile__nav}>
      <nav>
        <ul>
          <li onClick={scrollToHandler}>
            <a href="#skills">Skills</a>
          </li>
          <li onClick={scrollToHandler}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={scrollToHandler}>
            <a href="https://github.com/Onionie">
              <BsGithub />
            </a>
          </li>
          <li onClick={scrollToHandler}>
            <a href="https://www.linkedin.com/in/onionie/">
              <BsLinkedin />
            </a>
          </li>
          <li onClick={scrollToHandler}>
            <a className={styles.contact} href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.btn__mobile}>
        {hamburger ? (
          <IoMenu onClick={hamburgerHandler} />
        ) : (
          <IoClose onClick={hamburgerHandler} />
        )}
      </div>
    </header>
  );
};

export default Nav;
