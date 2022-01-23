import React from "react";

import MerchItemForm from "./MerchItemForm";
import classes from "./Merch.module.css";

const Merch = (props) => {
  return (
    <li className={classes.merch}>
      <div>
        <h2>{props.itemType}</h2>
        <h3>${props.itemCost}</h3>
        <p>{props.itemName}</p>
        <img
          src={`${props.image}`}
          alt="pic from backend"
          className={classes.imageSize}
        />
      </div>
      <div>
        <MerchItemForm />
      </div>
    </li>
  );
};

export default Merch;
