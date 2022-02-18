import { Fragment, useEffect } from "react";

import useHttp from "../hooks/use-http";
import { getAllMerch } from "../lib/api";
import { Container, Col, Row } from "react-bootstrap";
import MerchList from "../components/merchandise/MerchList";
import Loading from "../components/Loading";

import styles from "./styles/Merchandise.modules.css";
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

  const activeMerch = loadedMerch.filter((loadedMerch) => {
    return (loadedMerch.isActive = true);
  });

  return (
    <Fragment>
      <section>


        <span>
          <h2 className={styles.merch_h2}>SUPPORT THE PIG</h2>
          <h3 className={styles.merch_p}>
            Pick up some swag and show off your inner pig.
          </h3>
        </span>
      </section>
      <section>
        <MerchList merch={activeMerch} />
      </section>
    </Fragment>
  );
};
export default Merchandise;
