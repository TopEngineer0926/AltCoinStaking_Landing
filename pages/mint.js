import React from "react";
import Head from "next/head";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import animationData from "../src/animations/landinganimation/data";
import Logos from "../src/components/Logos";
import CustomerSays from "../src/components/CustomerSays";
import Footer from "../src/ui/Footer";
import LowestRiskWay from "../src/components/LowestRiskWay";
import CreateBeautifulThings from "../src/components/CreateBeautifulThings";
import FAQ from "../src/components/FAQ";
import HeroMint from "../src/components/HeroMint";
import MintArea from "../src/components/MintArea";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundImage: "url(/background.png)",
    backgroundColor: "#07071c",
    backgroundSize: "cover",
    paddingLeft: 100,
    paddingRight: 100,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 50,
      paddingRight: 50,
      backgroundSize: "contain",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 30,
      paddingRight: 30,
      backgroundSize: "contain",
    },

    // paddingLeft: "13rem",
    // paddingRight: "13rem",
    // paddingTop: "5rem",
    // paddingBottom: "5rem",
  },
  mainMargin: {
    marginTop: 50,
    marginBottom: 50,
    width: "100%",
  },
}));

export default function MintPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  //   Copied this from github docs
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Head>
        <title key="title">
          ZenZebra
        </title>
        <meta
          name="description"
          key="description"
          content="Top notch custom software design and development with a free estimate. Optimize your business and scale your project anytime"
        />
        <meta
          property="og:title"
          content="Bringin West Coast Technology to the Midwest | Demo Arc Development"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="/" />
        <link rel="canonical" key="canonical" href="/" />
      </Head>
      <Grid item className={classes.mainMargin}>
        {/*-----Hero Block-----*/}
        <HeroMint />
      </Grid>
      <Grid item className={classes.mainMargin}>
        {/** ---------Banner Block---------- */}
        <Logos />
      </Grid>
      <Grid item className={classes.mainMargin}>
        <LowestRiskWay />
      </Grid>
      <Grid item className={classes.mainMargin}>
        <CreateBeautifulThings />
      </Grid>
      <Grid item className={classes.mainMargin}>
        <CustomerSays />
      </Grid>
      <Grid item className={classes.mainMargin}>
        <FAQ />
      </Grid>
      <Grid item className={classes.mainMargin}>
        <MintArea />
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
}
