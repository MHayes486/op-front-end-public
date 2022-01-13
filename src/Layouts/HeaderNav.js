import { NavLink } from "react-router-dom";
import { useState } from 'react';
import HeaderCartButton from "./HeaderCartButton";
import styles from "./HeaderNav.module.css";
import Cart from '../components/cart/Cart';

const HeaderNav = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <header className={styles.header}>
      <img src="./images/Orchard_Pig_Logo.png" className={styles.pig_logo} alt="pics from backend" />

      <nav className={styles.nav}>
        <ul>
          {cartIsShown && <Cart />}
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
