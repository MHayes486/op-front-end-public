import { Fragment } from "react";
import styles from "./styles/AboutUs.module.css";
import styling from "./styles/Home.module.css";

const AboutUs = () => {
  return (
    <Fragment>
                <h2 className={styling.home_merch_h2}>Mischief in the Mainstream</h2>
          <h3 className={styling.home_merch_h3}>
          We like to poke fun at the world and ourselves... 
          </h3>

     <section >   {/* 
        <div className={styles.cream}></div>
        <h1 className={styles.about_us_h1}>Mischief in the Mainstream</h1>
        <p className={styles.sub_heading}>
          We like to poke fun at the world and ourselves...And Each Other{" "}
        </p>*/}
        <div className={styles.tear1}>
  {/*         <img
            className={(styles.tear_upwards, styles.tear_upward_img)}
            src="\images\backgrounds\Paper Rip Texture Downwards.png"
            alt="pics from backend"
          />   */}
          {/* <button className={styles.about_btn} onClick>
            Learn More
          </button> */}
        </div>
      </section>

      <section className={styles.About_us_2}>
        <div className={styles.about_img}>
          <img
            src="\images\backgrounds\About Page Splash Image 1 Torn.jpg"
            className={styles.about_splash1}
            alt="pics from backend"
          />
        </div>
      </section>

      <section className={styles.About_us_3}>
        <div className={styles.About2}>
          <img
            src="\images\backgrounds\Paper Rip Texture Upwards (Black).png"
            className={styles.about_tear2}
            alt="pics from backend"
          />
        </div>
      </section>

      <section className={styles.About_us_4}>
        <div className={styles.about_img3}>
          <img
            src="\images\backgrounds\About Page Image 1.jpg"
            className={styles.about1}
            alt="pics from backend"
          />
          <img
            src="\images\backgrounds\About Page Image 2.jpg"
            className={styles.about2}
            alt="pics from backend"
          />
        </div>
        <h2 className={styles.about_heading2}>A PIG'S TAIL</h2>
        <div className={styles.about_pigstail_text}>
          <p className={styles.about_pg1}>
            It all started in the naughties, when Andrew and Neil were enjoying
            their home-made cider and hog's roast with friends...
          </p>
          <p className={styles.about_pg2}>
            When our founder started dabbing with cider making in his garden
            shed, he found that West Country Apples make great tasting cider.
            Following this happy discovery, Orchard Pig arrived out of a shared
            thrist for great tasting cider, great food and old spots, The
            Original Orchard Pigs.
          </p>
        </div>
      </section>

      <section className={styles.About_us_5}>
        <div className={styles.tear4}>
          <img /*
            src="\images\backgrounds\Paper Rip Texture Downwards (Black).png"
            className={styles.about_tear3}
            alt="pics from backend"
          *//>
          <div className={styles.about_img5}>
            <img
              src="\images\backgrounds\About Page Splash Image 2 Torn.jpg"
              className={styles.about5}
              alt="pics from backend"
            />
          </div>
          <img
            src="\images\backgrounds\Paper Rip Texture Upwards.png"
            className={styles.about_tear5}
            alt="pics from backend"
          />
        </div>
      </section>

      <section className={styles.About_us_6}>
        <div className={styles.cream}>
          <h2 className={styles.about_bottomh2}>BARNSTORMINGLY TASTY</h2>
          <p className={styles.about_p6_1}>
            WHO KNEW WEST COUNTRY APPLES MAKE THE BEST TASTING CIDER?
          </p>
          <p className={styles.about_p6_2}>
            FOLLOWING THIS HAPPY DISCOVERY...ORCHARD PIGS ARRIVED
          </p>
        </div>

        <div className={styles.about_icons_text}>
          <div className={styles.about_bottom_p_3}>
            <img
              src="\images\icons\About Page Icon 1.png"
              className={styles.about_icon1}
              alt="pics from backend"
            />
            <h3 className={styles.about_s1}>REFRESHINGLY DIFFERENT</h3>
            <div className={styles.about_block1}>
              Bursting with West Country bittersweet cider apples, expertly
              crafted to our own special blend
            </div>
          </div>

          <div className={styles.about_bottom_p_1}>
            <img
              src="\images\icons\About Page Icon 2.png"
              className={styles.about_icon2}
              alt="pics from backend"
            />
            <h3 className={styles.about_s2}>VEGAN FRIENDLY</h3>
            <div className={styles.about_block2}>
              Suitable for vegans, vegetarians, fruitarians and even
              flexitarians...
            </div>
          </div>

          <div className={styles.about_bottom_p_2}>
            <img
              src="\images\icons\About Page Icon 3.png"
              className={styles.about_icon3}
              alt="pics from backend"
            />
            <h3 className={styles.about_s3}>LESS BUBBLES, MORE APPLES</h3>
            <div className={styles.about_block3}>
              Gently sparkling, perfect for pairing with food...
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutUs;
