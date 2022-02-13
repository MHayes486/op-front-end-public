import React from "react";

import MerchItemForm from "./MerchItemForm";
//import classes from "../../merchandise/MerchCard.module.css";
import classes from './Admin-Merch.modules.css';

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
