import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  activateSignUps,
  deactivateSignUps,
} from "../../../actions/adminActions";
import classes from "../Admin.module.css";

const SignUpsTable = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <table className="table table-striped table-bordered table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th>SignUps Id</th>
            <th>Reciever</th>
            <th>Email Address</th>
            <th>Delivery Address</th>
            <th>Order</th>
            <th>Processed</th>
          </tr>
        </thead>

        <tbody>
          {props.signUps.map((signUps) => {
            let active = "Unprocessed";
            if (SignUps.isActive === true) {
              active = "Processed";
            }
            return (
              <tr>
                <td>{signUps._id}</td>
                <td>{signUps.name}</td>
                <td>{signUps.emailAddress}</td>
                <td>{signUps.delAddress}</td>
                <td>{signUps.order}</td>
                <td>{active}</td>

                <button
                  className={classes.button1}
                  onClick={() => {
                    dispatch(activateSignUps(SignUps._id));
                  }}
                >
                  Process
                </button>
                <button
                  className={classes.button2}
                  onClick={() => {
                    dispatch(deactivateSignUps(SignUps._id));
                  }}
                >
                  Recall
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SignUpsTable;
