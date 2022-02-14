import { Fragment, useEffect } from "react";

import useHttp from "../hooks/use-http";
import { getAllMerch } from "../lib/api";
import {Container, Col, Row} from "react-bootstrap";
import MerchList from "../components/merchandise/MerchList";
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

  return (
    <Fragment>
      <section>

        <div className={styles.merch_main}>

        <div className="d-flex p-2 cup">
        <img className={styles.merch_cup}
        src="\images\merch\coffee_mug.png"
        alt="pics from backend"></img>


      <h1 className={styles.merch_heading}>OUR PIG IS TOP DOG!</h1>
      <div className="d-inline-flex p-2 merch_h1"> </div>
      </div>
      </div>



      <span><h2 className={styles.merch_h2}>SUPPORT THE PIG</h2>
      <h3 className={styles.merh_p}>Pick up some swag and show off your inner pig.</h3>
      </span>
      </section>
      <section>
        <MerchList merch={loadedMerch} />
      </section>
    </Fragment>
  );
};
export default Merchandise;
