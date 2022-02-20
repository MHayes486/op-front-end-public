import React from "react";

import { useDispatch } from "react-redux";
// import {
//   activateEvents,
//   deactivateEvents,
// } from "../../../actions/adminActions";
import classes from "../Admin.module.css";

const EventsTable = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <table className="table table-striped table-bordered table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th>Events Id</th>
            <th>Event Name</th>
            <th>Event Location</th>
            <th>Image</th>
            <th>Active?</th>
            <th>Toggle</th>
          </tr>
        </thead>

        <tbody>
          {props.events.map((event) => {
            let active = "Not Active";
            if (event.isActive === true) {
              active = "Active";
            }
            return (
              <tr>
                <td>{event._id}</td>
                <td>{event.eventName}</td>
                <td>{event.eventAddress}</td>
                <td>{event.image}</td>
                <td>{active}</td>
                <td>
                  {/* <button
                  className={classes.button1}
                  onClick={() => {
                    dispatch(activateEvents(event._id));
                  }}
                >
                  Activate
                </button>
                <button
                  className={classes.button2}
                  onClick={() => {
                    dispatch(deactivateEvents(event._id));
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

export default EventsTable;
