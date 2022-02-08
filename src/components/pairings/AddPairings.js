import React from "react";
import { addAPairing } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import PairingsForm from "./PairingsForm";

function AddPairings(props) {
  const { sendRequest, status } = useHttp(addAPairing);
  const addPairingHandler = (pairingData) => {
    sendRequest(pairingData);
  };

  return <PairingsForm onAddPairing={addPairingHandler} />;
}

export default AddPairings;
