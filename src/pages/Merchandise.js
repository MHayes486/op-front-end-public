import { Fragment, useEffect } from "react";

import useHttp from "../hooks/use-http";
import { getAllMerch } from "../lib/api";

import MerchList from "../components/merchandise/MerchList";

import { SlSpinner } from "@shoelace-style/shoelace/dist/react";

const Merchandise = () => {
  const {
    sendRequest,
    status,
    data: loadedMerch,
    error,
  } = useHttp(getAllMerch, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return <SlSpinner style={{ fontSize: "3rem" }} />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (status === "completed" && (!loadedMerch || loadedMerch.length === 0)) {
    return <p>No merch available?!?</p>;
  }

  return (
    <Fragment>
      <h2>Merchandise</h2>
      <h3>Pick up some swag and show off your inner pig.</h3>
      <section>
        <MerchList merch={loadedMerch} />
      </section>
    </Fragment>
  );
};
export default Merchandise;
