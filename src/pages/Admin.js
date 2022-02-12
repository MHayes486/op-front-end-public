import { Fragment, useEffect } from "react";

import useHttp from "../hooks/use-http";
import { getAllMerch } from "../lib/api";
import { deleteMerchandise } from "../lib/api";

import MerchList from "../components/admin/merch/MerchList";
import Loading from "../components/Loading";

import { SlSpinner } from "@shoelace-style/shoelace/dist/react";

const Admin = () => {

  const { sendDelRequest } = useHttp(deleteMerchandise);

  const delReqHandler = (delRequest) => {
    sendDelRequest(delRequest);
  };


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
      <h1>Admin</h1>
      <h4>Update Merchandise</h4>
      <section>
        <MerchList merch={loadedMerch} onSignUp={delReqHandler}/>
        <h4>Add Merchandise Form goes here</h4>
      </section>
    </Fragment>
  );
};
export default Admin;
