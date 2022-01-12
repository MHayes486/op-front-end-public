import { Fragment } from "react";

import styles from "./Layout.module.css";
import HeaderNav from ".././Layouts/HeaderNav";
import FooterDets from ".././Layouts/FooterDets";

const Layout = (props) => {
  return (
    <Fragment>
      <HeaderNav />
      <main className={styles.main}>{props.children}</main>
      <FooterDets />
    </Fragment>
  );
};

export default Layout;
