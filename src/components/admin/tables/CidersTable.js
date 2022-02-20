import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  activateCiders,
  deactivateCiders,
} from "../../../actions/adminActions";
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
          </tr>
        </thead>

        <tbody>
          {props.ciders.map((ciders) => {
            let active = "Not Active";
            if (ciders.isActive === true) {
              active = "Active";
            }
            return (
              <tr>
                <td>{ciders._id}</td>
                <td>{ciders.ciderTitle}</td>
                <td>{ciders.ciderType}</td>
                <td>{ciders.ciderSlogan}</td>
                <td>{ciders.image}</td>
                <td>{active}</td>
{/* 
                <button
                  className={classes.button1}
                  onClick={() => {
                    dispatch(activateCiders(ciders._id));
                  }}
                >
                  Activate
                </button>
                <button
                  className={classes.button2}
                  onClick={() => {
                    dispatch(deactivateCiders(ciders._id));
                  }}
                >
                  Deactivate
                </button> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CidersTable;
