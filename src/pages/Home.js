import { Fragment } from "react";
import { Link } from "react-router-dom";

import CiderCarosel from ".././components/UI/CiderCarosel";
import MerchCarosel from ".././components/UI/MerchCarosel";
import SignUp from ".././components/UI/SignUp";

import styles from "./styles/static.module.css";

const Home = () => {
  return (
    <Fragment>
      <section className={(styles.cider_element, styles.darkblue)}>
        <h2>Cider to snout about</h2>
        <button>LEARN MORE</button>
        <img
          src="./images/ciders/Homepage_Splash_Image_Cider.png"
          className={styles.bottle_size}
          alt="pics from backend"
        />
      </section>

      <section className={styles.cream}>
        <h2>Rooted in Sommerset</h2>
        <p>OUR CORE VALUES</p>
        <div className={styles.dics}>
          <div className={styles.disc}>1</div>
          <div className={styles.disc}>2</div>
          <div className={styles.disc}>3</div>
        </div>
        <button>ABOUT US</button>
      </section>

      <section className="farmRip">
        <img
          src="./images/backgrounds/Paper Rip Texture Downwards.png"
          className={styles.tear_top}
          alt="pics from backend"
        />
        <img
          src="./images/backgrounds/Homepage Splash Image.jpg"
          className={styles.torn_banner}
          alt="pics from backend"
        />
        <img
          src="./images/backgrounds/Paper Rip Texture Upwards.png"
          className={styles.tear_bottom}
          alt="pics from backend"
        />
      </section>

      <section className={styles.cream}>
        <h2>Our Pig is top dog!</h2>
        <Link to="/OurCider">Check Out Our Cider Range</Link>
        <CiderCarosel />
      </section>

      <section className={styles.lightblue}>
        <h2>GO PIG OR GO HOME</h2>
        <Link to="/Merchandise">Enjoy OUR PIG_TASTIC MERCH</Link>
        <MerchCarosel />
      </section>

      <section>
        <SignUp />
      </section>
    </Fragment>
  );
};

export default Home;
