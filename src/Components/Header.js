import React, { useState } from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { IoMenu, IoClose } from 'react-icons/io5';
import styles from './Header.module.css';

const Nav = () => {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerHandler = () => {
    setHamburger(!hamburger);
  };

  return (
    <header className={hamburger ? styles.mobile__nav : ''}>
      <nav>
        <ul>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="https://github.com/Onionie">
              <BsGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/onionie/">
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a className={styles.contact} href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
        <div className={styles.btn__mobile}>
          <IoMenu onClick={hamburgerHandler} />
          <IoClose
            className={
              hamburger ? styles.close__btn__hide : styles.close__btn__show
            }
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
