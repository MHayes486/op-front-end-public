import styles from Footer.Modules.css

const currentYear = newDate().getFullYear();

const Footer = () => {
  return (
    <footer>
      <p className={styles.disclaimer}>
        This website has been created as part of an assignment in an approved
        course of study for Curtin University and contains copyright material
        not created by the author. All copyright material used remains copyright
        of the respective owners and has been used here pursuant to Section 40
        of the Copyright Act 1968 (Commonwealth of Australia). No part of this
        work may be reproduced without consent of the original copyright owners.
        See code comments for references. Website created at{" "}
        <a href="https://www.curtin.edu.au/">Curtin University Australia.</a>
      </p>
      <hr></hr>
      <p className={styles.authors}>
        Website built by Team Apricot: Adam Walker, Kym Nazim, Michael Hayes and
        Zac Roberts
        <sup>&copy</sup>
        {currentYear}
      </p>
    </footer>
  );
};

export default Footer;
