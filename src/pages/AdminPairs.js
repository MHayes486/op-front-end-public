import { Fragment, useEffect } from "react";

import useHttp from "../hooks/use-http";
import { getAllMerch, getAllPairings } from "../lib/api";

import AdminPairings from "../components/admin/AdminPairings";
import Loading from "../components/Loading";

import { SlSpinner } from "@shoelace-style/shoelace/dist/react";


const Admin = () => {

// GET MERCHANDISE
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
    return <p>No merch available?!?</p>;
  }






  return (
    <Fragment>

      <section>
      <AdminPairings pairs={loadedPairs} />
        <h4><i>Add Pairings Form goes here</i></h4>

      </section>
    </Fragment>
  );
};
export default Admin;
