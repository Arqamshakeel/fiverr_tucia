import React from "react";
import { Switch, Route } from "react-router-dom";
import Test from "../Test";

import VehicleScreenMain from "../Screens/Vehicles/Main";
import UserScreenMain from "../Screens/Users/Main";
// import General from "../Screens/general/General";
import GeneralTabs from "../Screens/general/GeneralTabs";
import Search from "../Screens/dispatcher panel/search/Search";
import Dispatcher from "../Screens/dispatcher panel/dispatcherScreen/Dispatcher";
import ClosedJobs from "../Screens/dispatcher panel/closedjobs/ClosedJobs";
import AddVehicle from "../Screens/Vehicles/VehiclesTab/AddVehicle";
import AddUser from "../Screens/Users/UsersTab/AddUser";
import Suspensions from "../Screens/dispatcher panel/DriverSuspensions/Suspensions";
import Customers from "../Screens/dispatcher panel/Customers/Customers";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Test} />
      <Route
        path="/dispatch/vehicles/edit"
        exact
        component={VehicleScreenMain}
      />
      <Route path="/dispatch/vehicles/add" exact component={AddVehicle} />
      <Route path="/dispatch/users/add" exact component={AddUser} />
      <Route path="/dispatch/general" exact component={GeneralTabs} />
      <Route path="/dispatch/dispatcher" exact component={Dispatcher} />
      <Route path="/dispatch/search" exact component={Search} />
      <Route path="/dispatch/users/edit" exact component={UserScreenMain} />
      <Route path="/dispatch/closedjobs" exact component={ClosedJobs} />
      <Route path="/dispatch/suspensions" exact component={Suspensions} />
      <Route path="/dispatch/customers" exact component={Customers} />
    </Switch>
  );
};
export default Routes;
