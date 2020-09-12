/* eslint-disable no-use-before-define */
import React from "react";
import { Checkbox, Grid, TextField, Button, MenuItem } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import AccessibleIcon from "@material-ui/icons/Accessible";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import Autocomplete from "@material-ui/lab/Autocomplete";

const typeDropDown = ["Sedan", "Station wagon", "Compact", "Black Cab", "SUV"];
const tagsDropDown = ["Non smoker", "Tag2", "Tag3"];
const brandedDropDown = ["None", "Branded1", "Branded2"];
const groupsDropDown = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const companiesDropDown = ["Company", "Company2"];
const reserverdForDropDown = ["Dispatch Test", "Driver Test"];

const AddUser = () => {
  const [passengers, setPassengers] = React.useState(0);
  const [luggage, setLuggage] = React.useState(0);
  const [wheelchair, setWheelchair] = React.useState(0);
  const [vehicletype, setVehicletype] = React.useState(typeDropDown[0]);
  const [number, setNumber] = React.useState(0);
  const [enabled, setEnabled] = React.useState(true);
  const [callsign, setCallsign] = React.useState("");
  const [make, setMake] = React.useState("");
  const [licenseplate, setLicenseplate] = React.useState("");
  const [phonenumber, setPhonenumber] = React.useState("");
  const [brandedas, setBrandedas] = React.useState(brandedDropDown[0]);
  const [group, setGroup] = React.useState(0);
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <h1>Add New Vehicle</h1>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <TextField
            label="CALLSIGN"
            fullWidth
            value={callsign}
            onChange={(e) => {
              setCallsign(e.target.value);
            }}
          />
          <TextField
            label="NUMBER"
            fullWidth
            type="number"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
          <TextField
            label={
              <>
                <span>NO OF PASSENGERS</span>
                <PersonIcon />
              </>
            }
            fullWidth
            type="number"
            value={passengers}
            InputProps={{ inputProps: { min: 0, max: 100 } }}
            onChange={(e) => {
              setPassengers(e.target.value);
            }}
          />
          <TextField
            label={
              <>
                <span>SIZE OF LUGGAGE</span>
                <BusinessCenterIcon />
              </>
            }
            fullWidth
            type="number"
            value={luggage}
            InputProps={{ inputProps: { min: 0, max: 100 } }}
            onChange={(e) => {
              setLuggage(e.target.value);
            }}
          />
          <TextField
            label={
              <>
                <span>NO OF WHEEL CHAIRS</span>
                <AccessibleIcon />
              </>
            }
            fullWidth
            type="number"
            value={wheelchair}
            InputProps={{ inputProps: { min: 0, max: 100 } }}
            onChange={(e) => {
              setWheelchair(e.target.value);
            }}
          />
          <TextField
            select
            fullWidth
            label="TYPE"
            value={vehicletype}
            onChange={(e) => {
              setVehicletype(e.target.value);
            }}
          >
            {typeDropDown.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="MAKE"
            fullWidth
            value={make}
            onChange={(e) => {
              setMake(e.target.value);
            }}
          />
          <TextField
            label="LICENCE PLATE"
            fullWidth
            value={licenseplate}
            onChange={(e) => {
              setLicenseplate(e.target.value);
            }}
          />
          Enabled
          <Checkbox
            checked={enabled}
            onChange={(e) => {
              setEnabled(e.target.checked);
            }}
            name="enabled"
            color="primary"
          />
        </Grid>
        <Grid item xs={3}>
          a1
        </Grid>
        <Grid item xs={3}>
          df
        </Grid>

        <Grid item xs={6}>
          <h2>General</h2>
          <TextField
            fullWidth
            label="Phone Number"
            value={phonenumber}
            onChange={(e) => {
              setPhonenumber(e.target.value);
            }}
          />

          <TextField
            select
            fullWidth
            label="Branded As"
            value={brandedas}
            onChange={(e) => {
              setBrandedas(e.target.value);
            }}
          >
            {brandedDropDown.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <Autocomplete
            multiple
            id="tags-standard"
            options={tagsDropDown}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Tags"
                placeholder="Select Tags"
              />
            )}
          />

          <TextField
            select
            fullWidth
            label="Belongs To Group"
            value={group}
            onChange={(e) => {
              setGroup(e.target.value);
            }}
          >
            {groupsDropDown.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <Autocomplete
            multiple
            id="tags-standard"
            options={companiesDropDown}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Drives for companies"
                placeholder="Select Companies"
              />
            )}
          />

          <Autocomplete
            multiple
            id="tags-standard"
            options={reserverdForDropDown}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Reserved for"
                placeholder="Select Options"
              />
            )}
          />
        </Grid>
        <Grid item xs={3}>
          ff
        </Grid>
        <Grid item xs={3}>
          c1
        </Grid>
        <Grid item xs={9}>
          <Button variant="contained" color="primary" onClick={() => {}}>
            Add Vehicle
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddUser;
