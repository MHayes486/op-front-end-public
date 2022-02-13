import { Fragment } from "react";
import AddPairings from "../components/pairings/AddPairings";

const AdminAdds = () => {
  return (
    <Fragment>
      <hr></hr>
      <h2>Add a Pairing</h2>
      <AddPairings />
      <hr></hr>
      <h2>Add Merch</h2>
      <hr></hr>
      <h2>Add an Event</h2>
      <hr></hr>
      <h2>Add a new Cider</h2>
    </Fragment>
  );
};

export default AdminAdds();
