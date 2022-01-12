import React from 'react';

import classes from './Merch.module.css';

const Merch = (props) => {
  return (
    <li className={classes.merch}>
      <h2>{props.itemType}</h2>
      <h3>{props.itemCost}</h3>
      <p>{props.itemName}</p>
      <p>{props.image}</p>
      <img src={( `${props.image}` )} alt="pic from backend"/> 
    </li>
  );
};

export default Merch;