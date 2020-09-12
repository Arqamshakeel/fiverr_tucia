import React from "react";
import {
  Box,
  Paper,
  Grid,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  makeStyles,
  Button,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const DetailsTab = () => {
  const classes = useStyles();
  return (
    <Paper>
      <Grid container>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <TextField label="Passenger" variant="outlined" />
            <TextField label="Phone" variant="outlined" />
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <TextField label="From" variant="outlined" />
            <TextField label="To" variant="outlined" />
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <TextField label="Account" variant="outlined" />
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Vehicle
              </InputLabel>
              <Select
                value={10}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="Type"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Suv</MenuItem>
                <MenuItem value={20}>Sedan</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Status
              </InputLabel>
              <Select
                value={10}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="Status"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Closed</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                when
              </InputLabel>
              <Select
                value={10}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="Status"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Forever</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Button variant="contained" color="primary">
              Search?
            </Button>
          </Box>
        </Grid>
      </Grid>{" "}
    </Paper>
  );
};

export default DetailsTab;
