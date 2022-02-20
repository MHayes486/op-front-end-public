import React from "react";

import { useDispatch, useSelector } from "react-redux";
// import {
//   activateSignUps,
//   deactivateSignUps,
// } from "../../../actions/adminActions";
import classes from "../Admin.module.css";

const SignUpsTable = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <table className="table table-striped table-bordered table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th>SignUps Id</th>
            <th>Name</th>
            <th>Email Address</th>
            <th>Active</th>
            <th>Deactivate</th>
          </tr>
        </thead>

        <tbody>
          {props.signUps.map((signUp) => {
            let active = "Deactive";
            if (signUp.isActive === true) {
              active = "Active";
            }
            return (
              <tr>
                <td>{signUp._id}</td>
                <td>{signUp.contactName}</td>
                <td>{signUp.contactEmail}</td>
                <td>{active}</td>
                <td>
                  {/* <button
                  className={classes.button1}
                  onClick={() => {
                    dispatch(activateSignUps(SignUp._id));
                  }}
                >
                  Process
                </button>
                <button
                  className={classes.button2}
                  onClick={() => {
                    dispatch(deactivateSignUps(SignUp._id));
                  }}
                >
                  Recall
                </button> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SignUpsTable;
