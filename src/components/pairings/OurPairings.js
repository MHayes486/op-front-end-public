import React from 'react';

import classes from './OurPairings.module.css';

const OurPairings = (props) => {
  return (
    <li className={classes.ourPairings}>
      <h2>{props.pigProduct}</h2>
      <h3>{props.itemCost}</h3>
      <p>{props.itemName}</p>
      <p>{props.image}</p>
      <img src={props.image} alt="pic from backend"/> 
    </li>
  );
};

export default OurPairings;