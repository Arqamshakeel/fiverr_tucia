import React from "react";
import { Grid } from "@material-ui/core";
import GoogleMaps from "../../../maps/GoogleMaps";
import ActivityRight from "./activityRight/ActivityRight";
import ActivityLeft from "./ActivityLeft";
const Dispatcher = () => {
  return (
    <Grid container>
      <Grid item xs={3} style={{ border: "1px solid black" }}>
        <ActivityLeft />
      </Grid>
      <Grid item xs={6} style={{ border: "1px solid black" }}>
        <GoogleMaps />
      </Grid>
      <Grid item xs={3} style={{ border: "1px solid black" }}>
        <ActivityRight />
      </Grid>
    </Grid>
  );
};

export default Dispatcher;
