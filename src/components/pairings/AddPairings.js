import React, { useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAPairing } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import PairingsForm from "./PairingsForm";

function AddPairings(props) {
  const LoginValid = useSelector((state) => state.logInCheck.logedIn);
  const { sendRequest, status } = useHttp(addAPairing);
  const navigate = useNavigate();
  const addPairingHandler = (pairingData) => {
    sendRequest(pairingData);
  };
  useEffect(() => {
    if (status === "completed") {
      if (LoginValid) {
        navigate("/admin");
        alert("Pairings added");
      } else {
        navigate("/pairings");
      }
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
