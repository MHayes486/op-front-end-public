import { Fragment } from "react";

import AdminMerch from "../components/admin/AdminMerch";
import AdminPairs from "../components/admin/AdminPairs";
import AdminEvents from "../components/admin/AdminEvents";
import AdminCiders from "../components/admin/AdminCiders";
import AdminOrders from "../components/admin/AdminOrders";
import AdminContacts from "../components/admin/AdminContacts";

import AddMerchs from "../components/merchandise/AddMerchs";
import AddPairings from "../components/pairings/AddPairings";
import AddEvents from "../components/FindUs/AddEvent";
import AddCiders from "../components/ciders/AddCider";
import styles from "./styles/Admin.module.css";

const Admin = () => {
  return (
    <Fragment>
      <h1 className={styles.admin_h2_black}>Admin</h1>
      <section>
        <h4 className={styles.admin_h2}>Merchandise</h4>
        <AdminMerch />
        <AddMerchs />
      </section>
      <hr></hr>
      <section>
        <h4 className={styles.admin_h2}>Pairings</h4>
        <AdminPairs />
        <AddPairings />
      </section>
      <hr></hr>
      <section>
        <h4 className={styles.admin_h2}>Update Events</h4>
        <AdminEvents />
        <AddEvents />
      </section>
      <hr></hr>
      <section>
        <h4 className={styles.admin_h2}>Update Ciders</h4>
        <AdminCiders />
        <AddCiders />
      </section>
      <hr></hr>
      <section>
        <h4 className={styles.admin_h2}>Orders List</h4>
        <AdminOrders />
        <hr></hr>
        <h4 className={styles.admin_h2}>Contacts List</h4>
        <AdminContacts />
      </section>
    </Fragment>
  );
};
export default Admin;
