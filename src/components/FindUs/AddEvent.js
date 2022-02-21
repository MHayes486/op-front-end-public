import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addAEvent } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import EventsForm from "./EventsForm";

function AddEvents(props) {
  const { sendRequest, status } = useHttp(addAEvent);
  const navigate = useNavigate();

  const addEventHandler = (eventData) => {
    sendRequest(eventData);
    console.log(eventData);
  };

  useEffect(() => {
    if (status === "completed") {
      navigate("/admin");
      alert("Events added");
    }
  }, [status, navigate]);

  return <EventsForm onAddEvent={addEventHandler} />;
}

export default AddEvents;
