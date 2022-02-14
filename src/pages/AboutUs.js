import { Fragment } from "react";
import {Container, Button, Row, Column, Col} from "react-bootstrap";
import styles from "./styles/AboutUs.module.css";



const AboutUs = () => {
  return (
    <div className={styles.about_page}>
    <Container  xs={12} md={8} className={styles.about_cont}>

    <Fragment>

      <section className={styles.cider_element}>

        <div className={styles.cream}></div>
        <Col>
        <h1 className={styles.about_us_h1}>Mischief in the Mainstream</h1>
        <p className={styles.about_sub_heading}>
          We like to poke fun at the world and ourselves...And Each Other{" "}
        </p>
        </Col>

          {/* <button className={styles.about_btn} onClick>
            Learn More
          </button> */}
      </section>


      <section className={styles.About_us_2}>
        <Row>

        </Row>
        <Row>
        <Col>
          <div className={styles.about_img}>
          <img
            src="\images\backgrounds\About Page Splash Image 1.jpg"
            className={styles.about_splash1}
            alt="pics from backend"
          />
          </div></Col>
          <Col>
          <div className={styles.about_tear1}>
          <img
            className={styles.about_tear1}
            src="\images\backgrounds\Paper Rip Texture Downwards.png"
            alt="pics from backend"
          />
          </div></Col>
        </Row>
      </section>



      <section className={styles.About_us_3}>
        <Col> <div className={styles.about_tear2}> <img
            src="\images\backgrounds\Paper Rip Texture Upwards (Black).png"
            className={styles.about_tear2}
            alt="pics from backend"
          /></div>

          </Col>
      </section>
      <Col>
      <div className={styles.about_tear3}> <img
            src="\images\backgrounds\Paper Rip Texture Downwards (Black).png"
            className={styles.about_tear3}
            alt="pics from backend"
          /></div>
        </Col>
      <section className={styles.About_us_4}>
        <Col>
        <div className={styles.about_img3}>
          <Row><img
            src="\images\backgrounds\About Page Image 1.jpg"
            className={styles.about1}
            alt="pics from backend"
          />
          </Row>

          <Row>
          <img
            src="\images\backgrounds\About Page Image 2.jpg"
            className={styles.about2}
            alt="pics from backend"
          />
          </Row>
        </div>
        </Col>


        <Col>
        <Row>
        <h2 className={styles.about_heading2}>A PIGS TAIL</h2></Row>
        <Row><div className={styles.pigstail_text}>
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
          </p>  </div>
          </Row>
          </Col>
      </section>



        <Row>
        <section className={styles.About_us_5}>

          <div className={styles.about_tear4} >
          {/* <Col>     <img
            src="\images\backgrounds\Paper Rip Texture Downwards (Black).png"
            className={styles.tear4}
            alt="pics from backend"
          /></Col> */}
          <div className={styles.about_img5}>
            <Col><img
              src="\images\backgrounds\About Page Splash Image 2.jpg"
              className={styles.about5}
              alt="pics from backend"
            /></Col>
          </div>
          <Col><img
            src="\images\backgrounds\Paper Rip Texture Upwards.png"
            className={styles.about_tear5}
            alt="pics from backend"
          /></Col>
          </div>
      </section>
        </Row>


      <section className={styles.About_us_6}>
        {/* <div className={styles.cream}> */}
          <h2 className={styles.about_bottomh2}>BARNSTORMINGLY TASTY</h2>
          <p className={styles.about_p6_1}>
            WHO KNEW WEST COUNTRY APPLES MAKE THE BEST TASTING CIDER?
          </p>
          <p className={styles.about_p6_2}>
            FOLLOWING THIS HAPPY DISCOVERY...ORCHARD PIGS ARRIVED
          </p>
        {/* </div> */}

        <div className={styles.icons_text}>
          <div className={styles.bottom_p_3}>
            <img
              src="\images\icons\About Page Icon 1.png"
              className={styles.icon1}
              alt="pics from backend"
            />
            <h3 className={styles.about_s1}>REFRESHINGLY DIFFERENT</h3>
            <div className={styles.block1}>
              Bursting with West Country bittersweet cider apples, expertly
              crafted to our own special blend
            </div>
          </div>

          <div className={styles.bottom_p_1}>
            <img
              src="\images\icons\About Page Icon 2.png"
              className={styles.icon2}
              alt="pics from backend"
            />
            <h3 className={styles.about_s2}>VEGAN FRIENDLY</h3>
            <div className={styles.block2}>
              Suitable for vegans, vegetarians, fruitarians and even
              flexitarians...
            </div>
          </div>

          <div className={styles.bottom_p_2}>
            <img
              src="\images\icons\About Page Icon 3.png"
              className={styles.icon3}
              alt="pics from backend"
            />
            <h3 className={styles.about_s3}>LESS BUBBLES, MORE APPLES</h3>
            <div className={styles.block3}>
              Gently sparkling, perfect for pairing with food...
            </div>
          </div></div>
</section>
    </Fragment>
    </Container>
    </div>
  );
};

export default AboutUs;
