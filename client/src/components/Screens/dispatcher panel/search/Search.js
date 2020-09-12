import React from "react";
import {
  Grid,
  TextField,
  Box,
  Paper,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import RightSideTabs from "./RightSide/RightSideTabs";

const useStyles = makeStyles((theme) => ({
  selectSpacing: {
    margin: "5px",
  },
  multilineColor: {
    color: "red",
  },
}));
const DarkerDisabledTextField = withStyles({
  root: {
    marginRight: 8,
    "& .MuiInputBase-root.Mui-disabled": {
      color: "rgba(0, 0, 0, 0.6)", // (default alpha is 0.38)
    },
  },
})(TextField);
const Search = () => {
  return (
    <Paper>
      <Grid container>
        <Grid item xs={6} style={{ border: "1px solid black" }}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ marginTop: "5px" }}
          >
            <DarkerDisabledTextField
              disabled
              label="#"
              value={`112256203`}
              variant="filled"
            />
            <DarkerDisabledTextField
              disabled
              label="car"
              value={`SUV`}
              variant="filled"
            />
            <DarkerDisabledTextField
              disabled
              label="Driver"
              value={`Arqam Shakeel`}
              variant="filled"
            />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ marginTop: "5px" }}
          >
            <DarkerDisabledTextField
              disabled
              label="Passenger"
              value={`Haseeb`}
              variant="filled"
            />
            <DarkerDisabledTextField
              disabled
              label="Phone"
              value={`03227402525`}
              variant="filled"
            />
            <DarkerDisabledTextField
              disabled
              label="Account"
              value={`-`}
              variant="filled"
            />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ marginTop: "5px" }}
          >
            <DarkerDisabledTextField
              disabled
              label="Filed"
              value={`02/09/2020 05:06`}
              variant="filled"
            />
            <DarkerDisabledTextField
              disabled
              label="When"
              value={`ASAP`}
              variant="filled"
            />
            <DarkerDisabledTextField
              disabled
              label="Estimated pickup"
              value={`2/9 05:23`}
              variant="filled"
            />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ marginTop: "5px" }}
          >
            <DarkerDisabledTextField
              disabled
              label="assigned"
              value={`2/9 05:06`}
              variant="filled"
            />
            <DarkerDisabledTextField
              disabled
              label="Started"
              value={`10:10am`}
              variant="filled"
            />
            <DarkerDisabledTextField
              disabled
              label="Arrived"
              value={`11:10am`}
              variant="filled"
            />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ marginTop: "5px" }}
          >
            <DarkerDisabledTextField
              disabled
              label="Picked up"
              value={`10:05am`}
              variant="filled"
            />
            <DarkerDisabledTextField
              disabled
              label="Dropped off"
              value={`11:15am`}
              variant="filled"
            />
            <DarkerDisabledTextField
              disabled
              label="closed"
              value={`2/9 18:06`}
              variant="filled"
            />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ marginTop: "5px" }}
          >
            <DarkerDisabledTextField
              disabled
              label="From"
              value={`Thokar Niaz baig, Lahore`}
              variant="filled"
            />
            <DarkerDisabledTextField
              disabled
              label="To"
              value={`Model Town, Lahore`}
              variant="filled"
            />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ marginTop: "5px" }}
          >
            <DarkerDisabledTextField
              disabled
              label="Distance"
              value={`34 km`}
              variant="filled"
            />
            <DarkerDisabledTextField
              disabled
              label="Time"
              value={`1 hour`}
              variant="filled"
            />
          </Box>
        </Grid>

        <Grid item xs={6} style={{ border: "1px solid black" }}>
          <RightSideTabs />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Search;
