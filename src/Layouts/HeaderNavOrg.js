import { NavLink } from "react-router-dom";
import { useState } from "react";
import HeaderCartButton from "./HeaderCartButton";
import styles from "./HeaderNav.module.css";
import CartInfo from "../components/cart/CartInfo";
import { useNavigate } from "react-router-dom";

const HeaderNav = (props) => {
  // const [cartIsShown, setCartIsShown] = useState(false);

  // const showCartHandler = () => {
  //   setCartIsShown(true);
  // };

  // const hideCartHandler = () => {
  //   setCartIsShown(false);
  // };
  const navigate = useNavigate();

  const showCartHandler = () => {
    navigate("/cart");
  };

  return (
    <CartProvider>
      <header className={styles.header} onShowCart={showCartHandler}>
        <img
          src="./logo192.png"
          className={styles.pig_logo}
          alt="pics from backend"
        />

        <nav className={styles.nav}>
          <ul>
            {cartIsShown && <CartInfo onClose={hideCartHandler} />}
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
              <HeaderCartButton onClick={showCartHandler} />
            </li>
          </ul>
        </nav>
      </header>
    </CartProvider>
  );
};

export default HeaderNav;
