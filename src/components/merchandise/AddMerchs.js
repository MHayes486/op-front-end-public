import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addAMerch } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import MerchsForm from "./MerchsForm";

function AddMerchs(props) {
  const { sendRequest, status } = useHttp(addAMerch);
  const navigate = useNavigate();
  const addMerchHandler = (MerchData) => {
    sendRequest(MerchData);
  };
  useEffect(() => {
    if (status === "completed") {
      alert("Merch added");
      navigate("/admin");
    }
  }, [status, navigate]);

  return <MerchsForm onAddMerch={addMerchHandler} />;
}

export default AddMerchs;
