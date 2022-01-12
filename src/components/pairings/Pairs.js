import React from 'react';

import classes from './Pairs.module.css';

const Pairs = (props) => {
  return (
    <li className={classes.pairs}>
      <h2>{props.dishName}</h2>
      <h3>{props.pigProduct}</h3>
      <p>{props.ingredients}</p>
      <p>{props.image}</p>
      <img src={props.image} alt="pic from backend"/> 
    </li>
  );
};

export default Pairs;