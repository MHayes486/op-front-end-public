import React, { useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { addAPairing } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import PairingsForm from "./PairingsForm";

function AddPairings(props) {
  const { sendRequest, status } = useHttp(addAPairing);
  const navigate = useNavigate();
  const addPairingHandler = (pairingData) => {
    console.log(pairingData);
    sendRequest(pairingData);
  };
  useEffect(() => {
    if (status === "completed") {
      navigate("/pairings");
    }
  }, [status, navigate]);

  return (
    <Fragment>
      <h1>Add Pairing</h1>
      <p>The Pig is hungry. If you have a better idea, we're all ears...</p>
      <PairingsForm onAddPairing={addPairingHandler} />;
    </Fragment>
  );
}

export default AddPairings;
