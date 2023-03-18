import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <ul>
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
          <a href="mailto:gutierrezoniel97@gmail.com">
            <FiMail />
          </a>
        </li>
      </ul>
      <div className={styles.copy}>
        <a href="https://github.com/Onionie/My_Portfolio">
          &copy; Oniel Gutierrez
        </a>
      </div>
    </footer>
  );
};

export default Footer;
