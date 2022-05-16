import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "../Link";
import FaqItem from "./FaqItem";

const useStyles = makeStyles((theme) => ({
  itemFAQTitle: {
    width: "100%",
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "54px",
    color: "white",
    marginBottom: 50,
    textAlign: 'center'
  },
  itemBlock: {
    width: "100%",
    minHeight: 88,
    background: "rgba(37, 64, 123,0.2)",
    borderRadius: 10,
    marginBottom: 30,
    transition: 'height 2s',
    display: "flex",
    alignItems: "center",
  },
}));

const FAQ = (props) => {

  const classes = useStyles();
  const [dropDown, setDropDown] = useState([]);

  useEffect(() => {
    let tempDropDown = [false, false, false, false, false, false];
    setDropDown(tempDropDown);
  }, []);

  const handleDropDown = (i) => {
    let tempDropDown = [...dropDown];
    tempDropDown = tempDropDown.map((temp, j) => {
      if (j == i) return !temp;
      return false;
    });

    setDropDown(tempDropDown);
  }

  return (
    <Grid container direction="column" alignItems="flex-start">
      <Grid item className={classes.itemFAQTitle}>
        Frequently Aasked Questions
      </Grid>
      <Grid item className={classes.itemBlock}>
        <FaqItem 
          title="Built in compound reward systems"
          content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          dropDownStatus={dropDown[0]}
          callbackDropDown={handleDropDown}
          index={0}
        />
      </Grid>
      <Grid item className={classes.itemBlock}>
        <FaqItem 
          title="Built in compound reward systems"
          content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          dropDownStatus={dropDown[1]}
          callbackDropDown={handleDropDown}
          index={1}
        />
      </Grid>
      <Grid item className={classes.itemBlock}>
        <FaqItem 
          title="Built in compound reward systems"
          content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          dropDownStatus={dropDown[2]}
          callbackDropDown={handleDropDown}
          index={2}
        />
      </Grid>
      <Grid item className={classes.itemBlock}>
        <FaqItem 
          title="Built in compound reward systems"
          content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          dropDownStatus={dropDown[3]}
          callbackDropDown={handleDropDown}
          index={3}
        />
      </Grid>
      <Grid item className={classes.itemBlock}>
        <FaqItem 
          title="Built in compound reward systems"
          content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          dropDownStatus={dropDown[4]}
          callbackDropDown={handleDropDown}
          index={4}
        />
      </Grid>
      <Grid item className={classes.itemBlock}>
        <FaqItem 
          title="Built in compound reward systems"
          content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          dropDownStatus={dropDown[5]}
          callbackDropDown={handleDropDown}
          index={5}
        />
      </Grid>
    </Grid>
  );
};

export default FAQ;
