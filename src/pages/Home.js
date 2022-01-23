import { Fragment } from "react";
import { Link } from "react-router-dom";

import CiderCarosel from ".././components/UI/CiderCarosel";
import MerchCarosel from ".././components/UI/MerchCarosel";
import SignUp from ".././components/UI/SignUp";
import Button from ".././components/UI/Button";

import classes from "./styles/static.module.css";
import styles from "./styles/Home.module.css";

const Home = () => {
  return (
    <Fragment>
      <section className={(styles.cider_element, styles.darkblue)}>
        <h2 className={styles.heading}>Cider to snout about</h2>
        {/* <Button className={styled.btn1} type="submit">
          LEARN MORE
        </Button> */}
        <img
          src="./images/ciders/Homepage_Splash_Image_Cider.png"
          className={styles.bottle_size}
          alt="pics from backend"
        />
        <img
          src="./images/backgrounds/Paper Rip Texture Upwards.png"
          className={styles.tear_bottom}
          alt="pics from backend"
        />
      </section>

      <section className={styles.cream}>
        <h2 className={styles.heading2}>Rooted in Sommerset</h2>
        <p className={styles.cream_p}>OUR CORE VALUES</p>
        <div className={styles.dics}>
          <img
            src="./images/backgrounds/values.svg"
            alt="Orchard Pig: BOLD,MISCHEVIOUS AND SIMPLE"
          />
          {/* <div className={styles.disc}>1</div>
          <div className={styles.disc}>2</div>
          <div className={styles.disc}>3</div>
        </div>
        <div className={styles.disc_title}>
        <div className={styles.title}>BOLD</div>
          <div className={styles.title}>MISCHEVIOUS</div>
          <div className={styles.title}>SIMPLE</div> */}
        </div>
        {/* <Button className={styles.btn2} type="submit">
          ABOUT US
        </Button> */}
      </section>

      <section className="farmRip">
        <slide className={styles.slide}>
          <slide>
            <img
              src="./images/backgrounds/Paper Rip Texture Downwards.png"
              className={styles.tear_top}
              alt="pics from backend"
            />
          </slide>
          <slide>
            <img
              src="./images/backgrounds/Homepage Splash Image.jpg"
              className={styles.torn_banner}
              alt="pics from backend"
            />
          </slide>
          <slide>
            <img
              src="./images/backgrounds/Paper Rip Texture Upwards.png"
              className={styles.tear_bottom}
              alt="pics from backend"
            />
          </slide>
        </slide>
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

      {/* <section>
        <SignUp />
      </section> */}
    </Fragment>
  );
};

export default Home;
