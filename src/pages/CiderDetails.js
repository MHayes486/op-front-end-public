import { Fragment } from "react";
import { useParams } from "react-router-dom";

const CiderDetails = () => {

  const params =useParams();
  
  return (
    <Fragment>
      <h1>CiderDetails</h1>
      <p>placeholder</p>
    </Fragment>
  );
};

export default CiderDetails;
