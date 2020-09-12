import React from "react";
import {
  Grid,
  Paper,
  TextField,
  Typography,
  makeStyles,
  Box,
  Checkbox,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  TextField: {
    textAlign: "center",
  },
}));
const General = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={5} justify="center">
      <Grid item xs={12} md={6} lg={6} style={{ border: "1px solid black" }}>
        <Paper style={{ padding: "70px" }} justify="center">
          <Box display="flex" justifyContent="center" alignItems="center">
            <TextField
              className={classes.root}
              size="small"
              id="outlined-basic"
              label="Company ID"
              variant="outlined"
            />
            <Checkbox></Checkbox>
            <Typography>Active?</Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6} style={{ border: "1px solid black" }}>
        <Paper style={{ padding: "70px" }} justify="center">
          <Typography>TIME AND UNITS</Typography>
          {/* <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="ddd MMM Do"
              margin="normal"
              id="date-picker-inline"
              //   value={date}
              //   onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider> */}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default General;
