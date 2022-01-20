import { Fragment } from "react";
import styles from "./AboutUs.css"
import styled from "styled-components";


const AboutUs = () => {
  return (
    <Fragment>


      <section className={(styles.About_us_1, styles.cream_bg, styles.button)}>
      <div className={styles.about_page}>
          <h1>Mischief in the Mainstream</h1>
          <p>We like to poke fun at the world and ourselves...And Each Other </p>
        <div className={styles.tear1}>
          <img src="./images/backgrounds/Paper Rip Texture Upwards.png" className={styles.tear_bottom} alt="pics from backend" />
        </div>
        </div>

        </section>

        <section className={styles.About_us_2}>
        <h2>ROOTED IN SOMERSET.</h2>
          <p>We like to poke fun at the world and ourselves...And Each Other </p>
          <div className={styles.about_img}>
            <img src="\images\backgrounds\About Page Splash Image 1.jpg" className={styles.splash1} alt="pics from backend" />
            <img src="\images\backgrounds\About Page Splash Image 2.jpg" className={styles.splash2} alt="pics from backend" />
         </div>

         <div className={styles.tear2}>
            <img src="public\images\backgrounds\Paper Rip Texture Upwards (Black).png" className={styles.tear2} alt="pics from backend" />

         </div>
      </section>

        <section className={styles.About_us_3}>
        <div className={styles.tear3}>
        <h2>A PIGS TAIL</h2>
          <p>It all started in the naughties, when Andrew and Neil were enjoying their home-made cider and hog's roast with friends...</p>
          <p>When our founder started dabbing with cider making in his garden shed, he found that West Country Apples make great tasting cider. Following this happy discovery, Orchard Pig arrived out of a shared thrist for great tasting cider, great food and old spots, The Original Orchard Pigs.</p>
          </div>
          <div className={styles.about_img}>
            <img src="\images\backgrounds\Paper Rip Texture Downwards (Black).png" className={styles.tear3} alt="pics from backend" />
            <img src="\images\backgrounds\About Page Image 1.jpg" className={styles.about1} alt="pics from backend" />

          <div className={styles.about_img}>
            <img src="\images\backgrounds\About Page Image 1.jpg" className={styles.about1} alt="pics from backend" />
            <img src="\images\backgrounds\About Page Image 2.jpg" className={styles.about2} alt="pics from backend" />
        </div>
      </div>
      </section>

      <section className={styles.About_us_4}>
        <div className={styles.tear3}>
        <h2>CIDER TO SNOUT ABOUT</h2>
            <img src="public\images\backgrounds\Paper Rip Texture Upwards.png" className={styles.tear4} alt="pics from backend" />

          <div className={styles.about_img}>
            <img src="\images\backgrounds\About Page Image 1.jpg" className={styles.about1} alt="pics from backend" />
            <img src="\images\backgrounds\About Page Image 2.jpg" className={styles.about2} alt="pics from backend" />
        </div>
      </div>
      </section>


      <section className={styles.About_us_5}>
      <h2>BARNSTORMINGLY TASTY</h2>
      <p>WHO KNEW WEST COUNTRY APPLES MAKE THE BEST TASTING CIDER?</p>
      <p>FOLLOWING THIS HAPPY DISCOVERY...ORCHARD PIGS ARRIVED</p>
      <div className={styles.bottom_p_1}>
      <h3>VEGAN FRIENDLY</h3>
        <p>Suitable for vegans, vegetarians, fruitarians and even flexitarians...</p>
      </div>
      <div className={styles.bottom_p_2}>
        <h3>LESS BUBBLES, MORE APPLES</h3>
        <p>Gently sparkling, perfect for pairing with food...</p>
        </div>
      <div className={styles.bottom_p_3}></div>

          <div className={styles.about_img}>
            <img src="\images\Footer Image.jpg" className={styles.about1} alt="pics from backend" />


        </div>
      </section>

    </Fragment>
  );
};

export default AboutUs;
