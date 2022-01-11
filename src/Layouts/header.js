import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>OP</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ourcider"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Ciders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/findus"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              FindUs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/merch"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Merch
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
