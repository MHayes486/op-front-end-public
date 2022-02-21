import { Fragment, useEffect } from "react";
import AddPairings from "../components/pairings/AddPairings";

import useHttp from "../hooks/use-http";
import { getAllPairings } from "../lib/api";
import styling from "./styles/Home.module.css";
import PairingsList from "../components/pairings/PairingsList";
import { SlSpinner } from "@shoelace-style/shoelace/dist/react";

const Pairings = () => {
  const {
    sendRequest,
    status,
    data: loadedPairings,
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

  if (
    status === "completed" &&
    (!loadedPairings || loadedPairings.length === 0)
  ) {
    return <p>No pairings available?!?</p>;
  }

  const activePairs = loadedPairings.filter((loadedPairings) => {
    return loadedPairings.isActive === true;
  });

  return (
    <Fragment>
      <h2 className={styling.home_merch_h2}>Feeling hungry?</h2>
      <PairingsList pairs={activePairs} />
      <section>
        <AddPairings />
      </section>
    </Fragment>
  );

  // const [pairs, setPairs] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const fetchPairsHandler = useCallback(async () => {
  //   setIsLoading(true);
  //   setError(null);

  //   try {
  //     const response = await fetch('https://dig33-apricot-backend.herokuapp.com/pairings/');

  //     if (!response.ok) {
  //       throw new Error('Something went wrong!');
  //     }

  //     const data = await response.json();

  //     const transformedPairs = data.map(pairsData => {
  //       return {
  //         id: pairsData._id,
  //         pigProduct: pairsData.pigProduct,
  //         dishName: pairsData.dishName,
  //         ingredients: pairsData.ingredients,
  //         image: pairsData.image
  //       }
  //     });
  //     setPairs(transformedPairs);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //   setIsLoading(false);
  // }, []);

  // useEffect(() => {
  //   fetchPairsHandler();
  // }, [fetchPairsHandler]);

  // async function addPairsHandler(pairs) {
  //   const response = await fetch('https://dig33-apricot-backend.herokuapp.com/pairings/', {
  //     method: 'POST',
  //     body: JSON.stringify(pairs),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   });
  //   const data = await response.json();
  //   console.log(data);
  //   fetchPairsHandler();
  // }

  // let content = <p></p>;

  // if (pairs.length > 0) {
  //   content = <PairingsList pairs={pairs} />;
  // }
  // if (error) {
  //   content = <p>{error}</p>
  // }
  // if (isLoading) {
  //   content = <p>Loading...</p>
  // }

  // return (
  //   <Fragment>
  //     <h2>Pairings</h2>
  //     <h3>What to eat while you have a drink</h3>
  //     <section>
  //       {content}
  //     </section>
  //     <h3>Do you have a recipe and pairing to send us?</h3>
  //     <section>
  //       <AddPairings onAddPairings={addPairsHandler} />
  //     </section>
  //   </Fragment>
  // );
};

export default Pairings;
