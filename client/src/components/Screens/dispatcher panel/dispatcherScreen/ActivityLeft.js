import React from "react";
import {
  Paper,
  Typography,
  Grid,
  Box,
  TextField,
  FormControlLabel,
  Radio,
  Button,
  Select,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import AccessibleIcon from "@material-ui/icons/Accessible";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
const useStyles = makeStyles((theme) => ({
  selectSpacing: {
    margin: "5px",
  },
}));
const ActivityLeft = () => {
  const classes = useStyles();
  return (
    <>
      <Paper>
        <Typography variant="h6" style={{ marginLeft: "5px" }}>
          Location
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <TextField
                size="small"
                label="Enter a pick up address..."
                variant="filled"
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <TextField
                size="small"
                label="Enter a drop off address..."
                variant="filled"
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography variant="h6">When</Typography>
              <FormControlLabel
                value="start"
                control={<Radio color="primary" />}
                label="Now"
                labelPlacement="start"
              />
              <FormControlLabel
                value="start"
                control={<Radio color="primary" />}
                label="Later"
                labelPlacement="start"
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Paper>
        <Typography variant="h6" style={{ marginLeft: "5px" }}>
          Passengers
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <TextField size="small" label="Name" variant="filled" />
              <TextField
                style={{ marginLeft: "5px" }}
                size="small"
                label="Phone no"
                variant="filled"
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <TextField size="small" label="Account ID" variant="filled" />
              <TextField
                style={{ marginLeft: "5px" }}
                size="small"
                label="Email"
                variant="filled"
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}></Grid>
          </Grid>
        </Grid>
      </Paper>

      {/* job info */}
      <Paper>
        <Typography variant="h6" style={{ marginLeft: "5px" }}>
          Job info
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Select
                className={classes.selectSpacing}
                value={1}
                IconComponent={() => <AccountCircle />}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
              <Select
                value={1}
                className={classes.selectSpacing}
                IconComponent={() => <LocalMallIcon />}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
              <Select
                value={1}
                className={classes.selectSpacing}
                IconComponent={() => <AccessibleIcon />}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
              <Select
                value={1}
                className={classes.selectSpacing}
                IconComponent={() => <DriveEtaIcon />}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography>Vehicle Type: </Typography>
              <Select
                value={1}
                className={classes.selectSpacing}
                IconComponent={() => <DriveEtaIcon />}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value={1}>SUV</MenuItem>
                <MenuItem value={2}>Sedan</MenuItem>
              </Select>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography>Vehicle Class: </Typography>
              <Select
                value={1}
                className={classes.selectSpacing}
                IconComponent={() => <DriveEtaIcon />}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value={1}>SUV</MenuItem>
                <MenuItem value={2}>Sedan</MenuItem>
              </Select>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center" alignItems="center">
                {" "}
                <Button variant="contained" color="primary">
                  Book?
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ marginLeft: "5px" }}
                >
                  Clear
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ActivityLeft;
