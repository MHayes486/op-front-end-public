import { Link } from "react-router-dom";
import CiderCarosel from ".././components/UI/CiderCarosel";
import MerchCarosel from ".././components/UI/MerchCarosel";
// import ValSVG from ".././components/UI/Values"
// import ValueSVG from "./images/backgrounds/values.svg";

// import classes from "./styles/static.module.css";
import SignUp from ".././components/UI/SignUp";
import Button from ".././components/UI/Button";
import {Container, Grid, Row, Col, Image} from "react-bootstrap";
import"bootstrap/dist/css/bootstrap.css";
import classes from "./styles/static.module.css";
import styles from "./styles/Home.module.css";




const Home = () => {
  return (
    <div className={styles.home_page}>
   <Container fluid="true" className={styles.page}>

        <section className={styles.cider_element}>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <h2 className={styles.heading}>Cider to snout about</h2></Col>

                <button className={styles.btn1} type="submit">
            LEARN MORE
              </button>

             <Col col-auto col-6>
            <img
              src="./images/ciders/Homepage_Splash_Image_Cider.png"
              className={styles.bottle_size}
              alt="pics from backend"
            />
            </Col>
          </Row>

        </section>

        <section className={styles.cream}>
    <Container fluid = "true">
      <Col>
          <img
            src=".\images\backgrounds\Home-Page-Rip-1.png"
            className={styles.tear_1st}
            alt="pics from backend"
          />
            <h2 className={styles.heading2}>Rooted in Sommerset</h2>
            <p className={styles.cream_p}>OUR CORE VALUES</p>

            <img
              src="./images/values.png"
              alt="Orchard Pig: BOLD,MISCHEVIOUS AND SIMPLE"
              className={styles.values}
            />

            <button className={styles.btn2} type="submit">
            ABOUT US
              </button>

    </Col>
    </Container>
        </section>

         <section className={styles.splash}>
         <img
                src="./images/backgrounds/Homepage Splash Image.jpg"
                className={styles.torn_banner}
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
      </Container>

      </div>

  );
};

export default Home;
