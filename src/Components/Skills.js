import React from 'react';
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoNodejs,
} from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { BsBootstrapFill, BsGit } from 'react-icons/bs';
import { SiExpress, SiMongodb } from 'react-icons/si';
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.skills__box}>
        <h1>Skills</h1>
        <div className={styles.skills_logo_box}>
          <ul>
            <li className={styles.html}>
              <IoLogoHtml5 />
              HTML
            </li>
            <li className={styles.css}>
              <IoLogoCss3 />
              CSS
            </li>
            <li className={styles.javascript}>
              <IoLogoJavascript />
              Javascript
            </li>
          </ul>
          <ul>
            <li className={styles.react}>
              <FaReact />
              React
            </li>
            <li className={styles.bootstrap}>
              <BsBootstrapFill />
              Bootstrap
            </li>
            <li className={styles.git}>
              <BsGit />
              Git
            </li>
          </ul>
          <ul>
            <li className={styles.node}>
              <IoLogoNodejs />
              Node.js
            </li>
            <li>
              <SiExpress />
              Express.js
            </li>
            <li className={styles.mongo}>
              <SiMongodb />
              MongoDB
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
