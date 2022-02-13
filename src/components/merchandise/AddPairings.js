import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { addAPairing } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import PairingsForm from "./PairingsForm";

function AddPairings(props) {
  const { sendRequest, status } = useHttp(addAPairing);
  const navigate = useNavigate();
  const addPairingHandler = (pairingData) => {
    sendRequest(pairingData);
  };
      useEffect(() => {
        if (status === "completed") {
          navigate("/pairings");
        }
      }, [status, navigate]);

  return <PairingsForm onAddPairing={addPairingHandler} />;
}

export default AddPairings;
