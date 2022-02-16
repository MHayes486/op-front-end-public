import React from "react";
import { useSelector } from "react-redux";

import classes from "./Event.module.css";

const Event = (props) => {
  const LoginValid = useSelector((state) => state.logInCheck.logedIn);
  return (
    <li className={classes.events}>
      <h2>{props.eventName}</h2>
      <h3>{props.eventAddress}</h3>
      <img
        src={`${props.image}`}
        alt="pic from backend"
        className={classes.imageSize}
      />
      {LoginValid && <p>{props.isActive}</p>}
    </li>
  );
};

export default Event;
