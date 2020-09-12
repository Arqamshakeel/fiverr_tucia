import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import VehiclesTab from "./VehiclesTab/VehiclesTab";
import VehicleTypeTab from "./VehicleTypeTab";
import VehicleTagTab from "./VehicleTagTab";
import ArchiveTab from "./ArchiveTab/ArchiveTab";
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Main() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Vehicles" {...a11yProps(0)} />
          <Tab label="Vehicle types" {...a11yProps(1)} />
          <Tab label="Tags" {...a11yProps(2)} />
          <Tab label="Permits" {...a11yProps(3)} />
          <Tab label="Archive" {...a11yProps(4)} />
          <Tab label="Vehicle classes" {...a11yProps(5)} />
          <Tab label="Booking options" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <VehiclesTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <VehicleTypeTab />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <VehicleTagTab />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Permits
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ArchiveTab />
      </TabPanel>
      <TabPanel value={value} index={5}>
        Vehicle classes
      </TabPanel>
      <TabPanel value={value} index={6}>
        Booking options
      </TabPanel>
    </div>
  );
}
