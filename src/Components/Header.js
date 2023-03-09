import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import './styles.css';

const Nav = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="https://github.com/Onionie?tab=repositories">
              <BsGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/onionie/">
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a className="contact" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
