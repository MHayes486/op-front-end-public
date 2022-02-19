import { Fragment } from "react";
import AddPairings from "../pairings/AddPairings";
import AddCiders from "../ciders/AddCider";
import AddEvents from "../FindUs/AddEvent";
import AddMerchs from "../merchandise/AddMerchs";

const AdminAdds = () => {
  return (
    <Fragment>
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

export default AdminAdds;
