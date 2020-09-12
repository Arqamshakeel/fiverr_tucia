import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button, makeStyles } from "@material-ui/core";

import UserTabTable from "./UserTabTable";
import { withRouter } from "react-router-dom";
const buttonStyle = makeStyles((theme) => ({
  button: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const UserTab = (props) => {
  const buttonStyles = buttonStyle();

  return (
    <Grid container spacing={1}>
      <Grid item xs={10}>
        CREATE AND MODIFY YOUR USERS
      </Grid>

      <Grid item xs={2}>
        <Button variant="contained" color="primary">
          Save
        </Button>
      </Grid>
      <Grid item xs={12}>
        While a user can have multiple roles, they can only be logged in with
        one session at the time.
      </Grid>
      <Grid item xs={12} className={buttonStyles.button}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            console.log(props);
            props.history.push("/dispatch/users/add");
          }}
        >
          Add
        </Button>
        <Button variant="contained" disabled>
          Copy
        </Button>
        <Button variant="contained" disabled>
          Delete
        </Button>
        <Button variant="contained" disabled>
          Reset
        </Button>
      </Grid>
      <UserTabTable />
    </Grid>
  );
};

export default withRouter(UserTab);
