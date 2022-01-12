import { Fragment, useState, useEffect, useCallback } from "react";

import PairingsList from '../components/pairings/PairingsList';

const Pairings = () => {

  const [pairs, setPairs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPairsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://dig33-apricot-backend.herokuapp.com/pairings/');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      
      const data = await response.json();

      const transformedPairs = data.map(pairsData => {
        return {
          id: pairsData._id,
          pigProduct: pairsData.pigProduct,
          dishName: pairsData.dishName,
          ingredients: pairsData.ingredients,
          image: pairsData.image
        }
      });
      setPairs(transformedPairs);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchPairsHandler();
  }, [fetchPairsHandler]);

  let content = <p></p>;

  if (pairs.length > 0) {
    content = <PairingsList pairs={pairs} />;
  }
  if (error) {
    content = <p>{error}</p>
  }
  if (isLoading) {
    content = <p>Loading...</p>
  }

  return (
    <Fragment>
      <h1>Pairs</h1>
      <p>What to eat while you have a drink</p>
      <section>
        {content}
      </section>
    </Fragment>
  );
};

export default Pairings;