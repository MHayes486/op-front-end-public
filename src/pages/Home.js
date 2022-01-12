import { Fragment } from "react";

import CiderCarosel from ".././components/CiderCarosel";
import MerchCarosel from ".././components/MerchCarosel";
import SignUp from ".././components/SignUp";

import styles from "./styles/static.module.css";

const Home = () => {
  return (
    <Fragment>

      
      <section className={(styles.cider_element, styles.darkblue)}>
        <h2>Cider to snout about</h2>
        <button>LEARN MORE</button>
        <img src="./images/ciders/Homepage_Splash_Image_Cider.png" className={styles.bottle_size} alt="pics from backend" /> 
      </section>
      <hr />
      <section className={styles.standard}>
        <h2>Rooted in Sommerset</h2>
        <p>OUR CORE VALUES</p>
        <div className={styles.dics}>
          <div className={styles.disc}>1</div>
          <div className={styles.disc}>2</div>
          <div className={styles.disc}>3</div>
        </div>
        <button>ABOUT US</button>
      </section>
      <hr />
      <section className="farmRip">
        <img alt="farmGate"></img>
        <h1>MORE APPLES,</h1>
        <h1>LESS BUBBLES</h1>
      </section>
      <hr />
      <section className={styles.carosel}>
        <h2>Our Pig is top dog!</h2>
        <p>Check Out Our Cider Range</p>
        <CiderCarosel />
      </section>
      <hr />
      <section className={styles.lightblue}>
        <h1>GO PIG OR GO HOME</h1>
        <p>Enjoy OUR PIG_TASTIC MERCH</p>
        <MerchCarosel />
      </section>
      <hr />
      <section>
        <SignUp />
      </section>
    </Fragment>
  );
};

export default Home;
