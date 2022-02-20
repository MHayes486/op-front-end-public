import React from "react";

import { useDispatch, useSelector } from "react-redux";
// import {
//   activateCiders,
//   deactivateCiders,
// } from "../../../actions/adminActions";
import classes from "../Admin.module.css";

const CidersTable = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <table className="table table-striped table-bordered table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th>Ciders Id</th>
            <th>Cider Title</th>
            <th>Cider Tagline</th>
            <th>Cider Slogan</th>
            <th>Image</th>
            <th>Active?</th>
            <th>Toggle</th>
          </tr>
        </thead>

        <tbody>
          {props.ciders.map((cider) => {
            let active = "Not Active";
            if (cider.isActive === true) {
              active = "Active";
            }
            return (
              <tr>
                <td>{cider._id}</td>
                <td>{cider.ciderTitle}</td>
                <td>{cider.ciderType}</td>
                <td>{cider.ciderSlogan}</td>
                <td>{cider.image}</td>
                <td>{active}</td>
                <td>
                  {/* 
                <button
                  className={classes.button1}
                  onClick={() => {
                    dispatch(activateCiders(cider._id));
                  }}
                >
                  Activate
                </button>
                <button
                  className={classes.button2}
                  onClick={() => {
                    dispatch(deactivateCiders(cider._id));
                  }}
                >
                  Deactivate
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

export default CidersTable;
