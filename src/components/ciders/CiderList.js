import React from 'react';

import Cider from './Cider';
import classes from './CiderList.module.css';

const CiderList = (props) => {

  return (
    <ul className={classes['cider-list']}>
      {props.cider.map((cider) => (
        <Cider
          key={cider.id}
          ciderTitle={cider.ciderTitle}
          ciderType={cider.ciderType}
          ciderSlogan={cider.ciderSlogan}
          image={cider.image}          
        />
      ))}
    </ul>
  );
};

export default CiderList;