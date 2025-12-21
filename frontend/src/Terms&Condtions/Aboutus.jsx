import React from "react";
import { Typography, Container, Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MetaData from "../component/layouts/MataData/MataData";
import TermsImage from "../Image/about/tc.jpg";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  about_us: {
    paddingTop: "8rem",
    paddingBottom: "4rem",
    backgroundColor: "white !important",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  container_12: {
    padding: "2rem",
    textAlign: "center",

    backgroundColor: "white !important",
    maxWidth: "100%",
  },
  image_about: {
    width: "100%",
    height: "auto",
    marginTop: "3rem",
    marginBottom: "2rem",
  },
  title_about: {
    color: "#414141",
    fontSize: "14px",
    padding: "2rem 1rem 2rem",
    fontFamily: "Roboto",
    fontWeight: "500 !important",
  },
  heading12_about: {
    fontSize: "1rem",
    padding: "2rem 1rem 2rem",
    fontWeight: "400 !important",
    color: "#414141",
    textAlign: "center",
  },
  introText_about: {
    maxWidth: "800px",

    lineHeight: "1.5",
    margin: "1.5rem 0",
    color: "#292929",
    fontSize: "1.2rem",
    fontWeight: "400 !important",
    textAlign: "justify",
    padding: "0.8rem 1rem",
  },
  infoText_about: {
    lineHeight: "1.5",
    margin: "2rem 0",
    color: "#292929",
    fontSize: "1rem",
    fontWeight: "400 !important",
    textAlign: "justify",
    padding: "0.8rem 1rem",
  },
  buttonContainer_about: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem 0",
    width: "100%",
    marginTop: "1rem",
  },
  button1_about: {
    backgroundColor: "#000000 !important",
    color: "white !important",
    width: "fit-content !important",
    padding: "0.8rem 2rem   !important",
    marginLeft: "3.3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
  },
  button2_about: {
    backgroundColor: "#292929 !important",
    color: "white   !important",
    width: "fit-content     !important",
    padding: "0.8rem 2rem   !important",
    marginLeft: "1.3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
  },
}));

const About_UsPage = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.about_us}>
        <MetaData title={"About Us"} />
        <Container className={classes.container_12}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <img
                src={TermsImage}
                alt="FoodNex"
                className={classes.image_about}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h2"
                component="h1"
                className={classes.title_about}
              >
                About Us
              </Typography>
              <Typography variant="body1" className={classes.introText_about}>
                Solar-Powered Goodness From Our Hands to Yours. We focus on sustainable agricultural innovations, empowering farmers and industries with smart, eco-friendly solutions.
              </Typography>
              <Typography variant="body1" className={classes.introText_about}>
                At FoodNex, we're revolutionizing how food is preserved. We champion Precision Indirect Solar Drying, a superior method that locks in the vibrant color, rich flavor, and vital nutrients of fruits and vegetables, all while protecting them from external contaminants. The result: Pure, delicious, and incredibly healthy dried produce.
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.container_12}>
          <Typography
            variant="h3"
            component="h1"
            className={classes.heading12_about}
          >
            Who We Are
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            FoodNex is dedicated to revolutionizing food preservation through sustainable agricultural innovations. Our mission is to empower farmers and industries with smart, eco-friendly solutions that enhance food quality and reduce waste. With a focus on innovation, sustainability, and customer satisfaction, we have become a trusted brand in the agricultural community.
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            Since our inception, we have focused on Precision Indirect Solar Drying, a method that preserves the vibrant color, rich flavor, and vital nutrients of fruits and vegetables. We take pride in offering innovative solar drying machines that are carefully designed and tested for efficiency and sustainability. Our team of experts works closely with manufacturers to ensure that our customers receive top-notch solutions.
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            At FoodNex, we believe in fostering long-term relationships with our customers. We provide excellent service and strive to exceed expectations at every step. We are committed to delivering seamless experiences and ensuring customer satisfaction. Join us in building a more sustainable food future.
          </Typography>
        </Container>
        <Container className={classes.container_12}>
          <Typography
            variant="h3"
            component="h1"
            className={classes.heading12_about}
          >
            Our Mission
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            FoodNex is driven by the mission to provide exceptional, sun-dried quality products and innovative solar drying solutions. We aim to make sustainable food preservation accessible worldwide and support the growth of eco-friendly agriculture. Our mission is to offer a wide range of solar drying machines and dried produce that meet the highest standards of quality and performance.
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            We are committed to continuously innovating and improving our technologies to meet the evolving needs of farmers and industries. Our team of experts works closely with manufacturers and conducts rigorous quality testing to ensure that every solution we offer delivers outstanding performance and contributes to reducing food waste and fostering economic independence. We believe that every farmer deserves the best tools to enhance their productivity and achieve sustainable goals.
          </Typography>

          <div className={classes.buttonContainer_about}>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "none" }}
            >
              <Button variant="contained" className={classes.button1_about}>
                Our Products
              </Button>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "none" }}
            >
              <Button variant="contained" className={classes.button2_about}>
                Contact Us
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About_UsPage;
