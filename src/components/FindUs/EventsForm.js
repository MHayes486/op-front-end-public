import useInput from "../../hooks/use-input";

import classes from "./AddEvent.module.css";
import styles from "../UI/SignUp.module.css";

const isNotEmpty = (value) => value.trim() !== "";

function EventsForm(props) {
  const {
    value: eventNameValue,
    isValid: eventNameIsValid,
    hasError: eventNameHasError,
    valueChangeHandler: eventNameChangeHandler,
    inputBlurHandler: eventNameBlurHandler,
    reset: reseteventName,
  } = useInput(isNotEmpty);

  const {
    value: eventAddressValue,
    isValid: eventAddressValid,
    hasError: eventAddressHasError,
    valueChangeHandler: eventAddressChangeHandler,
    inputBlurHandler: eventAddressBlurHandler,
    reset: reseteventAddress,
  } = useInput(isNotEmpty);

  const {
    value: eventsURLValue,
    isValid: eventsURLIsValid,
    hasError: eventsURLHasError,
    valueChangeHandler: eventsURLChangeHandler,
    inputBlurHandler: eventsURLBlurHandler,
    reset: reseteventsURLName,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (eventNameIsValid && eventAddressValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onAddEvent({
      eventName: eventNameValue,
      eventAddress: eventAddressValue,
      image: eventsURLValue,
    });

    reseteventName();
    reseteventAddress();
    reseteventsURLName();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="submittedeventName">event Name</label>
        <input
          type="text"
          value={eventNameValue}
          onChange={eventNameChangeHandler}
          onBlur={eventNameBlurHandler}
          id="submittedeventName"
        />
        {eventNameHasError && (
          <p className="error-text">Please enter a event name.</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="submittedeventAddress">eventAddress</label>
        <input
          type="text"
          value={eventAddressValue}
          onChange={eventAddressChangeHandler}
          onBlur={eventAddressBlurHandler}
          id="submittedeventAddress"
        />
        {eventAddressHasError && (
          <p className="error-text">Please enter the location.</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="imgUrl">Image Location:</label>
        <input
          type="text"
          value={eventsURLValue}
          onChange={eventsURLChangeHandler}
          onBlur={eventsURLBlurHandler}
          id="imgURL"
        />
        {eventsURLIsValid && (
          <p className="error-text">
            Image URL is invalid, put n/a for no image
          </p>
        )}
      </div>
      <div className="form-actions">
        <button className="formButton" disabled={!formIsValid}>
          Add an Event
        </button>
      </div>
    </form>
  );
}

export default EventsForm;
