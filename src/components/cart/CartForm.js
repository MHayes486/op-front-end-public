import useInput from "../../hooks/use-input";
import { useSelector } from "react-redux";

import classes from "./Cart.module.css";
import styles from "../UI/SignUp.module.css";

const isNotEmpty = (value) => value.trim() !== "";

function CartForm(props) {
  const cartItems = useSelector((state) => state.cart.items);
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetname,
  } = useInput(isNotEmpty);

  const {
    value: deliveryAddressValue,
    isValid: deliveryAddressValid,
    hasError: deliveryAddressHasError,
    valueChangeHandler: deliveryAddressChangeHandler,
    inputBlurHandler: deliveryAddressBlurHandler,
    reset: resetdeliveryAddress,
  } = useInput(isNotEmpty);

  const {
    value: emailAddressValue,
    isValid: emailAddressValid,
    hasError: emailAddressHasError,
    valueChangeHandler: emailAddressChangeHandler,
    inputBlurHandler: emailAddressBlurHandler,
    reset: resetemailAddress,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (nameIsValid && emailAddressValid && deliveryAddressValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.placeOrder({
      name: nameValue,
      emailAddress: emailAddressValue,
      delAddress: deliveryAddressValue,
      order: cartItems,
      isActive: false,
    });

    resetname();
    resetemailAddress();
    resetdeliveryAddress();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="submittedname">Name:</label>
        <input
          type="text"
          value={nameValue}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          id="submittedname"
        />
        {nameHasError && <p className="error-text">Please enter your name.</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="submittedemailAddress">Email address</label>
        <input
          type="text"
          value={emailAddressValue}
          onChange={emailAddressChangeHandler}
          onBlur={emailAddressBlurHandler}
          id="submittedemailAddress"
        />
        {deliveryAddressHasError && (
          <p className="error-text">Please enter your email address.</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="submitteddeliveryAddress">Delivery Address</label>
        <input
          type="text"
          value={deliveryAddressValue}
          onChange={deliveryAddressChangeHandler}
          onBlur={deliveryAddressBlurHandler}
          id="submitteddeliveryAddress"
        />
        {emailAddressHasError && (
          <p className="error-text">Please enter your delivery address.</p>
        )}
      </div>
      <div className="form-actions">
        <button className="formButton" disabled={!formIsValid}>
          Place order
        </button>
      </div>
    </form>
  );
}

export default CartForm;
