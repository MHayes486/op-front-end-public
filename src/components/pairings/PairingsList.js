import React from 'react';

import Pairs from './Pairs';
import classes from './PairingsList.module.css';

const PairingsList = (props) => {
  return (
    <ul className={classes['pairings-list']}>
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