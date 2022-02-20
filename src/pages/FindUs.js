import AllEvents from "../components/FindUs/AllEvents";

import styles from "./styles/AboutUs.module.css";
import styling from "./styles/Home.module.css";

const FindUs = () => {
  return (


    <div >
      <div >
        <section >
          <h2 className={styling.home_merch_h2}>Where to buy?</h2>

          <img
            src="./images/backgrounds/Events-Page-Rip-2-Plus-Image.png.jpg"
            className={styling.torn_banner}
            alt="pics from backend"
          />

        </section>

        <section >
          <h2 className={styling.home_merch_h2}>Our upcoming events</h2>

          <h3 className={styling.home_merch_h3}>
            Come check out the big pig for yourself...
          </h3>

          <p className={styling.home_merch_h6}>
            The best place to find us is at our events, these are crazy days!
          </p>

          <p className={styling.home_merch_h6}>
            Merch, cider, sun and fun, what more could we ask for?
          </p>

          <p className={styling.home_merch_h6}>
            Besides who knows, maybe the P.I.G will make an appearance!
          </p>

        </section>

        <section className={styles.cream}>
          <h2 className={styles.home_cream_h2}>Our Pig is top dog!</h2>
        </section>
 
        <AllEvents />
      </div>
    </div>
  );




  /*    <div className={classes.border}>
        <div className={classes.internal}>
          <div className={styles.cream}>
  
          <div className={styles.banner}>
            <div className={styles.top_img}>
              <img
   
                className={styles.torn}
                alt="pics from backend"
              ></img>
            </div>
  
            <div className={styles.banner_img}>
              <img
                src="\images\backgrounds\Events Page Splash Image.jpg"
                className={styles.hero_img}
                alt="pics from backend"
              ></img>
              <div className={styles.banner_overlay}></div>
            </div>
            </div>
  
            <h1 className={styles.txt_dark}>The PIG is HERE!</h1>
            <p>
              The best place to find us is at our events, these are crazy days!
              Merch, cider, sun and fun, what more could we ask for? Besides who
              knows, maybe the P.I.G will make an appearance!
            </p>
            <h3>Events:</h3>
            <AllEvents />
            <h3>Not near you?</h3>
            <p>
              No stress, our full range is available throughout Sommerset. Here
              are some of our{" "}
              <a
                href="https://www.theguardian.com/travel/2021/may/20/10-of-the-best-somerset-pubs-with-beer-gardens-or-outdoor-space/"
                target="_blank"
                rel="noopener noreferrer"
              >
                favourite pubs
                <em>(external link)</em>
              </a>{" "}
              and we a nationally we have a few choices available at every{" "}
              <a
                href="https://www.jdwetherspoon.com/pubs/all-pubs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Weatherspoons<em>(external link)</em>
              </a>{" "}
              around the UK and Ireland.
            </p>
          </div>
        </div>
      </div>
    ); */
};

export default FindUs;
