import React from "react";
import { useSelector, useDispatch } from "react-redux";

// import MerchItemForm from "./MerchItemForm";
import classes from "./Merch.module.css";
import { cartActions } from "../../store/cart-slice";

const Merch = (props) => {
  const dispatch = useDispatch();

  const LoginValid = useSelector((state) => state.logInCheck.logedIn);

  const id = props.id;
  const tagline = props.itemName;
  const price = props.itemCost;
  const title = props.itemType;
  const quantity = 1;
  const active = props.isActive;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({ id, tagline, price, quantity, title })
    );
  };

  return (
    <li className={classes.merch}>
      <div>
        <h2>{props.itemType}</h2>
        <h3>£{props.itemCost}</h3>
        <p>{props.itemName}</p>
        <img
          src={`${props.image}`}
          alt="pic from backend"
          className={classes.imageSize}
        />
        {LoginValid && <p>{props.active}</p>}
      </div>
      <div>
        <button onClick={addToCartHandler}>Add to Cart</button>
        {/* <MerchItemForm onAddToCart={addToCartHandler} /> */}
      </div>
    </li>
  );
};

export default Merch;
