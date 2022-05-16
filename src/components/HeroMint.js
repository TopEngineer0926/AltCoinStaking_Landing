import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heroPanel: {
    width: 850,
    height: 500,
    borderRadius: 15,
    background: '#0D132F',
    marginTop: 120,
    [theme.breakpoints.down("xs")]: {
      width: '100%',
      marginTop: 60,
    },
  },
  markPanel: {
    background: 'linear-gradient(95.31deg, #006EC3 0%, #0016B2 100%)',
    borderRadius: '10px 0px 0px 10px',
    [theme.breakpoints.down("xs")]: {
      borderRadius: '10px 10px 0px 0px',
      marginBottom: 20
    },
  },
  markCircle: {
    border: '1px solid white',
    borderRadius: '50%',
    width: 100,
    height: 100,
    background: '#0D132F',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  markText: {
    fontSize: 40,
    fontWeight: 700,
    fontStyle: 'normal',
    fontFamily: 'Titillium Web',
    color: 'white',
    marginTop: 20
  },
  controlItem: {
    width: 354,
    height: 60,
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      background: 'linear-gradient(95.31deg, #006EC3 0%, #0016B2 100%)',
      border: 'unset'
    },
    [theme.breakpoints.down("xs")]: {
      width: 260
    },
  },
  controlText: {
    color: 'white',
    fontFamily: 'Titillium Web',
    fontSize: 18,
    fontWeight: 700,
    fontStyle: 'normal',
    marginLeft: 15
  },
  heroText: {
    fontFamily: 'Titillium Web',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 600,
    color: 'white',
    '&:hover': {
      textDecoration: 'unset'
    }
  }
}));

const HeroMint = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container direction="column">
      <Grid item style={{width: '100%'}}>
        <Grid container justify="space-between">
          <Grid item>
            <img
              alt="company logo"
              src="/mint_header_logo.png"
              style={{ width: "90vw", maxWidth: "210px" }}
            />
          </Grid>
          <Grid item style={{alignSelf: 'center'}}>
            <Link href="#mint-area" className={classes.heroText}>
              Mint
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
        <div className={classes.heroPanel}>
          <Grid container direction={matchesSM ? 'column' : 'row'} style={{height: '100%'}}>
            <Grid item sm={12} md={5} className={classes.markPanel}>
              <Grid container direction="column" alignItems="center" justify="center" style={{height: '100%'}}>
                <Grid item className={classes.markCircle}>
                  <img src="/mark.png" width={61} height={50}></img>
                </Grid>
                <Grid item className={classes.markText}>
                  Zen Zebra
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={12} md={7} className={classes.controlPanel}>
              <Grid container direction="column" alignItems="center" justify="center" style={{height: '100%'}}>
                <Grid item className={classes.controlItem}>
                  <Grid container justify="center">
                    <Grid item>
                      <img src="/opensea.png"></img>
                    </Grid>
                    <Grid item>
                      <span className={classes.controlText}>VIEW ON OPENSEA</span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item className={classes.controlItem} style={{marginTop: 30, marginBottom: 60}}>
                  <Grid container justify="center">
                    <Grid item>
                      <img src="/looksrare.png"></img>
                    </Grid>
                    <Grid item>
                      <span className={classes.controlText}>VIEW ON LOOKSRARE</span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item className={classes.controlItem}>
                  <Grid container justify="center">
                    <Grid item>
                    </Grid>
                    <Grid item>
                      <span className={classes.controlText}>Mint Your Zebra</span>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default HeroMint;
