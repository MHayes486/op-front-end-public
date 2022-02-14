import { Fragment, useEffect } from "react";

import useHttp from "../hooks/use-http";
import { getAllMerch, getAllPairings } from "../lib/api";
import { deleteMerchandise } from "../lib/api";
import AdminAdds from "./AdminAdditions";

import AdminMerch from "./AdminMerch";
import AdminPairs from "./AdminPairs";
import AdminEditPairings from "../components/admin/AdminEditPairs";
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
      <h1>Admin</h1>
      <section>
        <h4>Update Merchandise</h4>
        <AdminMerch />
        <h4>Update Pairings</h4>
        <AdminPairs />
      </section>
      <AdminAdds />
    </Fragment>
  );
};
export default Admin;
