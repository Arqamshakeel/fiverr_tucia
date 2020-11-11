import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import MediaCard from "./MediaCard";
const useStyles = makeStyles({
  root: {
    color: "#FFFFFF",
  },
});
const FAQ = (props) => {
  const classes = useStyles();

  return (
    <div>
      <div style={{ height: "200px", background: "#ff6666" }}>
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={11} style={{ marginTop: "30px" }}>
            <Typography
              className={classes.root}
              component="h1"
              variant="h2"
              //   align="center"
            >
              FAQ
            </Typography>
            <Typography
              component="h1"
              variant="h6"
              //   align="center"
              color="textPrimary"
              className={classes.root}
            >
              Advice and answers from the Trakouts Team
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                props.history.push("/faqadminpanel");
              }}
            >
              Admin Panel
            </Button>
          </Grid>
        </Grid>
      </div>
      <div style={{ margin: "20px 100px 100px 100px" }}>
        <MediaCard />
        <MediaCard />
      </div>
    </div>
  );
};

export default FAQ;
