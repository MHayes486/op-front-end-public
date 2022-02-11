import React from "react";

import classes from "./MerchCard.module.css";

const MerchCard = (props) => {
  return (
    <li className={classes.merch}>
      <div>
        <h2>{props.itemType}</h2>
        <img
          src={`${props.image}`}
          alt="pic from backend"
          className={classes.imageSize}
        />
      </div>
    </li>
  );
};

export default MerchCard;
