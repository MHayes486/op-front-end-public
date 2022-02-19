import { Fragment } from "react";

import AdminMerch from "../components/admin/AdminMerch";
import AdminPairs from "../components/admin/AdminPairs";
import AdminEvents from "../components/admin/AdminEvents";
import AdminCiders from "../components/admin/AdminCiders";
import AdminAdds from "../components/admin/AdminAdditions";

import AddMerchs from "../components/merchandise/AddMerchs";
import AddPairings from "../components/pairings/AddPairings";
import AddEvents from "../components/FindUs/AddEvent";
import AddCiders from "../components/ciders/AddCider";
import styles from "./styles/Admin.module.css";

const Admin = () => {
  return (
    <Fragment>
      <h1 className={styles.admin_h2}>Admin</h1>
      <section>
        <h4 className={styles.admin_h3}>Update Merchandise</h4>
        <AdminMerch />
        <h4 className={styles.admin_h3}>Add Merch</h4>
        <AddMerchs />
      </section>
      <hr></hr>
      <section>
        <h4 className={styles.admin_h3}>Update Pairings</h4>
        <AdminPairs />
        <h4 className={styles.admin_h3}>Add a Pairing</h4>
        <AddPairings />
      </section>
      <hr>
      </hr>
      {/* <section>
        <h4>Update Events</h4>
        <AdminEvents />
        <h4>Add an Event</h4>
        <AddEvents />
      </section>
      <hr></hr>
      <section>
        <h4>Update Pairings</h4>
        <AdminCiders />
        <h4>Add a new Cider</h4>
        <AddCiders />
      </section>
      <hr></hr> */}
      <AdminAdds />
    </Fragment>
  );
};
export default Admin;
