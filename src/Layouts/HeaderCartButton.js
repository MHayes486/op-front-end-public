import CartIcon from '../components/cart/CartIcon';
import { useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

    const cartQuantity = useSelector((state) => state.cart.totalQuanity);
const navigate = useNavigate();

    const onClick =() =>{
        navigate('/cart');
    };

    return (
      <button className={classes.button} onClick={onClick}>
        <span>
          <CartIcon className={classes.icon} />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{cartQuantity}</span>
      </button>
    );
};

export default HeaderCartButton;
