import { Link } from "react-router-dom";

import CiderCarosel from ".././components/UI/CiderCarosel";
import MerchCarosel from ".././components/UI/MerchCarosel";

import styles from "./styles/Home.module.css";

const Home = () => {
  return (
    <div >
      <div className={styles.internal}>
        <section className={(styles.cider_element, styles.darkblue)}>
          <h2 className={styles.heading}>Cider to snout about</h2>

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
          <img className={styles.values}
            src="\images\icons\values.png"
            alt="Orchard Pig: BOLD,MISCHEVIOUS AND SIMPLE"
          />

          {/* <Button className={styles.btn2} type="submit">
          ABOUT US
        </Button> */}
        </section>

        <section className="farmRip">
          <div className={styles.div}>

            <div>
              <img       // MORE APPLES LESS BUBBLES
                src="./images/backgrounds/Homepage Splash Image Torn.png"
                className={styles.torn_banner}
                alt="pics from backend"
              />
            </div>

            <div>
              <img
                src="./images/backgrounds/bit-of-cream.jpg"
                className={styles.tear_bottom}
                alt="pics from backend"
              />
            </div>
          </div>
        </section>

        <section className={styles.cream}>
          <h2 className={styles.home_cream_h2}>Our Pig is top dog!</h2>
          <Link to="/OurCider" className={styles.links}>
            Check Out Our Cider Range
          </Link>
        </section>
        <section className={styles.carosel_cider}>
          <CiderCarosel />
        </section>

        <section className={styles.lightblue}>
          <h2 className={styles.home_merch_h2}>GO PIG OR GO HOME</h2>
          <Link to="/Merchandise" className={styles.links}>
            Enjoy OUR PIG-TASTIC MERCH
          </Link>
          <MerchCarosel />
        </section>

        {/* <section>
        <SignUp />
      </section> */}
      </div>
    </div>
  );
};

export default Home;
