import { Fragement } from "react";
import HeaderNav from "./Layouts/HeaderNav";
import FooterDets from "./Layouts/FooterDets";

const NotFound = () => {
  return (
    <Fragement>
      <HeaderNav />
      <h1>Whoops</h1>
      <p>broken link</p>
      <FooterDets />
    </Fragement>
  );
};

export default NotFound;
