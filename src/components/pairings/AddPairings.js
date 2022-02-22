import React, { useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAPairing } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import PairingsForm from "./PairingsForm";
import styling from "../../pages/styles/Home.module.css"

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
      <h1 className={styling.home_merch_h3}>Know something we don't know?</h1>
      <p className={styling.home_merch_h4}>The Pig is hungry. Do you have an idea that will help feed him?</p>
      <PairingsForm onAddPairing={addPairingHandler} />;
    </Fragment>
  );
}

export default AddPairings;
