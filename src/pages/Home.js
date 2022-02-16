import { Link } from "react-router-dom";
import CiderCarosel from ".././components/UI/CiderCarosel";
import MerchCarosel from ".././components/UI/MerchCarosel";
// import ValSVG from ".././components/UI/Values"
// import ValueSVG from "./images/backgrounds/values.svg";

import SignUp from ".././components/UI/SignUp";
import Button from ".././components/UI/Button";
import { Container, Grid, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./styles/Home.module.css";




const Home = () => {
  return (
    <div>
      <div className={styles.home_page}>
        <Container fluid="true" className={styles.page}>

          <section className={styles.cider_element}>

            <h2 className={styles.home_heading}>Cider to snout about</h2>

            <Col col-auto col-6>
              <img
                src="./images/ciders/Homepage_Splash_Image_Cider.png"
                className={styles.home_bottle_size}
                alt="pics from backend"
              />
            </Col>

          </section>
        </Container>

      </div>

      <div>

      <img
                src=".\images\backgrounds\Home-Page-Rip-1.png"
                className={styles.tear_1st}
                alt="pics from backend"
              />
      </div>
      <div className={styles.home_page}>
        <Container fluid="true">
          <section className={styles.home_cream}>
            <Col>


              <h2 className={styles.home_heading2}>Rooted in Sommerset</h2>
              <p className={styles.home_heading3}>OUR CORE VALUES</p>

              <img
                src="./images/values.png"
                alt="Orchard Pig: BOLD,MISCHEVIOUS AND SIMPLE"
                className={styles.home_values}
              />


            </Col>
          </section>
        </Container>
      </div>

      <div className={styles.home_page}>
        <section className={styles.splash}>
          <img
            src="./images/backgrounds/Homepage Splash Image.jpg"
            className={styles.home_torn_banner}
            alt="pics from backend"
          />
          <img
            src="\images\backgrounds\Home-Page-Rip-2.png"
            className={styles.tear_2}
            alt="pics from backend"
          />

          <h2 className={styles.home_cream_h2}>Our Pig is top dog!</h2>
          <Link to="/OurCider" className={styles.links}>
            Check Out Our Cider Range
          </Link>
        </section>

        <section className={styles.carosel_cider}>

          <CiderCarosel />
        </section>

        <Container fluid="true">
          <section className={styles.lightblue}>
            <h2 className={styles.home_merch_h2}>GO PIG OR GO HOME</h2>
            <Link to="/Merchandise" className={styles.links1}>
              Enjoy OUR PIG_TASTIC MERCH
            </Link>
            <MerchCarosel />
          </section>
        </Container>
        {/* <section>
        <SignUp />
      </section> */}
        {/* </div> */}


      </div>
    </div >

  );
};

export default Home;
