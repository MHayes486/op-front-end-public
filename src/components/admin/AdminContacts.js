import { Fragment, useEffect } from "react";

import useHttp from "../../hooks/use-http";
import { getAllContacts } from "../../lib/api";

import SignUpsTable from "./tables/SignUpsTable";

import { SlSpinner } from "@shoelace-style/shoelace/dist/react";

const AdminContacts = () => {
  // GET Contacts
  const {
    sendRequest,
    status,
    data: loadedContacts,
    error,
  } = useHttp(getAllContacts, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return <SlSpinner style={{ fontSize: "3rem" }} />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (
    status === "completed" &&
    (!loadedContacts || loadedContacts.length === 0)
  ) {
    return <p>No contacts available?!?</p>;
  }

  return (
    <Fragment>
      <section>
        <SignUpsTable signUps={loadedContacts} />
      </section>
    </Fragment>
  );
};
export default AdminContacts;
