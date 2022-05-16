import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  itemContent: {
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    color: "white",
  },
  item_text: {
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 22,
    color: "white",
  },
  itemTitle: {
    width: "100%",
  },
  buttonStyle: {
    color: 'white',
  }
}));

const FaqItem = ({title, content, index, dropDownStatus, callbackDropDown}) => {

  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  
  const handleClickDropDown = () => {
    callbackDropDown(index);
  }

  return (
    <Grid container direction="column" alignItems="flex-start" style={{margin: 30}}>
      <Grid item className={classes.itemTitle}>
        <Grid container justify="space-between" alignItems="center" fullWidth direction={matchesXS ? 'column' : 'row'}>
          <Grid item>
            <Typography variant="h5" align="left" className={classes.item_text}>
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={handleClickDropDown} className={classes.buttonStyle}>
              {
                dropDownStatus ? <ExpandLessIcon /> : <ExpandMoreIcon />
              }
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {
          dropDownStatus ?
            <Typography variant="h5" align="left"  className={classes.itemContent}>
              {content}
            </Typography>
          :
            <></>
        }
      </Grid>
    </Grid>
  );
};

export default FaqItem;
