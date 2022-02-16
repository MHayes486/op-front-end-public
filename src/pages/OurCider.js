import { Fragment, useEffect } from "react";

import useHttp from "../hooks/use-http";
import { getAllCiders } from "../lib/api";

import CiderList from "../components/ciders/CiderList";

import { SlSpinner } from "@shoelace-style/shoelace/dist/react";

const OurCider = () => {
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
  const activeCiders = loadedCiders.filter((loadedCiders) => {
    return (loadedCiders.isActive = true);
  });

  return (
    <Fragment>
      <h2>Our Cider</h2>
      <h3>This is what we are about</h3>
      <section>
        <CiderList cider={activeCiders} />
      </section>
    </Fragment>
  );
};

export default OurCider;
