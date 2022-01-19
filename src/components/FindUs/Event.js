import React from 'react';

import classes from './Event.module.css';

const Event = (props) => {
  return (
    <li className={classes.events}>
      <h2>{props.eventTitle}</h2>
      <h3>{props.eventDate}</h3>
      <h3>{props.eventLocation}</h3>
      <img src={( `${props.image}` )} alt="pic from backend" className={classes.imageSize}/> 
    </li>
  );
};

export default Event;