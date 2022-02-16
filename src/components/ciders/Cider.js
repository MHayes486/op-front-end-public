import React from "react";
import { useSelector } from "react-redux";

import classes from "./Cider.module.css";

const Cider = (props) => {
  const LoginValid = useSelector((state) => state.logInCheck.logedIn);
  return (
    <li className={classes.cider}>
      <h2>{props.ciderTitle}</h2>
      <h3>{props.ciderType}</h3>
      <p>{props.ciderSlogan}</p>
      <img
        src={`${props.image}`}
        alt="pic from backend"
        className={classes.imageSize}
      />
      {LoginValid && <p>{props.isActive}</p>}
    </li>
  );
};

export default Cider;
