import { Fragment, useState } from "react";

import MerchList from '../components/merchandise/MerchList';

const Merchandise = () => {

  const [merch, setMerch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMerchHandler() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://dig33-apricot-backend.herokuapp.com/merchandise/');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      
      const data = await response.json();

      const transformedMerch = data.map(merchData => {
        return {
          id: merchData._id,
          itemType: merchData.itemType,
          itemName: merchData.itemName,
          itemCost: merchData.itemCost,
          image: merchData.image
        }
      });
      setMerch(transformedMerch);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  let content = <p></p>;

  if (merch.length > 0) {
    content = <MerchList merch={merch} />;
  }
  if (error) {
    content = <p>{error}</p>
  }
  if (isLoading) {
    content = <p>Loading...</p>
  }

  return (
    <Fragment>
      <h1>Merch</h1>
      <p>Pick up some swag</p>
      <button onClick={fetchMerchHandler}>See our Merchandise</button>
      <section>
        {content}
      </section>
    </Fragment>
  );
};

export default Merchandise;
