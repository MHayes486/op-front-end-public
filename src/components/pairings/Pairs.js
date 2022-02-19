import React from 'react';

import classes from './Pairs.module.css';

const Pairs = (props) => {
  return (
    <li className="list-group-item">
      <div className={classes.pairs}>
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
      </div>
    </li>
  );
};

export default Pairs;