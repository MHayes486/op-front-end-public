import { Fragment } from "react";
import styles from "./SignUp.module.css";

const SignUp = () => {
  return (
    <Fragment>
      <h2>Connect with us</h2>
      <p>
        Please get in contact with any queries you have ana a member of our team
        will get back to you soon.
      </p>
      <form className={styles.form}></form>
    </Fragment>
  );
};

export default SignUp;
