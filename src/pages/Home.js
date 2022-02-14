import { Fragment } from "react";
import { Link } from "react-router-dom";
import CiderCarosel from ".././components/UI/CiderCarosel";
import MerchCarosel from ".././components/UI/MerchCarosel";
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
         {/* <Button>Learn More</Button> */}
         <Col col-auto col-6>
          <img
            src="./images/ciders/Homepage_Splash_Image_Cider.png"
            className={styles.bottle_size}
            alt="pics from backend"
          /></Col>
          </Row>
          <img
            src="./images/backgrounds/Paper Rip Texture Upwards.png"
            className={styles.tear_bottom}
            alt="pics from backend"
          />
        </section>

        <section className={styles.cream}>
<Container fluid = "true">
<Row className="justify-content-md-center">

          <h2 className={styles.heading2}>Rooted in Sommerset</h2></Row>
          <Row className="justify-content-center">
        <p className={styles.cream_p}>OUR CORE VALUES</p>
        </Row>
        <Row className="justify-content-center">
          <Col>      <img
            src="./images/values.png"
            alt="Orchard Pig: BOLD,MISCHEVIOUS AND SIMPLE" className={styles.values}
          /></Col>

          {/* <Button className={styles.btn2} type="submit">
          ABOUT US
        </Button> */}
        </Row>
</Container>
        </section>

        <Container fluid="true">
        <section className="farmRip">
          <div className={styles.div}>
          <Row>
            <div className="col-1">
             <div className="rip-1 w-100">
               <img
                src="./images/backgrounds/Paper Rip Texture Downwards.png"
                className={styles.tear_top}
                alt="pics from backend"
              />
             </div>
           </div>
        </Row>
        <Row>
          <div className="col-2">
          <div className="banner-1 w-100">
             <img
                src="./images/backgrounds/Homepage Splash Image.jpg"
                className={styles.torn_banner}
                alt="pics from backend"
              />
           </div>
         </div>
     </Row>
      <Row>
        <div className="col-3">
          <div className="rip-1 w-100">
        <img
                src="./images/backgrounds/Paper Rip Texture Upwards.png"
                className={styles.tear_bottom2}
                alt="pics from backend"
              />
            </div>
            </div>
         </Row>
           </div>

        </section>
    </Container>
     <Container fluid="true">
         <section className={styles.cream1}>
         <Row className="justify-content-center">
            <h2 className={styles.home_cream_h2}>Our Pig is top dog!</h2></Row>
            <Row className="justify-content-center">
            <Link to="/OurCider" className={styles.links}>
              Check Out Our Cider Range
             </Link></Row>
         </section>
           <section className={styles.carosel_cider}>
          <CiderCarosel />
           </section>
    </Container>
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
