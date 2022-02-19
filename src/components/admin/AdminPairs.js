import { Fragment, useEffect } from "react";

import useHttp from "../../hooks/use-http";
import { getAllPairings } from "../../lib/api";

import PairsTable from "./tables/PairsTable";

import { SlSpinner } from "@shoelace-style/shoelace/dist/react";

const Admin = () => {
  // GET PAIRINGS
  const {
    sendRequest,
    status,
    data: loadedPairs,
    error,
  } = useHttp(getAllPairings, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return <SlSpinner style={{ fontSize: "3rem" }} />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (status === "completed" && (!loadedPairs || loadedPairs.length === 0)) {
    return <p>No pairs available?!?</p>;
  }

  return (
    <Fragment>
      <section>
        <PairsTable pairs={loadedPairs} />
      </section>
    </Fragment>
  );
};
export default Admin;
