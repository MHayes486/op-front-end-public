import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../actions/userActions";
import styles from "./styles/Home.module.css";

export default function RegisterUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  function register() {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      const user = {
        name,
        email,
        password,
      };
      dispatch(registerUser(user));
      navigate("/login");
    }
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left">
          <h2 className={styles.home_merch_h2}>Register User</h2>
          <div>
            <input
              required
              type="text"
              placeholder="name"
              className={styles.form_input}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              required
              type="text"
              placeholder="email"
              className={styles.form_input}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              required
              type="text"
              placeholder="password"
              className={styles.form_input}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              required
              type="text"
              placeholder="confirm password"
              className={styles.form_input}
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <button className={styles.form_register_button} onClick={register}>
              {" "}
              REGISTER{" "}
            </button>
            {/*    <button onClick={onClickNavHandler}>Login</button>  */}

            <div className={styles.home_merch_h6}>
              <a href="/login">Click here to login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
