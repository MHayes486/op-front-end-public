import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { addAcider } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import cidersForm from "./cidersForm";

function Addciders(props) {
  const { sendRequest, status } = useHttp(addAcider);
  const navigate = useNavigate();
  const addciderHandler = (ciderData) => {
    sendRequest(ciderData);
  };
      useEffect(() => {
        if (status === "completed") {
          navigate("/ciders");
        }
      }, [status, navigate]);

  return <cidersForm onAddcider={addciderHandler} />;
}

export default Addciders;
