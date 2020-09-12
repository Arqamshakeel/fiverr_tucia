import React from "react";
import PropTypes from "prop-types";
import {
  TableRow,
  TableCell,
  Button,
  Collapse,
  Box,
  Typography,
  IconButton,
  Grid,
  Chip,
  Tab,
  AppBar,
  Tabs,
  Checkbox,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const UserTabTableRow = ({ row, setRows, rows }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center">{row.driver}</TableCell>
        <TableCell align="center">{row.dispatcher}</TableCell>
        <TableCell align="center">{row.username}</TableCell>
        <TableCell align="center">******</TableCell>
        <TableCell align="center">{row.firstname}</TableCell>
        <TableCell align="center">{row.lastname}</TableCell>
        <TableCell align="center">{row.phone}</TableCell>
        <TableCell align="center">{row.drivinglicense}</TableCell>
        <TableCell align="center">{row.operatorlicense}</TableCell>

        <TableCell align="center">
          <Button>
            <DeleteIcon
              onClick={() => {
                setRows(rows.filter((item) => item.id !== row.id));
              }}
            />
          </Button>
        </TableCell>
        <TableCell align="center">
          <Button>
            <EditIcon />
          </Button>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={13}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Advanced Options
              </Typography>
            </Box>
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
              >
                <Tab label="General" {...a11yProps(0)} />
                <Tab label="Driver" {...a11yProps(1)} />
                <Tab label="Phone Options" {...a11yProps(2)} />
                <Tab label="Permits" {...a11yProps(3)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <Grid container spacing={0}>
                <Grid item xs={6}>
                  <Checkbox checked={row.general.messenger} /> Allow as
                  Messenger
                  <br></br>
                  <h4>Tags</h4>
                  {row.general.tags.map((item) => (
                    <Chip label={item} key={item} color="primary" />
                  ))}
                </Grid>
                <Grid item xs={6}>
                  <h4>Address</h4> {row.general.address}
                  <h4>Note</h4> {row.general.note}
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <h4>Fare charge rate</h4>
              {row.drivertab.farecharges}%
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Checkbox checked={row.phoneoption.enable} /> Enable phone
              <br />
              {row.phoneoption.enable && (
                <Grid container spacing={0}>
                  <Grid item xs={6}>
                    <h4>User</h4>
                    {row.phoneoption.user}
                    <h4>Port</h4>
                    {row.phoneoption.port}
                  </Grid>
                  <Grid item xs={6}>
                    <h4>Expires</h4>
                    {row.phoneoption.expires}
                    <h4>Domain</h4>
                    {row.phoneoption.domain}
                  </Grid>
                </Grid>
              )}
            </TabPanel>
            <TabPanel value={value} index={3}>
              Permits
            </TabPanel>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default UserTabTableRow;
