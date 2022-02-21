import React, { useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { addAPairing } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import PairingsForm from "./PairingsForm";
import styling from "../../pages/styles/Home.module.css"

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
      <h1 className={styling.home_merch_h3}>Know something we don't know?</h1>
      <p className={styling.home_merch_h4}>The Pig is hungry. Do you have an idea that will help feed him?</p>
      <PairingsForm onAddPairing={addPairingHandler} />;
    </Fragment>
  );
}

export default AddPairings;
