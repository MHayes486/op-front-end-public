import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
import CartItem from "../components/cart/CartItem";
import { placeOrder } from "../lib/api";
import useHttp from "../hooks/use-http";
import CartForm from "../components/cart/CartForm";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../store/cart-slice";
import styles from "./styles/Home.module.css"

const Cart = () => {
  const { sendRequest, status } = useHttp(placeOrder);
    const navigate = useNavigate();
     const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const totalCost = useSelector((state) => state.cart.totalFullPrice);
  const totalQuant = useSelector((state) => state.cart.totalQuantity);
  const avgCost = parseFloat(totalCost / totalQuant).toFixed(2);
  const shipping = 25.0;
  const totalCharge = parseFloat(totalCost) + shipping;

   

  // const submitOrder = (e) => {
  //   e.preventDefault();
  //   const deliveryDetails = (nameValue, addressValue, emailAddress);

  //   console.log(deliveryDetails);
  //   console.log(cartItems);
  // };
  const placeOrderHandler = (orderData) => {
    sendRequest(orderData);
  };
      useEffect(() => {
        if (status === "completed") {
          dispatch(cartActions.resetCart());
          navigate("/");

        }
      }, [status, navigate]);

  return (
    <Fragment>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.itemId}
            item={{
              id: item.itemId,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
              tag: item.tag,
            }}
          />
        ))}
      </ul>
      <div className={styles.home_merch_h6}>
        <span >
          Total Cost: £{totalCost} ({totalQuant} items) || (£{avgCost} per
          item);
        </span>
        <span>
          {" "}
          || Flat shipping rate: £{shipping}, total cost =£{totalCharge}
        </span>
      </div>
      <div></div>
      <div >
     
        <CartForm placeOrder={placeOrderHandler} />
      </div>
      {/* <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={nameValue}></input>
        <label htmlFor="adress">Deliver Address:</label>
        <input type="textarea" id="adress" value={addressValue}></input>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" value={emailAddress}></input>
        <button onClick={submitOrder}>Place order</button>
      </form> */}
    </Fragment>
  );
};

export default Cart;
