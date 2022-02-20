import { useEffect } from "react";

import useHttp from "../../hooks/use-http";
import { getAllEvents } from "../../lib/api";

import EventList from "./EventList";

import { SlSpinner } from "@shoelace-style/shoelace/dist/react";
const AllEvents = () => {
  const {
    sendRequest,
    status,
    data: loadedEvents,
    error,
  } = useHttp(getAllEvents, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return <SlSpinner style={{ fontSize: "3rem" }} />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (status === "completed" && (!loadedEvents || loadedEvents.length === 0)) {
    return <p>No merch available?!?</p>;
  }
  const activeEvents = loadedEvents.filter((loadedEvents) => {
    return loadedEvents.isActive === true;
  });

  return <EventList event={activeEvents} />;
};

export default AllEvents;
