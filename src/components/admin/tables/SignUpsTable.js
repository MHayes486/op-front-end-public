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
            <th>Name</th>
            <th>Email Address</th>
            <th>Active</th>
          </tr>
        </thead>

        <tbody>
          {props.signUps.map((signUps) => {
            let active = "Deactive";
            if (SignUps.isActive === true) {
              active = "Active";
            }
            return (
              <tr>
                <td>{signUps._id}</td>
                <td>{signUps.contactName}</td>
                <td>{signUps.contactEmail}</td>
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
