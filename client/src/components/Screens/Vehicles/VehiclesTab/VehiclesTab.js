import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button, makeStyles } from "@material-ui/core";

import VehiclesTabTable from "./VehiclesTabTable";
import { withRouter } from "react-router-dom";
const buttonStyle = makeStyles((theme) => ({
  button: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const VehiclesTab = (props) => {
  const buttonStyles = buttonStyle();

  return (
    <Grid container spacing={1}>
      <Grid item xs={10}>
        CREATE AND MODIFY YOUR VEHICLES
      </Grid>

      <Grid item xs={2}>
        <Button variant="contained" color="primary">
          Save
        </Button>
      </Grid>
      <Grid item xs={12}>
        Here you can create and modify your vehicles. These vehicles are virtual
        representations of the vehicles you have physically.
      </Grid>
      <Grid item xs={12} className={buttonStyles.button}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            console.log(props);
            props.history.push("/dispatch/vehicles/add");
          }}
        >
          Add
        </Button>
        <Button variant="contained" disabled>
          Copy
        </Button>
        <Button variant="contained" disabled>
          Archive
        </Button>
        <Button variant="contained" disabled>
          Reset
        </Button>
      </Grid>
      <VehiclesTabTable />
    </Grid>
  );
};

export default withRouter(VehiclesTab);
