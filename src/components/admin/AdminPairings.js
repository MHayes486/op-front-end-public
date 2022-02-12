import React from 'react';
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { activatePairings, deactivatePairings } from "../../actions/adminActions";
import classes from "./Admin.module.css";

const AdminPairings = (props) => {
  const dispatch = useDispatch();


  return (

      <div>

        <table className="table table-striped table-bordered table-responsive-sm">
          <thead className="thead-dark">
            <tr>
              <th>Pairs Id</th>
              <th>Pig Product</th>
              <th>Dish Name</th>
              <th>Ingredients</th>
              <th>Image</th>
              <th>Active?</th>
              <th>Ingredients Again</th>
            </tr>
          </thead>

          <tbody>
            {props.pairs.map((pairs) => {
              return (
                <tr>
                  <td>{pairs._id}</td>
                  <td>{pairs.pigProduct}</td>
                  <td>{pairs.dishName}</td>
                  <td>{pairs.ingredients}</td>
                  <td>{pairs.image}</td>
                  <td>{pairs.isActive}</td>
                  <td>{pairs.ingredients}</td>

                  <button className={classes.button1} onClick={() => { dispatch(activatePairings(pairs._id)) }}>Activate</button>
                  <button className={classes.button2} onClick={() => { dispatch(deactivatePairings(pairs._id)) }}>Deactivate</button>
                </tr>
              );
            })}
          </tbody>
        </table>

      </div>
  );
};

export default AdminPairings;






