import React from "react";
import Grid from "@material-ui/core/Grid";
import MintBlock from "./MintBlock";

const MintArea = (props) => {

  return (
    <Grid container alignItems="center" justify="center" spacing={2} id="mint-area">
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={2}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <MintBlock
          path="/mint/starter.png"
          title="Starter"
          price="19.2"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={2}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <MintBlock
          path="/mint/bronze.png"
          title="Bronz"
          price="19.2"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={2}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <MintBlock
          path="/mint/silver.png"
          title="Silver"
          price="19.2"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={2}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <MintBlock
          path="/mint/gold.png"
          title="Gold"
          price="19.2"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={2}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <MintBlock
          path="/mint/platinum.png"
          title="Platinum"
          price="19.2"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
        />
      </Grid>
    </Grid>
  );
};

export default MintArea;
