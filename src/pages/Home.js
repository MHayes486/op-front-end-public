import { Fragment } from "react";

// import CiderCarosel from ".././components/CiderCarosel";
import MerchCarosel from ".././components/MerchCarosel";
import SignUp from ".././components/SignUp";
import OurCider from "./OurCider";
import Button from "../components/UI/button/Button";
import styles from "./styles/static.module.css";
import styled from "styled-components";

const Home = () => {
  return (
    <Fragment>


      <section className={(styles.cider_element, styles.darkblue)}>
        <h2 className={styles.heading}>Cider to snout about</h2>
        <Button className={styled.btn1} type="submit">LEARN MORE</Button>
        <img src="./images/ciders/Homepage_Splash_Image_Cider.png" className={styles.bottle_size} alt="pics from backend" />
        <img src="./images/backgrounds/Paper Rip Texture Upwards.png" className={styles.tear_bottom} alt="pics from backend" />

      </section>

      <section className={styles.cream}>
        <h2 className={styles.heading2}>Rooted in Sommerset</h2>
        <p className={styles.cream_p}>OUR CORE VALUES</p>
        <div className={styles.dics}>
          <div className={styles.disc}>1</div>
          <div className={styles.disc}>2</div>
          <div className={styles.disc}>3</div>
        </div>
        <div className={styles.disc_title}>
        <div className={styles.title}>BOLD</div>
          <div className={styles.title}>MISCHEVIOUS</div>
          <div className={styles.title}>SIMPLE</div>
          </div>
        <Button className={styled.btn2} type="submit">ABOUT US</Button>


      </section>

      <section className="farmRip">
        <slide className={styles.slide}>
         <slide><img src="./images/backgrounds/Paper Rip Texture Downwards.png" className={styles.tear_top} alt="pics from backend" /></slide>
          <slide><img src="./images/backgrounds/Homepage Splash Image.jpg" className={styles.torn_banner} alt="pics from backend" /></slide>
          <slide><img src="./images/backgrounds/Paper Rip Texture Upwards.png" className={styles.tear_bottom} alt="pics from backend" /></slide>
        </slide>
      </section>

      <section className={styles.cream1}>
        <div><h2 className={styles.heading3}>Our Pig is top dog!</h2></div>

        <p className={styles.cream1_p}>Check Out Our Cider Range</p>
        {/* <CiderCarosel /> */}
      </section>

      <section className={styles.lightblue}>
        <h2 className={styles.go_pig}>GO PIG OR GO HOME</h2>
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
