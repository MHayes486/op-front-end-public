import styles from "./FooterDets.module.css";
import { NavLink } from "react-router-dom";

import navStyles from "./HeaderNav.module.css";

const FooterDets = () => {
  return (
    <footer className={styles.footer}>
      <nav className={navStyles.nav}>
        <ul>
          <li>
            <h5>SIMPLE BRAND || SIMPLE PRODUCT</h5>
          </li>
          <li>
            <p>ORCHARD PIG | ALL RIGHTS RESERVED</p>
          </li>
          <li>
            <NavLink
              to="/references"
              className={(navData) =>
                navData.isActive ? navStyles.active : ""
              }
            >
              References
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default FooterDets;
