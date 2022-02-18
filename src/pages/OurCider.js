import { Fragment, useEffect } from "react";

import useHttp from "../hooks/use-http";
import { getAllCiders } from "../lib/api";

import CiderList from "../components/ciders/CiderList";
import ciderStyles from "./styles/Cider.module.css";
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

      <section >
        <img
          className={ciderStyles.ciders_banner}
          src="./images/backgrounds/Ciders Page Splash Image.jpg"
          alt="pics from backend"
        />
      </section>

      <section>

        <img
          className={ciderStyles.ciders_tear_background}
          src="\images\backgrounds\Home-Page-Rip-2.png"
          alt="pics from backend"
        />

      <div >
        <CiderList cider={activeCiders} />
        </div>
      </section>
    </Fragment>
  );
};

export default OurCider;
