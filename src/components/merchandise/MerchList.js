import React from 'react';

import Merch from './Merch';
import classes from './MerchList.module.css';

const MerchList = (props) => {
  const merchURL = "";

  return (
    <ul className={classes['merch-list']}>
      {props.merch.map((merch) => (
        <Merch
          key={merch.id}
          itemType={merch.itemType}
          itemCost={merch.itemCost}
          itemName={merch.itemName}
          image={merch.image}          
        />
      ))}
    </ul>
  );
};

export default MerchList;