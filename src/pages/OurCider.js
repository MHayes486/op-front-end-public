import { Fragment, useEffect } from "react";

import useHttp from "../hooks/use-http";
import { getAllCiders } from "../lib/api";
import styles from "./styles/Home.module.css";
import CiderList from "../components/ciders/CiderList";

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
    return loadedCiders.isActive === true;
  });

  return (
    <div>
      <div>
        <img // MORE APPLES LESS BUBBLES
          src="./images/backgrounds/Ciders Page Splash Image Torn.jpg"
          className={styles.torn_banner2}
          alt="pics from backend"
        />
      </div>

      <Fragment>
        <section>
          <CiderList cider={activeCiders} />
        </section>
      </Fragment>
    </div>
  );
};

export default OurCider;
