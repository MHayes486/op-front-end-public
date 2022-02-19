import { Fragment, useEffect } from "react";

import useHttp from "../../hooks/use-http";
import { getAllMerch } from "../../lib/api";


import MerchTable from "./tables/MerchTable";

import { SlSpinner } from "@shoelace-style/shoelace/dist/react";

const Admin = () => {

// GET MERCHANDISE
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
      <section>
      <MerchTable merch={loadedMerch} />
       
      </section>
    </Fragment>
  );
};
export default Admin;
