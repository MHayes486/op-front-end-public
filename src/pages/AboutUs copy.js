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

      <section className={styles.About_us_2}>
        <div className={styles.about_img}>
          <img
            src="\images\backgrounds\About Page Splash Image 1 Torn.jpg"
            className={styling.torn_banner}
            alt="pics from backend"
          />
        </div>
      </section>

      <section className={styles.about_section}>
        <div className={styles.about3_inner}>
          <figure className={styles.about_img3}>
            <img
              src="\images\backgrounds\About Page Image 1.jpg"
              alt="Glass of beer"
            />
            <img
              src="\images\backgrounds\About Page Image 2.jpg"
              alt="Bottle of Hog Father"
            />
          </figure>
        </div>
      </section>

      <article className={styles.about_pigstail_text}>
        <h2 className={styles.about_heading2}>A PIG'S TAIL</h2>
        <section className={styles.About_us_4}>
          <div className={styles.about_col_left}>
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
          </div>
          <div className={styles.about_col_right}>
            <h2 className={styles.about_heading2}>A PIG'S TAIL</h2>
            <div className={styles.about_pigstail_text}>
              <p className={styles.about_pg1}>
                It all started in the naughties, when Andrew and Neil were
                enjoying their home-made cider and hog's roast with friends...
              </p>
              <p className={styles.about_pg2}>
                When our founder started dabbing with cider making in his garden
                shed, he found that West Country Apples make great tasting
                cider. Following this happy discovery, Orchard Pig arrived out
                of a shared thrist for great tasting cider, great food and old
                spots, The Original Orchard Pigs.
              </p>
            </div>
          </div>
        </section>
      </article>

      <section className={styles.about_tear_image}>
        <figure className={styles.about_img5} />
      </section>

      <section className={styles.About_us_5}>
        <div className={styles.tear4}>
          <div className={styles.about_img5}>
            <img
              src="\images\backgrounds\About Page Splash Image 2 Torn.jpg"
              className={styles.about5}
              alt="pics from backend"
            />
          </div>
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
