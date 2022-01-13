import CartIcon from '../components/cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span><CartIcon className={classes.icon} /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                0
            </span>
        </button>
    );
};

export default HeaderCartButton;