// Code modified from https://www.npmjs.com/package/agegate

import React, { useState, Fragment } from "react";
import agegate, { getData } from "agegate";
import { ageCheckActions } from "../store/age-check-slice";
import { useDispatch } from "react-redux";

import styles from "./AgeModal.module.css";

const countries = getData();

const AgeModal = (props) => {
  const dispatch = useDispatch();

  const [date, setDate] = useState("");
  const [country, setCountry] = useState(countries[0].code);
  const [notLegal, setNotLegal] = useState(false);
  const [initVisit, setInitialVisit] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();

    if (date && country) {
      const result = agegate(new Date(date), country);

      if (result) {
        localStorage.setItem("ageIsValid", "1");
        dispatch(ageCheckActions.validate());
      } else {
        setNotLegal(result);
        setInitialVisit(false);
      }
    }
  };

  return (
    <div className={styles.modal}>
      <form onSubmit={submitHandler} className={styles.ageForm}>
        <h1 className={styles.ageTitle}>Welcome to Orchard Pig!</h1>
        <p className={styles.agePara}>
          Please confirm your age in order to access the site:
        </p>
        <p className={styles.agePara}>Enter your date of birth:</p>
        <input
          className={styles.ageInputs}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <p className={styles.agePara}>Enter your country:</p>
        <select
          className={styles.countryInput}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          {countries.map(({ code, name }) => (
            <option key={name} value={code}>
              {name}
            </option>
          ))}
        </select>
        <hr />
        <button className={styles.ageButton} type="submit">
          Submit
        </button>
        {!notLegal && !initVisit && (
          <Fragment>
            <h3 className={styles.notOldEnough}>Sorry!</h3>
            <p className={styles.notOldEnough}>
              You are not old enough to visit the PIG!
            </p>
          </Fragment>
        )}
      </form>
    </div>
  );
};

export default AgeModal;
