import { Fragment, useEffect } from "react";

import useHttp from "../hooks/use-http";
import { getAllMerch } from "../lib/api";
import { Container, Col, Row } from "react-bootstrap";
import MerchList from "../components/merchandise/MerchList";
import Loading from "../components/Loading";
import HeaderCartButton from "../Layouts/HeaderCartButton";
import styling from "./styles/Home.module.css";
import { SlSpinner } from "@shoelace-style/shoelace/dist/react";
import { useNavigate } from "react-router-dom";

const Merchandise = () => {
  const {
    sendRequest,
    status,
    data: loadedMerch,
    error,
  } = useHttp(getAllMerch, true);

  const navigate = useNavigate();
  const showCartHandler = () => {
    navigate("/cart");
  };

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
    return (loadedMerch.isActive === true);
  });

  return (
    <Fragment>
            
      <section>


        <div>
          <h2 className={styling.home_merch_h2}>Support the PIG</h2>
          <HeaderCartButton onClick={showCartHandler} className={styling.merch_cart_location}/>
          <h3 className={styling.home_merch_h3}>
            Pick up some swag and show off your inner pig.
          </h3>
        </div>
      </section>
      <section>

        <MerchList merch={activeMerch} />
      </section>
    </Fragment>
  );
};
export default Merchandise;
