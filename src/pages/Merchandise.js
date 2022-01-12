import { Fragment, useState } from "react";

import MerchList from '../components/merchandise/MerchList';

const Merchandise = () => {

  const [merch, setMovies] = useState([]);

  function fetchMerchHandler() {
    fetch('https://dig33-apricot-backend.herokuapp.com/merchandise/').then(response => {
      return response.json();
    })
    .then((data) => {
      const transformedMerch = data.map(merchData => {
        return {
          id: merchData._id,
          itemType: merchData.itemType,
          itemName: merchData.itemName,
          itemCost: merchData.itemCost,
          image: merchData.image
        }
      });
      setMovies(transformedMerch);
    });
  }


  return (
    <Fragment on>

      <h1>Merch</h1>
      <p>Pick up some swag</p>
      <button onClick={fetchMerchHandler}>See our Merchandise</button>
      <section>
        <MerchList merch={merch} />
      </section>

    </Fragment>
  );
};

export default Merchandise;
