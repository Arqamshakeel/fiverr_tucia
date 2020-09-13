import React from "react";
import { Grid, Paper, Box, Button } from "@material-ui/core";
import GoogleDrive from "../googleDrive/GoogleDrive";
const Home = (props) => {
  return (
    <Grid container>
      <Grid item xs={12} md={6} lg={4}></Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              props.history.push("/order");
            }}
          >
            Get started
          </Button>

          <GoogleDrive />
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          {" "}
          This only Page is in construction...
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={4}></Grid>
    </Grid>
  );
};

export default Home;
