import { Fragment, useEffect } from "react";

import useHttp from "../hooks/use-http";
import { getAllCiders } from "../lib/api";

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

  // const [cider, setCider] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const fetchCiderHandler = useCallback(async () => {
  //   setIsLoading(true);
  //   setError(null);

  //   try {
  //     const response = await fetch('https://dig33-apricot-backend.herokuapp.com/ciders/');

  //     if (!response.ok) {
  //       throw new Error('Something went wrong!');
  //     }

  //     const data = await response.json();

  //     const transformedCider = data.map(ciderData => {
  //       return {
  //         id: ciderData._id,
  //         ciderTitle: ciderData.ciderTitle,
  //         ciderType: ciderData.ciderType,
  //         ciderSlogan: ciderData.ciderSlogan,
  //         image: ciderData.image
  //       }
  //     });
  //     setCider(transformedCider);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //   setIsLoading(false);
  // }, []);

  // useEffect(() => {
  //   fetchCiderHandler();
  // }, [fetchCiderHandler]);

  // let content = <p></p>;

  // if (cider.length > 0) {
  //   content = <CiderList cider={cider} />;
  // }
  // if (error) {
  //   content = <p>{error}</p>;
  // }
  // if (isLoading) {
  //   content = <SlSpinner style={{ fontSize: '3rem' }} />;
  // }

  return (
    <Fragment>
      <h2>Our Cider</h2>
      <h3>This is what we are about</h3>
      <section>
        <CiderList cider={loadedCiders} />
      </section>
    </Fragment>
  );
};

export default OurCider;
