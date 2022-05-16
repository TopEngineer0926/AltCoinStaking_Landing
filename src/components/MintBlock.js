import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  blockContainer: {
    width: 250,
    height: 500,
    borderRadius: 15,
    background: '#0D132F',
    "&:hover": {
      background: "linear-gradient(95.31deg, #006EC3 0%, #0016B2 100%)",
    },
  },
  blockTitle: {
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 40,
    color: "white",
  },
  itemTitle: {},
  blockContent: {
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    color: "#C8D2EA",
    maxWidth: 200
  },
  itemContent: {
    marginBottom: 30,
    justifyContent: 'center',
    display: 'flex'
  },
  itemImage: {
    position: 'absolute',
    zIndex: 10,
    marginTop: 25
  },
  itemBody: {
    marginTop: 145,
    height: "100%",
  },
  mintPrice: {
    fontSize: 24,
    fontFamily: 'Titillium Web',
    fontStyle: 'normal',
    fontWeight: 700,
    color: 'white'
  },
  mintNowButton: {
    borderRadius: 10,
    width: 150,
    height: 50,
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 18,
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    '&:hover': {
      background: 'linear-gradient(95.31deg, #006EC3 0%, #0016B2 100%)',
      border: 'unset'
    }
  },
}));

const MintBlock = (props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.blockContainer}
      direction="column"
      alignItems="center"
    >
      <Grid item className={classes.itemImage}>
        <img src={props.path} />
      </Grid>
      <Grid item className={classes.itemBody}>
        <Grid
          container
          direction="column"
          style={{ height: "100%" }}
        >
          <Grid item className={classes.itemContent}>
            <Typography
              variant="h4"
              align="center"
              className={classes.blockTitle}
            >
              {props.title}
            </Typography>
          </Grid>
          <Grid item className={classes.itemContent}>
            <Typography
              variant="h5"
              align="center"
              className={classes.blockContent}
            >
              {props.content}
            </Typography>
          </Grid>
          <Grid item className={classes.itemContent}>
            <Typography
              variant="h5"
              align="center"
              className={classes.mintPrice}
            >
              $ {props.price}
            </Typography>
          </Grid>
          <Grid item className={classes.itemContent}>
            <Button
              variant="outlined"
              className={classes.mintNowButton}
            >
              MINT NOW
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

MintBlock.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default MintBlock;
