import { useDispatch } from "react-redux";

import classes from "./CartItem.module.css";
import styles from "../../pages/styles/Home.module.css";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const id = props.item.id;
  const tagline = props.item.tag;
  const price = props.item.price;
  const title = props.item.title;
  const total = props.item.total;
  const quantity = props.item.quantity;

  const dispatch = useDispatch();


   const removeItemHandler = () => {
     dispatch(cartActions.removeItemFromCart(id, quantity));
   };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({ id, tagline, price, title })
    );
  };

  return (
    <li className={classes.cartItem}>
      <header>
        <h3 className={classes.itemh3}>{title}</h3>
        <h4 className={classes.itemh4}>{tagline}</h4>

        <div className={classes.price}>
          <span className={classes.price}>Amount: {quantity}   ||  </span>SubTotal: £
          {total} <span className={classes.itemprice}>(£{price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          <span className={classes.quantitySpan}>
            £{price} x {quantity}
          </span>
        </div>
        <div className={classes.actions}>
          <button className={classes.actionsBtns} onClick={removeItemHandler}>
            -
          </button>
          <button className={classes.actionsBtns} onClick={addItemHandler}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
