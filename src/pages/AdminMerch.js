import { Fragment, useEffect } from "react";

import useHttp from "../hooks/use-http";
import { getAllMerch, getAllPairings } from "../lib/api";
import { deleteMerchandise } from "../lib/api";

import MerchList from "../components/admin/merch/MerchList";
import AdminPairings from "../components/admin/AdminPairings";
import Loading from "../components/Loading";

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
      <MerchList merch={loadedMerch} />
        <h4><i>Add Merchandise Form goes here</i></h4>

      </section>
    </Fragment>
  );
};
export default Admin;
