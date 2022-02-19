import React from 'react';

import Pairs from './Pairs';
import classes from './PairingsList.module.css';

const PairingsList = (props) => {
  return (
    // <ul className={classes['pairings-list']}>
    <ul className="list-group list-group-horizontal-lg">
      {props.pairs.map((pairs) => (
        <Pairs
          key={pairs.id}
          pigProduct={pairs.pigProduct}
          dishName={pairs.dishName}
          ingredients={pairs.ingredients}
          image={pairs.image}
        />
      ))}
    </ul>
  );
};

export default PairingsList;