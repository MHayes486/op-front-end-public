import { Fragment } from "react";

import AgeChecker from "./AgeChecker";

import styles from "./AgeModal.module.css";

const AgeModal = (props) => {

  return (
    <Fragment>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <AgeChecker />
      <button>Close</button>
    </Fragment>
  );
};

export default AgeModal;
