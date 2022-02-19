import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  activateOrders,
  deactivateOrders,
} from "../../../actions/adminActions";
import classes from "../Admin.module.css";

const OrdersTable = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <table className="table table-striped table-bordered table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th>Orders Id</th>
            <th>Reciever</th>
            <th>Email Address</th>
            <th>Delivery Address</th>
            <th>Order</th>
            <th>Processed</th>
          </tr>
        </thead>

        <tbody>
          {props.orders.map((orders) => {
            let active = "Unprocessed";
            if (Orders.isActive === true) {
              active = "Processed";
            }
            return (
              <tr>
                <td>{orders._id}</td>
                <td>{orders.name}</td>
                <td>{orders.emailAddress}</td>
                <td>{orders.delAddress}</td>
                <td>{orders.order}</td>
                <td>{active}</td>

                <button
                  className={classes.button1}
                  onClick={() => {
                    dispatch(activateOrders(Orders._id));
                  }}
                >
                  Process
                </button>
                <button
                  className={classes.button2}
                  onClick={() => {
                    dispatch(deactivateOrders(Orders._id));
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

export default OrdersTable;
