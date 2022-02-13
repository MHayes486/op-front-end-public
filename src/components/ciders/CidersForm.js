import { useState } from "react";
import useInput from "../../hooks/use-input";

import classes from "./AddCiders.module.css";
import styles from "../UI/SignUp.module.css";

const isNotEmpty = (value) => value.trim() !== "";

function CidersForm(props) {


  const {
    value: ciderNameValue,
    isValid: ciderNameIsValid,
    hasError: ciderNameHasError,
    valueChangeHandler: ciderNameChangeHandler,
    inputBlurHandler: ciderNameBlurHandler,
    reset: resetciderName,
  } = useInput(isNotEmpty);

  const {
    value: ciderSloganValue,
    isValid: ciderSloganValid,
    hasError: ciderSloganHasError,
    valueChangeHandler: ciderSloganChangeHandler,
    inputBlurHandler: ciderSloganBlurHandler,
    reset: resetciderSlogan,
  } = useInput(isNotEmpty);

  const {
    value: ciderTypeValue,
    isValid: ciderTypeValid,
    hasError: ciderTypeHasError,
    valueChangeHandler: ciderTypeChangeHandler,
    inputBlurHandler: ciderTypeBlurHandler,
    reset: resetciderType,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (ciderNameIsValid && ciderTypeValid && ciderSloganValid) {
    formIsValid = true;
  }
  

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onAddCider({
      ciderTitle: ciderNameValue,
      ciderType: ciderTypeValue,
      ciderSlogan: ciderSloganValue,
    });

    resetciderName();
    resetciderType();
    resetciderSlogan();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="submittedciderName">cider Name</label>
        <input
          type="text"
          value={ciderNameValue}
          onChange={ciderNameChangeHandler}
          onBlur={ciderNameBlurHandler}
          id="submittedciderName"
        />
        {ciderNameHasError && (
          <p className="error-text">
            Please enter a cider name for your Cider.
          </p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="submittedciderType">ciderType</label>
        <input
          type="text"
          value={ciderTypeValue}
          onChange={ciderTypeChangeHandler}
          onBlur={ciderTypeBlurHandler}
          id="submittedciderType"
        />
        {ciderTypeHasError && (
          <p className="error-text">
            Please enter at least one (1) ciderSloganient.
          </p>
        )}
      </div>
      <div className="form-actions">
        <button className="formButton" disabled={!formIsValid}>
          Add a Cider
        </button>
      </div>
    </form>
  );
}

export default CidersForm;
