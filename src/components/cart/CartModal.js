import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {useSelector} from 'react-redux';



import CartItem from "./CartItem"
import classes from './CartModal.module.css';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
};

const CartModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const portalElement = document.getElementById('overlays');


const CartModal = (props) => {
    const cartItems = useSelector((state)=> state.cart.items);
    return (
      <Fragment>
        <h2>Your Order</h2>
        <ul>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.name,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
              }}
            />
          ))}
        </ul>
      </Fragment>
    );
}
// const CartModal = props => {
//     return (
//         <Fragment>
//             {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)};
//             {ReactDOM.createPortal(<CartModalOverlay>{props.children}</CartModalOverlay>, portalElement)};
//         </Fragment>
//     );
// };

export default CartModal;