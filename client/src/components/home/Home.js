import React from "react";
import { Grid, Paper, Box, Button } from "@material-ui/core";
const Home = (props) => {
  return (
    // <Paper>
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
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          {" "}
          This only Page is in construction...
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={4}></Grid>
    </Grid>
    // </Paper>
  );
};

export default Home;
