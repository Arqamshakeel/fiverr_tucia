import React from "react";
import {
  Grid,
  Box,
  TextField,
  Typography,
  Paper,
  Button,
  Divider,
} from "@material-ui/core";
import CustomerInformator from "./CustomerInformator";
const Customers = () => {
  return (
    <Grid container>
      <Grid item xs={7}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ margin: "20px" }}
        >
          <TextField fullWidth label="Search Customers..." variant="filled" />
        </Box>

        <Grid container>
          {" "}
          <Grid item xs={6}>
            <Paper>
              <Typography>Jobs</Typography>
            </Paper>
            <Divider style={{ marginTop: "10px" }}></Divider>
            <CustomerInformator />
            <Divider style={{ marginTop: "20px" }}></Divider>
            <CustomerInformator />
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <Typography>Accounts</Typography>
            </Paper>
            <Typography>Not found</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={5}>
        <Grid container>
          <Grid item>
            {" "}
            <Paper>
              <Button fullWidth variant="contained" color="primary">
                Create
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Customers;
