import React from 'react';

import OurPairings from './OurPairings';
import classes from './PairingsList.module.css';

const PairingsList = (props) => {
  return (
    <ul >
      {props.ourPairings.map((ourPairings) => (
        <OurPairings
          key={ourPairings.id}
          pigProduct={ourPairings.pigProduct}
          itemCost={ourPairings.itemCost}
          itemName={ourPairings.itemName}
          image={ourPairings.image}          
        />
      ))}
    </ul>
  );
};

export default PairingsList;