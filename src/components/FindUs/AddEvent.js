import { addAEvent } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import EventsForm from "./EventsForm";

function AddEvents(props) {
  const { sendRequest, status } = useHttp(addAEvent);

  const addEventHandler = (eventData) => {
    sendRequest(eventData);
  };

  return <EventsForm onAddEvent={addEventHandler} />;
}

export default AddEvents;
