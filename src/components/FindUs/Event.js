import React from 'react';

import classes from './Event.module.css';

const Event = (props) => {
  return (
    <li className={classes.event}>
      <h2>{props.eventName}</h2>
      <h3>{props.eventAddress}</h3>
      <img src={( `${props.image}` )} alt="pic from backend" className={classes.imageSize}/> 
    </li>
  );
};

export default Event;