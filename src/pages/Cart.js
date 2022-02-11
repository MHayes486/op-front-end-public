import { useSelector } from "react-redux";
import { Fragment } from "react";
import CartItem from "../components/cart/CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalCost = useSelector((state) => state.cart.totalFullPrice);
  const totalQuant = useSelector((state) => state.cart.totalQuantity);
const avgCost = parseFloat(totalCost/totalQuant).toFixed(2);
const shipping = 25.00;
const totalCharge = parseFloat(totalCost) + shipping; 


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
      <div>
        <span>
          Total Cost: £{totalCost} ({totalQuant} items) || (£{avgCost} per
          item);
        </span>
        <span>   ||  Flat shipping rate: £{shipping}, total cost =£{totalCharge}</span>
      </div>
      <div></div>
      <div>Ship To:</div>
    </Fragment>
  );
};

export default Cart;
