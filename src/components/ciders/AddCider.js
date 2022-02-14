import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { addACider } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import CidersForm from "./CidersForm";

function AddCiders(props) {
  const { sendRequest, status } = useHttp(addACider);
  const navigate = useNavigate();
  const addciderHandler = (ciderData) => {
    sendRequest(ciderData);
  };
      useEffect(() => {
        if (status === "completed") {
          navigate("/ciders");
        }
      }, [status, navigate]);

  return <CidersForm onAddcider={addciderHandler} />;
}

export default AddCiders;
