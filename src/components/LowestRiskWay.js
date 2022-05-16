import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  heroTextContainer: {
    minWidth: "21.5em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  hero_title: {
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "64px",
    color: "white",
    marginBottom: 30,
  },
  hero_apy: {
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "24px",
    color: "white",
    marginBottom: 30,
  },
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    // [theme.breakpoints.down("sm")]: {
    //   maxWidth: "30em",
    // },
  },
}));

const LowestRiskWay = (props) => {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center" direction="row" spacing={3}>
      <Grid sm={12} md={12} lg={6} item className={classes.heroTextContainer}>
        <Typography variant="h1" align="left" className={classes.hero_title}>
          The Lowest Risk Way To Earn Crypto
        </Typography>
        <Grid item>
          <Typography variant="h1" align="left" className={classes.hero_apy}>
            A non-fungible token is a unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable. 
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h1" align="left" className={classes.hero_apy}>
            NFTs can be used to represent items such as photos, videos, audio, and other types of digital files. An NFT is a unit of data stored on a digital ledger, called a blockchain, which can be sold and traded.
          </Typography>
        </Grid>
      </Grid>
      <Grid sm={12} md={12} lg={6} item className={classes.animation}>
        <img src="/day_bird.png" width={"100%"} />
      </Grid>
    </Grid>
  );
};

export default LowestRiskWay;
