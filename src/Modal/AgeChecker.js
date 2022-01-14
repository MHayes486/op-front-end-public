// Code modified from https://www.npmjs.com/package/agegate

import React, { useState, useContext } from "react";
import agegate, { getData } from "agegate";
import AgeIsValidContext from "../store/ageValid-context";

const countries = getData();

const AgeModal = (props) => {
  const [date, setDate] = useState("");
  const [country, setCountry] = useState(countries[0].code);
  const [legal, setLegal] = useState(false);
  const ctx = useContext(AgeIsValidContext);

  const submitHandler = (e) => {
    e.preventDefault();

    if (date && country) {
      const result = agegate(new Date(date), country);

      if (result) {
        localStorage.setItem("ageIsValid", "1");
        ctx.ageValid = true;
        console.log(ctx.ageValid);
      }
      setLegal(result);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h3>Enter your date of birth</h3>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <h3>Enter your country</h3>
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          {countries.map(({ code, name }) => (
            <option key={name} value={code}>
              {name}
            </option>
          ))}
        </select>

        <button type="submit">Submit</button>
      </form>

      <p style={{ color: legal ? "green" : "red" }}>
        RESULT: You are {legal ? "" : "NOT"} old enough!
      </p>
    </div>
  );
};

export default AgeModal;
