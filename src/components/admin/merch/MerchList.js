import React from 'react';

import Merch from './Merch';
import classes from '../../merchandise/MerchList.module.css';
import { useDispatch, useSelector } from "react-redux";
import { activateMerchandise, deactivateMerchandise } from "../../../actions/adminActions";

const MerchList = (props) => {
  const dispatch = useDispatch();

  return (

    <div>

      <table className="table table-striped table-bordered table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th>Merch Id</th>
            <th>Item Type</th>
            <th>Item Cost</th>
            <th>Item Name</th>
            <th>Image</th>
            <th>Active?</th>
          </tr>
        </thead>

        <tbody>
        {props.merch.map((merch) => {
          return (
            <tr>
              <td>{merch._id}</td>
              <td>{merch.itemType}</td>
              <td>{merch.itemCost}</td>
              <td>{merch.itemName}</td>
              <td>{merch.image}</td>
              <td>{merch.isActive}</td>
              <button onClick={()=>{dispatch(activateMerchandise(merch._id))}}>Activate</button>
              <button onClick={()=>{dispatch(deactivateMerchandise(merch._id))}}>De-activate</button>
            </tr>
          );
        })}
        </tbody>
      </table>
  
    </div>
  );
};

export default MerchList;