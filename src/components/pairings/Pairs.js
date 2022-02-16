import React from 'react';
import { useSelector } from "react-redux";


import classes from './Pairs.module.css';

const Pairs = (props) => {
  const LoginValid = useSelector((state) => state.logInCheck.logedIn);
  return (
    <li className={classes.pairs}>
      <h2>{props.dishName}</h2>
      <p>
        <b>Pairs With:</b>
        <h3> {props.pigProduct}</h3>
      </p>
      <p>
        <b>Ingredients:</b> {props.ingredients}
      </p>

      <img
        src={`${props.image}`}
        alt="pic from backend"
        className={classes.image}
      />
      {LoginValid && <p>{props.isActive}</p>}
    </li>
  );
};

export default Pairs;