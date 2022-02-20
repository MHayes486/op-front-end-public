import useInput from "../../hooks/use-input";
import { signUpCheckActions } from "../../store/signUp-check-slice";
import { useDispatch } from "react-redux";

import styles from "./SignUp.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const SignUpForm = (props) => {
  const dispatch = useDispatch();
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    const submittedName = firstNameValue + " " + lastNameValue;

    props.onSignUp({
      contactName: submittedName,
      contactEmail: emailValue,
    });

    resetFirstName();
    resetLastName();
    resetEmail();
    localStorage.setItem("joined", "1");
    dispatch(signUpCheckActions.validate());
  };

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          {/*      <label htmlFor="name"></label> */}
          <input
            placeholder="First Name"
            type="text"
            id="name"
            value={firstNameValue}
            className={styles.signup_form_input}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">Please enter a first name.</p>
          )}
        </div>
        <div className={lastNameClasses}>
          {/*     <label htmlFor="name">Last Name</label>*/}
          <input
            placeholder="Last Name"
            type="text"
            id="name"
            value={lastNameValue}
            className={styles.signup_form_input}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Please enter a last name.</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        {/*      <label htmlFor="name">E-Mail Address</label>*/}
        <input
          placeholder="E-Mail Address"
          type="text"
          id="name"
          value={emailValue}
          className={styles.signup_form_input}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid email address.</p>
        )}
      </div>
      <div className="form-actions">
        <button className={styles.signup_form_register_button} disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
