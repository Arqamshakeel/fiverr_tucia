import React from "react";
import {
  Grid,
  Paper,
  Typography,
  // makeStyles,
  Box,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  // InputLabel,
} from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
//   TextField: {
//     textAlign: "center",
//   },
// }));
const AssignmentTab = () => {
  // const classes = useStyles();

  return (
    <Grid container spacing={5} justify="center">
      <Grid item xs={12} md={6} lg={6}>
        <Paper style={{ padding: "70px" }} justify="center">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Grid container>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      //   checked={state.checkedA}
                      //   onChange={handleChange}
                      name="checkedA"
                    />
                  }
                  label="AUTO DISPATCH
                  "
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      //   checked={state.checkedA}
                      //   onChange={handleChange}
                      name="checkedA"
                    />
                  }
                  label="Automatically start jobs when they have been assigned"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      //   checked={state.checkedA}
                      //   onChange={handleChange}
                      name="checkedA"
                    />
                  }
                  label="Offer jobs to drivers when busy
                  "
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      //   checked={state.checkedA}
                      //   onChange={handleChange}
                      name="checkedA"
                    />
                  }
                  label="Offer jobs to drivers when away
                  "
                />
              </Grid>
              <Grid item xs={12}>
                <Typography style={{ float: "left" }}>
                  Auto dispatch tries
                </Typography>
                <Select
                  style={{ float: "right", width: "150px" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={1}
                  //   onChange={handleChange}
                >
                  {[...Array(20).keys()].map((data, index) => (
                    <MenuItem value={data} key={index}>
                      {data}
                    </MenuItem>
                  ))}
                  {/* <MenuItem value={10}>1</MenuItem>
                  <MenuItem value={20}>2</MenuItem>
                  <MenuItem value={30}>5</MenuItem>
                  <MenuItem value={30}>5</MenuItem>
                  <MenuItem value={30}>5</MenuItem>
                  <MenuItem value={30}>5</MenuItem> */}
                </Select>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Paper style={{ padding: "70px" }} justify="center">
          <Typography>TIME AND UNITS</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AssignmentTab;
