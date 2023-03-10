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
            <li>
              <IoLogoHtml5 />
              HTML
            </li>
            <li>
              <IoLogoCss3 />
              CSS
            </li>
            <li>
              <IoLogoJavascript />
              Javascript
            </li>
          </ul>
          <ul>
            <li>
              <FaReact />
              React
            </li>
            <li>
              <BsBootstrapFill />
              Bootstrap
            </li>
            <li>
              <BsGit />
              Git
            </li>
          </ul>
          <ul>
            <li>
              <IoLogoNodejs />
              Node.js
            </li>
            <li>
              <SiExpress />
              Express.js
            </li>
            <li>
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
