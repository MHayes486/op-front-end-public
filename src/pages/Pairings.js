import { Fragment, useState, useEffect, useCallback } from "react";

import PairingsList from '../components/pairings/PairingsList';

const Pairings = () => {

  const [pairings, setPairings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPairingsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://dig33-apricot-backend.herokuapp.com/pairings/');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      
      const data = await response.json();

      const transformedPairings = data.map(pairingsData => {
        return {
          id: pairingsData._id,
          pigProduct: pairingsData.pigProduct,
          itemName: pairingsData.itemName,
          itemCost: pairingsData.itemCost,
          image: pairingsData.image
        }
      });
      setPairings(transformedPairings);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchPairingsHandler();
  }, [fetchPairingsHandler]);

  let content = <p></p>;

  if (pairings.length > 0) {
    content = <PairingsList pairings={pairings} />;
  }
  if (error) {
    content = <p>{error}</p>
  }
  if (isLoading) {
    content = <p>Loading...</p>
  }

  return (
    <Fragment>
      <h1>Pairings</h1>
      <p>What to eat while you drink</p>
      <section>
        {content}
      </section>
    </Fragment>
  );
};

export default Pairings;
