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
import MenuIcon from "@material-ui/icons/Menu";
import SettingsIcon from "@material-ui/icons/Settings";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import DnsIcon from "@material-ui/icons/Dns";
const CustomTabs = (props) => {
  const redirect = () => {
    props.history.push("/dispatch/vehicles/edit");
  };
  React.useEffect(redirect, []);
  return (
    <List>
      <ListItem button>
        <ListItemIcon>
          <MenuIcon />
        </ListItemIcon>
        <ListItemText primary={"Menu"} />
      </ListItem>
      <Divider />
      <ListItem button onClick={() => props.history.push("/dispatch/general")}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary={"General"} />
      </ListItem>
      <Divider />
      <ListItem
        button
        onClick={() => props.history.push("/dispatch/users/edit")}
      >
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary={"Users"} />
      </ListItem>
      <Divider />
      <ListItem
        button
        onClick={() => props.history.push("/dispatch/vehicles/edit")}
      >
        <ListItemIcon>
          <LocalTaxiIcon />
        </ListItemIcon>
        <ListItemText primary={"Vehicles"} />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary={"Zones"} />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <ImportExportIcon />
        </ListItemIcon>
        <ListItemText primary={"Tariffs"} />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <LocalActivityIcon />
        </ListItemIcon>
        <ListItemText primary={"Point of interests"} />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <PhoneIphoneIcon />
        </ListItemIcon>
        <ListItemText primary={"Driver's App"} />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <NotificationsActiveIcon />
        </ListItemIcon>
        <ListItemText primary={"Notifications"} />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <DnsIcon />
        </ListItemIcon>
        <ListItemText primary={"Planning"} />
      </ListItem>
      <Divider />
    </List>
  );
};

export default withRouter(CustomTabs);
