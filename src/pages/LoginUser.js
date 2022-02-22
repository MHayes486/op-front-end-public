import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { loginUser } from "../actions/userActions";
import styles from "./styles/Home.module.css";

export default function LoginUser() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/admin";
    }
  }, []);

  function login() {
    const user = {
      email,
      password,
    };
    dispatch(loginUser(user));
  }

  return (
    <div>
      <div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
            <h2 className={styles.home_merch_h2}>Login</h2>
            <div>
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
              <button className={styles.form_login_button} onClick={login}>
                {" "}
                LOGIN{" "}
              </button>
              <br />
              {/* <button onClick={onClickHandler}>Register a User</button> */}
              <div className={styles.home_merch_h6}>
                <a style={{ color: "black" }} href="/register">
                  {" "}
                  Click here to register{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
