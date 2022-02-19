import { Fragment, useEffect } from "react";

import useHttp from "../../hooks/use-http";
import { getAllEvents } from "../../lib/api";
import EventList from "../FindUs/EventList";

import { SlSpinner } from "@shoelace-style/shoelace/dist/react";

const AdminEvents = () => {
  // GET Events
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
    return <p>No Events available?!?</p>;
  }

  return (
    <Fragment>
      <section>
        <EventList event={loadedEvents} />
      </section>
    </Fragment>
  );
};
export default AdminEvents;
