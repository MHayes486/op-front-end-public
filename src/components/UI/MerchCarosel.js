import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useEffect } from "react";

import { SlSpinner } from "@shoelace-style/shoelace/dist/react";

import useHttp from "../../hooks/use-http";
import { getAllMerch } from "../../lib/api";
import MerchCard from "../merchandise/MerchCard";

const MerchCarosel = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const {
    sendRequest,
    status,
    data: loadedMerch,
    error,
  } = useHttp(getAllMerch, true);

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
    return <p>No cider available?!?</p>;
  }
  const merchListings = [];

  for (const merch in loadedMerch) {
    const currentMerch = (
      <div>
        <MerchCard
          key={merch}
          ciderId={loadedMerch[merch].id}
          itemType={loadedMerch[merch].itemType}
          itemCost={loadedMerch[merch].itemCost}
          itemName={loadedMerch[merch].itemName}
          image={loadedMerch[merch].image}
        />
      </div>
    );
    merchListings.push(currentMerch);
  }

  return (
    <Carousel responsive={responsive}>
      {merchListings}
      {/* <div>
        <Cider
          key={loadedCiders[0].id}
          ciderTitle={loadedCiders[0].ciderTitle}
          ciderType={loadedCiders[0].ciderType}
          ciderSlogan={loadedCiders[0].ciderSlogan}
          image={loadedCiders[0].image}
        />
      </div>
      <div>
        <Cider
          key={loadedCiders[1].id}
          ciderTitle={loadedCiders[1].ciderTitle}
          ciderType={loadedCiders[1].ciderType}
          ciderSlogan={loadedCiders[1].ciderSlogan}
          image={loadedCiders[1].image}
        />
      </div>
      <div>
        <Cider
          key={loadedCiders[2].id}
          ciderTitle={loadedCiders[2].ciderTitle}
          ciderType={loadedCiders[2].ciderType}
          ciderSlogan={loadedCiders[2].ciderSlogan}
          image={loadedCiders[2].image}
        />
      </div> */}
    </Carousel>
  );
};

export default MerchCarosel;
