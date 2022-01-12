import { Fragment, useState, useEffect, useCallback } from "react";

import MerchList from '../components/merchandise/MerchList';

import { SlSpinner } from '@shoelace-style/shoelace/dist/react';


const Merchandise = () => {

  const [merch, setMerch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMerchHandler = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    fetchMerchHandler();
  }, [fetchMerchHandler]);

  let content = <p></p>;

  if (merch.length > 0) {
    content = <MerchList merch={merch} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <SlSpinner style={{ fontSize: '3rem' }} />;
  }

  return (
    <Fragment>
      <h1>Merch</h1>
      <p>Pick up some swag</p>
      <section>
        {content}
      </section>
    </Fragment>
  );
};

export default Merchandise;
