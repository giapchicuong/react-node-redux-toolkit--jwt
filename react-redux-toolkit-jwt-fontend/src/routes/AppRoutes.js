import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../components/Home/Home";
import Users from "../components/ManageUsers/Users";
import GroupRole from "../components/GroupRole/GroupRole";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Roles from "../components/Roles/Roles";
import Groups from "../components/Groups/Groups";

const AppRoutes = () => {
  return (
    <>
      <Switch>
        <PrivateRoutes path="/" component={Home} exact={true} />
        <PrivateRoutes path="/users" component={Users} />
        <PrivateRoutes path="/roles" component={Roles} />
        <PrivateRoutes path="/group-role" component={GroupRole} />
        <PrivateRoutes path="/groups" component={Groups} />

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="*">
          <div className="container">404 not Error...</div>
        </Route>
      </Switch>
    </>
  );
};

export default AppRoutes;
