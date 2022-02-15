import AllEvents from "../components/FindUs/AllEvents";
// import styles from "./styles/static.module.css";
import classes from "./styles/Home.module.css";
import styles from "./styles/FindUs.module.css";
import { Container, Col, Rown } from "react-bootstrap";
import { Fragment } from "react";

const FindUs = () => {
  return (
<div className={styles.events_grid}>
<section class="top_banner_section">
        {/* <div className={styles.container_grid}> */}

        <div className={styles.banner}>

        <div className={styles.top_img}>
        <img src="\images\backgrounds\Paper Rip Texture Downwards (Black).png"
            className={styles.torn}
            alt="pics from backend"></img></div>

         <div className={styles.banner_img}>
         <img src= "\images\backgrounds\Events Page Splash Image.jpg"
            className={styles.hero_img}
            alt="pics from backend"></img>
            <div className={styles.banner_overlay}>
              </div>
              </div>


        <span className={styles.b_text}>
          <h1 className={styles.banner_h1}>The PIG is HERE!</h1>
          <p className={styles.banner_p}>The best place to find us is at our events, these are crazy days!
           Merch, cider, sun and fun, what more could we ask for? Besides who knows, maybe the P.I.G will make an appearance!</p>
        </span>

          <div className={styles.bottom_img}>
            <img src="\images\backgrounds\Paper Rip Texture Upwards.png"
            className={styles.torn2}
            alt="pics from backend"></img>
            </div>
          </div>

    <section className={styles.event_cream}>
           <span className={styles.events_text}>
           <h3 className={styles.event_title}>OUR UPCOMING EVENTS</h3>
            <p className={styles.event_s_title}>COME CHECK OUT THE BIG PIG FOR YOURSELF!</p>
            </span>
            <span className={styles.events_info}>
            <h3 className={styles.event_1}>LIVE BAND SUNDAY</h3>
            <h3 className={styles.event_2}>GLASTONBURY PUB MEET UP</h3>
            <h3 className={styles.event_3}>MEET THE PIG</h3>
            </span>

           <div className={styles.event_images}>
            <img src="\images\backgrounds\Events Page Panel Image 1.jpg"
            className={styles.event_img1}
            alt="pics from backend"></img>

            <img src="\images\backgrounds\Events Page Panel Image 2.jpg"
            className={styles.event_img2}
            alt="pics from backend"></img>

            <img src="\images\backgrounds\Events Page Panel Image 3.jpg"
            className={styles.event_img3}
            alt="pics from backend"></img>
          </div>


        </section>




</section>
</div>
  );
};

export default FindUs;
   {/* <a
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
            around the UK and Ireland. */}
