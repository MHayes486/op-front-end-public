import React from "react";

import { useDispatch } from "react-redux";
// import {
//   activateOrders,
//   deactivateOrders,
// } from "../../../actions/adminActions";
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
            <th>Process Order</th>
          </tr>
        </thead>

        <tbody>
          {props.orders.map((order) => {
            let active = "Unprocessed";
            if (order.isActive === true) {
              active = "Processed";
            }
            const stringOrder = JSON.stringify(order.order);
            return (
              <tr>
                <td>{order._id}</td>
                <td>{order.name}</td>
                <td>{order.emailAddress}</td>
                <td>{order.delAddress}</td>
                <td>{stringOrder}</td>
                <td>{active}</td>
                <td>
                  {/* <button
                    className={classes.button1}
                    onClick={() => {
                      dispatch(activateOrders(order._id));
                    }}
                  >
                    Process
                  </button>
                  <button
                    className={classes.button2}
                    onClick={() => {
                      dispatch(deactivateOrders(order._id));
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

export default OrdersTable;
