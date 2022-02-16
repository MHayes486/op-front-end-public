import useInput from "../../hooks/use-input";

import classes from "./AddMerchs.module.css";
import styles from "../UI/SignUp.module.css";

const isNotEmpty = (value) => value.trim() !== "";

function MerchsForm(props) {
  const {
    value: itemNameValue,
    isValid: itemNameIsValid,
    hasError: itemNameHasError,
    valueChangeHandler: itemNameChangeHandler,
    inputBlurHandler: itemNameBlurHandler,
    reset: resetitemName,
  } = useInput(isNotEmpty);

  const {
    value: merchURLValue,
    isValid: merchURLIsValid,
    hasError: merchURLHasError,
    valueChangeHandler: merchURLChangeHandler,
    inputBlurHandler: merchURLBlurHandler,
    reset: resetMerchURLName,
  } = useInput(isNotEmpty);

  const {
    value: typeNameValue,
    isValid: typeNameIsValid,
    hasError: typeNameHasError,
    valueChangeHandler: typeNameChangeHandler,
    inputBlurHandler: typeNameBlurHandler,
    reset: resettypeName,
  } = useInput(isNotEmpty);

  const {
    value: costValue,
    isValid: costValid,
    hasError: costHasError,
    valueChangeHandler: costChangeHandler,
    inputBlurHandler: costBlurHandler,
    reset: resetcost,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (itemNameIsValid && costValid && typeNameIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onAddMerch({
      itemType: typeNameValue,
      itemName: itemNameValue,
      itemCost: costValue,
      image: merchURLValue,
    });

    resetitemName();
    resettypeName();
    resetcost();
    resetMerchURLName();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="submitteditemName">Merch Byline</label>
        <input
          type="text"
          value={itemNameValue}
          onChange={itemNameChangeHandler}
          onBlur={itemNameBlurHandler}
          id="submitteditemName"
        />
        {itemNameHasError && (
          <p className="error-text">
            Please enter a item slogan for your Merch.
          </p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="submittedtypeName">Merch Type</label>
        <input
          type="text"
          value={typeNameValue}
          onChange={typeNameChangeHandler}
          onBlur={typeNameBlurHandler}
          id="submittedtypeName"
        />
        {typeNameHasError && (
          <p className="error-text">Please enter a type name for your Merch.</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="submittedcost">Merch Price</label>
        <input
          type="text"
          value={costValue}
          onChange={costChangeHandler}
          onBlur={costBlurHandler}
          id="submittedcost"
        />
        {costHasError && <p className="error-text">Please enter a price.</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="imgUrl">Image Location:</label>
        <input
          type="text"
          value={merchURLValue}
          onChange={merchURLChangeHandler}
          onBlur={merchURLBlurHandler}
          id="imgURL"
        />
        {merchURLIsValid && (
          <p className="error-text">
            Image URL is invalid, put n/a for no image
          </p>
        )}
      </div>
      <div className="form-actions">
        <button className="formButton" disabled={!formIsValid}>
          Add a Merch
        </button>
      </div>
    </form>
  );
}

export default MerchsForm;