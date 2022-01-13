import { Fragment } from "react";

import CiderCarosel from ".././components/CiderCarosel";
import MerchCarosel from ".././components/MerchCarosel";
import SignUp from ".././components/SignUp";
import OurCider from "./OurCider";

import styles from "./styles/static.module.css";

const Home = () => {
  return (
    <Fragment>

      
      <section className={(styles.cider_element, styles.darkblue)}>
        <h2>Cider to snout about</h2>
        <button>LEARN MORE</button>
        <img src="./images/ciders/Homepage_Splash_Image_Cider.png" className={styles.bottle_size} alt="pics from backend" /> 
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
      <img src="./images/backgrounds/Paper Rip Texture Downwards.png" className={styles.tear_top} alt="pics from backend" /> 
      <img src="./images/backgrounds/Homepage Splash Image.jpg" className={styles.torn_banner} alt="pics from backend" /> 
      <img src="./images/backgrounds/Paper Rip Texture Upwards.png" className={styles.tear_bottom} alt="pics from backend" /> 

      </section>
      
      <section className={styles.cream}>
        <h2>Our Pig is top dog!</h2>
        <p>Check Out Our Cider Range</p>
        <CiderCarosel />
      </section>
      
      <section className={styles.lightblue}>
        <h2>GO PIG OR GO HOME</h2>
        <p>Enjoy OUR PIG_TASTIC MERCH</p>
        <MerchCarosel />
      </section>
      
      <section>
        <SignUp />
      </section>
    </Fragment>
  );
};

export default Home;
