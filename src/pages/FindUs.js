import AllEvents from "../components/FindUs/AllEvents";
import styles from "./styles/static.module.css";
import classes from "./styles/Home.module.css";

const FindUs = () => {
  return (
    <div className={classes.border}>
      <div className={classes.internal}>
        <div className={styles.cream}>
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
  );
};

export default FindUs;
