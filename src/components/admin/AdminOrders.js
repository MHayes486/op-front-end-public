import { Fragment, useEffect } from "react";

import useHttp from "../../hooks/use-http";
import { getAllOrders } from "../../lib/api";

import OrdersTable from "./tables/OrdersTable";

import { SlSpinner } from "@shoelace-style/shoelace/dist/react";

const AdminOrders = () => {
  // GET Events
  const {
    sendRequest,
    status,
    data: loadedOrders,
    error,
  } = useHttp(getAllOrders, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return <SlSpinner style={{ fontSize: "3rem" }} />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (status === "completed" && (!loadedOrders || loadedOrders.length === 0)) {
    return <p>No order available?!?</p>;
  }

  return (
    <Fragment>
      <section>
        <OrdersTable orders={loadedOrders} />
      </section>
    </Fragment>
  );
};
export default AdminOrders;
