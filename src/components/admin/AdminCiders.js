import { Fragment, useEffect } from "react";

import useHttp from "../../hooks/use-http";
import { getAllCiders } from "../../lib/api";

import CiderList from "../ciders/CiderList";

import { SlSpinner } from "@shoelace-style/shoelace/dist/react";

const AdminCiders = () => {
  // GET Events
  const {
    sendRequest,
    status,
    data: loadedCiders,
    error,
  } = useHttp(getAllCiders, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return <SlSpinner style={{ fontSize: "3rem" }} />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (status === "completed" && (!loadedCiders || loadedCiders.length === 0)) {
    return <p>No cider available?!?</p>;
  }

  return (
    <Fragment>
      <section>
        <CiderList cider={loadedCiders} />
      </section>
    </Fragment>
  );
};
export default AdminCiders;
