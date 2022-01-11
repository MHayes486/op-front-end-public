import { Fragement } from "react";
import HeaderNav from "./Layouts/HeaderNav";
import FooterDets from "./Layouts/FooterDets";

const Home = () => {
  return (
    <Fragement>
      <HeaderNav />
      <h1>Home sweet home</h1>
      <p>Home page</p>
      <FooterDets />
    </Fragement>
  );
};

export default Home;
