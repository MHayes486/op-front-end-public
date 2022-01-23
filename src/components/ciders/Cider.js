import React from 'react';

import classes from './Cider.module.css';

const Cider = (props) => {
  return (
    <li className={classes.cider}>
      <h2>{props.ciderTitle}</h2>
      <h3>{props.ciderType}</h3>
      <p>{props.ciderSlogan}</p>
      <img src={( `${props.image}` )} alt="pic from backend" className={classes.imageSize}/> 
    </li>
  );
};

export default Cider;