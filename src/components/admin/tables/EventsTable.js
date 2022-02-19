import React from "react";

import { useDispatch } from "react-redux";
import {
  activateEvents,
  deactivateEvents,
} from "../../../actions/adminActions";
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
          </tr>
        </thead>

        <tbody>
          {props.events.map((events) => {
            let active = "Not Active";
            if (Events.isActive === true) {
              active = "Active";
            }
            return (
              <tr>
                <td>{events._id}</td>
                <td>{events.eventName}</td>
                <td>{events.eventAddress}</td>
                <td>{events.image}</td>
                <td>{active}</td>

                <button
                  className={classes.button1}
                  onClick={() => {
                    dispatch(activateEvents(Events._id));
                  }}
                >
                  Activate
                </button>
                <button
                  className={classes.button2}
                  onClick={() => {
                    dispatch(deactivateEvents(Events._id));
                  }}
                >
                  Deactivate
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EventsTable;
