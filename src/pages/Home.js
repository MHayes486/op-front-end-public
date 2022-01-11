import { Fragement } from "react";
import HeaderNav from "./Layouts/HeaderNav";
import FooterDets from "./Layouts/FooterDets";

import CiderCarosel from "./components/CiderCarosel";
import MerchCarosel from "./components/MerchCarosel";

import styles from '/styles/static.module.css';


const Home = () => {
  return (
    <Fragement>
      <HeaderNav />
      <h1>Home sweet home</h1>
      <p>Home page</p>
      <section className={styles.topHome}>
          <h1>Cider to snout about</h1>
          <button>LEARN MORE</button>
          <img alt="cider picture"></img>
      </section>
      <section className={styles.standard}>
          <h2>Rooted in Sommerset</h2>
          <p>OUR CORE VALUES</p>
        <div className={stles.dics}>
          <div ClassName={styles.disc}>1</div>
          <div className={styles.disc}>2</div>
          <div className={styles.disc}>3</div>
        </div>
        <button>ABOUT US</button>
      </section>
      <section className="farmRip">
          <img alt="farmGate"></img>
          <h1>MORE APPLES,</h1>
          <h1>LESS BUBBLES</h1>
      </section>
      <section className={styles.carosel}>
          <h2>Our Pig is top dog!</h2>
          <p>Check Out Our Cider Range</p>
          <CiderCarosel />
      </section>
      <section className={styles.topHome}>
          <h1>GO PIG OR GO HOME</h1>
          <p>Enjoy OUR PIG_TASTIC MERCH</p>
    <MerchCarosel />
      </section>
      <section>
          <SignUp />
      </section>
      <FooterDets />
    </Fragement>
  );
};

export default Home;
