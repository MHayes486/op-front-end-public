import { Fragment } from "react";
import AddPairings from "../components/pairings/AddPairings";
import AddCiders from "../components/ciders/AddCider";
import AddEvents from "../components/FindUs/AddEvent";
import AddMerchs from "../components/merchandise/AddMerchs";

const AdminAdds = () => {
  return (
    <Fragment>
      <hr></hr>
      <h2>Add a Pairing</h2>
      <AddPairings />
      <hr></hr>
      <h2>Add Merch</h2>
      <AddMerchs />
      <hr></hr>
      <h2>Add an Event</h2>
      <AddEvents />
      <hr></hr>
      <h2>Add a new Cider</h2>
      <AddCiders />
    </Fragment>
  );
};

export default AdminAdds();
