import React from "react";
import { withRouter } from "react-router-dom";
import {
  ListItem,
  ListItemIcon,
  List,
  ListItemText,
  Divider,
} from "@material-ui/core";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import SearchIcon from "@material-ui/icons/Search";
import MessageIcon from "@material-ui/icons/Message";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import BlockIcon from "@material-ui/icons/Block";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import MapIcon from "@material-ui/icons/Map";
const DispatcherTabs = (props) => {
  const redirect = () => {
    props.history.push("/dispatch/dispatcher");
  };
  React.useEffect(redirect, []);
  return (
    <List>
      <ListItem
        button
        onClick={() => props.history.push("/dispatch/dispatcher")}
      >
        <ListItemIcon>
          <MapIcon />
        </ListItemIcon>
        <ListItemText primary={"Search Jobs"} />
      </ListItem>
      <Divider />
      <ListItem button onClick={() => props.history.push("/dispatch/search")}>
        <ListItemIcon>
          <SearchIcon />
        </ListItemIcon>
        <ListItemText primary={"Jobs"} />
      </ListItem>
      <Divider />
      <ListItem
        button
        onClick={() => props.history.push("/dispatch/closedjobs")}
      >
        <ListItemIcon>
          <AssignmentTurnedInIcon />
        </ListItemIcon>
        <ListItemText primary={"Closed jobs"} />
      </ListItem>
      <Divider />
      <ListItem
        button
        onClick={() => props.history.push("/dispatch/customers")}
      >
        <ListItemIcon>
          <PeopleAltIcon />
        </ListItemIcon>
        <ListItemText primary={"Customers"} />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <NotificationsActiveIcon />
        </ListItemIcon>
        <ListItemText primary={"Alarms"} />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <MessageIcon />
        </ListItemIcon>
        <ListItemText primary={"Messages"} />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <PriorityHighIcon />
        </ListItemIcon>
        <ListItemText primary={"Alerts"} />
      </ListItem>
      <Divider />
      <ListItem
        button
        onClick={() => props.history.push("/dispatch/suspensions")}
      >
        <ListItemIcon>
          <BlockIcon />
        </ListItemIcon>
        <ListItemText primary={"Suspensions"} />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <AccountBalanceIcon />
        </ListItemIcon>
        <ListItemText primary={"Banking"} />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary={"Preferences"} />
      </ListItem>
      <Divider />

      <ListItem button>
        <ListItemIcon>
          <LocalTaxiIcon />
        </ListItemIcon>
        <ListItemText primary={"Vehicles"} />
      </ListItem>
      <Divider />
    </List>
  );
};

export default withRouter(DispatcherTabs);
