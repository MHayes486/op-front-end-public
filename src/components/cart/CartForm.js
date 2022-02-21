import useInput from "../../hooks/use-input";
import { useSelector } from "react-redux";

import classes from "./Cart.module.css";
import styles from "../UI/SignUp.module.css";
import styling from "../../pages/styles/Home.module.css";

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
      <p className={styling.home_merch_h3}>Ship to:</p>
      <div className={classes.control}>
        <label htmlFor="submittedname"></label>
        <input
          className={styling.form_input}
          placeholder="First and last name"
          type="text"
          value={nameValue}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          id="submittedname"
        />
        {nameHasError && <p className="error-text">Please enter your name.</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="submittedemailAddress"></label>
        <input
          className={styling.form_input}
          placeholder="Email address"
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
        <label htmlFor="submitteddeliveryAddress"></label>
        <input
          className={styling.form_input}
          placeholder="Delivery shipping address"
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
        <button className={styling.form_register_button} disabled={!formIsValid}>
          Place order
        </button>
      </div>
    </form>
  );
}

export default CartForm;
