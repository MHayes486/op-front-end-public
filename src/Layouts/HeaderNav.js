import { NavLink } from "react-router-dom";

import styles from "./HeaderNav.module.css";

const HeaderNav = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>OP</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ourcider"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Ciders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/findus"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              FindUs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/merchandise"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Merchandise
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNav;
