import styles from "./FooterDets.module.css";
import { NavLink } from "react-router-dom";

import navStyles from "./HeaderNav.module.css";

const FooterDets = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerPara}>
        SIMPLE BRAND || SIMPLE PRODUCT
        <br />
        ORCHARD PIG | ALL RIGHTS RESERVED
      </p>

      <nav className={navStyles.nav}>
        <NavLink
          to="/references"
          className={(navData) => (navData.isActive ? navStyles.active : "")}
        >
          References
        </NavLink>
      </nav>
    </footer>
  );
};

export default FooterDets;
