import React from "react";
import { useDispatch } from "react-redux";

import MerchItemForm from "./MerchItemForm";
import classes from "../../merchandise/Merch.module.css";
import { cartActions } from "../../../store/cart-slice";

const Merch = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({}));
  };


  return (
    <li className={classes.merchAdmin}>
      <div>
        <h2>{props.itemType}</h2>
        <h3>${props.itemCost}</h3>
        <p>{props.itemName}</p>
        <img
          src={`${props.image}`}
          alt="pic from backend"
          className={classes.imageSizeAdmin}
        />
      </div>
      <div>
        <MerchItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default Merch;
