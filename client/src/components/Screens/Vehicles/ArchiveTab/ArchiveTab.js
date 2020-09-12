import React from "react";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";
import ArchiveTabTable from "./ArchiveTabTable";

const ArchiveTab = (props) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        ARCHIVED VEHICLES
      </Grid>

      <Grid item xs={12}>
        These are the vehicles that have been archived, as a vehicle can never
        be completely deleted. To bring a vehicle back into use, mark the
        vehicle below and press the restore button.
      </Grid>

      <ArchiveTabTable />
    </Grid>
  );
};

export default withRouter(ArchiveTab);
