import classes from "./Cart.module.css";
import CartModal from "./CartModal";

const CartInfo = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "m1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <CartModal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </CartModal>
  );
};

export default CartInfo;
