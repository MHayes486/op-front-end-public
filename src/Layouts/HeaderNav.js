import { NavLink } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton";
import styles from "./HeaderNav.module.css";

const HeaderNav = () => {
  return (
    <header className={styles.header}>
      <img src="./images/Orchard_Pig_Logo.png" className={styles.pig_logo} alt="pics from backend" />

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
              to="/pairings"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Pairings
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
          <li>
            <HeaderCartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNav;
