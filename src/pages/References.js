import { Fragment } from "react";
import styles from ".././Layouts/FooterDets.module.css";

const References = () => {
  return (
    <Fragment>
      <div className={styles.card}>
        <h2 calssName={styles.heading1}>Here be references</h2>

        <ul className={styles.codeRefs}>
          <li>
            The basis of this site is from the training provided by:
            Schwarzmüller, Maximilian. 2022. "React - The Complete Guide (Incl
            Hooks, React Router, Redux)". Udemy.
            <a
              href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.udemy.com/course/react-the-complete-guide-incl-redux/.
            </a>
          </li>
          <li>
            Backend connection (useHttp,js and api.js) modified code from Udemy
            course: Schwarzmüller, Maximilian. 2022. "React - The Complete Guide
            (Incl Hooks, React Router, Redux)". Udemy.
            <a
              href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.udemy.com/course/react-the-complete-guide-incl-redux/.
            </a>
          </li>
          <li>
            Age verification supplied and modified by agechecker from npm:
            Izolate. 2022. "Agegate". Npm. Accessed January 19.
            <a
              href="https://www.npmjs.com/package/agegate"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.npmjs.com/package/agegate.
            </a>
          </li>
          <li>
            Homepage carousels modified from the react-multi-carousel from npm:
            yizhuang. 2022. "React-Multi-Carousel". Npm. Accessed January 19. .
            <a
              href="https://www.npmjs.com/package/react-multi-carousel"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.npmjs.com/package/react-multi-carousel.
            </a>
          </li>
        </ul>
        <p className={styles.disclaimer}>
          This website has been created as part of an assignment in an approved
          course of study for Curtin University and contains copyright material
          not created by the author. All copyright material used remains
          copyright of the respective owners and has been used here pursuant to
          Section 40 of the Copyright Act 1968 (Commonwealth of Australia). No
          part of this work may be reproduced without consent of the original
          copyright owners. See code comments for references. Website created at{" "}
          <a href="https://www.curtin.edu.au/">Curtin University Australia.</a>
        </p>
        <hr></hr>
        <p className={styles.authors}>
          Website built by Team Apricot: Adam Walker, Kym Nazim, Michael Hayes
          and Zac Roberts
          <sup>&copy; 2022</sup>
        </p>
      </div>
    </Fragment>
  );
};

export default References;
