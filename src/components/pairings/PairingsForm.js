import { useState } from "react";
import useInput from "../../hooks/use-input";
import { useSelector } from "react-redux";

import classes from "./AddPairings.module.css";
import styles from "../UI/SignUp.module.css";
import styling from "../admin/Admin.module.css";

const isNotEmpty = (value) => value.trim() !== "";

function PairingsForm(props) {
  const [selectedProduct, setSelectedProduct] = useState("Entire range");
  const LoginValid = useSelector((state) => state.logInCheck.logedIn);
  let checkResult = false;

  if (LoginValid) {
    checkResult = true;
  }
  const {
    value: dishNameValue,
    isValid: dishNameIsValid,
    hasError: dishNameHasError,
    valueChangeHandler: dishNameChangeHandler,
    inputBlurHandler: dishNameBlurHandler,
    reset: resetDishName,
  } = useInput(isNotEmpty);

  const {
    value: ingredientsValue,
    isValid: ingredientsValid,
    hasError: ingredientsHasError,
    valueChangeHandler: ingredientsChangeHandler,
    inputBlurHandler: ingredientsBlurHandler,
    reset: resetIngredients,
  } = useInput(isNotEmpty);
  const {
    value: pairingsURLValue,
    isValid: pairingsURLIsValid,
    hasError: pairingsURLHasError,
    valueChangeHandler: pairingsURLChangeHandler,
    inputBlurHandler: pairingsURLBlurHandler,
    reset: resetpairingsURLName,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (dishNameIsValid && ingredientsValid) {
    formIsValid = true;
  }
  const handleChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onAddPairing({
      pigProduct: selectedProduct,
      dishName: dishNameValue,
      ingredients: ingredientsValue,
      isActive: checkResult,
      image: pairingsURLValue,
      // isActive: true,
    });

    resetDishName();
    resetIngredients();
    resetpairingsURLName();
  };

  return (
    <form className={styles.decor_form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <select id="range" onChange={handleChange}>
          <option id="opt1" selected value="Entire range">
            Any of the range.
          </option>
          <option id="opt2" value="Reveller: Medium Sparkling Cider">
            Reveller.
          </option>
          <option id="opt3" value="Truffler: Dry Sparkling Cider">
            Truffler.
          </option>
          <option id="opt3" value="Hog Father: Lightly Sparkling Cider">
            Hog Father.
          </option>
        </select>
      </div>
      <div className={classes.control}>
        <label htmlFor="submittedDishName">Dishes Name</label>
        <input
          type="text"
          value={dishNameValue}
          onChange={dishNameChangeHandler}
          onBlur={dishNameBlurHandler}
          id="submittedDishName"
        />
        {dishNameHasError && (
          <p className="error-text">
            Please enter a dish name for your pairing.
          </p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="submittedIngredients">Ingredients</label>
        <input
          type="text"
          value={ingredientsValue}
          onChange={ingredientsChangeHandler}
          onBlur={ingredientsBlurHandler}
          id="submittedIngredients"
        />
        {ingredientsHasError && (
          <p className="error-text">
            Please enter at least one (1) ingredient.
          </p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="imgUrl">Image Location:</label>
        <input
          type="text"
          value={pairingsURLValue}
          onChange={pairingsURLChangeHandler}
          onBlur={pairingsURLBlurHandler}
          id="imgURL"
        />
        {!pairingsURLIsValid && (
          <p className="error-text">
            Image URL is invalid, put n/a for no image
          </p>
        )}
      </div>
      <div className="form-actions">
        <button className={styling.admin_form_button} disabled={!formIsValid}>
          Add a Pairing
        </button>
      </div>
    </form>
  );
}

export default PairingsForm;
