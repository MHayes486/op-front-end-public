import React from 'react';

import Merch from './Merch';
import classes from './MerchList.module.css';

const MerchList = (props) => {

  return (
    <ul className={classes['merch-list']}>
      {props.merch.map((merch) => (
        <Merch
          id={merch.id}
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