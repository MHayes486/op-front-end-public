import useInput from "../../hooks/use-input";

import classes from "./AddCider.module.css";
import styles from "../UI/SignUp.module.css";
import styling from "../admin/Admin.module.css";

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
    value: ciderURLValue,
    isValid: ciderURLIsValid,
    hasError: ciderURLHasError,
    valueChangeHandler: ciderURLChangeHandler,
    inputBlurHandler: ciderURLBlurHandler,
    reset: resetCiderURLName,
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
      image: ciderURLValue,
      isActive: true,
    });

    resetciderName();
    resetciderType();
    resetciderSlogan();
    resetCiderURLName();
  };

  return (
    <form className={styles.decor_form} onSubmit={submitHandler}>
      <h1>Add new Cider</h1>
      <div className={classes.control}>
        <label htmlFor="submittedciderName">Cider Name</label>
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
        <label htmlFor="submittedciderType">Cider Type</label>
        <input
          type="text"
          value={ciderTypeValue}
          onChange={ciderTypeChangeHandler}
          onBlur={ciderTypeBlurHandler}
          id="submittedCiderSlogan"
        />
        {ciderSloganHasError && (
          <p className="error-text">Please enter Cider's type.</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="submittedciderSlogan">Cider's slogan</label>
        <input
          type="text"
          value={ciderSloganValue}
          onChange={ciderSloganChangeHandler}
          onBlur={ciderSloganBlurHandler}
          id="submittedciderType"
        />
        {ciderTypeHasError && (
          <p className="error-text">Please enter Cider's slogan.</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="imgUrl">Image Location:</label>
        <input
          type="text"
          value={ciderURLValue}
          onChange={ciderURLChangeHandler}
          onBlur={ciderURLBlurHandler}
          id="imgURL"
        />
        {!ciderURLIsValid && (
          <p className="error-text">
            Image URL is invalid, put n/a for no image
          </p>
        )}
      </div>
      <div className="form-actions">
        <button className={styling.admin_form_button} disabled={!formIsValid}>
          Add a Cider
        </button>
      </div>
    </form>
  );
}

export default CidersForm;
